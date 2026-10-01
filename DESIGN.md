---
name: Cappadocia Run Club
description: A 1:25 000 topographic sheet of Güllüdere, with the Sunday run drawn on it in ultramarine.
colors:
  sheet: "oklch(0.885 0.04 42)"
  sheet-deep: "oklch(0.83 0.055 40)"
  ink: "oklch(0.26 0.05 38)"
  ink-soft: "oklch(0.41 0.06 38)"
  contour: "oklch(0.5 0.11 40)"
  route: "oklch(0.46 0.2 266)"
  route-deep: "oklch(0.36 0.18 266)"
  route-light: "oklch(0.74 0.12 262)"
  night: "oklch(0.22 0.035 35)"
  night-ink: "oklch(0.93 0.025 45)"
  night-soft: "oklch(0.8 0.04 45)"
  alert: "oklch(0.48 0.17 28)"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4.4vw, 4rem)"
    fontWeight: 850
    lineHeight: 0.92
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1.25
    fontVariation: "'wdth' 120"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 800
    letterSpacing: "0.02em"
    fontVariation: "'wdth' 120"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "'kern', 'liga'"
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    letterSpacing: "0.08em"
    fontFeature: "'tnum'"
    fontVariation: "'wdth' 112"
  action:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    letterSpacing: "0.06em"
    fontVariation: "'wdth' 115"
rounded:
  none: "0"
spacing:
  inset: "6px"
  gutter-sm: "16px"
  gutter-md: "24px"
  gutter-lg: "40px"
  section: "80px"
  section-md: "112px"
  container: "90rem"
components:
  button-primary:
    backgroundColor: "{colors.route}"
    textColor: "{colors.sheet}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.route-deep}"
    textColor: "{colors.sheet}"
  button-primary-compact:
    backgroundColor: "{colors.route}"
    textColor: "{colors.sheet}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "44px"
  button-night:
    backgroundColor: "{colors.route-light}"
    textColor: "{colors.night}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "56px"
  button-night-hover:
    backgroundColor: "{colors.night-ink}"
    textColor: "{colors.night}"
  input-field:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "56px"
  segmented-option-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
    rounded: "{rounded.none}"
    height: "56px"
  neatline-inset:
    backgroundColor: "{colors.sheet}"
    rounded: "{rounded.none}"
    padding: "{spacing.inset}"
  header:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    height: "64px"
---

# Design System: Cappadocia Run Club

## Overview

**Creative North Star: "The Topographic Route Sheet"**

Every page is a printed 1:25 000 survey sheet of Güllüdere (Rose Valley). The ground is tuff-rose paper carrying sienna contour lines, the text is umber print ink, and the Sunday run is the one thing drawn on top in ultramarine. Because the route is the run, ultramarine is also the only colour that means "act". Photos are not decorations floating on the page; they are map insets, held in hairline neatline frames with graticule ticks and collar labels outside the frame.

Density is that of a well-made sheet: generous margins, a strict 12-column field, hairline rules in ink doing all of the structural work. Sections alternate between three printed grounds (full contour sheet, quiet contour sheet, plain or deep sheet) and a dark umber "night sheet" band used where the page asks for commitment. Nothing is rounded, nothing floats, nothing glows.

The world refuses the sports-club hero (black ground, action photo, red button) and the tourist brochure (balloons, sunsets). Imagery is only the club's own photographs; the contour artwork is generated deterministically by `scripts/generate-contours.mjs` (seed 1931) into `public/images/topo/{sheet,night,quiet}.svg`. No generated rasters ship.

**Key Characteristics:**
- Tuff-rose paper ground with generated contour lines (minor 0.8px, every fifth an index contour at 1.6px).
- Umber ink for all type and all rules; ultramarine reserved for the route and for action.
- Archivo variable: wide heavy caps for display, regular for reading, italic for place names.
- Square corners everywhere; hairline 1px ink borders instead of surfaces or shadows.
- Neatline insets and legend rows instead of cards.
- One authored motion moment: the hero route draws itself, then the meeting pin drops.

## Colors

A warm, low-chroma earth palette of paper and ink, broken by a single saturated cool: the route.

### Primary
- **Route Ultramarine** (`route`): the route line on every map, the meeting pin, the primary button, inline action links, the active-nav underline, focus outlines, caret and text selection. Hover and pressed actions deepen to **Deep Route** (`route-deep`). On night bands the route and its button lift to **Night Route** (`route-light`) so the line keeps contrast on dark umber.

### Neutral
- **Tuff-Rose Sheet** (`sheet`): the page ground, field backgrounds, and the paper chip behind map labels set over photos.
- **Deep Sheet** (`sheet-deep`): the footer collar, photo-tile mats, and (at 40% over sheet) quiet reading sections; also field hover tint.
- **Umber Ink** (`ink`): headings, strong text, every border and rule, the selected state of segmented choices.
- **Soft Umber** (`ink-soft`): body copy, leads, collar labels, hints, disabled button ground.
- **Sienna Contour** (`contour`): contour ink. Lives in the generated contour SVGs (as its hex print equivalents), the tea fill in the legend symbol, and the scrollbar thumb. Never used for text or controls.
- **Night Sheet** (`night`): the dark umber band ground and the photo viewer.
- **Night Ink** (`night-ink`): text on night bands; hover fill of night controls.
- **Night Soft** (`night-soft`): secondary text, rules (at 50%), and neatline frames on night bands.

