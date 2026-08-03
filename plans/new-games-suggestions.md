# New Game Suggestions

Original suggestion list for expanding the Mini Game Studio collection. These options span arcade, puzzle, strategy, physics, and creative tooling, each chosen to add variety beyond the existing 14 games.

## Suggestions (ordered)

1. **Tetris / Block Drop**
   A recognizable arcade classic with rotation, line clearing, level progression, ghost piece, and score combos. It tests grid logic and input responsiveness.

2. **2048**
   Compact but polished number puzzle: swipe/arrow movement, tile merging, animations, undo, score persistence, and high-score tracking.

3. **Tower Defense**
   Add a path-building or fixed-path defense game with placeable towers, enemy waves, upgrades, and resource management. This adds deeper strategy than the existing games.

4. **Platformer**
   A short, handcrafted 2D platform game with jumping physics, moving platforms, collectibles, hazards, and 3–5 levels. Great canvas/game-loop showcase.

5. **Space Invaders**
   A focused retro shooter with enemy formations, shields, progressive waves, power-ups, and boss encounters. It complements Asteroids without duplicating it.

6. **Wordle-style Word Game**
   Daily/random word modes, keyboard input, color feedback, streak stats, and accessibility-friendly controls. This broadens the collection beyond reflex games.

7. **Chess Puzzles**
   "Find the best move" positions with legal move validation, hints, move history, and puzzle rating tiers. More feasible than implementing a full chess engine.

8. **Sudoku**
   Multiple difficulty levels, notes, error highlighting, timer, hints, puzzle generator, and local completion history.

9. **Bubble Shooter**
   Aim-and-shoot mechanics, colored-cluster matching, bounced aiming guides, falling groups, and level layouts.

10. **Breakout Level Editor**
    Expand the existing Pong/Breakout game with a visual editor, saved custom levels, special bricks, and shareable level data.

11. **Typing Defense**
    Words descend or approach a base; typing them correctly destroys them. Include difficulty curves, accuracy/WPM stats, and themed word packs.

12. **Roguelike Dungeon Crawler**
    Turn-based grid movement, procedurally generated rooms, monsters, items, fog-of-war, and permanent-run progression. This would be the most technically impressive addition.

## Top Three Priorities (selected for implementation)

For variety and portfolio value, the following three were chosen as the first batch to build:

1. **Tetris** for instant familiarity and polished game mechanics.
2. **Tower Defense** for deeper strategy and replayability.
3. **Platformer** for physics, levels, and visual presentation.

## Final Implementation Plan

**Branch:** `feature/new-games` (from clean `main`)

**New games** (each a self-contained `games/*.html`, vanilla ES6 + Canvas 2D, matching the existing dark-neon style: gradient titles, HUD, start/game-over overlays, keyboard + touch controls, `localStorage` high score, responsive canvas):
- **`tetris.html`** — 10×20 grid, 7 tetrominoes with rotation + wall kicks, ghost piece, hold, 7-bag shuffle, line-clear scoring, soft/hard drop, levels with speed ramp, next queue. Category: `puzzle`.
- **`tower-defense.html`** — fixed-path enemies, placeable towers (several types/ranges), wave system with scaling difficulty, currency/lives, upgrade tiers, projectile + collision, game-over/win. Category: `strategy`.
- **`platformer.html`** — 2D platformer with gravity/jumping physics, moving platforms, hazards, collectibles, 3–5 handcrafted levels, enemies, checkpoints, goal flag. Keyboard + touch controls. Category: `arcade`.

**Integration for each game**
- `docs/<name>.md` (follow existing doc template: Features, Controls, Scoring, Tech Stack, File).
- `index.html` — add a `.card` per game (correct `data-category`, title, desc, tags, Play + Docs links, screenshot).
- `docs-viewer.html` — add entries to `GAMES[]` (sidebar + prev/next nav).
- `README.md` — add game entries, update counts, structure block, screenshots count, and add new games to the "AI Model Testing" capability table.
- Generate `screenshots/*.png` via a headless-Chrome/Puppeteer script.

**Regeneration & verification**
- Regenerate `embedded-docs.js` via `node build-embedded-docs.js > embedded-docs.js`.
- Verify: open `index.html`, each new `games/*.html`, and `docs-viewer.html?game=<id>`.
- Commit all changes on `feature/new-games`.
