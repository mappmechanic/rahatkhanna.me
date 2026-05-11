"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname() ?? "";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 border-b transition duration-300",
        isScrolled
          ? "border-space-line/20 bg-space-void/80 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-space-line/40 bg-space-panel/90 text-sm font-semibold text-space-signal">
            RK
          </span>
          <span className="rk-wordmark hidden text-sm font-semibold text-white sm:block">Rahat Khanna</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white",
                isActive(item.href) && "bg-white/10 text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a
          href="mailto:hello@rahatkhanna.me"
          className="hidden rounded-md bg-space-signal px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-300 md:inline-flex"
        >
          Contact
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-space-line/40 text-white md:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isMenuOpen ? (
        <div className="border-t border-space-line/20 bg-space-void/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "rounded-md px-3 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white",
                  isActive(item.href) && "bg-white/10 text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="mailto:hello@rahatkhanna.me"
              className="mt-2 rounded-md bg-space-signal px-3 py-3 text-center text-sm font-semibold text-slate-950"
            >
              Contact
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
