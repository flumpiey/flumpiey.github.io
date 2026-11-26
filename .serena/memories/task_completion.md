# Task completion

1. `pnpm check` (baseline: 0 errors, 0 warnings).
2. `pnpm build` must succeed.
3. For visible changes, check desktop and mobile widths: the layout switches at the `md` breakpoint.

- Do not use Biome as a gate: `biome.json` has 1.x keys that Biome 2.2.4 rejects, so it exits on configuration errors. Fix only if asked.
- Commits: Conventional Commits, header max 100, body lines max 150, no AI attribution (`commitlint.config.mjs`; `lefthook.yml` commit-msg hook strips and lints). Never skip hooks.
- Pull requests: `.github/workflows/pr-hygiene.yml` lints commits and title and rejects AI attribution. It does not build the site.
- Work on a branch: a push to `main` deploys.
