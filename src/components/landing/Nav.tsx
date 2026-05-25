import { Leaf, ShoppingBag } from "lucide-react";

export function Nav({ cartCount }: { cartCount: number }) {
  const links = [
    { href: "#benefits", label: "Benefits" },
    { href: "#about", label: "About" },
    { href: "#shop", label: "Shop" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-serif text-xl text-primary">
          <Leaf className="w-5 h-5" />
          <span>Moringa Aura</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <button className="relative inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition">
          <ShoppingBag className="w-4 h-4" />
          <span>Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-clay text-primary-foreground text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
