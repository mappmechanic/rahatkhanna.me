import type { Metadata } from "next";
import { BrainCircuit, Cpu, ExternalLink, LineChart, Orbit, ShieldCheck } from "lucide-react";

import { CommandCTA, SignalMatrix } from "@/components/brand/mission-page";
import { SectionShell, SignalBadge, SurfaceCard } from "@/components/brand/primitives";
import { SignalRibbon } from "@/components/brand/unique-elements";
import { profileHighlights, sitePrinciples, systems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected case studies and shipped systems from Rahat Khanna across AI agents, Apple-scale platforms, ecommerce, and fintech.",
};

const shippedProducts = [
  {
    title: "Apple Music on the Web",
    href: "https://music.apple.com",
    label: "PLATFORM / MEDIA",
    body: "Global consumer media experience and platform work across Apple Music.",
    context: "Apple Media Products",
  },
  {
    title: "Apple Podcasts Connect",
    href: "https://podcastsconnect.apple.com",
    label: "CREATOR / BUSINESS",
    body: "Creator and business tooling for podcasters managing shows and pricing.",
    context: "Creator tooling",
  },
  {
    title: "100 Best Albums",
    href: "https://100best.music.apple.com",
    label: "EDITORIAL / LAUNCH",
    body: "High-visibility Apple Music web experience supporting a flagship editorial moment.",
    context: "Public launch",
  },
  {
    title: "Flipkart Post-Order Systems",
    href: "https://flipkart.com",
    label: "COMMERCE / OPS",
    body: "Customer and operator-facing commerce systems at India’s largest ecommerce platform.",
    context: "Flipkart scale",
  },
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
      <SectionShell
        eyebrow="Shipped product scale"
        title="Public products and platforms that prove product judgment at scale."
        intro="These are selected public contexts from the pre-AI chapter: media, creator tooling, editorial launches, and commerce operations. The implementation details stay private; the product surfaces show the arena."
        className="pt-32 md:pt-36"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {shippedProducts.map((product, index) => (
            <a key={product.title} href={product.href} target="_blank" rel="noopener noreferrer" className="group block">
              <SurfaceCard className="relative h-full overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:border-space-signal/45 hover:shadow-signal">
                <div className="absolute inset-0 space-grid opacity-25" />
                <div className="relative z-10 flex h-full flex-col justify-between gap-8 p-6 md:min-h-[300px]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mission text-xs text-space-signal">{product.label}</p>
                      <p className="mt-2 text-sm text-space-ember">{product.context}</p>
                    </div>
                    <span className="font-mission text-5xl font-semibold text-white/10">0{index + 1}</span>
                  </div>
                  <div>
                    <h2 className="max-w-xl text-3xl font-semibold text-white">{product.title}</h2>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">{product.body}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-space-signal">
                    Open public product <ExternalLink className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </SurfaceCard>
            </a>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-300">
          <SignalBadge>Selected public context</SignalBadge>
          Public links show product context; proprietary architecture and employer-specific details stay private.
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Portfolio signal map"
        title="Four operating domains, one reliability thesis."
        intro="Each domain shows a different proof point: building autonomous systems, shipping at scale, thinking about embodied risk, and studying mission-grade reliability."
      >
        <SignalMatrix items={portfolioSignals} />
        <SignalRibbon items={sitePrinciples} />
      </SectionShell>

      <SectionShell
        title="Dated Profile Highlights"
        intro="The proof points make more sense as a career timeline: founder execution, fintech scale, enterprise and commerce systems, Apple-scale platforms, and the current AI infrastructure chapter."
        className="bg-black/20"
      >
        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-space-line/30 md:block" />
          <div className="space-y-5">
            {profileHighlights.map((highlight, index) => (
              <div key={highlight.title} className="relative grid gap-4 md:grid-cols-[9rem_1fr] md:pl-12">
                <div className="hidden md:block">
                  <div className="absolute left-[0.68rem] top-7 h-3 w-3 rounded-full border border-space-signal bg-space-void shadow-signal" />
                  <p className="font-mission pt-5 text-sm text-space-signal">{highlight.years}</p>
                </div>
                <SurfaceCard className="mission-node border-space-line/25 bg-black/20">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-2xl">
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="font-mission text-xs text-space-signal">{highlight.label}</p>
                        <SignalBadge className="md:hidden">{highlight.years}</SignalBadge>
                      </div>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{highlight.title}</h3>
                      <p className="mt-2 text-sm text-space-ember">{highlight.meta}</p>
                    </div>
                    <p className="max-w-2xl text-sm leading-7 text-slate-300">{highlight.body}</p>
                    <span className="font-mission hidden text-xs text-slate-500 xl:block">ARC-{String(index + 1).padStart(2, "0")}</span>
                  </div>
                </SurfaceCard>
              </div>
            ))}
          </div>
        </div>
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
