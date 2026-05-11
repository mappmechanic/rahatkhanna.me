import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionShell, SurfaceCard } from "@/components/brand/primitives";
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
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Production pattern", "The hero uses a generated video asset as a scroll-scrubbed layer, with copy and telemetry UI rendered natively for accessibility."],
            ["Fallback behavior", "If video metadata fails, reduced motion is enabled, or the browser blocks playback, the poster and CSS command surface remain intact."],
            ["Next refinement", "Swap the current generated asset for a higher-fidelity AI render once the visual direction is approved."],
          ].map(([title, body]) => (
            <SurfaceCard key={title}>
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{body}</p>
            </SurfaceCard>
          ))}
        </div>
        <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-md bg-space-signal px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
          View production landing page <ArrowRight className="h-4 w-4" />
        </Link>
      </SectionShell>
    </div>
  );
}
