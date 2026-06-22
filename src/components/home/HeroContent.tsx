"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const stats = [
  { value: "120+", label: "Plant assessments" },
  { value: "20+ yrs", label: "Grain processing experience" },
  { value: "Independent", label: "Vendor-neutral consulting" },
];

export default function HeroContent() {
  return (
    <div className="w-full">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-center lg:gap-12 xl:gap-16">
        <div className="min-w-0">
          <Reveal>
            <h1 className="max-w-3xl text-[1.85rem] leading-[1.14] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] xl:text-5xl">
              Florice provides consulting for rice, flour, and grain plants, with complete spare parts supply
            </h1>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Book a Consultation
              </Link>
              <Link href="/spare-parts/quote" className="btn btn-outline">
                Request Machinery or Parts
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <ul className="grid grid-cols-1 gap-6 border-t border-[var(--border)] pt-8 sm:grid-cols-3 sm:gap-4 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 xl:pl-14">
            {stats.map((stat, index) => (
              <li
                key={stat.label}
                className="interactive-stat min-w-0 motion-safe:transition-all motion-safe:duration-200 sm:text-center lg:text-left"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <strong className="block font-display text-2xl font-bold leading-none text-olive xl:text-[1.75rem]">
                  {stat.value}
                </strong>
                <span className="mt-2 block text-sm leading-snug text-charcoal-muted">{stat.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}
