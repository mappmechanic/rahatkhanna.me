# Design System

This design system should feel like a personal mission-control interface for AI systems, not a generic startup site. It should remain premium, restrained, and reusable across the whole website.

## Personality

Keywords:

- Mission-grade
- Cinematic
- Calm intelligence
- Executive clarity
- Space systems
- Agent observability
- Human ambition

Avoid:

- Generic neon AI dashboards.
- Plain card grids as the main visual idea.
- Heavy sci-fi decoration that weakens executive credibility.
- IP-specific Iron Man imitation.
- Marketing-page hero tropes when the page should feel like a usable system.

## Typography

Current stack:

- Display: Space Grotesk
- Body: Manrope
- Telemetry: IBM Plex Mono

The typography should feel technical, optimistic, and precise. If a custom font is created later, it should likely start as a variable display face with orbital cuts, squared terminals, and subtle aerospace influence, while preserving high readability for executive copy.

## Visual Motifs

Use these as reusable motifs:

- Mission-control grid
- Star texture
- Orbital traces
- Constellation nodes
- Telemetry lines
- Diagnostic panes
- Reactor/core status
- Command surfaces
- Trajectory ribbons
- Publish gates
- Agent fleet indicators
- Evaluation and trust meters

Space should usually live in background, motion, and structure. It should not become decorative clutter inside every component.

## Core Components

Primitives:

- `Eyebrow`
- `SectionShell`
- `SurfaceCard`
- `SignalBadge`
- `IconCard`

Distinctive elements:

- `AutonomyConstellation` - non-card constellation surface for connecting agents, humanoids, and orbital systems.
- `SignalRibbon` - horizontal mission signal strip for themes and tags.
- `TrajectoryBands` - curved visual system for career and vision arcs.
- `DesignElementPrinciples` - rationale and constraints for design decisions.

Mission-control components:

- `MissionControlHud` - interactive HUD with modes for agent fleet, humanoid ops, and orbital systems.
- Trust core, telemetry rails, diagnostics, guardrail matrix, and mission queue should be reusable patterns for future pages.

Motion components:

- `hudMotion` - shared Framer Motion variants.
- `HudFlipCards` - flip interactions for mission cards.
- `HudLoaders` - loaders for scan, orbit, telemetry, and core sync states.
- `HudRevealTransitions` - subtle reveal patterns for future page sections.
- `MotionSystemShowcase` - review surface for the design-system route.

Personal OS components:

- `PersonalOSConsole` - public/private/agents mode switcher and OS command surface.
- `PersonalOSComponentMap` - future module map and privacy boundary visualization.

## Motion Principles

Motion should communicate:

- System readiness
- Agent handoffs
- Evaluation progress
- Trust and guardrail states
- Career/mission progression
- Scroll-linked narrative transitions

Motion should not:

- Distract from Rahat's positioning.
- Create layout shift.
- Hide important content.
- Become too fast, flashy, or game-like.

Always support:

- Reduced-motion fallback.
- Static poster/frame fallback.
- Mobile-friendly performance.
- Clear content without relying on animation.

## Layout Guidance

Prefer:

- Dense but readable command surfaces.
- Full-width bands and unframed layouts.
- Mission panels with asymmetric composition.
- Orbit maps and trajectory surfaces instead of equal card rows.
- Clear hierarchy for executives scanning quickly.

Avoid:

- Nested cards.
- Oversized marketing cards.
- UI text that explains the design instead of using the design.
- Single-hue pages that read as only dark blue, purple, or cyan.

## Future Design-System Work

- Create reusable timeline/trajectory components for the career arc.
- Add publish-gate components for private-to-public OS workflows.
- Add agent trace viewers, evaluation score panels, and confidence meters.
- Add speaker-kit components for talks, abstracts, and media.
- Add writing components for thesis pages, citations, and idea maps.
- Explore a custom Rahat display font or logo lettering system.
