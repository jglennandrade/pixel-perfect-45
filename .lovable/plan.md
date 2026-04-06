

## Plan: Create Test Variation Cards on Live Site

### What We're Doing
Generate **3 variation cards** for the first case result (`$4,200,000 / Back Injury / Construction`) so you can compare them side-by-side on the live site and pick a winner before we generate all 12.

### The 3 Variations

**Variation A — Themed Background + Floating Case File**
- Construction-themed background image (warm cinematic tones, slightly blurred)
- The clean white "Case File" document floats on top, tilted `-3deg` with deep shadow
- Injury type + industry as bold text at the top
- KingKong "product on lifestyle backdrop" feel

**Variation B — Solid Gradient + Floating Case File**
- Deep navy-to-black gradient background (no photo)
- Same floating Case File document with tilt + shadow
- Cleaner, more minimal — lets the document be the hero
- Orange accent bar at bottom

**Variation C — Solid Gradient + Floating Settlement Check**
- Same deep gradient background
- Uses the "Settlement Check" style document instead of the Case File
- Tests whether the check format or the case file format looks better as the floating element

### How It Works

1. **Generate 1 Case File image** (clean white doc style, `$4,200,000`, "Back Injury", "Construction", Case #DFJ-2024-0847) — saved as `src/assets/case-file-construction.jpg`

2. **Generate 1 Settlement Check image** (realistic check style, same amount) — saved as `src/assets/case-check-construction.jpg`

3. **Generate 1 themed background** (construction site, warm cinematic tones, editorial, slightly blurred) — saved as `src/assets/bg-construction.jpg`

4. **Update `Index.tsx`** — Replace the first 3 cards in the `cases` array with the 3 variations, each using a different card template:
   - Card 1: themed bg photo + floating case file
   - Card 2: solid gradient + floating case file  
   - Card 3: solid gradient + floating settlement check
   - Cards 4-12: remain unchanged (current photo-background style)

5. You compare all 3 on the live marquee, pick your favorite, and we generate all 12 in that style.

### Files Modified
- `src/assets/` — 3 new generated images
- `src/pages/Index.tsx` — first 3 cards in the `cases` array get new markup variations

### Technical Details
- Images generated via AI image model at 640x960px (portrait 2:3)
- Floating document uses `transform: rotate(-3deg)`, `box-shadow: 0 25px 50px rgba(0,0,0,0.4)`, hover `scale(1.05)`
- Card dimensions stay the same (`w-[280px] h-[400px]` / `md:w-[320px] md:h-[450px]`)
- No new dependencies

