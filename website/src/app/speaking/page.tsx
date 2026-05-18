import type { Metadata } from "next";
import { BrainCircuit, ExternalLink, LockKeyhole, Mail, Mic2, RadioTower, Rocket, Users, Youtube } from "lucide-react";

import { CommandCTA, MissionRail, SignalMatrix } from "@/components/brand/mission-page";
import { SectionShell, SignalBadge, SurfaceCard } from "@/components/brand/primitives";
import { SignalRibbon } from "@/components/brand/unique-elements";
import { contactChannels, internalTalkNote, publicAppearances, speakingTopics } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Speaking",
  description: "Invite Rahat Khanna to speak about AI agent infrastructure, evaluation, observability, career reinvention, humanoids, and space autonomy.",
};

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

const audienceTakeaways = [
  {
    title: "A clearer mental model for production agents",
    body: "Why the shift from demo AI to deployed autonomy depends on observability, evaluation, guardrails, and escalation.",
  },
  {
    title: "Practical language for executive decisions",
    body: "How leaders can discuss agent quality, cost, risk, and adoption without getting lost in hype or implementation detail.",
  },
  {
    title: "A human story of technical reinvention",
    body: "How founder roots, Apple-scale systems, and the AI shift can inspire builders to take larger swings.",
  },
];

const speakerBios = [
  {
    label: "Short bio",
    body: "Rahat Khanna is a Staff Software Engineer focused on AI agent infrastructure, evaluation, observability, and enterprise-ready autonomy. His work spans founder/CTO execution, Flipkart-scale commerce systems, Apple-scale web platforms, and production AI reliability patterns. He speaks about moving from demo AI to trustworthy autonomous systems.",
  },
  {
    label: "Medium bio",
    body: "Rahat Khanna is a Staff Software Engineer focused on making AI agents reliable, observable, and enterprise-ready. His career spans founder and CTO work, fintech infrastructure, enterprise transformation, Flipkart-scale commerce systems, and Apple-scale web platforms across ads and media products. His current thesis is that production AI needs a reliability stack: traces, evals, guardrails, supervision, cost visibility, and human escalation. Rahat speaks to builders, executives, and students about the shift from impressive AI demos to inspectable autonomous systems, and about how young technologists can build durable careers in the AI era.",
  },
  {
    label: "Extended bio",
    body: "Rahat Khanna is a Staff Software Engineer focused on AI agent infrastructure, evaluation, observability, guardrails, and enterprise-ready autonomy. His career began as a founder and CTO, building hundreds of websites and enterprise applications and helping architect fintech infrastructure that handled large-scale transaction volume. He later worked across enterprise transformation, Flipkart-scale commerce systems, and Apple-scale web platforms for ads and media products. Rahat's current work and public thesis center on the reliability layer for autonomous systems: traces, evals, memory, tool policy, supervision, cost and latency visibility, and human escalation. He is interested in the intersection of AI agents, humanoids, space, and human potential because each domain raises the same question: how do we trust autonomous systems when the stakes keep increasing? His talks connect technical depth, executive judgment, and an honest career story for ambitious young technologists.",
  },
];

const talkAbstracts = [
  {
    title: "Production AI Is Nothing Like Demo AI",
    audience: "AI agent conferences, applied AI summits, engineering leadership teams",
    abstract:
      "A practical talk on the gap between impressive agent demos and production-grade autonomy. The core argument: agents become useful only when their behavior is observable, evaluable, governed, and easy to escalate to humans.",
    takeaways: ["Trace-first operations", "Evaluation as risk language", "Human escalation as product surface"],
  },
  {
    title: "The New Staff Engineer: Architect, Evaluator, Operator",
    audience: "AI labs, engineering organizations, universities, founder communities",
    abstract:
      "A leadership talk on how senior engineers create leverage when AI writes more code. The role shifts from only building features to designing systems of judgment: harnesses, evals, policies, workflows, and feedback loops.",
    takeaways: ["Leverage through system design", "Evaluation-first leadership", "Mentorship during the AI shift"],
  },
  {
    title: "From India Founder to Apple Staff Engineer",
    audience: "Universities, developer communities, early-career technologists",
    abstract:
      "A human and technical story about reinvention: founder roots, high-scale systems, Apple-scale platform work, and the current AI infrastructure chapter. The talk is designed to make ambitious technical growth feel reachable and practical.",
    takeaways: ["Career reinvention patterns", "Founder-to-platform lessons", "Building confidence through real systems"],
  },
];

