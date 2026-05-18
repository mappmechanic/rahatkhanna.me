# rahatkhanna.me Website

This is the Next.js app for Rahat Khanna's public portfolio and future Personal OS surface. It is currently being redesigned around AI executive credibility, mission-control visual language, and a long-term vision spanning AI agents, humanoids, space, and human potential.

## Routes

- `/` - executive AI landing page.
- `/design-system` - noindexed review surface for tokens, components, motion, mission-control UI, and Personal OS patterns.
- `/landing-prototype` - noindexed scroll-scrubbed animated hero prototype.
- `/projects` - sanitized project/case-study index.
- `/projects/agent-observability` - flagship case study for agent evaluation and observability.
- `/writing` - redirects to `/vision#writing`; writing currently lives inside Vision.
- `/speaking` - speaker positioning, topics, and inquiry call to action.
- `/vision` - long-term thesis around agents, humanoids, space, and human potential.
- `/os` - redirects to `/vision#rahat-os`; Rahat OS is a future-direction section inside Vision.
- `/ai-multiverse` - legacy route that now redirects to `/vision#rahat-os`; do not add it back to public navigation.

## Key Modules

- `src/lib/site-data.ts` - shared content, navigation, projects, writing, speaking topics, and core positioning.
- `src/components/landing/executive-landing-page.tsx` - homepage experience.
- `src/components/brand/primitives.tsx` - shared content primitives.
- `src/components/brand/space-motion-scene.tsx` - poster/video/reduced-motion hero asset system.
- `src/components/brand/unique-elements.tsx` - non-generic space and trajectory elements.
- `src/components/brand/mission-control-kit.tsx` - interactive mission-control components.
- `src/components/brand/motion-system.tsx` - reusable HUD transitions, card flips, loaders, and reveal patterns.
- `src/components/brand/mission-page.tsx` - reusable page heroes, telemetry strips, mission rails, signal matrices, and command CTAs.
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

The recent redesign passed typecheck, lint, and production build. The old AI Multiverse API/data surface, Firebase contact API, and legacy landing-page components have been removed from the release branch.

Read the root `docs/` folder before changing the information architecture, design system, Personal OS concept, or AI-agent mission-control direction.
