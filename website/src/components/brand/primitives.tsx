import Link from "next/link";
import type { ComponentType, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("font-mission mb-4 inline-flex rounded-full border border-space-line/40 bg-space-panel/80 px-4 py-2 text-sm text-space-signal", className)}>
      {children}
    </p>
  );
}

export function SectionShell({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative overflow-hidden px-6 py-20 md:px-10 md:py-28", className)}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h2 className="text-3xl font-semibold text-white md:text-5xl">{title}</h2>
          {intro ? <p className="mt-5 text-lg leading-8 text-slate-300">{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export function SurfaceCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("telemetry-panel p-6", className)}>{children}</div>;
}

export function SignalBadge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("font-mission inline-flex items-center rounded-full border border-space-line/35 bg-space-signal/10 px-3 py-1 text-sm text-sky-100", className)}>
      {children}
    </span>
  );
}

export function IconCard({
  title,
  body,
  icon: Icon,
  href,
  label,
  tags,
}: {
  title: string;
  body: string;
  icon: ComponentType<{ className?: string }>;
  href?: string;
  label?: string;
  tags?: string[];
}) {
  const content = (
    <SurfaceCard className="group h-full transition duration-300 hover:-translate-y-1 hover:border-space-signal/50 hover:shadow-signal">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md border border-space-line/40 bg-space-signal/10 text-space-signal">
        <Icon className="h-5 w-5" />
      </div>
      {label ? <p className="mb-3 text-sm text-space-ember">{label}</p> : null}
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-300">{body}</p>
      {tags ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <SignalBadge key={tag}>{tag}</SignalBadge>
          ))}
        </div>
      ) : null}
      {href ? (
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-space-signal">
          Open <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      ) : null}
    </SurfaceCard>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} className="block h-full">
      {content}
    </Link>
  );
}
