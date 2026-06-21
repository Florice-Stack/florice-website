import { missionItems } from "@/lib/content";

export default function MissionStrip() {
  return (
    <section className="border-y border-[var(--border)] bg-ivory-muted py-12">
      <div className="container-content grid gap-8 md:grid-cols-3">
        {missionItems.map((item) => (
          <div key={item.title}>
            <h3 className="font-serif text-xl text-charcoal">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-charcoal-muted">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
