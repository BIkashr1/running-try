#!/usr/bin/env node
const a0_0x5cae94 = a0_0x5ca0;
((function (_0x1b6b4d, _0x21951f) {
  const _0x173fea = a0_0x5ca0,
    _0x2b3eb0 = _0x1b6b4d();
  while (!![]) {
    try {
      const _0x67f12 =
        parseInt("640250mhEAUB") / 0x1 +
        -parseInt("943152iwFNvx") / 0x2 +
        (-parseInt("1963599EEVUzu") / 0x3) * (parseInt("4XZYxmq") / 0x4) +
        (parseInt("235UkqLoD") / 0x5) * (parseInt("33786slpKSJ") / 0x6) +
        parseInt("3269588KXieHk") / 0x7 +
        (-parseInt("1715672tvlDrF") / 0x8) * (-parseInt("18XpCsND") / 0x9) +
        -parseInt("3170150MQntun") / 0xa;
      if (_0x67f12 === _0x21951f) break;
      else _0x2b3eb0["push"](_0x2b3eb0["shift"]());
    } catch (_0x766146) {
      _0x2b3eb0["push"](_0x2b3eb0["shift"]());
    }
  }
})(a0_0x51a9, 0x57599),
  (process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"),
  require("dotenv")["config"]());
const axios = require("axios"),
  { wrapper } = require("axios-cookiejar-support"),
  { CookieJar } = require("tough-cookie"),
  fs = require("fs"),
  path = require("path"),
  crypto = require("crypto"),
  https = require("https");
https["globalAgent"]["keepAlive"] = !![];
const CONFIG = {
    BASE_URL: process.env.BASE_URL || "https://rise.eye2serve.com:8443",
    USER_ID: process.env.USER_ID || "2210181",
    PASSWORD: process.env.PASSWORD || "Shine@2027",
    PLANT: process.env.PLANT || "6924",
    CSV_FILE: process.env.CSV_FILE || "./files/input2.csv",
    DELETE_CSV_FILE: process.env.DELETE_CSV_FILE || "./files/delete.csv",
    CSV_BATCH_SIZE: parseInt(process.env.CSV_BATCH_SIZE || "3", 0xa),
    AUTO_UPDATE_CSV_BIDS:
      (process.env.AUTO_UPDATE_CSV_BIDS || "false")["toLowerCase"]() === "true",
    LOOP_CONTINUOUS:
      (process.env.LOOP_CONTINUOUS || "true")["toLowerCase"]() === "true",
    DRY_RUN: (process.env.DRY_RUN || "false")["toLowerCase"]() === "true",
  },
  LOG_COLORS = {
    reset: "\x1b[0m",
    bright: "\u001b[1m",
    green: "\u001b[32m",
    yellow: "\u001b[33m",
    red: "\x1b[31m",
    cyan: "\u001b[36m",
    magenta: "\u001b[35m",
    blue: "\u001b[34m",
    gray: "\u001b[90m",
  };
function ts() {
  return "";
}
function log(_0x3981ba) {
  const _0x1940cf = a0_0x5cae94;
  console["log"](
    "" + LOG_COLORS["gray"] + ts() + LOG_COLORS["reset"] + "\x20" + _0x3981ba,
  );
}
function a0_0x5ca0(_0x353675, _0x4d854d) {
  _0x353675 = _0x353675 - 0xf4;
  const _0x51a94f = a0_0x51a9();
  let _0x5ca0ff = _0x51a94f[_0x353675];
  if (a0_0x5ca0["WoXvdX"] === undefined) {
    var _0x28f9eb = function (_0x34479c) {
      const _0x4a2f02 =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let _0x577fe7 = "",
        _0xe311e6 = "";
      for (
        let _0xb6cdeb = 0x0, _0x39d94c, _0x44a70e, _0x449ec0 = 0x0;
        (_0x44a70e = _0x34479c["charAt"](_0x449ec0++));
        ~_0x44a70e &&
        ((_0x39d94c =
          _0xb6cdeb % 0x4 ? _0x39d94c * 0x40 + _0x44a70e : _0x44a70e),
        _0xb6cdeb++ % 0x4)
          ? (_0x577fe7 += String["fromCharCode"](
              0xff & (_0x39d94c >> ((-0x2 * _0xb6cdeb) & 0x6)),
            ))
          : 0x0
      ) {
        _0x44a70e = _0x4a2f02["indexOf"](_0x44a70e);
      }
      for (
        let _0xcec326 = 0x0, _0x47876f = _0x577fe7["length"];
        _0xcec326 < _0x47876f;
        _0xcec326++
      ) {
        _0xe311e6 +=
          "%" +
          ("00" + _0x577fe7["charCodeAt"](_0xcec326)["toString"](0x10))[
            "slice"
          ](-0x2);
      }
      return decodeURIComponent(_0xe311e6);
    };
    const _0x16d055 = function (_0x39a6f0, _0x268443) {
      let _0x1dda35 = [],
        _0x3e2824 = 0x0,
        _0x5f2a7b,
        _0x199913 = "";
      _0x39a6f0 = _0x28f9eb(_0x39a6f0);
      let _0x1faac4;
      for (_0x1faac4 = 0x0; _0x1faac4 < 0x100; _0x1faac4++) {
        _0x1dda35[_0x1faac4] = _0x1faac4;
      }
      for (_0x1faac4 = 0x0; _0x1faac4 < 0x100; _0x1faac4++) {
        ((_0x3e2824 =
          (_0x3e2824 +
            _0x1dda35[_0x1faac4] +
            _0x268443["charCodeAt"](_0x1faac4 % _0x268443["length"])) %
          0x100),
          (_0x5f2a7b = _0x1dda35[_0x1faac4]),
          (_0x1dda35[_0x1faac4] = _0x1dda35[_0x3e2824]),
          (_0x1dda35[_0x3e2824] = _0x5f2a7b));
      }
      ((_0x1faac4 = 0x0), (_0x3e2824 = 0x0));
      for (let _0x1bb92a = 0x0; _0x1bb92a < _0x39a6f0["length"]; _0x1bb92a++) {
        ((_0x1faac4 = (_0x1faac4 + 0x1) % 0x100),
          (_0x3e2824 = (_0x3e2824 + _0x1dda35[_0x1faac4]) % 0x100),
          (_0x5f2a7b = _0x1dda35[_0x1faac4]),
          (_0x1dda35[_0x1faac4] = _0x1dda35[_0x3e2824]),
          (_0x1dda35[_0x3e2824] = _0x5f2a7b),
          (_0x199913 += String["fromCharCode"](
            _0x39a6f0["charCodeAt"](_0x1bb92a) ^
              _0x1dda35[(_0x1dda35[_0x1faac4] + _0x1dda35[_0x3e2824]) % 0x100],
          )));
      }
      return _0x199913;
    };
    ((a0_0x5ca0["bLwpeW"] = _0x16d055),
      (a0_0x5ca0["yOAGID"] = {}),
      (a0_0x5ca0["WoXvdX"] = !![]));
  }
  const _0x26499d = _0x51a94f[0x0],
    _0x26784c = _0x353675 + _0x26499d,
    _0x135a74 = a0_0x5ca0["yOAGID"][_0x26784c];
  return (
    !_0x135a74
      ? (a0_0x5ca0["pHpVGr"] === undefined && (a0_0x5ca0["pHpVGr"] = !![]),
        (_0x5ca0ff = a0_0x5ca0["bLwpeW"](_0x5ca0ff, _0x4d854d)),
        (a0_0x5ca0["yOAGID"][_0x26784c] = _0x5ca0ff))
      : (_0x5ca0ff = _0x135a74),
    _0x5ca0ff
  );
}
function logOk(_0xd54d64) {
  const _0x1a69c5 = a0_0x5cae94;
  console["log"](
    "" +
      LOG_COLORS["green"] +
      ts() +
      "\x20✓\x20" +
      _0xd54d64 +
      LOG_COLORS["reset"],
  );
}
function logWarn(_0xa86ebd) {
  const _0x4088d8 = a0_0x5cae94;
  console["log"](
    "" + LOG_COLORS["yellow"] + ts() + " ⚠ " + _0xa86ebd + LOG_COLORS["reset"],
  );
}
function logErr(_0x3c4c8a) {
  const _0x5f5bf0 = a0_0x5cae94;
  console["error"](
    "" + LOG_COLORS["red"] + ts() + " ✗ " + _0x3c4c8a + LOG_COLORS["reset"],
  );
}
function logInfo(_0x14db3b) {
  const _0x59cb5e = a0_0x5cae94;
  console["log"](
    "" + LOG_COLORS["cyan"] + ts() + " ℹ " + _0x14db3b + LOG_COLORS["reset"],
  );
}
function logBold(_0x2b6c0a) {
  const _0x19e707 = a0_0x5cae94;
  console["log"](
    "" +
      LOG_COLORS["bright"] +
      LOG_COLORS["magenta"] +
      ts() +
      " ★ " +
      _0x2b6c0a +
      LOG_COLORS["reset"],
  );
}
const jar = new CookieJar(),
  // NOTE: axios-cookiejar-support (http-cookie-agent, undici-based) apna khud ka
  // cookie-aware keep-alive agent manage karta hai — isliye yahan custom httpsAgent/
  // httpAgent pass NAHI karna (warna "does not support for use with other http(s).Agent").
  // Connection reuse / keep-alive already undici ke through active hai.
  client = wrapper(
    axios["create"]({
      jar: jar,
      baseURL: CONFIG["BASE_URL"],
      withCredentials: !![],
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      auth: { username: CONFIG["USER_ID"], password: CONFIG["PASSWORD"] },
      maxRedirects: 0xa,
      timeout: parseInt(process.env.HTTP_TIMEOUT_MS || "30000", 10),
    }),
  );
let csrfToken = null,
  orderListData = null,
  plantConf = null,
  serverTime = null,
  bidRows = [],
  csvData = [],
  deleteList = [],
  currentSlotNumber = null,
  csvBatchState = {
    submittedKeys: {},
    activeKeys: [],
    pendingBatches: [],
    groupsByKey: {},
    autoRunning: ![],
    completed: ![],
  };
// ── Per-window stats + SPI-1164 priority helper (added) ──
let windowStats = null;
let captchaPool = []; // pre-solved captchas ready to use INSTANTLY (fresh, window-scoped)
async function _solveOneToPool() {
  try {
    const img = await fetchCaptcha(true);
    if (!img) return;
    const sol = await solveCaptcha(img);
    if (sol) captchaPool.push(sol);
  } catch (e) {}
}
function fillCaptchaPoolBg(n) {
  for (let i = 0; i < n; i++) _solveOneToPool(); // fire in parallel, don't await
}
function newWindowStats(slot) {
  return {
    slot: slot || "",
    fetches: 0,
    matched: 0,
    skippedDelete: 0,
    submittedBatches: 0,
    handled1164: 0,
    uncertain: 0,
    netLatencyMs: null,
    captchaPolls: 0,
    captchaUnlockMs: null,
    captchaFetchMs: null,
    firstSubmitMs: null,
  };
}
function isSpi1164(spi) {
  return String(spi || "").replace(/[^0-9]/g, "").trim() === "1164";
}
// HTTPS round-trip latency probe to SAP (like latency.js)
async function measureLatency() {
  const t0 = Date.now();
  try {
    await client.head("/");
  } catch (e) {
    /* status/auth errors still give a valid round-trip time */
  }
  return Date.now() - t0;
}
async function login() {
  const _0x37382f = a0_0x5cae94;
  log("Logging in to SAP...");
  try {
    const _0x2fbadd = await client["get"](
      "/sap/opu/odata/sap/ZVC_TRANSPORTER_SRV/",
      { headers: { "X-Csrf-Token": "Fetch" } },
    );
    csrfToken = _0x2fbadd["headers"]["x-csrf-token"];
    if (csrfToken)
      logOk(
        "Login successful. CSRF token obtained of length: " +
          csrfToken["length"] +
          "...",
      );
    else {
      if ("bLSpt" === "xNAXF") _0x5db5bf = _0x29d795;
      else {
        logWarn(
          "Login response received but no CSRF token in headers. Trying alternate fetch...",
        );
        const _0x2260a9 = await client["get"](
          "/sap/opu/odata/sap/ZVC_TRANSPORTER_SRV/SessionSet('')",
          { headers: { "X-Csrf-Token": "Fetch" } },
        );
        csrfToken = _0x2260a9["headers"]["x-csrf-token"];
        if (csrfToken)
          logOk(
            "CSRF token obtained via SessionSet: " +
              csrfToken["substring"](0x0, 0xc) +
              "...",
          );
        else throw new Error("Could not obtain CSRF token from any endpoint");
      }
    }
    return !![];
  } catch (_0x1cc045) {
    if ("vPzDs" === "EhXJi") {
      const _0x2ce651 = (_0x5d0f72["Message"] || "")
        ["replaceAll"]("0", "")
        ["trim"]();
      return (
        _0x15032d("Captcha issue: " + _0x2ce651),
        { type: "I", message: _0x2ce651 }
      );
    } else {
      if (_0x1cc045["response"]) {
        logErr(
          "Login failed: HTTP " +
            _0x1cc045["response"]["status"] +
            " - " +
            _0x1cc045["response"]["statusText"],
        );
        _0x1cc045["response"]["status"] === 0x191 &&
          ("YyCEr" !== "lgknn"
            ? logErr(
                "Invalid\x20credentials.\x20Check\x20USER_ID\x20and\x20PASSWORD\x20in\x20.env",
              )
            : ((_0x369271 = _0x4c0c8d["headers"]["x-csrf-token"]),
              _0x4b69b9(
                "CSRF token refreshed: " +
                  _0x227cb1["substring"](0x0, 0xc) +
                  "...",
              )));
        if (_0x1cc045["response"]["headers"]["x-csrf-token"])
          return (
            (csrfToken = _0x1cc045["response"]["headers"]["x-csrf-token"]),
            logWarn(
              "Got\x20CSRF\x20token\x20despite\x20error:\x20" +
                csrfToken["substring"](0x0, 0xc) +
                "...",
            ),
            !![]
          );
      } else logErr("Login error: " + _0x1cc045["message"]);
      return ![];
    }
  }
}
async function refreshCsrfToken() {
  const _0x242c19 = a0_0x5cae94;
  try {
    if ("CsGDD" === "YMNyk") {
      const _0x239dbd = _0x1b917d["resolve"](_0x4d766f["CSV_FILE"]);
      return (
        _0x5f9f58["writeFileSync"](_0x239dbd, _0x4d5747(_0x25526a), "utf-8"),
        _0x208cc9["forEach"]((_0x273004) => {
          const _0x41f4ec = _0x242c19;
          (_0x273004["DestCityDesc"] || "")["trim"]() === _0x449d02 &&
            (_0x273004["Spi"] || "")["trim"]() === _0x3729fa &&
            ((_0x273004["BiddingAmount"] = _0x4beae1(_0x2c1a8d)["toFixed"]()),
            (_0x273004["AvgWtBidAmount"] = _0x36edd3(_0x247bda)["toFixed"]()));
        }),
        _0x483ea5(
          "[AUTO-FIX] Updated CSV and memory for City: " +
            _0x5ec27b +
            ",\x20SPI:\x20" +
            _0x2a710e +
            "\x20to\x20new\x20amount:\x20" +
            _0x1955e6,
        ),
        !![]
      );
    } else {
      const _0x34cab7 = await client["get"](
        "/sap/opu/odata/sap/ZVC_TRANSPORTER_SRV/",
        { headers: { "X-Csrf-Token": "Fetch" } },
      );
      _0x34cab7["headers"]["x-csrf-token"] &&
        ((csrfToken = _0x34cab7["headers"]["x-csrf-token"]),
        logOk(
          "CSRF\x20token\x20refreshed:\x20" +
            csrfToken["substring"](0x0, 0xc) +
            "...",
        ));
    }
  } catch (_0x227f99) {
    "zNdjC" !== "zNdjC"
      ? ((_0x1940d7["BiddingRank"] = _0x3335c5["BiddingRank"]),
        _0x444c63["L1BidAmount"] !== _0x56237d &&
          _0x345b69["L1BidAmount"] !== null &&
          (_0x4af210["L1BidAmount"] = _0x5d49fd(_0xcaa0b0["L1BidAmount"])[
            "toFixed"
          ]()))
      : _0x227f99["response"] &&
        _0x227f99["response"]["headers"]["x-csrf-token"] &&
        ("cEDka" === "cEDka"
          ? (csrfToken = _0x227f99["response"]["headers"]["x-csrf-token"])
          : _0x43bfee(
              "Batch " + _0x313d45 + " processed, moving to next batch...",
            ));
  }
}
async function fetchBidOrderList() {
  const _0x4fd2f7 = a0_0x5cae94,
    _0x2bb7b0 = {
      IvStatus: "",
      IvBiddingStatus: "2",
      NavBidSchVendors: [],
      NavBidMessage: [],
      NavBidPlntConf: [],
      NavBidCurrDtDm: { CurrDate: "/Date(1467981296000)/", CurrTime: null },
      NavBidToler: [],
      NavBidTolerence: [],
      EvTolerenceAmount: "",
      EvFrieghtPercent: "",
      IvBidBiddingPlantFlag: "",
      NavBidStoIdRange: [],
      NavBidClubId: [],
      NavBidErdatRange: [],
      NavBidShipToVkburRange: [],
      NavBidBiddingPlant: [],
      NavBidBgpRange: [],
      NavBidPackRange: [],
      NavBidKunweRange: [],
      NavBidVendorRange: [
        { Sign: "I", Option: "EQ", Low: CONFIG["USER_ID"], High: "" },
      ],
      NavBidSapOrderIdRange: [],
      NavBidKunagRange: [],
      NavBidBrandRange: [],
      NavBidApplAreaRange: [],
      NavBidVendorStatus: [{ Sign: "I", Option: "EQ", Low: "1", High: "" }],
      NavBidShipFromWerksRange: [
        { Sign: "I", Option: "EQ", Low: CONFIG["PLANT"], High: "" },
      ],
      NavBidSapStoIdRange: [],
      NavBidGradeRange: [],
      NavBidOrderIdRange: [],
      NavBidStateRange: [],
    };
  try {
    const _0x346f0f = await client["post"](
      "/sap/opu/odata/sap/ZVC_TRANSPORTER_SRV/BidOrderListSet",
      _0x2bb7b0,
      { headers: { "X-Csrf-Token": csrfToken } },
    );
    ((orderListData = _0x346f0f["data"]["d"]),
      (plantConf = orderListData["NavBidPlntConf"]["results"][0x0]),
      (bidRows = orderListData["NavBidSchVendors"]["results"]),
      bidRows["forEach"]((_0x482673) => {
        const _0x3d834a = _0x4fd2f7;
        ((_0x482673["BiddingAmount"] = Number(_0x482673["BiddingAmount"])[
          "toFixed"
        ]()),
          (_0x482673["Freight"] = Number(_0x482673["Freight"])["toFixed"]()),
          (_0x482673["ClubFreight"] = Number(_0x482673["ClubFreight"])[
            "toFixed"
          ]()),
          (_0x482673["L1BidAmount"] = Number(_0x482673["L1BidAmount"])[
            "toFixed"
          ]()),
          (_0x482673["AvgWtBidAmount"] = Number(_0x482673["AvgWtBidAmount"])[
            "toFixed"
          ]()),
          (_0x482673["NoOfTruckReq"] =
            _0x482673["NoOfTruckReq"]["toString"]()));
      }));
    const _0x46b6af = orderListData["NavBidCurrDtDm"];
    return (
      logOk("Bid order list fetched: " + bidRows["length"] + " orders"),
      !![]
    );
  } catch (_0x314a61) {
    if (_0x314a61["response"])
      (logErr(
        "BidOrderListSet\x20failed:\x20HTTP\x20" +
          _0x314a61["response"]["status"],
      ),
        _0x314a61["response"]["data"] &&
          _0x314a61["response"]["data"]["error"] &&
          logErr(
            "SAP Error: " +
              _0x314a61["response"]["data"]["error"]["message"]["value"],
          ));
    else {
      if ("grThd" !== "IdQzJ")
        logErr("BidOrderListSet error: " + _0x314a61["message"]);
      else {
        const _0x386bca = [
          _0x2d44dd,
          _0x148c65,
          _0x271d46,
          _0x121e84["SapOrderId"] || "",
          "\x22" +
            (_0x3ece71["DestCityDesc"] || "")["replace"](/"/g, "\x22\x22") +
            "\x22",
          "\x22" +
            (_0x1c7843["Spi"] || "")["replace"](/"/g, "\x22\x22") +
            "\x22",
          _0x8672d3["BiddingAmount"] || "0",
          _0x495ed7["BiddingRank"] || "",
          _0x25eb62["L1BidAmount"] || "0",
          _0x16a01d["AvgWtBidAmount"] || "0",
          _0x24cbad["Freight"] || "0",
          _0x1c9a1c["ClubFreight"] || "0",
          _0x359282["ClubId"] || "",
          _0x5b4936["ShipFromWerks"] || "",
          _0x5119d1["NoOfTruckReq"] || "",
          "\x22" +
            (_0x4af567["KunagName1"] || "")["replace"](/"/g, "\x22\x22") +
            "\x22",
        ];
        _0x37d8e0["push"](_0x386bca["join"](","));
      }
    }
    return ![];
  }
}
async function fetchVendorRankings() {
  const _0x46b31c = a0_0x5cae94;
  if (!bidRows || bidRows["length"] === 0x0) return ![];
  const _0x264f8d = {
    Flag: "1",
    NavEBidVRTrackHisN: bidRows["map"]((_0x33f334) => ({
      Mandt: "",
      SapOrderId: _0x33f334["SapOrderId"],
      Vendor: CONFIG["USER_ID"],
      ChangeNo: "",
      ShipFromWerks: _0x33f334["ShipFromWerks"],
      BiddingDate: plantConf ? plantConf["BiddingDate"] : "",
      SlotNumber: plantConf ? plantConf["SlotNumber"] : "",
      Freight: (_0x33f334["Freight"] || 0x0) + ".000",
      BiddingAmount: (_0x33f334["BiddingAmount"] || 0x0) + ".000",
      AvgWtBidAmount: (_0x33f334["AvgWtBidAmount"] || 0x0) + ".000",
      BiddingRank: _0x33f334["BiddingRank"] || "",
      CreatedOn: null,
      CreatedAt: null,
    })),
    NavEBidVRPlantN: {
      Sign: "I",
      Option: "EQ",
      Low: CONFIG["PLANT"],
      High: "",
    },
    NavEBidVREtTrackHisN: [],
  };
  try {
    const _0xc5f9c7 = await client["post"](
        "/sap/opu/odata/sap/ZVC_TRANSPORTER_SRV/VacVendorRankingNewSet",
        _0x264f8d,
        { headers: { "X-Csrf-Token": csrfToken } },
      ),
      _0x1bb7b2 =
        _0xc5f9c7["data"] &&
        _0xc5f9c7["data"]["d"] &&
        _0xc5f9c7["data"]["d"]["NavEBidVREtTrackHisN"] &&
        _0xc5f9c7["data"]["d"]["NavEBidVREtTrackHisN"]["results"]
          ? _0xc5f9c7["data"]["d"]["NavEBidVREtTrackHisN"]["results"]
          : [];
    return (
      _0x1bb7b2["forEach"]((_0x1e9426) => {
        const _0x550199 = _0x46b31c;
        if ("EPAZd" === "DdTga")
          return (
            _0x474673("Could not fetch captcha during retry."),
            { type: "E", message: "Captcha fetch failed" }
          );
        else {
          const _0x1fe3a8 = bidRows["find"](
            (_0x287a23) => _0x287a23["SapOrderId"] === _0x1e9426["SapOrderId"],
          );
          _0x1fe3a8 &&
            ((_0x1fe3a8["BiddingRank"] = _0x1e9426["BiddingRank"]),
            _0x1e9426["L1BidAmount"] !== undefined &&
              _0x1e9426["L1BidAmount"] !== null &&
              ("lDAVa" !== "AdmTa"
                ? (_0x1fe3a8["L1BidAmount"] = Number(_0x1e9426["L1BidAmount"])[
                    "toFixed"
                  ]())
                : _0x9e8255("⏳ Submitting in " + _0x26ad3f(_0x173d32))));
        }
      }),
      logOk("Vendor rankings updated for " + _0x1bb7b2["length"] + " orders"),
      !![]
    );
  } catch (_0x3816c6) {
    return (
      _0x3816c6["response"]
        ? "BIFCz" === "zvVOJ"
          ? _0x11c62b["stdout"]["write"](
              "\x0d\x20\x20⏳\x20Submitting\x20in\x20" +
                _0x3c8162(_0x2c373f) +
                "   ",
            )
          : logWarn(
              "VacVendorRankingNewSet failed: HTTP " +
                _0x3816c6["response"]["status"],
            )
        : logWarn("VacVendorRankingNewSet error: " + _0x3816c6["message"]),
      ![]
    );
  }
}
function saveRankRecordsToCsv(_0x5800a4) {
  const _0x3b5435 = a0_0x5cae94;
  if (!_0x5800a4 || _0x5800a4["length"] === 0x0) return;
  const _0x3cfeaa = path["resolve"](
      process.env.RANK_CSV_FILE || "./rank_records.csv",
    ),
    _0x15d47b = fs["existsSync"](_0x3cfeaa),
    _0x40ff49 = new Date()["toISOString"](),
    _0x526218 = plantConf ? plantConf["SlotNumber"] : "",
    _0x2744ae = plantConf ? plantConf["BiddingDate"] : "",
    _0x3c6658 = [
      "Timestamp",
      "BiddingDate",
      "SlotNumber",
      "SapOrderId",
      "DestCityDesc",
      "Spi",
      "BiddingAmount",
      "BiddingRank",
      "L1BidAmount",
      "AvgWtBidAmount",
      "Freight",
      "ClubFreight",
      "ClubId",
      "ShipFromWerks",
      "NoOfTruckReq",
      "KunagName1",
    ],
    _0x293281 = [];
  if (!_0x15d47b) {
    if ("RkuQc" === "cuehP")
      _0xb3a35d(
        "New slot " +
          _0x1e406b["SlotNumber"] +
          " detected, wiping old submission memory.",
      );
    else {
      const _0x153be2 = path["dirname"](_0x3cfeaa);
      (!fs["existsSync"](_0x153be2) &&
        fs["mkdirSync"](_0x153be2, { recursive: !![] }),
        _0x293281["push"](_0x3c6658["join"](",")));
    }
  }
  (_0x5800a4["forEach"]((_0x286cfd) => {
    const _0x51ae20 = _0x3b5435;
    if ("rHtRz" !== "eCdMn") {
      const _0x1e21bd = [
        _0x40ff49,
        _0x2744ae,
        _0x526218,
        _0x286cfd["SapOrderId"] || "",
        "\x22" +
          (_0x286cfd["DestCityDesc"] || "")["replace"](/"/g, "\x22\x22") +
          "\x22",
        "\x22" + (_0x286cfd["Spi"] || "")["replace"](/"/g, "\x22\x22") + "\x22",
        _0x286cfd["BiddingAmount"] || "0",
        _0x286cfd["BiddingRank"] || "",
        _0x286cfd["L1BidAmount"] || "0",
        _0x286cfd["AvgWtBidAmount"] || "0",
        _0x286cfd["Freight"] || "0",
        _0x286cfd["ClubFreight"] || "0",
        _0x286cfd["ClubId"] || "",
        _0x286cfd["ShipFromWerks"] || "",
        _0x286cfd["NoOfTruckReq"] || "",
        "\x22" +
          (_0x286cfd["KunagName1"] || "")["replace"](/"/g, "\x22\x22") +
          "\x22",
      ];
      _0x293281["push"](_0x1e21bd["join"](","));
    } else
      _0x2dea6b(
        "Window is still active or batches remaining, starting next cycle immediately...",
      );
  }),
    fs["appendFileSync"](
      _0x3cfeaa,
      _0x293281["join"]("\x0a") + "\x0a",
      "utf-8",
    ),
    logOk(
      "Rank records appended to " +
        path["basename"](_0x3cfeaa) +
        "\x20(" +
        _0x5800a4["length"] +
        " rows)",
    ));
}
function csvToJson(_0x509f44) {
  const _0x56edfa = a0_0x5cae94,
    _0x52992e = _0x509f44["split"]("\x0a"),
    _0x28f5ae = [],
    _0x8c810a = _0x52992e[0x0]
      ["split"](",")
      ["map"]((_0x23acf7) => _0x23acf7["trim"]());
  for (let _0x21e169 = 0x1; _0x21e169 < _0x52992e["length"]; _0x21e169++) {
    if (!_0x52992e[_0x21e169]["trim"]()) continue;
    const _0x4707a9 = {},
      _0x203611 = _0x52992e[_0x21e169]["replace"]("\x0d", "")["split"](",");
    for (let _0x1325a5 = 0x0; _0x1325a5 < _0x8c810a["length"]; _0x1325a5++) {
      _0x4707a9[_0x8c810a[_0x1325a5]] = (_0x203611[_0x1325a5] || "")["trim"]();
    }
    _0x28f5ae["push"](_0x4707a9);
  }
  return _0x28f5ae;
}
function loadCsvFiles() {
  const _0x1d7cd6 = a0_0x5cae94,
    _0x386447 = path["resolve"](CONFIG["CSV_FILE"]);
  if (!fs["existsSync"](_0x386447))
    return (logErr("CSV\x20file\x20not\x20found:\x20" + _0x386447), ![]);
  const _0x50a9c4 = fs["readFileSync"](_0x386447, "utf-8");
  ((csvData = csvToJson(_0x50a9c4)),
    logOk(
      "Loaded\x20" +
        csvData["length"] +
        " rows from " +
        path["basename"](_0x386447),
    ));
  const _0x371f71 = path["resolve"](CONFIG["DELETE_CSV_FILE"]);
  if (fs["existsSync"](_0x371f71)) {
    const _0x5a5f51 = fs["readFileSync"](_0x371f71, "utf-8"),
      _0x361aef = csvToJson(_0x5a5f51);
    ((deleteList = _0x361aef["map"]((_0x405ae5) => _0x405ae5["Customer"])[
      "filter"
    ](Boolean)),
      logOk("Loaded " + deleteList["length"] + " entries from delete CSV"));
  } else
    (logWarn("Delete CSV not found: " + _0x371f71 + " (continuing without it)"),
      (deleteList = []));
  return !![];
}
function a0_0x51a9() {
  const _0x11b490 = [
    "W7ShW4RdQXe",
    "paVdVZWVbH7cPCoNW5e2",
    "C2frD0i",
    "uKeR",
    "yWBdJs3dVSo/W6hdM1FcJ1NcQ3C",
    "Fmo9WRpdKeBcIW",
    "fCkwdSo6",
    "m8knamorW7xcRZK",
    "q8o0WRldG3ZcLIBcVSkWua",
    "vCoNWONcSZ0O",
    "WOBdGmkBo8kRlq",
    "W5fhcW",
    "pmoel8odW4JcKCkndsCHDCkRWOzC",
    "WQ7cTSkWW5S",
    "uHfwW4RcLmk8",
    "tIfuiWe3W799qCosW77cRmklA2JcRJldMZz7W6SkW64gWRRcJSoaAcddU18VW5O1yMxdJa7dJSkUW6jgr1HMhbJcNCkMW6DJAhWHEcPFd8k3l3lcRsbjW4pcGIPZWP7dOmkQW7bBWQXGDbNdOfW",
    "W70xCqGdWQVdTW",
    "W5JIM63dKa",
    "WO/dMCk7",
    "W4XyecyL",
    "bSkIrIZdLHOUWPTEFW3cLCkg",
    "t1q1zSoXWQRdGLlcRG",
    "W5ftW6n0oW",
    "W5LeeYaJ",
    "u8onw8k7WQm3r8kGhv7cVSoSWQq7WQpcHG",
    "AetdTN4AkIJcOSopW6WucZvozSocWPVdU8kgWR7cSCojWPVdGdBcPCoteSkMWPRdOCo5W6ddJSkheSoGW53cOeJdUYWEWQ4aW6mkW7q",
    "gSobWOrKWR5gvq",
    "WRJcRmkMDSkg",
    "WQ1/qgKTW4m",
    "r8oTWPldIZ8",
    "eSoAqmoYWRS3",
    "WP/dUmoLWO/dUbxcGaKGW7pdGq",
    "CuqXlG",
    "nNXuEmkLECkPwHZdOLGBWP3dRSoovmoEW7GHWRJdMSoDaCkla8oyW4JcJCkyWQHQW6JcT8k1oWZdUfqgrtXqyCoUW4VdLGrSzmoCfSoneI9MWP7dN8ka",
    "WRZcGCoyW7RcTwBdNmk0W6/cRSoV",
    "WPhdLCkolG",
    "b8oWWPxcTcfVkwW",
    "W7jndZWWW43dSq",
    "uutdVSoVW4C9WQG",
    "WPNcPCk6z8k8WQy7i8kEW5q",
    "xSo3W73dTghcTwVcSCk0vHjun2JdLwFcHqiKn8ojWPBcHrOfWOW2W79Rq8kOEmobmmkNWOmrAN/dL1FdQaHMmhVdKCkoWOhdVGNcHh/dL2n1W4HpW49tw8oPWRhdLCkXW49xa1dcNSoLWRuMjSkVW5q",
    "BfqXnCoJWQhdIa",
    "W63cV8kJW5RdQCkdf8kKFSoOW4JcI2upyCopWPO6W6ZdUSkMcWbeWOVdUduKW4ddI3xdICkCrSo1",
    "mduMuu3dGIZcH8kkC20iWOtdSwzBnh5LmmkFuLZcNZvelSoXh1/cPXm",
    "yItcJLNcS8k4fSoOW69M",
    "WQRcQSkL",
    "W71bgcS4W4tdSZldVGVcNCojW7K",
    "t8otWQVdGHPFamorWOm",
    "CwuDE2BdSa",
    "aCoCr8o+WRK",
    "W67dJJe",
    "utTrjWzKW75XxComWRhcOCkxyZJcSdldJdz2WR0CW79fWRVcNSohoYJdOrmaW7bg",
    "ehBcP2a",
    "WOpcPmk0DmkxWOaIm8ksW4JdNW",
    "WOKaW7tdUJm",
    "W4hdUmkPemk8WQRcIs8RW7xcTq",
    "W5jpzSodWQZcGSokDW",
    "a8oyrSoOWQG",
    "W4CzeXtcK0FdTGSAwHNcIx3cKMRdN8kPW6XeWQNdOmoyWQVcP8k8WP4lu8krj0m/",
    "vLaRmSoRWQJdIGBdQmoLW7DyWQ9eWOPGkmoYic7cLGRcJeS4cHBcN8kxWQRcNmkVW6LGkZddRG7cS2RdVdHRW5mCW6hcV8kzcCoxWOzaysnLWQPa",
    "BCouW5hdNYhdK8o0oSoEWPBdVmkXW71+WOSYWQTcWPFcHZq8nepcKSoDWO0qoCkXW4L0",
    "oaxdGsa9",
    "imksamoaW6JcG8oedbq+DCkSW5ii",
    "W59sWRpcImouWPBcIq",
    "WQBdHmkt",
    "WP3cMSkcpea",
    "W7KUW6/dIG",
    "uJ/cKuJcQ8k4bCo0WQS",
    "qZxcJ0JcQmkZaSo0",
    "ucTxjq",
    "W5ajbrZcMuddOazvz3JcRs/cMMddL8k5W7aqW73dU8oqWQtdOSkTWO8dx8kxyKfXW4ddM3WsW7aJoKC",
    "ySotW6BdKrDkamoxWO8iohxcQHpcRmoIpr/cLSoUpmkiAszYW5y4mCofeIldSXFcRGedymoVW6fRW53dLSkPymkJwW",
    "dmoBWRreWPvltcrQW6m",
    "a2xcPfH+W7ldGbldKCoBj8kuEcy",
    "kHBdMJqWfW",
    "WR3cQSk/W5hdO8kia8kvESo4WOFdG20t",
    "v1pdO8o2W5K9WRJdSSop",
    "xmoYW65GW5FcNq",
    "rf3dUSoU",
    "WOj1w2i9WOVdSSo1dSkHAvK3W6ZcGGRdHubSadtdISoTWQyYgIVdGqRdKGFcNCoNBSoGWR4D",
    "W6ahCrm",
    "W7HdWQlcImofWPVcTSohmca",
    "ESoDWQxdPbnuemoBWPu7ExlcRbVcPCoGuWJcHmojlmkojYzKWOH3mCkArG",
    "Fu96W4xcMCkAW5idfmoAya",
    "rYnrlWTZW6H8eSoHW7dcSSkmBsdcVxFdQZX+W6SkW7GgWRhcLCoDpcFdTrmfW7mcqgxcKa",
    "WPpdJSkRWO1k",
    "WQpcRmojWOldTtRcIIq0W6NdLSk7xee",
    "vtrMxejEW6SeW600hW",
    "W4lcJCo/W6GJg8oAsSk6WPjcg1G",
    "ex/cRhTeW4xdHbtdTCoe",
    "WOFdK8kVWOLdBKf0rq",
    "W57cNSk0",
    "W7/dLZXNwL4Bw8kQW5tcKSoDxG",
    "e1VcJ3/cHSkU",
    "oGhdGcm3dr/cGW",
    "irtdLXOD",
    "WQu/W7JdIdS",
    "W7ldPSkOlSkn",
    "WQBcRmk7DmkgWRS",
    "w8ooWQ/dHHm",
    "i8kna8oZW7xcR8okktG8B8k3W4G",
    "a0FcKW",
    "e1BcIMNcRmkIWRdcTMdcHfNcVxfGjqKkuq3dNq",
    "WPhcOmodWOldTtRcIJq0W7pdNG",
    "WQhcRmouWOpdQa",
    "iM5HcYfCW4rwDCkcW4pcH8kRwWtcIatcMbvDW49pW55UWPhcQmkucXFdLZmP",
    "DZNcJKVcS8o9e8oWWRTEaCkiW6j6bfKEzCkqDG4",
    "W5FdLCk+W6jMr8oZemo2evWoWPpdVSkCW5xcIKaCpmo4WPW7sGpdS8oYWQBdHNa",
    "W5CdbbxcNHtdQW0bfeRcKMpcJwJcMmkVW78uWQNdQSoDWQ/cP8kOWPqyemknkK5TWPlcMviuW7CUzeFcL8k7CCozWRlcUbZcJ8oCgmkcW6exW6DszuaL",
    "rX5YeaS",
    "v2rsCgr2W6i9W4OFh8kOWQ0CW4xcMapcVKa/",
    "FePMcN1NWRG",
    "WPSJW5/dVGtdJSofW4NcGrK",
    "uf3dUSoN",
    "W5pcPColW64FomkFECk+WRK",
    "nmkddSoA",
    "W4BdOSkVoSkpWRZcJW",
    "CH9iW5JcNSkZW55mcmozDrvaWRHAWQBcSrP0W6JdRLHJW74",
    "mCoqdCoEgW",
    "WR56WRKT",
    "FCoJW65G",
    "W63dSHLnzW",
    "WQSGW53dUIBdNSoCW47cGa",
    "FZ/cS17cK8kVbmoYWQrVdmoz",
    "zx7cSf4uWRfm",
    "WQRdK8oIWPHmF1XNrgvKW5GScKhcGMSiWQddHvSMWORcU0BdT8kpo8o+F2/cTmo0BCoGWRddShpdLhlcO8k1FCkiW5TgBa",
    "WOBdGmkBlmk1",
    "iCowgCkCuq",
    "WP8Fu8kdWRi",
    "W6XCht0LW4pdUHtcSWxcNCotW6lcTmo9W516W4ldPbmodmozc3vyW5DmWOhcMmoHdK59hYeyWOpdM0mUW5ehtq",
    "DwPd",
    "xglcS0G",
    "WRSFeaNdLvVdTrDAw13cNhVcMIldI8kTW65lWOFdN8o2WPhdK8kCWROKy8kPdxvkW7FcQwWZW4yqzYlcPSkMESonWQVcVXxcU8kDd8ksW4yDWRm",
    "W58KW43dJd1WWOG",
    "WOSUW4ddVINdK8ojWOVcGG5PW7BdGCkbWPJcKSo9w8oFr8ku",
    "WP1PWRK0pXG4W6HIWP7dS8kZWQ3dH0BcSmkwWQb2q8koWQRcVSkdW4pdGSkRW4bFlbxcG3DytCkMCCo0AYBcHfRcTCobWPnAWQblaWTLgSoGWPipW53dNW",
    "eLpdVSknmCoKW6NdQsa",
    "jCk4sc3dLGa9W55PDtJdJmktomoEW5rNW413WOn2WP/dLmomhmoGW5lcHfldRwlcVCoxiduucCk6emojWQWSBSoYbSkRyZu8W58qkmosWQPLmSoLWPO9W4NcPSkHW7StW7u",
    "duNdUW",
    "h2fb",
    "W6tcJSokW7GF",
    "ysHhrLr5WQSFW7CXdSks",
    "WO49W5xdOY3dK8oC",
    "tqaal8oMWOFdGeNdU8oKW7e",
    "y2evzhBdUG",
    "WOtcVM/cKG",
    "nSk2vdxdNay7W55jwWtcMSkqjCkmWPf2W55OWOuVW5C",
    "WQPDEx8s",
    "rX9uW5NcMa",
    "W4e/ncVcPx3dGq",
    "WQX7wM0X",
    "W5yffr3cK1RdOImyw0ZcK3S",
    "f8oyqmo6",
    "mhBcSgbMW4BdJa",
    "fSk3CZJdUWS",
    "qZhcN10",
    "uLqEseu",
    "W4jHWOpcTCo8W5pcU8oReq7cRwlcVCk5W6RdGXVcPmkHmCkhdW/cQSk3W7KjWOtdK1WdW7TXAeFcQL1kWRXjW416WRTK",
    "b8o3oCk1a8kkW5ddJ8kuW6eXW47dUCo5a2hcOr/cSSoJW43dOsJcMM7dGmotmCkUwInzjCk+aSkM",
    "WRJcRmkLDSktWQC",
    "qGTAW4hcLmkVW4SjbCo/CqTw",
    "vCoTAsFdOrbgwMpcQrz1WOZdLXRdP8oDyCo9bCopfZhcPa",
    "pSowqSoYWQm1emo0eXpcV8o8WRi7WRNdHfJcLmoPkNWjBq",
    "krtdMJG9gG",
    "hw7cTN7cJG",
    "W5RdH8kBp8oXmCkIgmkSutNdRIhdPSovW4fiDIJcT8oWDJuppSoHrCkmW4GbWQ1eWO/cG8k5WPjwg8kgWQ/cSSoRW65+W59eW5RcHhj4W63dOmovWRv3WO3cPG7cGdZcVbjVoqf+",
    "quJdQmkRWO0",
    "W5XAgs4LW4/dNbldOaW",
    "C2igrKK",
    "BwPIxf56W6i",
    "W5jjda",
    "vCk4W5JdPa1OlNdcJmoq",
    "WPmoW6xdNGxcLSoUW6lcVdy9W4ddMCofWPZcLmoQumknpSoNj1yIn2PmWRCfWPBdSSoskHRdKCoVwSopWPtdLx/cOCkJia",
    "WOjkz8oKWR3cGmomzH7cQSowg03dPfFcTCofW6hdLraayCkVW7/dQ2ZdK8kbq8oVWPJcQbyEW50vWO4lESo8",
    "W4pdM8k6WO1xCmoejmkFaq",
    "W5ajaG3cUv3dSrSXuuRcNG",
    "WRpdMCoUW6RdSwtdNSk/W7/dOmoFbCokzmk0b8knudVdGW",
    "F8omWQ8",
    "W4ddMmkKWQ5I",
    "e8k4vGtdNG0Y",
    "Axbxxq",
    "iumTmCoXW6JcGWG",
    "sNvn",
    "dwldNCkOja",
    "W6ebrHqS",
    "WOZcPSk0bvy",
    "Dmo5WQNdLG",
    "WPW2W4ddRW",
    "WOhcVmk7CSkvWP03lmkEWPC",
    "n8o8WOlcOcDVpsNdGCkzW7NcGM/cICk2WOCdW4e6mftdPMtdHmoRWOWeW6Pih8kEbSkCW4DDW4ldUCkhWQ7cLSojWQFcISorwmkzW69emu7dO3joW5mKWO3cGCkaw8oKAGddHLhcIvft",
    "paVdTtOGbGG",
    "nmoaWRlcIXfucK3dT8kKW5lcUupcRCoaWR05W7Gxeq",
    "W77dKI1HDuizC8kGW5pcKW",
    "kCofW4RdKG",
    "bJxdRq",
    "W7SkW5JdTHjAWR4T",
    "WPxcM8kBAWtcUsXnfrtdICktWQaMlhZcPXO",
    "W6BdQCkgq8k7W6L2",
    "WPFdICkGWOPBEvX/rG",
    "W5eufbRcJ0ddRaWsfeRcIx3cMNNdNCkRW6DeWOy",
    "iSkff8oJW7/cQComscy8DSkVW5Kyjmk/W7e/W4xdV218W5CcnCouWPNdUmkGaa",
    "DuRdQCorW4eAWQxdS8oQW73dPNiupG",
    "iI1BkX1KWQq",
    "gebNgLT8WR8iW7VdS0/cJq",
    "WQDnWRu6pq",
    "uNWqDgRdPWlcM8kSpvq",
    "W4tcGCo3W6q5gCkLsmkKWOTie0uVsa",
    "WQFcU8ooWOS",
    "i0lcMhdcPSk+WQxdS2lcQKJcP2O",
    "WRhdS8kkWPrBA8oiF8kbWRftj0O",
    "W6RdOCkziSosWROLyq",
    "CvqSiSoRWQJdIMtdR8o+W6yqWQrs",
    "FXf3W4RcQCkPW4OpcSoMCqm",
    "WOldLCoQW7/cSetdLa",
    "W7hcT8o/W44J",
    "W6bhzSo0WRhcJCoFqHFdQCkdaLa",
    "WPdcICkdhexdPeqpoGpdGCkaWR0Z",
    "zgCbDq",
    "nuxcIhlcVq",
    "WQNcPSkJW5VdQ8klaq",
    "WQdcPmk1W5ZdUmk1hCk5Ea",
    "W4yUW7JdLIrYWOK",
    "o1D1fW",
    "iSkieSo1W5xcPq",
    "omkdfCoXW7RcUda",
    "fmo2WPlcRtHKewZdJ8kd",
    "a1BcILlcVCkUWRtdPe/cHq",
    "gruaFWi",
    "mhBcSgP+",
    "W45bzq",
    "wd7cN1tcSSk5fmoI",
    "W6ixCrqoWRRdTW",
    "w8oQBIFdUaPdw3FcPdf/W43dHXBdOmkAASoPbCkouc/dVGDa",
    "nwhcQNTV",
    "W6OVW6BdSsq",
    "cexdI8kxbG",
    "WQdcVCodWONdQsa",
    "gGxdNtH4eqNcHCoPW5a3wfr6qSo9WRpdLmk2WPlcMSkNW4/dQLG",
    "WPPQWR4Seq",
    "WPKSW4qjWRyBFSotcmobW4dcUComx8oqBHGRErPQW4u4W4FcLSkZDKtdQmobWRudumosW4hcIZ3dPhyHvcCTFH8",
    "WRq6W4bvWPqaW4u+WO9DCmo9W6iVog7dS8o4ncq",
    "jSo5WONcSab0n2VdK8kc",
    "kSkvf8or",
    "vhahzeddObhcSmkjnKWU",
    "8kECOKFdHCoDWO/dPKHKC1VcMSo0nuhcMSobgmkhWROZmCkrndddJmkzW7JcOa",
    "W5TbWQlcGSoBW54",
    "y8oSWRZdG0FcKa",
    "hCknf8oaW7JcSZK/kuqjnMddH8kaqmoUW4ywqq",
    "ahRcP2TJW57dJItdSCoyiW",
    "WORcJCkap1pdQxe",
    "W4NdT8keWRTo",
    "W5tdN8kMWQDrCCkbfCkfmXmlWPNdPmkCW5FcGeycmCk2W5K",
    "hKXWcNf7WQW1W57dOLK",
    "WO7cRSkbbwm",
    "W6XtWRpcK8oAWPO",
    "WOyErCkeWOq",
    "W5pdIdTwza",
    "W6JdRr1rBhK4",
    "BITDlrT/",
    "crldLaqSiqxcGSohW488xHPV",
    "WOddNCk2WPG",
    "AcfAja",
    "WQGxqSkdWQjuANhcGCo1W7i8fSkMwmoBE2q8tSkIW7bgW7ZdGmozWPmzqsFdU8oMW74NW4KQzW",
    "W4ZcI8o0W7eYh8k1rCkJWPrzaem2xG",
    "ceJdV8ksmmoYW6xdTa",
    "WQ7cQmkHCG",
    "h2TiCmkJmq",
    "cXhdGcC3dGNcLa",
    "W5ldQmkUd8kbWRhcLcq",
    "wcPdlGW",
    "WR7cLmoK",
    "W5iBzJqqWQJdTXxdU3ZdVhNcRCkuWOOGW514kmoOW5WqWQC",
    "zmoQWRtdMG",
    "WQWIW50qWRC",
    "WPtcH8kx",
    "WQhcKCkZfKa",
    "E8o9WQtdHa",
    "CJTaiG",
    "WRJcRmk0D8k0WRO6jmkOW5/dLIm",
    "b8oWWPBcQc9IpW",
    "W4Ply8o0WR3cKCol",
    "l3BcShXRW5FdJa",
    "n8k+qcxdLGa9WR9xwX3cGSkb",
    "pSouW5ldMJK",
    "kSodWR0DW6m",
    "jqhdGca5baK",
    "WQBdNmktp8kylmk9amouwY/dPcy",
    "W55lccyNW4/dNXBdQHC",
    "WRZdHCkaWP52",
    "b0NdRSk7jmo1W6G",
    "zhOYExVdRae",
    "lhZcTa",
    "4OY5kmkdntqBnSk8CmkyW6/dTmoJW4TqW6q",
    "AsTk",
    "WPhdHCoUW7ZcG1ldN8k1W7pcRSo8",
    "WPrjA1WgW6ldMa",
    "u8o0WQJdLxtcKs7cTCkYsGu",
    "C8kxWPLzWR8eaq",
    "gSonW5ddLYldJCk6nmknW5FdU8kXW7f/WPDMWRKaW4pdHGe4zfJcLCkpWOOvBCk7W48Xmtz1WQlcIJtcPmk7DKWuxwhdJ1jAWRuhv8kiW5dcOWpdKmkok2SjW7NcNmoxfmkJWPLbW6NdPCoHy8kDFSoAEmoTEsS/",
    "CfNdVCoYW7yXWRJdRSoVW7xdUMq",
    "W6nUWRlcI8oW",
    "BCoVW65RW4VcH2yoWPPbkG",
    "WOZcU8kWESkvWRSI",
    "BSoQW6yVW4dcIhu/WPnkmSooD8oGzG5BW7hcPSkkamoW",
    "WR3cPSoq",
    "CwNdP8osW6a",
    "nSkBCqpcHq",
    "WPFcRCkUgSknWRdcIsuXWRVcOaeUbmkhW6xdQuJcVKBdGSk2WPTECCkrWQNdLSo2W6tdIr9UWRr2WPlcKvNcMqldMHZcGCoszhxcOw7dGNOBDSo1vvvM",
    "qsjgkcLLW6HXvCokW6u",
    "CdfjW6RcKG",
    "p0P5hNrWWR8uW5S",
    "WQhcRmouWPpdScdcNG",
    "nmk3iSofW4pcImoP",
    "a0xcJgxcOW",
    "W77dKs1VvXasDCkZWPVcLmoCrNdcLIBdHJJdJCoXW50zWPdcIcBdOSkJW5DJWRaoW7Ho",
    "WO40W7b5WQ4mW4u",
    "W4tdK8kWWP1kEuy",
    "nJakgWG",
    "F8ovWRjuWQGEqcvNW7GTBCoLW7OsWPqmWPNcOSosW4u0",
    "BaBcVmoEzCk2WQdcP2FdNSkiW7hcNYldRmkReSkNzKJdISkCrhdcRbb5wmk4WQ3dOGHtW4rzCajUqmkbmmkevmkqW6SdnmkIdZ4",
    "u8oErSo0WRGIqW",
    "WQhcPSoqWPu",
    "WQK2W5miWRTpzmozgmkQW4RcOSol",
    "WR/dJrldJSo/ss7cTa",
    "W4/dMYTZxf4pFW",
    "WQdcVCovWO/dSJm",
    "cG3dLZCXdqVcP8oRW40Mrqa",
    "BJpcKf9dWORcIq",
    "xrfF",
    "WQL/t2O8W5NdRW",
    "n8kEyaJdSsL6WR93EZ3cOSkH",
    "awTvySk7lq",
    "jSkmra/dGYfWF1pcMq",
    "WOO6W4rJWRm",
    "y8orwSkuW5/cIqe/hxqZDuVcQmkRCColW68NyapcUtDC",
    "WOVcVCk0W5ZdRCkoea",
    "Duidruy",
    "WQdcOCooWOddQa",
    "W6hdUCkvW5dcSwtdMKTNWQ4",
    "CSomnmoKW5ldOxG",
    "aCo6WQRcQZLKkeRdL8kdW7i",
    "Bd3dRq",
    "WO0PW59KWRm",
    "yLNdOmoIW5OQW6ZdPCokW77dOM4ulCkpnwP3WQanvSkwW5PRwuZcKmkQ",
    "WOJcJCkEn1VdPhm/naFdH8kAWQW5",
    "W5uOW5DGW7KgW5eDW7j3ymoiW6qVDhBdMSoHAdddJ1FcRc1KtSo3r8kLWQ7dRvGjpCoUjwtcPSkCWQ5+FL9ZWQC1dCk3eg3dTmognCk4uGeMWPRcSmoijW",
    "AqBcRSo1W5a2WQJdVSofW7FcQq",
    "aCoNWO/cQq",
    "A+kwKmk8WQ0XW7FdSSoZlSkqW4/dSCo8E8kVW6DxWQDL",
    "cSkvf8or",
    "WR/cQSkHW5NdQ8kfaq",
    "WQOMW58bWRTvD8o+hCkvW4ZcS8oDtq",
    "CHjnW47cU8kPW5OfbSoCya",
    "WQFcRmkMymktWRqZ",
    "xSozWRxdGHLub8or",
    "iSkne8oUWRZcGSocddbZxSk8W48FDSkLW7qOW4/dTq",
    "i13cSMJcIG",
    "W7C8odJcIa",
    "vv/dUSoVW4m9WOFdSSosW6m",
    "WR3cRSk1W6BdVSkhfSkJ",
    "W7ldM8k5WQDlDCommW",
    "uYlcLv/cR8kP",
    "nSo0WPBcSc1PoYNdLmkvW7tcH23cM8k2WOmnW5a6lLddOcJdJSk5W40mW7fztCor",
    "uutdP8oY",
    "puH7g3zH",
    "W4tcLSoIW74/cCk0",
    "WOv/xxOAW4ldQmoJpSoKFf8",
    "WOmvvW",
    "W4nEA8o7WR3cMG",
    "W7pcSmoAW5uylW",
    "qZxcJ13cSW",
    "W6rVW7ldOY7cGCki",
    "lmkjbSoqW53cSJr6hfGtnG",
    "ffpdU8oYWPu3WQRcTW",
    "CtPspHPKW5L9sSow",
    "W6XKhq0L",
    "jexcK3a",
    "wfpdQq",
    "CtTrjWzJW7L9vSoPW7tcU8kl",
    "oaxdLWaSaH7cKG",
    "DJXAjW",
    "CJZcIvRcJSk5",
    "W7GxyX8hWR7dOq",
    "vd1CW6hcKW",
    "WRXsusSRW7BcSG",
    "WRK3tx0RW43cSCoUfCoQALi",
    "W6TNdYaJ",
    "hmkfa8oqW7lcTt9nlK8w",
    "WPCSW4CmWRXCmmoie8obW4hcVSoasSkzyLKCssacW4TI",
    "xCkxgG",
    "tSkecCk7WO87vmoKfv3cTSk5WQK2W7RdILZdGmoPlt9xl1pdH1KlWOxcVGa",
    "W7PpWRVcKCoFWPVcICohlq",
    "WQ7cOmkNFCktWR4Z",
    "WP3cLHqYe1KpoG",
    "WOhdM8k8jSkMo8k2",
    "W7HuWPFcQmoE",
    "wCoiWQdcN04",
    "WQZdL8knW41krM1OeIb0WOaDi2dcOw5+WONdOq",
    "W7xcIJFcKq",
    "WRZcJCkdj3hdO2aeerBdL8kr",
    "W5vCA8oKWR0",
    "W4ldHsZcMSkRvs/dUSkmnGzSWQXktCoUqCkOWP3dLhddSmkj",
    "W4VdNSkYb8ku",
    "ALq7",
    "WOjny8oZWRdcHSoCiXNdP8kggeFdVf/cQmkcWQ3dLr0ajmk4WQm",
    "WQj2qw0YW6tdUSo8cCoKEW",
    "gCkGzc/dUWW",
    "W6bhzSo0WRhcJCoFurVdQmkD",
    "W53cJdRcM8k2tJRdLCkepvnrWPK",
    "W7iRgt5OWP7cRmoxk8oVE0KT",
    "gSk+pSoRW4NcJHy",
    "W57dHZLT",
    "WRFdNCkYWRzDB1bJAce",
    "lSolaSkD",
    "gCkYsIBdIWy",
    "nfBcJNW",
    "rHXQAJ1cW4m4h8kcW7/cRCkmlJVcQtxdLtPMW6KkW64",
    "WQ8trmkcWQ9EAftdJmozW6yIfG",
    "iCoCqmoPWRq7xSoNxedcPmo7WQCMW6RdLvdcJ8oKyIvon17cK0LBW5ZdOKLhvLldNSkuWQlcMSksWQhdMSk9kG",
    "W7xdRCk9WPDG",
    "WPBdMCkXWOLazuz0",
    "W61sWR/cJa",
    "rLNdVCo2W5O2WR/dSG",
    "WRJcRmkMFmkEWQuZ",
    "WRNINlFdTG",
    "DrTlW5JcVSkYW4SvjCorzXe",
    "fhXdCSk5",
    "qSkbBmoRWO4HFSoe",
    "hSoBWRCqWRLFvsvNW7q7o8oZW6TqWQSeWOpcVCkxWPa0",
    "WQK3W5LKWPmhW4u8WRr1yq",
    "W7KnbrRcKG",
    "dmowWQT/WQLArdrgW7u",
    "W7ecCHClWQ/dSXpdNNRdOslcLmkcWPfU",
    "cSoKWP5IWOr3zq",
    "WPxdKSo0W7lcNG",
    "ihRcP05NW5/dNbJdPa",
    "W70QW6JdSYb7WOGgsSkNa1O1WOxdNgHmxxChWPldNCk/W53cT8kZWRVcSNnt",
    "WQa/W7jHWR0",
    "FhaAD3FdOq",
    "WPBdMCkXWPXB",
    "W6v7WReWErKVWR0RWP7dPCoYWRFdGXhcT8oxWQm1DSkSW4NcLCk4WRhdOCkaWRn/fIxcU1T5ESkqr8kcBa",
    "iLlcIw3cOmkKWQldSW",
    "gmofW5NdQGe",
    "evpdR8kw",
    "oIldLrWS",
    "W4DwCSo5WQRcHSoC",
    "xZ/cIW",
    "aqddOIKs",
    "W7pcGddcMmkRsa",
    "WOxdN8k2WPbzBN50wdy",
    "CGpcRN7dP8kPhSo6WQPtsCohW6f+fvWzzCkqBfJdSLXYWOdcHCo6zw3dHwmbmc7cVce",
    "ENa2zfy",
    "W5tdOSkBfSkwWRRcGW",
    "yNtcSwb/W4ddML/cSokxPUkuMokwSq",
    "jIfeiJBcUqJcOCkieMOp",
    "m0pdUmkr",
    "W6xdVCkxW5tcQwtcGa4qW5ZdOmkr",
    "WP8Fu8kjWQPgAG",
    "CKuMkCo3WRi",
    "W7pdRmkTmmkCWRVcGJmlW78",
    "WRL4ywW8",
    "BCoVW65RW4VcH2z8WOXgl8kkA8oIjaTtW7BdSSkocmkJW5SkcItdS37dOCk+uCoyW4BcV8ox",
    "WQGMW4iqWR5pyW",
    "WRNcNSkxbeBdIh0zfb7dI8khWQC+",
    "eCkrfmo/",
    "i3dcT2z8W5u",
    "t1hcM1O9",
    "WO4oqmo5WRZdMCky",
    "DZxcIfVcR8k0h8o2W69Bg8onW7bIvfywCmkal0BdUH00WRZcKSkPzghdNN8RE3tcQa",
    "WRfVxwy",
    "W7G7W6uvpqCtWQDa",
    "w8o1oNG",
    "W4JdJt1XwLq",
    "euhcNuRcU8kiWRJdSKFcJelcQ3C0",
    "qL3dOSoZW5a",
    "pmoYWP9BWRO",
    "W4NdJdfU",
    "BSoWW61yW5BcQ2G4WRPclSkBASoH",
    "fSk4sthdKWSUWPTE",
    "CHuKxG",
    "W5VdLZr3vKi",
    "CxyaExxdRa",
    "m8kmrHZdIJzQCeNcGtTgW6xdTJy",
    "BSoQW6yVW4dcIhu/WPnkmSooDmoNAWbxW7BcOCkkamoW",
    "WOhdJSkWWPzD",
    "WQlcRmk0D8kxWQeL",
    "WR3cOmkIW4e",
    "d+kyPSkQ",
    "W6PvWRtcJmoAWORcICohlrJdQe7cVG",
    "WOldPmknWQ1w",
    "W7X7kHaxW6pdMdy",
    "W4XChtSKW5K",
    "W43dNZXqr1eoBG",
    "W7nhgYy/WORdSHldUGJcJCodWRFcUCowW6zaW6BcRq",
    "WQpdLCoUWRpcLxxdQmkeW4JcLCovxCoFzSkQhCkybdVdGIZdQtBdPuBdNxi8jtybWO/cVghcMWldVmowW5xcQHHimCkiu8o/zqmeWO7cGG",
    "wuJdSd1N",
    "W55jf8oEW7bdy2xdQSoLW5K",
    "W57dM8k8WODNFCofmSk/c1qXWOtdSCoFW5RcP1OF",
    "h1aw",
    "W63dPCkfF8ktWR0IFmoC",
    "WRFdKmkTWO1HFLHZrdC",
    "g8kEfCoBW6NdUZXQpuGtmIJcHCkhvCoKW4jtvLBdPMCirmkbW6LIvSkLWROFpXRdTmolD8knW5hcJ8o6rYtdMgS+yrO5W7GUbSk3l2VdKCkLxW",
    "W7XoWRlcTCoAWPpcMa",
    "W7/dQCoLWO/dUg7dJq",
    "p1evzgBcOvtdVCo7zaz1W6BcLHm5v24tvSoI",
    "jSkwDghdUHWOWPfidKG",
    "WRtcH8krn1FdRJq",
    "a8ofW4JdTG/dK8o+c8kSWRldVmkrW6PYWPGTWPakW4tdOq",
    "WQxcQSkWW5hdR8kufW",
    "W5nhgW",
    "rCosWQxdNGnEeCoh",
    "WQVcGmkzi3tdUhSqaHBdLSkzWRO",
    "eL7cNJ3cOmk4WRxdS3tdGuhcT2O0yW4gsqVdKxLiur8",
    "WQn9x1yn",
    "n8kmtGhdGsmpDvVcJtDhW6ldTa",
    "qXJcIgRcVq",
    "DmoXWRRdKKhcLW",
    "F0tcM23dOmkLWQhdOYNcJKNcV20HBbSctuFdO0PVngVcRKRdPqWMrSoYnf8jEJ/dGSoTWORdQmovDrvbkYJdKc7dQwpcSJ8BW4S",
    "W4/dMYHMuKq",
    "ax/cTM1dW5q",
    "W7PJWPe",
    "W5bhhCogWOjIvJxdS8oJW512qSkrvCojl149rCo0W7zvWQZdNCouWPimccddSSo7W6CQWO0SB0RcI2pdPJBcTmkyWOVdOW",
    "WQZcOmk5z8kxWQe",
    "WRn/xx42W4xdR8o/",
    "f8kjwtJdUW",
    "WPFdICkGWPrgF0f0rq5JW4G7",
    "ANlcP0KCWRHoWRXLWQBdJSkMW6O",
    "WPKvzSkpWR5vAW",
    "WOHbWPqjgdf/WOLjWR7dLmoDWPC",
    "WRRcVmkMEW",
    "q3KBze3dVaJcQ8kOiq",
    "t8ola8o4W6VcR8obbZq3u8k0W50ByCk/WQS/W5tdV3PQW58dmmozWOZcSCkUsclcIwi",
    "Fxahy2ldRGa",
    "WOdcPCoiWPldKIhcGaqWW68",
    "W4DwA8oK",
    "BmovW5XqW6dcQfuFWRnWeSkNxSoq",
    "lCosWQHaWRrquIm",
    "mCoqumo/WQq8v8obevZcPmo3WR4",
    "W5jdgcyJW7NdRr3dSa",
    "W6ixCH4dWRG",
    "WR7cOCk8b3FdMfe5cJldP8kMWOaCrW",
    "WRJcVCkgW53dNG",
    "xxahy2ldRGa",
    "oflcM3NcQSk4WQi",
    "W7lcGc3cJmk+rZG",
    "W6ldN8k6WQ5eD8oef8k6cq",
    "W6mgyW8xWR/dHGldJ2e",
    "WP0+W4i",
    "mmowqCo3WQLYxSoVcbpcOSo2WQy5W7ZcHLRcGCo6nJfpiHRcK11jW5FdSuLlxbu",
    "W4ZdQmkZgmkAWRC",
    "WQ89W5/dVZRdImoQW5lcRW5K",
    "W69fWOlcRCol",
    "WOBcPSkYESkCW7mWimksW4RdNsroWQXoze57WQK",
    "W5XAtCkpWQHfE3dcGCoeW7yHa8kSxSotnvbYaSkgW7azWRddHSoqWP0erIhcT8oMW6PIW5LLB1ZcINZdPshdSCkfW5FcVthdJMpcNSohCSkwlCkQhmkTW6ntWPlcJW",
    "WOldLCoPW6pcVKNdGSk+",
    "FXeyW47cLmk/WP8ndmoByrXrWRHlWQVcSXf6W7VdRW",
    "cSkbhSoK",
    "WOBdUmkxESkwWPi7lSkoW4JdJa",
    "jSoLWO8",
    "emoTWO/cTZPYcxddMmkt",
    "F8oqWQNdHJHpgCowWOiB",
    "WROQW4pdVYBdJ8oB",
    "Fxqe",
    "ySozWRhcKGvwg8oaW4C",
    "daddPZq5",
    "ztNcKv3cTmkPemo8WR8",
    "WOdcUCoo",
    "dhZcJgLEW4ldNbxdU8oKlCkq",
    "Ev3cHwbTwLxcO8odW7qguqe",
    "W5tdImkJa3VcSdq",
    "W5xdLCkoo8k7m8kIgCoW",
    "W7tdM8k+WQm",
    "iIXAlHW3W6X7wSolW7tcTmkDAMJcJJBdLJGYWQXo",
    "W6CyfrBcJ0a",
    "WQO9W5NdRsldJW",
    "WQddMCkXWO1SyKfOzsb1W5i",
    "WP1+WOC1ea",
    "wrTzW4JcMmkPW4W",
    "W4VcSCovW4akeSkBzSksW6W",
    "xCoJW7L/W43cH3i5",
    "oCoDW47dLG",
    "E3FcRfK7WQneWP9TWRS",
    "W6qzaHe",
    "WQFcPSoRWONdQZhcNYu0W67dKa",
    "qZxcJftcPSk+fa",
    "W6aEbbW",
    "ygahEa",
    "y8oTWR/dMLVcLZ/cUCkXArrfiq",
    "WPfWD2mj",
    "WOHPWQqJpLySWQf+WPtcU8kZ",
    "c8kldSo5",
    "fSk7sYldLce8WPHjurW",
    "iZxdPYOr",
    "WQGMW4eaWRnp",
    "W7ekAXqrW6hdSqJdMh7dPMJcLmkqWOWTW4T/kSo3W4fyW7m",
    "gWZdMImEeqpcI8orW4CHqaC",
    "xmotWRxdHG",
    "B8oVWPtdTfzog8oFWOihog7cOHtcUCoIBGxcLSo+C8oA",
    "imobW43dGcZdNCo/",
    "WOyFrCkwWODCzMpdHa",
    "W5VcGc3cI8kCssNdRCkTn1vC",
    "W7GoW6ZdTIO",
    "8yU8J8khWRtdNrRcPKzKWR3dTmkqCxVdOwFdOW0hW4pdI8o1mbywB8kSzd0",
    "W71bWQlcGa",
    "u2Pdy8kYoSk5sGRcPXylW5tdVmogtSoAWRbUWQFdI8kFh8kxeSogW4JcKCkfW60LW6VdTSkQnqJdUufFcq",
    "WROQW4pdRZ4",
    "W7ffWRFcHCowWOZcJG",
    "W5blCCoLWRtcL8ol",
    "WQRdK8oIWRP8xrv8qdfLW5KThqJcIMnDWR3dJrvYW6NcOeddVmkbF8oiqfZdSmk5iSobWQRdS3tdKZ3cVmk9z8kmWP1ilCkzW7/dHLHol2/cPdJdICoVDCoHW7pcOtVdK8orWPdcSwpcUqlcHCkQoJpcQeC",
    "WRqEhG7cIrtdOXaAwrK",
    "W6NcPCoJW5az",
    "lePNgG",
    "n8k+qcxdLGa9WQXBwGm",
    "mK3dTCkonCo/W67dOgFcJCoDWRpdKMVcV8o4w8oOkeJIG77cNau8W6aqkXFdR8o+W6jjh8kwhdfgn0ddKMxdHHNdMCk/v3hdPG9CW77cMfpdRmotq8ooW4hdPSouW4v9uCouW4HjWRxcTmkJW5NdVmoyW5ldMCobW70",
    "DCorWRNdG2u",
    "svmovxe",
    "Bv4L",
    "WRVcICkaj1hdONvDjHZdImkeWQW4iNRcUGxcIKhcQgW",
    "Fh1nrLjSW5usW7y5",
    "jSkle8k3W5/cKSo/lNuNDCkYW5KsjmkOW6eVW5BdS2PQWPesk8okWO/cSmk6aG",
    "qr1LAGj2W7L7wSolW7/cPCoclG",
    "W5rJWQ7cLmoe",
    "W5ldI8k7mmkA",
    "yNtcSwb/W4ddMG",
    "WRzOr3O8W63dTCo2h8osDLiG",
    "FSkiaSoaW77cUcX6kW1DiMhcL8kpt8oGWOOCsuFcPhKuvCkFW6L+s8oGW7uCFGxdUSopDSkyWOJdGW",
    "WP7cV8k0W5BdO8khcmo3s8o+WOVdIg0tzmkgWR0ZWQJdPW",
    "WRtdOSodW4ZcG3ldVW",
    "dmkfe8o0W7q",
    "W7uCarZcLfddGWSzuwRcHghcMa",
    "wNBdTSoIW5y",
    "b8kGAYZdIq1duuxcUrzX",
    "W45lBmo3WQZcIW",
    "jhlcR3XV",
    "W5VcM8kCjSkYo8kHqSoXxZpdPaRdTCkFW5fgDgpcNSkivHKT",
    "W7fhmYKfW5JdOrddUdBcJCow",
    "thRcT0W",
    "W7VdJd1QvfGi",
    "WQddMSodW77cGq",
    "E8kDWOZcHW",
    "b8kYvc3dNG0/",
    "u8olWOVdQhtcQGFcMq",
    "WOJdK8kL",
    "ie92n8ksk8k/qbZcSry",
    "BdpcGM1LW4ldNr/dVSorAmkvFJTjjMFdGCovqv/dUq",
    "WR87W5GwWQziq8ofeSkc",
    "WR8Frmkj",
    "mwFcONT/W4m",
    "e8kQEa3dRGDh",
    "fvXUCmkN",
    "p8obW43dGYldLmoPoa",
    "aCk3yYu",
    "WOX/xx04W4ZdUq",
    "xhOtEw3cQqdcU8k/pe13W7C",
    "aCoCr8oRWQi8q8oL",
    "W6XeeZScW57dTqhdPZdcGCokW6G",
    "WOG+W4vGWRKhW5in",
    "awTvEmk7l8kO",
    "AJPhoHWTWQi3u8osW7JdRmkzFIhcQcxdJtzXW7WFW75fWRdcMSkAjZZdS1adW6CccYldNrxdKCkUW7qs",
    "qSotWRe",
    "W40FtSksWRrzAMBcGCoqW6eJd8oLvmoFn1iNr8o0W5zNWOO",
    "W7pdQCkh",
    "W5blCCoGWRFcJColzG",
    "nYPcxeP6W7veW7W/b8kzWQSyWOJcKdJcOq",
    "xdxcJ0VcPSk6fa",
    "W5rRWOyG",
    "W6ldN8k5WRjkESosmW",
    "hCo2WOH1WOrRCWO",
    "WPNdKCkukmkQnG",
    "W7KJtJGa",
    "W57cKZNcQmkRyJtdSmkOp0LkWOnU",
    "mCoWCmosWOmvemobmx7cNSomWOqB",
    "B8oqWRpdKd9E",
    "nKNcQ0L+",
    "W77dNYH3ufGDoSkUW4JcLmogtZZdKW",
    "WOhdHSkpkG",
    "WPvxq8kvWRrwiMhdJSoDW7yI",
    "iCk2AYpdHa",
    "h8owuW",
    "W53cJdRcM8k2tJRdHSkipe0",
    "zey5ANa",
    "W5NcHdFcK8k6rh3dOmkgCKPqWOX+tCoOymkmW5ldGcpcVmoom8orW4y8WQNdKmoCndVdGe1/xJddRNPdW4tcJCodW7G",
    "WQKVW4rXWQimW4yrW71d",
    "sCoPW7HkW4pcIMK",
    "DgbxrKD4W6m",
    "twpcQL4bWQv6WOrMWQO",
    "iLlcINhcRSkPWRtdL2RcJq",
    "Amk1WR7dHedcHwBcQmk6srrs",
    "jupdR8kkbSo/W7tdVGpcM8oBWRi",
    "AmozWRxdHJvtamonWQmmA38",
    "CbRdHd3cJmkJWQxdRZZdGq",
    "m0ddSbSy",
    "W6BdRmkPhSkcW7/cGJmWW7tcOf5J",
    "WRxdHSofW4FcTf/dHq",
    "W7rfWQxcKSosWPNcMa",
    "wtxcNvZcOSkVaG",
    "W7vhBmo0WRFcLmkyAGNcPSkfge3dUfldU8odWQldJHusjmo8W6xdUYhdMmktrmoLWP/cO0vtW4ODWOWyASk8xXpcVr4CzMJcUCk+euvQWPtcM15ocqTwWRiMWPBcNSkQW49+W5WfW7mUWQaCWOFcGmoylI3cNKi",
    "WQb9WPinoq",
    "FgTayu9YW6m",
    "axZcTMnUWPddHXNdPmkwlSkeyJfsjMBdGCorvLtcSg/dV8oOCCoaCmk0WPicWOydp3BcPr8",
    "FSkdeSoaWRVcTd4/",
    "W7rTWP8",
    "WPmlW6ldK2RdQCo9W6xcUuToW77dGmorWO3cICoHu8knhmoxbqmIns4FWQ8cWPBdTmotifpdMmoU",
    "W7mhzXmY",
    "W5nneIGLW4i",
    "nwKyh8o6WQVdNa",
    "8jocTXJdVSkCWRxdLeW",
    "b8oihSkrzCkmW5RdJCkwW6DL",
    "xmoZW6H8W5BcM2GYWPW",
    "WQv7wM8",
    "8kEaRuFdHCo9WQ/dHKG",
    "WOOit8ktWRzdtwZdQSotW6O",
    "WPBdN8oOW5BcSetdMq",
    "o8kEfCoBW6K",
    "W4ijqCkwW6LFF2dcJSozW7CTfSkKh8ojoKD8EmkcW5zRWOJdU8o2WRq+EaNdHCoBW4eqW7jzhw/dI1ZdTsddP8omW5NcSbBdGMhdK8oajSoA",
    "hv5RW7ZcTmoHWP8",
    "W5iBzH8lWQldTsBdMNRdUMpcIG",
    "pSkIsIddMca7WPnFbq",
    "DumRkW",
    "kfXKcW",
    "B8oqWRpdKdbieCoDWOabBa",
    "WQDPWQa",
    "wMXqtazCW6KpW716l8kzWQWEW5tcMJVcO1OE",
    "j2VcQNX+W4pdUG/dVSov",
    "bCo0WPtcTYS",
    "W6LfWRJcHCoAWPdcMSoGkcFdRL/cQmkU",
    "cmknbmoIW77cTtXWpxmCo2pcJSkirSojW48eDKBdScOhvSkBW6XOxmkZWRO6cJZdJ8kc",
    "CtPxjrPJ",
    "r1tdR8k0WObU",
    "ewFcSw5+W5xdJG/cSmoT",
    "o8kQkIVdPWvbu3pcSW",
    "yZhcKLpcRSkZfSkXWPXibmofW6j4dq9x",
    "hxdcVLhcO8oNuq",
    "fLtdTCkkia",
    "aCo6WQ/cLWfslNVdN8kEW7a",
    "nx7cJ1JcVa",
    "8jUpK1rcqSohlSoPW7XZFG7cN8oTB1KIgGjFW6bmkmkufwn3WOHM",
    "WOJdJCkuWR96",
    "lmkjf8orW7RcRW",
    "xhtcHuqnWRnn",
    "yYlcUeNcRG",
    "WPS4W4j5WQamW6OnWQrR",
    "WRFdVCk+bSkqgCoYlmooCqJdGqe",
    "WRJcRmkLF8ktWRaZ",
    "CZNcMfZcRSkZfSoqWQjshmogW7C",
    "WRyMW58cWQzt",
    "Fwrqva",
    "W5G/W6RdKtbM",
    "kvdcKM3cMW",
    "fwfuuSk2oSkL",
    "u2agyKFdQbhcRa",
    "W6LsWRpcH8owWORcNSokgJZdOulcUCk0W6tdMq",
    "WQrNWQC",
    "WP9khtSYW4ldSqdcSXFcNCofW6ddSmoQW4zXW5lcOW",
    "DSo3WQ/dSLpcGcm",
    "W7GQW7VdQJDXWOKBCCkr",
    "W6xdJSkSW68D",
    "xNPuCMRdRuxcQmkGpeOJWQpcHeLNbJbegSkP",
    "xtxcKL/cS8k1",
    "pCkvbSoA",
    "ouvqCmkf",
    "W7/dLZXNwL4BsmkMW5xcJa",
    "W4rhvCodWO0",
    "x8kzDSoYWQLOea",
    "W6bpDSoZWRddGW",
    "qmoQW6vxW64",
    "WOxdICk2WPz9FLT/scTH",
    "amkuf8o7W7xcOSomhdW8Dmo2W5ypA8kI",
    "W7FdImkRWRS",
    "qCopW68",
    "W58KW4FdIIz0WOamBmkCd1enWPJdGgzSxW",
    "DLxdQSoIW5W2WQVdK8okW6tdRa",
    "W5jBCCo4",
    "nKfHlhW",
    "W5pdLbZcLSk7ytddU8kCpfi",
    "W7BdK8kKWQy",
    "WRJcRmkMy8kDWR0Lja",
    "nw9sDSk7ECkOxrZdPergWP0",
    "W51IprCj",
    "WRPTWR4KpXG4WOPLWOxdOSo7WQBdKq",
    "W4Lwuq",
    "W6inhqZcNW",
    "fmk0ucJdIqS",
    "lmodWRPtWRa",
    "kCobgmkaqSkzW5O",
    "FSkwWOJcINJcGSkIfSkMWP7dRCknW7m",
    "WOtdGSoZW74",
    "W7OdbG",
    "W4TfW7VcH8owWORcNSokid3dQHFcOSkVW6/dKGZcS8kHvmo0l0RcPCk9W7jBW4NdHfacW6jHjKBcTG8dWPeaW4LIW7mLkd8dW67dMSkkoXddSGJcJ3COWQNdVX5CDL0ChCknW4FcLSkT",
    "mej/ahy",
    "WRNcVCk4W5G",
    "dSocmSkXDa",
    "qZxcNvZcGCk0hCo0WPXeb8ol",
    "zZhcN27cOSkZfCo+WR1VcmogW6HJgLi5zCkdh0VdRX00WRlcICoLC2dcKc0Aaq7dLIe",
    "WRVcICkaj1hdONvDmXBdKmkrWQfQz23cUHJcLWNcSG",
    "WQaQW5hdRI/dICoB",
    "xCoJW7PJW4pcIMq",
    "uLpdVmodW5q7WQq",
    "WQvukqNcUuFdIYy",
    "WRNcOmkxW5ZdSSkdaa",
    "WQxdKmkUW5LnAKfYssb1WPe4heFcJ2LBWQddJfbZ",
    "W58zhXJcNxRdPa8qbq",
    "4O2NtcimWPHzW6Wwav1xWPOVWPjJWPG",
    "DmkqWO3cGNJcImoZkSk4WRNdVSk9",
    "lCovjCo+W7JcGmoabYa9BG",
    "h8k4ts8",
    "cmkvkCkAr8k/W5ldI8keW6fL",
    "W6HFyqGqWQRcVXpdMh7dQMm",
    "FhDwwLq",
    "aCoCrmo3WQWXvq",
    "xrTwW4VcICkZ",
    "W5VdLZzN",
    "lv1+Bf5YW7C",
    "WQaUW4pdHt3dLCo4W5NcIXT4W6FdNCoy",
    "WRpdKCoQW6FcSK/dKmo7W6NcR8o3fSoCy8o8tSoF",
    "WOtdImo0W4xcPW",
    "WPZdMSkzi8kRoSk3hG",
    "eSkDFdBdTW",
    "WQdcQSkIW4BdQ8kbaq",
    "WQK7W4RdNZS",
    "zcRcGuqrWPDeWPj9WQFdJW",
    "mhlcRwTLW50",
    "DSoxWPZdMra",
    "WPKSW4qjWRyBFSotcmobW5/cUSoktCoCifWhxszaWOOTW4ZcTmk7EqpdQ8oaW7ukeCohW47dNhFdSNCRbcSLCWpcPW",
    "WPD7tvG8W4xdUmo1cmotBLiOW6BcHe3dQerRjZldLSkSW6mKhtBdML7cLq",
    "iCobW5ddLdNdKG",
    "lXBdNcyOec7cN8onW4CQ",
    "qmkka8kJW7SHxmoWn2dcMW",
    "emk9yZVdUXD8txJcOW",
    "fCklnmoJW67cQmoddW",
    "sCoEWQJdKZK",
    "igNdRCk4kG",
    "vclcJLFcTq",
    "wCo3DXhdTLr6",
    "WP7cHmkFpea",
    "W6hcP8opW4GBoCkXBSkoWQ4",
    "fv/dRmkB",
    "W4lcRCoFW4uemSkDsSkAWRjIo3G",
    "CexcLwRcVmoQWRZdT3lcGKxcU31GiGSruHVdIJW",
    "lrBdGtWQ",
    "WPy+W5H3WQib",
    "W5ftW6LWoW",
    "WOOMW5tdRIpdLCopW6RcIqrOW7VdNq",
    "qh7cOKKqWQrA",
    "WRq6W4bsWR8nW7eeWRnSr8ogW74O",
    "WOhcH8ksa1a",
    "wCoJW55dW5O",
    "8lc/RLWDemoKW59tWQjeWQNdPmofW5ddM8oKuCoYWQXDvL3cJdS8tSopaSoc",
    "WRGsW7btWQW",
    "os1hwKHRW68fW60ZbCkBW78kW4/cHYpcUeyfW6iVWPNcLq",
    "WQmQW4K",
    "bSond8kxsSkqW5JdPCkCW6bKW4/dRW",
    "WPWYW5PKWRmB",
    "qs9dpGX/W6W4qConW73cTmkDFgJcRJldJczGW7mkW64gWR3cLSoepdFcTa0jW7Ossde",
    "WRL9WRiTpWiRWQ1GWRRdPmoQWRa",
    "omkYvZldNGK/",
    "W63dOSoX",
    "w2Xauu9XW6e5W7K0aa",
    "W7iDrr4a",
    "W6tdImkJWQ8",
    "W5ZdLCkTWQTlnmohn8k/cvybW5JcSmoUW5tcM0evpmoIWP47rH/cOCkSW6tcJ37cTKy",
    "WORcICkEn13dPW",
    "B8oDWRBdHHvsfCkuWPqgDgRcOHBdSCkNpW",
    "WPddJmkkjSkSo8k2",
    "oColW7JdMJxdN8o+",
    "hSoyqmo4WQu",
    "tc9fdY1+W6L8w8omW7BcJ8kDFtVcVtddNq",
    "CXNcUhhcICkAuCoqWOjWjSo9W41E",
    "W5y2zs4J",
    "kx7cN3dcUa",
    "fhXjySkNkSkpvIxdRK8",
    "pmkjcmkauCkyWPldKmkEW6r0W48",
    "kSkEdSoz",
    "dCokhCkst8kxW5VcHmksW710W4xdVSoJfMhcRHBcPCoTWPVdIYhdN17dJSkaf8kuCb9vcCkogmoNkmocmqpcTCknlbxdG8k0n0pcVaiWdCooWR/cOW",
    "hmowWQTeWRHwqgzUW6u8FSoTW65gW6y",
    "W5VdKsPguLmu",
    "kmo3BbxdQZ56WPTirGFcNSopDW",
    "b2fGFSkVpmkP",
    "W6n3WOjuW6CjEColoSkVW5NcOW",
    "mCkYsctdIWT6WR1PyKJcGSkAi8kmWPjRW5LPWPmVW5C",
    "B8oDWRBdHHvsfCkuWPqgDgRcOHBdQ8o0Aa7cKmo/oSkjytz6WPzHECkara",
    "ymotWQhdMXGAb8obWOqkFw/cTbtcVSoRm03cSmojg8k8jZD5WPf9lCkactldVH/cQqHgBCkHWQ44W43dL8k/imoQaxtcVh4",
    "W5KUW7JdLsP7WP8m",
    "WOddGmkCySoM",
    "WO3cMCkzpmkSomo/gCoSvtJdOq",
    "pvlcIw7cRSkTWRq",
    "q8oPW60",
    "W71DdYy/W4/dPWdcSWJcH8oaW6tdUSk+W4bXW5ZdQb4pcSodfNvyW48yWRhcSCkrrXS",
    "WQ5PWQqH",
    "WP8RW6KVWRS",
    "W5hdMZzKr1G",
    "W7BcLmodW6C4",
    "ySo9WQ3dM1pcGc4",
    "WQRdK8knWP97EubYsHDJW4a",
    "W5tdV8k0eG",
    "W4BcOCopW4if",
    "g1ddISkXdW",
    "W7idaZZcM1FdRq",
    "W5BdN8k+WQfn",
    "jSond8kYtSkrW4RdISkf",
    "b8kYrsxdUqC2WPTPtqBcJW",
    "WRBcJCkhC0hdPNSjDq",
    "C1qXi8o2",
    "W5blCSo8WRNcGmoD",
    "aCkLtsW",
    "hKXWcNf7WQXrW5BdPrZcRYZdTHjRW5P2WQpcOmkIWOD+W7DizXFcPbf/h1DGW6BcGq",
    "WQRcICkEofVdPhnDbGBdICkFWQG4EYxdQa",
    "dCoOAtVdVqicqhNcQX18",
    "uSoXWRNdK1VcJsZdVmkIsX9ypwZdLwNcIWrQmSkeW4tcOXmeWPz9WRPqymkxkSoho8oQ",
    "thtcT0GBWQa",
    "v8oiW4TxW6q",
    "fSoxumopWQq/vq",
    "waPDW4e",
    "oCo6WOhcRsaHp3VdHmkFW6xdNca",
    "WRWSW4mGWRnyEa",
    "dNZcPgHJW57dJLBdUCoyAmkvExjPr1xcJSkpda",
    "WQhcQSk/W5ldVSko",
    "WR/cLsZcKmk8rs7dP8kmnGOFWOb1g8ocxCk9W5ldKIxdSmofjCkhWPjoWQ7dHCoAlJRcGarX",
    "aSkmW7BcGG",
    "rmoSW6GdWRy",
    "lmohW4RdMJVdN8oromkhWOq",
    "4PMQ77IhW7adnWyRWQTSWPdcOCo2WRhdKfhcTSkyW7nisCkoW7JcS8kfWO3dH8oGW44b",
    "Dgru",
    "W5NILPNIL7FILRBcVbBcJbi2W7xcLq",
    "kqJdNW",
    "W4PiWR/cKCo1WOZcKSophJBdV1ZcVG",
    "ig9wwmkLpCkOxsFdRW",
    "W4iLW6JdItbXWOKA",
    "BSovWQldLH9ue8oMWOyhCW",
    "e8kCfCoqW70",
    "yNaeDwldVq",
    "hCknf8oaW7JcSZK/jLioig3dNCog",
    "W6fBCmoIWOZcISovzG",
    "ySo3WQRdHa",
    "gmkYvZldNGK/",
    "WPdcNmkei0e",
    "WRddMCkykSk6oSk3cCkJFtZdVYhdPmksW5mjvwJcGCoqubH7bCooySkRW7eVWPn5WRdcTmkcW6eSdmo5WQpdSmoVW6v+W5md",
    "WOHHWRqKpXG4WOXLWOxdPa",
    "WO/cPSk1W5hdO8kia8o3C8oTWPFcI2ypy8kgWOCPWQ3dVmk9tGObWORdQwfOWOhdQhFdImogaCk1WRDrrSoG",
    "WOVIHBlcQW",
    "B2bkuuLT",
    "qXTlW5ZcKSk1W4Wj",
    "WQ3dLMVcQSk0urhdU8kT",
    "xNqcuMRdRsBcVmk/ixS5WPpdIq",
    "W6ZcOCovW4yzna",
    "bCkfe8o2",
    "WRldPmk2ymkaWRv7nCkuW43dNs4",
    "WPNcOCk8FCkxWPnKCCojWPe",
  ];
  a0_0x51a9 = function () {
    return _0x11b490;
  };
  return a0_0x51a9();
}
function jsonToCsv(_0x505f3a) {
  const _0x3b9857 = a0_0x5cae94;
  if (!_0x505f3a["length"]) return "";
  const _0x546b54 = Object["keys"](_0x505f3a[0x0]),
    _0x5779e4 = [_0x546b54["join"](",")];
  for (const _0x3ff933 of _0x505f3a) {
    const _0x5bddf2 = _0x546b54["map"](
      (_0x4be2bc) => _0x3ff933[_0x4be2bc] || "",
    );
    _0x5779e4["push"](_0x5bddf2["join"](","));
  }
  return _0x5779e4["join"]("\x0a") + "\x0a";
}
function autoUpdateCsvForOrder(_0x3b5313, _0x12a041) {
  const _0x43a981 = a0_0x5cae94;
  if (!CONFIG["AUTO_UPDATE_CSV_BIDS"]) return ![];
  const _0x5cbbdf = bidRows["find"](
    (_0x25a7b0) =>
      String(_0x25a7b0["SapOrderId"])["replace"](/^0+/, "") ===
      String(_0x3b5313)["replace"](/^0+/, ""),
  );
  if (!_0x5cbbdf) return ![];
  const _0xb1bb33 = (_0x5cbbdf["DestCityDesc"] || "")["trim"](),
    _0x134c96 = (_0x5cbbdf["Spi"] || "")["trim"]();
  let _0x23966e = ![];
  for (const _0x28b605 of csvData) {
    if ("MQOJQ" !== "cwrVJ") {
      const _0x331a36 = (_0x28b605["City Code Descriptio"] || "")["trim"](),
        _0x2f9cea = (_0x28b605["Special Process Indi"] || "")["trim"]();
      if (_0x331a36 === _0xb1bb33 && _0x2f9cea === _0x134c96) {
        if (_0x28b605["hasOwnProperty"]("BIDING AMMOUNT"))
          ((_0x28b605["BIDING AMMOUNT"] = _0x12a041), (_0x23966e = !![]));
        else {
          if (_0x28b605["hasOwnProperty"]("BIDING AMOUNT")) {
            if ("vUJbB" !== "dJqYr")
              ((_0x28b605["BIDING AMOUNT"] = _0x12a041), (_0x23966e = !![]));
            else return "";
          }
        }
      }
    } else _0x22ae61("VacVendorRankingNewSet error: " + _0x14bc83["message"]);
  }
  if (_0x23966e) {
    if ("boGeb" === "boGeb") {
      const _0x95411d = path["resolve"](CONFIG["CSV_FILE"]);
      return (
        fs["writeFileSync"](_0x95411d, jsonToCsv(csvData), "utf-8"),
        bidRows["forEach"]((_0x24daa6) => {
          const _0x27e79b = _0x43a981;
          "bgqXT" !== "bgqXT"
            ? _0x33752e(
                "CSRF token obtained via SessionSet: " +
                  _0x2a5162["substring"](0x0, 0xc) +
                  "...",
              )
            : (_0x24daa6["DestCityDesc"] || "")["trim"]() === _0xb1bb33 &&
              (_0x24daa6["Spi"] || "")["trim"]() === _0x134c96 &&
              ((_0x24daa6["BiddingAmount"] = Number(_0x12a041)["toFixed"]()),
              (_0x24daa6["AvgWtBidAmount"] = Number(_0x12a041)["toFixed"]()));
        }),
        logOk(
          "[AUTO-FIX] Updated CSV and memory for City: " +
            _0xb1bb33 +
            ", SPI: " +
            _0x134c96 +
            " to new amount: " +
            _0x12a041,
        ),
        !![]
      );
    } else
      _0x3f1739("No\x20CSV\x20matches\x20found\x20for\x20current\x20slot.");
  }
  return ![];
}
function getCsvBatchKey(_0xcab28d) {
  const _0x290fe3 = a0_0x5cae94,
    _0x5d25a7 = _0xcab28d["ClubId"]
      ? _0xcab28d["ClubId"]["toString"]()["trim"]()
      : "";
  if (_0x5d25a7) return "CLUB:" + _0x5d25a7;
  return (
    "ROW:" +
    [_0xcab28d["SapOrderId"] || "", _0xcab28d["Posnr"] || ""]["join"](":")
  );
}
function buildCsvBidGroups(_0x918d45, _0x1ecbbf, _0x3e8bfd) {
  const _0x314887 = a0_0x5cae94,
    _0x3399ef = [],
    _0x4c682e = {};
  return (
    _0x3e8bfd["forEach"]((_0x1a6279) => {
      const _0x189a69 = _0x314887;
      if (_0x1ecbbf["includes"]((_0x1a6279["KunagName1"] || "")["trim"]())) {
        if (windowStats) windowStats.skippedDelete++;
        return;
      }
      const _0x175730 = (_0x1a6279["DestCityDesc"] || "")["trim"](),
        _0x298e2a = (_0x1a6279["Spi"] || "")["trim"](),
        _0x5b2d0c = _0x918d45["filter"](
          (_0x34b0d2) =>
            (_0x34b0d2["City Code Descriptio"] || "") === _0x175730 &&
            (_0x34b0d2["Special\x20Process\x20Indi"] || "") === _0x298e2a,
        );
      if (!_0x5b2d0c["length"]) {
        if ("uqbDG" === "bJAXX")
          try {
            const _0x24cbaf = _0x2ab04f["parse"](
              _0x50d298["readFileSync"](_0x5743c7, "utf-8"),
            );
            _0x24cbaf["userid"] &&
              _0x24cbaf["apikey"] &&
              (_0x6d2386 = _0x24cbaf);
          } catch (_0x2acc24) {}
        else return;
      }
      const _0x32581f = getCsvBatchKey(_0x1a6279);
      (!_0x4c682e[_0x32581f] &&
        ((_0x4c682e[_0x32581f] = { key: _0x32581f, rows: [] }),
        _0x3399ef["push"](_0x4c682e[_0x32581f])),
        _0x4c682e[_0x32581f]["rows"]["push"]({
          item: _0x1a6279,
          bidAmount: Number(
            _0x5b2d0c[0x0]["BIDING AMMOUNT"] ||
              _0x5b2d0c[0x0]["BIDING\x20AMOUNT"] ||
              0x0,
          )["toFixed"](),
        }));
    }),
    _0x3399ef
  );
}
function resetCsvBatchState() {
  const _0x8de717 = a0_0x5cae94;
  (plantConf &&
    plantConf["SlotNumber"] &&
    plantConf["SlotNumber"] !== currentSlotNumber &&
    (currentSlotNumber !== null &&
      logInfo(
        "New slot " +
          plantConf["SlotNumber"] +
          " detected, wiping old submission memory.",
      ),
    (currentSlotNumber = plantConf["SlotNumber"]),
    csvBatchState && (csvBatchState["submittedKeys"] = {})),
    (csvBatchState = {
      submittedKeys: (csvBatchState && csvBatchState["submittedKeys"]) || {},
      activeKeys: [],
      pendingBatches: [],
      groupsByKey: {},
      autoRunning: ![],
      completed: ![],
    }));
}
function prepareCsvBatches(_0x1ae1fb) {
  const _0x2d0abc = a0_0x5cae94,
    _0x3e490c = [],
    _0x3a87e7 = csvBatchState["submittedKeys"] || {};
  ((csvBatchState["groupsByKey"] = {}),
    (csvBatchState["activeKeys"] = []),
    (csvBatchState["pendingBatches"] = []),
    _0x1ae1fb["forEach"]((_0x3b70ae) => {
      const _0x2d94a6 = _0x2d0abc;
      ((csvBatchState["groupsByKey"][_0x3b70ae["key"]] = _0x3b70ae),
        !_0x3a87e7[_0x3b70ae["key"]] && _0x3e490c["push"](_0x3b70ae["key"]));
    }));
  // SPI-1164 priority REMOVED (user request): jo match mile use natural order me utha lo.
  // Sirf greedy fill (max CSV_BATCH_SIZE) + group atomic — koi SPI ranking nahi.
  const _0x4d3a58 = CONFIG["CSV_BATCH_SIZE"] || 0x3;
  let _0xfaf359 = [],
    _0x4814e4 = 0x0;
  for (let _0x20fd76 = 0x0; _0x20fd76 < _0x3e490c["length"]; _0x20fd76++) {
    const _0x35f3c2 = _0x3e490c[_0x20fd76],
      _0x11f433 = csvBatchState["groupsByKey"][_0x35f3c2],
      _0x3e5166 = _0x11f433 ? _0x11f433["rows"]["length"] : 0x1;
    (_0xfaf359["length"] > 0x0 &&
      _0x4814e4 + _0x3e5166 > _0x4d3a58 &&
      (csvBatchState["pendingBatches"]["push"](_0xfaf359),
      (_0xfaf359 = []),
      (_0x4814e4 = 0x0)),
      _0xfaf359["push"](_0x35f3c2),
      (_0x4814e4 += _0x3e5166));
  }
  if (_0xfaf359["length"] > 0x0) {
    if ("rFfOt" !== "rFfOt")
      return (
        _0x45b76b["response"]
          ? _0x22f2db(
              "VacVendorRankingNewSet failed: HTTP " +
                _0x503cd7["response"]["status"],
            )
          : _0x131b09("VacVendorRankingNewSet error: " + _0x20b8cc["message"]),
        ![]
      );
    else csvBatchState["pendingBatches"]["push"](_0xfaf359);
  }
  csvBatchState["completed"] = _0x3e490c["length"] === 0x0;
}
function applyNextCsvBatch() {
  const _0x1313c3 = a0_0x5cae94;
  if (!csvBatchState["pendingBatches"]["length"])
    return "WvWuF" !== "urWhT"
      ? ((csvBatchState["activeKeys"] = []),
        (csvBatchState["completed"] = !![]),
        ![])
      : new _0x30c692((_0x87f846) => _0x4f78c3(_0x87f846, _0x22ea5a));
  return (
    (csvBatchState["activeKeys"] = csvBatchState["pendingBatches"]["shift"]()),
    bidRows["forEach"]((_0x2d7036) => {
      const _0x1e03b0 = _0x1313c3;
      if ("UaAhU" === "nJxdc") {
        const _0x3e6476 = _0x1d1567(_0xda5329);
        if (_0x3e6476 === null) return null;
        const _0x58d9e1 = _0x22285a(_0x28bbff);
        return _0x3e6476 + _0x58d9e1;
      } else
        ((_0x2d7036["BiddingAmount"] = 0x0),
          (_0x2d7036["AvgWtBidAmount"] = 0x0));
    }),
    csvBatchState["activeKeys"]["forEach"]((_0x2fc33e) => {
      const _0x363847 = _0x1313c3;
      if ("hrKzE" !== "hrKzE")
        _0x4c137b = _0x252c07["response"]["headers"]["x-csrf-token"];
      else {
        const _0x35cb04 = csvBatchState["groupsByKey"][_0x2fc33e];
        if (!_0x35cb04) return;
        _0x35cb04["rows"]["forEach"]((_0x3e8d73) => {
          const _0x112923 = _0x363847;
          if ("xbObe" !== "yghpT")
            ((_0x3e8d73["item"]["BiddingAmount"] = _0x3e8d73["bidAmount"]),
              (_0x3e8d73["item"]["AvgWtBidAmount"] = _0x3e8d73["bidAmount"]));
          else {
            let _0x5eab21 = 0x0;
            (_0x108f9b["log"]("\x0a" + "═"["repeat"](0x32)),
              _0x530680["log"](
                "" +
                  _0x15b152["bright"] +
                  _0x4bd876["cyan"] +
                  "  RANKING RESULTS FOR THIS CYCLE" +
                  _0x3f73f9["reset"],
              ),
              _0x5bd457["log"]("═"["repeat"](0x32)),
              _0x5d8068["forEach"]((_0x11ddc8) => {
                const _0x5d36a1 = _0x112923,
                  _0x30d48d = _0x55e0e5(_0x11ddc8["BiddingRank"] || "")
                    ["trim"]()
                    ["replace"](/^0+/, ""),
                  _0x5029c9 =
                    _0x30d48d === "1" ||
                    _0x1e2497(_0x11ddc8["BiddingRank"]) === 0x1;
                _0x5029c9
                  ? (_0x5eab21++,
                    _0x3a21db(
                      "🏆 RANK 1 ACHIEVED! -> City: " +
                        _0x11ddc8["DestCityDesc"] +
                        ", SPI: " +
                        _0x11ddc8["Spi"] +
                        ", Bid: " +
                        _0x11ddc8["BiddingAmount"],
                    ))
                  : _0x1fa76e(
                      "📉\x20Rank\x20" +
                        (_0x30d48d || _0x11ddc8["BiddingRank"] || "?") +
                        " -> City: " +
                        _0x11ddc8["DestCityDesc"] +
                        ", SPI: " +
                        _0x11ddc8["Spi"] +
                        ",\x20Bid:\x20" +
                        _0x11ddc8["BiddingAmount"] +
                        " (L1 is " +
                        _0x11ddc8["L1BidAmount"] +
                        ")",
                    );
              }),
              _0x42ba14(
                "Ranking Summary: " +
                  _0x5eab21 +
                  " out of " +
                  _0x39ac08["length"] +
                  " bids achieved Rank 1!",
              ),
              _0x1559f4["log"]("═"["repeat"](0x32) + "\x0a"),
              _0x110991(_0x3995c5));
          }
        });
      }
    }),
    !![]
  );
}
function markActiveCsvBatchSubmitted() {
  const _0x5340ef = a0_0x5cae94;
  (csvBatchState["activeKeys"]["forEach"]((_0x22511c) => {
    const _0x19be6e = _0x5340ef;
    csvBatchState["submittedKeys"][_0x22511c] = !![];
  }),
    (csvBatchState["activeKeys"] = []));
}
function hasActiveCsvBatch() {
  const _0x4137db = a0_0x5cae94;
  return (
    csvBatchState["activeKeys"] && csvBatchState["activeKeys"]["length"] > 0x0
  );
}
function isActiveCsvBatchRow(_0x2de125) {
  const _0x2548d6 = a0_0x5cae94;
  if (!hasActiveCsvBatch()) return ![];
  return csvBatchState["activeKeys"]["includes"](getCsvBatchKey(_0x2de125));
}
function applyCsvDataToOrders() {
  const _0x39e201 = a0_0x5cae94,
    _0x223d85 = buildCsvBidGroups(csvData, deleteList, bidRows);
  (resetCsvBatchState(), prepareCsvBatches(_0x223d85));
  const _0x12bf63 = _0x223d85["length"],
    _0x3aee70 = csvBatchState["pendingBatches"]["length"],
    _0x398f9e = _0x223d85["reduce"](
      (_0x28e07e, _0x4f8a61) => _0x28e07e + _0x4f8a61["rows"]["length"],
      0x0,
    );
  if (windowStats) windowStats.matched = _0x398f9e;
  return (
    logOk(
      "CSV matching: " +
        _0x398f9e +
        " rows matched across " +
        _0x12bf63 +
        " groups",
    ),
    logInfo(
      "Batch size: " +
        CONFIG["CSV_BATCH_SIZE"] +
        ",\x20Total\x20batches:\x20" +
        _0x3aee70,
    ),
    _0x12bf63 === 0x0 &&
      logWarn(
        "No CSV matches found! Check CSV columns match order data (DestCityDesc, Spi)",
      ),
    applyNextCsvBatch() &&
      logOk(
        "First batch applied: " +
          csvBatchState["activeKeys"]["length"] +
          " groups",
      ),
    _0x12bf63 > 0x0
  );
}
function parseSapDate(_0x684a5a) {
  const _0x1798bc = a0_0x5cae94;
  if (!_0x684a5a) return null;
  const _0x2984a5 = _0x684a5a["match"](/\/Date\((\d+)\)\//);
  if (_0x2984a5) return parseInt(_0x2984a5[0x1], 0xa);
  return null;
}
function parseSapTime(_0xdde31b) {
  const _0xab7a98 = a0_0x5cae94;
  if (!_0xdde31b) return 0x0;
  const _0x34b8a1 = _0xdde31b["match"](/PT(\d+)H(\d+)M(\d+)S/);
  if (_0x34b8a1) {
    if ("juBMo" !== "vPxFU")
      return (
        (parseInt(_0x34b8a1[0x1]) * 0xe10 +
          parseInt(_0x34b8a1[0x2]) * 0x3c +
          parseInt(_0x34b8a1[0x3])) *
        0x3e8
      );
    else {
      _0x435057("Could not solve captcha, aborting");
      return;
    }
  }
  return 0x0;
}
function convUtcToLocal(_0x486d0d, _0x27b60b) {
  const _0x9f2e8d = parseSapDate(_0x486d0d);
  if (_0x9f2e8d === null) return null;
  const _0x57d11e = parseSapTime(_0x27b60b);
  return _0x9f2e8d + _0x57d11e;
}
function formatCountdown(_0x50379e) {
  const _0x4a0599 = a0_0x5cae94;
  if (_0x50379e < 0x0) _0x50379e = 0x0;
  const _0x37cee9 = Math["floor"](_0x50379e / 0x36ee80),
    _0x32c58c = Math["floor"]((_0x50379e % 0x36ee80) / 0xea60),
    _0x1f14a0 = Math["floor"]((_0x50379e % 0xea60) / 0x3e8),
    _0x10d88c = _0x50379e % 0x3e8;
  return (
    String(_0x37cee9)["padStart"](0x2, "0") +
    ":" +
    String(_0x32c58c)["padStart"](0x2, "0") +
    ":" +
    String(_0x1f14a0)["padStart"](0x2, "0") +
    "." +
    String(_0x10d88c)["padStart"](0x3, "0")
  );
}
let captchaCacheMap = {},
  captchaCreds = {
    userid: process.env.TRUECAPTCHA_USERID || "msk86380@gmail.com",
    apikey: process.env.TRUECAPTCHA_APIKEY || "HkO4eMXy3er1UMHMbVZH",
  };
function initEmbeddedCaptchaSolver() {
  const _0x112e17 = a0_0x5cae94,
    _0x55b4b5 = path["resolve"](__dirname, "./downloadImages/data.json"),
    _0x1e1c95 = path["resolve"](__dirname, "./downloadImages/credentials.json");
  if (fs["existsSync"](_0x1e1c95))
    try {
      if ("SLaBt" === "kSoxz") {
        const _0x388d30 = (_0x16a0aa["Ev_Text"] || _0x2b7831["Message"] || "")
          ["replace"](/#/g, "\x0a")
          ["replace"](/0/g, "")
          ["trim"]();
        return (
          _0xd6469d(
            "Strategy [" +
              _0x3fc135 +
              '] returned SAP Error: "' +
              _0x388d30 +
              "\x22",
          ),
          { type: "E", message: _0x388d30 }
        );
      } else {
        const _0xd371d4 = JSON["parse"](fs["readFileSync"](_0x1e1c95, "utf-8"));
        _0xd371d4["userid"] &&
          _0xd371d4["apikey"] &&
          ("aqnMn" === "yobPb"
            ? (_0x2d8245 = { status: _0x1c1beb })
            : (captchaCreds = _0xd371d4));
      }
    } catch (_0x35ae89) {}
  if (fs["existsSync"](_0x55b4b5))
    try {
      if ("nvcUW" === "JfYBW")
        return (_0x3b6388('Captcha solved: "' + _0x5d4bcc + "\x22"), _0xcdc164);
      else {
        const _0x45663e = JSON["parse"](fs["readFileSync"](_0x55b4b5, "utf-8"));
        let _0x52d89a = 0x0;
        (_0x45663e["forEach"](({ hash: _0x5be19f, result: _0xbad1db }) => {
          const _0x5618d7 = _0x112e17;
          _0x5be19f &&
            _0xbad1db &&
            ("kGWqK" !== "AODpy"
              ? ((captchaCacheMap[_0x5be19f] = _0xbad1db), _0x52d89a++)
              : (_0xdf6dc["pendingBatches"]["push"](_0x48283e),
                (_0x2e9e6d = []),
                (_0xbd8401 = 0x0)));
        }),
          logOk(
            "Embedded Captcha Solver initialized (" +
              _0x52d89a +
              " cached captchas loaded)",
          ));
      }
    } catch (_0x5a80ac) {
      "WClOd" !== "rxrGa"
        ? logWarn("Could not parse downloadImages/data.json cache")
        : _0x3d6218 &&
          _0x8650db &&
          ((_0x2ab490[_0x2bd099] = _0x2ea5d6), _0x143718++);
    }
  else {
    if ("TsakK" !== "TsakK") {
      const _0x27165e = _0x2bff8b[_0x4e78ef],
        _0x26e192 = _0x40d9cf["groupsByKey"][_0x27165e],
        _0x2f5843 = _0x26e192 ? _0x26e192["rows"]["length"] : 0x1;
      (_0x969e6["length"] > 0x0 &&
        _0x1d7209 + _0x2f5843 > _0x2ee552 &&
        (_0x1af816["pendingBatches"]["push"](_0x401983),
        (_0xd5711b = []),
        (_0x424511 = 0x0)),
        _0x364f4c["push"](_0x27165e),
        (_0x118c84 += _0x2f5843));
    } else logInfo("Embedded Captcha Solver initialized (API mode)");
  }
}
function checkLocalCaptchaCache(_0x30c2a2) {
  return new Promise((_0x4c47a6) => {
    if (captchaCacheMap[_0x30c2a2]) _0x4c47a6(captchaCacheMap[_0x30c2a2]);
  });
}
function persistCaptchaToCache(_hash, _result) {
  try {
    const _file = path.resolve(__dirname, "./downloadImages/data.json");
    let _arr = [];
    if (fs.existsSync(_file)) {
      try { _arr = JSON.parse(fs.readFileSync(_file, "utf-8")) || []; } catch (e) { _arr = []; }
    }
    if (_arr.some((x) => x && x.hash === _hash)) return;
    _arr.push({ hash: _hash, file: "learned-" + Date.now() + ".png", result: _result });
    fs.writeFile(_file, JSON.stringify(_arr, null, 2), "utf-8", () => {});
  } catch (e) {}
}
async function getCaptchaFromApi(_0x13ca67, _0x130585) {
  const _0x20e07b = a0_0x5cae94;
  try {
    if ("atAIm" === "tZhFt")
      _0x511a33(
        "Login\x20successful.\x20CSRF\x20token\x20obtained\x20of\x20length:\x20" +
          _0x44bb42["length"] +
          "...",
      );
    else {
      const _0x196ad1 = await axios["post"](
          "https://api.apitruecaptcha.org/one/gettext",
          {
            userid: captchaCreds["userid"],
            apikey: captchaCreds["apikey"],
            data: _0x13ca67,
            case: process.env.TRUECAPTCHA_CASE || "mixed",
          },
          { timeout: 0x2710 },
        ),
        _0x357afc = _0x196ad1["data"] && _0x196ad1["data"]["result"];
      if (_0x357afc) {
        if ("mpHBq" === "mpHBq") {
          captchaCacheMap[_0x130585] = _0x357afc;
          persistCaptchaToCache(_0x130585, _0x357afc);
          return _0x357afc;
        } else _0x3af604("Login error: " + _0x24b3b3["message"]);
      }
      return "Redo";
    }
  } catch (_0x2a732b) {
    return "lqVFU" === "lqVFU"
      ? "Redo"
      : (_0x26c52f("CSV\x20file\x20not\x20found:\x20" + _0x22d4f0), ![]);
  }
}
async function fetchCaptcha(_0x386813 = ![]) {
  const _0x599782 = a0_0x5cae94;
  try {
    const _0x4117aa = plantConf["Plant"],
      _0x1436d3 =
        "/sap/opu/odata/sap/ZVC_TRANSPORTER_SRV/EbiddingCaptchaSet(Vendor='" +
        CONFIG["USER_ID"] +
        "',Plant='" +
        _0x4117aa +
        "\x27)",
      _0x534395 = await client["get"](_0x1436d3, {
        headers: { "X-Csrf-Token": csrfToken },
      }),
      _0x576584 = _0x534395["data"]["d"]["ImageString"];
    if (_0x576584) {
      if (!_0x386813)
        logOk("Captcha image received (" + _0x576584["length"] + " chars)");
      return _0x576584;
    }
    return null;
  } catch (_0x5cd3bd) {
    if (!_0x386813) logErr("Captcha fetch error: " + _0x5cd3bd["message"]);
    return null;
  }
}
async function solveCaptcha(_0x4727d8) {
  const _0xbdbf2d = a0_0x5cae94;
  try {
    const _0x1d9994 = _0x4727d8["replace"](
        /^data:image\/(png|jpg|jpeg|gif);base64,/,
        "",
      ),
      _0x587a74 = crypto["createHash"]("sha256")
        ["update"](Buffer.from(_0x1d9994, "base64"))
        ["digest"]("hex"),
      _0x2b4452 = captchaCacheMap[_0x587a74]
        ? captchaCacheMap[_0x587a74]
        : await getCaptchaFromApi(_0x1d9994, _0x587a74);
    if (_0x2b4452 === "Redo")
      return (
        logWarn(
          "Captcha\x20solver\x20returned\x20\x22Redo\x22\x20—\x20retrying...",
        ),
        null
      );
    if (_0x2b4452) {
      if ("yIemw" !== "yIemw")
        (_0x9febde(
          "Error during batch submission, marking batch as skipped...",
        ),
          _0x1993a2(),
          _0x38b1b2()
            ? _0x53d7ef("Moving to next batch...")
            : (_0x50b1d1("All batches processed!"),
              (_0x3f1d39["completed"] = !![])));
      else return (logOk('Captcha solved: "' + _0x2b4452 + "\x22"), _0x2b4452);
    }
    return (logWarn("Captcha solver returned empty result"), null);
  } catch (_0x3463a0) {
    if ("RrDqi" === "RrDqi")
      return (logErr("Captcha solver error: " + _0x3463a0["message"]), null);
    else {
      const _0x5a2b36 = [],
        _0x1f5088 = {};
      return (
        _0x1ec762["forEach"]((_0x5ac65c) => {
          const _0x2f73d9 = _0xbdbf2d;
          if (_0xda9695["includes"]((_0x5ac65c["KunagName1"] || "")["trim"]()))
            return;
          const _0x579bd8 = (_0x5ac65c["DestCityDesc"] || "")["trim"](),
            _0x6a20e5 = (_0x5ac65c["Spi"] || "")["trim"](),
            _0x45b87a = _0x191f64["filter"](
              (_0x1f3fd2) =>
                (_0x1f3fd2["City Code Descriptio"] || "") === _0x579bd8 &&
                (_0x1f3fd2["Special\x20Process\x20Indi"] || "") === _0x6a20e5,
            );
          if (!_0x45b87a["length"]) return;
          const _0x1bc319 = _0x148bd1(_0x5ac65c);
          (!_0x1f5088[_0x1bc319] &&
            ((_0x1f5088[_0x1bc319] = { key: _0x1bc319, rows: [] }),
            _0x5a2b36["push"](_0x1f5088[_0x1bc319])),
            _0x1f5088[_0x1bc319]["rows"]["push"]({
              item: _0x5ac65c,
              bidAmount: _0x381c88(
                _0x45b87a[0x0]["BIDING\x20AMMOUNT"] ||
                  _0x45b87a[0x0]["BIDING AMOUNT"] ||
                  0x0,
              )["toFixed"](),
            }));
        }),
        _0x5a2b36
      );
    }
  }
}
async function fetchAndSolveCaptcha(_0x540120 = 0xa) {
  const _0x45945d = a0_0x5cae94;
  for (let _0x348511 = 0x1; _0x348511 <= _0x540120; _0x348511++) {
    if ("tNDVd" === "tNDVd") {
      log("Captcha attempt " + _0x348511 + "/" + _0x540120 + "...");
      const _0x310841 = await fetchCaptcha();
      if (!_0x310841) {
        (logWarn("No captcha image returned, retrying in 50ms..."),
          await sleep(0x32));
        continue;
      }
      const _0x299ced = await solveCaptcha(_0x310841);
      if (_0x299ced) return _0x299ced;
      await sleep(0x32);
    } else
      return (
        _0x5b6dc4("No bid amount changed"),
        { type: "N", message: "No\x20changes" }
      );
  }
  return (
    logErr(
      "Failed\x20to\x20solve\x20captcha\x20after\x20" + _0x540120 + " attempts",
    ),
    null
  );
}
async function fastPollCaptcha(_0x2e73ef = 0x32, _0x31f9bc = 0x3a98) {
  const _0x11eb03 = a0_0x5cae94,
    _0x430ea3 = Date["now"]();
  while (Date["now"]() - _0x430ea3 < _0x31f9bc) {
    if ("PbnlG" === "PbnlG") {
      const _0x30718f = await fetchCaptcha();
      if (_0x30718f) {
        const _0x32b1c9 = await solveCaptcha(_0x30718f);
        if (_0x32b1c9) return _0x32b1c9;
      }
      await sleep(_0x2e73ef);
    } else _0x2c7a82["submittedKeys"] = {};
  }
  return null;
}
function buildSavePayloadByStrategy(_0x110276, _0x4374d5) {
  const _0x5ba9bb = a0_0x5cae94,
    _0x38174a = {
      Flag: "1",
      Ev_Text: "",
      NavEBiddingTrackHis: [],
      NavEBiddingMessage: {},
      IvCaptchaValue: _0x110276,
    };
  for (let _0x1ae727 = 0x0; _0x1ae727 < bidRows["length"]; _0x1ae727++) {
    const _0x269816 = bidRows[_0x1ae727];
    if (_0x4374d5 === "FILTERED_ACTIVE") {
      if (!isActiveCsvBatchRow(_0x269816)) continue;
    } else {
      if (_0x4374d5 === "SINGLE_KEY") {
        if ("eWwUE" === "eWwUE") {
          const _0x2fe8d8 = csvBatchState["activeKeys"][0x0];
          if (_0x2fe8d8 && getCsvBatchKey(_0x269816) !== _0x2fe8d8) continue;
        } else
          (_0x22f8f5 !== null &&
            _0x4a3c5a(
              "New\x20slot\x20" +
                _0x948b07["SlotNumber"] +
                " detected, wiping old submission memory.",
            ),
            (_0x4be00f = _0x4d31d4["SlotNumber"]),
            _0x3abe9c && (_0x4adfb5["submittedKeys"] = {}));
      }
    }
    _0x38174a["NavEBiddingTrackHis"]["push"]({
      Mandt: "",
      SapOrderId: _0x269816["SapOrderId"],
      Vendor: CONFIG["USER_ID"],
      ChangeNo: "",
      ShipFromWerks: _0x269816["ShipFromWerks"],
      BiddingDate: plantConf["BiddingDate"],
      SlotNumber: plantConf["SlotNumber"],
      Freight: (_0x269816["ClubFreight"] || 0x0) + ".000",
      ClubId: _0x269816["ClubId"] || "",
      ClubFreight: (_0x269816["Freight"] || 0x0) + ".000",
      BiddingAmount: (_0x269816["BiddingAmount"] || 0x0) + ".000",
      BiddingRank: _0x269816["BiddingRank"],
      AvgWtBidAmount: (_0x269816["AvgWtBidAmount"] || 0x0) + ".000",
      CreatedOn: null,
      CreatedAt: null,
    });
  }
  return _0x38174a;
}
async function submitBidsSingleStrategy(_0x15a8fa, _0x53bdb1) {
  const _0x482a7a = a0_0x5cae94,
    _0xd0321f = buildSavePayloadByStrategy(_0x15a8fa, _0x53bdb1);
  logInfo(
    "Executing strategy [" +
      _0x53bdb1 +
      "]: sending " +
      _0xd0321f["NavEBiddingTrackHis"]["length"] +
      " rows...",
  );
  if (CONFIG["DRY_RUN"])
    return "veTLx" === "veTLx"
      ? (logWarn("[DRY RUN] Skipping actual submission"),
        { type: "S", message: "DRY RUN - not submitted" })
      : (_0x53b6a7("Captcha solver error: " + _0x183dc3["message"]), null);
  try {
    const _0x1933fb = await client["post"](
        "/sap/opu/odata/sap/ZVC_TRANSPORTER_SRV/EBiddingSaveSet",
        _0xd0321f,
        { headers: { "X-Csrf-Token": csrfToken } },
      ),
      _0x5e43ee =
        _0x1933fb["data"] && _0x1933fb["data"]["d"]
          ? _0x1933fb["data"]["d"]
          : {},
      _0xd95847 = _0x5e43ee["NavEBiddingMessage"] || {};
    if (_0xd95847["Type"] === "S")
      return (
        logOk(
          "✅\x20Submission\x20SUCCESS\x20with\x20strategy\x20[" +
            _0x53bdb1 +
            "]: " +
            (_0xd95847["Message"] || "")["replace"](/0/g, "")["trim"](),
        ),
        { type: "S", message: _0xd95847["Message"] }
      );
    else {
      if (_0xd95847["Type"] === "E") {
        if ("MCxuw" === "MCxuw") {
          const _0x1aaad4 = (_0x5e43ee["Ev_Text"] || _0xd95847["Message"] || "")
            ["replace"](/#/g, "\x0a")
            ["replace"](/0/g, "")
            ["trim"]();
          return (
            logWarn(
              "Strategy [" +
                _0x53bdb1 +
                "]\x20returned\x20SAP\x20Error:\x20\x22" +
                _0x1aaad4 +
                "\x22",
            ),
            { type: "E", message: _0x1aaad4 }
          );
        } else _0x1bfc10["mkdirSync"](_0x566d7c, { recursive: !![] });
      } else {
        if (_0xd95847["Type"] === "I") {
          const _0x2b355c = (_0xd95847["Message"] || "")
            ["replaceAll"]("0", "")
            ["trim"]();
          return (
            logWarn("Captcha issue: " + _0x2b355c),
            { type: "I", message: _0x2b355c }
          );
        } else
          return (
            logInfo("No bid amount changed"),
            { type: "N", message: "No changes" }
          );
      }
    }
  } catch (_0x15248d) {
    if ("AXvyU" === "AXvyU") {
      const _0x40ca01 =
        _0x15248d["response"] &&
        _0x15248d["response"]["data"] &&
        _0x15248d["response"]["data"]["error"]
          ? _0x15248d["response"]["data"]["error"]["message"]["value"]
          : _0x15248d["message"];
      if (windowStats) windowStats.uncertain++;
      return (
        logWarn("Strategy [" + _0x53bdb1 + "] HTTP error: " + _0x40ca01),
        { type: "E", message: _0x40ca01 }
      );
    } else {
      const _0x2fe873 = _0x2dad20["random"]();
      _0x2fe873 < 0.4 ? _0x4a0562("Redo") : _0x17ae1a(_0x5c8c13[_0x28ffb3]);
    }
  }
}
async function submitBids(_0x1582e8, _0x3401d6 = !![]) {
  const _0x4ae133 = a0_0x5cae94;
  let _0x163c16 = _0x1582e8,
    _0x521d95 = 0x0;
  while (_0x521d95 < 0xa) {
    _0x521d95++;
    if (_0x521d95 > 0x1) {
      (logInfo("Fetching fresh captcha for retry..."),
        (_0x163c16 = await fetchAndSolveCaptcha(0x5)));
      if (!_0x163c16)
        return (
          logErr("Could not fetch captcha during retry."),
          { type: "E", message: "Captcha fetch failed" }
        );
    }
    const _0x21ccb5 = await submitBidsSingleStrategy(
      _0x163c16,
      "FILTERED_ACTIVE",
    );
    if (_0x21ccb5["type"] === "S" || _0x21ccb5["type"] === "N")
      return _0x21ccb5;
    else {
      if (_0x21ccb5["type"] === "I") {
        logWarn("⚠️ Captcha error. Retrying...");
        continue;
      } else {
        if (_0x21ccb5["type"] === "E") {
          const _0x5570b7 = (_0x21ccb5["message"] || "")["toLowerCase"]();
          if (
            _0x5570b7["includes"]("amount") ||
            _0x5570b7["includes"]("vendor") ||
            _0x5570b7["includes"]("greater\x20than")
          ) {
            const _0x2d35e9 = _0x5570b7["match"](/order\s*id\s*:\s*(\d+)/i),
              _0x5be7a0 = _0x5570b7["match"](/equal to\s*([\d\.]+)/i);
            if (_0x2d35e9 && _0x5be7a0 && CONFIG["AUTO_UPDATE_CSV_BIDS"]) {
              const _0x4905a4 = _0x2d35e9[0x1],
                _0x4d7e1c = _0x5be7a0[0x1];
              logWarn(
                "Detected SAP amount rejection for Order " +
                  _0x4905a4 +
                  ".\x20SAP\x20wants\x20>=\x20" +
                  _0x4d7e1c,
              );
              if (autoUpdateCsvForOrder(_0x4905a4, _0x4d7e1c)) {
                logInfo("Retrying submission with updated amount...");
                continue;
              }
            }
            return (
              logErr(
                "Business logic rejection by SAP: " +
                  _0x21ccb5["message"] +
                  ". Aborting this batch!",
              ),
              _0x21ccb5
            );
          }
          return (
            logErr(
              "Unknown\x20error,\x20aborting\x20batch:\x20" +
                _0x21ccb5["message"],
            ),
            _0x21ccb5
          );
        }
      }
    }
  }
  return { type: "E", message: "Max\x20retries\x20exceeded\x20for\x20batch" };
}
async function runAutoBatchSubmission(_0x55f7ae = null) {
  const _0x4506dd = a0_0x5cae94;
  (logBold("Starting auto-continuous batch submission..."),
    (csvBatchState["autoRunning"] = !![]));
  let _0x18bb85 = 0x0;
  while (!csvBatchState["completed"] && csvBatchState["autoRunning"]) {
    (_0x18bb85++,
      logInfo(
        "\n═══ Batch " +
          _0x18bb85 +
          "\x20(" +
          csvBatchState["activeKeys"]["length"] +
          " groups) ═══",
      ));
    let _0x2bb4f9 = _0x55f7ae;
    !_0x2bb4f9 &&
      ("icWiC" === "eIdtW"
        ? _0x4405b4("Redo")
        : (_0x2bb4f9 = await fetchAndSolveCaptcha()));
    _0x55f7ae = null;
    if (!_0x2bb4f9) {
      (logErr("Could not solve captcha for this batch, stopping auto mode"),
        (csvBatchState["autoRunning"] = ![]));
      break;
    }
    const _0x2ca7b3 = await submitBids(_0x2bb4f9, !![]);
    if (_0x2ca7b3["type"] === "S" || _0x2ca7b3["type"] === "N") {
      markActiveCsvBatchSubmitted();
      if (applyNextCsvBatch()) {
        if ("qsDoN" !== "qsDoN") {
          if (!_0x4dec8f)
            _0x2b975c("Captcha fetch error: " + _0xf4399c["message"]);
          return null;
        } else
          logOk("Batch " + _0x18bb85 + " processed, moving to next batch...");
      } else
        "AOqFo" === "AOqFo"
          ? (logOk("All batches submitted!"),
            (csvBatchState["completed"] = !![]))
          : _0x4c91e9["push"](_0x26c18b["key"]);
    } else {
      if (_0x2ca7b3["type"] === "I") {
        logWarn("Captcha\x20was\x20wrong,\x20retrying\x20same\x20batch...");
        continue;
      } else {
        if (_0x2ca7b3["type"] === "E") {
          if ("SEgSo" !== "SEgSo")
            _0xa53cd1(
              "No CSV matches found! Check CSV columns match order data (DestCityDesc, Spi)",
            );
          else {
            (logErr(
              "Error during batch submission, marking batch as skipped...",
            ),
              markActiveCsvBatchSubmitted());
            if (applyNextCsvBatch()) logOk("Moving to next batch...");
            else {
              if ("ipdIE" === "dLnTH")
                return (
                  _0x50cf35("Bidding window has already expired!"),
                  { status: "expired" }
                );
              else
                (logOk("All batches processed!"),
                  (csvBatchState["completed"] = !![]));
            }
          }
        }
      }
    }
  }
  logBold(
    "Auto\x20batch\x20submission\x20finished.\x20" +
      Object["keys"](csvBatchState["submittedKeys"])["length"] +
      " batches submitted.",
  );
}
async function runSingleSubmission(_0x121c7e = null) {
  const _0x1b462d = a0_0x5cae94;
  logBold("Starting\x20single-shot\x20submission\x20(all\x20rows)...");
  let _0x2e5481 = _0x121c7e;
  if (!_0x2e5481) {
    if ("jeBtU" !== "jeBtU")
      return (
        (_0x5b2407["activeKeys"] = []),
        (_0x58656b["completed"] = !![]),
        ![]
      );
    else _0x2e5481 = await fetchAndSolveCaptcha();
  }
  if (!_0x2e5481) {
    logErr("Could not solve captcha, aborting");
    return;
  }
  let _0x73bdfc = await submitBids(_0x2e5481, ![]),
    _0x30c945 = 0x0;
  while (_0x73bdfc["type"] === "I" && _0x30c945 < 0x5) {
    (_0x30c945++, logWarn("Captcha\x20retry\x20" + _0x30c945 + "/5..."));
    const _0x863a16 = await fetchAndSolveCaptcha();
    if (!_0x863a16) break;
    _0x73bdfc = await submitBids(_0x863a16, ![]);
  }
  if (_0x73bdfc["type"] === "S") {
    if ("cPIAr" === "cPIAr") logOk("Submission completed successfully!");
    else {
      const _0x251192 = _0x34212d["dirname"](_0x21a6e7);
      (!_0x76e70e["existsSync"](_0x251192) &&
        _0x20fe8e["mkdirSync"](_0x251192, { recursive: !![] }),
        _0x3e6470["push"](_0x2a567b["join"](",")));
    }
  }
}
function sleep(_0x1e5b61) {
  return new Promise((_0x10a09b) => setTimeout(_0x10a09b, _0x1e5b61));
}

// ═══════════════════════════════════════════════════════════════════════════
//  CONTINUOUS ENGINE  (replaces old waitForBiddingWindow + runSingleCycle + main)
//  Behaviour:
//   PHASE 1 (pre-window): continuous fetch → match → hold in ready-queue. NO submit.
//   PHASE 2 (window open): instant flush of ready-queue (priority order), then
//     loop fetch → match → submit for the FULL slot (SAP SlotStart..SlotEnd).
//   Never sits idle. 1164 SPI always top priority. max 3 rows/batch, group atomic.
//   Per-window submittedKeys (auto-reset on new slot via resetCsvBatchState).
// ═══════════════════════════════════════════════════════════════════════════

function computeWindowTiming() {
  if (!orderListData || !plantConf) return null;
  const cur = orderListData["NavBidCurrDtDm"] || {};
  const serverNow = convUtcToLocal(cur["CurrDate"], cur["CurrTime"]);
  const startTime = convUtcToLocal(
    plantConf["BiddingDate"],
    plantConf["SlotStartTime"],
  );
  const endTime = convUtcToLocal(
    plantConf["BiddingDate"],
    plantConf["SlotEndTime"],
  );
  if (serverNow === null || startTime === null || endTime === null) return null;
  return {
    clockOffset: serverNow - Date.now(),
    startTime: startTime,
    endTime: endTime,
    slot: plantConf["SlotNumber"],
  };
}

function countHandled1164() {
  if (!windowStats) return;
  (csvBatchState["activeKeys"] || []).forEach((k) => {
    const g = csvBatchState["groupsByKey"][k];
    if (g && g.rows.some((r) => isSpi1164(r.item && r.item["Spi"])))
      windowStats.handled1164++;
  });
}

// Show exactly which orders (Destination / SPI / Amount) are about to be bid
function logActiveBatchDetails(tag) {
  const keys = csvBatchState["activeKeys"] || [];
  if (keys.length === 0) return;
  logBold("📤 " + (tag || "SUBMITTING") + " this batch:");
  keys.forEach((k) => {
    const g = csvBatchState["groupsByKey"][k];
    if (!g) return;
    g.rows.forEach((r) => {
      const it = r.item || {};
      logInfo(
        "   • Dest: " +
          (it["DestCityDesc"] || "?") +
          " | SPI: " +
          (it["Spi"] || "?") +
          " | Amount: " +
          r.bidAmount +
          " | Order: " +
          (it["SapOrderId"] || "?") +
          "/" +
          (it["Posnr"] || "?") +
          (isSpi1164(it["Spi"]) ? "   ⭐ 1164" : ""),
      );
    });
  });
}

function logWindowSummary() {
  if (!windowStats) return;
  logBold("═══ WINDOW SUMMARY (slot " + windowStats.slot + ") ═══");
  logInfo(
    "Fetches: " +
      windowStats.fetches +
      " | Matched rows (last cycle): " +
      windowStats.matched +
      " | Skipped (delete.csv): " +
      windowStats.skippedDelete,
  );
  logInfo(
    "Submitted batches: " +
      windowStats.submittedBatches +
      " | 1164 handled: " +
      windowStats.handled1164 +
      " | Uncertain responses: " +
      windowStats.uncertain,
  );
  logInfo(
    "Latency: net=" +
      (windowStats.netLatencyMs == null ? "?" : windowStats.netLatencyMs + "ms") +
      " | captcha-unlock-detect=" +
      (windowStats.captchaUnlockMs == null
        ? "?"
        : windowStats.captchaUnlockMs + "ms/" + windowStats.captchaPolls + "polls") +
      " | captcha-fetch=" +
      (windowStats.captchaFetchMs == null ? "?" : windowStats.captchaFetchMs + "ms") +
      " | first-submit=" +
      (windowStats.firstSubmitMs == null ? "?" : windowStats.firstSubmitMs + "ms"),
  );
}

function submittedCount() {
  return Object.keys(csvBatchState["submittedKeys"] || {}).length;
}

// Report rank-1 status + persist rank records (best-effort, non-blocking to bids)
function reportRankingsAndSave() {
  try {
    const submittedRows = bidRows.filter(
      (r) => csvBatchState["submittedKeys"][getCsvBatchKey(r)] === true,
    );
    const rows =
      submittedRows.length > 0
        ? submittedRows
        : bidRows.filter((r) => Number(r["BiddingAmount"]) > 0);
    if (rows.length === 0) return;
    let rank1 = 0;
    console.log("\n" + "═".repeat(50));
    console.log(
      "" +
        LOG_COLORS["bright"] +
        LOG_COLORS["cyan"] +
        "  RANKING RESULTS FOR THIS WINDOW" +
        LOG_COLORS["reset"],
    );
    console.log("═".repeat(50));
    rows.forEach((r) => {
      const rk = String(r["BiddingRank"] || "")
        .trim()
        .replace(/^0+/, "");
      const isR1 = rk === "1" || Number(r["BiddingRank"]) === 1;
      if (isR1) {
        rank1++;
        logBold(
          "🏆 RANK 1! -> City: " +
            r["DestCityDesc"] +
            ", SPI: " +
            r["Spi"] +
            ", Bid: " +
            r["BiddingAmount"],
        );
      } else {
        logWarn(
          "📉 Rank " +
            (rk || r["BiddingRank"] || "?") +
            " -> City: " +
            r["DestCityDesc"] +
            ", SPI: " +
            r["Spi"] +
            ", Bid: " +
            r["BiddingAmount"] +
            " (L1 is " +
            r["L1BidAmount"] +
            ")",
        );
      }
    });
    logOk(
      "Ranking Summary: " + rank1 + " out of " + rows.length + " at Rank 1!",
    );
    console.log("═".repeat(50) + "\n");
    saveRankRecordsToCsv(rows);
  } catch (e) {
    logWarn("Ranking report skipped: " + (e && e.message));
  }
}

async function runWindowCycle() {
  // 1) Establish session + first data pull + CSV (loaded once per window for consistency)
  if (!(await login())) {
    logErr("Login failed. Retrying in 10s...");
    await sleep(10000);
    return;
  }
  if (!(await fetchBidOrderList())) {
    logErr("Failed to fetch bid orders. Retrying in 10s...");
    await sleep(10000);
    return;
  }
  if (!loadCsvFiles()) {
    logErr("Failed to load CSV files. Retrying in 10s...");
    await sleep(10000);
    return;
  }
  if (!plantConf) {
    logWarn("No active bidding slot scheduled. Monitoring (15s)...");
    await sleep(15000);
    return;
  }

  const timing = computeWindowTiming();
  if (!timing) {
    logWarn("Could not parse slot timing. Retrying in 15s...");
    await sleep(15000);
    return;
  }
  const adjustedNow = () => Date.now() + timing.clockOffset;

  // Per-window memory: resetCsvBatchState() wipes submittedKeys automatically when
  // SlotNumber changes; windowStats is fresh per window.
  windowStats = newWindowStats(timing.slot);
  captchaPool = []; // purane window ke stale captchas clear

  // DRY RUN: quick validation (login + fetch + match + captcha), no waiting, no bids.
  if (CONFIG["DRY_RUN"]) {
    logBold("=== DRY RUN: login + fetch + match + captcha test ===");
    applyCsvDataToOrders();
    const img = await fetchCaptcha(true);
    const sol = img ? await solveCaptcha(img) : null;
    logOk(sol ? 'Captcha solved: "' + sol + '"' : "Captcha test: no solution");
    logWindowSummary();
    logInfo("Set DRY_RUN=false in .env to enable live submission.");
    return;
  }

  if (adjustedNow() >= timing.endTime) {
    logWarn("Slot already expired. Waiting for next slot (10s)...");
    await sleep(10000);
    return;
  }

  let reloggedFinal = false;

  // ───────── PHASE 1: PRE-WINDOW (fetch→match→ready. NO captcha, NO submit) ─────────
  // IMPORTANT: captcha ko pehle se solve NAHI karte. SAP har submit se pehle FRESH captcha
  // deta hai jo sirf window UNLOCK hone par milta hai. Pehle se solve kiya captcha SAP reject
  // kar deta hai. Isliye yahan sirf orders fetch + match karke ready-queue banate hain;
  // captcha ko window open ke waqt (unlock detect karke) hi fetch + solve karenge.
  if (adjustedNow() < timing.startTime) {
    logBold(
      "PHASE 1 (pre-window): continuous fetch → match → ready-queue. No captcha, no submit yet.",
    );
    let lastLog = 0;
    // Captcha-unlock polling window khulne se CAPTCHA_POLL_LEAD_MS pehle shuru hoga
    // (default 5s). Isse SAP jis pal captcha unlock kare, usi instant catch kar lete hain
    // (clock drift / SAP thoda jaldi khole to bhi miss nahi hoga).
    const pollLead = parseInt(process.env.CAPTCHA_POLL_LEAD_MS || "5000", 10);
    while (adjustedNow() < timing.startTime - pollLead) {
      const remaining = timing.startTime - adjustedNow();
      windowStats.fetches++;
      await fetchBidOrderList();
      applyCsvDataToOrders(); // builds priority batches; HELD (not submitted)

      if (Date.now() - lastLog > 5000) {
        logInfo(
          "[pre-window] T-" +
            formatCountdown(remaining) +
            " | fetches=" +
            windowStats.fetches +
            " | matched-rows=" +
            windowStats.matched +
            " | ready-batches=" +
            (csvBatchState["pendingBatches"].length +
              (hasActiveCsvBatch() ? 1 : 0)),
        );
        lastLog = Date.now();
      }

      // Refresh session ~60s before open + measure network latency once
      if (remaining <= 60000 && !reloggedFinal) {
        await login();
        reloggedFinal = true;
        windowStats.netLatencyMs = await measureLatency();
        logInfo("🌐 Network latency to SAP: " + windowStats.netLatencyMs + "ms");
      }

      await sleep(remaining <= 30000 ? 500 : 1000);
    }
  }

  // Ready-queue ko latest data se build karo — yahan koi BLOCKING fetch NAHI (warna submit
  // ek pura round-trip (~2-3s) late ho jaata, wahi "3 sec baad save" wali problem thi).
  // Jo orders theek open ke waqt aate hain wo pehle instant-flush ke baad in-window loop uthata hai.
  applyCsvDataToOrders();

  // ───────── UNLOCK DETECTION: poll SAP captcha. First available captcha = window OPEN ─────────
  // Jaise hi captcha available ho (SAP unlock), USI fresh captcha ko solve karke turant submit.
  // Polling window khulne se ~CAPTCHA_POLL_LEAD_MS pehle START hoti hai (light rate), aur edge
  // par aggressive ho jaati hai — taaki unlock ka exact pal pakad ke sabse pehle submit karein.
  const _lead = parseInt(process.env.CAPTCHA_POLL_LEAD_MS || "5000", 10);
  const _fast = parseInt(process.env.FAST_MAX_DELAY_MS || "10", 10);
  logBold(
    "PHASE 2: polling SAP captcha to detect UNLOCK (started ~" +
      Math.max(0, Math.round((timing.startTime - adjustedNow()) / 100) / 10) +
      "s before open)...",
  );
  let unlockSol = null;
  let unlockImg = null;
  const pollStart = Date.now();
  while (adjustedNow() < timing.endTime) {
    windowStats.captchaPolls++;
    const tF = Date.now();
    unlockImg = await fetchCaptcha(true); // null = still locked; image = UNLOCKED
    if (unlockImg) {
      if (windowStats.captchaUnlockMs == null) {
        windowStats.captchaFetchMs = Date.now() - tF;
        windowStats.captchaUnlockMs = Date.now() - pollStart;
        logOk(
          "🔓 Captcha UNLOCKED after " +
            windowStats.captchaPolls +
            " polls / " +
            windowStats.captchaUnlockMs +
            "ms | fetch=" +
            windowStats.captchaFetchMs +
            "ms",
        );
      }
      unlockSol = await solveCaptcha(unlockImg); // SAP ka CURRENT captcha (yahi valid hai)
      if (unlockSol) break; // got a solved captcha → go submit
      // solve gave "Redo"/empty → DO NOT abandon window; fetch a fresh captcha & retry
      continue;
    }
    // Back-to-back polling (jaise old secure.js): unlock ka exact pal turant pakdo → sabse pehle submit
    await sleep(_fast);
  }

  if (!unlockSol) {
    logWarn(
      "Slot ended before a captcha could be solved — nothing submitted this window.",
    );
    logWindowSummary();
    return;
  }

  // ───────── INSTANT SUBMIT using the unlock-moment fresh captcha ─────────
  if (!hasActiveCsvBatch()) {
    await fetchBidOrderList();
    applyCsvDataToOrders();
  }
  if (hasActiveCsvBatch()) {
    const before = submittedCount();
    countHandled1164();
    logActiveBatchDetails("FLUSH (window just opened)");
    const tS = Date.now();
    await runAutoBatchSubmission(unlockSol);
    windowStats.firstSubmitMs = Date.now() - tS;
    windowStats.submittedBatches += submittedCount() - before;
    logInfo("⏱ First submit round completed in " + windowStats.firstSubmitMs + "ms");
  } else {
    logInfo(
      "Window open but no matched orders ready yet — will keep fetching this window.",
    );
  }

  // Continuous loop for the remainder of the slot (the real fix: orders that
  // appear only AFTER the window opens get picked up here).
  while (adjustedNow() < timing.endTime) {
    const remaining = timing.endTime - adjustedNow();
    windowStats.fetches++;
    await fetchBidOrderList();
    if (adjustedNow() >= timing.endTime) break; // slot closed mid-fetch → stop submitting
    applyCsvDataToOrders(); // re-match; already-submitted keys are skipped

    if (hasActiveCsvBatch()) {
      const before = submittedCount();
      countHandled1164();
      logActiveBatchDetails("SUBMITTING (in-window)");
      await runAutoBatchSubmission(null);
      windowStats.submittedBatches += submittedCount() - before;
    } else {
      // Nothing new to submit right now — pause a bit (also cuts log spam), then fetch again.
      await sleep(remaining < 1500 ? 200 : 800);
    }
  }

  // ─────────────── Window closed: confirm + report ───────────────
  logBold("Window closed (slot " + timing.slot + "). Confirming rankings...");
  try {
    await Promise.all([fetchBidOrderList(), fetchVendorRankings()]);
  } catch (e) {
    logWarn("Post-window confirm failed: " + (e && e.message));
  }
  reportRankingsAndSave();
  logWindowSummary();
}

async function main() {
  console.log("\n" + "═".repeat(62));
  console.log(
    "" +
      LOG_COLORS["bright"] +
      LOG_COLORS["cyan"] +
      "  E-BIDDING ENGINE — CONTINUOUS FETCH→MATCH→SUBMIT (24/7)" +
      LOG_COLORS["reset"],
  );
  console.log("═".repeat(62) + "\n");
  initEmbeddedCaptchaSolver();

  let cycle = 0;
  do {
    cycle++;
    logBold(
      "\n▶ Window engine cycle #" +
        cycle +
        " [" +
        new Date().toLocaleTimeString() +
        "]",
    );
    try {
      await runWindowCycle();
    } catch (e) {
      logErr("Cycle error: " + (e && e.message));
      await sleep(5000);
    }
    if (CONFIG["DRY_RUN"]) break;
  } while (CONFIG["LOOP_CONTINUOUS"]);
}

main()["catch"]((e) => {
  logErr("Fatal error: " + e.message);
  console.error(e.stack);
  process.exit(1);
});
