"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  BookOpen,
  BrainCircuit,
  CalendarDays,
  Cpu,
  Eye,
  EyeOff,
  Globe2,
  LockKeyhole,
  MessageSquare,
  Network,
  RadioTower,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import { cn } from "@/lib/utils";

type OsMode = "public" | "private" | "agents";

const modes: Array<{
  id: OsMode;
  label: string;
  title: string;
  description: string;
}> = [
  {
    id: "public",
    label: "PUBLIC",
    title: "Broadcast layer",
    description: "Thought leadership, talks, projects, public learning, and inspiration signals.",
  },
  {
    id: "private",
    label: "PRIVATE",
    title: "Life cockpit",
    description: "Personal goals, health, calendar, finances, notes, relationships, and decision logs behind auth.",
  },
  {
    id: "agents",
    label: "AGENTS",
    title: "Mission control",
    description: "AI agent runs, evaluations, tasks, memory, prompts, automations, and escalation paths.",
  },
];

const publicSignals = [
  { label: "essay pipeline", value: "planned" },
  { label: "talk topics", value: "active" },
  { label: "mentorship loop", value: "active" },
  { label: "public artifacts", value: "curated" },
];

const privateSignals = [
  { label: "calendar focus", value: "masked" },
  { label: "health rhythm", value: "masked" },
  { label: "decision log", value: "masked" },
  { label: "life goals", value: "masked" },
];

const agentSignals = [
  { label: "agent runs", value: "future" },
  { label: "eval gates", value: "planned" },
  { label: "memory sync", value: "designed" },
  { label: "escalations", value: "human review" },
];

const orbitNodes = [
  { label: "writing", icon: BookOpen, x: "14%", y: "18%" },
  { label: "speaking", icon: MessageSquare, x: "76%", y: "20%" },
  { label: "calendar", icon: CalendarDays, x: "82%", y: "66%" },
  { label: "agents", icon: BrainCircuit, x: "16%", y: "70%" },
  { label: "network", icon: Network, x: "50%", y: "8%" },
  { label: "vault", icon: LockKeyhole, x: "50%", y: "82%" },
];

function ModeSwitch({ active, onChange }: { active: OsMode; onChange: (mode: OsMode) => void }) {
  return (
    <div className="mission-node inline-flex flex-wrap gap-2 border border-space-line/25 bg-black/25 p-2">
      {modes.map((mode) => (
        <button
          key={mode.id}
          type="button"
          onClick={() => onChange(mode.id)}
          className={cn(
            "font-mission px-4 py-2 text-xs transition",
            active === mode.id
              ? "bg-space-signal text-slate-950"
              : "text-slate-400 hover:bg-white/5 hover:text-white",
          )}
        >
          {mode.label}
        </button>
      ))}
    </div>
  );
}

function SignalRows({ mode }: { mode: OsMode }) {
  const rows = mode === "public" ? publicSignals : mode === "private" ? privateSignals : agentSignals;
  return (
    <div className="grid gap-3">
      {rows.map((row, index) => (
        <motion.div
          key={`${mode}-${row.label}`}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.32, delay: index * 0.04 }}
          className="hud-cell flex items-center justify-between border border-space-line/20 bg-black/25 px-4 py-3"
        >
          <span className="font-mission text-xs text-slate-400">{row.label}</span>
          <span className={cn("font-mission text-sm", mode === "private" ? "text-space-ember" : "text-white")}>{row.value}</span>
        </motion.div>
      ))}
    </div>
  );
}

function PrivacyBoundary() {
  return (
    <div className="mission-node border border-space-ember/35 bg-space-ember/10 p-4">
      <div className="mb-4 flex items-center gap-3">
        <ShieldCheck className="h-5 w-5 text-space-ember" />
        <p className="font-mission text-xs text-space-ember">PRIVACY BOUNDARY</p>
      </div>
      <p className="text-sm leading-7 text-slate-300">
        Public pages can show proof, direction, and live progress. Private life data must require auth, masking, audit logs, and explicit publish controls.
      </p>
    </div>
  );
}

