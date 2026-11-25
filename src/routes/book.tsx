import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, MessageCircle, Phone } from "lucide-react";

import { BookingForm } from "@/components/booking-form";
import { PageHero } from "@/components/site";
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
        theme="ink"
      >
        <div className="flex flex-wrap gap-2.5 text-sm text-white/70">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
            <Check size={15} className="text-blue-soft" /> Reply within the hour
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
            <Check size={15} className="text-blue-soft" /> Free pick-up
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
            <Check size={15} className="text-blue-soft" /> First lesson within 48 hours
          </span>
        </div>
      </PageHero>

      <section className="shell pb-20 md:pb-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="eyebrow text-blue">What happens next</p>
            <div className="mt-6 grid gap-3">
              {steps.map(([n, title, detail]) => (
                <div key={n} className="surface-card flex gap-5 p-6">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-soft text-xs font-semibold text-blue-deep">
                    {n}
                  </span>
                  <div>
                    <h2 className="display-sm text-lg text-ink">{title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-text">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="surface-card mt-4 p-6">
              <p className="eyebrow text-blue">Rather just talk?</p>
              <a
                href={TEL}
                className="mt-4 flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-blue"
              >
                <Phone size={15} className="text-blue" /> {PHONE}
              </a>
              <a
                href={WA}
                className="mt-3 flex items-center gap-2 text-sm text-muted-text transition-colors hover:text-blue"
              >
                <MessageCircle size={15} className="text-blue" /> Open WhatsApp instead
              </a>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <div className="mb-6">
              <p className="eyebrow text-blue">Your details</p>
              <h2 className="display-sm mt-3 text-3xl text-ink">Two minutes, done.</h2>
            </div>
            <BookingForm />
            <p className="mt-5 flex flex-wrap items-center gap-2 text-xs text-muted-text">
              Prefer email?{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="font-medium text-blue transition-colors hover:text-blue-deep"
              >
                {EMAIL}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="shell pb-20 md:pb-24">
        <div className="flex flex-wrap items-center justify-between gap-8 rounded-[32px] bg-surface-soft p-8 md:p-10 ring-1 ring-line-soft">
          <div>
            <p className="eyebrow text-blue">Still deciding?</p>
            <h2 className="display-sm mt-4 max-w-2xl text-3xl text-ink md:text-4xl">
              Read how the four stages work before you commit.
            </h2>
          </div>
          <Link to="/lessons" className="btn btn-ink btn-lg">
            See the lesson guide <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
