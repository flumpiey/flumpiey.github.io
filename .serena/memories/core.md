# Core

Personal portfolio / CV site for one person. Single prerendered page, no backend, no database, no API.

## Source map

- `src/routes/+page.svelte`: composes the sections in order; it holds no content.
- `src/lib/sections/`: one component per page section (`Hero`, `About`, `Stats`, `Skills`, `Projects`, `Experience`, `Credentials`, `Contact`). Each section owns its copy.
- `src/lib/projects.ts`: the `Project` interface and the `projects` array (rescues first).
- `src/routes/+layout.svelte`: font and CSS imports, fixed top header (`navLinks`, theme toggle, Contact button, mobile menu), `<main>` and the footer.
- `src/routes/+page.server.ts`: `prerender = true`.
- `src/app.html`: inline script that sets `.dark` or `.light` on `<html>` before first paint, `theme-color` metas, a `<noscript>` style that hides `[data-requires-js]` controls.
- `src/lib/components/`: `ProjectModal` (native `<dialog>`), `ThemeToggle`, obfuscated contact links. `src/lib/icons/`: inline SVG icons with a `className` prop.
- `static/`: CV PDF, portrait (`portrait-cutout.webp` is the one the page uses), project images, favicons.
- `DESIGN.md` and `.impeccable/design.json`: the visual system (Swiss poster, tokens, rules). `PRODUCT.md`: audience and content rules.
- `README.md` is unedited create-svelte boilerplate; do not treat it as documentation.

## Invariants

- `adapter-static` with `404.html` fallback, `paths.base = ""`, `relative: false` (all in `vite.config.ts`): the site assumes it is served at the domain root.
- A push to `main` deploys to GitHub Pages immediately.
- The repository is public: no secrets or private notes in tracked files, including `.serena/`.
- Email and Telegram handle stay base64-encoded and are decoded in `onMount`; never put them in markup as plain text.
- No pure white (#FFFFFF or the `white` utility) in either theme; `--color-white` is unset in `src/app.css`.

## More

- Versions, tooling, version mismatches: `mem:tech_stack`
- Commands and Windows differences: `mem:suggested_commands`
- Code rules for editing content, components, styles: `mem:conventions`
- Checks before a task is done, commit and PR rules: `mem:task_completion`
