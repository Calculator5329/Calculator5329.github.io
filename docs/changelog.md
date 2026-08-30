# Changelog

## 2026-08-29 — Flagship lineup wire-in (Ethan-instructed, no redesign)

### Updated

- Replaced the project card lineup with the current flagship five plus the
  site card: GatesAI Chat (repo), Fathom (live), N2K Almanac (live v3 URL),
  Neon Vector Defense (recruiter demo mode), Skyline Courier (live), This
  Website!. Removed Agent-v2, Retirement Sim, Mental Math Site (dead domain),
  and Notdop Minigames cards.
- Sourced real screenshots from each project repo into `public/` at card
  sizing (1280px wide): `gatesai-chat.png`, `fathom.png`, `n2k-almanac.png`,
  `neon-vector-defense.png`, `skyline-courier.png`.
- Resume button now points at self-hosted `/EG_Resume.pdf` (placeholder copy
  of the 2026-07 AI-Native resume; to be swapped before deploy) instead of the
  archive.org URL.
- Added M.S. Computer Science (AI/ML), Western Governors University, expected
  Feb 2027 above the existing B.S. entry; certifications unchanged.

## 2026-07-26 — Documentation aligned with career priorities

### Updated

- Added the standard `.orc/` ignore entry so local coordination state does not
  appear as portfolio source material.
- Replaced the scaffold placeholder in `CLAUDE.md` with the site's
  evidence-grounded career mission and corrected verification to the
  non-deploy `npm run build` script.
- Expanded the README with purpose, source-of-truth links, local verification,
  and the publication boundary.
- Reconciled the roadmap with the parent career flagship lineup and removed
  unrelated redesign ideas from the active queue.

### Archived

- Preserved the complete superseded June lineup/bench/site-improvement queue
  under `docs/archive/2026-07-26/` with a pointer from the current roadmap.

---

## 2026-06-07 — Lineup Curation: Featured 6

### Added
- **N2K Almanac** card — TypeScript solver (custom binary format + Web Worker) + React/MobX data-viz; links to live `n2k-almanac.web.app`
- **Retirement Sim** card — historical retirement simulator; links to live `calculator5329.github.io/retirement-sim`
- **Notdop Minigames** card — 12+ browser minigames with Firestore progression; links to live `notdop-minigames.web.app`
- **GatesAI Chat** card — flagship local-first AI workspace (TypeScript, Tauri/Rust + Go bridge, OpenRouter/Ollama, local+API image gen); links to repo (placeholder image until a hero screenshot is added)

### Removed
- Circuit Builder, Finance GUI, ArXiv Dashboard, and "This Website!" cards (rotated out to curate to the strongest 6)

### Updated
- Final featured order: GatesAI Chat, Agent-v2, N2K Almanac, Retirement Sim, Mental Math Site, Notdop Minigames
- Added SVG icons: `D3.svg`, `MobX.svg`
- Added screenshots: `n2k-almanac.png`, `retirement-sim.png`, `notdop-minigames.png`, `gatesai-chat.png` (placeholder)
- Note: `tax-explorer.png` and `D3.svg` are present but unused (Tax Explorer card was considered, then cut)

---

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
