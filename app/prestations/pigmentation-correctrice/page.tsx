import type { Metadata } from "next";
import PrestaPageLayout from "@/components/PrestaPageLayout";

export const metadata: Metadata = {
  title: "Pigmentation correctrice — Camouflage cicatrices · Lymar Dermo-Esthetic",
  description: "Camouflage dermique de cicatrices (blépharoplastie, lifting, petites cicatrices) à Saint-Georges-de-Didonne. Cabinet Anastasiia Lymar.",
};

export default function PigmentationCorrectricePage() {
  return (
    <PrestaPageLayout
      breadcrumb="Prestations · Corrections"
      titre="Pigmentation correctrice"
      sousTitre="Camouflage dermique de cicatrices — blépharoplastie, lifting, cicatrices diverses."
      heroImage="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=85&fit=crop"
      heroImageAlt="Pigmentation correctrice — camouflage cicatrices"
      intro="La dermopigmentation correctrice atténue visuellement les cicatrices en restaurant l'homogénéité cutanée par une pigmentation précise. Chaque cas est évalué lors d'une consultation préalable. Les cicatrices doivent être totalement cicatrisées, plates, non inflammatoires, et vieilles d'au moins 12 mois."
      services={[
        { nom: "Consultation camouflage cicatrice", duree: "30 min", prix: "20 €", note: "Remboursée si traitement réservé" },
        { nom: "Cicatrices de blépharoplastie", duree: "1h", prix: "150 €" },
        { nom: "Cicatrices de lifting (derrière/autour des oreilles)", duree: "1h 20 min", prix: "180 €" },
        { nom: "Petites cicatrices", duree: "1h", prix: "150 €" },
        { nom: "Cicatrices moyennes (3–8 cm)", duree: "1h 20 min", prix: "180 €" },
      ]}
      info={
        <div className="border-l-2 border-black pl-4">
          <p className="font-(family-name:--font-inter) text-xs text-zinc-500 leading-relaxed">
            <strong className="text-black">Prérequis :</strong> cicatrices entièrement guéries, plates, non inflammatoires, âgées d&apos;au moins 12 mois.
          </p>
        </div>
      }
    />
  );
}
