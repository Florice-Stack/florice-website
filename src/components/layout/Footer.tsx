import Link from "next/link";
import { navLinks, site } from "@/lib/content";
import FooterLegalLinks from "@/components/layout/FooterLegalLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-olive-accent text-ivory">
      <div className="container-content grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">Florice</p>
          <p className="mt-1 text-xs uppercase tracking-[0.12em] text-ivory/70">{site.tagline}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/80">{site.description}</p>
        </div>
        <nav aria-label="Footer navigation">
          <h3 className="text-sm font-semibold uppercase tracking-wide">Pages</h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-ivory/80 hover:text-ivory">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-ivory/80">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-ivory">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-ivory">
                {site.phone}
              </a>
            </li>
            <li>Consulting worldwide · HQ India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="container-content flex flex-col gap-3 py-4 text-xs text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <FooterLegalLinks />
        </div>
      </div>
    </footer>
  );
}
