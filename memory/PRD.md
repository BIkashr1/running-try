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
