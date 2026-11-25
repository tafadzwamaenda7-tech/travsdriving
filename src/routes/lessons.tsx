import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";

import { CTA, FAQ, JourneyShowcase, PageHero, SectionTop } from "@/components/site";
import { IMG, lessonsFaq } from "@/lib/content";
import { meta } from "@/lib/site";

export const Route = createFileRoute("/lessons")({
  head: () =>
    meta(
      "How lessons work",
      "Our four-stage route from provisional licence to passing your VID driving test in Harare — with free pick-up and one-on-one lessons.",
    ),
  component: Lessons,
});

const cars = [
  {
    label: "The default choice",
    title: "Manual",
    image: IMG.wheel,
    alt: "A driver in Zimbabwe",
    copy: "Toyota Corolla and Honda Fit. Most Zimbabwean licences are taken in a manual, which means you can drive both manual and automatic afterwards. More to learn, more freedom.",
    points: [
      "Clutch control and hill starts",
      "Toyota Corolla · Honda Fit",
      "Licence covers both transmissions",
    ],
  },
  {
    label: "The quicker route",
    title: "Automatic",
    image: IMG.hands,
    alt: "A learner with a provisional licence",
    copy: "Toyota Aqua. No clutch, fewer things to think about at once — good if you already drive an automatic and just need the licence. Your licence will be restricted to automatics.",
    points: ["No clutch or gear changes", "Toyota Aqua", "Licence is automatic-only"],
  },
] as const;

const included = [
  ["Pick-up & drop-off", "From home, work or campus in our covered suburbs."],
  ["Dual-control car", "Your own car, and a brake on ours. Nothing is left to chance."],
  ["A note after each lesson", "What went well, what to practise, what happens next."],
  ["Test-route time", "Built into the learner bundle — not sold as an extra."],
] as const;

function Lessons() {
  return (
    <>
      <PageHero
        kicker="Lessons · Class 4"
        title={<>Patient lessons, built around the test.</>}
        intro="Every lesson is one-on-one in a dual-control car. You get a short written note afterwards so you know exactly what to practise next."
        image={IMG.lessonCar}
        imageAlt="A driver with his car in Zimbabwe"
        imageCaption="One student, one instructor, one car"
      >
        <a href="#journey" className="btn btn-primary">
          See the four stages <ArrowUpRight size={17} />
        </a>
      </PageHero>

      <section id="journey" className="bg-surface-soft py-20 md:py-24">
        <div className="shell">
          <SectionTop
            kicker="The method"
            title={<>From learner to licence.</>}
            intro="Twenty lessons is the usual route. Some people need fewer, some need more — we go by how you drive, not by a timetable."
          />
          <div className="mt-12">
            <JourneyShowcase />
          </div>
        </div>
      </section>

      <section className="shell py-20 md:py-24">
        <SectionTop
          kicker="Choose your car"
          title={<>Manual or automatic?</>}
          intro="Both cars are dual-control, insured and maintained by us. The choice changes your licence, so we'll talk it through before you start."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {cars.map((car) => (
            <article key={car.title} className="surface-card overflow-hidden">
              <div className="h-52 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.alt}
                  className="photo-soft h-full w-full object-cover"
                />
              </div>
              <div className="p-7 md:p-9">
                <p className="eyebrow text-blue">{car.label}</p>
                <h3 className="display-sm mt-3 text-3xl text-ink">{car.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-text">{car.copy}</p>
                <ul className="mt-7 grid gap-3 text-sm text-ink-soft">
                  {car.points.map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-soft text-blue">
                        <Check size={13} strokeWidth={2.5} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface-soft py-20 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="eyebrow text-blue">Every lesson includes</p>
            <h2 className="display-sm mt-4 text-[clamp(1.9rem,3.6vw,2.9rem)] text-ink">
              The small things add up.
            </h2>
            <p className="lede mt-4 max-w-md">
              Nothing is billed as an extra once you&apos;re in a lesson. It&apos;s all part of
              teaching you properly.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {included.map(([title, detail], i) => (
              <div key={title} className="surface-card p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-soft text-xs font-semibold text-blue-deep">
                  0{i + 1}
                </span>
                <h3 className="display-sm mt-5 text-lg text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-text">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <p className="eyebrow text-blue">Questions</p>
            <h2 className="display-sm mt-4 text-3xl text-ink">
              The things people ask before booking.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <FAQ items={lessonsFaq} />
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
