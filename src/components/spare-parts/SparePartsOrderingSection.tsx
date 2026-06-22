import SparePartsPrinciplesGrid from "@/components/spare-parts/SparePartsPrinciplesGrid";
import SparePartsProcessFlow from "@/components/spare-parts/SparePartsProcessFlow";
import type { sparePartsPrinciples, sparePartsProcess } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

type SparePartsOrderingSectionProps = {
  principles: readonly (typeof sparePartsPrinciples)[number][];
  steps: readonly (typeof sparePartsProcess)[number][];
};

export default function SparePartsOrderingSection({ principles, steps }: SparePartsOrderingSectionProps) {
  return (
    <>
      <Reveal>
        <p className="eyebrow text-center">How ordering works</p>
        <h2 className="section-heading text-center">Right equipment, quality parts, practical lead times</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-charcoal-muted sm:text-base">
          How we source parts and the steps from your enquiry to dispatch
        </p>
      </Reveal>

      <Reveal delay={60}>
        <SparePartsPrinciplesGrid items={principles} />
      </Reveal>

      <Reveal delay={100} className="mt-12">
        <p className="text-center text-xs font-bold uppercase tracking-[0.14em] text-olive">The process</p>
        <h3 className="mt-2 text-center text-xl font-display sm:text-2xl">From specification to dispatch</h3>
        <div className="mt-8">
          <SparePartsProcessFlow steps={steps} />
        </div>
      </Reveal>
    </>
  );
}
