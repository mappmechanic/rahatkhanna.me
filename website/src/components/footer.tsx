import Link from "next/link";

import { footerLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-space-line/20 bg-space-void px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" className="text-sm font-semibold text-white">Rahat Khanna</Link>
          <p className="mt-2 text-sm text-slate-400">AI agent infrastructure, executive systems thinking, and frontier autonomy.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="rounded-md border border-space-line/30 px-3 py-2 text-sm text-slate-300 transition hover:border-space-signal hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
