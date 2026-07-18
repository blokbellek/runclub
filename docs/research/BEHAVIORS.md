# Interaction Behaviors - Cappadocia Run Club

## Scroll Behaviors
### No scroll-driven animations detected
- Page uses standard browser scrolling (no Lenis or Locomotive Scroll)
- No parallax effects observed
- No scroll-snap containers
- No elements animate in on scroll

### Header Behavior
- Header appears to be static (no shrinking/color change on scroll detected in viewport test)
- Hamburger menu present for mobile/responsive navigation

## Click Behaviors

### CTA Buttons (Hero Section)
- **"Kayıt Ol" (Register) button**
  - Action: Smooth scroll to #contact-form
  - Visual: Border-based design, black border (0.8px), 10px border-radius
  - Hover state: 0.4s transition (likely background/color change)
  
- **"Programlarımız" (Our Programs) button**
  - Action: Smooth scroll to #program
  - Visual: Similar design to Register button, dark gray border (rgb(49,49,49))
  - Hover state: 0.4s transition

### Form Interactions
- **Radio buttons**: Single selection for "Are you actively running?"
- **Checkboxes**: Multiple selection for running locations (Caddebostan, Maçka)
- **Submit button**: Form submission (likely AJAX-based, uses WordPress Contact Form)
- **Links**:
  - Instagram profile link: @todayrunclub
  - Privacy policy link: Opens Aydınlatma Metni page
  - WhatsApp channel link: External link to WhatsApp channel

### Hamburger Menu
- Click to open mobile navigation
- Not tested in detail (would need mobile viewport inspection)

## Hover Behaviors

### Buttons
- **CTA buttons**: 
  - Transition: 0.4s
  - Likely changes: background color and/or text color
  - Border remains consistent

### Links
- Standard link hover states (cursor: pointer)
- Likely underline or color change

### Form Elements
- Standard input focus states
- Native browser form element styling observed

## Responsive Behaviors

### Breakpoints (estimated from viewport tests)
- **Mobile (<768px)**: 
  - Single column layout
  - Buttons stack vertically
  - Hero text scales down
  - Form remains single column
  
- **Tablet (768px-1024px)**:
  - Maintains similar layout to mobile
  - Some spacing adjustments
  
- **Desktop (>1024px)**:
  - Hero buttons side-by-side
  - Full-width sections with centered content
  - Optimal viewing at ~1440px

### Navigation
- Hamburger menu visible on smaller screens
- Full logo and text visible at all sizes

## Animations & Transitions

### Detected Transitions
1. **Button transitions**: 0.4s on hover/interaction
2. **Smooth scroll**: Native browser smooth scroll to anchor links
3. No complex animations or keyframe animations detected

### No Complex Behaviors Found
- No modals or overlays
- No carousels or sliders
- No dropdown menus (hamburger menu only)
- No loading animations
- No image galleries or lightboxes
- No video players (only embedded iframes)

## Third-Party Integrations

### Embedded Widgets
1. **Strava Club Widget**: 
   - Auto-updates with club statistics
   - Shows current week data
   - Read-only display (no interactions)

2. **Google Maps**:
   - Embedded iframe
   - Standard Google Maps interactions (zoom, pan)
   - Shows club meeting location

### Form Handling
- Uses WordPress Contact Form 7 (or similar)
- Form validation likely handled by WordPress plugin
- AJAX submission (no page reload expected)
