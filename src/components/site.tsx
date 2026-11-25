import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import { ADDRESS, EMAIL, LOGO, PHONE, TEL, WA } from "@/lib/site";
import { journey } from "@/lib/content";

const nav = [
  { to: "/lessons", label: "Lessons" },
  { to: "/prices", label: "Prices" },
  { to: "/areas", label: "Areas" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center rounded-2xl bg-white px-2 py-1.5 ring-1 ring-line-soft card-shadow">
      <img
        src={LOGO}
        alt="Travis Driving School"
        className={`${compact ? "h-8" : "h-9 md:h-10"} w-auto rounded-lg object-contain`}
      />
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line-soft bg-canvas/85 backdrop-blur-xl">
      <div className="shell relative flex h-[72px] items-center justify-between gap-4">
        <Link
          to="/"
          aria-label="Travis Driving School, home"
          onClick={() => setOpen(false)}
          className="shrink-0 transition-opacity hover:opacity-80"
        >
          <Logo />
        </Link>

        <nav
          aria-label="Main navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 rounded-full bg-white/80 p-1 ring-1 ring-line-soft card-shadow lg:flex"
        >
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-canvas hover:text-ink"
              activeProps={{ className: "bg-ink text-white hover:bg-ink hover:text-white" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a href={TEL} className="btn btn-primary btn-sm hidden sm:inline-flex">
            Book a lesson <Phone size={15} strokeWidth={2.2} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink ring-1 ring-line-soft card-shadow lg:hidden"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="lg:hidden">
          <div className="shell pb-4">
            <nav aria-label="Mobile navigation" className="surface-card rounded-[26px] p-3">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3.5 text-base font-medium text-ink-soft transition-colors hover:bg-canvas hover:text-ink"
                  activeProps={{ className: "bg-blue-soft text-blue-deep hover:bg-blue-soft" }}
                >
                  {n.label}
                </Link>
              ))}
              <a
                href={TEL}
                onClick={() => setOpen(false)}
                className="btn btn-primary mt-2 w-full justify-between"
              >
                Book a lesson <Phone size={18} />
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line-soft bg-white/70">
      <div className="shell py-14 md:py-20">
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="surface-card rounded-[32px] p-7 md:p-9 lg:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted-text">
              Calm, one-on-one Class 4 lessons on the Harare roads you&apos;ll actually be tested
              on. Dual-control cars, free pick-up and instructors who&apos;ve been doing this since
              2009.
            </p>
            <Link to="/book" className="arrow-link mt-7 text-sm">
              Start your booking <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
            <FooterCol title="Explore" links={nav.map((n) => ({ label: n.label, to: n.to }))} />
            <div className="surface-card rounded-[24px] p-6">
              <p className="eyebrow">Find us</p>
              <p className="mt-5 text-sm leading-relaxed text-ink">{ADDRESS}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-text">
                Mon–Fri 06:00–18:00
                <br />
                Sat 07:00–13:00
              </p>
            </div>
            <div className="surface-card rounded-[24px] p-6">
              <p className="eyebrow">Talk</p>
              <a href={TEL} className="mt-5 block text-sm font-medium text-ink hover:text-blue">
                {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-2 block break-all text-sm text-muted-text hover:text-blue"
              >
                {EMAIL}
              </a>
              <a
                href={WA}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue"
              >
                <MessageCircle size={15} /> WhatsApp us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-line-soft pt-6 text-xs text-muted-text">
          <p>© {new Date().getFullYear()} Travis Driving School. VID-registered instructors.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ label: string; to: string }>;
}) {
  return (
    <div className="surface-card rounded-[24px] p-6">
      <p className="eyebrow">{title}</p>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to as "/lessons"}
              className="text-sm text-muted-text transition-colors hover:text-blue"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  intro,
  image,
  imageAlt,
  imageCaption,
  theme = "paper",
  children,
}: {
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  theme?: "paper" | "ink";
  children?: ReactNode;
}) {
  const dark = theme === "ink";
  return (
    <section className="bg-canvas">
      <div className="shell py-12 md:py-16 lg:py-20">
        <div
          className={
            dark
              ? "relative overflow-hidden rounded-[40px] bg-ink px-7 py-12 text-white md:px-14 md:py-16"
              : undefined
          }
        >
          {dark && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-blue/25 blur-3xl"
            />
          )}
          <div className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="min-w-0 lg:col-span-7">
              <p className={`eyebrow ${dark ? "eyebrow-light" : "text-blue"}`}>{kicker}</p>
              <h1
                className={`display mt-5 text-[clamp(2.5rem,5.2vw,4.25rem)] ${dark ? "text-white" : "text-ink"}`}
              >
                {title}
              </h1>
              {intro && <p className={`lede mt-6 max-w-xl ${dark ? "lede-light" : ""}`}>{intro}</p>}
              {children && <div className="mt-8">{children}</div>}
            </div>
            {image && (
              <div className="min-w-0 lg:col-span-5">
                <div className="overflow-hidden rounded-[32px] bg-surface card-shadow-lg">
                  <img
                    src={image}
                    alt={imageAlt ?? ""}
                    className="photo-soft h-[260px] w-full object-cover md:h-[340px] lg:h-[380px]"
                  />
                </div>
                {imageCaption && (
                  <p className={`mt-4 text-xs ${dark ? "text-white/50" : "text-muted-text"}`}>
                    {imageCaption}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionTop({
  kicker,
  title,
  intro,
  action,
}: {
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-12 md:items-end md:gap-8">
      <div className="min-w-0 md:col-span-8">
        <p className="eyebrow text-blue">{kicker}</p>
        <h2 className="display-sm mt-4 text-[clamp(1.9rem,3.6vw,2.9rem)] text-ink">{title}</h2>
        {intro && <p className="lede mt-4 max-w-2xl">{intro}</p>}
      </div>
      {action && <div className="md:col-span-4 md:justify-self-end">{action}</div>}
    </div>
  );
}

export function StatGrid() {
  const items = [
    ["2,400+", "students licensed"],
    ["87%", "pass first time"],
    ["17", "years on Harare roads"],
    ["6", "dual-control cars"],
  ] as const;
  return (
    <dl className="grid grid-cols-2 gap-3">
      {items.map(([value, label]) => (
        <div key={label} className="rounded-[20px] bg-white p-5 ring-1 ring-line-soft card-shadow">
          <dt className="display-sm text-[clamp(1.4rem,3vw,2rem)] text-ink">{value}</dt>
          <dd className="mt-2 text-xs leading-snug text-muted-text md:text-[13px]">{label}</dd>
        </div>
      ))}
    </dl>
  );
}

export function CTA() {
  return (
    <section className="shell pb-20 md:pb-28">
      <div className="relative overflow-hidden rounded-[40px] bg-ink px-7 py-12 text-white md:px-14 md:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-blue/25 blur-3xl"
        />
        <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-14">
          <div className="min-w-0 lg:col-span-7">
            <p className="eyebrow eyebrow-light">No forms to fill in. Just a message.</p>
            <h2 className="display-sm mt-5 text-[clamp(2rem,4vw,3.25rem)] text-white">
              Your first lesson is one message away.
            </h2>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-5">
            <a href={WA} className="btn btn-primary btn-lg w-full justify-between">
              Message us on WhatsApp <ArrowUpRight size={18} />
            </a>
            <a href={TEL} className="btn btn-outline-light btn-lg w-full justify-between">
              Call {PHONE} <Phone size={16} />
            </a>
            <p className="mt-2 text-xs text-white/50">
              Usually replied to within the hour, Mon–Sat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQ({ items }: { items: ReadonlyArray<{ q: string; a: string }> }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details key={item.q} className="faq-item">
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function JourneyShowcase() {
  const [active, setActive] = useState(0);
  const step = journey[active] ?? journey[0];

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-5">
        <div className="grid gap-2.5">
          {journey.map((s, i) => {
            const isActive = active === i;
            return (
              <button
                key={s.n}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className={`group flex w-full items-center gap-4 rounded-[22px] border px-5 py-4 text-left transition-all ${
                  isActive
                    ? "border-blue/20 bg-white card-shadow"
                    : "border-transparent bg-white/60 hover:bg-white"
                }`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                    isActive ? "bg-blue text-white" : "bg-canvas text-muted-text"
                  }`}
                >
                  {s.n}
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={`display-sm block text-lg md:text-xl ${isActive ? "text-ink" : "text-ink-soft"}`}
                  >
                    {s.title}
                  </span>
                  <span className="mt-0.5 block text-xs text-muted-text">{s.tag}</span>
                </span>
                <ArrowRight
                  size={16}
                  className={`shrink-0 transition-transform ${
                    isActive ? "text-blue" : "text-muted-text group-hover:translate-x-0.5"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
      <div className="lg:col-span-7">
        <div className="overflow-hidden rounded-[32px] bg-surface card-shadow-lg">
          <img
            key={step.image}
            src={step.image}
            alt={step.alt}
            className="photo-soft animate-fade h-[300px] w-full object-cover md:h-[420px]"
          />
        </div>
        <div className="mt-6 flex flex-wrap items-start justify-between gap-4 px-1">
          <p className="lede measure max-w-xl">{step.copy}</p>
          <span className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-muted-text ring-1 ring-line-soft">
            {step.n} / 04
          </span>
        </div>
      </div>
    </div>
  );
}
