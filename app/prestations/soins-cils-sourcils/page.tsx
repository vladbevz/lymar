import type { Metadata } from "next";
import PrestaPageLayout from "@/components/PrestaPageLayout";

export const metadata: Metadata = {
  title: "Soins cils & sourcils — Lashlift, Browlift, Teinture · Lymar Dermo-Esthetic",
  description: "Lashlift, browlift et teinture cils/sourcils à Saint-Georges-de-Didonne. Soins express pour sublimer le regard. Cabinet Anastasiia Lymar.",
  alternates: { canonical: "https://lymar-dermo-esthetic.fr/prestations/soins-cils-sourcils" },
};

export default function SoinsCilsSourcilsPage() {
  return (
    <PrestaPageLayout
      slug="soins-cils-sourcils"
      breadcrumb="Prestations · Soins cils & sourcils"
      titre="Soins cils & sourcils"
      sousTitre="Lashlift, browlift, teinture — des soins express pour sublimer votre regard au quotidien."
      heroImage="/images/soins-cils.webp"
      heroImageAlt="Soins cils et sourcils — Lymar Dermo-Esthetic"
      heroImagePosition="object-center"
      intro="Ces soins non permanents apportent une mise en valeur immédiate du regard, sans pigmentation. Idéals en complément d'un maquillage permanent ou seuls pour entretenir et sublimer les cils et sourcils naturels."
      services={[
        { nom: "Teinture cils ou sourcils", duree: "15 min", prix: "10 €" },
        { nom: "Lashlift + teinture cils", duree: "45 min", prix: "50 €" },
        { nom: "Browlift + teinture + épilation sourcils", duree: "45 min", prix: "50 €" },
        { nom: "Combo Lashlift + Browlift", duree: "1h", prix: "95 €" },
      ]}
    />
  );
}
