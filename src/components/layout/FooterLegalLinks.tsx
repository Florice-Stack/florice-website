"use client";

import { useState } from "react";
import LegalModal from "@/components/LegalModal";
import { legalMeta, privacyPolicy, termsOfUse } from "@/lib/legal";

export default function FooterLegalLinks() {
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | null>(null);

  return (
    <>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <button
          type="button"
          onClick={() => setActiveModal("privacy")}
          className="text-ivory/70 underline-offset-2 hover:text-ivory hover:underline"
        >
          Privacy Policy
        </button>
        <span className="text-ivory/40" aria-hidden>
          ·
        </span>
        <button
          type="button"
          onClick={() => setActiveModal("terms")}
          className="text-ivory/70 underline-offset-2 hover:text-ivory hover:underline"
        >
          Terms of Use
        </button>
      </div>

      <LegalModal
        open={activeModal === "privacy"}
        title={legalMeta.privacy.title}
        effectiveDate={legalMeta.privacy.effectiveDate}
        sections={privacyPolicy}
        onClose={() => setActiveModal(null)}
      />

      <LegalModal
        open={activeModal === "terms"}
        title={legalMeta.terms.title}
        effectiveDate={legalMeta.terms.effectiveDate}
        sections={termsOfUse}
        onClose={() => setActiveModal(null)}
      />
    </>
  );
}
