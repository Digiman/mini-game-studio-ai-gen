# Second Batch: 2048, Space Invaders & Wordle

Implementation plan for adding 3 new self-contained games (17 → 20) continuing on branch `feature/new-games`.

## Scope

Match the repo's verified conventions (from `tetris.html`/`platformer.html`): vanilla ES6 + Canvas 2D, zero dependencies, no DPR scaling (CSS `width:100%`/`aspect-ratio` scaling), dark-neon theme, `.overlay.active` start/game-over overlays, `localStorage` high scores, arrow+WASD keyboard AND touch controls, fixed intrinsic canvas resolution.

1. **2048** — `games/2048.html` (puzzle): 4×4 grid, arrow/WASD slide+merge, RAF spawn+pop animations, undo (grid-history), score + `2048_high` in localStorage, win/continue + game-over overlays, neon tiles colored by value.
2. **Space Invaders** — `games/space-invaders.html` (arcade): invader formation + step-down, breakable shields, UFO bonus, progressive waves, 3 lives, neon explosion particles, score + `space_invaders_high`, pause (P/Esc).
3. **Wordle** — `games/wordle.html` (puzzle): 6×5 DOM grid, on-screen QWERTY + physical keys, green/yellow/gray feedback, invalid-word shake, embedded ~500-word list (dependency-free), daily (date-seeded) + random modes, streak/guess-distribution in `wordle_stats`, stats panel.

## Per-game integration

- `docs/<id>.md` (Features / Controls / Scoring / Tech Stack / File / Possible Enhancements).
- `index.html`: append `.card` + `<!-- ─── Name ─── -->`; bump hardcoded counts 17→20 (`#totalCount`, `#countAll`, footer "· N projects"). Reuse existing categories → no new filter chips.
- `docs-viewer.html`: add one `{ id, name }` entry to `GAMES[]` (nav is length-derived).
- `README.md`: add 3 entries; update counts 17→20; extend AI Model Testing capability table.
- Regenerate `embedded-docs.js`: `node build-embedded-docs.js > embedded-docs.js`.

## Screenshots (headless Chrome)

Author `scripts/screenshots.mjs` (Puppeteer): load each new game, dismiss start overlay, capture `screenshots/<gamefile>.png` (`2048.png`, `space-invaders.png`, `wordle.png`).

## Consistent ID linkage

`GAMES[].id` === `docs/<id>.md` === `?game=<id>`; screenshot + Play link use `games/<file>.html`. IDs/files align (2048, space-invaders, wordle).

## Verification

- Regenerate embedded-docs cleanly.
- Open `index.html` (counts + filters correct, 3 cards), play each game (start → gameplay → game-over → high-score persist), check `docs-viewer.html?game=<id>` for each (sidebar + prev/next).
- Confirm 3 screenshots exist.
- Commit all changes on `feature/new-games`.
