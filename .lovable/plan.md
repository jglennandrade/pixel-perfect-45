

## The Problem

The content across all pages is stiff, corporate, and generic. It reads like every other law firm website. The KingKong.co approach — conversational, punchy, story-driven copy that reads like a letter to the reader — is exactly what's needed to differentiate Darwin's brand while keeping the cinematic visual framework already in place.

## What KingKong.co Does That We Need

- **Letter-style conversational copy** — talks TO the reader ("You're reading this because..."), not AT them
- **Short punchy paragraphs** — one sentence per line, lots of whitespace, builds momentum
- **Agitate hard, then solve** — paints the pain vividly before introducing the solution
- **Bold, irreverent CTAs** — not "Submit" or "Learn More", but personality-driven buttons
- **Massive proof stacking** — testimonials aren't just cards, they're result-headline stories with context
- **"Choose your adventure"** two-path section with clear, distinct options
- **Scrolling case study / brand logo bars** between sections for visual breaks and trust

## Plan

### 1. Rewrite Homepage Copy — KingKong Letter Style
**File: `src/pages/Index.tsx`**

**Hero** — keep the cinematic full-bleed photo, but rewrite the copy:
- Eyebrow stays
- Headline: keep "WE FIGHT. YOU RECOVER." (it works)
- Subhead becomes conversational: "You got hurt. Now you're drowning in medical bills, missed paychecks, and an insurance company that won't return your calls. Sound familiar?"

**Problem Section** — rewrite as a KingKong-style letter:
- Short one-line paragraphs, conversational tone
- "Look, here's the deal. The moment you got hurt, your employer's insurance company started building a case. Not for you. Against you."
- "They have lawyers. Teams of them. Their only job? Pay you as little as humanly possible."
- "Meanwhile, you're sitting at home wondering how you're going to pay rent."
- End with: "That's where Darwin comes in."

**Two Paths** — rewrite cards with more personality:
- "Injured on the Job" card: conversational body, CTA becomes "SEE IF YOU HAVE A CASE →"
- "Injured in an Accident" card: same treatment, CTA "GET YOUR FREE CASE REVIEW →"

**Why Darwin** — add a personal letter-style intro before the stats:
- "Most law firms treat you like a case number. Here, you get Darwin's personal cell phone number. He answers. Every time. No operators, no runaround."

**Testimonials** — rewrite as result-headline stories (KingKong style):
- Instead of just the quote, add a one-line result headline above each: "From denied claim to $180K settlement", "Fired after reporting injury — then we stepped in"

**Form Section CTA** — make it bolder:
- "FIND OUT WHAT YOU'RE OWED →" or "HIT THE BUTTON. IT'S FREE. →"
- Add micro-copy: "Takes 30 seconds. No obligation. No fee unless we win."

### 2. Rewrite Workers' Comp Page Copy
**File: `src/pages/WorkersCompensation.tsx`**

- **Hero subhead** — conversational: "Your boss says 'file a report.' Their insurance company says 'we'll handle it.' What they're really saying is: 'we hope you don't call a lawyer.'"
- **Qualification section** — rewrite as punchy one-liners, not a clinical checklist
- **Benefits grid** — add real dollar context: "Medical Bills? We've seen $300K+ in coverage for a single workplace injury."
- **Mistakes section** — conversational warnings: "Giving a recorded statement to the insurance adjuster. They're not trying to help you. They're trying to get you to say something they can use against you."
- **Form CTA** — "FIND OUT WHAT YOUR WORKPLACE INJURY IS WORTH →"

### 3. Rewrite Personal Injury Page Copy
**File: `src/pages/PersonalInjury.tsx`**

- **Hero subhead** — "The insurance adjuster who called you? They're not on your side. That 'quick settlement' they offered? It's probably 10% of what you're actually owed."
- **Insurance angle** — KingKong letter style: short paragraphs, build urgency
- **Case types** — add real-world context to each: "Car Accidents — Atlanta's I-285 is one of the most dangerous highways in the country. We've handled hundreds of cases from it."
- **Damages section** — make it tangible with dollar examples, not abstract categories
- **Form CTA** — "FIND OUT WHAT YOUR ACCIDENT CASE IS WORTH →"

### 4. Upgrade Testimonials Component Style
**File: `src/pages/Index.tsx`** (and reuse pattern on sub-pages)

- Add a bold result headline above each quote (like KingKong's case study cards)
- Format: "Result headline" → ★★★★★ → quote → attribution
- Examples:
  - "Denied by employer's insurance. Settled for $180,000."
  - "Fired after reporting injury. Won full benefits + back pay."
  - "Insurance offered $12K. Darwin got $95K."

### 5. Add Scrolling Proof/Trust Bar (KingKong style)
**File: `src/pages/Index.tsx`**

- Convert the static BadgeBar to an infinite-scroll CSS marquee (already have the `@keyframes marquee` in CSS)
- Duplicate badge images and animate continuously left-to-right
- Add "AS SEEN ON" label
- Reuse on Workers' Comp and Personal Injury pages

### 6. Bold Up All CTAs
**All page files**

- Primary CTA buttons get more personality: "SEE WHAT YOU'RE OWED →", "BOOK YOUR FREE CALL →", "HIT THE BUTTON →"
- Add urgency micro-copy below buttons: "Free. 30 seconds. No BS."
- Form submit buttons: larger, more prominent

### Technical Details
- No new files or dependencies — this is a content/copy rewrite across existing components
- All changes are to JSX text content and minor styling tweaks
- Badge bar gets CSS `animation: marquee 20s linear infinite` applied to a doubled container
- Testimonial cards get an additional `<p>` element for the result headline
- CTA button text changes only (no structural changes)
- Files modified: `Index.tsx`, `WorkersCompensation.tsx`, `PersonalInjury.tsx`, `index.css` (marquee on badge bar)

