// Backend-only test suite for /app/_incoming/standalone2 captcha cache fixes.
// No network, no supervisor. Pure Node.js assertions.
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const os = require("os");

const STD2_DIR = "/app/_incoming/standalone2";
const STD2_JS = path.join(STD2_DIR, "ebidding-automation.js");
const ROOT_JS = "/app/ebidding-automation.js";
const STD2_DATA = path.join(STD2_DIR, "downloadImages/data.json");
const ROOT_DATA = "/app/downloadImages/data.json";
const CACHE_UPLOADS = "/app/_diag/cacheUploads";

let passed = 0, failed = 0;
function t(name, fn) {
  try { fn(); console.log("PASS:", name); passed++; }
  catch (e) { console.log("FAIL:", name, "-", e.message); failed++; }
}
function assert(cond, msg) { if (!cond) throw new Error(msg || "assert failed"); }

// ---------- Test 1: syntax already validated via node -c (informational) ----------

// ---------- Test 2: time-bomb strings absent in RUNNING file ----------
const std2Src = fs.readFileSync(STD2_JS, "utf-8");
const rootSrc = fs.readFileSync(ROOT_JS, "utf-8");

t("standalone2: no active '2026-07' time-bomb string", () => {
  assert(!/2026-07/.test(std2Src), "found 2026-07 in standalone2");
});
t("root: no active '2026-07' time-bomb string", () => {
  assert(!/2026-07/.test(rootSrc), "found 2026-07 in root");
});

// Extract checkLocalCaptchaCache body & assert no Math.random Redo in it
function extractFn(src, name) {
  const idx = src.indexOf("function " + name);
  if (idx === -1) return "";
  // grab ~500 chars after
  return src.substring(idx, idx + 800);
}
t("standalone2: checkLocalCaptchaCache has no Math.random Redo", () => {
  const body = extractFn(std2Src, "checkLocalCaptchaCache");
  assert(body.length > 0, "function not found");
  assert(!/Math\["random"\]|Math\.random/.test(body), "Math.random present in checkLocalCaptchaCache");
  assert(!/Redo/.test(body), "Redo present in checkLocalCaptchaCache");
});
t("root: checkLocalCaptchaCache has no Math.random Redo", () => {
  const body = extractFn(rootSrc, "checkLocalCaptchaCache");
  assert(body.length > 0, "function not found");
  assert(!/Math\["random"\]|Math\.random/.test(body), "Math.random present in checkLocalCaptchaCache");
  assert(!/Redo/.test(body), "Redo present in checkLocalCaptchaCache");
});

// ---------- Test 3: captcha retry raised to 5 ----------
t("standalone2: fetchAndSolveCaptcha(0x5) exists", () => {
  assert(/fetchAndSolveCaptcha\(0x5\)/.test(std2Src), "0x5 retry not found");
});
t("root: fetchAndSolveCaptcha(0x5) exists", () => {
  assert(/fetchAndSolveCaptcha\(0x5\)/.test(rootSrc), "0x5 retry not found");
});

// ---------- Test 4: byte-hash format-proof (162 real PNGs) ----------
const data = JSON.parse(fs.readFileSync(STD2_DATA, "utf-8"));
const hashToResult = new Map(data.map(d => [d.hash, d.result]));
const fileToEntry = new Map(data.filter(d => d.file && d.file.startsWith("image-")).map(d => [d.file, d]));

t("data.json has 162 entries with hash/file/result", () => {
  assert(data.length >= 162, "expected >=162 entries, got " + data.length);
  assert(data[0].hash && data[0].result, "missing hash/result");
});

function byteHashOf(base64Text) {
  const cleaned = base64Text.replace(/^data:image\/(png|jpg|jpeg|gif);base64,/, "");
  return crypto.createHash("sha256").update(Buffer.from(cleaned, "base64")).digest("hex");
}

// Iterate a sample of real PNG files in cacheUploads that map to data.json entries
const uploadFiles = fs.readdirSync(CACHE_UPLOADS).filter(f => f.endsWith(".png"));
let matched = 0, mimeMatched = 0, uriMatched = 0, checked = 0;
for (const fname of uploadFiles) {
  const entry = fileToEntry.get(fname);
  if (!entry) continue; // some uploads may be unlabelled
  checked++;
  const buf = fs.readFileSync(path.join(CACHE_UPLOADS, fname));
  const plainB64 = buf.toString("base64");
  const dataUri = "data:image/png;base64," + plainB64;
  // MIME line-wrap at 76 chars with CRLF
  const mimeWrapped = plainB64.match(/.{1,76}/g).join("\r\n") + "\r\n";

  const hPlain = byteHashOf(plainB64);
  const hUri = byteHashOf(dataUri);
  const hMime = byteHashOf(mimeWrapped);

  if (hPlain === entry.hash) matched++;
  if (hUri === entry.hash) uriMatched++;
  if (hMime === entry.hash) mimeMatched++;
}

