# PRD — SAP E-Bidding Auto-Submit (Continuous Fetch→Match→Submit v2)

## Problem statement (original)
Existing SAP e-bidding Node.js script (obfuscated `ebidding-secure.js`, runs on Ubuntu via pm2, axios → SAP OData API). Old behaviour: single fetch ~7s before window, give up if no order. New requirement: continuous fetch+match always; instant submit at window open; full 300s loop; never idle; SPI 1164 always top priority; max 3 rows/batch (SAP hard limit), groups atomic; per-window double-submit guard.

## Tech stack
Standalone Node.js. axios + axios-cookiejar-support + tough-cookie + dotenv. TrueCaptcha API for captcha solve. SAP OData service `ZVC_TRANSPORTER_SRV`.

## Key SAP endpoints (decoded)
- Login/CSRF: GET `/sap/opu/odata/sap/ZVC_TRANSPORTER_SRV/` (X-Csrf-Token: Fetch)
- Orders: POST `.../BidOrderListSet`
- Rankings: POST `.../VacVendorRankingNewSet`
- Captcha: GET `.../EbiddingCaptchaSet(Vendor='<USER_ID>',Plant='<PLANT>')`
- Submit: POST `.../EBiddingSaveSet`

## Field mapping (LOCKED)
- Destination: bidRow.DestCityDesc == input2.csv `City Code Descriptio`
- SPI: bidRow.Spi == input2.csv `Special Process Indi`
- Amount: input2.csv `BIDING AMMOUNT` / `BIDING AMOUNT` → BiddingAmount
- Delete guard: bidRow.KunagName1 in delete.csv `Customer` → skip

## What's implemented (2026-06)
- Deobfuscated the obfuscated script (webcrack failed on node20; custom RC4 decoder dumped 990 strings).
- 2-phase continuous engine (Phase1 pre-window fetch→match→ready hold; Phase2 window-open submit loop to slot end).
- SPI-1164-first priority sorter, max-3 atomic-group batcher, per-window submittedKeys guard, per-window logging.

### Update 2 — captcha-unlock model + speed + latency
- REMOVED pre-solve captcha (SAP rejects a captcha fetched before unlock). Engine now POLLS `fetchCaptcha` every ~20ms; the FIRST available captcha = window unlock = window open → solve THAT fresh captcha and submit instantly. Every subsequent batch fetches a fresh captcha too.
- Added keep-alive https/http agents (connection reuse) for faster round-trips. undici NOT used/needed.
- Added latency metrics: network latency (HEAD probe like latency.js), captcha unlock-detect ms + poll count, captcha fetch ms, first-submit ms — logged + in window summary.
- Tests (sandbox, SAP stubbed): flow v2 5/5 (poll-until-unlock, submit uses unlock-moment captcha, latency captured, 1164 submitted); priority regression pass.
- ⚠️ "Same amount by other vendor" rejection = pricing tie (not speed). Auto-lower-on-tie strategy NOT added (awaiting user decision). (webcrack failed on node20; used custom RC4-decoder dump → 990 strings decoded).
- Rewrote scheduler/loop into 2-phase continuous engine:
  - PHASE 1 pre-window: fetch→match→ready-queue, NO submit.
  - PHASE 2 window open: instant flush (prefetched captcha) → loop fetch→match→submit until SAP SlotEnd.
- Added SPI-1164-first priority sorter (then singles, then groups), stable within tier.
- Kept greedy max-3 atomic-group batcher; per-window `submittedKeys` guard (auto-reset on slot change); uncertain/HTTP error = mark submitted (no retry).
- Per-window logging: fetches, matched, skipped(delete), submitted batches, 1164 handled, uncertain.
- Deliverable: `/app/ebidding-automation.js` (also `/app/delivery/` + README_DEPLOY.md + readable reference).

## Testing
- Unit (sandbox, SAP stubbed): 9/9 pass — matching, delete-skip, 1164-first, max-3 atomic batching, submitted-skip, isSpi1164.
- Flow (sandbox, SAP stubbed): 4/4 pass — Phase1 holds (no submit), open does prefetch FLUSH, loops to slot end, stats correct.
- NOT tested: live connectivity to user's production SAP (rise.eye2serve.com) — intentionally not connected with real creds.

## Backlog / next
- P1: Optional per-fetch shorter timeout wrapper (currently relies on axios client 30s).
- P2: Configurable pre-window poll cadence via env.
- P2: Persist per-window summary to a log file.

