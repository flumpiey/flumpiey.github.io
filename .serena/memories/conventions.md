# Conventions

## Content

- A project card is one entry in `projects` in `src/routes/+page.svelte`; the keyed each uses `title`, so titles must be unique.
- The project shape is declared twice: `IProject` in `+page.svelte` and `Project` in `ProjectModal.svelte`. Change both.
- Modal body: `details` (paragraphs) replaces the `overview`/`problem`/`solution`/`impact` layout.
- No `link` renders a disabled "Under NDA" button; `linkLabel` overrides "Visit site".
- Navigation: each section `id` must match an entry in `navLinks` in `+layout.svelte`.
- Contact and social buttons are repeated three times (mobile menu, sidebar, page header): change all of them. The CV filename is hardcoded in each.
- Static assets use root-absolute paths (`/name.png`).

## Code

- `<script lang="ts">`, Svelte 5 runes and event attributes, tabs, double quotes in TS imports and attributes.
- Import library code as `#lib/...` with the file extension (`imports` in `package.json`).
- Style with Tailwind utilities and Skeleton classes (`btn`, `preset-*`, `dialog`); no component `<style>` blocks.
- Write class names literally: Tailwind cannot detect classes assembled at runtime.
- `src/app.css` overrides the Skeleton `crimson` palette, `btn` (sized for `btn btn-sm` only) and adds `preset-ghost-surface`.
- Inside `.prose`, a margin reset needs `!` (`m-0!`) and `space-y-*` loses to prose margins.
- Open project details with `open(project)` on the `ProjectModal` instance.
- Icons: new component in `src/lib/icons/` with `className` prop and `aria-hidden`; icon-only links need `aria-label`.
- Biome formats non-Svelte files only; see `mem:task_completion` for its current state.
