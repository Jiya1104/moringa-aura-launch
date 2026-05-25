import { Leaf, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-serif text-2xl">
            <Leaf className="w-5 h-5" /> Moringa Aura
          </div>
          <p className="mt-4 text-sm opacity-80 max-w-sm">
            Nature's most complete superfood — sustainably grown, ethically sourced, lovingly crafted.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li><a href="#about" className="hover:opacity-100">About us</a></li>
            <li><a href="#shop" className="hover:opacity-100">Shop</a></li>
            <li><a href="#faq" className="hover:opacity-100">FAQ</a></li>
            <li><a href="#" className="hover:opacity-100">Privacy policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg">Connect</h4>
          <ul className="mt-4 space-y-3 text-sm opacity-80">
            <li className="flex items-center gap-2"><Instagram className="w-4 h-4" /> @moringa.aura</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@moringaaura.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs opacity-70 flex flex-wrap justify-between gap-2">
          <p>© {new Date().getFullYear()} Moringa Aura. All rights reserved.</p>
          <p>Made with leaves, light & love.</p>
        </div>
      </div>
    </footer>
  );
}
