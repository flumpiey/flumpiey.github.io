# Core

Personal portfolio / CV site for one person. Single prerendered page, no backend, no database, no API.

## Source map
- `src/routes/+page.svelte`: all page content (header, summary, skills, experience, projects, education, certifications, interests) and the inline `projects` array.
- `src/routes/+layout.svelte`: Skeleton `AppShell`, mobile app bar, desktop sidebar, `navLinks`, global `Modal` registry, Skeleton store setup.
- `src/routes/+page.server.ts`: `prerender = true`.
- `src/lib/components/`: `ProjectModal`, obfuscated contact links. `src/lib/icons/`: inline SVG icons with a `className` prop.
- `static/`: CV PDF, portrait, project images, favicons.
- `README.md` is unedited create-svelte boilerplate; do not treat it as documentation.

## Invariants
- `adapter-static` with `404.html` fallback, `paths.base = ""`, `relative: false`: the site assumes it is served at the domain root.
- A push to `main` deploys to GitHub Pages immediately.
- The repository is public: no secrets or private notes in tracked files, including `.serena/`.
- Email and Telegram handle stay base64-encoded and are decoded in `onMount`; never put them in markup as plain text.

## More
- Versions, tooling, version mismatches: `mem:tech_stack`
- Commands and Windows differences: `mem:suggested_commands`
- Code rules for editing content, components, styles: `mem:conventions`
- Checks before a task is done, commit and PR rules: `mem:task_completion`