### Update 3 — captcha retry 5 + time-bomb removal verified (Jun 2026)
- REMOVED sabotage time-bomb from `checkLocalCaptchaCache` (was `Math.random()<0.4` → "Redo" after 2026-07-23, forcing 40% cache failures). Now: cache hit → always correct answer (0ms); cache miss → falls through to API path.
- Captcha retry in `submitBids` increased 3 → 5 (`fetchAndSolveCaptcha(0x5)` @~L2496).
- Zero-delay flush confirmed: after `unlockSol`, no `sleep()` before `runAutoBatchSubmission`; guarded `fetchBidOrderList()` only runs when ready-queue empty (per user: ready → submit instantly; empty → fetch+match so bid not missed).
- Note: dead `< 0.4` @L2484 lives in unreachable `else` of `if("AXvyU"==="AXvyU")` — never executes (left as-is per user).
- Tests: `node -c` OK; mock suite `/app/_incoming/standalone2/run_tests.js` → 11 passed, 0 failed (first-submit=0ms, captcha-fetch=0ms). Backend testing agent report: /app/test_reports/iteration_2.json (100% pass).

### Update 4 — CAPTCHA CACHE ROOT-CAUSE FIX (Jun 2026) ⭐ major
- **Discovery:** User actually runs `/app/_incoming/standalone2/ebidding-automation.js` (pm2 `standalone2`), NOT `/app/ebidding-automation.js`. Update-3 fixes had gone to the wrong file. The standalone2 copy STILL had the time-bomb + retry=3.
- **Root cause of 2880ms/tie-loss (verified against 162 real PNGs user uploaded):**
  1. Captcha hash was `sha256(base64 TEXT)` → SAP-side base64 reformatting (data-uri prefix / MIME line-wrap) changed the hash → 162-cache NEVER hit → every captcha fell to slow+inaccurate TrueCaptcha API.
  2. Time-bomb still live in standalone2's checkLocalCaptchaCache (40% forced "Redo" after 2026-07-23).
- **Fixes (applied to BOTH standalone2 [primary] and /app [mirror]):**
  1. Removed time-bomb.
  2. Captcha hash = `sha256(Buffer.from(base64,'base64'))` (decoded bytes) → transport-format-proof (plain / data-uri / MIME-wrapped all collapse to same hash).
  3. Rebuilt `downloadImages/data.json` (162 byte-hash entries) in both folders.
  4. `getCaptchaFromApi` now persists new solves to data.json via `persistCaptchaToCache()` (dedupe by hash) → cache auto-grows toward ~100% over runs.
  5. `solveCaptcha` checks local cache FIRST (0ms), API only on miss.
  6. Retry 3→5.
- **Verified:** 162/162 PNGs HIT for plain+prefix+wrapped base64; persist add+dedupe works; mock suite 11/11 (fetch=0ms, first-submit=0ms); `node -c` both files. Report: /app/test_reports/iteration_3.json (100%). Diag assets: /app/_diag/cacheUploads (163 pngs), regression test /app/backend/tests/test_ebidding_cache.js.
- **ACTION FOR USER:** restart the running process so new code loads → `pm2 restart standalone2`.

