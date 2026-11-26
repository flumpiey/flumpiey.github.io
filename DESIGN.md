---
name: Dru Connold Portfolio
description: A modern Swiss poster for a developer who rescues failed builds, in off white, black and signal red.
colors:
  paper: "#F1EDE4"
  paper-dark: "#0F0F0E"
  surface: "#E6E0D3"
  surface-dark: "#1A1917"
  ink: "#111110"
  ink-dark: "#EDE8DE"
  ink-muted: "#4A4640"
  ink-muted-dark: "#B9B4AA"
  rule: "rgb(17 17 16 / 0.25)"
  rule-dark: "rgb(237 232 222 / 0.22)"
  block: "#111110"
  block-dark: "#1A1917"
  on-block: "#EDE8DE"
  poster-red: "#E4232B"
  red-solid: "#C8141F"
  red-text: "#B5121C"
  red-text-dark: "#FF5A5F"
  on-red: "#F6F1E8"
typography:
  display:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(4rem, 15vw, 10rem)"
    fontWeight: 900
    lineHeight: 0.85
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 62"
  headline:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 5rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 68"
  title:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 75"
  stat:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(4rem, 12vw, 8rem)"
    fontWeight: 900
    lineHeight: 0.85
    letterSpacing: "-0.03em"
    fontFeature: "'tnum' 1"
    fontVariation: "'wdth' 62"
  body:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.95rem + 0.25vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.02em"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(1rem, 2.5vw, 2rem)"
  header: "4rem"
  section: "4rem"
  section-lg: "6rem"
  content-max: "90rem"
components:
  button-primary:
    backgroundColor: "{colors.red-solid}"
    textColor: "{colors.on-red}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "10px 20px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "10px 20px"
    height: "44px"
  button-secondary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-icon:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    size: "44px"
  contact-row:
    backgroundColor: "{colors.red-solid}"
    textColor: "{colors.on-red}"
    typography: "{typography.label}"
    height: "56px"
  contact-row-hover:
    backgroundColor: "{colors.on-red}"
    textColor: "{colors.red-solid}"
---

# Design System: Dru Connold Portfolio

## Overview

**Creative North Star: "The Rescue Poster"**

The page reads as a modern Swiss poster for a developer who rescues failed builds. A strict grid, huge condensed grotesque type and flat fields of off white, black and signal red carry it. Every section is a full-width field, and visible hairline rules mark the columns and rows inside it.

The system is flat and typographic. Hierarchy comes from scale and weight, never from shadow, gradient or glass. One black-and-white portrait cutout stands in front of a solid red rectangle and is the only picture outside the project screenshots. The page refuses the dark sidebar CV with pill buttons that it replaced.

There are two themes, light and dark, with the same structure. Neither theme uses pure white: the light page is a warm off white, and the dark page is a near black with warm off-white text.

**Key Characteristics:**

- Flush-left 12-column grid with visible 1px rules.
- Condensed uppercase display type at poster scale.
- Full-width fields that alternate paper, black block and red.
- Square corners everywhere; no shadows, gradients or glass.
- Light and dark themes, with no pure white in either.

## Colors

A three-colour poster palette: warm off white, near black and one signal red, with a darker red for small text.

### Primary

- **Poster Red** (`poster-red`): large red fields (the hero rectangle) and display type of 24px or larger, such as "CONNOLD." in the hero name.
- **Signal Red Solid** (`red-solid`): fields and buttons that carry small text: the primary button, the Stats band and the Contact band. On Red text on it measures 5.22:1.
- **Red Text** (`red-text`, `red-text-dark`): small red text on paper or surface, such as prose links in the project dialog.

### Neutral

- **Paper** (`paper`, `paper-dark`): the page field in each theme.
- **Surface** (`surface`, `surface-dark`): alternate fields, image placeholders and the scrollbar track.
- **Ink** (`ink`, `ink-dark`): all body text and headings on paper.
- **Ink Muted** (`ink-muted`, `ink-muted-dark`): secondary text such as the location line and project summaries.
- **Rule** (`rule`, `rule-dark`): 1px hairlines between columns and rows, and the edge of black blocks in the dark theme.
- **Block** (`block`, `block-dark`) with **On Block** (`on-block`): the black fields for Skills, Experience and the footer.
- **On Red** (`on-red`): text and rules on the red bands.

### Named Rules

**The No White Rule.** Never use #FFFFFF or a `white` utility. The Tailwind `white` colour is unset in `src/app.css`, and the root text colour is Ink, so no browser default falls back to white.

**The Red Size Rule.** Poster Red is for fields and for text of 24px or larger. Text under 24px on red uses the Red Solid field; small red text on paper uses Red Text.

**The Token Rule.** Colours live once in `src/app.css` as `light-dark()` theme variables. Use the token utilities (`bg-paper`, `text-ink`, `border-rule`), not `dark:` variants.

## Typography

