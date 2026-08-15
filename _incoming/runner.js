#!/usr/bin/env node
/**
 * runner.js — 24x7 supervisor wrapper for ebidding-secure.js
 *
 * Features
 *  • Auto-restart on crash / clean exit (with cooldown backoff)
 *  • Live CSV reload: agar files/*.csv edit ho jaye, worker ko safely
 *    restart karta hai so ki naya data pick ho jaye
 *  • Debounced file watching (editors ke multiple writes handle karta hai)
 *  • Clean log streaming to console + rotating file logs
 *  • Graceful shutdown on Ctrl+C / SIGTERM
 */

'use strict';

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
require('dotenv').config();

// ─── Config ─────────────────────────────────────────────────────────
const SCRIPT       = path.join(__dirname, 'ebidding-automation.js');
const FILES_DIR    = path.join(__dirname, 'files');
const LOG_DIR      = path.join(__dirname, 'logs');
const MIN_RESTART_MS = parseInt(process.env.MIN_RESTART_MS || '2000', 10);
const MAX_RESTART_MS = parseInt(process.env.MAX_RESTART_MS || '30000', 10);
const CSV_DEBOUNCE_MS = parseInt(process.env.CSV_DEBOUNCE_MS || '1500', 10);
const KILL_GRACE_MS  = parseInt(process.env.KILL_GRACE_MS || '5000', 10);

// Force continuous loop mode on the child (so worker keeps bidding)
process.env.LOOP_CONTINUOUS = process.env.LOOP_CONTINUOUS || 'true';

// ─── Log helpers ────────────────────────────────────────────────────
if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });
const logFile = path.join(LOG_DIR, 'runner.log');
const logStream = fs.createWriteStream(logFile, { flags: 'a' });

const C = {
  reset:'\x1b[0m', dim:'\x1b[2m', red:'\x1b[31m',
  green:'\x1b[32m', yellow:'\x1b[33m', cyan:'\x1b[36m'
};
function stamp() { return new Date().toISOString().replace('T',' ').slice(0,19); }
function say(color, tag, msg) {
  const line = `[${stamp()}] [${tag}] ${msg}`;
  console.log(`${color}${line}${C.reset}`);
  logStream.write(line + '\n');
}
const info  = m => say(C.cyan,   'RUN', m);
const ok    = m => say(C.green,  'OK ', m);
const warn  = m => say(C.yellow, 'WRN', m);
const err   = m => say(C.red,    'ERR', m);

// ─── State ──────────────────────────────────────────────────────────
let child = null;
let restartTimer = null;
let restartDelay = MIN_RESTART_MS;
let killedForReload = false;
let shuttingDown = false;
let csvDebounceTimer = null;
const csvHashes = new Map();

// ─── CSV hashing (avoid restart if content is identical) ────────────
function hashFile(file) {
  try {
    const buf = fs.readFileSync(file);
    return crypto.createHash('sha1').update(buf).digest('hex');
  } catch { return null; }
}
// Only these input CSVs should trigger a worker reload. Output files like
// rank_records.csv must be IGNORED (warna har cycle restart loop ban jaata hai).
function isWatchedCsv(f) {
  const n = (f || "").toLowerCase();
  return n.endsWith(".csv") && !n.includes("rank_records") && !n.includes("rank-records");
}
function snapshotCsvs() {
  if (!fs.existsSync(FILES_DIR)) return;
  for (const f of fs.readdirSync(FILES_DIR)) {
    if (isWatchedCsv(f)) {
      csvHashes.set(f, hashFile(path.join(FILES_DIR, f)));
    }
  }
}
function csvChanged() {
  if (!fs.existsSync(FILES_DIR)) return false;
  for (const f of fs.readdirSync(FILES_DIR)) {
    if (!isWatchedCsv(f)) continue;
    const h = hashFile(path.join(FILES_DIR, f));
    if (csvHashes.get(f) !== h) {
      csvHashes.set(f, h);
      return f;
    }
  }
  return false;
}

