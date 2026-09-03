# AGENTS.md

Static GitHub Pages site: 22 standalone games, zero dependencies, zero build steps, no test runner, no `package.json`. Every game is one self-contained `games/*.html` (inline CSS + JS). Games never import or share code between each other — cross-game helpers stay copy-pasted by design.

## Commands

- Serve locally: `python3 -m http.server` (docs-viewer fetches `docs/<id>.md` via fetch; don't rely on `file://` for it).
- Syntax-check a game's JS (the only feasible "lint" in this repo):
  ```
  python3 -c "import re;open('/tmp/g.js','w').write('\n'.join(re.findall(r'<script>(.*?)</script>', open('games/<game>.html',encoding='utf-8').read(), re.S)))" && node --check /tmp/g.js
  ```
- Docs embed must stay current or CI fails the deploy (pages.yml runs exactly this diff):
  ```
  node build-embedded-docs.js > /tmp/emb.js && diff /tmp/emb.js embedded-docs.js
  ```
- Deploy: push to `main` triggers `.github/workflows/pages.yml` (build = doc validation + upload repo root as-is; manual dispatch supported). No other pipeline.

## Structure gotchas

- `games/` ↔ `docs/` filenames don't always match; the **doc id** (markdown filename) is what `docs-viewer.html`'s `GAMES` array and embedded-docs.js use: `asteroids.html`→`asteroid-shooter.md`, `snake.html`→`snake-game.md`, `mandelbrot.html`→`mandelbrot-explorer.md`.
- `embedded-docs.js` is generated — never hand-edit; regenerate after touching any `docs/*.md`.
- `docs-viewer.html`: primary load = fetch of `docs/<id>.md`, fallback = `embedded-docs.js`. Both copies must stay in sync (regeneration handles this).
- Adding a game means touching: `games/<name>.html`, `docs/<doc-id>.md`, `docs-viewer.html` GAMES array, `index.html` catalog, `README.md`, regenerate `embedded-docs.js`, and add a screenshot in `screenshots/`.

## Conventions

- High-score localStorage keys are canonical `mg_<game>_high` (`mg_snake_high`, `mg_2048_high`, ...). Legacy keys (`neon_*_high`, `pong_high`, `asteroid_high`, `reaction_best`, `sudoku_best_*`) exist only as one-time read+migrate fallbacks — don't write them and don't introduce new variants.
- Real-time games pause when the tab loses focus via `visibilitychange` using `gamePaused` + `autoPaused` flags; timer-based games (Sudoku, Minesweeper, Memory Match, Reaction Test) freeze or time-shift their clocks while hidden. New real-time games should follow the same pattern.
- Shared shell conventions per game file: dark neon theme, `.overlay.active` for start/game-over/win, HUD for score/best/level. `index.html` and `docs-viewer.html` render the same 22 entries in the same order.
- Site theme (index.html + docs-viewer.html) is stored canonically in `mg_theme` (`'system'` | `'light'` | `'dark'`), applied as `body.light`; the legacy `theme` / `docs_theme` keys are read-only migration fallbacks. The switch follows OS changes live in `system` mode — keep it that way if you touch theming.
- Wordle's word list must contain only common real 5-letter words — a scrub removed `pubic` and non-words; keep it clean when editing the list.

## Historical context

`plans/` are spec docs from when the games were authored by an AI agent; they reference old filenames and pre-migration localStorage keys (e.g. `neon_bubble_high`). Treat as history, not current truth.