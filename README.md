# Florice Milling — Public Website

Next.js (Node.js) site for **Florice Milling Spare & Solution** — B2B consulting for rice milling, wheat flour milling, parboiling, and grain processing.

## Stack

- **Next.js 15** + React 19 + TypeScript
- **Tailwind CSS**
- **Lucide React** icons
- SVG process diagrams (no stock photos)

Legacy static HTML/CSS site is preserved in `legacy-static/` for reference.

## Local development

```bash
cd florice-website
npm install
npm run dev
```

Then open http://localhost:8080 in your browser.

This project uses **Node.js** (Next.js), not Python's `http.server`.

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — hero, scope, quick navigation |
| `/services` | Consulting services, industries, process |
| `/work` | Case studies, outcomes, machinery |
| `/about` | About, brochure, FAQ |
| `/contact` | Consultation request form |

## Build & deploy

```bash
npm run build
npm start
```

Configured for **Netlify** with `@netlify/plugin-nextjs` (see `netlify.toml`).

## Assets

- Capabilities brochure: `public/florice-capabilities-brochure.pdf`
- Brochure generator script: `scripts/generate-brochure-pdf.py`

## Contact placeholders

Update `src/lib/content.ts` with real email and phone before production launch.
