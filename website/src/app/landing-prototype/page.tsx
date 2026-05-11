import type { Metadata } from "next";

import { CommandCTA, MissionRail } from "@/components/brand/mission-page";
import { SectionShell } from "@/components/brand/primitives";
import { SpaceMotionScene } from "@/components/brand/space-motion-scene";

export const metadata: Metadata = {
  title: "Animated Landing Prototype",
  description: "Scroll-scrubbed animated landing-page prototype for Rahat Khanna's AI executive portfolio.",
};

export default function LandingPrototypePage() {
  return (
    <div className="space-field">
      <SpaceMotionScene mode="prototype" />
      <SectionShell
        title="Prototype Notes"
        intro="This page isolates the animated landing technique before it is tuned inside the production homepage."
      >
        <MissionRail
          items={[
            {
              label: "PROTOTYPE-01 / PRODUCTION PATTERN",
              title: "Generated motion asset, native content layer",
              body: "The hero uses a generated video asset as a scroll-scrubbed layer, with copy and telemetry UI rendered natively for accessibility.",
            },
            {
              label: "PROTOTYPE-02 / FALLBACK BEHAVIOR",
              title: "Poster and command surface remain intact",
              body: "If video metadata fails, reduced motion is enabled, or the browser blocks playback, the poster and CSS command surface remain available.",
            },
            {
              label: "PROTOTYPE-03 / NEXT REFINEMENT",
              title: "Replace the placeholder with a richer render",
              body: "Swap the current generated asset for a higher-fidelity AI render once the visual direction is approved.",
            },
          ]}
        />
      </SectionShell>
      <CommandCTA
        label="PROTOTYPE HANDOFF"
        title="Move from animation lab to production landing."
        body="The production homepage now uses the broader mission-control system, with this prototype route preserved for future hero animation iterations."
        href="/"
        action="View production page"
      />
    </div>
  );
}
