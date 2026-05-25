import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "How do I consume moringa?", a: "Mix one teaspoon (3g) of powder into smoothies, juice, or warm water. For capsules, take 1–2 daily with meals." },
  { q: "Is it safe to take daily?", a: "Yes. Moringa is a food, not a supplement. Daily use is safe for most adults — consult your doctor if pregnant or on medication." },
  { q: "Does it really help immunity?", a: "Moringa contains vitamin C, zinc, and 46 antioxidants that support a balanced immune response. Consistency is key." },
  { q: "Is your moringa truly organic?", a: "Yes — certified by India Organic and USDA. Every batch is third-party lab tested for purity and heavy metals." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-leaf">FAQ</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-primary">Questions, answered.</h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="bg-card rounded-2xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left px-6 py-5"
                >
                  <span className="font-serif text-lg text-primary">{f.q}</span>
                  {isOpen ? <Minus className="w-4 h-4 text-leaf" /> : <Plus className="w-4 h-4 text-leaf" />}
                </button>
                {isOpen && <div className="px-6 pb-5 text-sm text-muted-foreground">{f.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
