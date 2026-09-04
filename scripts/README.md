# scripts/ — Build tooling

Small Node / shell utilities used during development. No `package.json`, no npm deps — plain scripts.

| Script | Purpose |
|---|---|
| `build-embedded-docs.js` | Regenerates `embedded-docs.js` (repo root) from the markdown files in `games/docs/`. This is the docs-viewer's fetch fallback. **Never hand-edit `embedded-docs.js` — always regenerate.** CI fails the deploy if they drift. |
| `screenshots.sh` | Captures `screenshots/*.png` for every game (or the ones passed as args) using headless Chrome on macOS. Each game gets a small injected JS driver to dismiss the start overlay so the gameplay board is visible. |
| `screenshots.mjs` | Working-file helper for generating the per-game screenshot data. |

## Usage

```bash
# Docs embed — run after touching any games/docs/*.md
node scripts/build-embedded-docs.js > embedded-docs.js

# Verify the embed is current (same diff CI runs)
node scripts/build-embedded-docs.js > /tmp/emb.js && diff /tmp/emb.js embedded-docs.js

# Screenshots — all games, or specific ones
./scripts/screenshots.sh            # all
./scripts/screenshots.sh snake tetris   # just those two
```

## Adding a game

See `AGENTS.md` — adding a game touches `games/<name>.html`, `games/docs/<doc-id>.md`, `docs-viewer.html`'s GAMES array, `index.html`, `README.md`, `scripts/screenshots.sh` (if you want it captured), and requires regenerating `embedded-docs.js`.