import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Check, Phone } from "lucide-react";

import { BookingForm } from "@/components/booking-form";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/site";
import { VIDEO } from "@/lib/media";
import { EMAIL, meta, PHONE, TEL, WA } from "@/lib/site";

export const Route = createFileRoute("/book")({
  head: () =>
    meta(
      "Book a lesson",
      "Book a driving lesson in Harare. Tell us your area and experience and we'll confirm your first lesson, usually within the hour.",
    ),
  component: Book,
});

const steps = [
  [
    "01",
    "We read your message",
    "An instructor — not a bot — checks your details and works out a sensible starting point.",
  ],
  [
    "02",
    "We confirm a time",
    "We'll text or call you with a slot and the name of your instructor.",
  ],
  [
    "03",
    "We collect you",
    "Your instructor arrives at your gate five minutes early in a dual-control car.",
  ],
] as const;

function Book() {
  return (
    <>
      <PageHero
        kicker="Book · Step one"
        title={<>Let&apos;s get you behind the wheel.</>}
        intro="A couple of details and we'll do the rest. No deposit, no account, no waiting on hold."
        video={VIDEO.collection}
      >
        <div className="w-full">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-[0.1em] text-warm-white/70">
            <span className="inline-flex min-h-[28px] items-center gap-2">
              <Check size={14} className="text-leaf-soft" /> Reply within the hour
            </span>
            <span className="inline-flex min-h-[28px] items-center gap-2">
              <Check size={14} className="text-leaf-soft" /> Free pick-up
            </span>
            <span className="inline-flex min-h-[28px] items-center gap-2">
              <Check size={14} className="text-leaf-soft" /> First lesson within 48 hours
            </span>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <a href="#booking-form" className="btn btn--light">
              Start booking <ArrowDown size={18} />
            </a>
            <Link to="/contact" className="arrow-link arrow-link-light">
              Message us instead <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </PageHero>

      <section id="booking-form" className="smooth-anchor shell section-pad">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="eyebrow">What happens next</p>
            <div className="bento-card mt-6 divide-y divide-line overflow-hidden">
              {steps.map(([number, title, detail], index) => (
                <Reveal key={number} as="div" delay={index * 70} className="flex gap-4 p-5">
                  <span className="display tabular w-10 shrink-0 text-2xl leading-none text-leaf-deep">
                    {number}
                  </span>
                  <div>
                    <h2 className="display-sm text-xl text-ink">{title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-text">{detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="bento-card bento-card--soft card-pad mt-6">
              <p className="eyebrow">Rather just talk?</p>
              <a
                href={TEL}
                className="mt-4 flex min-h-[44px] items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-leaf-deep"
              >
                <Phone size={15} className="text-leaf-deep" /> {PHONE}
              </a>
              <a
                href={WA}
                className="mt-2 inline-flex min-h-[44px] items-center text-sm text-muted-text transition-colors hover:text-leaf-deep"
              >
                Open WhatsApp instead
              </a>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <div className="mb-6 border-t border-line pt-6">
              <p className="eyebrow">Your details</p>
              <h2 className="display-sm mt-3 text-3xl text-ink">Two minutes, done.</h2>
            </div>
            <BookingForm />
            <p className="mt-5 flex flex-wrap items-center gap-2 text-xs text-muted-text">
              Prefer email?{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex min-h-[32px] items-center font-medium text-leaf-deep transition-colors hover:text-ink"
              >
                {EMAIL}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-soft/70">
        <div className="shell">
          <Reveal
            kind="scale"
            className="bento-card card-pad-lg flex flex-wrap items-end justify-between gap-8"
          >
            <div>
              <p className="eyebrow">Still deciding?</p>
              <h2 className="display-sm mt-4 max-w-2xl text-3xl text-ink md:text-4xl">
                Read how the four stages work before you commit.
              </h2>
            </div>
            <Link to="/lessons" className="btn">
              See the lesson guide <ArrowUpRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
