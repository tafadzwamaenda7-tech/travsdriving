import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";

import { Reveal } from "@/components/motion";
import { CTA, FAQ, PageHero, SectionTop } from "@/components/site";
import { pricesFaq, packages } from "@/lib/content";
import { PHOTO } from "@/lib/media";
import { meta } from "@/lib/site";

export const Route = createFileRoute("/prices")({
  head: () =>
    meta(
      "Prices",
      "Driving lesson prices in Harare: single lessons, bundles, oral test prep and test-day car hire. USD, EcoCash or bank transfer.",
    ),
  component: Prices,
});

const orderedPackages = [
  ...packages.filter((item) => item.featured),
  ...packages.filter((item) => !item.featured),
];

const included = [
  "Collection from your suburb",
  "Fuel for every lesson",
  "A dual-control, insured car",
  "One-on-one instructor time",
  "Written feedback after each lesson",
  "Test-route practice in bundles",
] as const;

function Prices() {
  return (
    <>
      <PageHero
        kicker="Prices · USD"
        title={<>No surprises on test day.</>}
        intro="One price, everything included: pick-up, fuel, the car, the time. The only thing we don't cover is the fee you pay VID directly."
        image={PHOTO.pricesHero}
      >
        <Link to="/book" className="btn btn--light">
          Book your first lesson <ArrowUpRight size={18} />
        </Link>
        <Link to="/contact" className="arrow-link arrow-link-light">
          Ask a question <ArrowUpRight size={16} />
        </Link>
      </PageHero>

      <section className="shell section-pad">
        <SectionTop
          kicker="The price list"
          title={<>Pick what fits.</>}
          intro="Most people start with the learner bundle. If you're not sure, book one lesson and decide after."
          action={
            <Link to="/book" className="arrow-link">
              Book a lesson <ArrowUpRight size={16} />
            </Link>
          }
        />

        <div className="bento-grid mt-12">
          {orderedPackages.map((item, displayIndex) => {
            const featured = Boolean(item.featured);
            const number = String(packages.indexOf(item) + 1).padStart(2, "0");
            const span = featured
              ? "md:col-span-7 md:row-span-2"
              : displayIndex <= 2
                ? "md:col-span-5"
                : "md:col-span-4";

            return (
              <Reveal
                key={item.name}
                as="article"
                kind={featured ? "pop" : "rise"}
                delay={displayIndex * 60}
                className={`bento-card card-pad flex flex-col justify-between ${span} ${
                  featured ? "bento-card--dark" : displayIndex === 1 ? "bento-card--soft" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`display tabular text-2xl leading-none ${featured ? "text-warm-white/60" : "text-leaf-deep"}`}
                      >
                        {number}
                      </span>
                      {featured && <span className="meta-line text-leaf-soft">Most popular</span>}
                    </div>
                    <h3
                      className={`display-sm mt-5 text-2xl ${featured ? "text-warm-white" : "text-ink"}`}
                    >
                      {item.name}
                    </h3>
                    <p
                      className={`mt-1 text-sm ${featured ? "text-warm-white/70" : "text-muted-text"}`}
                    >
                      {item.detail}
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap items-end justify-between gap-4 border-t border-line pt-6">
                  <p
                    className={`max-w-[16rem] text-sm ${featured ? "text-warm-white/65" : "text-muted-text"}`}
                  >
                    {item.note}
                  </p>
                  <span
                    className={`display tabular leading-none ${featured ? "text-6xl text-warm-white" : "text-4xl text-ink"}`}
                  >
                    {item.price}
                  </span>
                </div>
              </Reveal>
            );
          })}

          <Reveal
            kind="scale"
            delay={120}
            className="bento-card bento-card--leaf card-pad flex flex-wrap items-end justify-between gap-6 md:col-span-4"
          >
            <div>
              <p className="eyebrow">Not sure yet?</p>
              <p className="display-sm mt-3 text-2xl text-ink md:text-3xl">
                Come for one lesson. Decide after.
              </p>
            </div>
            <Link to="/contact" className="arrow-link">
              Ask us a question <ArrowUpRight size={17} />
            </Link>
          </Reveal>
        </div>

        <p className="mt-6 text-xs text-muted-text">
          VID test fees are paid directly to VID and are not included in any package.
        </p>
      </section>

      <section className="section-pad bg-surface-soft/70">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="eyebrow">Included, always</p>
            <h2 className="display-sm mt-4 text-[clamp(2rem,4vw,3rem)] text-ink">
              What your money actually buys.
            </h2>
            <p className="lede mt-4 max-w-md">
              No line items appearing on test day. The price you see is the price you pay.
            </p>
          </div>
          <div className="lg:col-span-7">
            <Reveal kind="scale" className="bento-card card-pad h-full">
              <ul className="grid gap-1 sm:grid-cols-2">
                {included.map((item) => (
                  <li
                    key={item}
                    className="flex min-h-[52px] items-center gap-3 border-b border-line py-3 text-sm text-ink-soft last:border-b-0"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[11px] bg-leaf-soft text-leaf-deep">
                      <Check size={15} strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-6">
                <span className="eyebrow">Pay by</span>
                <span className="text-sm text-ink-soft">Cash (USD), EcoCash, bank transfer</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="shell section-pad">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <p className="eyebrow">Fine print, plainly</p>
            <h2 className="display-sm mt-4 text-3xl text-ink">Good to know.</h2>
          </div>
          <div className="lg:col-span-8">
            <FAQ items={pricesFaq} />
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
