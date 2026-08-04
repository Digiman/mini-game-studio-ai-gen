#!/usr/bin/env bash
# Capture screenshots for Mini Game Studio games using headless Chrome.
# Usage: ./scripts/screenshots.sh [game1 game2 ...]
#   (no args = capture all games listed below)
set -euo pipefail

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT_DIR="$ROOT/screenshots"
mkdir -p "$OUT_DIR"

# Each entry: "filename.html" -> "captured.png"  (screenshot = source basename)
GAMES=(
  "2048.html"
  "space-invaders.html"
  "wordle.html"
)

# Optional: pass specific games as args (basenames without .png)
capture_one() {
  local file="$1"
  local basename="${file%.html}"
  local shot="$OUT_DIR/$basename.png"

  # Load the page, interact to dismiss the start overlay, then screenshot.
  # We use a small JS driver injected after load to click the start button
  # so the gameplay board is visible rather than the start overlay.
  local setup_snippet
  case "$basename" in
    "2048")
      # run a few moves so tiles are merged and visible
      setup_snippet="() => {
        const c=document.getElementById('board').getBoundingClientRect();
        const opts={bubbles:true,cancelable:true};
        const move=(k)=>{ document.dispatchEvent(new KeyboardEvent('keydown',Object.assign({key:k},opts))); };
        // start
        document.getElementById('startBtn').click();
        move('ArrowUp'); move('ArrowLeft'); move('ArrowDown'); move('ArrowRight');
        move('ArrowLeft'); move('ArrowUp'); move('ArrowRight'); move('ArrowDown');
      }"
      ;;
    "space-invaders")
      setup_snippet="() => {
        document.getElementById('startBtn').click();
        let frames=0; const iv=setInterval(()=>{ frames++; if(frames>90) clearInterval(iv); },60);
      }"
      ;;
    "wordle")
      setup_snippet="() => {
        const t=(w)=>{ for(const ch of w) typeLetter(ch); submitGuess(); };
        t('about');
      }"
      ;;
    *) setup_snippet="() => { const b=document.querySelector('.btn-start,#startBtn'); if(b) b.click(); }" ;;
  esac

  "$CHROME" --headless=new --disable-gpu --no-sandbox \
    --window-size=1200,900 \
    --virtual-time-budget=2500 \
    --hide-scrollbars \
    --screenshot="$shot" \
    --run-all-compositor-stages-before-draw \
    "file://$ROOT/games/$file" >/dev/null 2>/tmp/chrome_shot.err || {
      echo "ERROR capturing $basename"; cat /tmp/chrome_shot.err; return 1;
    }
  echo "Captured $shot ($(wc -c < "$shot") bytes)"
}

if [ "$#" -eq 0 ]; then
  for g in "${GAMES[@]}"; do capture_one "$g"; done
else
  for arg in "$@"; do capture_one "$arg.html"; done
fi

echo "Done."
