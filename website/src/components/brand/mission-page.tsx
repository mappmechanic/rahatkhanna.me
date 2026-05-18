import Link from "next/link";
import type { ComponentType, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { Eyebrow } from "@/components/brand/primitives";
import { cn } from "@/lib/utils";

type Cta = {
  label: string;
  href: string;
};

type Metric = {
  label: string;
  value: string;
  tone?: "signal" | "mint" | "ember";
};

type RailItem = {
  label: string;
  title: string;
  body: string;
  meta?: string;
  href?: string;
  external?: boolean;
};

type MatrixItem = {
  label: string;
  value: string;
  detail?: string;
  icon?: ComponentType<{ className?: string }>;
  tone?: "signal" | "mint" | "ember";
};

const toneClasses = {
  signal: "text-space-signal border-space-signal/35 bg-space-signal/10",
  mint: "text-space-mint border-space-mint/35 bg-space-mint/10",
  ember: "text-space-ember border-space-ember/35 bg-space-ember/10",
};

const toneText = {
  signal: "text-space-signal",
  mint: "text-space-mint",
  ember: "text-space-ember",
};

export function MissionPageHero({
  eyebrow,
  title,
  intro,
  metrics,
  primaryCta,
  secondaryCta,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  metrics?: Metric[];
  primaryCta?: Cta;
  secondaryCta?: Cta;
  children?: ReactNode;
}) {
  const primaryAction = primaryCta ? (
    <span className="inline-flex items-center justify-center gap-2 rounded-md bg-space-signal px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
      {primaryCta.label} <ArrowRight className="h-4 w-4" />
    </span>
  ) : null;

  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-32 md:px-10 md:pb-20 md:pt-36">
      <div className="absolute inset-0 space-grid opacity-35" />
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
        <div className="relative z-10">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="max-w-5xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{intro}</p>
          {primaryCta || secondaryCta ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryCta ? (
                primaryCta.href.startsWith("mailto:") ? (
                  <a href={primaryCta.href} className="inline-flex">
                    {primaryAction}
                  </a>
                ) : (
                  <Link href={primaryCta.href} className="inline-flex">
                    {primaryAction}
                  </Link>
                )
              ) : null}
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-space-line/50 px-5 py-3 text-sm font-semibold text-white transition hover:border-space-signal"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="relative z-10">
          {children ?? (metrics ? <TelemetryStrip metrics={metrics} /> : null)}
        </div>
      </div>
      {metrics && children ? (
        <div className="relative z-10 mx-auto mt-8 max-w-7xl">
          <TelemetryStrip metrics={metrics} />
        </div>
      ) : null}
    </section>
  );
}

export function TelemetryStrip({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="mission-node border border-space-line/25 bg-black/25 p-4 backdrop-blur-sm">
      <div className="grid gap-3 sm:grid-cols-2">
        {metrics.map((metric) => (
          <div key={metric.label} className={cn("hud-cell border px-4 py-3", toneClasses[metric.tone ?? "signal"])}>
            <p className="font-mission text-xs uppercase tracking-normal opacity-80">{metric.label}</p>
            <p className="mt-2 text-2xl font-semibold text-white">{metric.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MissionRail({ items, stagger = true }: { items: RailItem[]; stagger?: boolean }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const content = (
          <div
            className={cn(
              "trajectory-band group border border-space-line/30 bg-black/25 px-6 py-5 pr-12 backdrop-blur-sm transition hover:border-space-signal/45",
              stagger && index % 3 === 1 && "md:ml-10",
              stagger && index % 3 === 2 && "md:ml-20",
            )}
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="font-mission text-xs text-space-signal">{item.label}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
                {item.meta ? <p className="mt-2 text-sm text-space-ember">{item.meta}</p> : null}
              </div>
              <p className="max-w-2xl text-sm leading-7 text-slate-300">{item.body}</p>
              {item.href ? <ArrowRight className="hidden h-5 w-5 shrink-0 text-space-signal transition group-hover:translate-x-1 lg:block" /> : null}
            </div>
          </div>
        );

        if (!item.href) {
          return <div key={item.title}>{content}</div>;
        }

        if (item.external) {
          return (
            <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
              {content}
            </a>
          );
        }

        return (
          <Link key={item.title} href={item.href} className="block">
            {content}
          </Link>
        );
      })}
    </div>
  );
}

export function SignalMatrix({ items }: { items: MatrixItem[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={item.label} className="mission-node border border-space-line/25 bg-black/20 p-5">
            <div className="mb-5 flex items-center justify-between gap-4">
              {Icon ? <Icon className={cn("h-6 w-6", toneText[item.tone ?? "signal"])} /> : null}
              <span className="font-mission ml-auto text-xs text-slate-500">SIG-{String(index + 1).padStart(2, "0")}</span>
            </div>
            <p className="font-mission text-xs text-space-signal">{item.label}</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{item.value}</h3>
            {item.detail ? <p className="mt-4 text-sm leading-7 text-slate-300">{item.detail}</p> : null}
          </div>
        );
      })}
    </div>
  );
}

export function CommandCTA({
  label,
  title,
  body,
  href,
  action,
  children,
}: {
  label: string;
  title: string;
  body: string;
  href: string;
  action: string;
  children?: ReactNode;
}) {
  const isMail = href.startsWith("mailto:");
  const actionNode = (
    <span className="inline-flex items-center justify-center gap-2 rounded-md bg-space-signal px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
      {action} <ArrowRight className="h-4 w-4" />
    </span>
  );

  return (
    <section className="relative overflow-hidden px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="hud-frame p-5 md:p-7">
          <div className="hud-scan" />
          <div className="relative z-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="font-mission text-xs text-space-signal">{label}</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white md:text-5xl">{title}</h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300">{body}</p>
              {children ? <div className="mt-6">{children}</div> : null}
            </div>
            {isMail ? (
              <a href={href} className="inline-flex">
                {actionNode}
              </a>
            ) : (
              <Link href={href} className="inline-flex">
                {actionNode}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
