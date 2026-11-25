import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useState } from "react";

import { CTA, PageHero, SectionTop } from "@/components/site";
import { IMG, zones } from "@/lib/content";
import { meta } from "@/lib/site";

export const Route = createFileRoute("/areas")({
  head: () =>
    meta(
      "Pick-up areas",
      "Free driving lesson pick-up across Harare — Avondale, Borrowdale, Mabelreign, Waterfalls, the CBD and more.",
    ),
  component: Areas,
});

const zoneImages = [IMG.boulevard, IMG.square, IMG.traffic, IMG.skyline];

function Areas() {
  const [active, setActive] = useState(0);
  const zone = zones[active] ?? zones[0];

  return (
    <>
      <PageHero
        kicker="Pick-up areas · Harare"
        title={<>We come to you.</>}
        intro="Free collection from home, work or campus across most of Harare. Further out? Ask — we usually make it work for a small contribution towards fuel."
        image={IMG.boulevard}
        imageAlt="Young people dancing in the streets of Harare"
        imageCaption="From the northern suburbs to the CBD"
      />

      <section className="shell py-16 md:py-20">
        <SectionTop
          kicker="Where we go"
          title={<>Find your patch.</>}
          intro="Four zones, one pick-up: yours. Choose yours below."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="grid gap-2.5">
              {zones.map((z, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={z.name}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={`flex w-full items-center justify-between gap-4 rounded-[22px] border px-5 py-5 text-left transition-all ${
                      isActive
                        ? "border-blue/20 bg-white card-shadow"
                        : "border-transparent bg-white/60 hover:bg-white"
                    }`}
                  >
                    <span className="min-w-0">
                      <span
                        className={`display-sm block text-xl ${isActive ? "text-ink" : "text-ink-soft"}`}
                      >
                        {z.name}
                      </span>
                      <span className="mt-1 block text-sm text-muted-text">{z.note}</span>
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                        isActive ? "bg-blue text-white" : "bg-canvas text-muted-text"
                      }`}
                    >
                      0{i + 1}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="mt-6 flex items-start gap-3 rounded-[20px] bg-white/70 p-5 text-sm leading-relaxed text-muted-text ring-1 ring-line-soft">
              <MapPin size={17} className="mt-0.5 shrink-0 text-blue" />
              Not listed? Message us with your suburb and we&apos;ll tell you honestly whether we
              can collect you.
            </p>
          </div>

          <div className="min-w-0 lg:col-span-8">
            <div className="overflow-hidden rounded-[32px] bg-surface card-shadow-lg">
              <img
                key={active}
                src={zoneImages[active]}
                alt={`A street scene in ${zone.name}, Harare`}
                className="photo-soft animate-fade h-[300px] w-full object-cover md:h-[440px]"
              />
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {zone.suburbs.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="surface-card p-6">
                <p className="eyebrow text-blue">Pick-up</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-text">
                  We arrive at your gate five minutes before your lesson. Text us the gate number
                  the night before.
                </p>
              </div>
              <div className="surface-card p-6">
                <p className="eyebrow text-blue">Drop-off</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-text">
                  Back to the same spot at the end. If you need to be somewhere else, tell the
                  instructor when you book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shell pb-4">
        <div className="surface-card flex flex-wrap items-center justify-between gap-8 p-8 md:p-10">
          <div>
            <p className="eyebrow text-blue">One rule</p>
            <p className="display-sm mt-4 max-w-xl text-2xl text-ink md:text-3xl">
              If we&apos;re late more than ten minutes, that lesson is on us.
            </p>
          </div>
          <Link to="/book" className="btn btn-primary btn-lg">
            Book from your suburb <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <div className="pt-20 md:pt-24">
        <CTA />
      </div>
    </>
  );
}
