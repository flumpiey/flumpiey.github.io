---
name: Dru Connold Portfolio
description: A dark, plain workshop log of rescue work, scannable by clients and recruiters.
colors:
  midnight-hull: "#15171F"
  deck: "#1A1C26"
  bulkhead: "#202330"
  rail: "#27293A"
  slate-wash: "#2B2E40"
  fog-white: "#DFE0E2"
  signal-crimson: "#D4163C"
  log-body: "#D1D5DB"
  log-heading: "#FFFFFF"
  log-bullet: "#4B5563"
typography:
  display:
    fontFamily: "system-ui"
    fontSize: "3rem"
    lineHeight: 1
  headline:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.333
  title:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.6
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
    fontSize: "0.875rem"
    lineHeight: "1.25rem"
rounded:
  none: "0px"
  lg: "8px"
  xl: "12px"
  pill: "24px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  button-filled:
    backgroundColor: "{colors.fog-white}"
    textColor: "{colors.midnight-hull}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  button-ghost:
    backgroundColor: "rgb(43 46 64 / 0.2)"
    textColor: "{colors.fog-white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  card-project:
    backgroundColor: "{colors.deck}"
    textColor: "{colors.log-body}"
    rounded: "{rounded.none}"
    padding: "32px"
  sidebar:
    backgroundColor: "{colors.deck}"
    textColor: "{colors.fog-white}"
    padding: "24px"
    width: "256px"
  modal-project:
    backgroundColor: "{colors.deck}"
    rounded: "{rounded.xl}"
    width: "min(92vw, 48rem)"
---

# Design System: Dru Connold Portfolio

## Overview

**Creative North Star: "The Workshop Log"**

The site is a plain record of work: the problem, the fix and the result. It is restrained and scannable, and it puts evidence before decoration. Clients and recruiters find facts fast and then make contact.

The page is dark only. One column of text runs beside a fixed sidebar. Tone separates the surfaces. Controls stay quiet, so the content carries the page.

**Key Characteristics:**
- Dark blue-charcoal surfaces with cool off-white text.
- Plain headings and lists in a single reading column.
- Pill-shaped controls against square project cards.
- Flat layers, with shadow only for hover and overlays.

## Colors

The palette is a narrow set of blue-charcoal tones with off-white text and one reserved accent.

### Primary
- **Signal Crimson** (signal-crimson): The theme accent. It is visible today only as the text selection tint, at 30% opacity.

### Neutral
- **Midnight Hull** (midnight-hull): Page background, and text on filled buttons.
- **Deck** (deck): Sidebar, mobile menu, project cards and modal.
- **Bulkhead** (bulkhead): Image placeholder surface.
- **Rail** (rail): Sidebar and menu dividers.
- **Slate Wash** (slate-wash): Ghost button tint and its 1px ring.
- **Fog White** (fog-white): Base text and filled button background.
- **Log Heading** (log-heading): Headings and bold text in reading sections.
- **Log Body** (log-body): Running text in reading sections.
- **Log Bullet** (log-bullet): List markers.

### Named Rules
**The Rare Signal Rule.** Signal Crimson is reserved. Do not use it for fills, headings or decoration.

## Typography

**Display Font:** system-ui
**Body Font:** Inter (with the system sans-serif stack)

**Character:** Plain interface type with no personality of its own. The site loads no web font, so Inter shows only where the visitor has it installed.

### Hierarchy
- **Display** (inherited weight, 1.875rem rising to 3rem at 768px): The name at the top of the page.
- **Headline** (700, 1.5rem, 1.333): Section headings.
- **Title** (600, 1.25rem, 1.6): Role headings. Project card titles use 1rem at 600.
- **Body** (400, 1rem, 1.75): Reading sections, with a maximum of 65ch where the prose limit applies.
- **Label** (0.875rem, 1.25rem): Buttons, dates and card summaries. Secondary text uses 80% opacity.

## Layout

From 768px, a fixed 256px sidebar holds the portrait, section links and contact controls. The content sits to its right in a centred container with 40px padding. Below 768px, a fixed top bar and a two-column slide-down menu replace the sidebar, and page padding is 24px.

Sections are 40px apart. The project grid has one column, then two from 640px and three from 1024px, with 24px gaps. Each card has a maximum width of 28rem. Section links use smooth scroll.

## Elevation & Depth

The system is flat and tonal. Midnight Hull is the page, Deck is the raised layer, and thin dividers or faint rings mark edges.

### Shadow Vocabulary
- **Resting overlay** (`box-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)`): Mobile menu and sidebar portrait.
- **Hover lift** (`box-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1)`): Project card on hover, with 101% scale.

### Named Rules
**The Tone First Rule.** Separate surfaces with tone. Add a shadow only for hover or an overlay.

## Shapes

Controls are pills (24px). Project cards are square (0px). The portrait and modal have gently curved corners (12px), and modal images use 8px. Borders and dividers are 1px.

## Components

Components are restrained and plain.

### Buttons
- **Shape:** Pill (24px).
- **Filled:** Fog White with Midnight Hull text. Use it for contact controls, CV download and "View details".
- **Ghost:** Slate Wash at 20% with a 1px Slate Wash ring. Use it for navigation and external links.
- **Hover / Active:** Brightness rises to 115% on hover. The button scales to 95% when pressed. Transitions take 150ms.
- **Disabled:** 50% opacity in the base style. "Under NDA" adds a 60% opacity class.
- **Focus:** The browser default.

### Cards / Containers
- **Corner Style:** Square.
- **Background:** Deck.
- **Shadow Strategy:** Flat at rest, hover lift on pointer.
- **Structure:** A 16:9 screenshot, then title, summary and a two-button row.
- **Internal Padding:** Two nested 16px layers.

### Navigation
Section links are full-width ghost pills, left-aligned in the sidebar and centred in the mobile grid. There is no active section state. Icon-only contact controls keep a screen reader label.

### Project Modal
A Deck panel on a 40% black backdrop with a small blur. The header holds the title, the external link or "Link under NDA", and "Close". From 768px, the image takes two of five columns and the text takes three. The image keeps a 3:2 ratio.

## Do's and Don'ts

### Do:
- **Do** show the problem, the work and the result in that order.
- **Do** keep surfaces to the blue-charcoal tones, with Midnight Hull as the page.
- **Do** keep controls as pills and project cards square.
- **Do** give every icon-only control a text label for screen readers.

### Don't:
- **Don't** add decoration that competes with the content.
- **Don't** use Signal Crimson as a fill, heading colour or ornament.
- **Don't** add shadows to surfaces at rest, except the existing portrait and mobile menu.
