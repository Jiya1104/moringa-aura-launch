import { Instagram } from "lucide-react";
import i1 from "@/assets/insta-1.jpg";
import i2 from "@/assets/insta-2.jpg";
import i3 from "@/assets/insta-3.jpg";
import i4 from "@/assets/insta-4.jpg";

const posts = [i1, i2, i3, i4];

export function InstagramFeed() {
  return (
    <section className="py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-leaf">@moringa.aura</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-primary">From our community</h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm text-primary hover:opacity-80">
            <Instagram className="w-4 h-4" /> Follow us
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {posts.map((src, i) => (
            <a key={i} href="#" className="group relative aspect-square overflow-hidden rounded-2xl">
              <img src={src} alt={`Instagram post ${i + 1}`} loading="lazy" width={600} height={600} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 flex items-center justify-center transition">
                <Instagram className="w-6 h-6 text-primary-foreground opacity-0 group-hover:opacity-100 transition" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
