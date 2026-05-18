"use client";

import { useMemo, useState } from "react";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  Eye,
  Gauge,
  LockKeyhole,
  Orbit,
  Radar,
  ShieldCheck,
  Zap,
} from "lucide-react";

import { cn } from "@/lib/utils";

type MissionMode = {
  id: string;
  label: string;
  title: string;
  summary: string;
  icon: ComponentType<{ className?: string }>;
  accent: string;
  telemetry: Array<{ label: string; value: string }>;
};

const missionModes: MissionMode[] = [
  {
    id: "agents",
    label: "AGENT FLEET",
    title: "Reliable agent swarm",
    summary: "Long-horizon agents with trace replay, tool policy, evaluation loops, and escalation channels.",
    icon: BrainCircuit,
    accent: "text-space-signal",
    telemetry: [
      { label: "trace fidelity", value: "97%" },
      { label: "tool precision", value: "high" },
      { label: "eval cadence", value: "live" },
    ],
  },
  {
    id: "humanoids",
    label: "HUMANOID OPS",
    title: "Embodied reliability layer",
    summary: "Fleet diagnostics, intent checks, world-state memory, and human override as first-class controls.",
    icon: Cpu,
    accent: "text-space-mint",
    telemetry: [
      { label: "override path", value: "ready" },
      { label: "memory sync", value: "warm" },
      { label: "policy lock", value: "on" },
    ],
  },
  {
    id: "space",
    label: "ORBITAL SYSTEMS",
    title: "Mission-grade autonomy",
    summary: "Delayed feedback, resilient plans, audit logs, and control surfaces for high-consequence systems.",
    icon: Orbit,
    accent: "text-space-ember",
    telemetry: [
      { label: "signal delay", value: "sim" },
      { label: "fallback plan", value: "armed" },
      { label: "audit trail", value: "sealed" },
    ],
  },
];

const diagnosticBars = [
  { label: "observability", value: 92 },
  { label: "evaluation", value: 86 },
  { label: "guardrails", value: 88 },
  { label: "human oversight", value: 81 },
];

const guardrailCells = [
  "tools",
  "secrets",
  "memory",
  "cost",
  "latency",
  "policy",
  "review",
  "rollback",
];

const futureComponents = [
  {
    title: "Mission Hero",
    body: "Homepage first viewport with live-looking autonomy telemetry and scroll-linked reveal.",
    icon: Radar,
  },
  {
    title: "Case Study Cockpit",
    body: "Project pages with architecture map, decision log, eval readouts, and lessons learned.",
    icon: Eye,
  },
  {
    title: "Talk Launch Console",
    body: "Speaking page module for topics, audience fit, talk status, and booking path.",
    icon: Activity,
  },
  {
    title: "Reliability Matrix",
    body: "Reusable system for showing agents, guardrails, evals, traces, and oversight.",
    icon: ShieldCheck,
  },
];

