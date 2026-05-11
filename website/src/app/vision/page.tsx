import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionShell, SurfaceCard } from "@/components/brand/primitives";
import { visionSignals } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Vision",
  description: "Rahat Khanna's long-term vision for AI agents, humanoids, space, and the infrastructure required for trustworthy autonomy.",
};

const theses = [
  {
    title: "Agents are the first mass-market autonomy layer.",
    body: "Digital agents are teaching us how autonomy fails: hidden reasoning, tool misuse, looping, cost spikes, and uncertain quality. The answer is not more demos; it is better infrastructure.",
  },
  {
    title: "Humanoids will need enterprise-grade observability.",
    body: "Embodied agents add physical-world risk. Memory, intent, escalation, fleet telemetry, and policy controls become safety systems, not dashboard extras.",
  },
  {
    title: "Space is the ultimate delayed-feedback environment.",
    body: "Mission autonomy compresses the same lessons: resilient planning, auditability, fallback behavior, human oversight, and operations under uncertainty.",
  },
  {
    title: "The human mission is leverage and inspiration.",
    body: "The story matters because young technologists need to see that reinvention is possible: founder, builder, platform engineer, AI systems architect.",
  },
];

export default function VisionPage() {
  return (
    <div className="space-field min-h-screen pt-24">
      <SectionShell
        eyebrow="Long-term vision"
        title="Agents, humanoids, space, and the reliability stack for autonomy."
        intro="This page frames the long arc of the portfolio. The same primitives that make enterprise agents trustworthy will matter for embodied and mission-grade systems."
      >
        <div className="grid gap-5 md:grid-cols-5">
          {visionSignals.map(({ title, icon: Icon }) => (
            <SurfaceCard key={title} className="text-center">
              <Icon className="mx-auto mb-4 h-7 w-7 text-space-signal" />
              <h2 className="text-base font-semibold text-white">{title}</h2>
            </SurfaceCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell title="Core Thesis" intro="A first draft of the public worldview that can later become essays, talks, and keynote material." className="bg-black/20">
        <div className="grid gap-5 md:grid-cols-2">
          {theses.map((thesis) => (
            <SurfaceCard key={thesis.title}>
              <h2 className="text-2xl font-semibold text-white">{thesis.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{thesis.body}</p>
            </SurfaceCard>
          ))}
        </div>
        <Link href="/writing" className="mt-8 inline-flex items-center gap-2 rounded-md bg-space-signal px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
          Turn vision into essays <ArrowRight className="h-4 w-4" />
        </Link>
      </SectionShell>
    </div>
  );
}
