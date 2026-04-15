# Virtual Slaps — React + Tailwind

Converted from the original single-file `index.html` landing page into a Vite + React + Tailwind project.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
  App.jsx                # Composes the page
  main.jsx               # React entry
  index.css              # Tailwind layers + custom CSS (cursor, canvas, reveal, pseudo-elements)
  hooks/
    useReveal.js         # IntersectionObserver for `.reveal` animations
  components/
    Cursor.jsx           # Custom dot + ring cursor
    DotCanvas.jsx        # Animated dot-matrix background
    Navbar.jsx           # Fixed nav with scroll state
    Hero.jsx
    Marquee.jsx
    SectionLabel.jsx
    WhatWeAre.jsx        # 5-phase grid
    Services.jsx
    WhoWeServe.jsx
    Market.jsx           # Inverted (white bg) section
    Positioning.jsx
    CTA.jsx
    Footer.jsx
```

## Styling approach

- **Tailwind** handles layout, spacing, colors, typography utilities (with arbitrary values where needed for pixel-perfect parity with the original).
- **`src/index.css`** keeps things that don't translate cleanly to Tailwind:
  - Global `cursor: none`, font-family base
  - Custom cursor absolute positioning (driven by refs in `Cursor.jsx`)
  - `#dot-canvas` and `.radial-center` positioning
  - `.reveal` transitions + delay modifiers
  - `clamp()` fluid type sizes on hero/headline
  - `::before` / `::after` pseudo-element content (eyebrow bars, section label lines, marquee stars, not/is list markers)
- **`tailwind.config.js`** extends with brand colors (`brand-black`, `brand-dim`, etc.), the Syne / DM Mono / Instrument Serif font families, and the `marquee` + `pulse` keyframes.

## Notes

- Fonts are loaded from Google Fonts in `index.html` via `<link>` tags (replacing the `@import` in the original).
- Emoji icons are left as-is; swap for SVGs if you want crisper rendering.
- The original file was a Cocoa-exported (TextEdit) HTML where the real markup was wrapped as text inside `<p>` tags — that was unwrapped before conversion.
