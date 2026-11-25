import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { BookingForm } from "@/components/booking-form";
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

function Contact() {
  const rows = [
    {
      label: "WhatsApp",
      value: "Fastest — usually within the hour",
      action: "Message us",
      href: WA,
      icon: MessageCircle,
    },
    { label: "Phone", value: PHONE, action: "Call now", href: TEL, icon: Phone },
    { label: "Email", value: EMAIL, action: "Write to us", href: `mailto:${EMAIL}`, icon: Mail },
  ];

  return (
    <>
      <PageHero
        kicker="Contact · Book a lesson"
        title={<>Tell us where you are. We&apos;ll take it from there.</>}
        intro="Send your area and when you're free. We'll match you with an instructor, confirm a time, and arrange pick-up."
        image={IMG.skyline}
        imageAlt="Pedestrians and traffic in Harare"
        imageCaption="Office · 14 Fife Avenue, Harare"
      />

      <section className="shell py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="eyebrow text-blue">Or just talk to us</p>
            <div className="mt-6 grid gap-3">
              {rows.map((r) => (
                <a
                  key={r.label}
                  href={r.href}
                  className="surface-card group flex items-center justify-between gap-5 p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span className="flex min-w-0 items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-soft text-blue">
                      <r.icon size={19} />
                    </span>
                    <span className="min-w-0">
                      <span className="eyebrow block">{r.label}</span>
                      <span className="mt-1.5 block break-words text-[15px] font-medium text-ink">
                        {r.value}
                      </span>
                    </span>
                  </span>
                  <span className="flex shrink-0 items-center gap-1 text-sm font-semibold text-blue transition-transform group-hover:translate-x-0.5">
                    {r.action} <ArrowUpRight size={15} />
                  </span>
                </a>
              ))}
            </div>

            <div className="surface-card mt-5 p-7">
              <p className="eyebrow text-blue">The office</p>
              <p className="display-sm mt-4 text-2xl text-ink">{ADDRESS}</p>
              <div className="mt-6 grid gap-3 text-sm text-muted-text">
                <p className="flex items-center gap-3">
                  <MapPin size={16} className="shrink-0 text-blue" /> Between Fife Avenue and King
                  George Road
                </p>
                <p className="flex items-center gap-3">
                  <Clock size={16} className="shrink-0 text-blue" /> Mon–Fri 06:00–18:00 · Sat
                  07:00–13:00
                </p>
                <p className="flex items-center gap-3">
                  <Phone size={16} className="shrink-0 text-blue" /> Walk-ins welcome, but please
                  call first
                </p>
              </div>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="eyebrow text-blue">Prefer to book here?</p>
                <h2 className="display-sm mt-3 text-3xl text-ink">Two minutes, done.</h2>
              </div>
              <span className="chip hidden sm:inline-flex">No payment needed</span>
            </div>
            <BookingForm />
          </div>
        </div>
      </section>

      <section className="shell pb-20 md:pb-24">
        <div className="flex flex-wrap items-center justify-between gap-8 rounded-[32px] bg-blue-soft p-8 md:p-10">
          <p className="display-sm max-w-2xl text-2xl text-ink md:text-3xl">
            &ldquo;How soon can I start?&rdquo; — often within two days. Ask us when you message.
          </p>
          <a href={WA} className="btn btn-primary btn-lg">
            Message us now <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
