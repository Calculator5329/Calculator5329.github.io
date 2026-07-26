# Portfolio Site Roadmap

This queue implements the parent
[`career` portfolio direction](../../docs/roadmap.md#portfolio-wiring): keep
the work to project wiring and real images, with no redesign or framework
migration. The superseded pre-alignment queue is preserved in
[`docs/archive/2026-07-26/roadmap-pre-career-alignment.md`](archive/2026-07-26/roadmap-pre-career-alignment.md).

## Current state

The application currently renders these six cards in `src/components/Projects.js`:

1. GatesAI Chat
2. Agent-v2
3. N2K Almanac
4. Retirement Sim
5. Mental Math Site
6. Notdop Minigames

This is implementation evidence, not the target career lineup. The parent
career repository now names GatesAI Chat, Agent Orchestrator, Fathom, N2K
Almanac, Bit Maze, and Neon Vector Defense as the flagship set. Its profile
README already contains evidence-backed summaries and links for those projects.

## Now

- [ ] Add Fathom, Bit Maze, and Neon Vector Defense cards using real product
      images plus their verified source/live links from the parent career
      repository.
- [ ] Replace `public/gatesai-chat.png`, which is a title treatment rather than
      a product capture, with a real GatesAI Chat screenshot.
- [ ] Update the N2K Almanac card to use the parent career repository's
      canonical `n2k-almanac-v3.web.app` live URL.

## After Agent Orchestrator publication

- [ ] Add the Agent Orchestrator card only after its repository publication and
      privacy/history gates are complete.
- [ ] Reconcile the final six-card order against the parent flagship list,
      removing superseded cards only as part of that reviewed replacement.

## Verification and owner boundary

- [ ] After portfolio wiring changes, run `npm run build` and verify the
      recruiter path and responsive card layout in a browser.

Deployment is deliberately separate from verification. `npm run deploy`
publishes the GitHub Pages site and remains an owner-only action after review;
agents must not choose or perform publication.
