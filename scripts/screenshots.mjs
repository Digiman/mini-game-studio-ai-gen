#!/usr/bin/env node
// Capture in-game screenshots for Mini Game Studio using headless Chrome
// via the Chrome DevTools Protocol (CDP) driven over native WebSocket —
// no Puppeteer/Playwright dependency needed.
//
// Usage: node scripts/screenshots.mjs [game1 game2 ...]
//   (no args = capture all games registered in GAMES below)
import { spawn } from 'node:child_process';
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT_DIR = join(ROOT, 'screenshots');
mkdirSync(OUT_DIR, { recursive: true });

const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

// Each entry maps an html source basename to how to bring the game to a
// screenshottable state (dismiss start overlay + run a few steps).
const GAMES = {
  '2048': async (page) => {
    await page.eval(`document.getElementById('startBtn').click()`);
    for (const k of ['ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowRight']) {
      await page.eval(`window.dispatchEvent(new KeyboardEvent('keydown',{key:'${k}',bubbles:true}))`);
      await delay(120);
    }
  },
  'space-invaders': async (page) => {
    await page.eval(`document.getElementById('startBtn').click()`);
    await page.wait(1800); // let the formation animate for a lively shot
  },
  'wordle': async (page) => {
    await page.eval(`(function(){
      // enter a valid guess so the board shows color feedback
      for (const ch of 'about') typeLetter(ch);
      submitGuess();
    })()`);
    await page.wait(900); // let flip animations complete
  },
};

// ─── Minimal CDP client ─────────────────────────────────────────────────────
class CDP {
  constructor(ws) { this.ws = ws; this.id = 0; this.pending = new Map(); this.onEvent = null; }
  send(method, params = {}) {
    const id = ++this.id;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }
  static async connect(port) {
    // poll for the ws endpoint
    let pages;
    for (let i = 0; i < 50; i++) {
      try {
        const r = await fetch(`http://127.0.0.1:${port}/json/list`);
        pages = await r.json();
        if (pages.length) break;
      } catch { /* page not ready yet */ }
      await delay(100);
    }
    const page = pages.find(p => p.type === 'page');
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
    const cdp = new CDP(ws);
    ws.onmessage = (ev) => {
      const msg = JSON.parse(ev.data.toString());
      if (msg.id && cdp.pending.has(msg.id)) {
        const p = cdp.pending.get(msg.id);
        cdp.pending.delete(msg.id);
        msg.error ? p.reject(new Error(msg.error.message)) : p.resolve(msg.result);
      } else if (msg.method && cdp.onEvent) {
        cdp.onEvent(msg);
      }
    };
    return cdp;
  }
}

// Evaluate JS in the page and await the returned promise.
async function evalJs(cdp, expression) {
  const res = await cdp.send('Runtime.evaluate', {
    expression: `(async()=>{ try{ return await (${expression}); }catch(e){ return 'ERR:'+e.message; } })().then(v=>JSON.stringify(v))`,
    awaitPromise: true,
    returnByValue: true,
  });
  return res.result?.value;
}

class Page {
  constructor(cdp) { this.cdp = cdp; }
  async eval(expr) { return evalJs(this.cdp, expr); }
  async wait(ms) { await delay(ms); }
}

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

// ─── Launch & capture ───────────────────────────────────────────────────────
async function captureGame(name) {
  const file = join(ROOT, 'games', name + '.html');
  const port = 9225 + (Math.random() * 1000 | 0);
  const chrome = spawn(CHROME, [
    '--headless=new', '--disable-gpu', '--no-sandbox',
    `--remote-debugging-port=${port}`,
    '--window-size=1280,900', '--hide-scrollbars',
    'about:blank',
  ], { stdio: 'ignore' });

  try {
    const cdp = await CDP.connect(port);
    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');
    // navigate
    await cdp.send('Page.navigate', { url: 'file://' + file });
    // wait for load
    await new Promise((resolve) => {
      cdp.onEvent = (msg) => { if (msg.method === 'Page.loadEventFired') resolve(); };
      setTimeout(resolve, 3000); // safety fallback
    });
    await delay(600);

    // size the page to a pleasant capture viewport
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: 700, height: 900, deviceScaleFactor: 1, mobile: false,
    });
    await delay(300);

    // run the game-specific setup to reveal gameplay
    const setup = GAMES[name] || (async () => {
      await evalJs(cdp, `document.getElementById('startBtn').click()`);
    });
    const page = new Page(cdp);
    await setup(page);
    await delay(400);

    const shot = join(OUT_DIR, name + '.png');
    const res = await cdp.send('Page.captureScreenshot', { format: 'png' });
    writeFileSync(shot, Buffer.from(res.data, 'base64'));
    console.log(`Captured ${name}.png (${res.data.length} base64 chars)`);
  } finally {
    chrome.kill();
  }
}

// ─── Main ───────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const targets = args.length ? args : Object.keys(GAMES);
for (const t of targets) {
  await captureGame(t);
}
console.log('Screenshots done.');