// ─── Child management ───────────────────────────────────────────────
function startChild() {
  if (shuttingDown) return;
  clearTimeout(restartTimer);
  killedForReload = false;

  snapshotCsvs();
  info(`Starting worker: node ${path.basename(SCRIPT)}`);
  child = spawn(process.execPath, [SCRIPT], {
    cwd: __dirname,
    env: process.env,
    stdio: ['ignore', 'pipe', 'pipe']
  });

  child.stdout.on('data', d => {
    process.stdout.write(d);
    logStream.write(d);
  });
  child.stderr.on('data', d => {
    process.stderr.write(d);
    logStream.write(d);
  });

  child.on('exit', (code, signal) => {
    child = null;
    if (shuttingDown) return;
    if (killedForReload) {
      ok(`Worker stopped for CSV reload (code=${code}, signal=${signal||'-'}). Restarting...`);
      restartDelay = MIN_RESTART_MS;
      restartTimer = setTimeout(startChild, 500);
      return;
    }
    if (code === 0) {
      ok(`Worker exited cleanly. Restarting in ${MIN_RESTART_MS}ms...`);
      restartDelay = MIN_RESTART_MS;
    } else {
      err(`Worker died (code=${code}, signal=${signal||'-'}). Restarting in ${restartDelay}ms...`);
    }
    restartTimer = setTimeout(startChild, restartDelay);
    // Exponential backoff up to MAX
    restartDelay = Math.min(restartDelay * 2, MAX_RESTART_MS);
  });
}

function stopChild(reason) {
  if (!child) return;
  warn(`Stopping worker (${reason})...`);
  const c = child;
  try { c.kill('SIGTERM'); } catch {}
  // Hard kill after grace period
  setTimeout(() => {
    if (c && !c.killed) {
      try { c.kill('SIGKILL'); } catch {}
    }
  }, KILL_GRACE_MS);
}

// ─── CSV watcher ────────────────────────────────────────────────────
function watchCsvs() {
  if (!fs.existsSync(FILES_DIR)) {
    warn(`files/ folder not found at ${FILES_DIR}. CSV watching disabled.`);
    return;
  }
  info(`Watching CSVs in ${FILES_DIR} for live edits...`);
  fs.watch(FILES_DIR, { persistent: true }, (evt, name) => {
    if (!name || !isWatchedCsv(name)) return;
    clearTimeout(csvDebounceTimer);
    csvDebounceTimer = setTimeout(() => {
      const changed = csvChanged();
      if (!changed) return; // no real content change
      warn(`CSV changed: ${changed} — reloading worker with fresh data...`);
      killedForReload = true;
      stopChild('csv-reload');
    }, CSV_DEBOUNCE_MS);
  });
}

// ─── Graceful shutdown ──────────────────────────────────────────────
function shutdown(sig) {
  if (shuttingDown) return;
  shuttingDown = true;
  warn(`Received ${sig}. Shutting down runner + worker...`);
  clearTimeout(restartTimer);
  if (child) {
    try { child.kill('SIGTERM'); } catch {}
    setTimeout(() => {
      if (child && !child.killed) { try { child.kill('SIGKILL'); } catch {} }
      process.exit(0);
    }, KILL_GRACE_MS);
  } else {
    process.exit(0);
  }
}
process.on('SIGINT',  () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('uncaughtException', e => { err(`Runner uncaught: ${e.stack||e}`); });
process.on('unhandledRejection', e => { err(`Runner unhandled rejection: ${e}`); });

// ─── Boot ───────────────────────────────────────────────────────────
info('══════════════════════════════════════════════════════════');
info(' E-Bidding 24x7 Runner  |  live CSV reload enabled');
info('══════════════════════════════════════════════════════════');
info(`Script:      ${SCRIPT}`);
info(`Files dir:   ${FILES_DIR}`);
info(`Log file:    ${logFile}`);
info(`LOOP_CONTINUOUS=${process.env.LOOP_CONTINUOUS}`);
watchCsvs();
startChild();
