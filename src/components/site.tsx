import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ADDRESS, EMAIL, PHONE, TEL, WA } from "@/lib/site";

const nav = [
  { to: "/lessons", label: "Lessons" },
  { to: "/prices", label: "Prices" },
  { to: "/areas", label: "Areas" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-y-3 px-5 py-4">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl font-semibold tracking-tight">Kopje</span>
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Driving School</span>
        </Link>
        <a href={WA} className="rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 md:order-last">Book a lesson</a>
        <nav className="-mx-1 flex w-full gap-1 overflow-x-auto text-sm md:w-auto">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="whitespace-nowrap rounded-sm px-3 py-1.5 text-muted-foreground hover:text-foreground"
              activeProps={{ className: "bg-secondary text-foreground" }}>{n.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="road-line" />
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 text-sm text-muted-foreground md:grid-cols-4">
        <div>
          <p className="font-display text-lg text-foreground">Kopje Driving School</p>
          <p className="mt-2">Teaching Harare to drive since 2009.</p>
        </div>
        <div><p className="font-mono text-[11px] uppercase tracking-widest">Visit</p><p className="mt-2">{ADDRESS}</p></div>
        <div><p className="font-mono text-[11px] uppercase tracking-widest">Call</p><p className="mt-2"><a href={TEL}>{PHONE}</a><br /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p></div>
        <div><p className="font-mono text-[11px] uppercase tracking-widest">Hours</p><p className="mt-2">Mon–Fri 06:00–18:00<br />Sat 07:00–13:00</p></div>
      </div>
      <div className="mx-auto max-w-6xl border-t border-border px-5 py-5 text-xs text-muted-foreground">© {new Date().getFullYear()} Kopje Driving School. VID-registered instructors.</div>
    </footer>
  );
}

export function PageHead({ kicker, title, children }: { kicker: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 pb-14 pt-14 md:pt-20">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{kicker}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">{title}</h1>
        {children && <div className="mt-5 max-w-xl text-lg text-muted-foreground">{children}</div>}
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5 py-14">
        <h2 className="max-w-lg font-display text-3xl">First lesson this week? Message us — we reply within the hour.</h2>
        <div className="flex flex-wrap gap-4">
          <a href={WA} className="rounded-sm bg-accent px-5 py-3 font-medium text-accent-foreground hover:opacity-90">WhatsApp us</a>
          <a href={TEL} className="rounded-sm border border-primary-foreground/40 px-5 py-3 font-medium hover:bg-primary-foreground/10">Call {PHONE}</a>
        </div>
      </div>
    </section>
  );
}
