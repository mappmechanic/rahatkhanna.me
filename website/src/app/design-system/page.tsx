import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MousePointer2, PlayCircle } from "lucide-react";

import { Eyebrow, SectionShell, SurfaceCard } from "@/components/brand/primitives";
import { FutureComponentMap, MissionControlHud } from "@/components/brand/mission-control-kit";
import { MotionSystemShowcase } from "@/components/brand/motion-system";
import { PersonalOSComponentMap, PersonalOSConsole } from "@/components/brand/personal-os";
import { SpaceMotionScene } from "@/components/brand/space-motion-scene";
import { AutonomyConstellation, DesignElementPrinciples, SignalRibbon, TrajectoryBands } from "@/components/brand/unique-elements";
import { designTokens, motionStates, thesisCards } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Design System",
  description: "Interactive design system for Rahat Khanna's AI executive portfolio redesign.",
};

export default function DesignSystemPage() {
  return (
    <div className="space-field min-h-screen">
      <section className="px-6 pb-14 pt-32 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Design System v1</Eyebrow>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            A subtle-space interface for AI executive credibility.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            This page is the review artifact before the final landing page: tokens, type, surfaces, motion states, and the animated hero pattern inspired by the tutorial workflow.
          </p>
        </div>
      </section>

      <SectionShell title="Color Tokens" intro="The palette keeps space present but quiet: dark foundation, AI blue signal, warm founder-history accents, and green verification states.">
        <div className="grid gap-4 md:grid-cols-3">
          {designTokens.map((token) => (
            <SurfaceCard key={token.name}>
              <div className="mb-5 h-24 rounded-md border border-white/10" style={{ background: token.value }} />
              <h2 className="text-xl font-semibold text-white">{token.name}</h2>
              <p className="mt-2 text-sm text-space-signal">{token.value}</p>
              <p className="mt-4 text-sm leading-6 text-slate-300">{token.usage}</p>
            </SurfaceCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell title="Typography and CTAs" intro="The design uses editorial hierarchy and compact action controls. It should feel like a serious AI systems dossier, not a marketing splash page.">
        <div className="grid gap-5 md:grid-cols-[1.1fr_.9fr]">
          <SurfaceCard>
            <p className="font-mission text-sm text-space-signal">Hero heading / Space Grotesk</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl">
              Reliable agents need observable infrastructure.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Body copy uses Manrope: modern, warm, and readable enough for long-form essays, case studies, and executive visitors.
            </p>
          </SurfaceCard>
          <SurfaceCard>
            <p className="font-mission mb-4 text-sm text-space-signal">Action system / Mission controls</p>
            <div className="flex flex-col gap-3">
              <a href="/landing-prototype" className="inline-flex items-center justify-center gap-2 rounded-md bg-space-signal px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
                Open prototype <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/projects/agent-observability" className="inline-flex items-center justify-center gap-2 rounded-md border border-space-line/50 px-5 py-3 text-sm font-semibold text-white transition hover:border-space-signal">
                Case study CTA
              </a>
              <button type="button" className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent px-5 py-3 text-sm font-semibold text-slate-300 transition hover:text-white">
                Quiet tertiary action
              </button>
            </div>
          </SurfaceCard>
        </div>
      </SectionShell>

      <SectionShell title="Rahat Type System" intro="The font stack is designed to feel like you: systems-minded, futuristic, readable, and still human. It is not a novelty sci-fi typeface.">
        <div className="grid gap-5 md:grid-cols-3">
          <SurfaceCard>
            <p className="font-mission text-sm text-space-signal">Display</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">Space Grotesk</h2>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Used for headings and the wordmark. It brings orbital geometry without becoming cartoonish.
            </p>
          </SurfaceCard>
          <SurfaceCard>
            <p className="font-mission text-sm text-space-signal">Body</p>
            <p className="mt-4 text-3xl font-semibold text-white">Manrope</p>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Used for paragraphs and navigation. It keeps the site approachable, executive, and easy to read.
            </p>
          </SurfaceCard>
          <SurfaceCard>
            <p className="font-mission text-sm text-space-signal">Telemetry</p>
            <p className="font-mission mt-4 text-3xl font-semibold text-white">IBM Plex Mono</p>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Used for badges, labels, readouts, metrics, and mission-control details.
            </p>
          </SurfaceCard>
        </div>
        <SurfaceCard className="mt-5">
          <p className="font-mission text-sm text-space-signal">Custom-font path</p>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-300">
            To create a truly custom Rahat typeface later, start from this direction and commission or generate a small display font: geometric round counters, clipped terminals, a distinctive uppercase R/K, tabular numerals, and restrained sci-fi alternates. Export as WOFF2 and keep Manrope for long reading.
          </p>
        </SurfaceCard>
      </SectionShell>

      <SectionShell title="Unique Design Elements" intro="The first card system was too close to generic AI dashboards. This direction uses mission artifacts: constellations, trajectory bands, clipped panels, and signal ribbons.">
        <DesignElementPrinciples />
        <AutonomyConstellation items={thesisCards} />
        <TrajectoryBands />
        <SignalRibbon items={["LLM-as-Judge", "Agent tracing", "Human escalation", "Tool policy", "Mission autonomy"]} />
      </SectionShell>

      <SectionShell title="Mission Control HUD Kit" intro="A more cinematic, interactive system for the future site: exosuit diagnostics, command-center telemetry, agent fleet controls, and reliability matrices. Original, but with the premium armored-HUD energy you were asking for.">
        <MissionControlHud />
        <div className="mt-8">
          <FutureComponentMap />
        </div>
      </SectionShell>

      <SectionShell title="Reusable Motion System" intro="Animations should become shared primitives, not one-off surprises. These examples cover flipping HUD cards, subtle loaders, and staggered reveal transitions for future sections across the site.">
        <MotionSystemShowcase />
      </SectionShell>

      <SectionShell title="Personal OS Architecture" intro="The site can grow from portfolio into a living operating system: public broadcast, private life cockpit, and AI agent mission control. This module defines the privacy-aware dashboard grammar.">
        <PersonalOSConsole />
        <div className="mt-8">
          <PersonalOSComponentMap />
        </div>
      </SectionShell>

      <SectionShell title="Motion Lab" intro="The tutorial pattern is represented as a reviewable asset pipeline: poster, start frame, end frame, scroll-scrubbed video, loading state, and reduced-motion fallback.">
        <div className="grid gap-5 lg:grid-cols-[.95fr_1.05fr]">
          <SurfaceCard>
            <div className="grid gap-3">
              {motionStates.map((state, index) => (
                <div key={state} className="flex items-center gap-3 rounded-md border border-space-line/25 bg-black/20 p-4">
                  {index < 3 ? <CheckCircle2 className="h-5 w-5 text-space-mint" /> : index === 3 ? <MousePointer2 className="h-5 w-5 text-space-signal" /> : <PlayCircle className="h-5 w-5 text-space-ember" />}
                  <span className="text-sm text-slate-200">{state}</span>
                </div>
              ))}
            </div>
          </SurfaceCard>
          <SpaceMotionScene mode="panel" showCopy={false} />
        </div>
      </SectionShell>

      <SectionShell title="Keyframes" intro="The transition video is generated from a start and end concept. These frames make the creative direction concrete before we refine or replace the asset with a richer AI-generated render.">
        <div className="grid gap-5 md:grid-cols-2">
          <SurfaceCard>
            <h2 className="mb-4 text-xl font-semibold text-white">Start frame</h2>
            <Image src="/motion/rahat-ai-systems-start.svg" alt="Quiet deep-space start frame" width={1920} height={1080} className="rounded-md border border-space-line/25" />
          </SurfaceCard>
          <SurfaceCard>
            <h2 className="mb-4 text-xl font-semibold text-white">End frame</h2>
            <Image src="/motion/rahat-ai-systems-end.svg" alt="AI infrastructure command surface end frame" width={1920} height={1080} className="rounded-md border border-space-line/25" />
          </SurfaceCard>
        </div>
      </SectionShell>
    </div>
  );
}
