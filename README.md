# Drishti Super Speciality Eye Hospital — Single Page Website

An award-winning, production-ready, high-conversion single-page website for an eye hospital built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features & Architecture

### 1. 2026 Modern Aesthetic & Design Style
- **Color Palette**: Deep medical blue (`#0B3D91`), teal/aqua accent (`#19C3B1`), soft white/ice-blue backgrounds (`#F5F9FF`), warm amber accent (`#FFB020`), and WhatsApp green (`#25D366`).
- **Typography**: Google Fonts — *Plus Jakarta Sans* for bold headings, *Inter* for legible body text.
- **Glossy CTA Buttons**: Inner gloss highlights, soft glow shadow, and interactive sheen sweep on hover with pulsing primary CTAs.
- **Custom Eye Logo**: Pixel-perfect SVG matching the official winged eye identity (`HospitalLogo.tsx`).
- **Interactive Medical Video/GIF Simulation**: Active 4K slit-lamp HUD overlay, biometric cornea targeting reticle, laser scanning line sweep, and live OCT telemetry.
- **Gentle Floating Physics**: Smooth floating badge physics (`animate-float-a`, `animate-float-b`, `animate-float-c`) for trust metrics.

---

## 🗂️ Project File Structure

```
eye-hospital/
├── index.html                   # SEO Meta, Open Graph, LocalBusiness / MedicalClinic JSON-LD
├── tailwind.config.js           # Brand colors, typography, border radii, shadows & keyframes
├── package.json                 # React, Lucide-react, Canvas-confetti, Tailwind CSS
├── public/                      # Static assets & favicon
└── src/
    ├── data/
    │   └── hospitalData.ts      # SINGLE SOURCE OF TRUTH: All hospital info, doctors, treatments, reviews, FAQs
    ├── components/
    │   ├── HospitalLogo.tsx     # Vector SVG of the winged eye logo
    │   ├── Navbar.tsx           # Sticky navbar with glass blur & mobile menu
    │   ├── Hero.tsx             # Hero with 3 glossy CTAs & live video-like slit-lamp examination
    │   ├── Treatments.tsx       # 11 treatments grid with category pills
    │   ├── TreatmentDetailModal.tsx # Full clinical info popup with recovery & duration
    │   ├── WhyChooseUs.tsx      # Animated stat counters (years, surgeries, doctors, insurance)
    │   ├── Doctors.tsx          # 6 doctor profiles with in-clinic action toggles & direct booking
    │   ├── TechnologyGallery.tsx# Modern equipment masonry gallery with interactive Lightbox
    │   ├── AppointmentForm.tsx  # Core appointment form with inline validation & confetti burst
    │   ├── AppointmentSection.tsx # Section 7: Dedicated outpatient appointment checkup
    │   ├── AppointmentModal.tsx # Modal opened from all "Book Appointment" buttons
    │   ├── CallbackForm.tsx     # 8-language pill selector & preferred callback times
    │   ├── CallbackSection.tsx  # Section 8: Dedicated multilingual call back section
    │   ├── CallbackModal.tsx    # Modal opened from floating tab and call CTAs
    │   ├── ReviewWall.tsx       # Section 9: 3-column slow vertical auto-scroll marquee wall
    │   ├── FAQ.tsx              # Section 10: Smooth accordion with category filters
    │   ├── CTABanner.tsx        # Section 11: Gradient eye iris banner with 3 glossy CTAs
    │   ├── Footer.tsx           # Section 12: Rich footer with Google Map embed & newsletter
    │   └── FloatingElements.tsx # WhatsApp pulse, mobile sticky bar, scroll-to-top & progress bar
    ├── App.tsx                  # Root page assembling all 12 sections in order
    ├── main.tsx                 # React DOM mount point
    └── index.css                # Tailwind directives, glossy button styles, sheen sweeps
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested on Node v24)
- npm 9+

### Installation
```bash
# 1. Clone or navigate to the project directory
cd eye-hospital

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

### Production Build
```bash
npm run build
npm run preview
```

---

## ⚙️ How to Customize & Connect Backend

### 1. Hospital Details, Phone, WhatsApp & Address
Open [`src/data/hospitalData.ts`](file:///c:/Users/gskr0/.antigravity/eye-hospital/src/data/hospitalData.ts):
```ts
export const HOSPITAL_CONFIG = {
  name: "Drishti Super Speciality Eye Hospital",
  tagline: "Clear Vision. Trusted Care.",
  phone: "+91 98765 43210",
  whatsappNumber: "919876543210",
  email: "care@drishtieyehospital.com",
  emergencyPhone: "+91 98765 00108",
  address: "Your Hospital Address...",
  timings: "Mon-Sat: 9:00 AM – 8:00 PM | Sun: 10:00 AM – 2:00 PM",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?...",
  googleReviewUrl: "https://g.page/r/your-hospital/review"
};
```

### 2. Connecting Form Submissions (Backend / CRM / Formspree)
- **Appointment Booking Form**:
  Open [`src/components/AppointmentForm.tsx`](file:///c:/Users/gskr0/.antigravity/eye-hospital/src/components/AppointmentForm.tsx#L90-L115).
  Replace the simulated promise with your REST endpoint, Webhook, or Formspree:
  ```ts
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(formData)
  });
  ```

- **Request a Call Back Form**:
  Open [`src/components/CallbackForm.tsx`](file:///c:/Users/gskr0/.antigravity/eye-hospital/src/components/CallbackForm.tsx#L55-L75).
  Connect to your CRM or tele-calling autodialer (Exotel / Twilio). The selected language (`en`, `hi`, `te`, `ta`, `ur`, `kn`, `ml`, `mr`) is passed automatically.

### 3. Swapping Doctor & Equipment Photos
All image URLs are centralized in [`src/data/hospitalData.ts`](file:///c:/Users/gskr0/.antigravity/eye-hospital/src/data/hospitalData.ts):
- `DOCTORS[i].photoUrl` (doctor portrait)
- `DOCTORS[i].actionPhotoUrl` (doctor in-clinic examining patient)
- `TECHNOLOGY_GALLERY[i].imageUrl` (surgical suites & machines)
- Place your local images in `/public/images/` and reference `/images/doctor1.webp`.
