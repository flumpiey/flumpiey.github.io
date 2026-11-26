# Tech stack

- SvelteKit 3, Svelte 5. No `svelte.config.js`: Kit config is passed to `sveltekit()` in `vite.config.ts`.
- TypeScript 6 (`strict`, `checkJs`), Vite 8. Hold TypeScript below 7: SvelteKit 3 rejects it.
- Tailwind 4 (`@tailwindcss/vite`, CSS config and theme tokens in `src/app.css`) with the forms and typography plugins, plus Skeleton 5 (CSS only, used for the dialog classes). Dark mode is the `.dark` class on `<html>`, set by the inline script in `src/app.html` and by `ThemeToggle`.
- Font: Archivo Variable with the width axis (`@fontsource-variable/archivo/wdth.css`, imported in `+layout.svelte`).
- pnpm; `engine-strict=true`; `pnpm-workspace.yaml` `allowBuilds` lists packages that may run install scripts (`lefthook`).
- CI (`.github/workflows/`) uses Node 26 and pnpm 9, which can differ from the local pnpm major: keep `pnpm-lock.yaml` readable by both.
- `jekyll-gh-pages.yml` builds SvelteKit, not Jekyll.
- No test framework; `node --test` runs the one unit test for `src/lib/trap-tab.ts`.
