import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, MessageCircle } from "lucide-react";

import { CTA, JourneyShowcase, SectionTop } from "@/components/site";
import { IMG, packages } from "@/lib/content";
import { meta, PHONE, TEL, WA } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    meta(
      "Driving lessons in Harare",
      "Class 4 driving lessons in Harare, on the roads you'll actually be tested on. Dual-control cars, free pick-up and patient VID-registered instructors.",
    ),
  component: Index,
});

const trust = [
  "VID-registered instructors",
  "Free pick-up & drop-off",
  "Dual-control cars",
  "Teaching since 2009",
];

const reasons = [
  {
    n: "01",
    t: "We come to you",
    d: "Home, work, campus — we pick you up and drop you back. No taxi, no waiting around, no excuses for missing a lesson.",
    img: IMG.lessonCar,
  },
  {
    n: "02",
    t: "We teach the test route",
    d: "Hill starts in Avondale, roundabouts downtown, the junctions examiners favour. You'll have driven it all before test day.",
    img: IMG.traffic,
  },
  {
    n: "03",
    t: "We don't shout",
    d: "Most people arrive nervous. We go at your pace, explain before we act, and there's a dual-control pedal on our side of the car.",
    img: IMG.hands,
  },
] as const;

const areaChips = ["Avondale", "Borrowdale", "Mabelreign", "Waterfalls", "CBD", "Highlands"];

