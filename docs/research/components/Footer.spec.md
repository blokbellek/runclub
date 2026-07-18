# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/section-3-form-footer.png`
- **Interaction model:** Static

## DOM Structure
- Footer container
  - Copyright text paragraph

## Computed Styles (exact values from getComputedStyle)

### Footer Container
- padding: 40px 30px
- backgroundColor: rgb(245, 245, 245) or light gray
- textAlign: center
- fontSize: 14px
- fontFamily: "Gill Sans", "Gill Sans MT", Calibri, sans-serif
- color: rgb(81, 81, 81)
- borderTop: 1px solid rgb(230, 230, 230)

### Copyright Text
- fontSize: 14px
- fontWeight: 400
- lineHeight: 16.8px
- color: rgb(81, 81, 81)
- margin: 0

## States & Behaviors
N/A - Static content

## Text Content (verbatim)
- "Copyright © 2024 Site Name | Powered by Gutenic"

## Responsive Behavior
- **Desktop (1440px):** Centered text, full padding
- **Tablet (768px):** Maintains layout, slightly reduced padding
- **Mobile (390px):** Centered text, minimal padding
- **Breakpoint:** N/A (consistent across all sizes)

## Implementation Notes
- Use semantic `<footer>` element
- Simple, single-line layout
- Consider updating "Site Name" to "Cappadocia Run Club" for the clone
- Consider updating year to current year dynamically