export default function SpeakingPage() {
  return (
    <div className="space-field min-h-screen">
      <SectionShell
        eyebrow="Talk topics"
        title="Three talks, each with a different mission profile."
        intro="The topics are arranged like launch paths so conference organizers can immediately see which audience each one serves."
        className="pt-32 md:pt-36"
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

      <SectionShell title="Why Invite Rahat" intro="The strongest talks combine AI systems depth, executive relevance, and a human story that makes ambition feel reachable." className="bg-black/20">
        <SignalMatrix items={invitationSignals} />
      </SectionShell>

      <SectionShell
        title="Podcasts and Public Talks"
        intro="A public archive of podcasts and earlier technical talks. More recent conference talks from the Apple chapter are intentionally not posted publicly."
      >
        <div className="mb-6 flex items-start gap-3 rounded-md border border-space-ember/30 bg-space-ember/10 p-4 text-sm leading-6 text-slate-200">
          <LockKeyhole className="mt-0.5 h-5 w-5 shrink-0 text-space-ember" />
          <p>{internalTalkNote}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {publicAppearances.map((appearance) => (
            <a key={appearance.title} href={appearance.href} target="_blank" rel="noopener noreferrer" className="group block">
              <SurfaceCard className="h-full transition duration-300 hover:-translate-y-1 hover:border-space-signal/45 hover:shadow-signal">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md border border-space-line/40 bg-space-signal/10 text-space-signal">
                    <Youtube className="h-5 w-5" />
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-500 transition group-hover:translate-x-1 group-hover:text-space-signal" />
                </div>
                <p className="font-mission mt-6 text-xs text-space-signal">{appearance.label}</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">{appearance.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">{appearance.body}</p>
              </SurfaceCard>
            </a>
          ))}
        </div>
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
          <MissionRail
            items={audienceTakeaways.map((item, index) => ({
              label: `TAKEAWAY-0${index + 1}`,
              title: item.title,
              body: item.body,
            }))}
            stagger={false}
          />
        </div>
      </SectionShell>

      <SectionShell
        title="Speaker Kit Copy"
        intro="Public-safe bio variants for event pages, CFP submissions, podcast intros, and university programs."
        className="bg-black/20"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {speakerBios.map((bio) => (
            <SurfaceCard key={bio.label}>
              <SignalBadge>{bio.label}</SignalBadge>
              <p className="mt-5 text-sm leading-7 text-slate-300">{bio.body}</p>
            </SurfaceCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        title="Talk Abstracts"
        intro="Each abstract is framed for organizers who need a clear title, audience fit, and practical audience takeaways."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {talkAbstracts.map((talk, index) => (
            <SurfaceCard key={talk.title}>
              <SignalBadge>TALK ABSTRACT 0{index + 1}</SignalBadge>
              <h2 className="mt-5 text-2xl font-semibold text-white">{talk.title}</h2>
              <p className="mt-3 text-sm text-space-ember">{talk.audience}</p>
              <p className="mt-5 text-sm leading-7 text-slate-300">{talk.abstract}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {talk.takeaways.map((takeaway) => (
                  <SignalBadge key={takeaway}>{takeaway}</SignalBadge>
                ))}
              </div>
            </SurfaceCard>
          ))}
        </div>
      </SectionShell>

      <CommandCTA
        label="BOOKING PATH / DIRECT SIGNAL"
        title="Invite Rahat to speak."
        body="Best fit: AI agent infrastructure, developer tools, engineering leadership, startup AI strategy, and student inspiration events."
        href={contactChannels.speakingHref}
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
