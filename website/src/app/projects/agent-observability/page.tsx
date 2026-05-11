import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, GitBranch, ShieldAlert, Telescope } from "lucide-react";

import { SectionShell, SignalBadge, SurfaceCard } from "@/components/brand/primitives";

export const metadata: Metadata = {
  title: "Agent Observability & Evaluation",
  description: "A sanitized AI agent infrastructure case study covering observability, evaluation, supervision, and guardrails.",
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

export default function AgentObservabilityPage() {
  return (
    <div className="space-field min-h-screen pt-24">
      <SectionShell
        eyebrow="Sanitized case study"
        title="Agent Observability & Evaluation Platform"
        intro="A public-safe breakdown of the systems thinking behind production agent reliability. No proprietary Apple implementation details are disclosed."
      >
        <div className="grid gap-5 lg:grid-cols-[1fr_.8fr]">
          <SurfaceCard>
            <SignalBadge>Problem</SignalBadge>
            <h2 className="mt-5 text-3xl font-semibold text-white">Agents fail in ways traditional software dashboards cannot explain.</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Long-horizon agents need inspection across plans, tool calls, intermediate reasoning artifacts, constraints, escalations, cost, latency, and final task quality. The core challenge is turning messy autonomous behavior into reliable operational signals.
            </p>
          </SurfaceCard>
          <SurfaceCard>
            <SignalBadge>Outcome pattern</SignalBadge>
            <div className="mt-6 grid gap-3">
              {["Measurable task success", "Replayable execution graphs", "LLM quality scoring", "Human-in-the-loop oversight", "Policy-aware tool boundaries"].map((item) => (
                <div key={item} className="flex gap-3 rounded-md border border-space-line/25 bg-black/20 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-space-mint" />
                  <span className="text-sm leading-6 text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </SurfaceCard>
        </div>
      </SectionShell>

      <SectionShell title="Reference Architecture" intro="This is intentionally abstract. It explains the shape of the reliability system without revealing internal services, data, or implementation specifics." className="bg-black/20">
        <SurfaceCard>
          <div className="grid gap-4 md:grid-cols-4">
            {stackLayers.map((layer, index) => (
              <div key={layer} className="relative rounded-md border border-space-line/25 bg-black/20 p-4">
                <p className="text-sm text-space-signal">Layer {index + 1}</p>
                <h2 className="mt-3 text-base font-semibold text-white">{layer}</h2>
              </div>
            ))}
          </div>
        </SurfaceCard>
      </SectionShell>

      <SectionShell title="Decision Log" intro="This is the Staff+ layer: not just what was built, but which tradeoffs mattered.">
        <div className="grid gap-5 md:grid-cols-3">
          {decisionLog.map((decision) => (
            <SurfaceCard key={decision.title}>
              <GitBranch className="mb-5 h-7 w-7 text-space-signal" />
              <h2 className="text-xl font-semibold text-white">{decision.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{decision.body}</p>
            </SurfaceCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell title="What I Would Present Publicly" intro="The case study is designed to help senior executives, labs, and conference organizers understand the thinking without needing confidential detail." className="bg-black/20">
        <div className="grid gap-5 md:grid-cols-2">
          <SurfaceCard>
            <ShieldAlert className="mb-5 h-7 w-7 text-space-ember" />
            <h2 className="text-xl font-semibold text-white">Confidentiality boundary</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Public content stays at the level of patterns, architecture categories, metrics philosophy, and operational lessons. Internal names, numbers, unreleased capabilities, and proprietary diagrams stay out.
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
        <Link href="/speaking" className="mt-8 inline-flex items-center gap-2 rounded-md bg-space-signal px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
          Turn this into a talk <ArrowRight className="h-4 w-4" />
        </Link>
      </SectionShell>
    </div>
  );
}
