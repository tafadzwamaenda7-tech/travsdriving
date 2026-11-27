import { PHOTO, VIDEO } from "@/lib/media";

/**
 * Only the contact page keeps the existing Harare photograph the client likes.
 * Everywhere else uses Travis-owned media from `src/lib/media.ts`.
 */
export const IMG = {
  skyline: "/images/city-skyline.jpg",
} as const;

export const stats = [
  { value: "2,400+", label: "students licensed since 2009" },
  { value: "17 years", label: "teaching Harare roads" },
  { value: "87%", label: "pass on the first attempt" },
  { value: "6 cars", label: "all with dual controls" },
] as const;

export const journey = [
  {
    n: "01",
    title: "Get your provisional",
    copy: "We take the VID oral test one question at a time. Road signs, right of way, the awkward ones — you leave knowing why, not just what.",
    tag: "Week 1–2",
    image: PHOTO.carDetail,
    alt: "A Travis learner car with its L-plate",
    video: undefined,
  },
  {
    n: "02",
    title: "Find your feet",
    copy: "Clutch, gears, mirrors, steering. We start on the quiet streets around Avondale and Belgravia until the car feels like an extension of you.",
    tag: "Lessons 1–6",
    image: PHOTO.fleet,
    alt: "Travis Driving School learner cars",
    video: undefined,
  },
  {
    n: "03",
    title: "Meet the city",
    copy: "Roundabouts, robots, kombis and the CBD at 5pm. You learn the rhythm of Harare traffic with someone calm in the passenger seat.",
    tag: "Lessons 7–14",
    image: VIDEO.street.poster,
    alt: "Learner cars in Harare traffic",
    video: VIDEO.street,
  },
  {
    n: "04",
    title: "Own the test route",
    copy: "Hill starts, three-point turns, reverse and parallel parking — on the exact roads examiners use. Test day becomes just another drive.",
    tag: "Lessons 15–20",
    image: VIDEO.departure.poster,
    alt: "Cars leaving the Travis practice yard",
    video: VIDEO.departure,
  },
] as const;

export type Package = {
  name: string;
  detail: string;
  price: string;
  note: string;
  featured?: boolean;
};

export const packages: readonly Package[] = [
  {
    name: "Single lesson",
    detail: "30 minutes, one-on-one",
    price: "$15",
    note: "A refresher or a first feel for the car",
  },
  {
    name: "10 lessons",
    detail: "Use them any time in two months",
    price: "$140",
    note: "Save $10 — a good rhythm",
  },
  {
    name: "Learner bundle",
    detail: "20 lessons + test route practice",
    price: "$270",
    note: "Most students start here",
    featured: true,
  },
  {
    name: "Test day",
    detail: "Warm-up lesson + car for the test",
    price: "$45",
    note: "Book once you have a date",
  },
  {
    name: "Oral prep",
    detail: "Two sessions + the VID question booklet",
    price: "$20",
    note: "Before your provisional",
  },
];

export const zones = [
  {
    name: "North",
    note: "Leafy streets, easy starts",
    suburbs: ["Avondale", "Borrowdale", "Mt Pleasant", "Highlands", "Marlborough", "Greendale"],
  },
  {
    name: "West",
    note: "Close to the office",
    suburbs: ["Mabelreign", "Belvedere", "Milton Park", "Warren Park"],
  },
  { name: "South", note: "Routes we know well", suburbs: ["Waterfalls", "Hatfield", "Southerton"] },
  { name: "Central", note: "The real test ground", suburbs: ["CBD", "Avenues", "UZ campus"] },
] as const;

export const team = [
  { initials: "TM", name: "T. Moyo", role: "Founder · senior instructor", years: "17 years" },
  { initials: "RC", name: "R. Chikwanha", role: "Manual & automatic", years: "9 years" },
  {
    initials: "SN",
    name: "S. Ndlovu",
    role: "Nervous drivers · patient by trade",
    years: "6 years",
  },
] as const;

export const lessonsFaq = [
  {
    q: "How long is a lesson?",
    a: "Thirty minutes, one-on-one. Long enough to make progress, short enough that you never get tired and sloppy. Most students take two a week.",
  },
  {
    q: "Do you collect me?",
    a: "Yes — free pick-up from home, work or campus in the areas we cover. We bring you back to the same place at the end.",
  },
  {
    q: "Manual or automatic?",
    a: "Both. A manual licence lets you drive both, so most students choose it. If you already drive an automatic, we'll teach you in the Toyota Aqua and your licence will be automatic-only.",
  },
  {
    q: "What if I panic behind the wheel?",
    a: "That's normal, and it's not a problem. We go at your pace, explain everything before we do it, and there is a dual-control pedal on the instructor's side. We have never shouted at a student.",
  },
  {
    q: "Do you guarantee a pass?",
    a: "No one honest can. We do guarantee thorough preparation: you'll have driven the test manoeuvres and the routes examiners use before test day.",
  },
] as const;

export const pricesFaq = [
  {
    q: "What's included in the price?",
    a: "Pick-up, drop-off and fuel. The car is dual-control and insured for lessons. There is no extra charge for test route practice within your bundle.",
  },
  {
    q: "How do I pay?",
    a: "Cash, EcoCash or bank transfer. Bundles are paid upfront and must be used within two months.",
  },
  {
    q: "Is the VID test fee included?",
    a: "No. Test fees are paid directly to VID on the day. We'll tell you exactly what to bring and when to arrive.",
  },
  {
    q: "Do lessons carry over?",
    a: "Single lessons never expire. Bundle lessons can be used within two months of purchase — we'll text you before they run out.",
  },
] as const;
