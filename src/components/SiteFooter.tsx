import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, Mail, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-background/90">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-gradient-gold font-serif text-lg font-bold text-gold-foreground">D</span>
            <span className="font-serif text-lg">
              <span className="block font-semibold">Dream Team</span>
              <span className="-mt-1 block text-xs tracking-[0.3em] text-gold uppercase">Legacy</span>
            </span>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-background/70">
            Building knowledge. Building wealth. Building legacy. Guiding individuals toward smart, verified real estate investments.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">Explore</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/properties" className="hover:text-gold">Properties</Link></li>
            <li><Link to="/team" className="hover:text-gold">Team</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">Connect</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +234 800 000 0000</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@dreamteamlegacy.com</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Instagram" className="rounded-full border border-background/20 p-2 hover:border-gold hover:text-gold"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="rounded-full border border-background/20 p-2 hover:border-gold hover:text-gold"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="rounded-full border border-background/20 p-2 hover:border-gold hover:text-gold"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-background/60">
          Dream Team Legacy © 2026 — Building knowledge. Building wealth. Building legacy.
        </div>
      </div>
    </footer>
  );
}
