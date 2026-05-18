"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Eye, Gauge, RotateCcw, ShieldCheck, Zap } from "lucide-react";

import { cn } from "@/lib/utils";

export const hudMotion = {
  reveal: {
    hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  stagger: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  },
  flip: {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  },
};

const flipCards = [
  {
    label: "TRACE",
    title: "Replayable Agent Path",
    backTitle: "Use in case studies",
    body: "Shows visible decision flow, tool calls, and escalation points.",
    icon: Eye,
  },
  {
    label: "EVAL",
    title: "Quality Gate",
    backTitle: "Use in writing",
    body: "Explains how a system knows whether autonomous work was good.",
    icon: Gauge,
  },
  {
    label: "POLICY",
    title: "Guardrail Lock",
    backTitle: "Use in mission HUD",
    body: "Represents policy, secrets, cost, and tool boundaries.",
    icon: ShieldCheck,
  },
];

export function HudFlipCards() {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});

  return (
    <motion.div
      variants={hudMotion.stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid gap-5 md:grid-cols-3"
    >
      {flipCards.map((card) => {
        const Icon = card.icon;
        const isFlipped = Boolean(flipped[card.label]);
        return (
          <motion.button
            key={card.label}
            type="button"
            variants={hudMotion.reveal}
            onClick={() => setFlipped((current) => ({ ...current, [card.label]: !current[card.label] }))}
            className="hud-flip-scene min-h-[260px] text-left"
          >
            <motion.div
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full min-h-[260px] w-full"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="mission-node absolute inset-0 border border-space-line/35 bg-black/25 p-5"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="mb-8 flex items-start justify-between">
                  <Icon className="h-7 w-7 text-space-signal" />
                  <span className="font-mission text-xs text-space-signal">{card.label}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{card.body}</p>
                <span className="font-mission mt-6 inline-flex items-center gap-2 text-xs text-space-ember">
                  TAP TO INVERT <RotateCcw className="h-4 w-4" />
                </span>
              </div>
              <div
                className="mission-node absolute inset-0 border border-space-ember/40 bg-space-ember/10 p-5"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <p className="font-mission text-xs text-space-ember">BACK FACE / APPLICATION</p>
                <h3 className="mt-8 text-2xl font-semibold text-white">{card.backTitle}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Flip cards should reveal strategic depth, not hide essential content. Use them for secondary explanations, proof, and alternate states.
                </p>
                <span className="font-mission mt-6 inline-flex items-center gap-2 text-xs text-space-signal">
                  RETURN <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </motion.div>
          </motion.button>
        );
      })}
    </motion.div>
  );
}

export function HudLoaders() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      <div className="mission-node border border-space-line/25 bg-black/20 p-6">
        <p className="font-mission mb-6 text-xs text-space-signal">LOADER / ORBITAL LOCK</p>
        <div className="hud-loader-orbit mx-auto h-40 w-40">
          <div className="hud-loader-dot absolute inset-0">
            <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-space-signal shadow-signal" />
          </div>
          <BrainCircuit className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 text-space-signal" />
        </div>
        <p className="mt-6 text-sm leading-7 text-slate-300">Use while loading a case study cockpit, project graph, or mission state.</p>
      </div>

      <div className="mission-node border border-space-line/25 bg-black/20 p-6">
        <p className="font-mission mb-6 text-xs text-space-ember">LOADER / TELEMETRY STREAM</p>
        <div className="space-y-3">
          {[88, 63, 76, 52].map((width, index) => (
            <div key={width} className="h-3 overflow-hidden bg-space-panel/70">
              <div className="telemetry-shimmer h-full" style={{ width: `${width}%`, animationDelay: `${index * 0.15}s` }} />
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-7 text-slate-300">Use for article lists, metrics, talks, and datasets without default skeleton blocks.</p>
      </div>

      <div className="mission-node relative overflow-hidden border border-space-line/25 bg-black/20 p-6">
        <div className="hud-scan" />
        <p className="font-mission mb-6 text-xs text-space-mint">LOADER / SCAN PASS</p>
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 16 }).map((_, index) => (
            <div
              key={index}
              className={cn(
                "hud-cell min-h-10 border",
                index % 4 === 0 ? "border-space-mint/40 bg-space-mint/10" : "border-space-line/20 bg-space-panel/45",
              )}
            />
          ))}
        </div>
        <p className="mt-6 text-sm leading-7 text-slate-300">Use when analyzing, filtering, or validating a grid of agent outcomes.</p>
      </div>
    </div>
  );
}

export function HudRevealTransitions() {
  const rows = [
    "Agent runtime enters observation mode",
    "LLM-as-Judge gate evaluates task quality",
    "Policy controller verifies tool boundary",
    "Human escalation channel remains armed",
  ];

  return (
    <motion.div
      variants={hudMotion.stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mission-node border border-space-line/25 bg-black/20 p-5"
    >
      <div className="mb-5 flex items-center justify-between">
        <p className="font-mission text-xs text-space-signal">REVEAL / STAGGERED HUD ROWS</p>
        <Zap className="h-5 w-5 text-space-ember" />
      </div>
      <div className="grid gap-3">
        {rows.map((row, index) => (
          <motion.div
            key={row}
            variants={hudMotion.reveal}
            transition={{ duration: 0.45, delay: index * 0.04 }}
            className="hud-reveal-mask flex items-center justify-between border border-space-line/20 bg-space-panel/35 p-4"
          >
            <span className="text-sm text-slate-200">{row}</span>
            <span className="font-mission text-xs text-space-mint">OK</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function MotionSystemShowcase() {
  return (
    <div className="space-y-8">
      <HudFlipCards />
      <HudLoaders />
      <HudRevealTransitions />
    </div>
  );
}
