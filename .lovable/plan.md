## UIN Jakarta Brand Guideline Website

A modern editorial, fully responsive multi-page site documenting UIN Jakarta's visual identity. Each guideline category is its own SSR-friendly route with deep-linkable URLs, dedicated metadata, and a shared sidebar/top navigation.

### Visual direction
- Modern editorial: large display typography, generous whitespace, swiss-style 12-column grid, restrained motion.
- Light theme with a refined neutral palette and a single brand accent placeholder (to be replaced when you provide official colors).
- Sticky top bar + persistent left sidebar nav on desktop; collapsible drawer nav on mobile.
- Section pages share a consistent template: page title, lead paragraph, anchored sub-sections, specimen blocks, and a "Download" rail.

### Route structure

```
src/routes/
  __root.tsx              shell: header + sidebar + <Outlet/> + footer
  index.tsx               Home — overview, intro to the brand system, links to all sections
  pusat-unduhan.tsx       Downloads hub (logos, PDF guideline, templates, fonts)
  segel-akademik.tsx      Academic seal — usage, clear space, do/don't
  signature-logo.tsx      Primary signature logo — variants, spacing, misuse
  lambang-fakultas.tsx    Faculty emblems — grid of all faculties
  tipografi-logo.tsx      Logo typography — wordmark construction
  warna.tsx               Color system — primary/secondary swatches with HEX/RGB/CMYK
  tipografi.tsx           Typography — typefaces, scale, weights, specimens
```

### Shared components

```
src/components/
  site-header.tsx         Top bar with logo lockup + mobile menu trigger
  site-sidebar.tsx        Section navigation (desktop persistent / mobile sheet)
  site-footer.tsx         Minimal footer with credits + last-updated
  page-header.tsx         Reusable hero per section (eyebrow, title, lead)
  spec-block.tsx          Two-column specimen + spec table layout
  swatch.tsx              Color swatch card (HEX/RGB/CMYK)
  download-card.tsx       File card with format chip + download button
  asset-frame.tsx         Bordered frame for logos / seals on neutral bg
```

### Page templates (placeholders ready for your assets)

- **Home** — hero, "What's inside" grid linking to the 7 sections, latest update note.
- **Pusat Unduhan** — tabs/filters for: Logos (PNG/SVG/AI), Brand Guideline PDF, Templates (PPT/DOC/letterhead), Fonts. Each item rendered as a `download-card`.
- **Segel Akademik / Signature Logo / Lambang Fakultas / Tipografi Logo** — `asset-frame` with the mark, clear-space diagram, minimum-size note, color variants, do/don't grid.
- **Warna** — primary + secondary palette as `swatch` grid; usage ratios.
- **Tipografi** — typeface specimens, type scale table, pairing examples.

All asset slots use `data-asset-placeholder` so they're easy to spot and swap when you upload the real files.

### Design system
- Add semantic tokens in `src/styles.css` (oklch): `--background`, `--foreground`, `--muted`, `--border`, plus `--brand` and `--brand-foreground` placeholders.
- Editorial type: a serif display family for headings, a clean grotesk for body. Loaded via Google Fonts in `__root.tsx` head links until you provide official UIN fonts.
- Spacing: container `max-w-screen-xl`, generous `py-24` section rhythm.

### SEO & metadata
- Each route defines its own `head()` with unique `title`, `description`, `og:title`, `og:description`.
- Single H1 per page, semantic `<section>`/`<article>`, alt text on every asset frame.

### Out of scope (this pass)
- Real asset files (you'll upload after).
- Auth, CMS, or admin editing.
- Search across sections (can be added later).

### Next step after approval
Implement the routes, shared components, navigation, and design tokens with placeholders. Once you upload the real logos/fonts/PDF, I'll wire them into the respective sections and download cards.
