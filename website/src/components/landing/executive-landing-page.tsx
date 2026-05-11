"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Mic2, Newspaper, Send } from "lucide-react";

import { IconCard, SectionShell, SignalBadge, SurfaceCard } from "@/components/brand/primitives";
import { SpaceMotionScene } from "@/components/brand/space-motion-scene";
import { AutonomyConstellation, SignalRibbon } from "@/components/brand/unique-elements";
import { careerArc, metrics, sitePrinciples, speakingTopics, systems, thesisCards, writingPosts } from "@/lib/site-data";

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55 },
};

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
        intro="The redesign preserves the human journey, but reorganizes it around the technical pattern that matters now: making autonomous work reliable at scale."
        className="bg-black/20"
      >
        <div className="grid gap-5 md:grid-cols-4">
          {careerArc.map((item, index) => (
            <motion.div key={item.title} {...reveal} transition={{ duration: 0.55, delay: index * 0.05 }}>
              <SurfaceCard className="relative h-full">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-sm text-space-ember">{item.years}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-space-line/40 text-sm text-space-signal">
                    {index + 1}
                  </span>
                </div>
                <p className="text-sm text-space-signal">{item.era}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.body}</p>
              </SurfaceCard>
            </motion.div>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="build"
        eyebrow="What I build"
        title="A public-safe portfolio of systems thinking."
        intro="Apple details stay sanitized. The site focuses on transferable architecture patterns: traces, evals, supervision, memory, policy, and high-scale product engineering."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {systems.map((system) => (
            <IconCard key={system.title} {...system} />
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="speaking"
        eyebrow="Speaking"
        title="Conference-ready talks for the agent infrastructure era."
        intro="The speaking page turns your resume into a clear invitation for AI agent conferences, labs, startup summits, and universities."
        className="bg-black/20"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {speakingTopics.map((topic) => (
            <SurfaceCard key={topic.title} className="flex h-full flex-col">
              <Mic2 className="mb-5 h-7 w-7 text-space-signal" />
              <h3 className="text-xl font-semibold text-white">{topic.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">{topic.body}</p>
              <p className="mt-5 text-sm text-space-ember">{topic.audience}</p>
            </SurfaceCard>
          ))}
        </div>
        <Link href="/speaking" className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-100">
          View speaker profile <ArrowRight className="h-4 w-4" />
        </Link>
      </SectionShell>

      <SectionShell
        id="writing"
        eyebrow="Thought leadership"
        title="A writing engine for long-term industry authority."
        intro="The initial writing system gives recruiters, founders, and conference organizers a clear view into how you think about the future."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {writingPosts.map((post) => (
            <Link href={post.href} key={post.title} className="block h-full">
              <SurfaceCard className="group h-full transition duration-300 hover:-translate-y-1 hover:border-space-signal/50">
                <Newspaper className="mb-5 h-7 w-7 text-space-signal" />
                <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{post.summary}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-space-signal">
                  Read direction <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </SurfaceCard>
            </Link>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="impact"
        eyebrow="Impact"
        title="Signals that speak to executives, labs, and the next generation."
        intro="This is the credibility layer: shipped scale, Staff-level judgment, founder range, and mentorship."
        className="bg-black/20"
      >
        <div className="grid gap-4 md:grid-cols-5">
          {metrics.map((metric) => (
            <SurfaceCard key={metric.label} className="p-5">
              <p className="text-3xl font-semibold text-white">{metric.value}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{metric.label}</p>
            </SurfaceCard>
          ))}
        </div>
      </SectionShell>

      <section id="contact" className="relative overflow-hidden px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[.9fr_1.1fr]">
          <div>
            <SignalBadge>Open to senior AI leadership, labs, and speaking</SignalBadge>
            <h2 className="mt-6 text-3xl font-semibold text-white md:text-5xl">Bring me into the room where reliable autonomy is being shaped.</h2>
          </div>
          <SurfaceCard>
            <div className="grid gap-4 md:grid-cols-2">
              {["Senior AI infrastructure leadership", "AI agent conference speaking", "Founder and lab advisory", "Young technologist mentorship"].map((item) => (
                <div key={item} className="flex gap-3 rounded-md border border-space-line/25 bg-black/20 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-space-mint" />
                  <span className="text-sm leading-6 text-slate-200">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="mailto:hello@rahatkhanna.me" className="inline-flex items-center justify-center gap-2 rounded-md bg-space-signal px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
                Start a conversation <Send className="h-4 w-4" />
              </a>
              <Link href="/vision" className="inline-flex items-center justify-center gap-2 rounded-md border border-space-line/50 px-5 py-3 text-sm font-semibold text-white transition hover:border-space-signal">
                Read the long-term vision
              </Link>
            </div>
          </SurfaceCard>
        </div>
      </section>
    </div>
  );
}
