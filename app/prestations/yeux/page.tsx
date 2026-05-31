import type { Metadata } from "next";
import PrestaPageLayout from "@/components/PrestaPageLayout";

export const metadata: Metadata = {
  title: "Eyeliner permanent — Liner classique, poudré & ras-de-cils · Lymar Dermo-Esthetic",
  description: "Eyeliner permanent à Saint-Georges-de-Didonne. Liner classique, poudré, ras-de-cils haut ou bas — 1ère retouche incluse. Cabinet Anastasiia Lymar.",
  alternates: { canonical: "https://lymar-dermo-esthetic.fr/prestations/yeux" },
};

export default function YeuxPage() {
  return (
    <PrestaPageLayout
      slug="yeux"
      breadcrumb="Prestations · Yeux"
      titre="Eyeliner permanent"
      sousTitre="Liner classique, poudré ou ras-de-cils — un regard intense et raffiné, défini au trait près."
      heroImage="/images/yeux.webp"
      heroImageAlt="Eyeliner permanent — regard sublimé"
      heroImagePosition="object-center"
      intro="L'eyeliner permanent redéfinit le regard de façon subtile ou affirmée selon la technique choisie. Chaque trait est dessiné avec précision pour s'adapter à la morphologie de l'œil. La 1ère retouche est incluse dans le tarif et recommandée entre 6 et 9 semaines après la séance initiale."
      services={[
        { nom: "Ras-de-cils haut + 1ère retouche (6–9 sem.)", duree: "1h30", prix: "150 €" },
        { nom: "Ras-de-cils bas + 1ère retouche (6–9 sem.)", duree: "1h30", prix: "150 €" },
        { nom: "Liner classique + 1ère retouche (6–9 sem.)", duree: "2h", prix: "250 €" },
        { nom: "Liner poudré + 1ère retouche (6–9 sem.)", duree: "2h", prix: "280 €" },
        { nom: "Retouche yeux (6–7 mois)", duree: "1h", prix: "120–150 €" },
        { nom: "Retouche yeux (1 an)", duree: "1h", prix: "150–180 €" },
      ]}
    />
  );
}
