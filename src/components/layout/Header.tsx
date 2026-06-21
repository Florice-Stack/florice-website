"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/content";
import { cn } from "@/lib/cn";

function LogoMark() {
  return (
    <svg className="h-10 w-10 shrink-0" viewBox="0 0 48 48" aria-hidden>
      <rect x="3" y="3" width="42" height="42" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="24" cy="24" r="11" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="24" cy="24" r="4" fill="none" stroke="currentColor" strokeWidth="1" />
      <path
        d="M24 6v6M24 36v6M6 24h6M36 24h6"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-ivory/95 backdrop-blur-sm">
      <div className="container-content flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 text-charcoal" onClick={() => setOpen(false)}>
          <LogoMark />
          <span className="leading-tight">
            <span className="block font-serif text-lg">Florice</span>
            <span className="block text-[0.65rem] font-medium uppercase tracking-[0.12em] text-charcoal-muted">
              {site.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-sm px-3 py-2 text-sm font-medium transition",
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? "bg-olive/10 text-olive"
                  : "text-charcoal-muted hover:text-olive",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="btn btn-primary hidden sm:inline-flex">
            Book Consultation
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--border)] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-[var(--border)] bg-ivory md:hidden" aria-label="Mobile navigation">
          <ul className="container-content flex flex-col py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-sm px-2 py-3 text-sm font-medium text-charcoal hover:bg-olive/10"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href="/contact" className="btn btn-primary btn-full w-full" onClick={() => setOpen(false)}>
                Book Consultation
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
