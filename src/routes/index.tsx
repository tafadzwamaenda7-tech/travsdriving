import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/motion";
import { Reel } from "@/components/reel";
import {
  CTA,
  FAQ,
  JourneyShowcase,
  PageHero,
  ReelGallery,
  SectionTop,
  StatGrid,
} from "@/components/site";
import { lessonsFaq, packages } from "@/lib/content";
import { PHOTO, VIDEO } from "@/lib/media";
import { meta, PHONE, TEL } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    ...meta(
      "Driving lessons in Harare",
      "Class 4 driving lessons in Harare, on the roads you'll actually be tested on. Dual-control cars, free pick-up and patient VID-registered instructors.",
    ),
    links: [{ rel: "preload", as: "image", href: VIDEO.street.poster }],
  }),
  component: Index,
});

const reasons = [
  {
    n: "01",
    t: "We come to you",
    d: "Home, work, campus — we pick you up and drop you back. No taxi, no waiting around, no excuses for missing a lesson.",
    img: PHOTO.carDetail,
  },
  {
    n: "02",
    t: "We teach the test route",
    d: "Hill starts in Avondale, roundabouts downtown, the junctions examiners favour. You'll have driven it all before test day.",
    img: VIDEO.street.poster,
  },
  {
    n: "03",
    t: "We don't shout",
    d: "Most people arrive nervous. We go at your pace, explain before we act, and there's a dual-control pedal on our side of the car.",
    img: VIDEO.graduate.poster,
  },
] as const;

const areaChips = ["Avondale", "Borrowdale", "Mabelreign", "Waterfalls", "CBD", "Highlands"];

