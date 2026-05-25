import aboutImg from "@/assets/about-leaves.jpg";
import { Check } from "lucide-react";

export function About() {
  const points = [
    "Hand-harvested from regenerative Indian farms",
    "Shade-dried at low temperature to preserve nutrients",
    "Zero chemicals, fillers, or preservatives",
    "Third-party lab verified for purity",
  ];
  return (
    <section id="about" className="py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-soft aspect-[4/5]">
            <img src={aboutImg} alt="Fresh moringa leaves and seeds" className="w-full h-full object-cover" loading="lazy" width={1200} height={900} />
          </div>
          <div className="absolute -bottom-8 -right-4 md:-right-8 bg-card rounded-3xl shadow-card p-6 max-w-[220px] border border-border">
            <div className="font-serif text-3xl text-primary">25×</div>
            <p className="text-xs text-muted-foreground mt-1">more iron than spinach, gram for gram.</p>
          </div>
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-leaf">About moringa</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-primary">The miracle tree, rediscovered.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            For over 4,000 years, Moringa Oleifera has been revered across India and Africa as a source of life.
            One leaf contains complete amino acids, calcium, iron, and powerful adaptogens — earning its place as
            the most nutrient-dense plant ever studied.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 w-6 h-6 rounded-full bg-gradient-leaf text-primary-foreground flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span className="text-foreground/80">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
