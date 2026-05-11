# rahatkhanna.me Website

This is the Next.js app for Rahat Khanna's public portfolio and future Personal OS surface. It is currently being redesigned around AI executive credibility, mission-control visual language, and a long-term vision spanning AI agents, humanoids, space, and human potential.

## Routes

- `/` - executive AI landing page.
- `/design-system` - living review surface for tokens, components, motion, mission-control UI, and Personal OS patterns.
- `/landing-prototype` - scroll-scrubbed animated hero prototype.
- `/projects` - sanitized project/case-study index.
- `/projects/agent-observability` - flagship case study for agent evaluation and observability.
- `/writing` - essay/thought-leadership index.
- `/speaking` - speaker positioning, topics, and inquiry call to action.
- `/vision` - long-term thesis around agents, humanoids, space, and human potential.
- `/os` - future Personal OS and AI agents mission-control concept page.

## Key Modules

- `src/lib/site-data.ts` - shared content, navigation, projects, writing, speaking topics, and core positioning.
- `src/components/landing/executive-landing-page.tsx` - homepage experience.
- `src/components/brand/primitives.tsx` - shared content primitives.
- `src/components/brand/space-motion-scene.tsx` - poster/video/reduced-motion hero asset system.
- `src/components/brand/unique-elements.tsx` - non-generic space and trajectory elements.
- `src/components/brand/mission-control-kit.tsx` - interactive mission-control components.
- `src/components/brand/motion-system.tsx` - reusable HUD transitions, card flips, loaders, and reveal patterns.
- `src/components/brand/personal-os.tsx` - public/private/agents Personal OS components.
- `public/motion/*` - current generated placeholder motion assets.

## Design Principles

- Premium mission control, not generic AI SaaS.
- Subtle space motifs, not heavy sci-fi decoration.
- Original Iron Man-like responsiveness without copying protected interface designs.
- Fewer plain cards and grids; prefer telemetry panels, orbital surfaces, trajectory bands, mission nodes, diagnostics, and publish gates.
- Animation should clarify state, hierarchy, or progression. It should not overpower the executive story.
- Every public mention of sensitive career work must be sanitized.

## Commands

```bash
bun install
bun run dev
bun run typecheck
bun run lint
bun run build
```

Production preview:

```bash
bunx next start -H 127.0.0.1
```

## Verification Notes

The recent redesign passed typecheck, lint, and production build. Lint still reports two legacy warnings outside the new design-system work:

- `src/components/layout/animated-landing-text.tsx` has a React hook dependency warning.
- `src/lib/universes/data.ts` has an anonymous default export warning.

Read the root `docs/` folder before changing the information architecture, design system, Personal OS concept, or AI-agent mission-control direction.
