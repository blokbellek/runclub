# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Screenshot:** `docs/design-references/section-1-hero.png`
- **Interaction model:** Static with mobile hamburger menu

## DOM Structure
- Header container
  - Logo figure/link wrapper
    - Logo image (300x300px)
  - Navigation
    - Hamburger menu button (mobile)

## Computed Styles (exact values from getComputedStyle)

### Header Container
- fontSize: 20px
- fontWeight: 400
- fontFamily: "Gill Sans", "Gill Sans MT", Calibri, sans-serif
- lineHeight: 24px
- letterSpacing: 0.1px
- color: rgb(81, 81, 81)
- width: 100% (responsive)
- display: block
- position: static
- padding: 20px (estimated from visual)

### Logo Container
- Display logo image and text "CAPPADOCIA RUN CLUB" stacked vertically
- Logo image: 300x300px (scaled down for display)
- Display size: approximately 80-100px square
- Center aligned or left aligned depending on viewport

### Logo Text
- Font: "Gill Sans", "Gill Sans MT", Calibri, sans-serif
- Text: "TODAY" on first line, "RUN CLUB" on second line
- Center aligned with logo
- Font weight: 400
- Letter spacing: 0.1px
- Color: rgb(0, 0, 0) or rgb(81, 81, 81)

### Hamburger Menu Button
- Display: visible on mobile/tablet
- Position: absolute right
- cursor: pointer
- Size: ~40x40px
- Uses HamburgerIcon from icons.tsx

## States & Behaviors

### Desktop State
- Logo and text displayed
- Hamburger menu hidden (or minimal presence)
- Simple horizontal layout

### Mobile State
- Logo displayed (possibly smaller)
- Hamburger menu visible on right
- Triggers mobile navigation menu (not implemented in initial clone)

### Hover states
- Logo link: cursor pointer, possible subtle transition
- Hamburger button: cursor pointer, possible color change

## Assets
- Logo image: `public/images/logo.png`
- Icons used: HamburgerIcon from icons.tsx

## Text Content (verbatim)
- Logo text: "TODAY" / "RUN CLUB" (may be part of image or separate text)

## Responsive Behavior
- **Desktop (1440px):** Full logo display, horizontal layout
- **Tablet (768px):** Maintains logo, hamburger menu becomes prominent
- **Mobile (390px):** Compact logo, hamburger menu right-aligned
- **Breakpoint:** Navigation changes at ~768px

## Implementation Notes
- Logo links to home page (/)
- Header should be semantic `<header>` element
- Consider sticky/fixed positioning for better UX (optional enhancement)
- Hamburger menu functionality can be placeholder for initial clone
