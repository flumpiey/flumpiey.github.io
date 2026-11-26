---

version: 1
slug: "src-routes-page-svelte"
primary_target: "src/routes/+page.svelte"
related_targets: []
---

# Surface brief: portfolio single page

Mode: Persuade. Build path: code-led. Audience and job: see PRODUCT.md (clients and recruiters, judge fit, then contact or download the CV).

Confirmed by the user on 2026-11-26: B&W portrait cutout, direct contact links only (no form), light and dark themes, top navigation replaces the sidebar, no testimonials, blog or process section, no white backgrounds.

## Direction contract

THESIS: A modern Swiss poster for a developer who rescues failed builds. A strict grid, huge condensed grotesque type and flat red and black fields carry the page. It refuses the dark sidebar CV with pill buttons that it replaces.

OWN-WORLD: See Tokens and System below.

STORY: The visitor sees who Dru is and that Dru rescues builds, checks the proof in the projects, then makes contact or downloads the CV.

FIRST VIEWPORT: Top bar (DC mark, section links, theme toggle, Contact). Below: left, the name on two lines, "DRU" in foreground colour and "CONNOLD." in red, at poster scale; under it the role line, location, the rescue sentence, "View projects" (primary) and "Download CV". Right, the B&W cutout (/portrait-cutout.webp, transparent, looks to the viewer's right) standing on the bottom edge in front of a solid red rectangle. Below 768px the portrait block stacks under the name and the primary action stays visible without a long scroll.

FORM: Swiss editorial poster grid, from the guide images. seed: none (pinned). The user's words: "modern swiss design Design Styles portfolio using the following as guides", off white, theme changer, red and black like the 5th image.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Tokens (define once in src/app.css as theme variables, use by name)

| Token                                      | Light          | Dark           |
| ------------------------------------------ | -------------- | -------------- |
| paper (page)                               | #F1EDE4        | #0F0F0E        |
| surface (alt field)                        | #E6E0D3        | #1A1917        |
| ink (text)                                 | #111110        | #EDE8DE        |
| ink-muted                                  | #4A4640        | #B9B4AA        |
| rule (hairline)                            | #111110 at 25% | #EDE8DE at 22% |
| block (black field)                        | #111110        | #1A1917        |
| on-block                                   | #EDE8DE        | #EDE8DE        |
| red (large fields, display type)           | #E4232B        | #E4232B        |
| red-solid (behind small text)              | #C8141F        | #C8141F        |
| red-text (small red text on paper/surface) | #B5121C        | #FF5A5F        |
| on-red                                     | #F6F1E8        | #F6F1E8        |

Never use #FFFFFF or Tailwind `white` anywhere. Check contrast for each pair you use (WCAG 2.2 AA). `red` is for text of 24px or larger only.

## System

- Type: Archivo variable (@fontsource-variable/archivo, include the width axis). Display: weight 800 to 900, condensed width (about 62 to 75%), uppercase, line-height 0.85 to 0.95, tracking not below -0.04em, `clamp()` sizes. Hero name up to about 10rem, section headings 3 to 5rem on desktop. Body: normal width, 400, 1rem to 1.125rem, line-height 1.6, 65 to 75ch.
- Grid: 12 columns from 1024px, 6 from 640px, 4 below. Content max width 90rem. Fluid gutters. Flush left. Visible 1px rules separate columns and rows.
- Shape and depth: square corners (0), no shadows, no gradients, no glass. Buttons are rectangles with a drawn arrow icon: primary = red-solid fill, secondary = 1px ink border. Targets at least 44px high.
- Rhythm: full-width fields alternate paper, black block and red. Section order: Hero, About (#summary), Stats (red), Skills (#skills), Projects (#projects), Experience (#experience), Education + Certifications + Interests (#education, #certifications, #interests), Contact (#contact, red), footer.
- No eyebrow or kicker labels above headings. No decorative numbering. No fake distress textures, barcodes or filler symbols. Use only colours from the 5th guide image, never its sunburst or rising sun motifs.
- Motion: one authored moment at most (the hero red field reveal), plus 150ms state changes. Honour prefers-reduced-motion. Content is visible without JavaScript or animation.
- Browser surfaces: theme the selection, focus ring, scrollbar and `color-scheme` per theme.

## Theme changer

Class `.dark` on `<html>`. An inline script in app.html sets it before first paint: stored choice, else `prefers-color-scheme`. Wrap localStorage in try/catch. Follow system changes while no choice is stored. The header button has an accessible name that states the action, and works on every breakpoint. Update `<meta name="theme-color">`.

## Content truth

- Keep all existing copy and all six projects. Order: EngagementFit, Exclusive Books (the rescues), then DANSA, SmartBiii, FinnPont, manager-mcp.
- Stats, only these: "10+" years of experience; "6M+" products synced for Exclusive Books; "40+" stores covered by that automation.
- Skills section: the existing Core Skills list as ruled rows (it is the services view), then Languages & Frameworks.
- Contact heading: "Have a build that needs rescue?" Links: email, Telegram, LinkedIn, GitHub, CV, each with a visible label. Email and Telegram stay obfuscated (use the existing components; never write the address or handle in markup).
- Add no other claims, quotes, metrics or clients.

## Guide images (reference only, do not copy their content)

Four layout and style references and one colour reference, supplied by the user in chat. Not stored in the repo.

## Unresolved

None.
