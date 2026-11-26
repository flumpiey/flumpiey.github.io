# Conventions

## Content

- A project card is one entry in `projects` in `src/lib/projects.ts`; the keyed each uses `title`, so titles must be unique. The first two entries render as the large rescue cells.
- `Project` is declared once in `src/lib/projects.ts` and imported by `Projects.svelte` and `ProjectModal.svelte`.
- Add the intrinsic size of a new project image to `imageSizes` in `src/lib/sections/Projects.svelte`.
- Modal body: `details` (paragraphs) replaces the `overview`/`problem`/`solution`/`impact` layout.
- No `link` renders a disabled "Under NDA" button; `linkLabel` overrides "Visit site".
- Navigation: each `href` in `navLinks` in `+layout.svelte` must match a section `id` (`summary`, `skills`, `projects`, `experience`, `contact`; also `education`, `certifications`, `interests`).
- Contact links live once, in `src/lib/sections/Contact.svelte`. The CV filename is hardcoded there and in `Hero.svelte`.
- Static assets use root-absolute paths (`/name.png`).
- Add no claims, metrics, testimonials or clients beyond the site copy and the CV (`PRODUCT.md`).

## Code

- `<script lang="ts">`, Svelte 5 runes and event attributes, tabs, double quotes in TS imports and attributes.
- Import library code as `#lib/...` with the file extension (`imports` in `package.json`).
- Style with Tailwind utilities and the custom utilities in `src/app.css`: colour tokens (`bg-paper`, `text-ink`, `border-rule`, `bg-red-solid`, ...), type roles (`type-display`, `type-heading`, `type-subheading`, `type-stat`, `type-body`, `type-ui`), `page-container`, `swiss-grid`, `button-primary`, `button-secondary`, `button-icon`, `prose-theme`.
- Colours switch theme through `light-dark()` in the tokens; do not add `dark:` variants for colour.
- `red` is for fields and text of 24px or larger; small text on red uses `bg-red-solid`.
- Skeleton is CSS only and supplies the `dialog` classes in `ProjectModal`; do not use its `btn` or `preset-*` classes in new code.
- A component `<style>` block is fine for a section-specific rule (the hero name scale, the credentials headings).
- Write class names literally: Tailwind cannot detect classes assembled at runtime.
- Inside `.prose`, a margin reset needs `!` (`m-0!`) and `space-y-*` loses to prose margins.
- Open project details with `open(project)` on the `ProjectModal` instance.
- Icons: new component in `src/lib/icons/` with `className` prop and `aria-hidden`; icon-only controls need `aria-label`.
- A control that needs JavaScript to work carries `data-requires-js`, so the no-JavaScript page hides it.
- Biome formats non-Svelte files only; see `mem:task_completion` for its current state.
