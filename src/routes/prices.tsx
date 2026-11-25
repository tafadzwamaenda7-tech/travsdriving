import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";

import { CTA, FAQ, PageHero, SectionTop } from "@/components/site";
import { IMG, pricesFaq, packages } from "@/lib/content";
import { meta } from "@/lib/site";

export const Route = createFileRoute("/prices")({
  head: () =>
    meta(
      "Prices",
      "Driving lesson prices in Harare: single lessons, bundles, oral test prep and test-day car hire. USD, EcoCash or bank transfer.",
    ),
  component: Prices,
});

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
        image={IMG.street}
        imageAlt="A street vendor in Harare"
        imageCaption="Prices reviewed January 2026"
      >
        <Link to="/book" className="btn btn-primary">
          Book your first lesson <ArrowUpRight size={17} />
        </Link>
      </PageHero>

      <section className="shell py-16 md:py-20">
        <SectionTop
          kicker="The price list"
          title={<>Pick what fits.</>}
          intro="Most people start with the learner bundle. If you're not sure, book one lesson and decide after."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <article
              key={p.name}
              className={`relative flex min-h-[280px] flex-col rounded-[28px] p-7 ${
                p.featured ? "bg-ink text-white card-shadow-lg" : "surface-card"
              }`}
            >
              {p.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                  Most popular
                </span>
              )}
              <h2 className={`display-sm pr-24 text-2xl ${p.featured ? "text-white" : "text-ink"}`}>
                {p.name}
              </h2>
              <p className={`mt-2 text-sm ${p.featured ? "text-white/60" : "text-muted-text"}`}>
                {p.detail}
              </p>
              <p className="display mt-auto pt-10 text-[3.25rem] leading-none">{p.price}</p>
              <div
                className={`mt-7 flex items-center justify-between border-t pt-5 text-xs ${
                  p.featured ? "border-white/15 text-white/60" : "border-line text-muted-text"
                }`}
              >
                <span>{p.note}</span>
                <ArrowUpRight size={16} />
              </div>
            </article>
          ))}
          <article className="flex min-h-[280px] flex-col justify-between rounded-[28px] bg-blue-soft p-7 text-ink">
            <div>
              <p className="eyebrow text-blue-deep">Not sure yet?</p>
              <p className="display-sm mt-4 text-3xl">Come for one lesson. Decide after.</p>
            </div>
            <Link to="/contact" className="btn btn-ink mt-10 self-start">
              Ask us a question <ArrowUpRight size={17} />
            </Link>
          </article>
        </div>
        <p className="mt-6 text-xs text-muted-text">
          VID test fees are paid directly to VID and are not included in any package.
        </p>
      </section>

      <section className="bg-surface-soft py-20 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="eyebrow text-blue">Included, always</p>
            <h2 className="display-sm mt-4 text-[clamp(1.9rem,3.6vw,2.9rem)] text-ink">
              What your money actually buys.
            </h2>
            <p className="lede mt-4 max-w-md">
              No line items appearing on test day. The price you see is the price you pay.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <div
                  key={item}
                  className="surface-card flex items-start gap-3 p-5 text-sm text-ink-soft"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-soft text-blue">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-2.5">
              <span className="eyebrow mr-1">Pay by</span>
              {["Cash (USD)", "EcoCash", "Bank transfer"].map((method) => (
                <span key={method} className="chip">
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <p className="eyebrow text-blue">Fine print, plainly</p>
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
