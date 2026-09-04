# Third Batch: Chess Puzzles, Sudoku & Bubble Shooter

Implementation plan for adding 3 new self-contained games (20 → 23) continuing on branch `feature/new-games`.

## Scope

Match the repo's verified conventions (from `tetris.html`/`platformer.html`): vanilla ES6, zero dependencies, dark-neon theme, `.overlay.active` start/game-over overlays, `localStorage` high scores, keyboard + click/touch controls, responsive layout.

1. **Chess Puzzles** — `games/chess-puzzles.html` (id: `chess-puzzles`, category: `strategy`): 8×8 DOM board with Unicode pieces, curated "find the mate in 1" puzzles across 3 rating tiers (Easy / Medium / Hard), legal-move validation (own mini chess engine embedded in-page), click piece → destination + highlight valid moves, move history, hints, stars/progress tracker, `localStorage` key `neon_chess_best`. Every puzzle verified as a genuine mate-in-1 by an engine before shipping.
2. **Sudoku** — `games/sudoku.html` (id: `sudoku`, category: `puzzle`): 9×9 DOM grid, 4 difficulties (Easy / Medium / Hard / Expert) from a built-in generator (solver + symmetry removal), notes/pencil marks, error highlighting, timer, hint, undo, number buttons + keyboard 1–9/Del, win overlay with time + difficulty, `localStorage` best-times `sudoku_best_<difficulty>`.
3. **Bubble Shooter** — `games/bubble-shooter.html` (id: `bubble-shooter`, category: `arcade`): Canvas hex-grid arena, aim with mouse/touch (trajectory with one-bounce guide line), shoot colored bubbles, 3+ matching cluster pop + floating-group drops, progressive waves/levels + color queue, game-over when bubbles reach the ceiling, `localStorage` high score `neon_bubble_high`, start + game-over overlays.

## Verified Chess Puzzle Data (mate-in-1)

Each `[tier] fen → intended solution move(s)`, all confirmed by the in-page engine as genuine mates-in-1:

| Tier | FEN | Solution |
|---|---|---|
| easy | `6k1/5ppp/8/8/8/8/8/4R1K1 w - - 0 1` | e1-e8 |
| easy | `6k1/5ppp/8/8/8/8/8/1R4K1 w - - 0 1` | b1-b8 |
| easy | `6k1/5ppp/8/8/8/8/8/Q6K w - - 0 1` | a1-a8 |
| medium | `7k/5ppp/8/8/8/8/8/4Q1K1 w - - 0 1` | e1-e8 |
| medium | `6k1/5ppp/8/8/8/8/8/3Q2K1 w - - 0 1` | d1-d8 |
| medium | `6k1/5ppp/8/8/8/8/1Q6/6K1 w - - 0 1` | b2-b8 |
| hard | `6k1/5ppp/8/8/8/8/8/1Q4RK w - - 0 1` | b1-b8 |
| hard | `6k1/5ppp/8/8/8/8/1Q6/3R2K1 w - - 0 1` | b2-b8 / d1-d8 |
| hard | `6k1/5ppp/8/8/8/8/4Q2K/1R6 w - - 0 1` | e2-e8 / b1-b8 |

Acceptance rule: a user move counts as correct if it produces checkmate (not merely a string match), so any genuine mate move is accepted.

## Per-game integration

- `docs/<id>.md` (Features / Controls / Scoring / Tech Stack / File / Possible Enhancements).
- `index.html`: append 3 `.card` blocks + `<!-- ─── Name ─── -->`; bump hardcoded counts 20 → 23 (`#totalCount`, `#countAll`, footer "· N projects"). Reuse existing categories → no new filter chips. **Also fix the existing Neon Platformer card missing its closing `</div>`** (currently nests the 2048 card).
- `docs-viewer.html`: add one `{ id, name }` entry to `GAMES[]` for each game (nav is length-derived).
- `README.md`: add 3 entries; bump counts 20 → 23; extend the AI Model Testing capability table.
- Regenerate `embedded-docs.js`: `node build-embedded-docs.js > embedded-docs.js`.

## Screenshots

`scripts/screenshots.mjs` (headless Chrome) → `screenshots/chess-puzzles.png`, `screenshots/sudoku.png`, `screenshots/bubble-shooter.png` (files referenced by cards; generate or capture if tooling available in this environment).

## Verification

- Regenerate `embedded-docs.js` cleanly (23 keys).
- Confirm all 9 chess puzzles remain genuine mates via the embedded engine.
- Open `index.html` → total 23, counts/filters correct, Platformer card no longer nests 2048.
- Play each new game: start → play → win/game-over → high-score/best persists.
- `docs-viewer.html?game=<id>` for each new game → sidebar + prev/next work.
- Confirm 3 screenshots exist.
- Commit all changes on `feature/new-games`.
