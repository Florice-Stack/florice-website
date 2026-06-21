import { ArrowRight, Cog, Factory, Gauge, Wrench } from "lucide-react";
import Link from "next/link";

const areas = [
  {
    icon: Factory,
    title: "Services",
    href: "/services",
    description: "Assessments, machinery specs, optimization, commissioning",
  },
  {
    icon: Gauge,
    title: "Projects",
    href: "/work",
    description: "Rice, flour, and parboiling case studies with measured outcomes",
  },
  {
    icon: Wrench,
    title: "Machinery",
    href: "/work#machinery",
    description: "Equipment categories we specify, commission, and troubleshoot",
  },
  {
    icon: Cog,
    title: "About & FAQ",
    href: "/about",
    description: "How we work, capabilities brochure, upgrade planning answers",
  },
];

export default function QuickNav() {
  return (
    <section className="section-pad border-t border-[var(--border)]">
      <div className="container-content">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow">Start here</p>
          <h2 className="text-3xl sm:text-4xl">Find what you need in one click</h2>
          <p className="mt-3 text-charcoal-muted">
            Instead of scrolling one long page, jump straight to the section that matches your plant challenge.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {areas.map(({ icon: Icon, title, href, description }) => (
            <Link
              key={href}
              href={href}
              className="group card-surface flex items-start gap-4 transition hover:border-olive hover:shadow-lift"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-olive/10 text-olive">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="flex-1">
                <span className="flex items-center gap-2 text-lg font-semibold text-charcoal">
                  {title}
                  <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" aria-hidden />
                </span>
                <span className="mt-1 block text-sm text-charcoal-muted">{description}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
