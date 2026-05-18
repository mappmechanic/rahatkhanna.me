import type { Metadata } from "next";
import { BookOpen, BrainCircuit, Cpu, LockKeyhole, Orbit, RadioTower, Rocket, ShieldCheck, Users } from "lucide-react";

import { CommandCTA, MissionPageHero, MissionRail, SignalMatrix } from "@/components/brand/mission-page";
import { SectionShell, SignalBadge, SurfaceCard } from "@/components/brand/primitives";
import { AutonomyConstellation, SignalRibbon } from "@/components/brand/unique-elements";
import { thesisCards, visionSignals, writingPosts } from "@/lib/site-data";

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

const writingAudience = [
  {
    label: "For founders",
    value: "What to trust",
    detail: "How to tell whether an AI agent is ready for customers, enterprise workflows, and leadership scrutiny.",
    icon: ShieldCheck,
    tone: "signal" as const,
  },
  {
    label: "For AI leaders",
    value: "What to measure",
    detail: "Traces, evals, cost, latency, quality, human escalation, and governance need to become executive language.",
    icon: RadioTower,
    tone: "mint" as const,
  },
  {
    label: "For builders",
    value: "What to build",
    detail: "Move from impressive demos to observable, reliable, enterprise-ready systems.",
    icon: BrainCircuit,
    tone: "ember" as const,
  },
  {
    label: "For technologists",
    value: "How to grow",
    detail: "Founder roots, Apple-scale engineering, AI infrastructure, and long-term reinvention can become a useful path.",
    icon: Users,
    tone: "signal" as const,
  },
];

const fieldNoteSections = [
  {
    title: "The bottleneck is not model access. It is operational trust.",
    body: "Most organizations can now connect a model to tools, data, and workflows. The hard question is what happens after the first impressive demo: how leaders know whether the agent completed the task, used the right tools, stayed inside policy, escalated at the right moment, and produced a result the business can trust.",
  },
  {
    title: "Agents need traces before dashboards.",
    body: "Traditional software dashboards summarize systems that are mostly deterministic. Agent systems are different: the path matters. Plans, tool calls, retries, memory reads, policy checks, costs, latency, and human handoffs need to become replayable evidence before they become aggregate metrics.",
  },
  {
    title: "Evaluation becomes executive language.",
    body: "Task success, tool-call precision, hallucination risk, trace quality, cost, latency, and escalation rate are not only engineering metrics. They are the vocabulary executives need to decide where agents can operate, where humans must stay in control, and where the business is taking unacceptable risk.",
  },
  {
    title: "The same stack will follow autonomy into the physical world.",
    body: "Humanoids and space systems raise the stakes, but the operating grammar is familiar: inspect what happened, understand why, constrain unsafe action, learn from feedback, and give humans a clear intervention path. Digital agents are the first mass-market training ground for that reliability stack.",
  },
];

const rahatOsPrinciples = [
  {
    label: "RAHAT-OS-01 / PUBLIC",
    title: "The public layer stays focused on proof and ideas.",
    body: "Projects, talks, essays, profile highlights, and public progress can build trust without exposing private life data.",
    meta: "broadcast layer",
  },
  {
    label: "RAHAT-OS-02 / PRIVATE",
    title: "The private layer should not be visible until the boundary is real.",
    body: "Goals, notes, health, calendar, finances, relationships, and personal telemetry need authentication, masking, and audit trails.",
    meta: "life cockpit",
  },
  {
    label: "RAHAT-OS-03 / AGENTS",
    title: "The agent layer should prove the same reliability thesis.",
    body: "Research agents, writing agents, build agents, eval gates, memory, and escalation should be observable before they become autonomous.",
    meta: "mission control",
  },
];

export default function VisionPage() {
  return (
    <div className="space-field min-h-screen">
      <MissionPageHero
        eyebrow="Long-term vision / autonomy stack"
        title="Agents, humanoids, space, and the reliability stack for useful autonomy."
        intro="The same ideas that make enterprise agents trustworthy will matter for embodied systems, mission environments, and human potential."
        metrics={visionMetrics}
        primaryCta={{ label: "Read field note", href: "#writing" }}
        secondaryCta={{ label: "See Rahat OS direction", href: "#rahat-os" }}
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

      <SectionShell title="Core Thesis" intro="A public worldview for essays, talks, product thinking, and long-term research curiosity." className="bg-black/20">
        <MissionRail
          items={theses.map((thesis, index) => ({
            label: `THESIS-0${index + 1}`,
            title: thesis.title,
            body: thesis.body,
            meta: index === 3 ? "human mission" : "systems thesis",
          }))}
        />
      </SectionShell>

      <SectionShell
        id="writing"
        eyebrow="Writing inside the vision"
        title="Essays and field notes that make the thesis useful."
        intro="Rather than a separate blog tab, writing belongs here as the public development of the worldview: practical for leaders, concrete for builders, and inspiring for technologists."
      >
        <MissionRail
          items={writingPosts.map((post, index) => ({
            label: `ESSAY-${String(index + 1).padStart(2, "0")}`,
            title: post.title,
            body: post.summary,
            meta: index === 0 ? "enterprise AI" : index === 1 ? "agent evaluation" : "frontier autonomy",
          }))}
        />
        <div className="mt-8">
          <SignalMatrix items={writingAudience} />
        </div>
        <SurfaceCard className="mt-8">
          <SignalBadge>FIELD NOTE 01 / ENTERPRISE AI</SignalBadge>
          <h2 className="mt-5 max-w-4xl text-3xl font-semibold text-white md:text-4xl">
            Why agent observability is the bottleneck for enterprise AI.
          </h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300">
            The next wave of useful AI will not be won only by teams with access to better models. It will be won by teams that can turn autonomous behavior into inspectable, governable, improvable systems.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {fieldNoteSections.map((section) => (
              <div key={section.title} className="mission-node border border-space-line/25 bg-black/20 p-5">
                <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{section.body}</p>
              </div>
            ))}
          </div>
        </SurfaceCard>
      </SectionShell>

      <SectionShell
        id="rahat-os"
        title="Rahat OS belongs here as a future direction, not a top-level product claim."
        intro="The OS idea is still important: the website can eventually grow into a public/private operating layer for life, work, writing, and AI agents. For now, it should be framed as a long-term vision."
        className="bg-black/20"
      >
        <MissionRail items={rahatOsPrinciples} />
        <div className="mt-8 flex flex-wrap gap-2">
          {["Public broadcast", "Private vault", "Agent mission control", "Publish gate"].map((tag) => (
            <SignalBadge key={tag}>
              {tag.includes("Private") ? <LockKeyhole className="mr-2 h-3.5 w-3.5" /> : <BookOpen className="mr-2 h-3.5 w-3.5" />}
              {tag}
            </SignalBadge>
          ))}
        </div>
      </SectionShell>

      <CommandCTA
        label="NEXT ACTION / THOUGHT LEADERSHIP"
        title="Follow the ideas as they become essays and talks."
        body="The vision is the thesis spine for public writing, speaking, and future Rahat OS modules. Every new artifact should either clarify the reliability stack or make the human mission more concrete."
        href="/speaking"
        action="Invite a talk"
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
