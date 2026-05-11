"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Gauge, PauseCircle, PlayCircle, Radar, ShieldCheck } from "lucide-react";

import { cn } from "@/lib/utils";

type SpaceMotionSceneProps = {
  mode?: "hero" | "prototype" | "panel";
  className?: string;
  showCopy?: boolean;
};

type StackReadout = {
  label: string;
  value: string;
  icon: typeof Gauge;
};

const nodes = [
  { label: "Agents", x: "18%", y: "34%" },
  { label: "Evaluation", x: "62%", y: "23%" },
  { label: "Observability", x: "72%", y: "61%" },
  { label: "Guardrails", x: "31%", y: "72%" },
  { label: "Humanoids", x: "45%", y: "43%" },
  { label: "Space", x: "83%", y: "39%" },
];

const stackReadouts: StackReadout[] = [
  { label: "Trace quality", value: "97%", icon: Gauge },
  { label: "Tool-call precision", value: "high", icon: ShieldCheck },
  { label: "Human escalation", value: "ready", icon: PlayCircle },
];

export function SpaceMotionScene({ mode = "hero", className, showCopy = true }: SpaceMotionSceneProps) {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [isPlayingFallback, setIsPlayingFallback] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: mode === "panel" ? ["start end", "end start"] : ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 70, damping: 24, mass: 0.35 });
  const haloOpacity = useTransform(smoothProgress, [0, 0.55, 1], [0.12, 0.32, 0.2]);
  const commandOpacity = useTransform(smoothProgress, [0.1, 0.58, 1], [0.1, 0.75, 1]);
  const orbitRotate = useTransform(smoothProgress, [0, 1], [0, 34]);
  const copyY = useTransform(smoothProgress, [0, 0.6, 1], [0, -18, -28]);

  useMotionValueEvent(smoothProgress, "change", (progress) => {
    const video = videoRef.current;
    if (!video || !videoReady || videoFailed || reducedMotion) return;
    const duration = Number.isFinite(video.duration) ? video.duration : 0;
    if (duration > 0) {
      video.currentTime = Math.min(duration - 0.05, Math.max(0, duration * progress));
    }
  });

  useEffect(() => {
    if (reducedMotion) return;
    const video = videoRef.current;
    if (!video || mode !== "panel") return;
    if (isPlayingFallback) {
      video.play().catch(() => setIsPlayingFallback(false));
    } else {
      video.pause();
    }
  }, [isPlayingFallback, mode, reducedMotion]);

  const isPanel = mode === "panel";
  const minHeight = mode === "prototype" ? "min-h-[220vh]" : mode === "hero" ? "min-h-[160vh]" : "min-h-[620px]";
  const stickyClass = isPanel ? "relative min-h-[620px]" : "sticky top-0 min-h-screen";

  return (
    <section ref={sectionRef} className={cn("relative overflow-hidden space-field", minHeight, className)}>
      <div className={cn(stickyClass, "isolate flex items-center")}>
        <div className="absolute inset-0 star-noise opacity-35" />
        <div className="absolute inset-0 space-grid opacity-70" />
        <motion.div
          style={{ opacity: haloOpacity }}
          className="absolute left-[8%] top-[18%] h-[46rem] w-[46rem] rounded-full border border-space-signal/30"
        />
        <motion.div
          style={{ rotate: orbitRotate }}
          className="absolute right-[-8rem] top-[8%] h-[46rem] w-[46rem] rounded-full border border-space-ember/30"
        />

        <video
          ref={videoRef}
          className={cn(
            "absolute inset-0 h-full w-full object-cover opacity-45 mix-blend-screen",
            reducedMotion || videoFailed ? "hidden" : "block"
          )}
          muted
          playsInline
          preload="metadata"
          poster="/motion/rahat-ai-systems-start.svg"
          onLoadedMetadata={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
        >
          <source src="/motion/rahat-ai-systems-reveal.mp4" type="video/mp4" />
        </video>

        <motion.div style={{ opacity: commandOpacity }} className="absolute inset-0">
          {nodes.map((node, index) => (
            <motion.div
              key={node.label}
              className="absolute hidden rounded-full border border-space-line/50 bg-space-panel/80 px-3 py-2 text-xs text-slate-100 shadow-signal md:block"
              style={{ left: node.x, top: node.y }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
            >
              {node.label}
            </motion.div>
          ))}
          <svg className="absolute inset-0 h-full w-full opacity-40" aria-hidden="true">
            <path d="M350 360 C520 220 750 230 960 340 S1290 520 1540 360" fill="none" stroke="rgba(41,182,255,.45)" strokeWidth="1" />
            <path d="M420 660 C620 520 790 620 940 470 S1210 240 1430 620" fill="none" stroke="rgba(246,184,75,.35)" strokeWidth="1" />
            <path d="M600 270 C690 440 860 510 1040 450 S1240 330 1380 420" fill="none" stroke="rgba(85,217,145,.35)" strokeWidth="1" />
          </svg>
        </motion.div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-28 md:grid-cols-[1.05fr_.95fr] md:px-10">
          {showCopy ? (
            <motion.div style={{ y: copyY }} className="max-w-3xl">
              <p className="mb-5 inline-flex rounded-full border border-space-line/40 bg-space-panel/80 px-4 py-2 text-sm text-space-signal">
                AI Agent Infrastructure / Evaluation / Observability
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
                I build the infrastructure that makes AI agents reliable, observable, and enterprise-ready.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Staff engineer at Apple, founder by origin, now focused on the reliability stack for agents, humanoids, and space-grade autonomy.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/projects/agent-observability"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-space-signal px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
                >
                  See the flagship case study <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/speaking"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-space-line/50 bg-space-panel/70 px-5 py-3 text-sm font-semibold text-white transition hover:border-space-signal"
                >
                  Invite me to speak
                </Link>
              </div>
            </motion.div>
          ) : null}

          <div className="telemetry-panel relative min-h-[420px] overflow-hidden p-5">
            <div className="absolute inset-0 space-grid opacity-50" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-space-signal">Autonomy command surface</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Agent Reliability Stack</h2>
                </div>
                <Radar className="h-9 w-9 text-space-signal" />
              </div>
              <div className="grid gap-3 py-8">
                {stackReadouts.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-center justify-between rounded-md border border-space-line/25 bg-black/20 p-4">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-space-mint" />
                      <span className="text-sm text-slate-200">{label}</span>
                    </div>
                    <span className="text-sm font-semibold text-white">{value}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-md border border-space-line/25 bg-black/20 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm text-slate-300">Scroll-linked motion asset</span>
                  <span className="text-sm text-space-ember">{reducedMotion ? "reduced motion" : videoReady && !videoFailed ? "video ready" : "poster fallback"}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800">
                  <motion.div style={{ scaleX: smoothProgress }} className="h-2 origin-left rounded-full bg-space-signal" />
                </div>
                {isPanel && !reducedMotion ? (
                  <button
                    type="button"
                    onClick={() => setIsPlayingFallback((current) => !current)}
                    className="mt-4 inline-flex items-center gap-2 rounded-md border border-space-line/40 px-3 py-2 text-sm text-white transition hover:border-space-signal"
                  >
                    {isPlayingFallback ? <PauseCircle className="h-4 w-4" /> : <PlayCircle className="h-4 w-4" />}
                    {isPlayingFallback ? "Pause panel video" : "Play panel video"}
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
