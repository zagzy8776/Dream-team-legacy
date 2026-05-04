import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Dream Team Legacy" },
      { name: "description", content: "Meet the passionate team behind Dream Team Legacy." },
      { property: "og:title", content: "Team — Dream Team Legacy" },
      { property: "og:description", content: "Powered by people committed to growth and helping clients invest wisely." },
    ],
  }),
  component: TeamPage,
});

const team = [
  { name: "Adaeze O.", role: "Founder & Lead Advisor", initials: "AO" },
  { name: "Tunde A.", role: "Property Partnerships", initials: "TA" },
  { name: "Chiamaka E.", role: "Investment Education", initials: "CE" },
  { name: "Samuel K.", role: "Client Relations", initials: "SK" },
];

function TeamPage() {
  return (
    <SiteLayout>
      <section className="bg-ink py-24 text-background md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-gold">Our Team</p>
          <h1 className="font-serif text-5xl md:text-6xl">A team committed to your <span className="italic text-gold">success.</span></h1>
          <p className="mt-6 max-w-2xl text-background/70">
            Dream Team Legacy is powered by a passionate team committed to growth, learning, and helping people make better real estate decisions.
          </p>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="group rounded-sm border border-border bg-card p-8 text-center transition-all hover:border-gold hover:shadow-elegant">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-gold font-serif text-2xl font-semibold text-gold-foreground shadow-gold">
                {m.initials}
              </div>
              <h3 className="mt-6 font-serif text-xl">{m.name}</h3>
              <p className="mt-1 text-sm uppercase tracking-widest text-gold">{m.role}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
