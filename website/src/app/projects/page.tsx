import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

import { IconCard, SectionShell, SignalBadge, SurfaceCard } from "@/components/brand/primitives";
import { careerArc, systems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Sanitized case studies and shipped systems from Rahat Khanna across AI agents, Apple-scale platforms, ecommerce, and fintech.",
};

const shippedProducts = [
  {
    title: "Apple Music on the Web",
    href: "https://music.apple.com",
    body: "Global consumer media experience and platform work across Apple Music.",
  },
  {
    title: "Apple Podcasts Connect",
    href: "https://podcastsconnect.apple.com",
    body: "Creator and business tooling for podcasters managing shows and pricing.",
  },
  {
    title: "100 Best Albums",
    href: "https://100best.music.apple.com",
    body: "High-visibility Apple Music web experience supporting a flagship editorial moment.",
  },
  {
    title: "Flipkart Post-Order Systems",
    href: "https://flipkart.com",
    body: "Customer and operator-facing commerce systems at India’s largest ecommerce platform.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-field min-h-screen pt-24">
      <SectionShell
        eyebrow="Projects"
        title="Public-safe systems portfolio."
        intro="The portfolio is organized around transferable architecture patterns. Apple confidential details stay sanitized; the public value is how the systems are framed, measured, and operated."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {systems.map((system) => (
            <IconCard key={system.title} {...system} />
          ))}
        </div>
      </SectionShell>

      <SectionShell
        title="Shipped Product Scale"
        intro="The pre-AI chapter matters because it proves product judgment, platform ownership, and scale before the agent infrastructure chapter."
        className="bg-black/20"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {shippedProducts.map((product) => (
            <a key={product.title} href={product.href} target="_blank" rel="noopener noreferrer" className="block h-full">
              <SurfaceCard className="group h-full transition duration-300 hover:-translate-y-1 hover:border-space-signal/50">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <SignalBadge>Shipped platform</SignalBadge>
                  <ExternalLink className="h-5 w-5 text-space-signal" />
                </div>
                <h2 className="text-2xl font-semibold text-white">{product.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">{product.body}</p>
              </SurfaceCard>
            </a>
          ))}
        </div>
      </SectionShell>

      <SectionShell title="Career Context" intro="A compact timeline for the story behind the work.">
        <div className="grid gap-5 md:grid-cols-4">
          {careerArc.map((item) => (
            <SurfaceCard key={item.title}>
              <p className="text-sm text-space-ember">{item.years}</p>
              <h2 className="mt-3 text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.body}</p>
            </SurfaceCard>
          ))}
        </div>
        <Link href="/projects/agent-observability" className="mt-8 inline-flex items-center gap-2 rounded-md bg-space-signal px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
          Open flagship case study <ArrowRight className="h-4 w-4" />
        </Link>
      </SectionShell>
    </div>
  );
}