### Update 5 — LOCAL_CACHE_ONLY + loud cache logging + download package (Jun 2026)
- User ran on THEIR OWN server (~/standalone2); "162 cached captchas loaded" line never appeared → cache not loading there → every captcha hit TrueCaptcha API → endless "Redo".
- User wants captcha solved ONLY from data.json (no TrueCaptcha).
- Added CONFIG.LOCAL_CACHE_ONLY (env, default true): on cache miss, solveCaptcha returns null WITHOUT calling TrueCaptcha (caller re-fetches until a KNOWN cached captcha appears). No more Redo spam.
- Startup log made LOUD: prints "✅ ... (N cached captchas loaded) | file: <abs path> | LOCAL_CACHE_ONLY=..." on success, and "⚠️ CACHE NOT FOUND at: <path>" on miss — so user can confirm on their server.
- .env got LOCAL_CACHE_ONLY=true. Synced to standalone2, /app/delivery, and /app.
- Built download package: /app/delivery/ebidding-fixed.zip (ebidding-automation.js + downloadImages/data.json+credentials.json + .env + files/*.csv + README_PEHLE_PADHO.txt). node_modules NOT included (user runs `npm install`).
- Verified: node -c OK (all copies), mock suite 11/11, byte-hash 162/162 HIT.
- Open (separate) issue: "No CSV matches found (DestCityDesc, Spi)" — CSV city/SPI not matching live orders; may be normal (no relevant orders that window) — revisit if user asks.

### Update 6 — Speed tuning for rank-1 (Jun 2026)
- User: cache saving works great now; wants (a) NO extra fetch right at window open — flush the pre-matched batch instantly; (b) keep matching until ~last second then freeze; (c) mid-window incoming orders were saved a bit late → hurting rank.
- Changes (all env-tunable, in standalone2 + delivery + /app + zip):
  - ORDER_FREEZE_LEAD_MS (default 2000): pre-window fetch→match continues until ~2s before open (was hard 5s), then FREEZES; at open the ready batch flushes with no extra fetch (guarded fetch only if batch empty). Fresher batch, still no late fetch.
  - INWINDOW_IDLE_MS (default 400): in-window idle wait cut from 800→400ms (and <1500ms-remaining path 200→150ms) so newly-arriving orders are detected+submitted faster.
  - CAPTCHA_POLL_LEAD_MS surfaced in .env (default 5000).
- Deliberately did NOT add pre-solved/"hot" captcha — SAP rejects stale captchas (prior learning); it would add a rejected attempt and hurt latency.
- Verified: node -c OK (all copies), mock suite 11/11. Package rebuilt: /app/delivery/ebidding-fixed.zip.
- Tuning guidance: fast network → lower ORDER_FREEZE_LEAD_MS to ~1000-1500 (fresher) & INWINDOW_IDLE_MS to ~250; slow network → raise freeze to 2500-3000 so last fetch finishes before open.

### Update 7 — matched-order visibility, 1164-first priority, .env.txt (Jun 2026)
- User requests: (1) log should show WHICH orders matched + their SPI; (2) provide a copy-paste .env.txt; (3) RE-INTRODUCE SPI-1164 priority: 1164 groups must be submitted FIRST (own batch, not mixed with non-1164) — in the pre-window ready batch AND for in-window fetched orders.
- Changes (standalone2 + delivery + /app + zip):
  - prepareCsvBatches: split keys into 1164-groups vs rest; greedy-batch 1164 first (own batches), then rest. Applies to pre-window + in-window (applyCsvDataToOrders → prepareCsvBatches every cycle). Reverses the earlier "1164 priority removed" decision per new user request.
  - New logMatchedOrdersIfChanged(): prints "🎯 MATCHED ORDERS (N rows, k ×1164 ⭐ save first)" with Dest | SPI | Amount | Order for each matched row; fires only when the matched set changes (no spam). Called from applyCsvDataToOrders.
  - Added .env.txt (copy-paste) in delivery + zip.
- Test suite updated (run_tests.js TEST B) to assert new 1164-first batching; all 11/11 pass. node -c OK. Zip rebuilt.

### Update 8 — timestamps, POST-timing, SAP clock compensation, parallel unlock polling (Jun 2026)
- Live logs: every bid REJECTED with "Same amount has been bid by other vendor" = SAP hard-rejects duplicate amounts; only the FIRST submitter of an amount is accepted. User confirmed amounts are a HARD limit (cannot bid lower) → pure speed race.
- Measured (WINDOW SUMMARY): net~88-90ms; unlock-detect 161-184ms (1 poll); captcha solve 0ms (cache hit ✅); first-submit 248ms (good) vs 2305ms (SAP slow at contended open).
- Changes (standalone2 + delivery + /app + zip):
  - ts() now returns [HH:MM:SS.mmm] on every log line (correlate submits with :15/:45).
  - submitBidsSingleStrategy logs "⏱ SAP save POST round-trip: Xms" (isolates our-side vs SAP-side delay).
  - computeWindowTiming: clockOffset now latency-compensated (+lastFetchRttMs/2) → adjustedNow ≈ true SAP time.
  - Unlock poll loop replaced with bounded-concurrency PARALLEL poller (CAPTCHA_POLL_CONCURRENCY, default 3): keeps N captcha GETs in flight so the unlock instant is caught with minimal detect latency (was sequential ~150-180ms/poll). fetchCaptcha is a read-only GET → parallel-safe.
  - New env CAPTCHA_POLL_CONCURRENCY documented in .env/.env.example.
- Verified: node -c OK, mock suite 11/11. Zip rebuilt.
- HONEST NOTE to user: remaining latency is largely SAP POST time (server-side, variable); with identical amounts and no ability to bid lower, wins depend on beating competitors by ms. Parallel polling + 0ms cache + instant flush is near the client-side limit.

### Update 9 — REVERT parallel polling (broke captcha) + earlier poll start (Jun 2026)
- Live log: FLUSH captcha rejected "Worng Captcha Value" repeatedly. ROOT CAUSE: SAP captcha is SESSION-BOUND — each fetchCaptcha GET overwrites the server's expected answer. The parallel poller (Update 8) fetched multiple images; we solved one but SAP expected the last-fetched → wrong captcha. Retry (sequential) worked, confirming it.
- Fix: REVERTED unlock poller to SEQUENTIAL single-fetch (the image we solve is exactly what SAP expects). Removed CAPTCHA_POLL_CONCURRENCY (from code + .env/.env.example).
- Also: pre-window fetch loop now stops at startTime - max(pollLead, freezeLead) (i.e., >=5s before open) so captcha polling starts earlier instead of being pushed to ~0.1s before open by slow ~2.6s order fetches.
- Note from logs: order-list fetch takes ~2.6s on user's network; SAP save POST 0.7-3.3s (server-side, variable, contended at open). first-submit high mainly due to wrong-captcha retries — now fixed by sequential.
- Verified: node -c OK, mock 11/11. Zip rebuilt.
