# Contact Form Section Specification

## Overview
- **Target file:** `src/components/ContactForm.tsx`
- **Screenshot:** `docs/design-references/section-3-form-footer.png`
- **Interaction model:** Interactive form with client-side validation

## DOM Structure
- Section container (id="contact-form")
  - Heading: "Başvuru Formu" or "Your Heading"
  - Form description paragraph
  - Form element
    - Text input: Name
    - Text input: Email
    - Text input: Phone
    - Text input: Instagram username
    - Radio group: "Aktif olarak koşuyor musunuz?" (Yes/No)
    - Checkbox group: "Nerede koşmak istersiniz?" (Caddebostan, Maçka)
    - Info paragraph with Instagram link
    - Consent checkbox with privacy policy link
    - WhatsApp channel link
    - Submit button: "Gönder"
  - Instagram follow link (icon)

## Computed Styles (exact values from getComputedStyle)

### Section Container
- padding: 60px 30px
- backgroundColor: rgb(255, 255, 255) or light background
- display: flex
- flexDirection: column
- alignItems: center

### Heading
- fontSize: 36px (estimated)
- fontWeight: 700
- fontFamily: Cambria, Georgia, "Times New Roman", Times, serif
- color: rgb(0, 0, 0)
- textAlign: center
- marginBottom: 20px

### Form Container
- maxWidth: 600px
- width: 100%
- display: flex
- flexDirection: column
- gap: 20px

### Text Inputs
- width: 100%
- padding: 12px 15px
- fontSize: 14px
- fontFamily: "Gill Sans", "Gill Sans MT", Calibri, sans-serif
- border: 1px solid rgb(200, 200, 200)
- borderRadius: 5px
- backgroundColor: rgb(255, 255, 255)
- color: rgb(58, 58, 58)

### Radio Buttons & Checkboxes
- Custom styling or native browser styling
- Labels: fontSize 14px, color rgb(81, 81, 81)
- Spacing between options: 10px
- font-family: "Gill Sans", "Gill Sans MT", Calibri, sans-serif

### Submit Button
- padding: 15px 40px
- fontSize: 16px
- fontWeight: 900
- fontFamily: "Gill Sans", "Gill Sans MT", Calibri, sans-serif
- backgroundColor: rgb(229, 32, 52) or rgb(0, 0, 0)
- color: rgb(255, 255, 255)
- border: none
- borderRadius: 10px
- cursor: pointer
- transition: 0.3s
- hover: opacity 0.8 or background darken

### Links
- color: rgb(229, 32, 52) or rgb(0, 123, 255)
- textDecoration: underline
- cursor: pointer
- fontSize: 14px

### Instagram Icon Link
- Display: block or inline-block
- Size: 40px x 40px
- color: rgb(0, 0, 0) or Instagram brand color
- hover: scale(1.1) or color change

## States & Behaviors

### Form Validation
- **Required fields:** Name, Email, Phone, Instagram, one radio selection, one checkbox, consent checkbox
- **Email validation:** Standard email format
- **Phone validation:** Turkish phone format (optional)
- **Implementation:** HTML5 validation + custom JavaScript

### Submit Behavior
- **Trigger:** Button click
- **Action:** Prevent default, validate fields, display success/error message
- **For demo:** Console log form data or show alert
- **Real implementation:** Would POST to WordPress Contact Form 7 endpoint

### Input Focus States
- **Trigger:** Input focus
- **State:** Border color changes to accent color or darker gray
- **Transition:** 0.2s ease

## Text Content (verbatim)
- Heading: "Başvuru Formu" or "Your Heading"
- Description: "Koşu kulübümüze herkes katılabilir! Aşağıdaki formu doldurarak sizinle iletişime geçmemizi sağlayabilirsiniz."
- Field labels:
  - "Adınız" (Your Name)
  - "E-posta adresiniz" (Your Email)
  - "Telefon Numaranız" (Your Phone Number)
  - "Instagram kullanıcı adı" (Instagram username)
  - "Aktif olarak koşuyor musunuz?" (Are you actively running?)
    - "Evet" (Yes)
    - "Hayır" (No)
  - "Nerede koşmak istersiniz?" (Where do you want to run?)
    - "Caddebostan"
    - "Maçka"
- Info text: "Başvurunuzda sosyal medya üzerinden size ulaşabilmemiz için @todayrunclub hesabını takip etmeniz gerekmektedir."
- Consent: "Kişisel verilerimin işlenmesine yönelik paylaşılan Aydınlatma Metni'ni okudum, kabul ediyorum."
- WhatsApp link: "Başvurunuz sonuçlanana kadar Whapsapp duyuru kanalından bizi takip etmek için tıklayınız."
- Submit button: "Gönder" (Send)

## Links
- Instagram: https://instagram.com/todayrunclub
- Privacy Policy: https://todayrunclub.com/aydinlatma-metni/
- WhatsApp Channel: https://whatsapp.com/channel/0029Vb36UvK60eBdOUSK7Y1w

## Assets
- Icons used: InstagramIcon from icons.tsx

## Responsive Behavior
- **Desktop (1440px):** Centered form, max-width 600px
- **Tablet (768px):** Maintains single column, full width with padding
- **Mobile (390px):** Full width with minimal padding, inputs 100% width
- **Breakpoint:** Padding adjustments at ~640px

## Implementation Notes
- Section should have id="contact-form" for anchor link navigation
- Use semantic HTML: `<form>`, `<input>`, `<label>`, `<button>`
- Implement form state management (React useState or form library)
- Add loading state for submit button
- Display success/error messages
- For demo: preventDefault and show console log or alert
- Real implementation would use WordPress REST API or contact form plugin
