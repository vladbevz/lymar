import type { Metadata } from "next";
import PrestaPageLayout from "@/components/PrestaPageLayout";

export const metadata: Metadata = {
  title: "Reconstruction aréole 3D post-mastectomie · Lymar Dermo-Esthetic",
  description: "Reconstruction aréole 3D après mastectomie à Saint-Georges-de-Didonne. Technique spécialisée par Anastasiia Lymar.",
};

export default function ReconstructionAreolesPage() {
  return (
    <PrestaPageLayout
      breadcrumb="Prestations · Reconstruction aréole"
      titre="Reconstruction aréole 3D"
      sousTitre="Technique spécialisée pour la reconstruction aréolaire post-mastectomie."
      heroImage="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&q=85&fit=crop"
      heroImageAlt="Reconstruction aréole 3D — post-mastectomie"
      intro="La reconstruction aréolaire par dermopigmentation est une technique médicale esthétique qui recrée l'apparence de l'aréole et du mamelon après une mastectomie. Elle peut également inclure le camouflage de cicatrices blanches. Une consultation préalable est obligatoire."
      services={[
        { nom: "Consultation aréole 3D", duree: "30 min", prix: "20 €", note: "Remboursée si traitement réservé" },
        { nom: "Aréole unique — création complète", duree: "2h", prix: "350 €" },
        { nom: "Aréole unique + camouflage cicatrice blanche", duree: "2h", prix: "450 €" },
        { nom: "Les deux aréoles — création complète", duree: "2h 40 min", prix: "500 €" },
        { nom: "Les deux aréoles + camouflage cicatrice blanche", duree: "3h", prix: "650 €" },
      ]}
      info={
        <div className="border-l-2 border-black pl-4">
          <p className="font-(family-name:--font-inter) text-xs text-zinc-500 leading-relaxed">
            <strong className="text-black">Note :</strong> cette prestation est réalisée dans un cadre bienveillant et confidentiel. La consultation préalable est un moment d&apos;échange pour définir le projet ensemble.
          </p>
        </div>
      }
    />
  );
}
