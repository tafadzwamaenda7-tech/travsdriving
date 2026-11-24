import { createFileRoute } from "@tanstack/react-router";
import { CTA, PageHead } from "@/components/site";
import { meta } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => meta("About us", "Meet the VID-registered instructors behind Kopje Driving School, teaching in Harare since 2009."),
  component: About,
});

const team = [
  ["T. Moyo", "Founder, senior instructor", "17 years"],
  ["R. Chikwanha", "Instructor, manual & automatic", "9 years"],
  ["S. Ndlovu", "Instructor, nervous drivers", "6 years"],
];

function About() {
  return (
    <>
      <PageHead kicker="About" title="A small school that does one thing properly.">Started in 2009 with one Corolla and a lot of patience. Today we have six cars and three instructors — still small enough to know every student by name.</PageHead>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2">
        <div className="space-y-4 text-lg leading-relaxed">
          <p>We teach the way the test is actually marked. No shortcuts, no promises we can't keep about "guaranteed passes".</p>
          <p>Nervous? Most of our students are. We start slow, explain everything, and never shout.</p>
        </div>
        <ul className="divide-y divide-border border-y border-border">
          {team.map(([n, r, y]) => (
            <li key={n} className="flex items-baseline justify-between gap-4 py-5">
              <div><p className="font-display text-xl">{n}</p><p className="text-sm text-muted-foreground">{r}</p></div>
              <span className="font-mono text-xs text-muted-foreground">{y}</span>
            </li>
          ))}
        </ul>
      </section>
      <CTA />
    </>
  );
}
