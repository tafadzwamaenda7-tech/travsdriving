import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kopje Driving School — Driving lessons in Harare" },
      { name: "description", content: "Patient, ZRP-test-focused driving lessons across Harare. Class 4 manual and automatic, pick-up from home, work or campus." },
      { property: "og:title", content: "Kopje Driving School — Driving lessons in Harare" },
      { property: "og:description", content: "Class 4 manual and automatic lessons across Harare, with pick-up included." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE = "+263 77 123 4567";
const WA = "https://wa.me/263771234567";

const packages = [
  { name: "Single lesson", detail: "30 minutes, one-on-one", price: "$15", note: "Good for a refresher" },
  { name: "Learner bundle", detail: "20 lessons + route practice", price: "$270", note: "Most students start here", featured: true },
  { name: "Test day", detail: "Warm-up lesson + car for the test", price: "$45", note: "Book once you have a date" },
];

const steps = [
  ["01", "Provisional licence", "We help you prepare for the VID oral test — road signs, rules, the lot."],
  ["02", "Lessons", "Start in quiet streets in Avondale and Belgravia, then move into town traffic."],
  ["03", "Test routes", "Practise the hill start, reverse and parallel parking the examiners actually ask for."],
  ["04", "Licence", "We take you to the test in the car you learned in."],
];

const areas = ["Avondale", "Borrowdale", "Mabelreign", "Belvedere", "Highlands", "Mt Pleasant", "Waterfalls", "Greendale", "Marlborough", "CBD"];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="/" className="flex items-baseline gap-2">
            <span className="font-display text-xl font-semibold tracking-tight">Kopje</span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Driving School</span>
          </a>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#how" className="hover:text-primary">How it works</a>
            <a href="#prices" className="hover:text-primary">Prices</a>
            <a href="#areas" className="hover:text-primary">Areas</a>
          </nav>
          <a href={WA} className="rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">Book a lesson</a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-14 md:grid-cols-12 md:pt-24">
          <div className="md:col-span-7">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Harare · Since 2009</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
              Learn to drive<br />on Harare roads,<br /><em className="text-primary">not a car park.</em>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Class 4 lessons in manual and automatic cars. We pick you up from home, work or campus, and we know the test routes.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={WA} className="rounded-sm bg-accent px-5 py-3 font-medium text-accent-foreground hover:opacity-90">WhatsApp us</a>
              <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="font-mono text-sm underline underline-offset-4">{PHONE}</a>
            </div>
          </div>
          <dl className="grid grid-cols-2 content-end gap-px self-end border border-border bg-border md:col-span-5">
            {[["2,400+", "students licensed"], ["87%", "first-time pass rate"], ["6", "dual-control cars"], ["Mon–Sat", "06:00 – 18:00"]].map(([v, l]) => (
              <div key={l} className="bg-card p-5">
                <dt className="font-display text-3xl">{v}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="road-line" />

        <section id="how" className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <h2 className="font-display text-3xl md:text-4xl">From learner to licence</h2>
            <ol className="mt-12 grid gap-10 md:grid-cols-4">
              {steps.map(([n, t, d]) => (
                <li key={n} className="border-t border-primary-foreground/30 pt-5">
                  <span className="font-mono text-sm text-accent">{n}</span>
                  <h3 className="mt-3 text-lg font-semibold">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-80">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="prices" className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl md:text-4xl">Prices</h2>
            <p className="text-sm text-muted-foreground">USD. Pay cash, EcoCash or bank transfer.</p>
          </div>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {packages.map((p) => (
              <div key={p.name} className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 py-6 md:grid-cols-[1.2fr_1.5fr_1fr_auto]">
                <h3 className="text-lg font-semibold">
                  {p.name}
                  {p.featured && <span className="ml-3 rounded-sm bg-accent px-2 py-0.5 align-middle font-mono text-[10px] uppercase tracking-wider text-accent-foreground">Popular</span>}
                </h3>
                <p className="order-3 col-span-2 text-muted-foreground md:order-none md:col-span-1">{p.detail}</p>
                <p className="hidden text-sm text-muted-foreground md:block">{p.note}</p>
                <p className="font-display text-3xl">{p.price}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="areas" className="border-t border-border bg-secondary">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl md:text-4xl">Where we pick up</h2>
              <p className="mt-4 max-w-sm text-muted-foreground">Free pick-up across most of Harare. Further out? Ask — we usually make it work.</p>
            </div>
            <ul className="flex flex-wrap content-start gap-2">
              {areas.map((a) => (
                <li key={a} className="rounded-sm border border-border bg-card px-3 py-1.5 text-sm">{a}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <blockquote className="max-w-3xl font-display text-2xl leading-snug md:text-3xl">
            “I failed twice at another school. Mr Moyo took me through the Mbare test route four times and I passed the next week.”
          </blockquote>
          <p className="mt-4 text-sm text-muted-foreground">— Rutendo C., Mabelreign</p>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 text-sm text-muted-foreground md:grid-cols-3">
          <p><span className="font-display text-base text-foreground">Kopje Driving School</span><br />14 Fife Avenue, Harare</p>
          <p>{PHONE}<br />hello@kopjedriving.co.zw</p>
          <p className="md:text-right">© {new Date().getFullYear()} Kopje Driving School</p>
        </div>
      </footer>
    </div>
  );
}
