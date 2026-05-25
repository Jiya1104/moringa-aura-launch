import { Shield, Heart, Sparkles, Zap, Leaf, Droplets } from "lucide-react";

const benefits = [
  { icon: Sparkles, title: "Rich in Antioxidants", desc: "46+ antioxidants neutralize free radicals." },
  { icon: Shield, title: "Supports Immunity", desc: "Loaded with vitamin C, A & zinc." },
  { icon: Heart, title: "Hair & Skin Glow", desc: "Bioactive compounds for radiant skin." },
  { icon: Zap, title: "Natural Energy", desc: "Sustained boost without the crash." },
  { icon: Leaf, title: "Vegan & Organic", desc: "Plant-based, USDA & India Organic." },
  { icon: Droplets, title: "Detox Support", desc: "Gentle cleanse for liver & gut." },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-leaf">Why moringa</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-primary">A single leaf with infinite benefits</h2>
          <p className="mt-4 text-muted-foreground">Backed by ancient Ayurveda and modern science — the most nutrient-dense plant on earth.</p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <div key={i} className="group bg-card border border-border rounded-3xl p-8 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-accent/60 flex items-center justify-center text-leaf-dark group-hover:bg-gradient-leaf group-hover:text-primary-foreground transition">
                <b.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-5 font-serif text-xl text-primary">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
