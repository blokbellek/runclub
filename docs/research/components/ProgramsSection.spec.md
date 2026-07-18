# Programs Section Specification

## Overview
- **Target file:** `src/components/ProgramsSection.tsx`
- **Screenshot:** `docs/design-references/section-2-programs.png`
- **Interaction model:** Static with embedded iframes (Strava widget, Google Maps)

## DOM Structure
- Section container (id="program")
  - Heading: "Programlarımız"
  - Content wrapper (two columns or stacked)
    - Google Maps iframe (location)
    - Strava Club widget iframe

## Computed Styles (exact values from getComputedStyle)

### Section Container
- padding: 60px 30px
- backgroundColor: rgb(255, 255, 255) or light gray
- display: flex
- flexDirection: column
- alignItems: center
- gap: 40px

### Heading
- fontSize: 40px (estimated, adjust based on visual)
- fontWeight: 700
- fontFamily: Cambria, Georgia, "Times New Roman", Times, serif
- color: rgb(0, 0, 0)
- textAlign: center
- marginBottom: 40px

### Content Wrapper
- display: grid
- gridTemplateColumns: 1fr 1fr (desktop)
- gap: 30px
- maxWidth: 1200px
- width: 100%

### Iframe Container (both maps and Strava)
- width: 100%
- minHeight: 400px
- border: none
- borderRadius: 10px
- overflow: hidden

## States & Behaviors
N/A - Static section with embedded content

## Embedded Widgets

### Google Maps
- **URL:** Embedded Google Maps showing club location
- **Location:** Appears to be in Istanbul area (Caddebostan/Maçka region)
- **Features:** Interactive map with standard Google Maps controls
- **Implementation:** iframe embed or placeholder for demo

### Strava Club Widget
- **URL:** https://www.strava.com/clubs/todayrunclub
- **Data shown:**
  - Club name: "Cappadocia Run Club"
  - Current week: "13 Tem 2026 - 19 Tem 2026 haftası"
  - Statistics:
    - Koşular (Runs): 204
    - Mesafe (Distance): 1.418,6 km
    - Süre (Duration): 163sa 27dk
    - İrtifa (Elevation): 9.936 m
  - Link: "Kulübün tüm aktivitelerini görüntüleyin »"
- **Implementation:** iframe embed with Strava's widget code

## Text Content (verbatim)
- Heading: "Programlarımız"

## Responsive Behavior
- **Desktop (1440px):** Two-column grid layout, side-by-side widgets
- **Tablet (768px):** Single column, widgets stack vertically
- **Mobile (390px):** Single column, full width widgets, reduced padding
- **Breakpoint:** Layout switches at ~768px

## Implementation Notes
- Section should have id="program" for anchor link navigation
- For initial clone, embed actual iframes with real URLs
- Ensure iframes are responsive and maintain aspect ratio
- Consider loading="lazy" for performance
- Add fallback/placeholder if iframes fail to load
- Google Maps: May use embed API or placeholder image for demo
- Strava: Use official Strava club widget embed code
