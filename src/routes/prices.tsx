import { createFileRoute } from "@tanstack/react-router";
import { CTA, PageHead } from "@/components/site";
import { meta } from "@/lib/site";

export const Route = createFileRoute("/prices")({
  head: () => meta("Prices", "Driving lesson prices in Harare: single lessons, 20-lesson learner bundles and test-day car hire."),
  component: Prices,
});

const packages = [
  { name: "Single lesson", detail: "30 minutes, one-on-one", price: "$15", note: "Good for a refresher" },
  { name: "10 lessons", detail: "Pay upfront, use within 2 months", price: "$140", note: "Save $10" },
  { name: "Learner bundle", detail: "20 lessons + test route practice", price: "$270", note: "Most students start here", featured: true },
  { name: "Test day", detail: "Warm-up lesson + car for the test", price: "$45", note: "Book once you have a date" },
  { name: "Oral test prep", detail: "Two classroom sessions + booklet", price: "$20", note: "Before your provisional" },
];

function Prices() {
  return (
    <>
      <PageHead kicker="Prices" title="Simple prices. No surprises on test day.">All prices in USD and include pick-up and fuel. Pay cash, EcoCash or bank transfer.</PageHead>
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="divide-y divide-border border-y border-border">
          {packages.map((p) => (
            <div key={p.name} className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 py-6 md:grid-cols-[1.2fr_1.5fr_1fr_auto]">
              <h2 className="text-lg font-semibold">{p.name}{p.featured && <span className="ml-3 rounded-sm bg-accent px-2 py-0.5 align-middle font-mono text-[10px] uppercase tracking-wider text-accent-foreground">Popular</span>}</h2>
              <p className="order-3 col-span-2 text-muted-foreground md:order-none md:col-span-1">{p.detail}</p>
              <p className="hidden text-sm text-muted-foreground md:block">{p.note}</p>
              <p className="font-display text-3xl">{p.price}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">VID test fees are paid directly to VID and are not included.</p>
      </section>
      <CTA />
    </>
  );
}
