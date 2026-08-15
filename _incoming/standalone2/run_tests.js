// Consolidated sandbox test suite for ebidding-automation.js
// SAFE: stubs SAP; makes ONE harmless public HTTPS request; NEVER touches the user's
// production SAP and NEVER submits bids.
const fs = require("fs");
const assert = (c, m, res) => { res.push({ ok: !!c, m }); console.log((c ? "  PASS: " : "  FAIL: ") + m); };

function load(exposeExtra) {
  let src = fs.readFileSync("./ebidding-automation.js", "utf8")
    .replace(/^#!.*\n/, "")
    .replace(/main\(\)\["catch"\][\s\S]*$/, "");
  src += exposeExtra;
  const m = { exports: {} };
  new Function("module","exports","require","process","__dirname","__filename",src)(
    m, m.exports, require, process, __dirname, __filename);
  return globalThis.__X;
}

(async () => {
  const results = [];

  // ── TEST A: cookiejar wrapper + no custom-agent error (real HTTPS request) ──
  console.log("\n[A] axios-cookiejar client makes a real request (agent-incompat bug fixed)");
  {
    const X = load(";globalThis.__X={client};");
    try {
      const r = await X.client.get("https://example.com", { timeout: 8000 });
      assert(r.status === 200, "wrapped client GET https://example.com => 200 (no agent error)", results);
    } catch (e) {
      const msg = (e && e.message) || String(e);
      assert(!msg.includes("does not support for use with other"),
        "no 'does not support for use with other http(s).Agent' error (got: " + msg.slice(0,60) + ")", results);
    }
  }

  // ── TEST B: 1164 priority + max-3 atomic batching + delete-skip + submitted-skip ──
  console.log("\n[B] priority / batcher / delete-skip / submitted-skip");
  {
    const X = load(";globalThis.__X={sd:(b,c,d,p)=>{bidRows=b;csvData=c;deleteList=d;plantConf=p;},ap:applyCsvDataToOrders,st:()=>csvBatchState,ss:()=>{windowStats=newWindowStats('S');},mark:markActiveCsvBatchSubmitted,is1164:isSpi1164};");
    X.ss();
    const b = [
      {SapOrderId:"A",Posnr:"1",DestCityDesc:"CX",Spi:"1162",KunagName1:"V1",ClubId:""},
      {SapOrderId:"B",Posnr:"1",DestCityDesc:"CY",Spi:"1164",KunagName1:"V2",ClubId:""},
      {SapOrderId:"C",Posnr:"1",DestCityDesc:"CZ",Spi:"1163",KunagName1:"V3",ClubId:""},
      {SapOrderId:"D",Posnr:"1",DestCityDesc:"CD",Spi:"1152",KunagName1:"V4",ClubId:"CL1"},
      {SapOrderId:"E",Posnr:"2",DestCityDesc:"CE",Spi:"1152",KunagName1:"V5",ClubId:"CL1"},
      {SapOrderId:"F",Posnr:"1",DestCityDesc:"CF",Spi:"1162",KunagName1:"DELME",ClubId:""},
    ];
    const csv = [
      {"City Code Descriptio":"CX","Special Process Indi":"1162","BIDING AMMOUNT":"100"},
      {"City Code Descriptio":"CY","Special Process Indi":"1164","BIDING AMMOUNT":"200"},
      {"City Code Descriptio":"CZ","Special Process Indi":"1163","BIDING AMMOUNT":"300"},
      {"City Code Descriptio":"CD","Special Process Indi":"1152","BIDING AMMOUNT":"400"},
      {"City Code Descriptio":"CE","Special Process Indi":"1152","BIDING AMMOUNT":"500"},
      {"City Code Descriptio":"CF","Special Process Indi":"1162","BIDING AMMOUNT":"600"},
    ];
    X.sd(b, csv, ["DELME"], {SlotNumber:"S"});
    X.ap();
    let st = X.st();
    assert(st.activeKeys.length === 3, "first batch = 3 rows (max-3)", results);
    assert(st.activeKeys[0] === "ROW:A:1", "natural order (no 1164 priority): first match A is first", results);
    assert(JSON.stringify(st.pendingBatches[0]) === JSON.stringify(["CLUB:CL1"]), "club group atomic (own batch)", results);
    X.mark(); X.ap(); st = X.st();
    assert(st.activeKeys[0] === "CLUB:CL1", "already-submitted batch skipped on re-match", results);
    assert(X.is1164("1164") && X.is1164("1164-") && !X.is1164("1162"), "isSpi1164 detection", results);
  }

  // ── TEST C: captcha-UNLOCK model (no pre-solve) + latency capture ──
  console.log("\n[C] captcha unlock polling + instant submit + latency metrics");
  {
    const X = load(`;globalThis.__X={
      run: runWindowCycle,
      stub:(f)=>{login=f.login;fetchBidOrderList=f.fetchBidOrderList;loadCsvFiles=f.loadCsvFiles;
        fetchCaptcha=f.fetchCaptcha;solveCaptcha=f.solveCaptcha;fetchVendorRankings=f.fetchVendorRankings;
        initEmbeddedCaptchaSolver=()=>{};saveRankRecordsToCsv=()=>{};runAutoBatchSubmission=f.runAutoBatchSubmission;measureLatency=async()=>42;},
      seed:(b,c,d,p,ol)=>{bidRows=b;csvData=c;deleteList=d;plantConf=p;orderListData=ol;CONFIG.DRY_RUN=false;},
      state:()=>csvBatchState, stats:()=>windowStats };`);
    const day = 1700000000000, dateStr = "/Date(" + day + ")/";
    const plant = { SlotNumber:"S1", BiddingDate:dateStr, SlotStartTime:"PT0H0M3S", SlotEndTime:"PT0H0M8S", Plant:"6924" };
    const ol = { NavBidCurrDtDm:{ CurrDate:dateStr, CurrTime:"PT0H0M1S" } };
    const b = [{SapOrderId:"B",Posnr:"1",DestCityDesc:"CY",Spi:"1164",KunagName1:"V2",ClubId:"",BiddingAmount:"0",AvgWtBidAmount:"0",BiddingRank:"1"}];
    const csv = [{"City Code Descriptio":"CY","Special Process Indi":"1164","BIDING AMMOUNT":"200"}];
    const tStart = Date.now(); let submittedWith = [];
    X.stub({
      login: async()=>true, loadCsvFiles: ()=>true, fetchVendorRankings: async()=>true,
      fetchBidOrderList: async()=>true, solveCaptcha: async(img)=> "SOL-"+img,
      fetchCaptcha: async()=> (Date.now()-tStart)>=2000 ? "IMG" : null, // locked until +2s
      runAutoBatchSubmission: async(prefetch)=>{ submittedWith.push(prefetch);
        const st=X.state(); (st.activeKeys||[]).forEach(k=>st.submittedKeys[k]=true); st.activeKeys=[]; st.completed=true; },
    });
    X.seed(b, csv, [], plant, ol);
    await X.run();
    const s = X.stats();
    assert(s.captchaPolls >= 2, "captcha polled repeatedly until unlock (no pre-solve)", results);
    assert(submittedWith.length === 1 && submittedWith[0] === "SOL-IMG", "submit used UNLOCK-moment fresh captcha (SOL-IMG)", results);
    assert(s.captchaUnlockMs != null, "captcha unlock latency captured", results);
    assert(s.firstSubmitMs != null, "first-submit latency captured", results);
    assert(s.submittedBatches === 1 && s.handled1164 === 1, "1164 order submitted & counted", results);
  }

  const passed = results.filter(r=>r.ok).length, failed = results.length - passed;
  console.log("\n================ TOTAL: " + passed + " passed, " + failed + " failed ================");
  process.exit(failed ? 1 : 0);
})();
