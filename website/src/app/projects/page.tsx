import type { Metadata } from "next";
import { BrainCircuit, Cpu, ExternalLink, LineChart, Orbit, ShieldCheck } from "lucide-react";

import { CommandCTA, MissionPageHero, MissionRail, SignalMatrix } from "@/components/brand/mission-page";
import { SectionShell, SignalBadge } from "@/components/brand/primitives";
import { HudFlipCards } from "@/components/brand/motion-system";
import { SignalRibbon } from "@/components/brand/unique-elements";
import { careerArc, sitePrinciples, systems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Sanitized case studies and shipped systems from Rahat Khanna across AI agents, Apple-scale platforms, ecommerce, and fintech.",
};

const shippedProducts = [
  {
    title: "Apple Music on the Web",
    href: "https://music.apple.com",
    label: "PLATFORM / MEDIA",
    body: "Global consumer media experience and platform work across Apple Music.",
  },
  {
    title: "Apple Podcasts Connect",
    href: "https://podcastsconnect.apple.com",
    label: "CREATOR / BUSINESS",
    body: "Creator and business tooling for podcasters managing shows and pricing.",
  },
  {
    title: "100 Best Albums",
    href: "https://100best.music.apple.com",
    label: "EDITORIAL / LAUNCH",
    body: "High-visibility Apple Music web experience supporting a flagship editorial moment.",
  },
  {
    title: "Flipkart Post-Order Systems",
    href: "https://flipkart.com",
    label: "COMMERCE / OPS",
    body: "Customer and operator-facing commerce systems at India’s largest ecommerce platform.",
  },
];

const projectMetrics = [
  { label: "flagship case", value: "agent evals", tone: "signal" as const },
  { label: "scale chapter", value: "Apple web", tone: "mint" as const },
  { label: "founder proof", value: "300+ builds", tone: "ember" as const },
  { label: "public rule", value: "sanitized", tone: "signal" as const },
];

const portfolioSignals = [
  {
    label: "AI systems",
    value: "Agent reliability",
    detail: "Observability, evaluation, guardrails, traces, and human escalation for production autonomy.",
    icon: BrainCircuit,
    tone: "signal" as const,
  },
  {
    label: "Platform scale",
    value: "Media and commerce",
    detail: "High-traffic product surfaces, operational systems, and cross-functional web platforms.",
    icon: LineChart,
    tone: "mint" as const,
  },
  {
    label: "Embodied future",
    value: "Humanoid ops",
    detail: "The same reliability stack becomes more urgent when autonomy touches the physical world.",
    icon: Cpu,
    tone: "ember" as const,
  },
  {
    label: "Mission horizon",
    value: "Space systems",
    detail: "Delayed feedback and mission assurance sharpen the philosophy behind trustworthy agents.",
    icon: Orbit,
    tone: "signal" as const,
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-field min-h-screen">
      <MissionPageHero
        eyebrow="Projects / public-safe dossier"
        title="A systems portfolio shaped like mission control, not a resume archive."
        intro="The work is framed around transferable architecture patterns: agent observability, evaluation, supervision, high-scale product judgment, and the reliability stack that will matter for embodied and mission-grade autonomy."
        metrics={projectMetrics}
        primaryCta={{ label: "Open flagship case", href: "/projects/agent-observability" }}
        secondaryCta={{ label: "See long-term vision", href: "/vision" }}
      />

      <SectionShell
        eyebrow="Portfolio signal map"
        title="Four operating domains, one reliability thesis."
        intro="Each domain shows a different proof point: building autonomous systems, shipping at scale, thinking about embodied risk, and studying mission-grade reliability."
      >
        <SignalMatrix items={portfolioSignals} />
        <SignalRibbon items={sitePrinciples} />
      </SectionShell>

      <SectionShell
        title="Flagship Case Modules"
        intro="The flagship case study should feel like a cockpit: traces, eval gates, policy locks, and supervision surfaces instead of a flat project description."
        className="bg-black/20"
      >
        <HudFlipCards />
      </SectionShell>

      <SectionShell title="Shipped Product Scale" intro="The pre-AI chapter proves product judgment, platform ownership, and operational scale before the agent infrastructure chapter.">
        <MissionRail
          items={shippedProducts.map((product) => ({
            label: product.label,
            title: product.title,
            body: product.body,
            meta: "public product surface",
            href: product.href,
            external: true,
          }))}
        />
        <div className="mt-8 flex items-center gap-3 text-sm text-slate-300">
          <SignalBadge>Confidentiality boundary</SignalBadge>
          <ExternalLink className="h-4 w-4 text-space-signal" />
          Public links show product context only; internal architecture stays private.
        </div>
      </SectionShell>

      <SectionShell title="Career Trajectory" intro="The story behind the work is no longer a static timeline; it is a progression of operating environments.">
        <MissionRail
          items={careerArc.map((item, index) => ({
            label: `ARC-0${index + 1} / ${item.years}`,
            title: item.title,
            body: item.body,
            meta: item.era,
          }))}
        />
      </SectionShell>

      <CommandCTA
        label="NEXT ACTION / CASE STUDY"
        title="Open the agent observability cockpit."
        body="The flagship case study turns the portfolio into a concrete executive signal: how Rahat thinks about traces, evals, guardrails, escalation, and trustworthy agent operations."
        href="/projects/agent-observability"
        action="Open case study"
      >
        <div className="flex flex-wrap gap-2">
          {systems[0].tags.map((tag) => (
            <SignalBadge key={tag}>
              <ShieldCheck className="mr-2 h-3.5 w-3.5" />
              {tag}
            </SignalBadge>
          ))}
        </div>
      </CommandCTA>
    </div>
  );
}
