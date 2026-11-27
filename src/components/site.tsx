import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";

import { Enter, Reveal, usePointerParallax } from "@/components/motion";
import { Reel, type ReelSource } from "@/components/reel";
import { journey, stats } from "@/lib/content";
import { ADDRESS, EMAIL, LOGO, PHONE, TEL, WA } from "@/lib/site";

type RoutePath = "/" | "/lessons" | "/prices" | "/areas" | "/about" | "/book" | "/contact";

const nav = [
  { to: "/lessons", label: "Lessons" },
  { to: "/prices", label: "Prices" },
  { to: "/areas", label: "Areas" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const satisfies ReadonlyArray<{ to: RoutePath; label: string }>;

const footerLearn = [
  { to: "/lessons", label: "How lessons work" },
  { to: "/prices", label: "Prices" },
  { to: "/book", label: "Book a lesson" },
] as const satisfies ReadonlyArray<{ to: RoutePath; label: string }>;

const footerSchool = [
  { to: "/", label: "Home" },
  { to: "/areas", label: "Pick-up areas" },
  { to: "/about", label: "About Travis" },
  { to: "/contact", label: "Contact" },
] as const satisfies ReadonlyArray<{ to: RoutePath; label: string }>;

const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

function useScrolled(offset = 24) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return scrolled;
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center rounded-[14px] border border-line bg-surface px-2.5 py-1.5 shadow-sm">
      <img
        src={LOGO}
        alt="Travis Driving School"
        className={`${compact ? "h-9" : "h-10 md:h-11"} w-auto object-contain`}
      />
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    mobileNavRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      menuButtonRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header data-scrolled={scrolled} className="site-header">
      <div className="shell grid h-[76px] grid-cols-[1fr_auto_1fr] items-center gap-4">
        <Link
          to="/"
          aria-label="Travis Driving School, home"
          onClick={() => setOpen(false)}
          className="justify-self-start shrink-0 transition-transform hover:-translate-y-0.5"
        >
          <Logo />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-[12px] px-3.5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.09em] text-ink-soft transition-colors hover:bg-leaf-soft/60 hover:text-ink"
              activeProps={{
                className: "bg-leaf-soft/80 text-leaf-deep",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center justify-self-end gap-3">
          <Link to="/book" className="btn hidden lg:inline-flex">
            Book a lesson <ArrowUpRight size={16} />
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="icon-button lg:hidden"
          >
            <span aria-hidden="true" className="menu-icon" data-open={open}>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className="drop-panel mobile-nav lg:hidden"
        data-open={open}
        inert={!open}
      >
        <div className="drop-panel-inner">
          <nav
            ref={mobileNavRef}
            aria-label="Mobile navigation"
            className="shell max-h-[calc(100vh-76px)] overflow-y-auto pb-9 pt-3"
          >
            <ol className="drop-stagger border-t border-white/15">
              {nav.map((item, index) => (
                <li key={item.to} className="border-b border-white/15">
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="display-sm flex min-h-[68px] items-baseline gap-5 py-4 text-2xl uppercase text-warm-white/85 transition-colors hover:text-warm-white"
                    activeProps={{
                      className: "text-warm-white",
                    }}
                  >
                    <span aria-hidden="true" className="meta-line w-7 shrink-0 text-leaf-soft">
                      0{index + 1}
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ol>
            <div className="mt-7 flex flex-col items-start gap-4 border-t border-white/15 pt-6 drop-stagger">
              <Link to="/book" onClick={() => setOpen(false)} className="btn btn--leaf">
                Book a lesson <ArrowUpRight size={16} />
              </Link>
              <a href={TEL} className="text-warm-white/75 transition-colors hover:text-warm-white">
                {PHONE}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ to: RoutePath; label: string }>;
}) {
  return (
    <div>
      <p className="meta-line text-warm-white/50">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="inline-flex min-h-[44px] items-center text-sm text-warm-white/70 transition-colors hover:text-warm-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/12 bg-ink text-warm-white">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Logo compact />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-warm-white/70">
              Class 4 driving lessons in Harare, teaching on test routes from our desk on Fife
              Avenue since 2009.
            </p>
            <div className="bento-card bento-card--dark mt-7 max-w-sm rounded-[20px] p-5">
              <p className="meta-line text-warm-white/55">Call the desk</p>
              <a
                href={TEL}
                className="display-sm mt-2 inline-flex min-h-[44px] items-center text-2xl text-warm-white transition-colors hover:text-leaf-soft"
              >
                {PHONE}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-3">
            <FooterCol title="Learn" links={footerLearn} />
            <FooterCol title="School" links={footerSchool} />
          </div>

          <address className="bento-card bento-card--dark rounded-[24px] p-6 not-italic text-sm leading-relaxed text-warm-white/75 md:col-span-4">
            <p className="meta-line text-warm-white/55">Office</p>
            <a
              href={mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-start gap-1.5 transition-colors hover:text-warm-white"
            >
              <MapPin size={15} className="mt-0.5 shrink-0 text-leaf-soft" />
              {ADDRESS}
              <ArrowUpRight size={14} className="mt-0.5 shrink-0" />
            </a>
            <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-white/15 pt-4 text-[13px]">
              <div>
                <dt className="text-warm-white/50">Mon–Fri</dt>
                <dd className="mt-1">06:00–18:00</dd>
              </div>
              <div>
                <dt className="text-warm-white/50">Saturday</dt>
                <dd className="mt-1">07:00–13:00</dd>
              </div>
            </dl>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-4 inline-block min-h-[44px] break-words text-warm-white/70 transition-colors hover:text-warm-white"
            >
              {EMAIL}
            </a>
          </address>
        </div>

        <div className="mt-12 border-t border-white/15 pt-5 text-xs text-warm-white/55">
          <p>© {new Date().getFullYear()} Travis Driving School. VID-registered instructors.</p>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  kicker,
  title,
  intro,
  image,
  video,
  children,
  tall = false,
}: {
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: string;
  video?: ReelSource;
  children?: ReactNode;
  tall?: boolean;
}) {
  const heroRef = usePointerParallax<HTMLElement>();

  return (
    <section ref={heroRef} className={`hero${tall ? " hero--tall" : ""}`}>
      <div className="hero-media" aria-hidden="true">
        {video ? (
          <Reel reel={video} priority decorative rounded="rounded-none" className="h-full w-full" />
        ) : (
          image && <img src={image} alt="" className="h-full w-full object-cover" />
        )}
      </div>
      <div aria-hidden="true" className="hero-scrim" />
      <div aria-hidden="true" className="hero-grain" />

      <div className="shell hero-inner">
        <div className="hero-copy">
          <Enter as="p" index={0} className="eyebrow eyebrow-light">
            {kicker}
          </Enter>
          <Enter
            as="h1"
            index={1}
            className="hero-title display mt-4 text-[clamp(2.5rem,6.4vw,5.4rem)]"
          >
            {title}
          </Enter>
          {intro && (
            <Enter as="p" index={2} className="lede lede-light mt-5 max-w-2xl">
              {intro}
            </Enter>
          )}
          {children && (
            <Enter index={3} className="hero-actions">
              {children}
            </Enter>
          )}
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
    <Reveal className="border-t border-line pt-7">
      <div className="grid gap-6 md:grid-cols-12 md:items-end md:gap-10">
        <div className="min-w-0 md:col-span-8">
          <p className="eyebrow">{kicker}</p>
          <h2 className="display-sm mt-4 text-[clamp(2rem,4vw,3.25rem)] text-ink">{title}</h2>
          {intro && <p className="lede mt-4 max-w-2xl">{intro}</p>}
        </div>
        {action && <div className="md:col-span-4 md:justify-self-end">{action}</div>}
      </div>
    </Reveal>
  );
}

export function StatGrid() {
  return (
    <dl className="grid grid-cols-2 gap-3">
      {stats.map((stat, index) => (
        <Reveal
          key={stat.label}
          as="div"
          kind="pop"
          delay={index * 70}
          className="bento-card bento-card--soft rounded-[20px] p-4 md:p-5"
        >
          <dt className="display tabular text-[clamp(1.6rem,3.4vw,2.6rem)] leading-none text-ink">
            {stat.value}
          </dt>
          <dd className="mt-2 text-xs leading-snug text-muted-text">{stat.label}</dd>
        </Reveal>
      ))}
    </dl>
  );
}

export function CTA() {
  return (
    <section className="shell section-pad">
      <Reveal
        kind="scale"
        className="bento-card bento-card--dark card-pad-lg grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-14"
      >
        <div className="min-w-0 lg:col-span-7">
          <p className="eyebrow">One message is enough</p>
          <h2 className="display-sm mt-5 text-[clamp(2rem,4.2vw,3.4rem)] text-warm-white">
            Your first lesson is one message away.
          </h2>
        </div>
        <div className="lg:col-span-5">
          <p className="mb-5 max-w-md text-sm text-warm-white/70">
            Tell us your suburb and when you&apos;re free. An instructor replies, not a bot.
          </p>
          <div className="flex flex-col items-start gap-3">
            <a href={TEL} className="action-link action-link-light text-xl md:text-2xl">
              Call {PHONE} <ArrowUpRight size={18} />
            </a>
            <a href={WA} className="arrow-link arrow-link-light text-sm">
              Message us on WhatsApp <ArrowUpRight size={16} />
            </a>
          </div>
          <p className="mt-5 text-xs text-warm-white/55">
            Usually replied to within the hour, Mon–Sat.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

export function FAQ({ items }: { items: ReadonlyArray<{ q: string; a: string }> }) {
  const [open, setOpen] = useState<number | null>(null);
  const idBase = useId();

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${idBase}-faq-${index}`;

        return (
          <Reveal key={item.q} as="div" delay={index * 55} className="faq-item" data-open={isOpen}>
            <button
              type="button"
              className="faq-trigger"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span>{item.q}</span>
              <span aria-hidden="true" className="faq-toggle">
                +
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-label={item.q}
              aria-hidden={!isOpen}
              className="drop-panel"
              data-open={isOpen}
            >
              <div className="drop-panel-inner">
                <p className="faq-panel-inner">{item.a}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

export function ReelGallery({
  kicker,
  title,
  intro,
  items,
}: {
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  items: ReadonlyArray<{
    reel: ReelSource;
    kicker: string;
    title: string;
    copy: string;
  }>;
}) {
  return (
    <section className="shell section-pad">
      <SectionTop kicker={kicker} title={title} intro={intro} />
      <div className="bento-grid mt-12">
        {items.map((item, index) => (
          <Reveal
            key={item.reel.src}
            as="figure"
            kind="scale"
            delay={index * 80}
            className={`bento-card overflow-hidden ${
              index === 0 ? "md:col-span-7" : index === 1 ? "md:col-span-5" : "md:col-span-12"
            }`}
          >
            <Reel
              reel={item.reel}
              priority={index === 0}
              rounded="rounded-none"
              className={index === 2 ? "aspect-[21/9] w-full" : "aspect-[16/10] w-full"}
            />
            <figcaption className="card-pad">
              <p className="eyebrow">{item.kicker}</p>
              <h3 className="display-sm mt-2 text-xl text-ink">{item.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-text">{item.copy}</p>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function JourneyBento() {
  const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"] as const;

  return (
    <div className="bento-grid">
      {journey.map((step, index) => (
        <Reveal
          key={step.n}
          as="article"
          kind={index % 2 === 0 ? "rise" : "scale"}
          delay={index * 70}
          className={`bento-card card-pad ${spans[index] ?? "md:col-span-6"}`}
        >
          <div className="flex items-baseline justify-between gap-4">
            <span className="display tabular text-5xl leading-none text-leaf-deep">{step.n}</span>
            <span className="meta-line text-muted-text">{step.tag}</span>
          </div>
          <div className="ratio-media mt-6 aspect-[16/10]">
            {step.video ? (
              <Reel reel={step.video} rounded="rounded-none" className="h-full w-full" />
            ) : (
              <img src={step.image} alt={step.alt} className="photo h-full w-full" />
            )}
          </div>
          <h3 className="display-sm mt-6 text-2xl text-ink">{step.title}</h3>
          <p className="lede mt-3 text-[0.98rem]">{step.copy}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function JourneyShowcase() {
  const [active, setActive] = useState(0);
  const step = journey[active] ?? journey[0];

  return (
    <div className="bento-grid">
      <div className="md:col-span-5">
        <ol className="bento-card overflow-hidden">
          {journey.map((item, index) => {
            const isActive = active === index;
            return (
              <Reveal
                key={item.n}
                as="li"
                delay={index * 65}
                className={`border-b border-line last:border-b-0 ${
                  isActive ? "bg-leaf-soft/70" : "bg-transparent"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  aria-pressed={isActive}
                  className="flex min-h-[92px] w-full items-start gap-4 p-5 text-left transition-colors hover:bg-surface/60"
                >
                  <span
                    className={`display tabular w-11 shrink-0 text-3xl leading-none ${
                      isActive ? "text-leaf-deep" : "text-muted-text"
                    }`}
                  >
                    {item.n}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={`display-sm block text-xl ${isActive ? "text-ink" : "text-ink-soft"}`}
                    >
                      {item.title}
                    </span>
                    <span className="mt-1 block text-xs uppercase tracking-[0.1em] text-muted-text">
                      {item.tag}
                    </span>
                  </span>
                  <ArrowRight
                    size={16}
                    className={`mt-1 shrink-0 transition-transform ${
                      isActive ? "text-leaf-deep" : "text-muted-text group-hover:translate-x-0.5"
                    }`}
                  />
                </button>
              </Reveal>
            );
          })}
        </ol>
        <p className="mt-5 max-w-sm text-xs leading-relaxed text-muted-text">
          Four stages, one test route. Move through the list to see each step.
        </p>
      </div>

      <Reveal as="div" kind="scale" className="bento-card overflow-hidden md:col-span-7">
        <div key={step.n} className="zone-enter hero-media relative aspect-[16/10] bg-ink">
          {step.video ? (
            <Reel
              key={step.video.src}
              reel={step.video}
              rounded="rounded-none"
              className="h-full w-full"
            />
          ) : (
            <img key={step.image} src={step.image} alt={step.alt} className="photo h-full w-full" />
          )}
          <div
            aria-hidden="true"
            className="hero-scrim pointer-events-none absolute inset-0 opacity-70"
          />
          <span className="meta-line absolute bottom-4 left-5 text-warm-white/80">
            {step.n} / 04 · {step.tag}
          </span>
        </div>
        <div className="card-pad">
          <h3 className="display-sm text-2xl text-ink">{step.title}</h3>
          <p className="lede mt-3 text-[0.98rem]">{step.copy}</p>
        </div>
      </Reveal>
    </div>
  );
}
