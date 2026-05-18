import type { ComponentType } from "react";
import { ArrowUpRight, Orbit, RadioTower } from "lucide-react";

import { cn } from "@/lib/utils";

type ThesisItem = {
  title: string;
  body: string;
  icon: ComponentType<{ className?: string }>;
};

export function AutonomyConstellation({ items }: { items: ThesisItem[] }) {
  return (
    <div className="relative overflow-hidden py-6 md:py-10">
      <div className="absolute inset-0 space-grid opacity-40" />
      <svg className="absolute inset-0 hidden h-full w-full md:block" aria-hidden="true">
        <path d="M280 265 C470 112 650 124 850 266 S1160 424 1370 232" fill="none" stroke="rgba(41,182,255,.36)" strokeWidth="1.4" />
        <path d="M360 570 C560 402 785 480 960 354 S1220 194 1470 496" fill="none" stroke="rgba(246,184,75,.32)" strokeWidth="1.4" />
        <path d="M520 180 C618 330 760 470 950 410 S1160 310 1320 392" fill="none" stroke="rgba(85,217,145,.28)" strokeWidth="1.4" />
      </svg>

      <div className="relative mx-auto grid min-h-[620px] max-w-6xl gap-6 md:block">
        <div className="mission-node border border-space-signal/50 bg-space-panel/80 p-6 shadow-signal md:absolute md:left-[36%] md:top-[30%] md:w-[360px]">
          <p className="font-mission text-sm text-space-signal">RK-01 / RELIABILITY CORE</p>
          <h3 className="mt-4 text-3xl font-semibold text-white">Autonomy becomes useful when it can be inspected.</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            This replaces generic cards with a navigational system: ideas orbit a central operating thesis instead of sitting in equal boxes.
          </p>
        </div>

        {items.map((item, index) => {
          const Icon = item.icon;
          const positions = [
            "md:left-[2%] md:top-[12%] md:w-[330px]",
            "md:right-[2%] md:top-[8%] md:w-[345px]",
            "md:left-[11%] md:bottom-[8%] md:w-[390px]",
          ];
          const accents = ["text-space-signal", "text-space-mint", "text-space-ember"];

          return (
            <div
              key={item.title}
              className={cn(
                "mission-node relative border border-space-line/35 bg-black/20 p-5 backdrop-blur-sm md:absolute",
                positions[index],
              )}
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <Icon className={cn("h-7 w-7", accents[index])} />
                <span className="font-mission text-xs text-slate-500">0{index + 1}</span>
              </div>
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function SignalRibbon({ items }: { items: string[] }) {
  return (
    <div className="mt-8 flex flex-col gap-2 md:flex-row md:flex-wrap">
      {items.map((item, index) => (
        <div
          key={item}
          className={cn(
            "signal-ribbon border-l border-space-line/40 bg-space-panel/70 px-5 py-3 pr-8",
            index % 3 === 0 && "md:translate-y-0",
            index % 3 === 1 && "md:translate-y-3",
            index % 3 === 2 && "md:-translate-y-2",
          )}
        >
          <span className="font-mission text-sm text-slate-200">{item}</span>
        </div>
      ))}
    </div>
  );
}

export function TrajectoryBands() {
  const bands = [
    {
      label: "01 / CONCEPT",
      title: "Constellation maps",
      body: "Use connected nodes for strategic systems: agents, evaluation, humanoids, space, and trust.",
    },
    {
      label: "02 / MOTION",
      title: "Trajectory bands",
      body: "Use angled progression strips for timelines, talk outlines, and project narratives.",
    },
    {
      label: "03 / DETAIL",
      title: "Telemetry readouts",
      body: "Use compact mission labels for metrics, tags, controls, and status without default pills everywhere.",
    },
  ];

  return (
    <div className="space-y-4">
      {bands.map((band, index) => (
        <div
          key={band.title}
          className={cn(
            "trajectory-band border border-space-line/30 bg-black/25 px-7 py-5 pr-12 backdrop-blur-sm",
            index === 1 && "md:ml-12",
            index === 2 && "md:ml-24",
          )}
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-mission text-xs text-space-signal">{band.label}</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{band.title}</h3>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-300">{band.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function DesignElementPrinciples() {
  return (
    <div className="grid gap-4 md:grid-cols-[.7fr_1.3fr]">
      <div className="mission-node border border-space-ember/35 bg-space-ember/10 p-6">
        <Orbit className="mb-5 h-7 w-7 text-space-ember" />
        <h3 className="text-2xl font-semibold text-white">Avoid default rectangles.</h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          Use shapes that imply mission artifacts: clipped panels, paths, labels, coordinates, and connected systems.
        </p>
      </div>
      <div className="mission-node border border-space-signal/35 bg-space-signal/10 p-6">
        <RadioTower className="mb-5 h-7 w-7 text-space-signal" />
        <h3 className="text-2xl font-semibold text-white">Make every visual carry meaning.</h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          Space motifs should explain autonomy, distance, delayed feedback, inspection, and control. Decorative outlines alone read as generic AI.
        </p>
        <span className="font-mission mt-5 inline-flex items-center gap-2 text-sm text-space-signal">
          SYSTEM LANGUAGE <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
}
