# Changelog

## 2026-03-01 — Polish Pass: Placeholder, Cert Hover, Tech Stack

### Fixed
- "More Coming Soon" placeholder now fills the full card height with a single centered "Coming Soon" label — no more redundant title below the overlay
- Certification hover in Education no longer pushes down adjacent cert (replaced font-size scaling with CSS `transform: scale()` to avoid layout reflow)

### Updated (Tech Stack)
- **Languages:** replaced Java with TypeScript; fixed `Javascript.svg` → `JavaScript.svg`
- **Frameworks & Libraries:** replaced Flask with Tailwind CSS; fixed `Tensorflow.svg` → `TensorFlow.svg`
- **Infrastructure & Tools:** replaced Google Cloud, Azure, Raspberry Pi with Firebase, PostgreSQL, Vite; fixed `Github.svg` → `GitHub.svg`

---

## 2026-03-01 — Portfolio Project Grid Overhaul

### Removed
- ArXiv Dashboard project card
- News Bias Analyzer project card
- Book Recommendation Website project card
- Stock Portfolio Analyzer project card

### Added
- **Agent-v2** card — TypeScript/Node.js LLM agentic backend (OpenAI, Anthropic, Gemini); links to GitHub repo
- **Circuit Builder** card — visual logic circuit designer; links to live Firebase deployment
- **Finance GUI** card — node-based retirement planner; links to live Firebase deployment
- "Coming Soon" placeholder card (card 6) with dashed border + dimmed styling

### Updated
- **Mental Math Site** — replaced old screenshot with BoardPage.png from n2k-webapp repo; updated tech icons to React, FastAPI, Firebase, PostgreSQL; updated live link to mentalmath.site; cleaned up description
- **This Website!** — fixed `Github.svg` → `GitHub.svg` and `Javascript.svg` → `JavaScript.svg` case mismatches (cross-platform file system safety)

### Infrastructure
- Added SVG icons: `Firebase.svg`, `Tailwind.svg`, `PostgreSQL.svg`, `Anthropic.svg` (sourced from simple-icons, brand colors added)
- Added screenshots to `public/`: `agent-v2.png`, `circuit-builder.png`, `finance-gui.png`, `n2k-webapp.png`
- Updated `Project.js` component to support `placeholder` prop (renders `<div>` instead of `<a>`, shows "Coming Soon" overlay)
- Added `.project-card.placeholder` and `.coming-soon-overlay` CSS styles
- Refactored `Projects.js` with `icon()` helper to reduce boilerplate
- Created `docs/` folder with `roadmap.md` and `changelog.md`
