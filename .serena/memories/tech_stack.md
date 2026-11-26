# Tech stack

- SvelteKit 2, Svelte 4 (not 5: no runes; use `export let`, `on:click`, `<slot />`).
- TypeScript 5 (`strict`, `checkJs`), Vite 5.
- Tailwind 3 + Skeleton v2 (`@skeletonlabs/skeleton` 2.x, `tw-plugin`); not Skeleton v3 or Tailwind 4 APIs. Theme preset `crimson`, dark mode by class.
- `vite-plugin-tailwind-purgecss`, `@floating-ui/dom` (popups), `highlight.js` (registered languages: xml, css, javascript, typescript).
- pnpm; `engine-strict=true`; `pnpm-workspace.yaml` `allowBuilds` lists packages that may run install scripts (`esbuild`, `lefthook`).
- CI (`.github/workflows/`) uses Node 22 and pnpm 9, which can differ from the local pnpm major: keep `pnpm-lock.yaml` readable by both.
- `jekyll-gh-pages.yml` builds SvelteKit, not Jekyll.
- No test framework.
