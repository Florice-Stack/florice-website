import Link from "next/link";
import { heroScope, site } from "@/lib/content";
import RiceMillFlowDiagram from "@/components/diagrams/RiceMillFlowDiagram";
import FlourMillFlowDiagram from "@/components/diagrams/FlourMillFlowDiagram";
import MachineryCollage from "@/components/home/MachineryCollage";

export default function Hero() {
  return (
    <section className="border-b border-[var(--border)]">
      <div className="container-content section-pad pb-12">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_minmax(280px,420px)] xl:grid-cols-[1fr_440px]">
          <div>
            <p className="eyebrow">Grain Processing & Milling Machinery Consulting</p>
            <h1 className="text-4xl leading-tight sm:text-5xl">
              Consulting for rice mills, flour mills, and grain processing plants
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-charcoal-muted">
              {site.name} supports mill owners with{" "}
              <strong className="font-semibold text-charcoal">turnkey project guidance</strong>,{" "}
              <strong className="font-semibold text-charcoal">pneumatic conveying review</strong>,{" "}
              <strong className="font-semibold text-charcoal">machinery selection</strong>, and{" "}
              <strong className="font-semibold text-charcoal">process stabilization</strong> — from intake to bagging.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Book a Consultation
              </Link>
              <Link href="/services" className="btn btn-outline">
                View Services
              </Link>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-6 border-t border-[var(--border)] pt-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-[var(--border)]">
              <li className="sm:px-6 sm:first:pl-0">
                <strong className="block text-2xl font-semibold leading-none text-olive">120+</strong>
                <span className="mt-2 block min-h-[2.5rem] text-sm leading-snug text-charcoal-muted">
                  Plant assessments
                </span>
              </li>
              <li className="sm:px-6">
                <strong className="block text-2xl font-semibold leading-none text-olive">20+ yrs</strong>
                <span className="mt-2 block min-h-[2.5rem] text-sm leading-snug text-charcoal-muted">
                  Grain processing experience
                </span>
              </li>
              <li className="sm:px-6 sm:last:pr-0">
                <strong className="block text-2xl font-semibold leading-none text-olive">Independent</strong>
                <span className="mt-2 block min-h-[2.5rem] text-sm leading-snug text-charcoal-muted">
                  Vendor-neutral consulting
                </span>
              </li>
            </ul>
          </div>

          <MachineryCollage />
        </div>

        <div className="mt-12 space-y-6">
          <RiceMillFlowDiagram variant="hero" />
          <FlourMillFlowDiagram variant="hero" />
        </div>
      </div>

      <div className="border-t border-[var(--border)] bg-ivory-card">
        <div className="container-content grid gap-0 divide-y divide-[var(--border)] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {heroScope.map((item) => (
            <div key={item.title} className="px-0 py-6 sm:px-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-olive">{item.title}</h3>
              <p className="mt-2 text-sm text-charcoal-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
