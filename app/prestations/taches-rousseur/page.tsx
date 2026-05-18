import type { Metadata } from "next";
import PrestaPageLayout from "@/components/PrestaPageLayout";

export const metadata: Metadata = {
  title: "Taches de rousseur semi-permanentes · Lymar Dermo-Esthetic",
  description: "Taches de rousseur semi-permanentes à Saint-Georges-de-Didonne. Effet naturel, soleil ou intense. Cabinet Anastasiia Lymar.",
};

export default function TachesRousseursPage() {
  return (
    <PrestaPageLayout
      breadcrumb="Prestations · Taches de rousseur"
      titre="Taches de rousseur semi-permanentes"
      sousTitre="Pour une peau vivante et ensoleillée — effet naturel, soleil ou intense."
      heroImage="/images/taches-rousseur.webp"
      heroImageAlt="Taches de rousseur semi-permanentes — Lymar Dermo-Esthetic"
      heroImagePosition="object-[center_20%]"
      intro="Les taches de rousseur semi-permanentes sont dessinées au dermographe, une par une, pour un résultat qui imite parfaitement le naturel. Trois intensités sont disponibles selon le rendu souhaité. Le résultat évolue avec le temps, plus doux à mesure que le pigment se dégrade."
      services={[
        { nom: "Effet naturel", duree: "1h", prix: "150 €" },
        { nom: "Effet soleil", duree: "1h", prix: "170 €" },
        { nom: "Effet intense", duree: "1h", prix: "190 €" },
      ]}
    />
  );
}
