import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Benefits } from "@/components/landing/Benefits";
import { About } from "@/components/landing/About";
import { Shop } from "@/components/landing/Shop";
import { WhyUs } from "@/components/landing/WhyUs";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { Newsletter } from "@/components/landing/Newsletter";
import { InstagramFeed } from "@/components/landing/InstagramFeed";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppButton } from "@/components/landing/WhatsApp";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Moringa Aura — Organic Superfood for Energy & Immunity" },
      { name: "description", content: "Premium organic moringa powder, tea, and capsules from regenerative Indian farms. Boost energy, immunity, hair and skin naturally." },
      { property: "og:title", content: "Moringa Aura — Nature's Superfood" },
      { property: "og:description", content: "Cold-processed organic moringa for energy, immunity & wellness." },
    ],
  }),
});

function Index() {
  const [cart, setCart] = useState<string[]>([]);
  const addToCart = (name: string) => {
    setCart((c) => [...c, name]);
    toast.success(`${name} added to cart`, { description: "Enjoy free shipping over $50." });
  };
  return (
    <>
      <Toaster position="top-center" richColors />
      <Nav cartCount={cart.length} />
      <main>
        <Hero />
        <Benefits />
        <About />
        <Shop onAdd={addToCart} />
        <WhyUs />
        <Testimonials />
        <InstagramFeed />
        <Faq />
        <Newsletter />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
