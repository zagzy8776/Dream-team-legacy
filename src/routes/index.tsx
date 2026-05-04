import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ShieldCheck, GraduationCap, Eye, TrendingUp, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dream Team Legacy — Smart & Verified Real Estate Investments" },
      { name: "description", content: "Guiding you to smart and verified real estate investments through trusted opportunities and proper guidance." },
    ],
  }),
  component: HomePage,
});

const reasons = [
  { icon: ShieldCheck, title: "Verified Opportunities", text: "Every property is vetted through trusted partners." },
  { icon: GraduationCap, title: "Guidance & Education", text: "We help you understand what you're investing in." },
  { icon: Eye, title: "Transparency", text: "Honest information at every step of the journey." },
  { icon: TrendingUp, title: "Long-Term Mindset", text: "We focus on legacy, not quick wins." },
];

const services = [
  { title: "Real Estate Investment Guidance", text: "Helping people understand and access verified real estate opportunities." },
  { title: "Property Marketing", text: "Connecting buyers with trusted property companies and investment opportunities." },
  { title: "Investment Awareness", text: "Educating people about ROI, location advantages, and long-term property growth." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink text-background">
        <img
          src={heroImg}
          alt="Modern skyline at golden hour"
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/60 via-ink/70 to-ink" />
        <div className="mx-auto max-w-7xl px-6 py-32 md:py-44">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-gold">Dream Team Legacy</p>
          <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] md:text-7xl">
            Guiding You to <span className="italic text-gold">Smart & Verified</span> Real Estate Investments
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-background/75 leading-relaxed">
            Dream Team Legacy helps individuals and investors make confident real estate decisions through trusted property opportunities, proper guidance, and a long-term investment mindset.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/properties" className="inline-flex items-center gap-2 rounded-sm bg-gradient-gold px-7 py-3.5 text-sm font-medium text-gold-foreground shadow-gold transition-transform hover:-translate-y-0.5">
              View Properties <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm border border-background/30 px-7 py-3.5 text-sm font-medium text-background transition-colors hover:border-gold hover:text-gold">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">Why Choose Us</p>
            <h2 className="font-serif text-4xl md:text-5xl">We don't just market properties.</h2>
            <p className="mt-4 text-muted-foreground">We help people understand what they're investing in.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <div key={r.title} className="group rounded-sm border border-border bg-card p-8 transition-all hover:border-gold hover:shadow-elegant">
                <r.icon className="h-8 w-8 text-gold" />
                <h3 className="mt-6 text-xl font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
            <div className="max-w-xl">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">What We Do</p>
              <h2 className="font-serif text-4xl md:text-5xl">Services built around your investment journey.</h2>
            </div>
          </div>
          <div className="grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-3">
            {services.map((s, i) => (
              <div key={s.title} className="bg-background p-10">
                <span className="font-serif text-3xl text-gold">0{i + 1}</span>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-24 text-background">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl">Ready to invest <span className="italic text-gold">the right way?</span></h2>
          <p className="mx-auto mt-6 max-w-xl text-background/70">Let's help you take the first step toward building wealth through real estate.</p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-sm bg-gradient-gold px-8 py-4 text-sm font-medium text-gold-foreground shadow-gold">
            Let's Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