**Display Font:** Archivo Variable (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Archivo Variable (same family, normal width)

**Character:** One grotesque family at two widths. The condensed, heavy cut shouts the names and headings; the normal-width regular cut carries the reading text quietly.

### Hierarchy

- **Display** (900, clamp(4rem, 15vw, 10rem), 0.85, width 62%, uppercase): the hero name only. The hero scales it to its column with container units, so "CONNOLD." fits at 320px.
- **Headline** (800, clamp(2.5rem, 7vw, 5rem), 0.9, width 68%, uppercase): section headings.
- **Title** (800, clamp(1.5rem, 3vw, 2rem), 1, width 75%, uppercase): role titles, small project titles, the rescue line and dialog subheads.
- **Stat** (900, clamp(4rem, 12vw, 8rem), 0.85, width 62%, tabular figures): the three numbers in the Stats band.
- **Body** (400, clamp(1rem, 0.95rem + 0.25vw, 1.125rem), 1.6, max 70ch): paragraphs and list text.
- **Label** (700, 0.875rem, 0.02em tracking, uppercase): buttons, navigation, skill labels, stat labels and meta lines.

### Named Rules

**The Tracking Floor Rule.** Display tracking stays between -0.02em and -0.03em, never below -0.04em.

**The No Kicker Rule.** No eyebrow labels above headings and no decorative section numbers. The heading carries its own weight.

## Layout

The grid has 4 columns below 640px, 6 from 640px and 12 from 1024px, with a fluid gutter of clamp(1rem, 2.5vw, 2rem). Content is flush left inside a 90rem container. Sections use 4rem of vertical padding, and 6rem from the large breakpoints.

Section order is fixed: Hero, Profile Summary, Stats (red), Core Skills (black), Projects, Professional Experience (black), Education with Certifications and Interests, Contact (red), and the footer (black).

The hero splits 7 and 5 columns from 1024px: the name and actions on the left, the portrait on a red rectangle on the right. Below 1024px the portrait stacks under the actions, and the primary action stays in the first viewport at 390x844. On short landscape screens (30rem high or less) the hero tightens its type and spacing so the primary action stays visible at 844x390.

A fixed 4rem header holds the DC mark, the section links (from 1024px), the theme toggle, the Contact button (from 640px) and the menu button (below 1024px).

## Elevation & Depth

The system is flat. There are no shadows, gradients, blurs or glass. Depth comes from the change of field colour between sections and from 1px rules. In the dark theme, the black blocks carry a top and bottom rule, because the block and the page are close in tone.

### Named Rules

**The Flat Field Rule.** A field changes colour or gains a rule. It never floats.

## Shapes

Every corner is square (0px). Buttons, cards, the dialog and image frames are rectangles. Rules are 1px. Project cards sit in a grid with a 1px gap filled by the rule colour, so the cells read as one ruled table, not as separate cards.

## Components

### Buttons

- **Shape:** rectangle, square corners (0px), at least 44px high, uppercase label type, with a drawn arrow or download icon at the end.
- **Primary:** Red Solid fill with On Red text (10px 20px padding). Hover turns the fill to Ink and the text to Paper, and the arrow moves 4px to the right in 150ms.
- **Secondary:** transparent with a 1px border in the current text colour. Hover fills with Ink.
- **Icon:** a 44px square for the theme toggle and the menu, with a 1px border on hover. Each has an accessible name that states its action.
- **Disabled:** 55% opacity and a not-allowed cursor.
- **Focus:** a 2px outline in the current text colour with a 3px offset, so it contrasts on paper, black and red fields.

### Project Cells

- **Corner Style:** square.
- **Background:** Paper, with Surface behind the image while it loads.
- **Border:** the 1px rule gap of the grid.
- **Internal Padding:** 24px to 32px for the two rescue projects, 20px for the others.
- **Behaviour:** the two rescues span half the 12-column grid; the other four span a quarter from 1280px. On hover-capable screens the screenshot is grayscale until hover or focus.

### Navigation

- **Desktop:** label type links with an underline on hover, each at least 44px high.
- **Mobile:** the menu button opens a ruled list of title-size links under the header. Escape closes it and returns focus to the button.
- **No JavaScript:** the theme toggle and the menu button are hidden, and the theme follows the system.

### Project Dialog

A full-screen dialog on Paper with a sticky ruled top bar (link and Close). The title uses headline scale; subheads use the Title voice. Tab and Shift+Tab stay inside the dialog, Escape and a backdrop press close it, and the page behind does not scroll.

### Contact Rows

Full-width ruled rows on the Red Solid band, each at least 56px high, with an icon, a visible label and an arrow. Hover inverts to On Red fill with Red Solid text. Email and Telegram use the obfuscated link components, so neither address appears in the markup.

### Theme Toggle

An inline script in `src/app.html` sets `.dark` or `.light` on `<html>` before first paint: stored choice, else the system preference. The toggle follows system changes while no choice is stored, clears the stored choice when the user picks the system theme, updates `meta[name="theme-color"]`, and keeps working when localStorage is blocked.

## Do's and Don'ts

### Do:

- **Do** use the colour tokens from `src/app.css` by name in both themes.
- **Do** keep every corner square (0px) and every rule 1px.
- **Do** keep text under 24px off Poster Red; use Red Solid for small text on red.
- **Do** keep targets at least 44px high and the focus outline visible on every field.
- **Do** keep the one authored motion, the hero red field rising (900ms), and keep state changes at 150ms; honour prefers-reduced-motion.
- **Do** theme the browser surfaces: selection, focus ring, scrollbar and `color-scheme`.

### Don't:

- **Don't** use #FFFFFF or a `white` utility anywhere.
- **Don't** add shadows, gradients, glass or rounded corners.
- **Don't** add eyebrow labels, decorative numbers, distress textures, barcodes or filler symbols.
- **Don't** use the sunburst or rising sun motifs of the colour reference image.
- **Don't** write the email address or Telegram handle in markup.
