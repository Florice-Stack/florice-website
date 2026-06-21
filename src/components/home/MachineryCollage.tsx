import Image from "next/image";

export default function MachineryCollage() {
  return (
    <figure className="w-full">
      <p className="mb-3 hidden text-[11px] font-semibold uppercase tracking-[0.12em] text-olive lg:block">
        Mill machinery expertise
      </p>
      <div className="overflow-hidden rounded-sm border border-[var(--border)] bg-white shadow-lift">
        <Image
          src="/machinery/mill-equipment-collage.png"
          alt="Grain milling equipment including pre-cleaner, polisher, aspiration system, paddy separator, and whitener"
          width={1024}
          height={1024}
          priority
          className="h-auto w-full object-contain"
          sizes="(max-width: 1024px) 100vw, 440px"
        />
      </div>
      <figcaption className="mt-3 hidden text-center text-[11px] leading-relaxed text-charcoal-muted lg:block">
        Pre-cleaner · polisher · aspiration · paddy separator · whitener
      </figcaption>
    </figure>
  );
}
