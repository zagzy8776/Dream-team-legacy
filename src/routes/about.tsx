import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Target, Eye } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dream Team Legacy" },
      { name: "description", content: "A real estate marketing brand focused on helping people invest in real estate the right way." },
      { property: "og:title", content: "About — Dream Team Legacy" },
      { property: "og:description", content: "Education, transparency, and trusted opportunities in real estate." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-ink py-24 text-background md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-gold">About Us</p>
          <h1 className="font-serif text-5xl md:text-7xl">A brand built on <span className="italic text-gold">trust</span> and legacy.</h1>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-lg leading-relaxed text-foreground/85">
            Dream Team Legacy is a real estate marketing brand focused on helping people invest in real estate the right way.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/85">
            We understand that many people are interested in property investment but lack the right knowledge, guidance, and trusted opportunities. That is why we are committed to connecting individuals with verified real estate opportunities through trusted partners.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <div className="rounded-sm bg-background p-10 shadow-elegant">
            <Target className="h-8 w-8 text-gold" />
            <h2 className="mt-6 font-serif text-3xl">Our Mission</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To guide individuals toward safe, smart, and profitable real estate investments through education, transparency, and trusted opportunities.
            </p>
          </div>
          <div className="rounded-sm bg-background p-10 shadow-elegant">
            <Eye className="h-8 w-8 text-gold" />
            <h2 className="mt-6 font-serif text-3xl">Our Vision</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To become a respected real estate brand known for helping people build long-term wealth and legacy through property investment.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
