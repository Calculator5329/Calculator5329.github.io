# Portfolio Site Roadmap

This queue implements the parent
[`career` portfolio direction](../../docs/roadmap.md#portfolio-wiring): keep
the work to project wiring and real images, with no redesign or framework
migration. The superseded pre-alignment queue is preserved in
[`docs/archive/2026-07-26/roadmap-pre-career-alignment.md`](archive/2026-07-26/roadmap-pre-career-alignment.md).

## Current state

The application currently renders these six cards in `src/components/Projects.js`
(Ethan's instructed flagship lineup, 2026-08-29):

1. GatesAI Chat
2. Fathom
3. N2K Almanac
4. Neon Vector Defense
5. Skyline Courier
6. This Website!

## Now

- [x] <!-- workspace:id=work:e8db9bb5-f190-5433-86e4-58d974dbfff3 --> Add Fathom, Bit Maze, and Neon Vector Defense cards using real product
      images plus their verified source/live links from the parent career
      repository. (2026-08-29: Fathom and Neon Vector Defense added with real
      screenshots; Ethan's in-session lineup named Skyline Courier instead of
      Bit Maze.)
- [x] <!-- workspace:id=work:ac46a368-7255-545b-96ee-b97c6ec49418 --> Replace `public/gatesai-chat.png`, which is a title treatment rather than
      a product capture, with a real GatesAI Chat screenshot. (2026-08-29:
      replaced with docs/screens/desktop-mocked/03-chat-tool-activity.png.)
- [x] <!-- workspace:id=work:11d98755-0ccd-52a6-86d7-7c31cda31805 --> Update the N2K Almanac card to use the parent career repository's
      canonical `n2k-almanac-v3.web.app` live URL. (2026-08-29: done.)

## After Agent Orchestrator publication

- [ ] <!-- workspace:id=work:4f61cfd7-1a08-5ea2-9315-226299b8f991 --> Add the Agent Orchestrator card only after its repository publication and
      privacy/history gates are complete.
- [ ] <!-- workspace:id=work:38239691-59d9-57c5-be48-1ad9f94f4c6d --> (2026-09-03: Skyline Courier removed and Political Compass 2026 added on Ethan's call; order still to reconcile.) Reconcile the final six-card order against the parent flagship list,
      removing superseded cards only as part of that reviewed replacement.

## Verification and owner boundary

- [ ] <!-- workspace:id=work:273a6b56-f613-5f26-8919-b65411b509a9 --> After portfolio wiring changes, run `npm run build` and verify the
      recruiter path and responsive card layout in a browser.

Deployment is deliberately separate from verification. `npm run deploy`
publishes the GitHub Pages site and remains an owner-only action after review;
agents must not choose or perform publication.
