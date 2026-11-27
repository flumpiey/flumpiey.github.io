---
name: Dru Connold Portfolio
description: A modern Swiss poster for a developer who rescues failed builds, in ink navy, poster cream and signal lime.
colors:
  paper: "#F5F0E8"
  paper-dark: "#06004F"
  surface: "#EAE4D8"
  surface-dark: "#110A62"
  ink: "#06004F"
  ink-dark: "#F5F0E8"
  ink-muted: "#3A3578"
  ink-muted-dark: "#CCCCE0"
  rule: "rgb(6 0 79 / 0.25)"
  rule-dark: "rgb(245 240 232 / 0.22)"
  block: "#06004F"
  block-dark: "#030030"
  on-block: "#F5F0E8"
  red: "#06004F"
  red-dark: "#F2FF26"
  red-solid: "#F2FF26"
  red-text: "#202D85"
  red-text-dark: "#F2FF26"
  on-red: "#06004F"
  mark: "#F2FF26"
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

The page reads as a modern Swiss poster for a developer who rescues failed builds. A strict grid, huge condensed grotesque type and flat fields of poster cream, ink navy and signal lime carry it. Every section is a full-width field, and visible hairline rules mark the columns and rows inside it.

The system is flat and typographic. Hierarchy comes from scale and weight, never from shadow, gradient or glass. One black-and-white portrait cutout stands in front of a solid lime rectangle and is the only picture outside the project screenshots. The page refuses the dark sidebar CV with pill buttons that it replaced.

There are two themes, light and dark, with the same structure. Neither theme uses pure white: the light page is a warm cream with navy ink, and the dark page is ink navy with cream text.

**Key Characteristics:**

- Flush-left 12-column grid with visible 1px rules.
- Condensed uppercase display type at poster scale.
- Full-width fields that alternate paper, navy block and lime.
- Square corners everywhere; no shadows, gradients or glass.
- Light and dark themes, with no pure white in either.

## Colors

A three-colour poster palette: poster cream, ink navy and one signal lime, with a link blue for small links on the light page.

The token names that start with `red` are historic. They hold the accent roles, and `src/app.css` keeps the names so that the components do not change.

### Primary

- **Signal Lime** (`red-solid`): the accent fields: the hero rectangle behind the portrait, the primary button, the Stats band and the Contact band. Navy text on it measures 17.05:1.
- **Accent** (`red`, `red-dark`): Ink Navy on the light page and Signal Lime on the dark page. It colours "CONNOLD." in the hero name and the edge of the primary button.
- **Highlighter Mark** (`mark`): a lime field behind "CONNOLD." on the light page only. It is transparent on the dark page, where the name itself is lime.
- **Link** (`red-text`, `red-text-dark`): Link Blue on the light page (10.43:1 on paper, 9.34:1 on surface) and Signal Lime on the dark page. Use it for prose links, such as the links in the project dialog and on the CV.

### Neutral

- **Paper** (`paper`, `paper-dark`): the page field in each theme: Poster Cream on light, Ink Navy on dark.
- **Surface** (`surface`, `surface-dark`): alternate fields, image placeholders and the scrollbar track: Cream Surface on light, Surface Navy on dark.
- **Ink** (`ink`, `ink-dark`): all body text and headings on paper (16.52:1 in both themes).
- **Ink Muted** (`ink-muted`, `ink-muted-dark`): secondary text such as the location line and project summaries (9.44:1 on light, 11.85:1 on dark).
- **Rule** (`rule`, `rule-dark`): 1px hairlines between columns and rows, and the edge of navy blocks in the dark theme.
- **Block** (`block`, `block-dark`) with **On Block** (`on-block`): the navy fields for Skills, Experience and the footer. On the dark page the block is Deep Navy (17.69:1 with cream text).
- **On Red** (`on-red`): Ink Navy text and rules on the lime bands.

### Named Rules

**The No White Rule.** Never use #FFFFFF or a `white` utility. The Tailwind `white` colour is unset in `src/app.css`, and the root text colour is Ink, so no browser default falls back to white.

