import type { ReelSource } from "@/components/reel";

/**
 * Travis-owned footage and photography.
 *
 * The source files keep their original upload names (so nothing breaks for the
 * person managing them in Lovable); this map gives the app stable, meaningful
 * keys. The clips are portrait videos with landscape footage letterboxed in
 * the middle, so `object-cover` in a landscape frame reveals the full scene.
 */
const file = (name: string) => `/${encodeURIComponent(name)}`;

export const VIDEO = {
  /** A student showing off her licence — the payoff at the end of the course. */
  graduate: {
    src: file("tiktokio.com1795707442_mqwnNZQEVienGuLDxyNL.mp4"),
    poster: "/images/reels/reel-01.webp",
    label: "A Travis student holding her licence after passing her test",
  },
  /** White dual-control learner car on the dirt road outside the yard. */
  fleet: {
    src: file("tiktokio.com1795707977_207t18C0N5ZlxueD5t06.mp4"),
    poster: "/images/reels/reel-02.webp",
    label: "A Travis learner car on the road outside the training yard",
  },
  /** Moving traffic with a learner car on a Harare street. */
  street: {
    src: file("tiktokio.com1795708620_JQskoDHOOvqPYdSuswpv.mp4"),
    poster: "/images/reels/reel-03.webp",
    label: "Traffic and learner cars on a Harare street",
  },
  /** Wide view of the practice yard. */
  compound: {
    src: file("vv.mp4"),
    poster: "/images/reels/reel-05.webp",
    label: "The Travis practice yard with cars parked under the trees",
  },
  /** A learner car ready for collection. */
  collection: {
    src: file("WhatsApp Video 2026-11-26 at 15.36.27.mp4"),
    poster: "/images/reels/reel-06.webp",
    label: "A Travis learner car ready for a pick-up",
  },
  /** Cars coming and going from the yard. */
  departure: {
    src: file("j.mp4"),
    poster: "/images/reels/reel-07.webp",
    label: "Cars leaving the Travis practice yard",
  },
} as const satisfies Record<string, ReelSource>;

export const PHOTO = {
  /** Close side view of a Travis car with its L-plate and branding. */
  carDetail: file("tiktokio.com1795708529_2A1D27y6zPj1BpmIOcrS.jpg"),
  /** The fleet lined up: grey, blue and black learner cars. */
  fleet: file("tiktokio.com1795708529_GMWQNH3wqyZE6gz9fCJk.jpg"),
  /** Supplied portrait image used as the prices-page background. */
  pricesHero: file("tiktokio.com1795756765_VsJ9IlNFCRkOzSB0rn7i.jpg"),
} as const;
