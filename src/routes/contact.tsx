import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Phone, Mail, MessageCircle, Instagram, Youtube, Music2, Facebook, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dream Team Legacy" },
      { name: "description", content: "Talk to us about buying land, learning real estate investment, or exploring opportunities." },
      { property: "og:title", content: "Contact — Dream Team Legacy" },
      { property: "og:description", content: "Let's help you get started on your real estate journey." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="bg-ink py-24 text-background md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-gold">Contact</p>
          <h1 className="font-serif text-5xl md:text-7xl">Let's help you <span className="italic text-gold">get started.</span></h1>
          <p className="mt-6 max-w-2xl text-background/70">
            Whether you're looking to buy land, learn about real estate investment, or exploring opportunities, we're here to guide you.
          </p>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <div className="space-y-6">
            <a href="tel:+2347016503492" className="flex items-start gap-4 rounded-sm border border-border bg-card p-6 transition-colors hover:border-gold">
              <Phone className="h-6 w-6 text-gold" />
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Phone</p>
                <p className="mt-1 font-medium">+234 701 650 3492</p>
                <p className="mt-1 font-medium opacity-50 text-xs">(0814 377 7365)</p>
              </div>
            </a>
            <a href="mailto:DreamteamLegacy49@gmail.com" className="flex items-start gap-4 rounded-sm border border-border bg-card p-6 transition-colors hover:border-gold">
              <Mail className="h-6 w-6 text-gold" />
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
                <p className="mt-1 font-medium">DreamteamLegacy49@gmail.com</p>
              </div>
            </a>
            <a href="https://wa.me/2347016503492" target="_blank" rel="noopener" className="flex items-center justify-center gap-3 rounded-sm bg-gradient-gold px-6 py-4 font-medium text-gold-foreground shadow-gold transition-transform hover:-translate-y-0.5">
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
            <div className="flex gap-3 pt-2">
              <a href="https://www.instagram.com/dream_team_legacy?igsh=MW1peDU4ZnBqd3MxZw%3D%3D&utm_source=qr" target="_blank" aria-label="Instagram" className="rounded-full border border-border p-3 hover:border-gold hover:text-gold"><Instagram className="h-5 w-5" /></a>
              <a href="https://youtube.com/@dreamteamlegacy-b6w?si=-Ss4hkMIREx0ae18" target="_blank" aria-label="YouTube" className="rounded-full border border-border p-3 hover:border-gold hover:text-gold"><Youtube className="h-5 w-5" /></a>
              <a href="https://www.tiktok.com/@dreamteamlegacy?_r=1&_t=ZS-963K5P4dGZV" target="_blank" aria-label="TikTok" className="rounded-full border border-border p-3 hover:border-gold hover:text-gold"><Music2 className="h-5 w-5" /></a>
            </div>
          </div>

          <form className="space-y-4 rounded-sm border border-border bg-card p-8" onSubmit={(e) => e.preventDefault()}>
            <h2 className="font-serif text-2xl">Send us a message</h2>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
              <input className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold" placeholder="Your full name" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
              <input type="email" className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea rows={5} className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold" placeholder="Tell us how we can help..." />
            </div>
            <button className="w-full rounded-sm bg-ink px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-gold hover:text-gold-foreground">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

