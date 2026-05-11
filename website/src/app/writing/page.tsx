import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Rss } from "lucide-react";

import { SectionShell, SurfaceCard } from "@/components/brand/primitives";
import { writingPosts } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Writing",
  description: "Thought leadership from Rahat Khanna on AI agents, observability, evaluation, humanoids, space, and engineering careers.",
};

export default function WritingPage() {
  return (
    <div className="space-field min-h-screen pt-24">
      <SectionShell
        eyebrow="Writing"
        title="The thought leadership engine."
        intro="This is the first pass at the writing hub. The structure is ready for MDX posts; the launch set is framed around agent infrastructure and long-term autonomy."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {writingPosts.map((post) => (
            <SurfaceCard key={post.title} className="flex h-full flex-col">
              <BookOpen className="mb-5 h-7 w-7 text-space-signal" />
              <h2 className="text-xl font-semibold text-white">{post.title}</h2>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">{post.summary}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-space-signal">
                Draft outline ready <ArrowRight className="h-4 w-4" />
              </span>
            </SurfaceCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell title="Editorial Pillars" intro="The site should publish essays that create signal for executives, labs, conferences, and younger technologists." className="bg-black/20">
        <div className="grid gap-5 md:grid-cols-4">
          {["Agent reliability", "Evaluation systems", "Frontier autonomy", "Career reinvention"].map((pillar) => (
            <SurfaceCard key={pillar}>
              <Rss className="mb-5 h-6 w-6 text-space-ember" />
              <h2 className="text-xl font-semibold text-white">{pillar}</h2>
            </SurfaceCard>
          ))}
        </div>
        <Link href="/vision" className="mt-8 inline-flex items-center gap-2 rounded-md bg-space-signal px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
          Read the vision page <ArrowRight className="h-4 w-4" />
        </Link>
      </SectionShell>
    </div>
  );
}
