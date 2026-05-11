# Agent Memory

This document is the continuity layer for future agents working on `rahatkhanna.me`. Read it before changing design, content, routes, or architecture.

## Product North Star

The site is becoming Rahat OS: a public executive presence today, and eventually a public/private personal operating system with AI agents mission control.

The public website should make one idea unmistakable:

> Rahat builds the infrastructure that makes AI agents reliable, observable, and enterprise-ready.

The long-term brand combines AI agents, humanoids, space, mission-grade systems, human ambition, and practical engineering leadership. The feeling should be premium and strategic, not cosplay sci-fi.

## Primary Outcomes

- Help Rahat land a senior executive role at a high-growth AI startup or premier lab.
- Make Rahat credible for leading AI agent conference invitations.
- Publish a long-term vision that can become industry thought leadership.
- Inspire young technologists through a story of ambition, resilience, and useful building.
- Grow from portfolio into an extensible Personal OS.

## Audience

- AI founders and executive teams.
- Premier AI labs and research/product organizations.
- Conference organizers and technical communities.
- Senior engineering leaders evaluating credibility.
- Young technologists looking for a path into ambitious technical work.

## Major Decisions Already Made

- The site is no longer coaching-first. It is AI executive-first.
- The design direction is mission control plus subtle space, not generic AI SaaS.
- The "Iron Man-like" request means cinematic, responsive, high-signal HUD patterns. Do not copy protected Marvel/IP-specific visual designs.
- Cards and grids should not dominate. Use telemetry surfaces, orbital clusters, trajectory bands, diagnostic panes, flip states, loaders, scanlines, and mission nodes.
- The website should later support public/private modes and AI agents dashboards.
- The YouTube tutorial shared in planning is only a production technique reference. Do not embed that tutorial on the site.
- A separate personal life-story YouTube video may be added later. Do not create `/journey` until the actual URL is provided.
- Keep sensitive work sanitized. Public Apple/internal details should stay high-level.

## Current Implementation Map

App root: `website/`

Core routes:

- `/` - executive AI landing page.
- `/design-system` - design-system review artifact and component lab.
- `/landing-prototype` - animated hero prototype.
- `/projects` - sanitized case-study index.
- `/projects/agent-observability` - flagship sanitized case study.
- `/writing` - thought-leadership index.
- `/speaking` - speaking page.
- `/vision` - long-term thesis page.
- `/os` - Personal OS vision page.

Shared code:

- `website/src/lib/site-data.ts` - navigation and core content.
- `website/src/components/brand/primitives.tsx` - reusable surfaces and text primitives.
- `website/src/components/brand/space-motion-scene.tsx` - poster/video/reduced-motion hero system.
- `website/src/components/brand/unique-elements.tsx` - constellation, ribbon, and trajectory components.
- `website/src/components/brand/mission-control-kit.tsx` - interactive mission-control system.
- `website/src/components/brand/motion-system.tsx` - reusable motion variants, flip cards, loaders, and transitions.
- `website/src/components/brand/personal-os.tsx` - future Personal OS components.
- `website/src/components/landing/executive-landing-page.tsx` - homepage.

## Design Rules

- Use Space Grotesk for display, Manrope for body, and IBM Plex Mono for telemetry.
- Keep the palette deep, precise, and varied. Avoid a one-note blue/purple gradient look.
- Use icons, telemetry labels, scanning states, and compact controls instead of text-heavy explanations.
- Use motion to show state, trust, progression, handoff, and system readiness.
- Support reduced-motion users and low-power devices.
- Avoid visible instructional copy about the UI itself. The interface should demonstrate the system.

## Content Rules

- Lead with systems credibility, not job-seeking language.
- Say "AI agents", "reliability", "observability", "evaluation", "guardrails", "enterprise-ready", and "mission-grade autonomy" when relevant.
- Avoid vague futurism. Tie vision to real engineering constraints and operating patterns.
- Keep the writing clear enough for executives and deep enough for technical leaders.
- Do not overclaim shipped confidential work.

## Personal OS Boundary

The future OS has three surfaces:

- Public: portfolio, writing, speaking, public progress, selected dashboards.
- Private: life dashboard, goals, calendar, health, notes, decision logs, finances, learning, and personal telemetry.
- Agents: task queues, evaluation traces, research agents, writing agents, build agents, observability, guardrails, and publish gates.

Private data must never leak into public pages. Future work should add authentication, redaction, audit trails, and explicit publish approvals before connecting real personal data.

## Generated Assets

The current motion assets in `website/public/motion/` are placeholders that prove the pipeline. They can later be replaced with a richer generated transition video.

Never commit:

- API keys.
- Prompt secrets.
- Private raw life data.
- Proprietary work artifacts.
- Unredacted generated intermediates.

## Verification

Run these from `website/` after code changes:

```bash
bun run typecheck
bun run lint
bun run build
```

Known legacy lint warnings from before the docs update:

- React hook dependency warning in `src/components/layout/animated-landing-text.tsx`.
- Anonymous default export warning in `src/lib/universes/data.ts`.

## Working Style For Future Agents

- Read the docs before editing.
- Preserve the product thesis unless Rahat explicitly changes it.
- Make changes in phases: design system, prototype, landing page, full site, OS extensions.
- Keep reusable components in `src/components/brand/`.
- Update these docs when a major design, product, architecture, or content decision changes.
