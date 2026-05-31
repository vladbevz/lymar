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
      heroImage="/images/soins-cils-sourcils.webp"
      heroImageAlt="Soins cils et sourcils — Lymar Dermo-Esthetic"
      heroImagePosition="object-center"
      intro="Le Lashlift et le Browlift révèlent naturellement l'intensité du regard sans effet artificiel. Le rehaussement de cils apporte une courbure élégante et ouvre les yeux instantanément, tandis que le Browlift restructure les sourcils, discipline les poils et crée un effet plus dense et harmonieux. Chaque prestation est sublimée par une teinture des cils ou des sourcils afin d'intensifier davantage le regard et apporter un résultat encore plus défini."
      services={[
        { nom: "Teinture cils ou sourcils", duree: "15 min", prix: "10 €" },
        { nom: "Lashlift + teinture cils", duree: "45 min", prix: "50 €" },
        { nom: "Browlift + teinture + épilation sourcils", duree: "45 min", prix: "50 €" },
        { nom: "Combo Lashlift + Browlift", duree: "1h", prix: "95 €" },
      ]}
    />
  );
}
