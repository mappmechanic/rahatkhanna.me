import type { Metadata } from "next";
import { BookOpen, BrainCircuit, Gauge, Orbit, Rss } from "lucide-react";

import { CommandCTA, MissionPageHero, MissionRail, SignalMatrix } from "@/components/brand/mission-page";
import { HudLoaders, HudRevealTransitions } from "@/components/brand/motion-system";
import { SectionShell, SignalBadge } from "@/components/brand/primitives";
import { SignalRibbon } from "@/components/brand/unique-elements";
import { writingPosts } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Writing",
  description: "Thought leadership from Rahat Khanna on AI agents, observability, evaluation, humanoids, space, and engineering careers.",
};

const writingMetrics = [
  { label: "editorial mode", value: "thesis lab", tone: "signal" as const },
  { label: "launch queue", value: "3 essays", tone: "mint" as const },
  { label: "reader fit", value: "exec + builder", tone: "ember" as const },
  { label: "publish gate", value: "planned", tone: "signal" as const },
];

const editorialSignals = [
  {
    label: "Agent reliability",
    value: "Systems lens",
    detail: "Explain why traces, evals, supervision, and policy are the bottleneck for enterprise autonomy.",
    icon: BrainCircuit,
    tone: "signal" as const,
  },
  {
    label: "Evaluation systems",
    value: "Operator lens",
    detail: "Translate quality, cost, latency, and task success into executive decision surfaces.",
    icon: Gauge,
    tone: "mint" as const,
  },
  {
    label: "Frontier autonomy",
    value: "Long horizon",
    detail: "Connect agents, humanoids, and space through mission-grade reliability patterns.",
    icon: Orbit,
    tone: "ember" as const,
  },
  {
    label: "Career reinvention",
    value: "Human path",
    detail: "Make the ambition usable for young technologists without losing technical seriousness.",
    icon: Rss,
    tone: "signal" as const,
  },
];

export default function WritingPage() {
  return (
    <div className="space-field min-h-screen">
      <MissionPageHero
        eyebrow="Writing / thought-leadership engine"
        title="A publication system for the reliability era of AI agents."
        intro="Writing should turn Rahat's operating thesis into industry signal: executive-readable, technically specific, and useful enough for builders to reuse."
        metrics={writingMetrics}
        primaryCta={{ label: "Read the vision spine", href: "/vision" }}
        secondaryCta={{ label: "See speaking topics", href: "/speaking" }}
      />

      <SectionShell
        eyebrow="Launch queue"
        title="Essays should feel like mission briefs, not a blog archive."
        intro="Each piece has a clear operating question, a technical claim, and a bridge to the long-term agents, humanoids, and space thesis."
      >
        <MissionRail
          items={writingPosts.map((post, index) => ({
            label: `ESSAY-${String(index + 1).padStart(2, "0")} / OUTLINE READY`,
            title: post.title,
            body: post.summary,
            meta: index === 0 ? "enterprise AI" : index === 1 ? "agent evaluation" : "frontier autonomy",
            href: post.href,
          }))}
        />
      </SectionShell>

      <SectionShell title="Editorial Control Plane" intro="The content system needs reusable states: drafting, validating, polishing, and publishing. The design system now has subtle loaders and reveal states for those workflows." className="bg-black/20">
        <HudLoaders />
      </SectionShell>

      <SectionShell title="Editorial Pillars" intro="The site should publish essays that create signal for executives, labs, conferences, and younger technologists.">
        <SignalMatrix items={editorialSignals} />
        <SignalRibbon items={["Agent traces", "Evaluation metrics", "Human oversight", "Humanoid reliability", "Space autonomy"]} />
        <div className="mt-8">
          <HudRevealTransitions />
        </div>
      </SectionShell>

      <CommandCTA
        label="NEXT ACTION / PUBLICATION SYSTEM"
        title="Turn the vision into a visible publishing cadence."
        body="The writing hub is structured for MDX essays later. The immediate goal is to make each planned article feel like part of a coherent industry thesis."
        href="/vision"
        action="Open vision page"
      >
        <div className="flex flex-wrap gap-2">
          {["MDX-ready", "SEO-ready", "Conference-ready"].map((tag) => (
            <SignalBadge key={tag}>
              <BookOpen className="mr-2 h-3.5 w-3.5" />
              {tag}
            </SignalBadge>
          ))}
        </div>
      </CommandCTA>
    </div>
  );
}
