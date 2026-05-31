export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://lymar-dermo-esthetic.fr";

export const SITE_NAME = "Lymar Dermo-Esthetic";

export const PLANITY =
  "https://www.planity.com/lymar-dermo-esthetic-17110-saint-georges-de-didonne";

export const PLANITY_BEAUNE =
  "https://www.planity.com/lymar-dermo-esthetic-beaune-21200";

export const PLANITY_LOCATIONS = [
  { city: "Saint-Georges-de-Didonne", href: PLANITY },
  { city: "Beaune", href: PLANITY_BEAUNE },
] as const;

export const INSTAGRAM = "https://www.instagram.com/lymar.dermo.esthetic/";
