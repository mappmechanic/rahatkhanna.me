import type { Metadata } from "next";
import { Activity, CheckCircle2, GitBranch, Gauge, LockKeyhole, ShieldAlert, Telescope } from "lucide-react";

import { CommandCTA, MissionPageHero, MissionRail, SignalMatrix } from "@/components/brand/mission-page";
import { SectionShell, SignalBadge, SurfaceCard } from "@/components/brand/primitives";
import { SignalRibbon } from "@/components/brand/unique-elements";

export const metadata: Metadata = {
  title: "Agent Observability & Evaluation",
  description: "An AI agent infrastructure case study covering observability, evaluation, supervision, and guardrails.",
};

const decisionLog = [
  {
    title: "Trace first, dashboard second",
    body: "Agent behavior cannot be judged from aggregate metrics alone. The system needs replayable execution traces before leadership can trust summary dashboards.",
  },
  {
    title: "Blend deterministic and probabilistic evaluation",
    body: "Rule-based checks catch contract failures. LLM-as-Judge pipelines catch softer quality problems such as reasoning drift, hallucination, and task incompleteness.",
  },
  {
    title: "Design supervision as product surface",
    body: "Human escalation is not an exception path. It is a core safety interface for production agents operating near enterprise workflows.",
  },
];

const stackLayers = [
  "Agent runtime events",
  "Tool-call logs",
  "Execution trace graph",
  "Evaluation pipeline",
  "Reliability metrics",
  "Human review queue",
  "Policy and guardrail controls",
  "Cost and latency monitoring",
];

const caseMetrics = [
  { label: "operating lens", value: "systems", tone: "signal" as const },
  { label: "primary thesis", value: "trace first", tone: "mint" as const },
  { label: "quality gate", value: "eval loop", tone: "ember" as const },
  { label: "oversight", value: "human armed", tone: "signal" as const },
];

const outcomeSignals = [
  {
    label: "Task quality",
    value: "Measurable",
    detail: "Score task success, hallucination risk, tool precision, completion, and business outcome fit.",
    icon: Gauge,
    tone: "signal" as const,
  },
  {
    label: "Execution path",
    value: "Replayable",
    detail: "Inspect plans, tool calls, memory usage, policy decisions, retries, and escalations.",
    icon: Activity,
    tone: "mint" as const,
  },
  {
    label: "Policy surface",
    value: "Constrained",
    detail: "Keep secrets, costs, external actions, and high-risk tools behind explicit guardrails.",
    icon: LockKeyhole,
    tone: "ember" as const,
  },
  {
    label: "Human control",
    value: "Escalatable",
    detail: "Design oversight as a core product surface instead of an exception path.",
    icon: CheckCircle2,
    tone: "mint" as const,
  },
];

export default function AgentObservabilityPage() {
  return (
    <div className="space-field min-h-screen">
      <MissionPageHero
        eyebrow="Case study / AI agent infrastructure"
        title="Agent observability is the cockpit for enterprise autonomy."
        intro="A practical breakdown of how to make production agents measurable, inspectable, governable, and ready for human oversight."
        metrics={caseMetrics}
        primaryCta={{ label: "Explore speaking topics", href: "/speaking" }}
        secondaryCta={{ label: "Back to projects", href: "/projects" }}
      >
        <SurfaceCard>
          <SignalBadge>Core problem</SignalBadge>
          <h2 className="mt-5 text-3xl font-semibold text-white">Agents fail in ways traditional software dashboards cannot explain.</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Long-horizon agents need inspection across plans, tool calls, intermediate reasoning artifacts, constraints, escalations, cost, latency, and final task quality. The challenge is turning messy autonomous behavior into reliable operational signals.
          </p>
        </SurfaceCard>
      </MissionPageHero>

      <SectionShell
        eyebrow="Outcome pattern"
        title="The operating goal is simple: make agent behavior inspectable."
        intro="Executives and builders need more than aggregate dashboards. They need to see what happened, why it happened, whether the result was good, and when a human should intervene."
      >
        <SignalMatrix items={outcomeSignals} />
        <SignalRibbon items={["Trace replay", "LLM-as-Judge", "Tool precision", "Human escalation", "Cost visibility"]} />
      </SectionShell>

      <SectionShell title="Reference Architecture" intro="The pattern can be understood as a layered reliability system: capture behavior, interpret it, evaluate it, and route the right work to humans." className="bg-black/20">
        <MissionRail
          stagger={false}
          items={stackLayers.map((layer, index) => ({
            label: `STACK-${String(index + 1).padStart(2, "0")}`,
            title: layer,
            body:
              index < 2
                ? "Capture raw behavior before summarizing it. Agent systems need durable evidence for what happened."
                : index < 5
                  ? "Transform events into interpretable traces, evaluation scores, and reliability signals."
                  : "Close the loop with review queues, policy control, and operating metrics leaders can trust.",
          }))}
        />
      </SectionShell>

      <SectionShell title="Key Tradeoffs" intro="The value is not just in the parts. It is in choosing where the system should be strict, where it should be probabilistic, and where human judgment must stay in the loop.">
        <MissionRail
          items={decisionLog.map((decision, index) => ({
            label: `DECISION-0${index + 1}`,
            title: decision.title,
            body: decision.body,
            meta: "architecture tradeoff",
          }))}
        />
      </SectionShell>

      <SectionShell title="Operating Principles" intro="The same reliability questions show up in enterprise agents, humanoid operations, and mission-grade autonomy." className="bg-black/20">
        <div className="grid gap-5 md:grid-cols-2">
          <SurfaceCard>
            <ShieldAlert className="mb-5 h-7 w-7 text-space-ember" />
            <h2 className="text-xl font-semibold text-white">Keep sensitive systems protected</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Public writing can explain patterns, architecture categories, metrics philosophy, and operating lessons without exposing employer-specific details.
            </p>
          </SurfaceCard>
          <SurfaceCard>
            <Telescope className="mb-5 h-7 w-7 text-space-signal" />
            <h2 className="text-xl font-semibold text-white">Long-term relevance</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The same reliability questions will appear in agent fleets, humanoid operations, and space autonomy: what happened, why it happened, whether it was safe, and who should intervene.
            </p>
          </SurfaceCard>
        </div>
      </SectionShell>

      <CommandCTA
        label="NEXT ACTION / SPEAKING"
        title="Turn this case study into a conference talk."
        body="The public story is strong because it has both technical depth and executive relevance: how to move from impressive agent demos to inspected, evaluated, governed production systems."
        href="/speaking"
        action="Open speaking page"
      >
        <div className="flex items-center gap-3 text-sm text-slate-300">
          <GitBranch className="h-4 w-4 text-space-signal" />
          Architecture tradeoffs, reference layers, and operating principles can anchor a conference talk.
        </div>
      </CommandCTA>
    </div>
  );
}
