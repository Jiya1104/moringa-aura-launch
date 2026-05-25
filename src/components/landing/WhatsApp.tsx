import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/911234567890"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-leaf text-primary-foreground shadow-soft flex items-center justify-center hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute inline-flex h-full w-full rounded-full bg-leaf opacity-40 animate-ping" />
    </a>
  );
}
