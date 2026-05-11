# Agent Instructions

Before changing this repository, read:

- `docs/AGENT_MEMORY.md`
- `docs/DESIGN_SYSTEM.md`
- `docs/PERSONAL_OS_VISION.md`
- `docs/CONTENT_STRATEGY.md`

Key rules:

- Preserve the AI executive and future Rahat OS direction unless Rahat explicitly changes it.
- Keep the design premium mission-control plus subtle space, not generic AI SaaS.
- Reuse components in `website/src/components/brand/` before inventing new visual systems.
- Keep public content sanitized, especially around Apple/internal work.
- Do not embed the planning YouTube tutorial. It was technique inspiration only.
- Do not add `/journey` until Rahat provides the actual personal life-story video URL.
- Keep secrets, API keys, private life data, and unredacted generated intermediates out of GitHub.
- Update `docs/` whenever a major product, content, design, or architecture decision changes.

Verification for code changes:

```bash
cd website
bun run typecheck
bun run lint
bun run build
```
