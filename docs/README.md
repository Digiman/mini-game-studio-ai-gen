# docs/ — Repo & Tech Documentation

This folder is for project-level documentation: architecture decisions, ideas, roadmaps, and planning material.

| Path | What it holds |
|---|---|
| `README.md` (this file) | Index of repo/tech docs |
| `plans/` | Historical spec docs from when the games were authored by an AI agent (first/second/third batch suggestions) — see `plans/README.md`. **History, not current truth** — they reference old filenames and pre-migration localStorage keys (e.g. `neon_bubble_high`). |

> Per-game gameplay documentation lives with the games in `games/docs/` (22 markdown files, one per game). The docs-viewer (`docs-viewer.html`) renders those plus a generated fallback copy in `embedded-docs.js`.

## Notes

- `docs/plans/` is read-only history — treat as reference, not as instructions.
- When adding a new game, the checklist lives in `AGENTS.md` (it touches `games/docs/`, not this folder).