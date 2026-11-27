import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";

import { Reveal } from "@/components/motion";
import { CTA, FAQ, JourneyBento, PageHero, SectionTop } from "@/components/site";
import { lessonsFaq } from "@/lib/content";
import { PHOTO, VIDEO } from "@/lib/media";
import { meta } from "@/lib/site";

export const Route = createFileRoute("/lessons")({
  head: () => ({
    ...meta(
      "How lessons work",
      "Our four-stage route from provisional licence to passing your VID driving test in Harare — with free pick-up and one-on-one lessons.",
    ),
    links: [{ rel: "preload", as: "image", href: VIDEO.fleet.poster }],
  }),
  component: Lessons,
});

const cars = [
  {
    label: "The default choice",
    title: "Manual",
    image: PHOTO.carDetail,
    alt: "A Travis learner car with its L-plate",
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
    image: PHOTO.fleet,
    alt: "Travis Driving School learner cars",
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
        title={<>Four stages. One licence.</>}
        intro="Patient lessons, built around the test. Every lesson is one-on-one in a dual-control car, with a short written note afterwards so you know exactly what to practise next."
        video={VIDEO.fleet}
      >
        <a href="#journey" className="btn btn--light">
          See the four stages <ArrowUpRight size={18} />
        </a>
        <Link to="/contact" className="arrow-link arrow-link-light">
          Ask us a question <ArrowUpRight size={16} />
        </Link>
      </PageHero>

      <section id="journey" className="smooth-anchor paper-lines bg-surface-soft/70 section-pad">
        <div className="shell">
          <SectionTop
            kicker="The method"
            title={<>Four stages. One licence.</>}
            intro="Twenty lessons is the usual route. Some people need fewer, some need more — we go by how you drive, not by a timetable."
          />
          <div className="mt-12">
            <JourneyBento />
          </div>
        </div>
      </section>

      <section className="shell section-pad">
        <SectionTop
          kicker="Choose your car"
          title={<>Manual or automatic?</>}
          intro="Both cars are dual-control, insured and maintained by us. The choice changes your licence, so we'll talk it through before you start."
        />
        <div className="bento-grid mt-12">
          {cars.map((car, index) => (
            <Reveal
              key={car.title}
              as="article"
              kind="scale"
              delay={index * 90}
              className={`bento-card overflow-hidden ${
                index === 0 ? "md:col-span-7" : "md:col-span-5"
              }`}
            >
              <img
                src={car.image}
                alt={car.alt}
                className={`photo w-full object-cover ${index === 0 ? "h-64 md:h-80" : "h-56 md:h-[19rem]"}`}
              />
              <div className="card-pad">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="eyebrow">{car.label}</p>
                  <span className="display tabular text-2xl leading-none text-leaf-deep">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="display-sm mt-4 text-[clamp(2rem,4vw,3rem)] text-ink">
                  {car.title}
                </h3>
                <p className="lede mt-4">{car.copy}</p>
                <ul className="mt-7 grid gap-3 border-t border-line pt-5">
                  {car.points.map((point) => (
                    <li
                      key={point}
                      className="flex min-h-[36px] items-start gap-3 text-sm text-ink-soft"
                    >
                      <Check
                        size={15}
                        strokeWidth={2.5}
                        className="mt-0.5 shrink-0 text-leaf-deep"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad bg-surface-soft/70">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="eyebrow">Every lesson includes</p>
            <h2 className="display-sm mt-4 text-[clamp(2rem,4vw,3rem)] text-ink">
              The small things add up.
            </h2>
            <p className="lede mt-4 max-w-md">
              Nothing is billed as an extra once you&apos;re in a lesson. It&apos;s all part of
              teaching you properly.
            </p>
          </div>
          <div className="bento-grid lg:col-span-7">
            {included.map(([title, detail], index) => (
              <Reveal
                key={title}
                kind="pop"
                delay={index * 65}
                className="bento-card card-pad md:col-span-6"
              >
                <span className="display tabular text-3xl leading-none text-leaf-deep">
                  0{index + 1}
                </span>
                <h3 className="display-sm mt-5 text-xl text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-text">{detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section-pad">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <p className="eyebrow">Questions</p>
            <h2 className="display-sm mt-4 text-3xl text-ink">
              The things people ask before booking.
            </h2>
            <Link to="/book" className="arrow-link mt-6">
              Book a lesson <ArrowUpRight size={16} />
            </Link>
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
