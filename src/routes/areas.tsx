import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, MapPin } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

import { Reveal } from "@/components/motion";
import { CTA, PageHero, SectionTop } from "@/components/site";
import { zones } from "@/lib/content";
import { PHOTO, VIDEO } from "@/lib/media";
import { meta } from "@/lib/site";

export const Route = createFileRoute("/areas")({
  head: () => ({
    ...meta(
      "Pick-up areas",
      "Free driving lesson pick-up across Harare — Avondale, Borrowdale, Mabelreign, Waterfalls, the CBD and more.",
    ),
    links: [{ rel: "preload", as: "image", href: VIDEO.collection.poster }],
  }),
  component: Areas,
});

const zoneImages = [VIDEO.fleet.poster, PHOTO.fleet, VIDEO.street.poster, VIDEO.collection.poster];

function Areas() {
  const [active, setActive] = useState(0);
  const [zoneOpen, setZoneOpen] = useState(false);
  const zone = zones[active] ?? zones[0];
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const popoverId = useId();

  useEffect(() => {
    if (!zoneOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (popoverRef.current?.contains(target) || triggerRef.current?.contains(target)) return;
      setZoneOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setZoneOpen(false);
      triggerRef.current?.focus();
    };

    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [zoneOpen]);

  const chooseZone = (index: number) => {
    setActive(index);
    setZoneOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <>
      <PageHero
        kicker="Pick-up areas · Harare"
        title={<>We come to you.</>}
        intro="Free collection from home, work or campus across most of Harare. Further out? Ask — we usually make it work for a small contribution towards fuel."
        video={VIDEO.collection}
      >
        <Link to="/book" className="btn btn--light">
          Book from your suburb <ArrowUpRight size={18} />
        </Link>
        <Link to="/contact" className="arrow-link arrow-link-light">
          Ask about my suburb <ArrowUpRight size={16} />
        </Link>
      </PageHero>

      <section className="shell section-pad">
        <SectionTop
          kicker="Where we go"
          title={<>Find your patch.</>}
          intro="Four zones, one pick-up: yours. Choose yours below."
        />

        <div className="bento-grid mt-12">
          <Reveal className="bento-card card-pad relative md:col-span-4">
            <p className="eyebrow">Harare zones</p>

            {/* Touch-friendly dropdown for small screens. */}
            <div className="relative mt-5 md:hidden">
              <button
                ref={triggerRef}
                type="button"
                onClick={() => setZoneOpen((value) => !value)}
                aria-expanded={zoneOpen}
                aria-controls={popoverId}
                className="flex min-h-[52px] w-full items-center justify-between gap-3 rounded-[16px] border border-line bg-surface-soft px-4 text-left"
              >
                <span>
                  <span className="meta-line block text-muted-text">Selected zone</span>
                  <span className="display-sm block text-lg text-ink">{zone.name}</span>
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-leaf-deep transition-transform ${zoneOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                ref={popoverRef}
                id={popoverId}
                className="popover absolute left-0 right-0 top-[calc(100%+0.5rem)] z-20 rounded-[20px] border border-line bg-surface p-3 shadow-xl"
                data-open={zoneOpen}
                aria-hidden={!zoneOpen}
                inert={!zoneOpen}
              >
                <div className="drop-stagger grid grid-cols-2 gap-2">
                  {zones.map((item, index) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => chooseZone(index)}
                      className="chip w-full"
                      aria-pressed={active === index}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Persistent, roomier selector for larger screens. */}
            <div className="mt-5 hidden border-t border-line md:block">
              {zones.map((item, index) => {
                const isActive = active === index;
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-pressed={isActive}
                    className={`flex min-h-[84px] w-full items-start gap-4 border-b border-line py-4 text-left transition-colors ${
                      isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    <span
                      className={`display tabular w-11 shrink-0 text-3xl leading-none ${
                        isActive ? "text-leaf-deep" : "text-muted-text"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="display-sm block text-xl">{item.name}</span>
                      <span className="mt-1 block text-sm text-muted-text">{item.note}</span>
                    </span>
                    <ArrowUpRight
                      size={16}
                      className={`mt-1 shrink-0 ${isActive ? "text-leaf-deep" : "text-muted-text"}`}
                    />
                  </button>
                );
              })}
            </div>

            <p className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-muted-text">
              <MapPin size={17} className="mt-0.5 shrink-0 text-leaf-deep" />
              Not listed?{" "}
              <Link to="/contact" className="arrow-link">
                Message us
              </Link>{" "}
              with your suburb and we&apos;ll tell you honestly whether we can collect you.
            </p>
          </Reveal>

          <Reveal kind="scale" delay={80} className="bento-card overflow-hidden md:col-span-8">
            <div key={active} className="zone-enter hero-media relative aspect-[16/10] bg-ink">
              <img
                src={zoneImages[active]}
                alt={`A Travis learner car in ${zone.name}, Harare`}
                className="photo h-full w-full object-cover"
              />
              <div aria-hidden="true" className="hero-scrim absolute inset-0 opacity-55" />
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-3">
                <p className="eyebrow eyebrow-light">Zone 0{active + 1}</p>
                <p className="display-sm text-2xl text-warm-white">{zone.name}</p>
              </div>
            </div>
            <div className="card-pad">
              <div className="flex flex-wrap gap-2 border-b border-line pb-5">
                {zone.suburbs.map((suburb) => (
                  <span key={suburb} className="chip cursor-default">
                    {suburb}
                  </span>
                ))}
              </div>
              <div className="grid gap-6 pt-6 sm:grid-cols-2">
                <div>
                  <p className="eyebrow">Pick-up</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-text">
                    We arrive at your gate five minutes before your lesson. Text us the gate number
                    the night before.
                  </p>
                </div>
                <div className="sm:border-l sm:border-line sm:pl-6">
                  <p className="eyebrow">Drop-off</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-text">
                    Back to the same spot at the end. If you need to be somewhere else, tell the
                    instructor when you book.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="shell pb-4">
        <Reveal
          kind="scale"
          className="bento-card bento-card--dark card-pad-lg flex flex-wrap items-end justify-between gap-8"
        >
          <div>
            <p className="eyebrow">One rule</p>
            <h2 className="display-sm mt-4 max-w-2xl text-[clamp(1.9rem,3.8vw,3rem)] text-warm-white">
              If we&apos;re late more than ten minutes, that lesson is on us.
            </h2>
          </div>
          <Link to="/book" className="btn btn--light">
            Book from your suburb <ArrowUpRight size={17} />
          </Link>
        </Reveal>
      </section>

      <CTA />
    </>
  );
}
