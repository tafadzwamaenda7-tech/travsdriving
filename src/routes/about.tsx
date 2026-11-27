import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/motion";
import { Reel } from "@/components/reel";
import { CTA, PageHero, StatGrid } from "@/components/site";
import { team } from "@/lib/content";
import { PHOTO, VIDEO } from "@/lib/media";
import { meta } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    ...meta(
      "About us",
      "Meet the VID-registered instructors behind Travis Driving School, teaching Harare to drive since 2009.",
    ),
    links: [{ rel: "preload", as: "image", href: PHOTO.fleet }],
  }),
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
        image={PHOTO.fleet}
      >
        <Link to="/book" className="btn btn--light">
          Book a lesson <ArrowUpRight size={18} />
        </Link>
        <Link to="/contact" className="arrow-link arrow-link-light">
          Ask a question <ArrowUpRight size={16} />
        </Link>
      </PageHero>

      <section className="shell section-pad">
        <div className="bento-grid">
          <div className="md:col-span-5">
            <p className="eyebrow">How we teach</p>
            <h2 className="display-sm mt-4 text-[clamp(2rem,4vw,3rem)] text-ink">
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
          <Reveal kind="scale" className="bento-card overflow-hidden md:col-span-7">
            <Reel
              reel={VIDEO.street}
              priority
              rounded="rounded-none"
              className="aspect-[16/10] w-full"
            />
            <div className="card-pad">
              <p className="text-sm leading-relaxed text-muted-text">
                Nervous? Most of our students are. We start slow, explain everything, and never
                raise our voices.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="paper-lines section-pad bg-surface-soft/70">
        <div className="shell">
          <p className="eyebrow">The long version</p>
          <h2 className="display-sm mt-4 max-w-3xl text-[clamp(2rem,4vw,3rem)] text-ink">
            Seventeen years of Harare roads.
          </h2>
          <div className="bento-grid mt-12">
            {timeline.map((item, index) => (
              <Reveal
                key={item.year}
                as="article"
                kind={index % 2 === 0 ? "rise" : "pop"}
                delay={index * 70}
                className={`bento-card card-pad ${
                  index === 0 || index === 3 ? "md:col-span-7" : "md:col-span-5"
                }`}
              >
                <span className="display tabular text-4xl leading-none text-leaf-deep">
                  {item.year}
                </span>
                <h3 className="display-sm mt-6 text-xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-text">{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section-pad">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <p className="eyebrow">The people</p>
            <h2 className="display-sm mt-4 text-3xl text-ink">
              Three instructors you&apos;ll actually remember.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-text">
              VID-registered, patient, and happiest when a nervous student suddenly gets it.
            </p>
          </div>
          <div className="bento-card divide-y divide-line overflow-hidden lg:col-span-8">
            {team.map((person, index) => (
              <Reveal
                key={person.name}
                as="article"
                delay={index * 65}
                className="flex flex-wrap items-center gap-4 p-5 sm:gap-6"
              >
                <span className="display flex h-14 w-14 shrink-0 items-center justify-center rounded-[16px] bg-ink text-sm text-warm-white">
                  {person.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="display-sm text-xl text-ink">{person.name}</h3>
                  <p className="mt-1 text-sm text-muted-text">{person.role}</p>
                </div>
                <p className="meta-line text-muted-text sm:text-right">{person.years} teaching</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell pb-4">
        <Reveal
          kind="scale"
          className="bento-card bento-card--dark card-pad-lg flex flex-wrap items-end justify-between gap-8"
        >
          <div>
            <p className="eyebrow">What we won&apos;t do</p>
            <h2 className="display-sm mt-5 max-w-3xl text-[clamp(1.9rem,4vw,3.2rem)] text-warm-white">
              Sell you a &ldquo;guaranteed pass&rdquo;. Rush a nervous driver. Cut a lesson short.
            </h2>
          </div>
          <Link to="/contact" className="btn btn--light">
            Meet your instructor <ArrowUpRight size={17} />
          </Link>
        </Reveal>
      </section>

      <CTA />
    </>
  );
}