### Tertiary
- **Survey Red** (`alert`): validation errors and the error notice only. Never decorative, never an action.

### Named Rules
**The One Route Rule.** Ultramarine is the route, and the route is the only action colour. If something is tappable and primary, it is ultramarine; if something is ultramarine, it is either the drawn route, the meeting pin, or an action. No second accent exists.

**The Ink Does The Structure Rule.** Every border, rule, divider and frame is umber ink (or night-soft on night bands), at full strength for structure and at 25-30% for internal dividers. Colour never separates regions; rules and grounds do.

## Typography

**Display Font:** Archivo variable (wdth axis, normal and italic), with ui-sans-serif, system-ui fallback
**Body Font:** Archivo variable, same family
**Label Font:** Archivo variable at 112% width

**Character:** One grotesque family stretched along its width axis to play every role on the sheet: extended heavy caps for the title block, regular width for reading, and the italic reserved for place names, as cartographers set them.

### Hierarchy
- **Display** (850, wdth 125%, uppercase, line-height 0.92, -0.02em): page and section titles. Hero runs `clamp(2.75rem, 5vw, 5.5rem)`, inner page heads `clamp(2.25rem, 6.4vw, 6rem)`, section titles `clamp(2.25rem, 4.4vw, 4rem)`.
- **Headline** (800, 1.5rem, wdth 120%, uppercase): item titles inside ruled lists (principles, programme rows).
- **Title** (800, 1rem-1.25rem, wdth 120%, uppercase, 0.02em): legend terms and small section heads such as Vizyonumuz / Misyonumuz.
- **Body** (400, 1.125rem, line-height 1.625, ink-soft): leads and reading copy, capped at 65ch; 1rem and 0.875rem for secondary text. Pull lines step up to 700-800 at wdth 115%, ink colour.
- **Label** (600, 0.6875rem, 0.08em, wdth 112%, uppercase, tabular figures): sheet-collar lettering: coordinates, scale, sheet name, photo captions, form labels.
- **Action** (700, 0.875rem, 0.06em, wdth 115%, uppercase): button and nav text.

### Named Rules
**The Width Axis Rule.** Hierarchy is carried by width as much as weight: 125% for display, 112-120% for labels and titles, 100% for reading. Under 640px the display width drops from 125% to 100% so long Turkish words (PROGRAMLARIMIZ) fit a phone; long display words additionally carry soft hyphens (`Program­larımız`, `Etkinlikleri­mizden`).

**The Dotted İ Rule.** The document is `lang="tr"`, so uppercased English brand strings (CAPPADOCIA, the copyright and credit lines, the Instagram handle when uppercased) are wrapped in `lang="en"` to keep a dotless capital I. Turkish words stay in Turkish casing.

**The Place Name Rule.** Place names in collars (Güllüdere Vadisi, Avanos) are set italic at 100% width, sentence case, normal tracking. Italic is not used for emphasis anywhere else.

## Layout

A 12-column grid inside a 90rem container, with gutters of 16px / 24px / 40px at base / sm / lg. Home sections pad 80px vertically, 112px from md; inner-page sections pad 64px, 96px from md. Columns are deliberately asymmetric: text in 5-6 columns against an inset in 5-7, often offset (`col-start-7`, `col-start-8`) with a staggered top so insets do not align to their neighbours.

Every page opens on a sheet with a **collar line**: a full-width ink rule under the title block carrying label-style lettering left (sheet name, "Pafta · ...") and right (region plus north arrow), and on the home hero a scale bar.

Mobile is first-class: the hero inset leads, slogan and CTA sit directly under it, and the header always carries the "Katıl" action. Breakpoints are Tailwind's defaults (640 / 768 / 1024 / 1280px); the 12-column layouts engage at lg.

## Elevation & Depth

The system is flat. Depth is conveyed the way a printed sheet conveys it: by ground changes (contour sheet, quiet sheet, deep sheet, night band), hairline frames, and the contour artwork behind content. There is no shadow vocabulary; the only lift in the build is a single soft shadow under the hero's desktop meeting-pin label, a one-off rather than a token.

### Named Rules
**The Printed Sheet Rule.** Nothing floats. Surfaces are separated by ink rules and ground changes, never by shadow, blur or glow.

## Shapes

Square corners on everything (`--radius` and every radius token is 0): buttons, fields, frames, segmented choices, notices, the photo viewer controls. Borders are 1px umber hairlines; the neatline is a 1px frame with a 6px mat, graticule ticks 8px long at quarter points on the horizontal edges and third points on the vertical edges. Curves belong only to drawn things: the route (4px stroke, round caps and joins, Catmull-Rom smoothed), contour lines, and the legend symbols.

## Components

