import heroJar from "@/assets/hero-jar.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-leaf/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/40 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-leaf-dark bg-card/70 border border-border rounded-full px-4 py-2">
            <Sparkles className="w-3.5 h-3.5" /> 100% Organic · Lab Tested
          </span>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-primary">
            Nature's Superfood for Energy, Immunity & Wellness
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Cold-processed moringa from regenerative Indian farms — rich in antioxidants,
            vitamins and plant protein. One scoop, infinite vitality.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#shop" className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-medium shadow-soft hover:translate-y-[-2px] transition">
              Shop Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>
            <a href="#benefits" className="inline-flex items-center gap-2 rounded-full border border-primary/30 text-primary px-7 py-4 text-sm font-medium hover:bg-primary/5 transition">
              Explore Benefits
            </a>
          </div>
          <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
            <div><div className="font-serif text-2xl text-primary">10k+</div>Happy customers</div>
            <div className="h-8 w-px bg-border" />
            <div><div className="font-serif text-2xl text-primary">4.9★</div>Avg. rating</div>
            <div className="h-8 w-px bg-border" />
            <div><div className="font-serif text-2xl text-primary">100%</div>Organic</div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 -m-8 rounded-full bg-card/40 blur-2xl" aria-hidden />
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-soft animate-float">
            <img src={heroJar} alt="Moringa Aura premium organic powder jar" className="w-full h-full object-cover" width={1280} height={1280} />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-card px-5 py-4 border border-border">
            <div className="text-xs text-muted-foreground">Per serving</div>
            <div className="font-serif text-xl text-primary">92 nutrients</div>
          </div>
          <div className="absolute -top-6 -right-6 bg-card rounded-2xl shadow-card px-5 py-4 border border-border">
            <div className="text-xs text-muted-foreground">Sourced from</div>
            <div className="font-serif text-xl text-primary">Tamil Nadu 🇮🇳</div>
          </div>
        </div>
      </div>
    </section>
  );
}
