import { useState } from "react";
import { toast } from "sonner";

export function Newsletter() {
  const [email, setEmail] = useState("");
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-leaf p-10 md:p-16 text-primary-foreground shadow-soft">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent/30 blur-3xl" aria-hidden />
          <div className="relative max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] opacity-80">Join the ritual</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Get wellness tips & offers</h2>
            <p className="mt-4 opacity-90">Monthly rituals, recipes, and 10% off your first order.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!email) return;
                toast.success("Welcome to the ritual ✨", { description: "Check your inbox for 10% off." });
                setEmail("");
              }}
              className="mt-7 flex flex-col sm:flex-row gap-3 bg-background/15 backdrop-blur p-2 rounded-full border border-primary-foreground/20"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-transparent placeholder:text-primary-foreground/60 px-5 py-3 outline-none text-sm"
              />
              <button type="submit" className="rounded-full bg-background text-primary px-7 py-3 text-sm font-medium hover:opacity-90 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
