import { Star } from "lucide-react";

const reviews = [
  { name: "Ananya P.", role: "Yoga instructor", text: "My morning ritual. I feel lighter, focused, and my skin has never looked better.", initial: "A" },
  { name: "Marcus W.", role: "Triathlete", text: "Replaced my pre-workout with one scoop of Moringa Aura. Clean energy, zero jitters.", initial: "M" },
  { name: "Priya S.", role: "New mom", text: "The tea got me through postpartum recovery. Gentle, nourishing and genuinely effective.", initial: "P" },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-leaf">Loved worldwide</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-primary">Real rituals, real results.</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure key={r.name} className="bg-cream rounded-3xl p-8 border border-border shadow-card flex flex-col">
              <div className="flex gap-0.5 text-clay">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <blockquote className="mt-5 font-serif text-xl text-primary leading-snug">"{r.text}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-leaf text-primary-foreground flex items-center justify-center font-serif">{r.initial}</div>
                <div>
                  <div className="text-sm font-medium text-foreground">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
