const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const oldData = JSON.parse(fs.readFileSync(path.join(__dirname, "big_data.json"), "utf-8"));
const resultByFile = {};
oldData.forEach((e) => { if (e.file) resultByFile[e.file] = e.result; });

const imgDir = path.join(__dirname, "cacheUploads");
const files = fs.readdirSync(imgDir).filter((f) => f.endsWith(".png"));

const out = [];
let labelled = 0, unlabelled = 0;
for (const f of files) {
  const result = resultByFile[f];
  if (result === undefined) { unlabelled++; continue; }
  const bytes = fs.readFileSync(path.join(imgDir, f));
  const hash = crypto.createHash("sha256").update(bytes).digest("hex"); // BYTE hash (format-proof)
  out.push({ hash, file: f, result });
  labelled++;
}

const target = path.join(__dirname, "..", "_incoming", "standalone2", "downloadImages", "data.json");
fs.writeFileSync(target, JSON.stringify(out, null, 2), "utf-8");
console.log("Rebuilt cache entries:", labelled, "| skipped (no label):", unlabelled);
console.log("Written to:", target);
console.log("Sample:", JSON.stringify(out[0]));