function OsOrbit({ mode }: { mode: OsMode }) {
  return (
    <div className="relative min-h-[560px] overflow-hidden border border-space-line/25 bg-black/20">
      <div className="absolute inset-0 space-grid opacity-45" />
      <div className="os-orbit-shell absolute inset-0" />
      <svg className="absolute inset-0 h-full w-full opacity-45" aria-hidden="true">
        <path d="M120 295 C260 115 500 105 640 292 S930 486 1070 250" fill="none" stroke="rgba(41,182,255,.38)" strokeWidth="1" />
        <path d="M150 412 C360 270 520 470 690 340 S900 225 1040 430" fill="none" stroke="rgba(246,184,75,.30)" strokeWidth="1" />
      </svg>

      <motion.div
        key={mode}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.36 }}
        className="absolute left-1/2 top-1/2 z-10 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-space-signal/40 bg-space-void/85 text-center shadow-signal"
      >
        {mode === "public" ? <Globe2 className="mb-3 h-8 w-8 text-space-signal" /> : mode === "private" ? <LockKeyhole className="mb-3 h-8 w-8 text-space-ember" /> : <Cpu className="mb-3 h-8 w-8 text-space-mint" />}
        <p className="font-mission text-xs text-space-signal">RAHAT OS</p>
        <p className="mt-2 text-xl font-semibold text-white">{modes.find((item) => item.id === mode)?.title}</p>
      </motion.div>

      {orbitNodes.map((node, index) => {
        const Icon = node.icon;
        const privateNode = node.label === "vault" || node.label === "calendar";
        const dimmed = mode === "public" && privateNode;
        return (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: dimmed ? 0.45 : 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.03 }}
            className="mission-node absolute z-10 min-w-32 border border-space-line/25 bg-space-panel/80 p-3 backdrop-blur-sm"
            style={{ left: node.x, top: node.y }}
          >
            <div className="flex items-center gap-2">
              <Icon className={cn("h-4 w-4", dimmed ? "text-slate-500" : "text-space-signal")} />
              <span className="font-mission text-xs uppercase text-slate-200">{node.label}</span>
              {dimmed ? <EyeOff className="ml-auto h-4 w-4 text-space-ember" /> : null}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export function PersonalOSConsole() {
  const [mode, setMode] = useState<OsMode>("public");
  const activeMode = useMemo(() => modes.find((item) => item.id === mode) ?? modes[0], [mode]);

  return (
    <div className="hud-frame p-5 md:p-7">
      <div className="hud-scan" />
      <div className="relative z-10">
        <div className="mb-6 flex flex-col gap-5 border-b border-space-line/20 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mission text-xs text-space-signal">RAHAT OS / PUBLIC-PRIVATE-AI CONTROL PLANE</p>
            <h3 className="mt-3 text-4xl font-semibold text-white">Personal OS Console</h3>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
              A future operating layer where the website becomes a public portfolio, private life dashboard, and AI agent mission control surface.
            </p>
          </div>
          <ModeSwitch active={mode} onChange={setMode} />
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.2fr_.8fr]">
          <OsOrbit mode={mode} />

          <div className="space-y-4">
            <div className="mission-node border border-space-line/25 bg-black/20 p-5">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="font-mission text-xs text-space-signal">{activeMode.label} MODE</p>
                  <h4 className="mt-2 text-2xl font-semibold text-white">{activeMode.title}</h4>
                </div>
                {mode === "public" ? <Eye className="h-6 w-6 text-space-signal" /> : mode === "private" ? <LockKeyhole className="h-6 w-6 text-space-ember" /> : <RadioTower className="h-6 w-6 text-space-mint" />}
              </div>
              <p className="text-sm leading-7 text-slate-300">{activeMode.description}</p>
            </div>

            <div className="mission-node border border-space-line/25 bg-black/20 p-5">
              <div className="mb-4 flex items-center justify-between">
                <p className="font-mission text-xs text-space-mint">LIVE SIGNALS</p>
                <Activity className="h-5 w-5 text-space-mint" />
              </div>
              <SignalRows mode={mode} />
            </div>

            <PrivacyBoundary />
          </div>
        </div>
      </div>
    </div>
  );
}

export function PersonalOSComponentMap() {
  const components = [
    {
      title: "Public Broadcast",
      icon: Globe2,
      body: "Portfolio, essays, talks, public projects, learning log, and inspiration feed.",
    },
    {
      title: "Private Vault",
      icon: LockKeyhole,
      body: "Authenticated life metrics, goals, calendar, notes, health, finances, relationships, and decisions.",
    },
    {
      title: "Agent Mission Control",
      icon: BrainCircuit,
      body: "Agent runs, memory, evaluations, prompts, costs, automations, and human escalation.",
    },
    {
      title: "Publish Gate",
      icon: Sparkles,
      body: "Controlled promotion from private notes and agent outputs into public writing or dashboard snippets.",
    },
    {
      title: "Signal Graph",
      icon: Network,
      body: "Connects people, projects, goals, essays, talks, opportunities, and AI agent work.",
    },
    {
      title: "Automation Layer",
      icon: Zap,
      body: "Recurring checks, reminders, briefings, content drafts, outreach queues, and mission summaries.",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {components.map((component, index) => {
        const Icon = component.icon;
        return (
          <div key={component.title} className="mission-node border border-space-line/25 bg-black/20 p-5">
            <div className="mb-5 flex items-center justify-between">
              <Icon className="h-6 w-6 text-space-signal" />
              <span className="font-mission text-xs text-slate-500">OS-{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="text-xl font-semibold text-white">{component.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">{component.body}</p>
          </div>
        );
      })}
    </div>
  );
}
