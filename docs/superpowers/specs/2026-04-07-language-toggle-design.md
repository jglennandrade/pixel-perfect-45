# EN/ES Language Toggle — Design Spec

## Overview

Add a client-side English/Spanish language toggle to the site, targeting Spanish-speaking potential clients in Georgia who need workers' compensation or personal injury legal services.

## Toggle UI

- **Location:** Header, right side, next to the hamburger menu icon
- **Style:** Pill toggle with two segments: `EN` and `ES`
  - Active language: gold background (#c8a44e), dark text (#0a1628)
  - Inactive language: transparent, muted white text (rgba(255,255,255,0.6))
  - Container: semi-transparent white background (rgba(255,255,255,0.12)), rounded-full, 3px padding
- **Behavior:** Clicking the inactive segment switches the language immediately (no page reload)
- **Responsive:** Visible on both desktop and mobile header states

## Architecture

### No external i18n library

A lightweight custom solution using React Context. The site is static marketing copy with no pluralization or interpolation needs.

### Files to create

1. **`src/contexts/LanguageContext.tsx`**
   - `LanguageProvider` component wrapping children
   - `useLanguage()` hook returning `{ language, setLanguage, t }` where:
     - `language`: `'en' | 'es'`
     - `setLanguage`: function to switch language (also writes to localStorage)
     - `t(key)`: function that returns the translated string for the current language
   - On mount, reads `localStorage.getItem('preferred-language')` — defaults to `'en'` if absent

2. **`src/translations/index.ts`**
   - Single flat object: `{ [key: string]: { en: string; es: string } }`
   - Keys are semantic: `hero.title`, `hero.subtitle`, `form.cta`, `footer.disclaimer`, etc.
   - Contains ALL user-facing text from every page and shared component

### Files to modify

1. **`src/App.tsx`** — Wrap app in `<LanguageProvider>`
2. **`src/components/Header.tsx`** — Add pill toggle UI, use `useLanguage()` for menu labels
3. **`src/components/Footer.tsx`** — Replace hardcoded text with `t()` calls
4. **`src/components/FloatingCTA.tsx`** — Replace CTA label with `t()` call
5. **`src/components/MobileStickyBar.tsx`** — Replace button labels with `t()` calls
6. **`src/components/DamagesBlock.tsx`** — Replace damage descriptions with `t()` calls
7. **`src/pages/Index.tsx`** — Replace all hardcoded copy with `t()` calls
8. **`src/pages/PersonalInjury.tsx`** — Replace all hardcoded copy with `t()` calls
9. **`src/pages/WorkersCompensation.tsx`** — Replace all hardcoded copy with `t()` calls
10. **`src/pages/BookACall.tsx`** — Replace hardcoded copy with `t()` calls
11. **`src/pages/ThankYou.tsx`** — Replace hardcoded copy with `t()` calls

## Translation Scope

### Translated (everything user-facing)

- Headlines, subheadlines, body paragraphs
- CTA button text
- Form labels, placeholders, validation messages
- Navigation menu items
- Footer content including legal disclaimer
- Testimonial context labels (not quotes themselves — those are real English quotes)
- Case result labels and descriptions
- FAQ questions and answers
- Damage type names and descriptions

### NOT translated (stays in English)

- Phone number: (404) 521-2667
- Attorney name: Darwin F. Johnson
- Company/employer logo images
- Image alt text (can be added later)
- External embed content (Calendly, YouTube)
- Actual client testimonial quotes (real English quotes stay authentic)

## Translation Quality

- Natural, professional Spanish written by Claude — not machine-translated
- Legal marketing tone: authoritative but approachable
- Adapted for the Georgia Hispanic community context (not literal translation)
- Key terms: "workers' compensation" → "compensación laboral", "personal injury" → "lesiones personales", "free case review" → "revisión de caso gratis"

## Persistence

- Language preference saved to `localStorage` key `'preferred-language'`
- On page load, the app reads this value and sets the language before first render
- Default: `'en'` if no saved preference

## Performance

- All translations bundled client-side (no async loading)
- Bundle size increase: ~20-30KB for the translations object (acceptable for a marketing site)
- No flash of untranslated content: language is read from localStorage synchronously before render

## Edge Cases

- If a translation key is missing, fall back to English text
- Browser back/forward navigation preserves language choice (no URL dependency)
- Forms in progress: switching language mid-form preserves entered data (only labels change)
