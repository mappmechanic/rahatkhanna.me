import type { Metadata } from "next";
import { BrainCircuit, Mail, Mic2, RadioTower, Rocket, Users } from "lucide-react";

import { CommandCTA, MissionPageHero, MissionRail, SignalMatrix } from "@/components/brand/mission-page";
import { HudFlipCards } from "@/components/brand/motion-system";
import { SectionShell, SignalBadge, SurfaceCard } from "@/components/brand/primitives";
import { SignalRibbon } from "@/components/brand/unique-elements";
import { speakingTopics } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Speaking",
  description: "Invite Rahat Khanna to speak about AI agent infrastructure, evaluation, observability, career reinvention, humanoids, and space autonomy.",
};

const speakingMetrics = [
  { label: "best fit", value: "AI agents", tone: "signal" as const },
  { label: "audience", value: "exec + builders", tone: "mint" as const },
  { label: "format", value: "keynote / panel", tone: "ember" as const },
  { label: "theme", value: "reliable autonomy", tone: "signal" as const },
];

const invitationSignals = [
  {
    label: "Conference organizers",
    value: "Clear abstracts",
    detail: "Talks are framed as practical operating systems for agent reliability and senior technical judgment.",
    icon: Mic2,
    tone: "signal" as const,
  },
  {
    label: "AI startups",
    value: "Executive relevance",
    detail: "The material connects technical depth to trust, cost, product risk, and enterprise adoption.",
    icon: Rocket,
    tone: "mint" as const,
  },
  {
    label: "Labs and teams",
    value: "Systems credibility",
    detail: "The perspective spans agent traces, evals, guardrails, memory, and human escalation.",
    icon: BrainCircuit,
    tone: "ember" as const,
  },
  {
    label: "Students",
    value: "Human inspiration",
    detail: "The career story becomes a useful path, not just a motivational anecdote.",
    icon: Users,
    tone: "signal" as const,
  },
];

export default function SpeakingPage() {
  return (
    <div className="space-field min-h-screen">
      <MissionPageHero
        eyebrow="Speaking / AI agent conferences"
        title="Talks for the builders and leaders moving from demo AI to reliable autonomy."
        intro="The speaking surface makes the invitation easy: crisp topics, clear audience fit, executive relevance, and a memorable systems point of view."
        metrics={speakingMetrics}
        primaryCta={{ label: "Send invitation", href: "mailto:hello@rahatkhanna.me?subject=Speaking%20Invitation" }}
        secondaryCta={{ label: "Read flagship case", href: "/projects/agent-observability" }}
      />

      <SectionShell
        eyebrow="Talk launch console"
        title="Three talks, each with a different mission profile."
        intro="The topics are arranged like launch paths so conference organizers can immediately see which audience each one serves."
      >
        <MissionRail
          items={speakingTopics.map((topic, index) => ({
            label: `TALK-${String(index + 1).padStart(2, "0")}`,
            title: topic.title,
            body: topic.body,
            meta: topic.audience,
          }))}
        />
        <SignalRibbon items={["Agent conferences", "Engineering leadership", "AI startup summits", "Universities", "Developer communities"]} />
      </SectionShell>

      <SectionShell title="Invitation Signals" intro="This is what the page should communicate before anyone reads every word." className="bg-black/20">
        <SignalMatrix items={invitationSignals} />
      </SectionShell>

      <SectionShell title="Speaker Bio and Promise" intro="Short and long bio variants can be copied into conference CFPs and event pages.">
        <div className="grid gap-5 md:grid-cols-2">
          <SurfaceCard>
            <SignalBadge>Short bio</SignalBadge>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Rahat Khanna is a Staff Software Engineer focused on AI agent infrastructure, evaluation, observability, and enterprise-ready autonomy. His work bridges Apple-scale platform engineering, founder experience, and a long-term thesis across agents, humanoids, and space.
            </p>
          </SurfaceCard>
          <SurfaceCard>
            <SignalBadge>Audience promise</SignalBadge>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Audiences leave with practical patterns for moving from impressive AI demos to reliable systems: traces, evals, guardrails, supervision, cost visibility, and leadership judgment.
            </p>
          </SurfaceCard>
        </div>
        <div className="mt-8">
          <HudFlipCards />
        </div>
      </SectionShell>

      <CommandCTA
        label="BOOKING PATH / DIRECT SIGNAL"
        title="Invite Rahat to speak."
        body="Best fit: AI agent infrastructure, developer tools, engineering leadership, startup AI strategy, and student inspiration events."
        href="mailto:hello@rahatkhanna.me?subject=Speaking%20Invitation"
        action="Send invitation"
      >
        <div className="flex items-center gap-3 text-sm text-slate-300">
          <RadioTower className="h-4 w-4 text-space-signal" />
          Include audience, event date, format, and the strongest talk fit.
          <Mail className="h-4 w-4 text-space-mint" />
        </div>
      </CommandCTA>
    </div>
  );
}
