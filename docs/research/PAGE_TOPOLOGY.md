# Page Topology - Cappadocia Run Club

## Overall Structure
Single-page layout with smooth scroll navigation, approximately 2494px height.

## Section Order (Top to Bottom)

### 1. Header (Fixed/Sticky)
- **Type:** Navigation header
- **Position:** Top of page (appears to be standard flow, not fixed)
- **Interaction Model:** Static with hamburger menu
- **Key Elements:**
  - Logo (300x300px PNG): https://todayrunclub.com/wp-content/uploads/2025/01/logo-1-300x300.png
  - Text: "CAPPADOCIA RUN CLUB"
  - Hamburger menu button (mobile/responsive)

### 2. Hero Section (id: main landing area)
- **Type:** Hero banner with CTA buttons
- **Interaction Model:** Static
- **Background:** Image overlay - https://todayrunclub.com/wp-content/uploads/2025/01/110701222.webp
- **Key Elements:**
  - H6 Heading: "Welcome to Cappadocia Run Club"
  - Body text (Turkish description)
  - Two CTA buttons:
    - "Kayıt Ol" (Register) → links to #contact-form
    - "Programlarımız" (Our Programs) → links to #program

### 3. Programs Section (id: program)
- **Type:** Content section with embedded Strava widget
- **Interaction Model:** Static with embedded iframe
- **Key Elements:**
  - H2 Heading: "Programlarımız" (Our Programs)
  - Strava club widget (iframe) showing:
    - Weekly stats: 204 runs, 1,418.6 km, 163h 27m, 9,936m elevation
  - Google Maps iframe showing club location

### 4. Contact Form Section (id: contact-form)
- **Type:** Registration form
- **Interaction Model:** Interactive form with validation
- **Key Elements:**
  - H2: "Başvuru Formu" (Application Form) / "Your Heading"
  - Form fields:
    - Name (textbox)
    - Email (textbox)
    - Phone number (textbox)
    - Instagram username (textbox)
    - Radio buttons: "Aktif olarak koşuyor musunuz?" (Are you actively running?) - Yes/No
    - Checkboxes: "Nerede koşmak istersiniz?" (Where do you want to run?) - Caddebostan, Maçka
    - Consent checkbox with link to "Aydınlatma Metni" (Privacy Policy)
    - Link to WhatsApp announcement channel
  - Submit button: "Gönder" (Send)
  - Instagram follow link

### 5. Footer
- **Type:** Copyright footer
- **Interaction Model:** Static
- **Content:** "Copyright © 2024 Site Name | Powered by Gutenic"

## Dependencies
- None between sections (all independent)
- Internal anchor links from Hero buttons to Form section (#contact-form) and Programs section (#program)

## Z-Index Layers
- All sections in standard document flow
- No fixed/sticky overlays detected (header may be responsive-only sticky)

## Page Layout
- Standard single-column layout
- Full-width sections
- Centered content containers (max-width constraints)