function Index() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-canvas pt-8 md:pt-12">
        <div className="shell">
          <div className="grid items-center gap-10 pb-12 lg:grid-cols-12 lg:gap-14 lg:pb-14">
            <div className="animate-rise min-w-0 lg:col-span-6">
              <p className="eyebrow text-blue">Harare · Class 4 · Since 2009</p>
              <h1 className="display mt-5 text-[clamp(2.75rem,5.6vw,4.75rem)] text-ink">
                Real roads.
                <br />
                <span className="text-blue">Real confidence.</span>
              </h1>
              <p className="lede mt-6 max-w-lg">
                Class 4 lessons in Harare, on the streets you&apos;ll actually be tested on. We
                collect you, we stay calm, and we teach you the route — not just the rules.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href={WA} className="btn btn-primary btn-lg">
                  Book a lesson <ArrowUpRight size={18} />
                </a>
                <Link to="/lessons" className="btn btn-outline btn-lg">
                  How lessons work <ArrowRight size={17} />
                </Link>
              </div>
              <a
                href={TEL}
                className="mt-6 inline-flex items-center gap-2 text-sm text-muted-text transition-colors hover:text-blue"
              >
                <MessageCircle size={15} /> Or call {PHONE}
              </a>
            </div>

            <div className="animate-rise min-w-0 lg:col-span-6" style={{ animationDelay: "100ms" }}>
              <div className="relative">
                <div className="overflow-hidden rounded-[36px] bg-surface card-shadow-lg">
                  <img
                    src={IMG.hero}
                    alt="A driver in Zimbabwe"
                    className="photo-soft h-[320px] w-full object-cover sm:h-[420px] lg:h-[500px]"
                  />
                </div>
                <div className="surface-card absolute -bottom-7 left-4 right-4 rounded-[24px] p-5 md:-left-8 md:right-auto md:w-80 md:p-6">
                  <p className="eyebrow text-blue">Car park vs real road</p>
                  <p className="display-sm mt-3 text-[17px] leading-snug text-ink">
                    Anyone can teach you to move off. We teach you to handle a kombi at rush hour.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="animate-rise flex flex-wrap gap-2.5 pb-2"
            style={{ animationDelay: "180ms" }}
          >
            {trust.map((item) => (
              <span key={item} className="chip">
                <Check size={14} className="text-blue" /> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Travis ───────────────────────────────────────────────── */}
      <section className="shell py-20 md:py-24">
        <SectionTop
          kicker="Why Travis"
          title={<>A small school with an unfair advantage.</>}
          intro="We know Harare's roads the way a local knows the shortcuts. That knowledge is the difference between passing the test and actually being able to drive."
          action={
            <Link to="/about" className="arrow-link text-sm">
              Meet the instructors <ArrowUpRight size={16} />
            </Link>
          }
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reasons.map((row) => (
            <article key={row.n} className="surface-card reveal overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={row.img} alt="" className="photo-soft h-full w-full object-cover" />
              </div>
              <div className="p-7">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-soft text-xs font-semibold text-blue-deep">
                  {row.n}
                </span>
                <h3 className="display-sm mt-5 text-xl text-ink">{row.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-text">{row.d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── The journey ──────────────────────────────────────────────── */}
      <section className="bg-surface-soft py-20 md:py-24">
        <div className="shell">
          <SectionTop
            kicker="The journey"
            title={<>Four stages. One licence.</>}
            intro="No mystery, no endless lessons that go nowhere. Here's exactly how we get you from provisional to pass."
            action={
              <Link to="/lessons" className="arrow-link text-sm">
                Full lesson guide <ArrowUpRight size={16} />
              </Link>
            }
          />
          <div className="mt-12">
            <JourneyShowcase />
          </div>
        </div>
      </section>

      {/* ── Testimonial ──────────────────────────────────────────────── */}
      <section className="shell py-20 md:py-24">
        <div className="surface-card grid overflow-hidden md:grid-cols-12">
          <div className="p-8 md:col-span-8 md:p-12">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-soft text-2xl leading-none text-blue">
              “
            </span>
            <blockquote className="display-sm mt-5 max-w-3xl text-[clamp(1.5rem,3vw,2.4rem)] text-ink">
              I failed twice at another school. Mr Moyo took me through the test route four times
              and I passed the next week.
            </blockquote>
            <p className="mt-7 text-sm text-muted-text">Rutendo C. · Mabelreign</p>
          </div>
          <div className="md:col-span-4">
            <img
              src={IMG.driver}
              alt="A learner in Harare"
              className="photo-soft h-[260px] w-full object-cover md:h-full md:min-h-[320px]"
            />
          </div>
        </div>
      </section>

      {/* ── Prices preview ───────────────────────────────────────────── */}
      <section className="shell pb-20 md:pb-24">
        <SectionTop
          kicker="Prices"
          title={<>Clear from the first message.</>}
          intro="USD, inclusive of pick-up and fuel. Pay cash, EcoCash or transfer. The VID fee goes straight to VID."
          action={
            <Link to="/prices" className="arrow-link text-sm">
              See all prices <ArrowUpRight size={16} />
            </Link>
          }
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {packages.slice(0, 3).map((p) => (
            <article
              key={p.name}
              className={`flex min-h-[270px] flex-col rounded-[28px] p-7 ${
                p.featured ? "bg-ink text-white card-shadow-lg" : "surface-card"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className={`display-sm text-xl ${p.featured ? "text-white" : "text-ink"}`}>
                  {p.name}
                </h3>
                {p.featured && (
                  <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                    Popular
                  </span>
                )}
              </div>
              <p className={`mt-2 text-sm ${p.featured ? "text-white/60" : "text-muted-text"}`}>
                {p.detail}
              </p>
              <p className="display mt-auto pt-10 text-5xl leading-none">{p.price}</p>
              <div
                className={`mt-6 flex items-center justify-between border-t pt-5 text-xs ${
                  p.featured ? "border-white/15 text-white/60" : "border-line text-muted-text"
                }`}
              >
                {p.note}
                <ArrowUpRight size={16} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Areas teaser ─────────────────────────────────────────────── */}
      <section className="shell">
        <div className="surface-card grid overflow-hidden lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src={IMG.square}
              alt="A street vendor in Harare"
              className="photo-soft h-[280px] w-full object-cover md:h-full"
            />
          </div>
          <div className="p-8 md:p-12 lg:col-span-7">
            <p className="eyebrow text-blue">Pick-up areas</p>
            <h2 className="display-sm mt-4 text-[clamp(1.9rem,3.6vw,3rem)] text-ink">
              We&apos;ll meet you where you are.
            </h2>
            <p className="lede mt-4 max-w-lg">
              Avondale to Waterfalls, the CBD to Borrowdale — free collection across most of Harare.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {areaChips.map((a) => (
                <span key={a} className="chip">
                  {a}
                </span>
              ))}
            </div>
            <Link to="/areas" className="btn btn-primary mt-8">
              Check your suburb <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <div className="pt-20 md:pt-24">
        <CTA />
      </div>
    </>
  );
}
