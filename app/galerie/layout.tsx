import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Galerie — Nos réalisations · Lymar Dermo-Esthetic",
  description:
    "Découvrez les réalisations de Lymar Dermo-Esthetic : sourcils, lèvres et maquillage permanent par Anastasiia Lymar. Photos de résultats naturels.",
  alternates: { canonical: `${SITE_URL}/galerie` },
  openGraph: {
    title: "Galerie — Nos réalisations · Lymar Dermo-Esthetic",
    description: "Photos de réalisations en maquillage permanent : sourcils et lèvres.",
    url: `${SITE_URL}/galerie`,
  },
};

export default function GalerieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
