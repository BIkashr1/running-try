# E-Bidding Auto-Submit — Continuous Fetch→Match→Submit (v2)

## Files
- **`ebidding-automation.js`** — the new ready-to-run script (deobfuscated + new logic). USE THIS.
- `ebidding-decoded-readable-reference.js` — full readable source (reference only, pre-upgrade).

## What changed (vs old "7-sec-pehle single fetch + give-up")
1. **Continuous fetch+match** — never sits idle, never gives up.
2. **PHASE 1 (pre-window):** `fetch → match → ready-queue` on loop. **No submit** (SAP band me accept nahi). Matched batches held.
3. **PHASE 2 (window open):** ready-queue ka **instant flush** (prefetched captcha ke saath), phir **poore slot** (SAP SlotStart..SlotEnd) tak `fetch → match → submit` loop. Window ke baad appear hone wale orders bhi uth jaate hain.
4. **1164 priority sorter** — SPI 1164 hamesha sabse upar (single ho ya group), phir singles, phir groups. Baaki equal.
5. **Batcher** — greedy fill, max 3 rows/batch, group atomic (kabhi split nahi).
6. **Double-submit guard** — per-window `submittedKeys` set; naya slot detect hote hi auto-reset. Uncertain/HTTP error = "submitted maano, retry mat karo".
7. **Per-request timeout** — axios client timeout (30s) prevents hang; slot-end cross hote hi submit turant band.
8. **Logging** — har window: fetch count, matched rows, skipped(delete), submitted batches, 1164 handled, uncertain.

Window boundaries **SAP ke plantConf (SlotStartTime/SlotEndTime)** se aate hain (system clock drift ke liye SAP server time offset use hota hai) — ye HH:15 / HH:45 × 300s windows ke authoritative source hain.

## Field mapping (unchanged, confirmed from code)
| Check | File field | SAP field |
|---|---|---|
| Destination | input2.csv → `City Code Descriptio` | `DestCityDesc` |
| SPI | input2.csv → `Special Process Indi` | `Spi` |
| Amount | input2.csv → `BIDING AMMOUNT` (ya `BIDING AMOUNT`) | `BiddingAmount` |
| Delete guard | delete.csv → `Customer` | `KunagName1` |

## Deploy on your Ubuntu server (pm2)
```bash
# 1) Purani file ka backup
cp ebidding-secure.js ebidding-secure.BACKUP.js

# 2) Nayi file ko project folder me rakho (files/, .env ke saath)
#    ebidding-automation.js  ->  <project>/ebidding-automation.js

# 3) Test pehle (koi bid submit NAHI hoga):
DRY_RUN=true node ebidding-automation.js

# 4) Live chalao pm2 se:
pm2 delete ebidding 2>/dev/null
pm2 start ebidding-automation.js --name ebidding
pm2 logs ebidding
```
`.env` waise ka waisa chalega (BASE_URL, USER_ID, PASSWORD, PLANT, CSV_FILE, DELETE_CSV_FILE, CSV_BATCH_SIZE=3, AUTO_UPDATE_CSV_BIDS, LOOP_CONTINUOUS=true, DRY_RUN=false).

## Notes
- `input2.csv` / `delete.csv` window start pe ek baar load hote hain (consistency).
- Batch size `.env` ke `CSV_BATCH_SIZE=3` se aata hai (SAP hard limit 3).