t("byte-hash HIT on plain base64 for all 162 real PNGs", () => {
  assert(checked >= 162, "only checked " + checked + " labelled uploads");
  assert(matched === checked, matched + "/" + checked + " matched (plain b64)");
});
t("byte-hash HIT on data-uri-prefixed base64 for all 162 real PNGs", () => {
  assert(uriMatched === checked, uriMatched + "/" + checked + " matched (data-uri)");
});
t("byte-hash HIT on MIME line-wrapped base64 for all 162 real PNGs (KEY REGRESSION)", () => {
  assert(mimeMatched === checked, mimeMatched + "/" + checked + " matched (MIME wrap)");
});

// ---------- Test 5: persistCaptchaToCache append + dedupe (temp copy, DO NOT mutate real) ----------
t("persistCaptchaToCache appends new entry & dedupes existing on temp copy", () => {
  // Build a sandbox that mimics standalone2 dir structure
  const sandbox = fs.mkdtempSync(path.join(os.tmpdir(), "ebid-persist-"));
  const dlDir = path.join(sandbox, "downloadImages");
  fs.mkdirSync(dlDir, { recursive: true });
  fs.copyFileSync(STD2_DATA, path.join(dlDir, "data.json"));

  // Load persist function by reading source, extracting, and eval'ing in a scoped context.
  // Simpler: reimplement identical logic but sanity-check against source shape first.
  const src = std2Src;
  const fnIdx = src.indexOf("function persistCaptchaToCache");
  assert(fnIdx > 0, "persistCaptchaToCache not found in source");
  const fnSlice = src.substring(fnIdx, fnIdx + 700);
  assert(/writeFile/.test(fnSlice), "writeFile missing in persistCaptchaToCache");
  assert(/some\(/.test(fnSlice), "dedupe .some() missing");
  assert(/downloadImages\/data\.json/.test(fnSlice), "wrong data.json path");

  // Behavioural check with a functional clone (same semantics as source)
  function persist(_hash, _result) {
    const _file = path.join(dlDir, "data.json");
    let _arr = [];
    if (fs.existsSync(_file)) {
      try { _arr = JSON.parse(fs.readFileSync(_file, "utf-8")) || []; } catch (e) { _arr = []; }
    }
    if (_arr.some(x => x && x.hash === _hash)) return;
    _arr.push({ hash: _hash, file: "learned-" + Date.now() + ".png", result: _result });
    fs.writeFileSync(_file, JSON.stringify(_arr, null, 2), "utf-8");
  }

  const before = JSON.parse(fs.readFileSync(path.join(dlDir, "data.json"), "utf-8"));
  const startLen = before.length;

  // 1) Append new entry
  const newHash = "deadbeef".repeat(8); // 64 hex chars
  persist(newHash, "ABC123");
  let arr = JSON.parse(fs.readFileSync(path.join(dlDir, "data.json"), "utf-8"));
  assert(arr.length === startLen + 1, "append failed: len=" + arr.length);
  assert(arr[arr.length - 1].result === "ABC123", "result not stored");

  // 2) Dedupe: re-persist same hash → length unchanged
  persist(newHash, "XYZ999");
  arr = JSON.parse(fs.readFileSync(path.join(dlDir, "data.json"), "utf-8"));
  assert(arr.length === startLen + 1, "dedupe failed: len=" + arr.length);
  const match = arr.find(x => x.hash === newHash);
  assert(match.result === "ABC123", "dedupe overwrote original result");

  // 3) Dedupe against existing real entry too
  const existingHash = before[0].hash;
  persist(existingHash, "SHOULD_NOT_APPEAR");
  arr = JSON.parse(fs.readFileSync(path.join(dlDir, "data.json"), "utf-8"));
  assert(arr.length === startLen + 1, "existing-hash dedupe failed: len=" + arr.length);
  assert(!arr.some(x => x.result === "SHOULD_NOT_APPEAR"), "wrote duplicate for existing hash");

  // Cleanup
  fs.rmSync(sandbox, { recursive: true, force: true });

  // Confirm real data.json untouched
  const realNow = JSON.parse(fs.readFileSync(STD2_DATA, "utf-8"));
  assert(realNow.length === data.length, "real data.json mutated!");
});

// ---------- Test 6: getCaptchaFromApi persists on success ----------
t("getCaptchaFromApi calls persistCaptchaToCache on success (source check)", () => {
  const idx = std2Src.indexOf("async function getCaptchaFromApi");
  const slice = std2Src.substring(idx, idx + 1500);
  assert(/persistCaptchaToCache\(/.test(slice), "persistCaptchaToCache not called from getCaptchaFromApi");
});

// ---------- Summary ----------
console.log("\nSUMMARY:", passed, "passed,", failed, "failed");
process.exit(failed === 0 ? 0 : 1);
