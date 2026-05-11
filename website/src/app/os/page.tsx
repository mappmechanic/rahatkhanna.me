import type { Metadata } from "next";

import { PersonalOSComponentMap, PersonalOSConsole } from "@/components/brand/personal-os";
import { SectionShell } from "@/components/brand/primitives";

export const metadata: Metadata = {
  title: "Personal OS",
  description: "A future public and private mission-control dashboard for Rahat Khanna's life, work, writing, and AI agents.",
};

export default function PersonalOSPage() {
  return (
    <div className="space-field min-h-screen pt-24">
      <SectionShell
        eyebrow="Personal OS"
        title="A public portfolio today. A private mission-control system tomorrow."
        intro="This preview shows how the website can grow into Rahat OS: a public broadcast layer, private life cockpit, and AI agent control plane."
      >
        <PersonalOSConsole />
      </SectionShell>
      <SectionShell title="Future OS Modules" intro="These are the reusable surfaces the site can grow into over time." className="bg-black/20">
        <PersonalOSComponentMap />
      </SectionShell>
    </div>
  );
}
