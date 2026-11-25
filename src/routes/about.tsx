import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { CTA, PageHero, StatGrid } from "@/components/site";
import { IMG, team } from "@/lib/content";
import { meta, WA } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () =>
    meta(
      "About us",
      "Meet the VID-registered instructors behind Travis Driving School, teaching Harare to drive since 2009.",
    ),
  component: About,
});

const timeline = [
  {
    year: "2009",
    title: "One Corolla, one student",
    copy: "T. Moyo started giving lessons on weekends in a borrowed Toyota Corolla. The first student passed on her second attempt.",
  },
  {
    year: "2014",
    title: "A proper little school",
    copy: "Three cars, a desk on Fife Avenue, and a waiting list. We hired our second instructor and started teaching automatic too.",
  },
  {
    year: "2020",
    title: "The test-route method",
    copy: "We mapped the routes examiners use and built them into every learner bundle. First-time pass rates climbed.",
  },
  {
    year: "Today",
    title: "Still small, still personal",
    copy: "Six cars, three instructors, 2,400+ licences. Every student still gets a note written by the person who taught them.",
  },
] as const;

function About() {
  return (
    <>
      <PageHero
        kicker="About us · Since 2009"
        title={<>Small school. Serious about roads.</>}
        intro="We started with one car and a lot of patience. Today we have six cars and three instructors — still small enough to know every student by name."
        image={IMG.square}
        imageAlt="People in Africa Unity Square, Harare"
        imageCaption="Central Harare"
      />

      <section className="shell py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="eyebrow text-blue">How we teach</p>
            <h2 className="display-sm mt-4 text-[clamp(1.9rem,3.6vw,2.9rem)] text-ink">
              No shortcuts. No promises we can&apos;t keep.
            </h2>
            <p className="lede mt-4 max-w-md">
              We teach the way the test is marked, then a little beyond it. Passing matters. Being
              able to drive home in the rain afterwards matters more.
            </p>
            <div className="mt-9">
              <StatGrid />
            </div>
          </div>
          <div className="overflow-hidden rounded-[32px] bg-surface card-shadow-lg lg:col-span-7">
            <img
              src={IMG.traffic}
              alt="A busy street in Harare"
              className="photo-soft h-[300px] w-full object-cover md:h-[440px]"
            />
            <p className="p-6 text-sm leading-relaxed text-muted-text">
              Nervous? Most of our students are. We start slow, explain everything, and never raise
              our voices.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-soft py-20 md:py-24">
        <div className="shell">
          <p className="eyebrow text-blue">The long version</p>
          <h2 className="display-sm mt-4 max-w-3xl text-[clamp(1.9rem,3.6vw,2.9rem)] text-ink">
            Seventeen years of Harare roads.
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item) => (
              <article key={item.year} className="surface-card p-6">
                <span className="inline-flex rounded-full bg-blue-soft px-3 py-1.5 text-xs font-semibold text-blue-deep">
                  {item.year}
                </span>
                <h3 className="display-sm mt-6 text-lg text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-text">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <p className="eyebrow text-blue">The people</p>
            <h2 className="display-sm mt-4 text-3xl text-ink">
              Three instructors you&apos;ll actually remember.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-text">
              VID-registered, patient, and happiest when a nervous student suddenly gets it.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-8">
            {team.map((person) => (
              <article key={person.name} className="surface-card p-6">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
                  {person.initials}
                </span>
                <h3 className="display-sm mt-6 text-xl text-ink">{person.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-text">{person.role}</p>
                <span className="mt-5 inline-flex rounded-full bg-canvas px-3 py-1.5 text-xs font-medium text-ink-soft ring-1 ring-line-soft">
                  {person.years} teaching
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell">
        <div className="relative overflow-hidden rounded-[40px] bg-ink px-8 py-12 text-white md:px-14 md:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-blue/25 blur-3xl"
          />
          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-14">
            <div className="lg:col-span-8">
              <p className="eyebrow eyebrow-light">What we won&apos;t do</p>
              <h2 className="display-sm mt-5 max-w-3xl text-[clamp(1.9rem,4vw,3.2rem)] text-white">
                Sell you a &ldquo;guaranteed pass&rdquo;. Rush a nervous driver. Cut a lesson short.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a href={WA} className="btn btn-light btn-lg">
                Meet your instructor <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="pt-20 md:pt-24">
        <CTA />
      </div>
    </>
  );
}
