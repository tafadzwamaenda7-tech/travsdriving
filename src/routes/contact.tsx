import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";

import { BookingForm } from "@/components/booking-form";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/site";
import { IMG } from "@/lib/content";
import { ADDRESS, EMAIL, meta, PHONE, TEL, WA } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () =>
    meta(
      "Contact",
      "Book a driving lesson in Harare by WhatsApp, phone or email. Office at 14 Fife Avenue. We usually reply within the hour.",
    ),
  component: Contact,
});

const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

function Contact() {
  const rows = [
    {
      label: "WhatsApp",
      value: "Fastest — usually within the hour",
      action: "Message us",
      href: WA,
    },
    { label: "Phone", value: PHONE, action: "Call now", href: TEL },
    { label: "Email", value: EMAIL, action: "Write to us", href: `mailto:${EMAIL}` },
  ] as const;

  return (
    <>
      <PageHero
        kicker="Contact · Book a lesson"
        title={<>Tell us where you are. We&apos;ll take it from there.</>}
        intro="Send your area and when you're free. We'll match you with an instructor, confirm a time, and arrange pick-up."
        image={IMG.skyline}
      >
        <a href={TEL} className="btn btn--light">
          Call {PHONE} <ArrowUpRight size={18} />
        </a>
        <a href={WA} className="arrow-link arrow-link-light">
          Message us on WhatsApp <ArrowUpRight size={16} />
        </a>
      </PageHero>

      <section className="shell section-pad">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="eyebrow">Or just talk to us</p>
            <div className="bento-grid mt-6">
              {rows.map((row, index) => (
                <Reveal key={row.label} as="div" delay={index * 60} className="md:col-span-12">
                  <a
                    href={row.href}
                    className="bento-card flex min-h-[88px] items-center justify-between gap-4 p-5"
                  >
                    <span className="min-w-0">
                      <span className="eyebrow block">{row.label}</span>
                      <span className="mt-1 block break-words text-[15px] font-semibold text-ink">
                        {row.value}
                      </span>
                    </span>
                    <span className="flex shrink-0 items-center gap-1 text-sm font-semibold text-leaf-deep transition-transform group-hover:translate-x-0.5">
                      {row.action} <ArrowUpRight size={15} />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal kind="scale" delay={90} className="bento-card card-pad mt-6">
              <p className="eyebrow">The office</p>
              <a
                href={mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="display-sm mt-4 inline-flex items-start gap-2 text-2xl text-ink transition-colors hover:text-leaf-deep"
              >
                <MapPin size={18} className="mt-1 shrink-0 text-leaf-deep" />
                {ADDRESS}
                <ArrowUpRight size={15} className="mt-1 shrink-0" />
              </a>
              <div className="mt-6 grid gap-3 border-t border-line pt-5 text-sm text-muted-text">
                <p className="flex min-h-[28px] items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-leaf-deep" /> Between Fife
                  Avenue and King George Road
                </p>
                <p className="flex min-h-[28px] items-start gap-3">
                  <Clock size={16} className="mt-0.5 shrink-0 text-leaf-deep" /> Mon–Fri 06:00–18:00
                  · Sat 07:00–13:00
                </p>
                <p className="flex min-h-[28px] items-start gap-3">
                  <Phone size={16} className="mt-0.5 shrink-0 text-leaf-deep" /> Walk-ins welcome,
                  but please call first
                </p>
              </div>
            </Reveal>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <div className="mb-6 border-t border-line pt-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="eyebrow">Prefer to book here?</p>
                  <h2 className="display-sm mt-3 text-3xl text-ink">Two minutes, done.</h2>
                </div>
                <span className="hidden text-xs text-muted-text sm:block">No payment needed</span>
              </div>
            </div>
            <BookingForm />
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-soft/70">
        <div className="shell">
          <Reveal
            kind="scale"
            className="bento-card card-pad-lg flex flex-wrap items-end justify-between gap-8"
          >
            <p className="display-sm max-w-2xl text-2xl text-ink md:text-3xl">
              &ldquo;How soon can I start?&rdquo; — often within two days. Ask us when you message.
            </p>
            <a href={WA} className="btn">
              Message us on WhatsApp <ArrowUpRight size={17} />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
