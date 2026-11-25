import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { PageHero } from "@/components/site";
import { meta } from "@/lib/site";

export const Route = createFileRoute("/credits")({
  head: () =>
    meta(
      "Photography credits",
      "Credits for the photography used on the Travis Driving School website.",
    ),
  component: Credits,
});

const photos = [
  {
    file: "Driver in Zimbabwe",
    by: "KelvinJM",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:A_man_driving_a_small_car_carrying_pipes.jpg",
  },
  {
    file: "Jason Moyo Avenue, Harare",
    by: "Itaisibanda",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Jason_Moyo_ave_Harare.jpg",
  },
  {
    file: "Carnival in Harare",
    by: "Wmwire",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Dancing_queens.jpg",
  },
  {
    file: "Africa Unity Square, Harare",
    by: "damien_farrell",
    license: "CC BY 2.0",
    href: "https://commons.wikimedia.org/wiki/File:1997_Harare_Zimbabwe_3140056352.jpg",
  },
  {
    file: "Harare street vendor",
    by: "Ben Chanz Chanditeya",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Harare_street_vendor.jpg",
  },
  {
    file: "Traffic in Harare",
    by: "Ryen Gwaze",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:HARARE_ZIMBABWE.jpg",
  },
  {
    file: "Driver with a car in Zimbabwe",
    by: "KelvinJM",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:A_man_driving_car_that_transfer_banana_from_village_to_town_market.jpg",
  },
  {
    file: "The Face of Africa in Zimbabwe",
    by: "Flummox ftm",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:The_Face_of_Africa_in_Zimbabwe.jpg",
  },
  {
    file: "Learner with a provisional licence",
    by: "Godelimnyama",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Provisional_licence_picture_of_magodi_moyo_who_passed_his_learner_test.jpg",
  },
  {
    file: "Thinking African Woman",
    by: "Joseph Tawanda Mutsena",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Thinking_African_Woman.jpg",
  },
] as const;

function Credits() {
  return (
    <>
      <PageHero
        kicker="Credits"
        title={<>Photography credits.</>}
        intro="The photographs on this site come from Wikimedia Commons. They've been cropped and colour-graded for the web. Full licences are linked below."
      />
      <section className="shell pb-20 md:pb-24">
        <div className="surface-card divide-y divide-line overflow-hidden">
          {photos.map((p) => (
            <a
              key={p.file}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-2 p-5 transition-colors hover:bg-surface-soft sm:grid-cols-[1.5fr_1fr_auto] sm:items-center sm:gap-6 sm:px-7"
            >
              <span className="font-medium text-ink">{p.file}</span>
              <span className="text-sm text-muted-text">
                Photo by {p.by} · {p.license}
              </span>
              <ArrowUpRight
                size={16}
                className="text-blue transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          ))}
        </div>
        <Link to="/" className="arrow-link mt-10 inline-flex text-sm">
          Back to the homepage <ArrowUpRight size={16} />
        </Link>
      </section>
    </>
  );
}
