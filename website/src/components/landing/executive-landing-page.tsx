"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { CommandCTA, MissionRail, SignalMatrix } from "@/components/brand/mission-page";
import { MissionControlHud } from "@/components/brand/mission-control-kit";
import { SectionShell } from "@/components/brand/primitives";
import { SpaceMotionScene } from "@/components/brand/space-motion-scene";
import { AutonomyConstellation, SignalRibbon } from "@/components/brand/unique-elements";
import { careerArc, contactChannels, metrics, profileHighlights, sitePrinciples, speakingTopics, systems, thesisCards, writingPosts } from "@/lib/site-data";

export function ExecutiveLandingPage() {
  return (
    <div className="space-field">
      <SpaceMotionScene mode="hero" />

      <SectionShell
        id="thesis"
        eyebrow="AI systems thesis"
        title="The future belongs to autonomous systems people can inspect, trust, and improve."
        intro="My work sits at the intersection of agents, humanoids, and space: three domains where autonomy is only valuable when it is observable, governed, and resilient."
      >
        <AutonomyConstellation items={thesisCards} />
        <SignalRibbon items={sitePrinciples} />
      </SectionShell>

      <SectionShell
        id="arc"
        eyebrow="The arc"
        title="Founder roots, Apple-scale platforms, then the post-AI world."
        intro="My journey connects founder speed, platform-scale engineering, and the technical pattern that matters now: making autonomous work reliable at scale."
        className="bg-black/20"
      >
        <MissionRail
          items={careerArc.map((item, index) => ({
            label: `ARC-0${index + 1} / ${item.years}`,
            title: item.title,
            body: item.body,
            meta: item.era,
          }))}
        />
      </SectionShell>

      <SectionShell
        id="profile"
        eyebrow="Profile highlights"
        title="Real proof points behind the AI systems thesis."
        intro="The public story should not feel abstract. It comes from founder execution, fintech scale, enterprise systems, Flipkart commerce, Apple platforms, AI infrastructure, and mentorship."
      >
        <MissionRail items={profileHighlights} />
      </SectionShell>

      <SectionShell
        id="build"
        eyebrow="What I build"
        title="A selected portfolio of systems thinking."
        intro="The work is framed around transferable architecture patterns: traces, evals, supervision, memory, policy, and high-scale product engineering."
      >
        <SignalMatrix
          items={systems.map((system) => ({
            label: system.label ?? "system",
            value: system.title,
            detail: system.body,
            icon: system.icon,
            tone: system.title.includes("Apple") ? "ember" : "signal",
          }))}
        />
      </SectionShell>

      <SectionShell
        id="mission-control"
        eyebrow="Mission control"
        title="Reliable autonomy needs a control surface."
        intro="Agent fleets, guardrails, eval loops, human escalation, and future humanoid or space systems all need the same operating grammar: know what happened, why it happened, and when a human should intervene."
        className="bg-black/20"
      >
        <MissionControlHud />
      </SectionShell>

      <SectionShell
        id="speaking"
        eyebrow="Speaking"
        title="Conference-ready talks for the agent infrastructure era."
        intro="These topics are designed for AI agent conferences, labs, startup summits, universities, and engineering leadership communities."
      >
        <MissionRail
          items={speakingTopics.map((topic, index) => ({
            label: `TALK-0${index + 1}`,
            title: topic.title,
            body: topic.body,
            meta: topic.audience,
          }))}
        />
        <Link href="/speaking" className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-100">
          View speaker profile <ArrowRight className="h-4 w-4" />
        </Link>
      </SectionShell>

      <SectionShell
        id="writing"
        eyebrow="Thought leadership"
        title="Essays on agents, autonomy, and human ambition."
        intro="The writing hub gives founders, builders, labs, and conference organizers a clear view into how I think about the future."
      >
        <MissionRail
          items={writingPosts.map((post, index) => ({
            label: `ESSAY-0${index + 1}`,
            title: post.title,
            body: post.summary,
            meta: "essay direction",
            href: post.href,
          }))}
        />
        <Link href="/vision#writing" className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-100">
          Read essay directions <ArrowRight className="h-4 w-4" />
        </Link>
      </SectionShell>

      <SectionShell
        id="impact"
        eyebrow="Impact"
        title="Signals that speak to executives, labs, and the next generation."
        intro="This is the credibility layer: shipped scale, Staff-level judgment, founder range, and mentorship."
        className="bg-black/20"
      >
        <SignalMatrix
          items={metrics.map((metric) => ({
            label: metric.label,
            value: metric.value,
            detail: "Public credibility signal",
            tone: metric.value === "Staff" ? "mint" : metric.value.includes("300") ? "ember" : "signal",
          }))}
        />
      </SectionShell>

      <CommandCTA
        label="OPEN TO / SENIOR AI LEADERSHIP, LABS, AND SPEAKING"
        title="Bring me into the room where reliable autonomy is being shaped."
        body="Best fit: senior AI infrastructure leadership, AI agent conference speaking, founder and lab advisory, and mentorship for ambitious young technologists."
        href={contactChannels.generalHref}
        action="Start a conversation"
      >
        <div className="grid gap-3 md:grid-cols-2">
          {["Senior AI infrastructure leadership", "AI agent conference speaking", "Founder and lab advisory", "Young technologist mentorship"].map((item) => (
            <div key={item} className="hud-cell flex gap-3 border border-space-line/25 bg-black/20 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-space-mint" />
              <span className="text-sm leading-6 text-slate-200">{item}</span>
            </div>
          ))}
        </div>
      </CommandCTA>
    </div>
  );
}
