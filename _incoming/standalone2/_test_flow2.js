// Flow test v2: verify captcha-UNLOCK model — no pre-solve; poll until captcha available,
// then submit with that fresh captcha. Also verify latency fields captured.
const fs = require("fs");
let src = fs.readFileSync("./ebidding-automation.js", "utf8")
  .replace(/^#!.*\n/, "")
  .replace(/main\(\)\["catch"\][\s\S]*$/, "");
src += `
;globalThis.__F = {
  run: runWindowCycle,
  stub: (f) => {
    login=f.login; fetchBidOrderList=f.fetchBidOrderList; loadCsvFiles=f.loadCsvFiles;
    fetchCaptcha=f.fetchCaptcha; solveCaptcha=f.solveCaptcha; fetchVendorRankings=f.fetchVendorRankings;
    initEmbeddedCaptchaSolver=()=>{}; saveRankRecordsToCsv=()=>{}; runAutoBatchSubmission=f.runAutoBatchSubmission;
    measureLatency=async()=>42;
  },
  seed:(b,c,d,p,ol)=>{bidRows=b;csvData=c;deleteList=d;plantConf=p;orderListData=ol;CONFIG.DRY_RUN=false;},
  state:()=>csvBatchState, stats:()=>windowStats,
};
`;
const m = { exports: {} };
new Function("module","exports","require","process","__dirname","__filename",src)(
  m,m.exports,require,process,__dirname,__filename);
const F = globalThis.__F;

const day = 1700000000000, dateStr = "/Date(" + day + ")/";
const plant = { SlotNumber:"S1", BiddingDate:dateStr, SlotStartTime:"PT0H0M3S", SlotEndTime:"PT0H0M8S", Plant:"6924" };
const ol = { NavBidCurrDtDm:{ CurrDate:dateStr, CurrTime:"PT0H0M1S" } }; // server "now" = day+1s (2s before start)

const b = [{ SapOrderId:"B",Posnr:"1",DestCityDesc:"CY",Spi:"1164",KunagName1:"V2",ClubId:"",BiddingAmount:"0",AvgWtBidAmount:"0",BiddingRank:"1" }];
const csv = [{ "City Code Descriptio":"CY","Special Process Indi":"1164","BIDING AMMOUNT":"200" }];

// captcha: returns null until "unlock" (we unlock 2s after test start), then returns image.
const tStart = Date.now();
let captchaCalls = 0, unlockAt = 2000, submittedWith = [];
const stub = {
  login: async()=>true, loadCsvFiles: ()=>true, fetchVendorRankings: async()=>true,
  fetchBidOrderList: async()=>true, solveCaptcha: async(img)=> "SOL-" + img,
  fetchCaptcha: async(quiet)=>{
    captchaCalls++;
    return (Date.now()-tStart) >= unlockAt ? "IMG" : null;  // locked until +2s
  },
  runAutoBatchSubmission: async(prefetch)=>{
    submittedWith.push(prefetch);
    const st=F.state(); (st.activeKeys||[]).forEach(k=>st.submittedKeys[k]=true); st.activeKeys=[]; st.completed=true;
  },
};
F.stub(stub);
F.seed(b, csv, [], plant, ol);

(async()=>{
  await F.run();
  const s = F.stats();
  let pass=0, fail=0; const ok=(c,m)=>{c?(pass++,console.log("  PASS:",m)):(fail++,console.log("  FAIL:",m));};
  console.log("\n--- Captcha-unlock model assertions ---");
  console.log("  captchaCalls(polls):", captchaCalls, "| submittedWith:", JSON.stringify(submittedWith));
  console.log("  stats: unlockMs=",s.captchaUnlockMs,"fetchMs=",s.captchaFetchMs,"polls=",s.captchaPolls,"net=",s.netLatencyMs,"firstSubmitMs=",s.firstSubmitMs);
  ok(s.captchaPolls >= 2, "polled captcha multiple times until unlock (no pre-solve)");
  ok(submittedWith.length === 1 && submittedWith[0] === "SOL-IMG", "submit used the UNLOCK-moment fresh captcha (SOL-IMG), not a pre-fetched one");
  ok(s.captchaUnlockMs !== null && s.captchaUnlockMs >= 0, "captcha unlock latency captured (" + s.captchaUnlockMs + "ms)");
  ok(s.firstSubmitMs !== null, "first-submit latency captured");
  ok(s.submittedBatches === 1 && s.handled1164 === 1, "1164 order submitted");
  console.log("\n=== RESULT: " + pass + " passed, " + fail + " failed ===");
  process.exit(fail?1:0);
})();
