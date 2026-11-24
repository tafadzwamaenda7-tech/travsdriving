import { createFileRoute } from "@tanstack/react-router";
import { CTA, PageHead } from "@/components/site";
import { meta } from "@/lib/site";

export const Route = createFileRoute("/areas")({
  head: () => meta("Pick-up areas", "Free driving lesson pick-up across Harare suburbs including Avondale, Borrowdale, Mabelreign and the CBD."),
  component: Areas,
});

const zones = [
  ["North", ["Avondale", "Borrowdale", "Mt Pleasant", "Highlands", "Marlborough", "Greendale"]],
  ["West", ["Mabelreign", "Belvedere", "Milton Park", "Warren Park"]],
  ["South", ["Waterfalls", "Hatfield", "Southerton"]],
  ["Central", ["CBD", "Avenues", "UZ campus"]],
] as const;

function Areas() {
  return (
    <>
      <PageHead kicker="Areas" title="We come to you.">Free pick-up from home, work or campus in the suburbs below. Further out? Ask — we usually make it work for a small fee.</PageHead>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-4">
        {zones.map(([z, list]) => (
          <div key={z}>
            <h2 className="border-b border-border pb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">{z}</h2>
            <ul className="mt-4 space-y-2 text-lg">{list.map((a) => <li key={a}>{a}</li>)}</ul>
          </div>
        ))}
      </section>
      <CTA />
    </>
  );
}
