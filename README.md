# 🎬 Jinyu Zhou — Cinematic Portfolio

A premium, dual-experience portfolio featuring elegant desktop animations and mobile "Story Mode" chapter scrolling.

---

## 🚀 Quick Start

```bash
pnpm install
pnpm dev
```

Visit **http://localhost:3000**

---

## 📐 Tech Stack

- **Framework**: Next.js 15.5.6 (App Router, JavaScript)
- **Styling**: TailwindCSS v4 with `@tailwindcss/postcss`
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Package Manager**: pnpm

---

## 🎨 Design System

### Colors

- **Background**: Pure Black (#000)
- **Accent**: Gold (#D4AF37)
- **Fonts**: Playfair Display (headings), Inter (body)

### Theme

- Cinematic black and gold
- Minimal, elegant, premium
- Grain/noise overlay for texture
- Smooth scroll behavior

---

## 📱 Dual Experience

### Desktop

- **Luxurious Film Opening**: Soft parallax, extended animations
- **Sticky Navbar**: Blur backdrop with gold hover glow
- **Premium Hover States**: Subtle scale, shadow, and color transitions
- **Scroll Ease**: Smooth, cinematic navigation

### Mobile — Story Mode

- **Chapter Scrolling**: Full-screen sections with snap behavior
- **Slower Timing**: More emotional, poetic animation pacing
- **Individual Fades**: Hero elements appear sequentially
- **Floating Menu**: Full-screen navigation overlay
- **48px Touch Targets**: Accessibility-first design

---

## 📂 Project Structure

```
/app
  layout.js           # Root layout with fonts
  page.js            # Main page with all sections
  globals.css        # Global styles and theme

  /components
    Navbar.js        # Desktop sticky navbar
    MobileMenu.js    # Mobile floating menu + overlay
    Hero.js          # Hero with parallax & individual fades
    About.js         # About section
    Experience.js    # Work experience timeline
    Projects.js      # Project showcase
    Volunteer.js     # Volunteer work
    Awards.js        # Awards & recognition
    Skills.js        # Skills & expertise
    Contact.js       # Contact information
    Footer.js        # Minimal footer
    ScrollToTop.js   # Scroll to top button

/public/images       # Image assets (empty)

postcss.config.js    # PostCSS configuration
CINEMATIC_ANIMATIONS.md  # Animation documentation
MOBILE_LAYOUT.md     # Mobile layout details
```

---

## ✨ Key Features

### Animations

- ✅ Film-like opening sequence
- ✅ Soft parallax background (desktop)
- ✅ Staggered fade-up for sections
- ✅ Gold divider reveal animations
- ✅ Smooth hover transitions (400-600ms)
- ✅ Mobile: slower, emotional timing

### Navigation

- ✅ Desktop: Sticky navbar with blur
- ✅ Mobile: Floating menu button + full-screen overlay
- ✅ Smooth scroll to sections
- ✅ Scroll-to-top button

### Accessibility

- ✅ 48px minimum touch targets
- ✅ ARIA labels for interactive elements
- ✅ Respects `prefers-reduced-motion`
- ✅ Semantic HTML structure

### Mobile Optimizations

- ✅ 100vh snap-scroll sections
- ✅ Centered, minimal typography
- ✅ 2-column grid for Awards/Skills
- ✅ Proper spacing and readability
- ✅ Full-width buttons

---

## 📄 Real Content

All sections contain **real portfolio data**:

- **Hero**: Name, subtitle, tagline
- **About**: GPA 3.89/4.0, scholarship, philosophy
- **Experience**: 3 positions (Tiangong, CCTV, China Railway)
- **Projects**: VR Exhibition, Research Paper
- **Volunteer**: Sri Lanka & Thailand teaching
- **Awards**: 6 awards (2023-2025)
- **Skills**: Media editing, VR/AR, languages, hobbies
- **Contact**: Email, location, thank you message

---

## 🎬 Animation Details

See `CINEMATIC_ANIMATIONS.md` for comprehensive documentation including:

- Desktop animation rules
- Mobile chapter scroll motion
- Timing specifications
- Hover effect details
- Accessibility features

---

## 🌐 Deployment

Ready for **Vercel** deployment:

```bash
# Build for production
pnpm build

# Preview production build
pnpm start
```

---

## 📝 Notes

- **Desktop**: Elegant, cinematic experience with parallax and premium hover states
- **Mobile**: Chapter-based story mode with snap scrolling and emotional timing
- **Responsive**: Completely different layouts optimized for each experience
- **Performance**: Optimized animations with proper easing and durations
- **Accessible**: 48px touch targets, ARIA labels, motion preferences

---

**Status**: ✅ Production Ready  
**Version**: 1.0  
**Last Updated**: October 2025

---

Crafted with Next.js, TailwindCSS & Framer Motion 🎬✨
