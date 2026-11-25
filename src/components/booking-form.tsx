import { ArrowUpRight, Check } from "lucide-react";
import { useState, type FormEvent } from "react";

import { WA } from "@/lib/site";
import { zones } from "@/lib/content";

const suburbs = zones.flatMap((z) => [...z.suburbs]);

export function BookingForm({ dark = false }: { dark?: boolean }) {
  const [sent, setSent] = useState(false);
  const [details, setDetails] = useState({
    name: "",
    phone: "",
    suburb: "",
    level: "Complete beginner",
    transmission: "Manual",
    time: "Weekday mornings",
    note: "",
  });

  const message = [
    "Hi Travis Driving School — I'd like to book a lesson.",
    "",
    `Name: ${details.name}`,
    `Phone: ${details.phone}`,
    `Area: ${details.suburb || "Not sure yet"}`,
    `Experience: ${details.level}`,
    `Car: ${details.transmission}`,
    `Best time: ${details.time}`,
    details.note ? `Anything else: ${details.note}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const href = `${WA}?text=${encodeURIComponent(message)}`;

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    window.open(href, "_blank", "noopener,noreferrer");
  }

  if (sent) {
    return (
      <div className="surface-card flex min-h-[420px] flex-col justify-center p-8 md:p-10">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-soft text-blue">
          <Check size={26} />
        </span>
        <h3 className="display-sm mt-7 text-3xl text-ink">Your message is ready.</h3>
        <p className="mt-3 max-w-sm leading-relaxed text-muted-text">
          WhatsApp should have opened in a new tab. If it didn&apos;t, use the button below — your
          details are already filled in.
        </p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-8 self-start"
        >
          Open WhatsApp <ArrowUpRight size={17} />
        </a>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-5 self-start text-sm font-medium text-blue transition-colors hover:text-blue-deep"
        >
          Edit my details
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="surface-card grid gap-5 p-6 sm:grid-cols-2 sm:p-8 md:p-9">
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          required
          autoComplete="name"
          placeholder="Rutendo"
          value={details.name}
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
        />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone / WhatsApp</label>
        <input
          id="phone"
          required
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+263 77 ..."
          value={details.phone}
          onChange={(e) => setDetails({ ...details, phone: e.target.value })}
        />
      </div>
      <div className="field">
        <label htmlFor="suburb">Your area</label>
        <select
          id="suburb"
          required
          value={details.suburb}
          onChange={(e) => setDetails({ ...details, suburb: e.target.value })}
        >
          <option value="" disabled>
            Choose a suburb
          </option>
          {suburbs.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
          <option value="Somewhere else">Somewhere else</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="level">Experience</label>
        <select
          id="level"
          value={details.level}
          onChange={(e) => setDetails({ ...details, level: e.target.value })}
        >
          <option>Complete beginner</option>
          <option>Had a few lessons</option>
          <option>Refresher</option>
          <option>Ready for test prep</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="transmission">Car</label>
        <select
          id="transmission"
          value={details.transmission}
          onChange={(e) => setDetails({ ...details, transmission: e.target.value })}
        >
          <option>Manual</option>
          <option>Automatic</option>
          <option>Either — advise me</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="time">Best time</label>
        <select
          id="time"
          value={details.time}
          onChange={(e) => setDetails({ ...details, time: e.target.value })}
        >
          <option>Weekday mornings</option>
          <option>Weekday afternoons</option>
          <option>Saturday morning</option>
          <option>Flexible</option>
        </select>
      </div>
      <div className="field sm:col-span-2">
        <label htmlFor="note">
          Anything we should know? <span className="font-normal text-muted-text">(optional)</span>
        </label>
        <textarea
          id="note"
          placeholder="Nervous driver, need pick-up from work, test date coming up..."
          value={details.note}
          onChange={(e) => setDetails({ ...details, note: e.target.value })}
        />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className="btn btn-primary w-full justify-between">
          Send booking request <ArrowUpRight size={18} />
        </button>
        <p className={`mt-3 text-xs ${dark ? "text-white/55" : "text-muted-text"}`}>
          We&apos;ll confirm a time personally. No payment needed to enquire.
        </p>
      </div>
    </form>
  );
}