function Index() {
  return (
    <>
      <PageHero
        tall
        kicker="Class 4 lessons · Harare"
        title={<>Class 4 lessons on the roads you&apos;ll be tested on.</>}
        intro="Every lesson is one instructor, one dual-control car. We collect you at your gate and practise the test route — hill starts in Avondale, roundabouts in the CBD and the junctions around Borrowdale."
        video={VIDEO.street}
      >
        <Link to="/book" className="btn btn--light">
          Book a lesson <ArrowUpRight size={18} />
        </Link>
        <Link to="/lessons" className="arrow-link arrow-link-light">
          How lessons work <ArrowRight size={17} />
        </Link>
      </PageHero>

      {/* One factual line, set as a quiet paper tab. */}
      <section className="shell pt-8">
        <Reveal className="bento-card bento-card--soft rounded-[20px] px-5 py-4 md:px-7">
          <p className="text-[13px] leading-relaxed text-ink-soft">
            VID-registered instructors in dual-control cars, collecting students at the gate since
            2009.
          </p>
        </Reveal>
      </section>

      {/* Bento overview: media, numbers, price, reels, areas and booking. */}
      <section className="shell section-pad">
        <SectionTop
          kicker="Travis at a glance"
          title={<>Everything you need, in one place.</>}
          intro="A local school with a short, clear route from your first lesson to your licence."
          action={
            <Link to="/about" className="arrow-link">
              Meet the instructors <ArrowUpRight size={16} />
            </Link>
          }
        />

        <div className="bento-grid mt-12">
          <Reveal
            kind="scale"
            className="bento-card bento-card--dark relative flex min-h-[420px] flex-col justify-between overflow-hidden md:col-span-7 md:row-span-2 md:min-h-[560px]"
          >
            <div className="hero-media absolute inset-0" aria-hidden="true">
              <img src={VIDEO.street.poster} alt="" className="h-full w-full object-cover" />
            </div>
            <div aria-hidden="true" className="hero-scrim absolute inset-0 opacity-90" />
            <div className="relative z-10 card-pad-lg">
              <p className="eyebrow">The journey · 01—04</p>
              <h3 className="display mt-5 max-w-xl text-[clamp(2.25rem,5vw,3.9rem)] text-warm-white">
                Four stages. One licence.
              </h3>
            </div>
            <div className="relative z-10 card-pad-lg flex flex-wrap items-end justify-between gap-6">
              <p className="lede-light max-w-md text-[0.98rem]">
                Provisional, foundations, city traffic and the exact test route — taught in that
                order, at your pace.
              </p>
              <Link to="/lessons" className="btn btn--light">
                See the method <ArrowUpRight size={17} />
              </Link>
            </div>
          </Reveal>

          <Reveal kind="pop" delay={80} className="bento-card card-pad md:col-span-5">
            <p className="eyebrow">By the numbers</p>
            <div className="mt-5">
              <StatGrid />
            </div>
          </Reveal>

          <Reveal
            kind="rise"
            delay={140}
            className="bento-card bento-card--leaf card-pad md:col-span-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">Most popular</p>
                <h3 className="display-sm mt-4 text-2xl text-ink">Learner bundle</h3>
              </div>
              <span className="display tabular text-5xl leading-none text-ink">
                {packages.find((item) => item.featured)?.price ?? "$270"}
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-soft">
              20 lessons, test-route practice, pick-up and fuel. No line items on test day.
            </p>
            <Link to="/prices" className="arrow-link mt-6">
              All prices <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <Reveal kind="scale" delay={100} className="bento-card overflow-hidden md:col-span-4">
            <Reel reel={VIDEO.graduate} rounded="rounded-none" className="aspect-[4/3] w-full" />
            <div className="card-pad">
              <p className="eyebrow">The payoff</p>
              <h3 className="display-sm mt-2 text-xl text-ink">A licence in her hands.</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-text">
                Real students, real roads, real passes from the Travis yard.
              </p>
            </div>
          </Reveal>

          <Reveal kind="scale" delay={160} className="bento-card overflow-hidden md:col-span-8">
            <div className="grid md:grid-cols-2">
              <img
                src={PHOTO.fleet}
                alt="Travis Driving School learner cars parked together"
                className="photo h-56 w-full object-cover md:h-full"
              />
              <div className="card-pad">
                <p className="eyebrow">Pick-up areas</p>
                <h3 className="display-sm mt-4 text-2xl text-ink">
                  We&apos;ll meet you where you are.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-text">
                  Avondale to Waterfalls, the CBD to Borrowdale — free collection across most of
                  Harare.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {areaChips.map((area) => (
                    <span key={area} className="chip cursor-default">
                      {area}
                    </span>
                  ))}
                </div>
                <Link to="/areas" className="arrow-link mt-6">
                  Check your suburb <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal
            kind="rise"
            delay={120}
            className="bento-card bento-card--dark card-pad-lg flex flex-wrap items-end justify-between gap-8 md:col-span-12"
          >
            <div>
              <p className="eyebrow">Ready when you are</p>
              <h3 className="display-sm mt-4 max-w-2xl text-[clamp(1.9rem,4vw,3rem)] text-warm-white">
                One message starts the whole thing.
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a href={TEL} className="btn btn--light">
                Call {PHONE} <ArrowUpRight size={17} />
              </a>
              <Link to="/book" className="arrow-link arrow-link-light">
                Book online <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Travis */}
      <section className="shell pb-4">
        <SectionTop
          kicker="Why Travis"
          title={<>A small school with an unfair advantage.</>}
          intro="We know Harare's roads the way a local knows the shortcuts. That knowledge is the difference between passing the test and actually being able to drive."
        />
        <div className="bento-grid mt-12">
          {reasons.map((row, index) => (
            <Reveal
              key={row.n}
              as="article"
              delay={index * 75}
              className={`bento-card overflow-hidden ${
                index === 0 ? "md:col-span-5" : index === 1 ? "md:col-span-4" : "md:col-span-3"
              }`}
            >
              <img
                src={row.img}
                alt=""
                aria-hidden="true"
                className={`photo w-full object-cover ${index === 1 ? "h-52" : "h-44"}`}
              />
              <div className="card-pad">
                <span className="meta-line text-leaf-deep">{row.n}</span>
                <h3 className="display-sm mt-3 text-xl text-ink">{row.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-text">{row.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ReelGallery
        kicker="Inside the school"
        title={<>Real cars. Real yard. Real lessons.</>}
        intro="A few seconds from the Travis yard — the same dual-control cars you'll learn in, on the roads you'll drive."
        items={[
          {
            reel: VIDEO.fleet,
            kicker: "The cars",
            title: "Dual controls, every time",
            copy: "Six learner cars, all maintained by us and all with a brake on the instructor's side.",
          },
          {
            reel: VIDEO.collection,
            kicker: "The pick-up",
            title: "We come to your gate",
            copy: "Your instructor arrives five minutes early. No taxi, no waiting around, no excuses.",
          },
          {
            reel: VIDEO.compound,
            kicker: "The yard",
            title: "A calm place to start",
            copy: "We begin off the busy road until the clutch and mirrors feel like second nature.",
          },
        ]}
      />

      {/* The journey */}
      <section id="journey" className="smooth-anchor paper-lines bg-surface-soft/70 section-pad">
        <div className="shell">
          <SectionTop
            kicker="The journey"
            title={<>Four stages. One licence.</>}
            intro="No mystery, no endless lessons that go nowhere. Here's exactly how we get you from provisional to pass."
            action={
              <Link to="/lessons" className="arrow-link">
                Full lesson guide <ArrowUpRight size={16} />
              </Link>
            }
          />
          <div className="mt-12">
            <JourneyShowcase />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="shell py-4">
        <Reveal
          kind="scale"
          className="bento-card bento-card--dark card-pad-lg grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14"
        >
          <div className="lg:col-span-7">
            <p className="eyebrow">Passing is the point</p>
            <blockquote className="display-sm mt-5 max-w-3xl text-[clamp(1.6rem,3.4vw,2.7rem)] text-warm-white">
              &ldquo;I failed twice at another school. Mr Moyo took me through the test route four
              times and I passed the next week.&rdquo;
            </blockquote>
            <p className="meta-line mt-7 text-warm-white/55">Rutendo C. · Mabelreign</p>
          </div>
          <div className="lg:col-span-5">
            <Reel reel={VIDEO.graduate} rounded="rounded-[24px]" className="aspect-[4/3] w-full" />
          </div>
        </Reveal>
      </section>

      {/* Prices preview */}
      <section className="shell section-pad">
        <SectionTop
          kicker="Prices"
          title={<>Clear from the first message.</>}
          intro="USD, inclusive of pick-up and fuel. Pay cash, EcoCash or transfer. The VID fee goes straight to VID."
          action={
            <Link to="/prices" className="arrow-link">
              See all prices <ArrowUpRight size={16} />
            </Link>
          }
        />
        <div className="bento-grid mt-12">
          {packages.slice(0, 3).map((item, index) => (
            <Reveal
              key={item.name}
              as="div"
              kind={item.featured ? "pop" : "rise"}
              delay={index * 70}
              className={`bento-card card-pad flex flex-col justify-between ${
                item.featured
                  ? "bento-card--leaf md:col-span-5"
                  : index === 0
                    ? "md:col-span-4"
                    : "md:col-span-3"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="meta-line text-muted-text">0{index + 1}</span>
                  <h3 className="display-sm mt-3 text-2xl text-ink">{item.name}</h3>
                  <p className="mt-1 text-sm text-muted-text">{item.detail}</p>
                </div>
                {item.featured && <span className="meta-line text-leaf-deep">Popular</span>}
              </div>
              <div className="mt-8 flex items-end justify-between gap-4">
                <p className="text-sm text-muted-text">{item.note}</p>
                <span className="display tabular text-4xl leading-none text-ink">{item.price}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="shell pb-4">
        <SectionTop
          kicker="Questions"
          title={<>The things people ask before booking.</>}
          intro="Short answers, no sales patter. If yours isn't here, just ask us."
          action={
            <Link to="/contact" className="arrow-link">
              Ask a question <ArrowUpRight size={16} />
            </Link>
          }
        />
        <div className="bento-grid mt-12">
          <div className="md:col-span-7">
            <FAQ items={lessonsFaq} />
          </div>
          <Reveal
            kind="scale"
            delay={90}
            className="bento-card bento-card--soft card-pad md:col-span-5"
          >
            <p className="eyebrow">Still deciding?</p>
            <h3 className="display-sm mt-4 text-2xl text-ink">
              Come for one lesson. Decide after.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-text">
              Thirty minutes, one-on-one, in a dual-control car. No deposit and no account needed.
            </p>
            <Link to="/book" className="btn mt-7">
              Book a lesson <ArrowUpRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
