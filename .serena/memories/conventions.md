# Conventions

## Content
- A project card is one entry in `projects` in `src/routes/+page.svelte`; the keyed each uses `title`, so titles must be unique.
- The project shape is declared twice: `IProject` in `+page.svelte` and the `project` prop in `ProjectModal.svelte`. Change both.
- Modal body: `details` (paragraphs) replaces the `overview`/`problem`/`solution`/`impact` layout.
- No `link` renders a disabled "Under NDA" button; `linkLabel` overrides "Visit site".
- Navigation: each section `id` must match an entry in `navLinks` in `+layout.svelte`.
- Contact and social buttons are repeated three times (mobile menu, sidebar, page header): change all of them. The CV filename is hardcoded in each.
- Static assets use root-absolute paths (`/name.png`).

## Code
- `<script lang="ts">`, tabs, double quotes in TS imports and attributes.
- Style with Tailwind utilities and Skeleton classes (`btn`, `variant-*`, `*-token`); no component `<style>` blocks.
- Write class names literally: purgecss can drop classes assembled at runtime.
- Open modals through Skeleton `modalStore.trigger` with a component registered in the layout `Modal`.
- Icons: new component in `src/lib/icons/` with `className` prop and `aria-hidden`; icon-only links need `aria-label`.
- Biome formats non-Svelte files only; see `mem:task_completion` for its current state.