**The Lime Carries Navy Rule.** A lime field always carries Ink Navy text. Never put lime text on the light page: lime on cream measures 1.03:1. Lime text appears only on the dark page, through the `red` and `red-text` tokens.

**The Lime Edge Rule.** A lime fill on the light page needs a navy edge, because lime and cream are close in tone. The primary button carries a 1px border in the `red` token.

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

Section order is fixed: Hero, Profile Summary, Stats (lime), Core Skills (navy), Projects, Professional Experience (navy), Education with Certifications and Interests, Contact (lime), and the footer (navy).

The hero splits 7 and 5 columns from 1024px: the name and actions on the left, the portrait on a lime rectangle on the right. Below 1024px the portrait stacks under the actions, and the primary action stays in the first viewport at 390x844. On short landscape screens (30rem high or less) the hero tightens its type and spacing so the primary action stays visible at 844x390.

A fixed 4rem header holds the DC mark, the section links (from 1024px), the theme toggle, the Contact button (from 640px) and the menu button (below 1024px).

The CV page (`/cv`) is an A4-width sheet (210mm) that is always in the light theme, on screen and on paper. It repeats the light token values locally, because the build lowers `light-dark()` to the root.

## Elevation & Depth

The system is flat. There are no shadows, gradients, blurs or glass. Depth comes from the change of field colour between sections and from 1px rules. In the dark theme, the navy blocks carry a top and bottom rule, because the block and the page are close in tone.

### Named Rules

**The Flat Field Rule.** A field changes colour or gains a rule. It never floats.

## Shapes

Every corner is square (0px). Buttons, cards, the dialog and image frames are rectangles. Rules are 1px. Project cards sit in a grid with a 1px gap filled by the rule colour, so the cells read as one ruled table, not as separate cards.

## Components

### Buttons

- **Shape:** rectangle, square corners (0px), at least 44px high, uppercase label type, with a drawn arrow or download icon at the end.
- **Primary:** Signal Lime fill with Ink Navy text (10px 20px padding) and a 1px edge in the accent colour. Hover turns the fill to Ink and the text to Paper, and the arrow moves 4px to the right in 150ms.
- **Secondary:** transparent with a 1px border in the current text colour. Hover fills with Ink.
- **Icon:** a 44px square for the theme toggle and the menu, with a 1px border on hover. Each has an accessible name that states its action.
- **Disabled:** 55% opacity and a not-allowed cursor.
- **Focus:** a 2px outline in the current text colour with a 3px offset, so it contrasts on paper, navy and lime fields.

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

Full-width ruled rows on the Signal Lime band, each at least 56px high, with an icon, a visible label and an arrow. Hover inverts to an Ink Navy fill with Signal Lime text. Email and Telegram use the obfuscated link components, so neither address appears in the markup.

### Theme Toggle

An inline script in `src/app.html` sets `.dark` or `.light` on `<html>` before first paint: stored choice, else the system preference. The toggle follows system changes while no choice is stored, clears the stored choice when the user picks the system theme, updates `meta[name="theme-color"]` (#F5F0E8 on light, #06004F on dark), and keeps working when localStorage is blocked.

## Do's and Don'ts

### Do:

- **Do** use the colour tokens from `src/app.css` by name in both themes.
- **Do** keep every corner square (0px) and every rule 1px.
- **Do** put Ink Navy text on every lime field.
- **Do** give a lime fill on the light page a navy edge.
- **Do** keep targets at least 44px high and the focus outline visible on every field.
- **Do** keep the one authored motion, the hero lime field rising (900ms), and keep state changes at 150ms; honour prefers-reduced-motion.
- **Do** theme the browser surfaces: selection, focus ring, scrollbar and `color-scheme`.

### Don't:

- **Don't** use #FFFFFF or a `white` utility anywhere.
- **Don't** put lime text on the light page.
- **Don't** add shadows, gradients, glass or rounded corners.
- **Don't** add eyebrow labels, decorative numbers, distress textures, barcodes or filler symbols.
- **Don't** use the sunburst or rising sun motifs of the colour reference image.
- **Don't** write the email address or Telegram handle in markup.
