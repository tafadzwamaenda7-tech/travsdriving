export const PHONE = "+263 77 123 4567";
export const TEL = "tel:+263771234567";
export const WA = "https://wa.me/263771234567";
export const EMAIL = "hello@travisdrivingschool.co.zw";
export const ADDRESS = "14 Fife Avenue, Harare";
export const LOGO = "/783985381_1371167255222826_6449666447010087905_n.jpg";

export function meta(title: string, description: string) {
  const t = `${title} — Travis Driving School`;
  return {
    meta: [
      { title: t },
      { name: "description", content: description },
      { property: "og:title", content: t },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
