

## The Problem

Two issues: (1) No navigation — users can't access the other 4 pages without typing URLs. (2) The overall design feels generic and text-heavy — missing the cinematic, personal-brand-forward, editorial vibe of wearethewomen.com. Darwin needs to be the face of this brand.

## Design Direction: wearethewomen.com Inspiration

Key patterns from wearethewomen.com to adapt for Darwin's law brand:
- **Full-bleed cinematic hero** with Darwin's photo as the background (not tucked in a corner)
- **Warm, editorial typography** — larger serif headlines, more breathing room, elegant spacing
- **"As Featured In" logo bar** — scrolling trust badges (like CBS, Forbes, etc. but for legal: Google reviews, workers' comp badge)
- **Photo-rich testimonials** — not just text cards, but with context and visual weight
- **Section transitions** — subtle gradient overlaps, not hard dark/dark-alt cuts
- **Personal brand feel** — Darwin's quote, his story, his face prominently placed throughout
- **Elegant nav** with smooth mobile drawer (not just a hamburger dropdown)

## Plan

### 1. Upgrade Header with Navigation + Mobile Drawer
**File: `src/components/Header.tsx`**
- Desktop: Logo left, nav links center (Workers' Comp, Personal Injury, Book a Call), phone right
- Mobile: Logo left, hamburger right that opens a full-screen overlay/drawer with links + phone CTA
- Use React Router `Link` + `useLocation` for active states
- Active link gets a subtle underline or CTA color highlight
- Smooth framer-motion animation on mobile menu

### 2. Redesign Homepage Hero with Full-Bleed Photo
**File: `src/pages/Index.tsx`**
- Replace the plain dark background with Darwin's team photo (`darwin-office.webp` or `team-photo.jpg`) as a full-bleed hero background with a dark gradient overlay
- Center the headline with more editorial spacing
- Add an "AS FEATURED IN" scrolling badge bar below the hero (similar to wearethewomen.com)
- Increase whitespace between sections, add subtle gradient transitions instead of hard bg cuts

### 3. Elevate the "Why Darwin" Section
**File: `src/pages/Index.tsx`**
- Make Darwin's headshot much larger and more prominent (hero-card style, not a tiny sidebar image)
- Add a personal bio paragraph — make him the face, not just stats
- Style the quote block more like an editorial pull-quote with larger italic serif text

### 4. Improve Testimonials Section
**File: `src/pages/Index.tsx`**
- Larger cards with more visual weight
- Add star ratings more prominently
- Consider a horizontal scroll/carousel feel rather than tab switching

### 5. Polish All Sub-Pages with Consistent Branding
**Files: `WorkersCompensation.tsx`, `PersonalInjury.tsx`, `BookACall.tsx`, `ThankYou.tsx`**
- Add the same cinematic hero treatment (photo backgrounds with overlays) using Darwin's uploaded images
- Ensure consistent nav header across all pages (already shared component)
- Add "As Featured In" badge bars where appropriate
- Improve section spacing and visual hierarchy

### 6. Upgrade Footer
**File: `src/components/Footer.tsx`**
- Multi-column layout: logo + tagline, quick links, contact info, disclaimers
- More visual presence — not just a single line of text

### 7. Global Design Refinements
**File: `src/index.css` + `tailwind.config.ts`**
- Add a warm gold accent color option (like wearethewomen.com's gold) as a secondary highlight alongside burnt orange
- Increase base section padding for more breathing room
- Add subtle section divider styles (gradient lines or decorative elements)

### Technical Details
- All changes use existing dependencies (framer-motion, react-router-dom, tailwind)
- Images already uploaded to `src/assets/` will be used prominently
- Header nav uses `NavLink` from react-router-dom for active state detection
- Mobile menu uses Sheet component or custom framer-motion overlay
- No new packages needed

