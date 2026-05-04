import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/properties", label: "Properties" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-gradient-gold font-serif text-lg font-bold text-gold-foreground">D</span>
          <span className="font-serif text-lg leading-tight">
            <span className="block font-semibold">Dream Team</span>
            <span className="-mt-1 block text-xs tracking-[0.3em] text-gold uppercase">Legacy</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-sm bg-gradient-gold px-5 py-2 text-sm font-medium text-gold-foreground shadow-gold transition-transform hover:-translate-y-0.5"
          >
            Get Started
          </Link>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/40 py-3 text-sm"
                activeProps={{ className: "text-gold" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
