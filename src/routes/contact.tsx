import { createFileRoute } from "@tanstack/react-router";
import { PageHead } from "@/components/site";
import { ADDRESS, EMAIL, meta, PHONE, TEL, WA } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => meta("Contact", "Book a driving lesson in Harare by WhatsApp, phone or email. Office on Fife Avenue."),
  component: Contact,
});

function Contact() {
  const rows = [
    ["WhatsApp", "Fastest — usually within the hour", WA, "Message us"],
    ["Phone", PHONE, TEL, "Call"],
    ["Email", EMAIL, `mailto:${EMAIL}`, "Write"],
  ];
  return (
    <>
      <PageHead kicker="Contact" title="Book your first lesson.">Tell us your area and when you're free. We'll match you with an instructor and confirm a time.</PageHead>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[2fr_1fr]">
        <ul className="divide-y divide-border border-y border-border">
          {rows.map(([l, v, h, a]) => (
            <li key={l} className="flex flex-wrap items-center justify-between gap-4 py-6">
              <div><p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{l}</p><p className="mt-1 text-lg">{v}</p></div>
              <a href={h} className="rounded-sm border border-foreground/20 px-4 py-2 text-sm font-medium hover:bg-secondary">{a} →</a>
            </li>
          ))}
        </ul>
        <div className="border border-border bg-card p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Office</p>
          <p className="mt-2 font-display text-xl">{ADDRESS}</p>
          <p className="mt-4 text-sm text-muted-foreground">Mon–Fri 06:00–18:00<br />Sat 07:00–13:00<br />Closed Sundays & public holidays</p>
        </div>
      </section>
    </>
  );
}
