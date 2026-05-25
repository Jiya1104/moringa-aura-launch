import powder from "@/assets/product-powder.jpg";
import tea from "@/assets/product-tea.jpg";
import capsules from "@/assets/product-capsules.jpg";
import { Plus } from "lucide-react";

const products = [
  { id: "powder", name: "Moringa Powder", desc: "Pure shade-dried leaf powder, 250g", price: 24, img: powder },
  { id: "tea", name: "Moringa Tea", desc: "20 biodegradable tea sachets", price: 18, img: tea },
  { id: "caps", name: "Moringa Capsules", desc: "60 vegan capsules · 500mg each", price: 29, img: capsules },
];

export function Shop({ onAdd }: { onAdd: (name: string) => void }) {
  return (
    <section id="shop" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-leaf">Shop the ritual</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-primary">Crafted with intention.</h2>
          </div>
          <p className="text-muted-foreground max-w-sm">Free worldwide shipping on orders over $50.</p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <article key={p.id} className="group bg-card rounded-3xl overflow-hidden border border-border shadow-card hover:shadow-soft transition-all">
              <div className="aspect-square overflow-hidden bg-sand">
                <img src={p.img} alt={p.name} loading="lazy" width={800} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-2xl text-primary">{p.name}</h3>
                  <span className="font-serif text-xl text-leaf-dark">${p.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <button
                  onClick={() => onAdd(p.name)}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition"
                >
                  <Plus className="w-4 h-4" /> Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
