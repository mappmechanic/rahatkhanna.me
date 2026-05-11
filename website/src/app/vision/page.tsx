import type { Metadata } from "next";
import { BrainCircuit, Cpu, Orbit, Rocket } from "lucide-react";

import { CommandCTA, MissionPageHero, MissionRail, SignalMatrix } from "@/components/brand/mission-page";
import { HudRevealTransitions } from "@/components/brand/motion-system";
import { SectionShell, SignalBadge } from "@/components/brand/primitives";
import { AutonomyConstellation, SignalRibbon } from "@/components/brand/unique-elements";
import { thesisCards, visionSignals } from "@/lib/site-data";

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

const visionMetrics = [
  { label: "time horizon", value: "10 years", tone: "signal" as const },
  { label: "domains", value: "agents + robots + space", tone: "mint" as const },
  { label: "core constraint", value: "trust", tone: "ember" as const },
  { label: "human goal", value: "leverage", tone: "signal" as const },
];

const visionArcs = [
  {
    label: "ARC-01 / DIGITAL",
    value: "AI agents",
    detail: "Digital autonomy teaches the infrastructure pattern first: traces, evals, memory, tool policy, and human escalation.",
    icon: BrainCircuit,
    tone: "signal" as const,
  },
  {
    label: "ARC-02 / EMBODIED",
    value: "Humanoids",
    detail: "Physical-world autonomy raises the stakes: intent, fleet learning, policy, safety, and operator override.",
    icon: Cpu,
    tone: "mint" as const,
  },
  {
    label: "ARC-03 / MISSION",
    value: "Space systems",
    detail: "Delayed feedback turns reliability into survival: resilient plans, audit trails, fallback paths, and mission assurance.",
    icon: Orbit,
    tone: "ember" as const,
  },
  {
    label: "ARC-04 / HUMAN",
    value: "Potential",
    detail: "The point is not machines for their own sake; it is human leverage, reinvention, and ambition becoming more accessible.",
    icon: Rocket,
    tone: "signal" as const,
  },
];

export default function VisionPage() {
  return (
    <div className="space-field min-h-screen">
      <MissionPageHero
        eyebrow="Long-term vision / autonomy stack"
        title="Agents, humanoids, space, and the reliability stack for useful autonomy."
        intro="This page frames the long arc of the portfolio. The same primitives that make enterprise agents trustworthy will matter for embodied systems, mission environments, and human potential."
        metrics={visionMetrics}
        primaryCta={{ label: "Turn into essays", href: "/writing" }}
        secondaryCta={{ label: "Explore Rahat OS", href: "/os" }}
      />

      <SectionShell
        eyebrow="Constellation thesis"
        title="A worldview built from connected operating constraints."
        intro="Agents, humanoids, and space are not three random interests. They are progressively harder versions of the same autonomy problem."
      >
        <AutonomyConstellation items={thesisCards} />
      </SectionShell>

      <SectionShell title="Vision Arcs" intro="Each arc can become an essay, keynote, case study, or product direction over time." className="bg-black/20">
        <SignalMatrix items={visionArcs} />
        <SignalRibbon items={visionSignals.map((signal) => signal.title)} />
      </SectionShell>

      <SectionShell title="Core Thesis" intro="A first draft of the public worldview that can later become essays, talks, and keynote material." className="bg-black/20">
        <MissionRail
          items={theses.map((thesis, index) => ({
            label: `THESIS-0${index + 1}`,
            title: thesis.title,
            body: thesis.body,
            meta: index === 3 ? "human mission" : "systems thesis",
          }))}
        />
        <div className="mt-8">
          <HudRevealTransitions />
        </div>
      </SectionShell>

      <CommandCTA
        label="NEXT ACTION / THOUGHT LEADERSHIP"
        title="Shape the vision into public authority."
        body="The vision page is the thesis spine for essays, talks, and future OS modules. Every new artifact should either prove the reliability stack or make the human mission more concrete."
        href="/writing"
        action="Open writing hub"
      >
        <div className="flex flex-wrap gap-2">
          {["Agents", "Humanoids", "Space", "Human potential"].map((tag) => (
            <SignalBadge key={tag}>{tag}</SignalBadge>
          ))}
        </div>
      </CommandCTA>
    </div>
  );
}
