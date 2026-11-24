import { createFileRoute, Link } from "@tanstack/react-router";
import { CTA } from "@/components/site";
import { meta, PHONE, TEL, WA } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => meta("Driving lessons in Harare", "Class 4 manual and automatic driving lessons across Harare, with free pick-up and practice on the real test routes."),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-14 md:grid-cols-12 md:pt-24">
        <div className="md:col-span-7">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Harare · Since 2009</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
            Learn to drive<br />on Harare roads,<br /><em className="text-primary">not a car park.</em>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">Class 4 lessons in manual and automatic cars. We pick you up, and we know the test routes.</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={WA} className="rounded-sm bg-accent px-5 py-3 font-medium text-accent-foreground hover:opacity-90">WhatsApp us</a>
            <a href={TEL} className="font-mono text-sm underline underline-offset-4">{PHONE}</a>
          </div>
        </div>
        <dl className="grid grid-cols-2 gap-px self-end border border-border bg-border md:col-span-5">
          {[["2,400+", "students licensed"], ["87%", "first-time pass rate"], ["6", "dual-control cars"], ["Mon–Sat", "06:00 – 18:00"]].map(([v, l]) => (
            <div key={l} className="bg-card p-5"><dt className="font-display text-3xl">{v}</dt><dd className="mt-1 text-sm text-muted-foreground">{l}</dd></div>
          ))}
        </dl>
      </section>
      <div className="road-line" />
      <section className="mx-auto grid max-w-6xl gap-px px-5 py-20 md:grid-cols-3">
        {[
          { to: "/lessons" as const, n: "01", t: "How lessons work", d: "From provisional licence to test day, in four stages." },
          { to: "/prices" as const, n: "02", t: "Prices", d: "Single lessons, bundles and test-day hire. USD, EcoCash accepted." },
          { to: "/areas" as const, n: "03", t: "Pick-up areas", d: "Free pick-up from most suburbs, work or campus." },
        ].map((c) => (
          <Link key={c.to} to={c.to} className="group border-t border-border py-6 md:px-6 md:first:pl-0">
            <span className="font-mono text-sm text-muted-foreground">{c.n}</span>
            <h2 className="mt-3 font-display text-2xl group-hover:text-primary">{c.t} →</h2>
            <p className="mt-2 text-muted-foreground">{c.d}</p>
          </Link>
        ))}
      </section>
      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <blockquote className="max-w-3xl font-display text-2xl leading-snug md:text-3xl">“I failed twice at another school. Mr Moyo took me through the test route four times and I passed the next week.”</blockquote>
          <p className="mt-4 text-sm text-muted-foreground">— Rutendo C., Mabelreign</p>
        </div>
      </section>
      <CTA />
    </>
  );
}
