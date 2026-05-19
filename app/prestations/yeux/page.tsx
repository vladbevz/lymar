import type { Metadata } from "next";
import PrestaPageLayout from "@/components/PrestaPageLayout";

export const metadata: Metadata = {
  title: "Retouche yeux — Eyeliner permanent · Lymar Dermo-Esthetic",
  description: "Retouche eyeliner permanent à Saint-Georges-de-Didonne. Lash liner, eyeliner et cat eyes par Anastasiia Lymar.",
  alternates: { canonical: "https://lymar-dermo-esthetic.fr/prestations/yeux" },
};

export default function YeuxPage() {
  return (
    <PrestaPageLayout
      slug="yeux"
      breadcrumb="Prestations · Yeux"
      titre="Retouche eyeliner permanent"
      sousTitre="Lash liner, eyeliner classique ou cat eyes — un regard intense et raffiné au quotidien."
      heroImage="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=85&fit=crop&crop=faces"
      heroImageAlt="Eyeliner permanent — regard sublimé"
      intro="L'eyeliner permanent redéfinit le regard de façon subtile ou affirmée selon la technique choisie. La retouche est recommandée pour maintenir l'intensité du pigment dans le temps."
      services={[
        { nom: "Retouche yeux (6–7 mois)", duree: "1h", prix: "120–150 €" },
      ]}
    />
  );
}
