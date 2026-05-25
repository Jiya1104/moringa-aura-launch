import { Sprout, FlaskConical, Leaf, Globe2, Package } from "lucide-react";

const items = [
  { icon: Sprout, title: "Farm Sourced", desc: "Direct partnerships with smallholder farms." },
  { icon: FlaskConical, title: "Lab Tested", desc: "Every batch verified by independent labs." },
  { icon: Leaf, title: "Organic Ingredients", desc: "No chemicals, no fillers — ever." },
  { icon: Globe2, title: "Export Quality", desc: "Meets US, EU & Japan organic standards." },
  { icon: Package, title: "Eco Packaging", desc: "Recyclable glass + compostable refills." },
];

export function WhyUs() {
  return (
    <section className="py-24 md:py-32 bg-gradient-hero">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-leaf">Why choose us</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-primary">From soil to soul, uncompromised.</h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {items.map((it) => (
            <div key={it.title} className="bg-card/80 backdrop-blur rounded-3xl p-6 border border-border hover:bg-card transition">
              <div className="w-11 h-11 rounded-2xl bg-gradient-leaf flex items-center justify-center text-primary-foreground">
                <it.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-5 font-serif text-lg text-primary">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
