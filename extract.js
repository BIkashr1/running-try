// extract.js — SAFE. Sirf strings decode karke print karta hai.
// Koi bid submit / koi SAP network call NAHI hota (main() auto-run hata diya jaata hai).
//
// KAISE CHALAYEN:
//   1) is file ko apni asli deob.js ke SAME folder me rakhein (naam: extract.js)
//   2) chalayein:   node extract.js
//   3) jo output aaye (~15 lines) wo poora copy karke chat me paste kar dein
//
const fs = require('fs');
const path = require('path');

const file = process.argv[2] || './deob.js';
let src = fs.readFileSync(path.resolve(file), 'utf8');

// Auto-run aur process.exit hatao taaki kuch chale hi na, bas definitions load hon
src = src.replace(/main\(\)\s*\.catch[\s\S]*$/, '');
src = src.replace(/process\.exit\s*\([^)]*\)/g, '/*exit-removed*/');

// decoder ko bahar expose karo (obfuscator alias = a0_0x5ca0)
src += '\n;module.exports = { dec: a0_0x5ca0 };\n';

const mod = { exports: {} };
try {
  const fn = new Function('module', 'exports', 'require', 'process', '__dirname', '__filename', src);
  fn(mod, mod.exports, require, process, __dirname, __filename);
} catch (e) {
  console.error('\n[!] Load fail:', e.message);
  console.error('[!] Agar "a0_0x51a9 is not defined" aaye to file adhuri hai.');
  console.error('[!] Backup: `npx webcrack deob.js -o clean` chala ke clean/deob.js paste karein.\n');
  process.exit(1);
}

const d = mod.exports.dec;
const show = (label, val) => console.log(label.padEnd(16) + '= ' + JSON.stringify(val));

console.log('\n================ DECODED (paste this whole block) ================\n');
try { show('BidOrderList',  d(372, 'CkTj')); } catch (e) { show('BidOrderList', 'ERR'); }
try { show('VendorRank',    d(1148, 'Fnyv')); } catch (e) { show('VendorRank', 'ERR'); }
try { show('Submit/SAVE',   d(935, 'Kq2E')); } catch (e) { show('Submit/SAVE', 'ERR'); }
try { show('CSRF-refresh',  d(295, 'E&Ei')); } catch (e) { show('CSRF-refresh', 'ERR'); }
try { show('Login-alt',     d(569, '^upB')); } catch (e) { show('Login-alt', 'ERR'); }
try { show('Captcha-pre',   d(968, '^Hgn')); } catch (e) { show('Captcha-pre', 'ERR'); }
try { show('Captcha-cfgkey',d(1115, 'Q1U1')); } catch (e) { show('Captcha-cfgkey', 'ERR'); }
try { show('Captcha-mid',   d(354, '8CVd')); } catch (e) { show('Captcha-mid', 'ERR'); }
console.log('  --- field names ---');
try { show('bidRow.city',   d(1046, 'iaaA')); } catch (e) { show('bidRow.city', 'ERR'); }
try { show('csv.city',      d(1158, 'Q1U1')); } catch (e) { show('csv.city', 'ERR'); }
try { show('bidRow.spi',    d(421, 'vSeG')); } catch (e) { show('bidRow.spi', 'ERR'); }
try { show('csv.amount-alt',d(369, '@!o[')); } catch (e) { show('csv.amount-alt', 'ERR'); }
try { show('bidRow.custorg',d(656, 'Kq2E')); } catch (e) { show('bidRow.custorg', 'ERR'); }
try { show('csv.delete-col',d(1070, 'riSU')); } catch (e) { show('csv.delete-col', 'ERR'); }
console.log('\n==================================================================\n');
