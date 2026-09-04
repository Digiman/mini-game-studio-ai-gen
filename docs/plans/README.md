# plans/ — Historical Game Specs

This folder holds the spec documents that were used when the games were authored by an AI agent (ZCode + OpenRouter + DeepSeek V4 Flash).

| File | What it covers |
|---|---|
| `new-games-suggestions.md` | Original brainstorm — first batch of game/tool ideas |
| `second-batch-games.md` | Spec for the second batch (2048, Space Invaders, Wordle era) |
| `third-batch-games.md` | Spec for the third batch (Sudoku, Bubble Shooter era) |

## ⚠️ History, not current truth

These docs were written **before the current repo conventions** existed:

- File paths reference the old layout (`docs/<id>.md` at root, `node build-embedded-docs.js` from the root) — the repo has since moved per-game docs to `games/docs/` and tooling to `scripts/`.
- localStorage keys use the pre-migration names (`neon_bubble_high`, `sudoku_best_<diff>`, …) — the canonical keys are now `mg_<game>_high` (see `AGENTS.md`).
- Some planned features landed differently (e.g. the chess-puzzles idea from the third batch was never built).

**Read them for ideas and intent, never as instructions for current work.**