# Commands

- Install: `pnpm install --frozen-lockfile` (same command as `orca.yaml` worktree setup; `prepare` runs `svelte-kit sync` and `lefthook install`).
- Dev server: `pnpm dev`. Production build to `build/`: `pnpm build`. Serve the build: `pnpm preview`.
- Type and Svelte check: `pnpm check`.
- Lint one commit message: `printf '%s\n' "<header>" | npx --no -- commitlint`.
- No `test`, `lint` or `format` script.

## Windows

- Host is Windows; the primary shell is PowerShell, Git Bash is available. A second `bash.exe` on PATH targets WSL, so do not rely on bare `bash` in tooling.
- `core.autocrlf` is `true`.
- Quote static paths with spaces or `&` (CV PDF, portrait image).