export function MissionControlHud() {
  const [activeId, setActiveId] = useState(missionModes[0].id);
  const activeMode = useMemo(
    () => missionModes.find((mode) => mode.id === activeId) ?? missionModes[0],
    [activeId],
  );
  const ActiveIcon = activeMode.icon;

  return (
    <div className="hud-frame p-5 md:p-7">
      <div className="hud-scan" />
      <div className="relative z-10">
        <div className="mb-6 flex flex-col gap-4 border-b border-space-line/20 pb-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-mission text-xs text-space-signal">RK-MISSION-CONTROL / HUD KIT</p>
            <h3 className="mt-2 text-3xl font-semibold text-white">Autonomy Operations Interface</h3>
          </div>
          <div className="font-mission flex flex-wrap gap-2 text-xs">
            <span className="hud-cell border border-space-mint/35 bg-space-mint/10 px-3 py-2 text-space-mint">STATUS / GREEN</span>
            <span className="hud-cell border border-space-signal/35 bg-space-signal/10 px-3 py-2 text-space-signal">SIGNAL / LIVE</span>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[.9fr_1.25fr_.95fr]">
          <div className="space-y-3">
            {missionModes.map((mode) => {
              const Icon = mode.icon;
              const selected = activeId === mode.id;
              return (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setActiveId(mode.id)}
                  className={cn(
                    "mission-node w-full border p-4 text-left transition duration-300",
                    selected
                      ? "border-space-signal/60 bg-space-signal/12 shadow-signal"
                      : "border-space-line/25 bg-black/20 hover:border-space-signal/40",
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Icon className={cn("h-5 w-5", selected ? mode.accent : "text-slate-500")} />
                      <span className="font-mission text-sm text-slate-100">{mode.label}</span>
                    </div>
                    <span className="font-mission text-xs text-slate-500">{selected ? "ACTIVE" : "STANDBY"}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{mode.title}</p>
                </button>
              );
            })}

            <div className="mission-node border border-space-line/25 bg-black/20 p-4">
              <p className="font-mission text-xs text-space-ember">MISSION QUEUE</p>
              <div className="mt-4 space-y-3">
                {["observe", "evaluate", "constrain", "escalate"].map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-space-line/30 text-[10px] text-space-signal">
                      {index + 1}
                    </span>
                    <span className="font-mission text-xs uppercase text-slate-300">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden border border-space-line/25 bg-black/20">
            <div className="absolute inset-0 space-grid opacity-50" />
            <svg className="absolute inset-0 h-full w-full opacity-50" aria-hidden="true">
              <path d="M70 280 C180 150 310 150 420 260 S610 420 735 260" fill="none" stroke="rgba(41,182,255,.44)" strokeWidth="1" />
              <path d="M120 390 C260 280 410 420 540 300 S660 180 780 360" fill="none" stroke="rgba(246,184,75,.35)" strokeWidth="1" />
            </svg>

            <motion.div
              key={activeMode.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
            >
              <div className="relative mb-8 flex h-64 w-64 items-center justify-center md:h-80 md:w-80">
                <div className="reactor-orb absolute inset-0 rounded-full opacity-80" />
                <div className="absolute inset-7 rounded-full border border-space-line/30" />
                <div className="absolute inset-16 rounded-full border border-space-ember/30" />
                <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/15 bg-space-void/80 shadow-signal">
                  <ActiveIcon className={cn("h-12 w-12", activeMode.accent)} />
                </div>
              </div>

              <p className="font-mission text-sm text-space-signal">{activeMode.label}</p>
              <h4 className="mt-3 text-3xl font-semibold text-white">{activeMode.title}</h4>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">{activeMode.summary}</p>
            </motion.div>
          </div>

          <div className="space-y-4">
            <div className="mission-node border border-space-line/25 bg-black/20 p-4">
              <div className="mb-4 flex items-center justify-between">
                <p className="font-mission text-xs text-space-signal">LIVE TELEMETRY</p>
                <Gauge className="h-5 w-5 text-space-signal" />
              </div>
              <div className="grid gap-3">
                {activeMode.telemetry.map((item) => (
                  <div key={item.label} className="flex items-center justify-between border-b border-space-line/10 pb-2">
                    <span className="font-mission text-xs text-slate-400">{item.label}</span>
                    <span className="font-mission text-sm text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mission-node border border-space-line/25 bg-black/20 p-4">
              <div className="mb-4 flex items-center justify-between">
                <p className="font-mission text-xs text-space-ember">DIAGNOSTICS</p>
                <Zap className="h-5 w-5 text-space-ember" />
              </div>
              <div className="space-y-4">
                {diagnosticBars.map((bar) => (
                  <div key={bar.label}>
                    <div className="mb-2 flex justify-between">
                      <span className="font-mission text-xs text-slate-400">{bar.label}</span>
                      <span className="font-mission text-xs text-slate-200">{bar.value}%</span>
                    </div>
                    <div className="h-2 bg-slate-900">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${bar.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-space-signal"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mission-node border border-space-line/25 bg-black/20 p-4">
              <div className="mb-4 flex items-center justify-between">
                <p className="font-mission text-xs text-space-mint">GUARDRAIL MATRIX</p>
                <LockKeyhole className="h-5 w-5 text-space-mint" />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {guardrailCells.map((cell, index) => (
                  <div
                    key={cell}
                    className={cn(
                      "hud-cell flex min-h-12 items-center justify-center border px-2 py-3 text-center transition",
                      index % 3 === 0
                        ? "border-space-mint/40 bg-space-mint/10 text-space-mint"
                        : "border-space-line/25 bg-black/25 text-slate-300 hover:border-space-signal/50 hover:text-space-signal",
                    )}
                  >
                    <span className="font-mission text-[10px] uppercase">{cell}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FutureComponentMap() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {futureComponents.map((component, index) => {
        const Icon = component.icon;
        return (
          <div key={component.title} className="mission-node border border-space-line/25 bg-black/20 p-5">
            <div className="mb-5 flex items-center justify-between">
              <Icon className="h-6 w-6 text-space-signal" />
              <span className="font-mission text-xs text-slate-500">FUTURE-0{index + 1}</span>
            </div>
            <h3 className="text-xl font-semibold text-white">{component.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">{component.body}</p>
          </div>
        );
      })}
    </div>
  );
}
