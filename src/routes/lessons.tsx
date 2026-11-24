import { createFileRoute } from "@tanstack/react-router";
import { CTA, PageHead } from "@/components/site";
import { meta } from "@/lib/site";

export const Route = createFileRoute("/lessons")({
  head: () => meta("How lessons work", "Our four-stage route from provisional licence to passing your VID driving test in Harare."),
  component: Lessons,
});

const steps = [
  ["01", "Provisional licence", "We help you prepare for the VID oral test — road signs, rules and the questions people get stuck on.", "1–2 weeks"],
  ["02", "Car control", "Clutch, gears, steering and mirrors on quiet streets in Avondale and Belgravia.", "Lessons 1–6"],
  ["03", "Traffic", "Roundabouts, robots, kombis and the CBD at rush hour — calmly.", "Lessons 7–14"],
  ["04", "Test routes", "Hill start, three-point turn, reverse and parallel parking on the routes examiners use.", "Lessons 15–20"],
];

function Lessons() {
  return (
    <>
      <PageHead kicker="Lessons" title="From learner to licence, in four stages.">Every lesson is one-on-one in a dual-control car. You get a written note after each one so you know what to practise.</PageHead>
      <section className="mx-auto max-w-6xl px-5 py-16">
        <ol className="divide-y divide-border border-y border-border">
          {steps.map(([n, t, d, w]) => (
            <li key={n} className="grid gap-2 py-8 md:grid-cols-[80px_1fr_2fr_140px] md:gap-8">
              <span className="font-mono text-sm text-muted-foreground">{n}</span>
              <h2 className="font-display text-2xl">{t}</h2>
              <p className="text-muted-foreground">{d}</p>
              <p className="font-mono text-xs uppercase tracking-widest text-primary md:text-right">{w}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 md:grid-cols-2">
        {[["Manual", "Toyota Corolla and Honda Fit. Most licences in Zimbabwe are taken in manual — it lets you drive both."], ["Automatic", "Toyota Aqua. Quicker to learn; your licence will be restricted to automatic cars."]].map(([t, d]) => (
          <div key={t} className="border border-border bg-card p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Class 4</p>
            <h3 className="mt-2 font-display text-3xl">{t}</h3>
            <p className="mt-3 text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
      <CTA />
    </>
  );
}
