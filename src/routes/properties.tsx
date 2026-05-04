import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { MapPin } from "lucide-react";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";

export const Route = createFileRoute("/properties")({
  head: () => ({
    meta: [
      { title: "Properties — Dream Team Legacy" },
      { name: "description", content: "Verified real estate opportunities with trusted partners. Browse plots, houses, and apartments." },
      { property: "og:title", content: "Properties — Dream Team Legacy" },
      { property: "og:description", content: "Browse verified real estate investment opportunities." },
    ],
  }),
  component: PropertiesPage,
});

const properties = [
  {
    img: p1,
    title: "Heritage Court Estate",
    location: "Lekki, Lagos",
    price: "₦15,000,000",
    size: "500 sqm",
    plan: "12-month payment plan",
    desc: "Fully serviced gated estate with paved roads, perimeter fencing, and 24/7 security.",
  },
  {
    img: p2,
    title: "Legacy Villas",
    location: "Ibeju-Lekki, Lagos",
    price: "₦85,000,000",
    size: "4-Bedroom Duplex",
    plan: "Outright / 6-month plan",
    desc: "Modern duplex homes in a premium estate, fitted with contemporary finishes.",
  },
  {
    img: p3,
    title: "Goldmine Acres",
    location: "Epe, Lagos",
    price: "₦4,500,000",
    size: "600 sqm",
    plan: "24-month payment plan",
    desc: "High-growth investment land with verified C of O. Ideal for long-term capital appreciation.",
  },
  {
    img: p4,
    title: "Marina Heights",
    location: "Victoria Island, Lagos",
    price: "₦220,000,000",
    size: "3-Bed Apartment",
    plan: "Outright purchase",
    desc: "Waterfront luxury apartment with marina views, premium amenities and concierge.",
  },
];

function PropertiesPage() {
  return (
    <SiteLayout>
      <section className="bg-ink py-24 text-background md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-gold">Properties</p>
          <h1 className="font-serif text-5xl md:text-6xl">Verified opportunities, <span className="italic text-gold">curated for you.</span></h1>
          <p className="mt-6 max-w-2xl text-background/70">Each listing is reviewed for authenticity, location strength, and long-term value.</p>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          {properties.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-sm border border-border bg-card transition-all hover:shadow-elegant">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-sm bg-gradient-gold px-3 py-1 text-xs font-medium text-gold-foreground">Verified</span>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl">{p.title}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-gold" /> {p.location}
                </p>
                <div className="mt-5 grid grid-cols-3 gap-3 border-y border-border py-4 text-sm">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Price</p>
                    <p className="mt-1 font-semibold text-gold">{p.price}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Size</p>
                    <p className="mt-1 font-medium">{p.size}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Plan</p>
                    <p className="mt-1 text-xs font-medium leading-tight">{p.plan}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <Link to="/contact" className="mt-6 inline-flex w-full items-center justify-center rounded-sm bg-ink px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-gold hover:text-gold-foreground">
                  Contact About This Property
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
