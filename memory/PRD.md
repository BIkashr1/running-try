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
- Deobfuscated the obfuscated script (webcrack failed on node20; used custom RC4-decoder dump → 990 strings decoded).
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