### Buttons
Confident, flat ultramarine slabs that read as the route arriving at an action.
- **Shape:** square (0 radius), label left and arrow right, `justify-between`.
- **Primary:** route ground, sheet text, action type, 56px tall with 24px side padding; compact variant 44px with 16px padding and 0.75rem text (header "Katıl").
- **Hover / Focus:** ground deepens to route-deep and the label-to-arrow gap widens (24px to 32px) over 300ms on the expo ease-out; pressed nudges down 1px. Focus is a 2px route outline at 3px offset (route-light on night).
- **Night:** route-light ground with night text; hover inverts to night-ink.
- **Disabled (form submit):** ink-soft ground, not-allowed cursor.
- **Text action:** route-coloured uppercase action type with an underline at 40% that firms on hover, and an arrow that slides 4px right.

### Neatline Inset (signature)
The replacement for cards and image frames. A figure with a 1px ink border, 6px inner mat, graticule ticks outside each edge, and optional collar labels above and below in label type (ink-soft). Top-left is often a place name in italic. A night tone swaps ink for night-soft.

### Legend Rows (signature)
The replacement for feature cards. A definition list ruled top and bottom in ink; each row is drawn symbol (48-56px), term in title type, and description in ink-soft. Symbols come from the sheet's own cartographic grammar: map pin, solid route, dashed footpath, tulip tea glass, summit triangle, north arrow. On night bands the same ruled-list pattern appears with night-soft rules and symbols.

### Inputs / Fields
- **Style:** 56px tall, 1px ink border, sheet ground, 16px side padding, square; labels above in label type at full ink.
- **Focus:** border turns route plus a 2px route ring at 30%.
- **Hover:** ground tints with sheet-deep at 40%.
- **Error:** border and hint text switch to alert, hint goes semibold.
- **Segmented choice:** two 56px cells inside one ink frame, divided by an ink rule; selected cell fills ink with sheet text.
- **Checkbox:** native control with route accent.
- **Notices:** square, 1px border, 20px padding, icon left. Success is route-filled, warning sheet-deep with ink, error sheet with alert border and text.

### Navigation
- **Header:** sticky, 64px, sheet ground, ink rule beneath; lockup (the club logo illustration from public/images/brand/logo-mark.png, extracted from image/LOGO.pdf with the white ground keyed to alpha, beside CAPPADOCIA at wdth 125% and "Run Club" in label type; the logo's own white CAPPADOCIA lettering cannot survive on the sheet, so the name is always set in Archivo) left, links centre, compact route button right.
- **Links:** 0.875rem semibold uppercase at wdth 110%, ink-soft; hover to ink; active page in ink with a 2px route underline offset 0.5em.
- **Mobile:** 44px square ink-framed menu toggle; panel drops in (fadeIn, 6px, 300ms expo) as ruled 56px rows of large wide caps with a trailing arrow; current page in route.
- **Footer:** the sheet collar: deep sheet ground, large logo lockup and north arrow, "Pafta dizini" index, contact links that turn route on hover, and a printer's line in label type.

### Photo Viewer
Tiles are neatline-style buttons (ink border, sheet-deep mat, 6px) whose photo scales to 1.03 on hover over 700ms; a square sheet chip with an expand icon appears on hover or focus. Full view is a native dialog on night at 95% with label-type counter (01 / 08) and 44px square night-soft framed controls.

### Motion
One authored moment: on the home hero the route draws itself (stroke-dashoffset, 2.4s, expo ease-out, 0.35s delay), then the meeting pin drops in (0.6s, starting at 2.1s). The drawn state is the default and the hidden state lives only inside the keyframe, which only exists under `prefers-reduced-motion: no-preference`; with reduced motion the route is simply there. Supporting route segments are not animated. All other motion is short state feedback on the same expo ease-out curve.

## Do's and Don'ts

### Do:
- **Do** reserve route ultramarine for the drawn route, the meeting pin, and actions; deepen to route-deep on hover, lift to route-light on night bands.
- **Do** frame every photo as a neatline inset with collar labels, and use the club's own photographs only.
- **Do** present grouped facts as legend rows: ruled ink lines, a drawn cartographic symbol, a wide-caps term.
- **Do** keep every corner square (0) and every border a 1px ink hairline.
- **Do** set display type in Archivo at 850 / wdth 125% caps, dropping to wdth 100% under 640px, and add soft hyphens to long Turkish display words.
- **Do** wrap uppercased English brand strings in `lang="en"`.
- **Do** set place names in italic at 100% width.
- **Do** open each page with a sheet title block and a collar line.
- **Do** regenerate contour artwork only through `scripts/generate-contours.mjs` so it stays deterministic.

### Don't:
- **Don't** introduce a second accent colour or use ultramarine as decoration.
- **Don't** use cards, rounded corners, or drop shadows to separate content.
- **Don't** add motion beyond the single hero route draw-on and pin drop; never make the hidden state the default.
- **Don't** use balloon, sunset, or black-ground action-photo heroes.
- **Don't** use alert red for anything but errors.
- **Don't** ship generated or stock raster imagery.
