# Task completion

1. `pnpm check` (baseline: 0 errors, 0 warnings).
2. `pnpm build` must succeed.
3. For visible changes, check both themes at 320, 390, 768, 1024 and 1440px wide, plus 844x390 landscape. The header nav switches at `lg` (1024px); the hero stacks below `lg`.

- `pnpm exec biome ci .` must exit 0. It skips `.gitignore` entries; `.gitattributes` keeps the checkout in LF.
- After a change to `src/lib/trap-tab.ts`: `node --test src/lib/trap-tab.test.ts`.
- After a visual change, keep `DESIGN.md` and `.impeccable/design.json` in step with the tokens in `src/app.css`.
- Commits: Conventional Commits, header max 100, body lines max 150, no AI attribution (`commitlint.config.mjs`; `lefthook.yml` commit-msg hook strips and lints). Never skip hooks.
- Pull requests: `.github/workflows/pr-hygiene.yml` lints commits and title and rejects AI attribution. It does not build the site.
- Work on a branch: a push to `main` deploys.
