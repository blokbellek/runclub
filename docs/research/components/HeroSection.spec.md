# Hero Section Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/section-1-hero.png`
- **Interaction model:** Static with CTA buttons (smooth scroll to anchors)

## DOM Structure
- Section container with background image overlay
  - Content wrapper (centered, max-width constrained)
    - H1 or H6 heading: "Welcome to Cappadocia Run Club"
    - Paragraph: Description text (Turkish)
    - Button group wrapper
      - Button 1: "Kayıt Ol" (Register)
      - Button 2: "Programlarımız" (Our Programs)

## Computed Styles (exact values from getComputedStyle)

### Section Container
- background: url("/images/hero-background.webp") with overlay
- backgroundPosition: 50% 50%
- backgroundSize: cover
- minHeight: 600px (estimated from visual, adjust for viewport)
- display: flex
- alignItems: center
- justifyContent: center
- padding: 60px 30px
- position: relative

### Background Overlay
- position: absolute
- top: 0
- left: 0
- right: 0
- bottom: 0
- backgroundColor: rgba(255, 255, 255, 0.8) (semi-transparent white overlay)
- zIndex: 1

### Content Wrapper
- position: relative
- zIndex: 2
- maxWidth: 600px
- textAlign: center

### Heading (H1/H6)
- fontSize: 50px
- fontWeight: 700
- fontFamily: Cambria, Georgia, "Times New Roman", Times, serif
- lineHeight: 65px
- letterSpacing: 0.1px
- color: rgb(0, 0, 0)
- marginBottom: 20px
- width: auto (max ~486px)

### Description Paragraph
- fontSize: 14px
- fontWeight: 400
- fontFamily: "Gill Sans", "Gill Sans MT", Calibri, sans-serif
- lineHeight: 16.8px
- letterSpacing: 0.1px
- color: rgb(81, 81, 81)
- marginBottom: 30px
- width: auto (max ~425px)

### Button Group
- display: flex
- gap: 15px
- justifyContent: center
- flexWrap: wrap

### Button Shared Styles
- fontSize: 16px
- fontWeight: 900
- fontFamily: "Gill Sans", "Gill Sans MT", Calibri, sans-serif
- lineHeight: 16px
- letterSpacing: 0.1px
- padding: 15px 30px
- display: inline-block
- borderRadius: 10px
- border: 0.8px solid
- transition: 0.4s
- cursor: pointer
- textDecoration: none

### Button 1 - "Kayıt Ol"
- color: rgb(0, 0, 0)
- borderColor: rgb(0, 0, 0)
- backgroundColor: transparent
- hover: backgroundColor: rgb(0, 0, 0), color: rgb(255, 255, 255)

### Button 2 - "Programlarımız"
- color: rgb(49, 49, 49)
- borderColor: rgb(49, 49, 49)
- backgroundColor: transparent
- hover: backgroundColor: rgb(49, 49, 49), color: rgb(255, 255, 255)

## States & Behaviors

### Button Hover States
- **Trigger:** Mouse hover
- **State A (default):** Transparent background, colored text and border
- **State B (hover):** Filled background (same as border color), white text
- **Transition:** 0.4s ease on all properties
- **Implementation approach:** CSS transition + :hover pseudo-class

## Assets
- Background image: `public/images/hero-background.webp`

## Text Content (verbatim)
- Heading: "Welcome to Cappadocia Run Club"
- Description: "İlk kez koşmaya başlayacaklardan yeni başlayanlara ve deneyimli koşuculara kadar herkese uygun bir kulüp içindesiniz. Profesyonel koşucularımız eşliğinde, sağlıklı ve programlı bir koşu hayatına hoş geldiniz."
- Button 1: "Kayıt Ol"
- Button 2: "Programlarımız"

## Responsive Behavior
- **Desktop (1440px):** Buttons side-by-side, full font sizes
- **Tablet (768px):** Buttons may wrap, maintain spacing
- **Mobile (390px):** Buttons stack vertically, full width, reduced heading fontSize to ~36px
- **Breakpoint:** Layout switches at ~640px

## Implementation Notes
- Button 1 links to #contact-form (smooth scroll)
- Button 2 links to #program (smooth scroll)
- Use semantic HTML: `<section>`, `<h1>`, `<p>`, `<a>` styled as buttons
- Background image should use Next.js Image optimization if possible, or standard CSS background
- Ensure adequate contrast for accessibility
