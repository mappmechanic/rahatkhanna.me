import type { Metadata } from "next";

import { CommandCTA, MissionPageHero } from "@/components/brand/mission-page";
import { MissionControlHud } from "@/components/brand/mission-control-kit";
import { HudRevealTransitions } from "@/components/brand/motion-system";
import { PersonalOSComponentMap, PersonalOSConsole } from "@/components/brand/personal-os";
import { SectionShell, SignalBadge } from "@/components/brand/primitives";
import { SignalRibbon } from "@/components/brand/unique-elements";

export const metadata: Metadata = {
  title: "Personal OS",
  description: "A future public and private mission-control dashboard for Rahat Khanna's life, work, writing, and AI agents.",
};

const osMetrics = [
  { label: "surface", value: "public + private", tone: "signal" as const },
  { label: "control plane", value: "agents", tone: "mint" as const },
  { label: "safety rule", value: "publish gate", tone: "ember" as const },
  { label: "current state", value: "prototype", tone: "signal" as const },
];

export default function PersonalOSPage() {
  return (
    <div className="space-field min-h-screen">
      <MissionPageHero
        eyebrow="Rahat OS / future vision"
        title="A public portfolio today. A private mission-control system tomorrow."
        intro="Rahat OS is the long-term product direction for the website: a public broadcast layer, private life cockpit, and AI agents control plane connected by privacy-aware publish gates."
        metrics={osMetrics}
        primaryCta={{ label: "Read agent memory", href: "/vision" }}
        secondaryCta={{ label: "See design system", href: "/design-system" }}
      />

      <SectionShell
        eyebrow="OS console"
        title="The website becomes a live operating layer."
        intro="The design system now includes public, private, and agents modes so future pages can expose live signals without leaking private life data."
      >
        <PersonalOSConsole />
        <SignalRibbon items={["Public broadcast", "Private vault", "Agent mission control", "Publish gate", "Audit trail"]} />
      </SectionShell>

      <SectionShell title="Agent Mission Control Layer" intro="The OS direction reuses the same HUD grammar as the portfolio: agent runs, evaluation gates, guardrails, and human override." className="bg-black/20">
        <MissionControlHud />
      </SectionShell>

      <SectionShell title="Future OS Modules" intro="These are the reusable surfaces the site can grow into over time. They should all honor the public/private boundary.">
        <PersonalOSComponentMap />
        <div className="mt-8">
          <HudRevealTransitions />
        </div>
      </SectionShell>

      <CommandCTA
        label="PRIVACY RULE / FUTURE BUILD"
        title="The OS can become live only after the boundary is real."
        body="Before connecting real personal data, future phases need authentication, redaction, audit logs, role-based visibility, and explicit approval before private or agent-generated material becomes public."
        href="/projects"
        action="Back to public portfolio"
      >
        <div className="flex flex-wrap gap-2">
          {["Auth first", "No private leak", "Human approval", "Audit everything"].map((tag) => (
            <SignalBadge key={tag}>{tag}</SignalBadge>
          ))}
        </div>
      </CommandCTA>
    </div>
  );
}
