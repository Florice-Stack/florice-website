import type { Metadata } from "next";
import { Clock, Globe, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a milling plant consultation. Response within one business day.",
};

export default function ContactPage() {
  return (
    <section className="section-pad">
      <div className="container-content grid gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Request a Consultation</p>
          <h1 className="text-4xl sm:text-5xl">
            Describe your mill capacity, grain type, and the problem you need solved
          </h1>
          <p className="mt-4 text-charcoal-muted">
            We work with mill owners, plant managers, and project teams planning upgrades. Typical first engagements: a
            3–5 day plant assessment, a machinery specification review, or an emergency troubleshooting visit.
          </p>
          <ul className="mt-8 space-y-4">
            <li className="flex gap-3 text-sm">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-olive" aria-hidden />
              <a href={`mailto:${site.email}`} className="font-medium text-olive hover:text-olive-dark">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3 text-sm text-charcoal-muted">
              <Globe className="mt-0.5 h-5 w-5 shrink-0 text-olive" aria-hidden />
              On-site consulting worldwide · Remote review available for preliminary scope
            </li>
            <li className="flex gap-3 text-sm text-charcoal-muted">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-olive" aria-hidden />
              Response within one business day
            </li>
          </ul>
          <p className="mt-6 text-sm text-charcoal-muted">
            Include your plant TPH/TPD, main grain variety, and whether the issue is recovery, downtime, new equipment,
            or expansion planning.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
