# Task completion

1. `pnpm check` (baseline: 0 errors, 0 warnings).
2. `pnpm build` must succeed.
3. For visible changes, check desktop and mobile widths: the layout switches at the `md` breakpoint.

- `pnpm exec biome ci .` must exit 0. It skips `.gitignore` entries; `.gitattributes` keeps the checkout in LF.
- After a change to `src/lib/trap-tab.ts`: `node --test src/lib/trap-tab.test.ts`.
- Commits: Conventional Commits, header max 100, body lines max 150, no AI attribution (`commitlint.config.mjs`; `lefthook.yml` commit-msg hook strips and lints). Never skip hooks.
- Pull requests: `.github/workflows/pr-hygiene.yml` lints commits and title and rejects AI attribution. It does not build the site.
- Work on a branch: a push to `main` deploys.
