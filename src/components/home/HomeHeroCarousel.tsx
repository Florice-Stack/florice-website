"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    src: "/home/carousel/rice-mill-operations.png",
    alt: "Supervisor reviewing rice mill operations with staff beside milling machinery and conveyors",
  },
  {
    src: "/home/carousel/flour-mill-maintenance.png",
    alt: "Technician maintaining roller flour mill equipment on a wheat milling floor",
  },
  {
    src: "/home/carousel/plant-installation.png",
    alt: "Engineering team supervising machinery installation in a food processing plant",
  },
  {
    src: "/home/carousel/food-processing-line.png",
    alt: "Quality team monitoring an automated food packaging and processing line",
  },
  {
    src: "/home/carousel/rice-mill-inspection.png",
    alt: "Consultant inspecting rice quality at a mill with safety signage and grain storage in the background",
  },
] as const;

const AUTO_ADVANCE_MS = 4000;

export default function HomeHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  }, []);

  const goNext = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section
      className="relative border-b border-[var(--border)] bg-charcoal"
      aria-label="Featured milling and processing imagery"
      aria-roledescription="carousel"
    >
      <div className="relative aspect-[16/10] w-full sm:aspect-[21/9] lg:aspect-[24/9]">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 motion-safe:transition-opacity motion-safe:duration-500 ${
              index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/35 via-transparent to-charcoal/10"
          aria-hidden
        />

        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-4 pb-4 sm:px-6">
          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => goTo(index)}
                className={`h-2.5 rounded-full motion-safe:transition-all motion-safe:duration-200 ${
                  index === activeIndex ? "w-7 bg-white" : "w-2.5 bg-white/45 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1} of ${slides.length}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-charcoal/35 text-white backdrop-blur-sm motion-safe:transition-colors motion-safe:duration-200 hover:bg-charcoal/55"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-charcoal/35 text-white backdrop-blur-sm motion-safe:transition-colors motion-safe:duration-200 hover:bg-charcoal/55"
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
