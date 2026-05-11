import type { Metadata } from "next";
import { Mail, Mic2, Users } from "lucide-react";

import { SectionShell, SignalBadge, SurfaceCard } from "@/components/brand/primitives";
import { speakingTopics } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Speaking",
  description: "Invite Rahat Khanna to speak about AI agent infrastructure, evaluation, observability, career reinvention, humanoids, and space autonomy.",
};

export default function SpeakingPage() {
  return (
    <div className="space-field min-h-screen pt-24">
      <SectionShell
        eyebrow="Speaking"
        title="Talks for AI agent conferences, labs, startups, and universities."
        intro="The goal is to make the invitation easy: clear topics, clear audience fit, clear credibility, and a direct path to reach out."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {speakingTopics.map((topic) => (
            <SurfaceCard key={topic.title} className="flex h-full flex-col">
              <Mic2 className="mb-5 h-7 w-7 text-space-signal" />
              <h2 className="text-xl font-semibold text-white">{topic.title}</h2>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">{topic.body}</p>
              <p className="mt-5 text-sm text-space-ember">{topic.audience}</p>
            </SurfaceCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell title="Speaker Bio" intro="Short and long bio variants can be copied into conference CFPs and event pages." className="bg-black/20">
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
      </SectionShell>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SurfaceCard className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <Users className="mb-5 h-7 w-7 text-space-mint" />
              <h2 className="text-3xl font-semibold text-white">Invite Rahat to speak</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Best fit: AI agent infrastructure, developer tools, engineering leadership, startup AI strategy, and student inspiration events.
              </p>
            </div>
            <a href="mailto:hello@rahatkhanna.me?subject=Speaking%20Invitation" className="inline-flex items-center justify-center gap-2 rounded-md bg-space-signal px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
              Send invitation <Mail className="h-4 w-4" />
            </a>
          </SurfaceCard>
        </div>
      </section>
    </div>
  );
}
