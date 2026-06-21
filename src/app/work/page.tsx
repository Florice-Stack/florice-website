import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { machineryCategories, outcomes, projects } from "@/lib/content";
import RiceMillFlowDiagram from "@/components/diagrams/RiceMillFlowDiagram";
import FlourMillFlowDiagram from "@/components/diagrams/FlourMillFlowDiagram";

export const metadata: Metadata = {
  title: "Projects & Machinery",
  description:
    "Selected rice, flour, and parboiling engagements with measured outcomes, plus machinery categories we specify and troubleshoot.",
};

function ProjectDiagram({ type }: { type: "rice" | "flour" | "parboiling" }) {
  if (type === "flour") return <FlourMillFlowDiagram />;
  return <RiceMillFlowDiagram />;
}

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] bg-ivory-muted section-pad">
        <div className="container-content max-w-3xl">
          <p className="eyebrow">Selected Engagements</p>
          <h1 className="text-4xl sm:text-5xl">Recent work on rice, wheat, and parboiling lines</h1>
          <p className="mt-4 text-lg text-charcoal-muted">
            Real plant challenges with scope, intervention, and measured results — not generic marketing claims.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-content space-y-8">
          {projects.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-sm border border-[var(--border)] bg-ivory-card shadow-card">
              <div className="border-b border-[var(--border)] bg-ivory-muted p-4">
                <ProjectDiagram type={project.type} />
              </div>
              <div className="p-6 lg:p-8">
                <p className="text-xs font-medium uppercase tracking-wide text-charcoal-muted">{project.meta}</p>
                <div className="mt-3 flex flex-wrap items-start justify-between gap-4">
                  <h2 className="text-2xl font-serif">{project.title}</h2>
                  <span className="rounded-sm bg-olive/10 px-3 py-1 text-sm font-semibold text-olive">
                    {project.result}
                  </span>
                </div>
                <dl className="mt-6 grid gap-4 md:grid-cols-3">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-copper">Problem</dt>
                    <dd className="mt-1 text-sm text-charcoal-muted">{project.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-copper">Scope</dt>
                    <dd className="mt-1 text-sm text-charcoal-muted">{project.scope}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-copper">Result</dt>
                    <dd className="mt-1 text-sm text-charcoal-muted">{project.outcome}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad border-y border-[var(--border)] bg-ivory-muted">
        <div className="container-content">
          <p className="eyebrow">Measured Outcomes</p>
          <h2 className="text-3xl font-serif">What mill owners report after engagement</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((outcome) => (
              <div key={outcome.title} className="rounded-sm border border-[var(--border)] bg-ivory-card p-5 shadow-card">
                <span className="font-serif text-3xl text-olive">{outcome.value}</span>
                <h3 className="mt-2 font-semibold">{outcome.title}</h3>
                <p className="mt-2 text-sm text-charcoal-muted">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="machinery" className="section-pad border-t border-[var(--border)] bg-ivory-card">
        <div className="container-content">
          <p className="eyebrow">Machinery Expertise</p>
          <h2 className="text-3xl font-serif">Equipment categories we specify, commission, and troubleshoot</h2>
          <p className="mt-3 max-w-2xl text-charcoal-muted">
            We work across OEM and retrofit installations — evaluating fit for your grain, climate, and maintenance
            capability, not brand preference.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {machineryCategories.map((item) => (
              <li key={item} className="flex items-start gap-2 rounded-sm border border-[var(--border)] bg-ivory-card px-4 py-3 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-olive" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link href="/contact" className="btn btn-primary">
              Discuss your plant
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
