import type { Metadata } from "next";
import PrestaPageLayout from "@/components/PrestaPageLayout";

export const metadata: Metadata = {
  title: "Reconstruction aréole 3D post-mastectomie · Lymar Dermo-Esthetic",
  description: "Reconstruction aréole 3D après mastectomie à Saint-Georges-de-Didonne. Technique spécialisée par Anastasiia Lymar.",
  alternates: { canonical: "https://lymar-dermo-esthetic.fr/prestations/reconstruction-areole" },
};

export default function ReconstructionAreolesPage() {
  return (
    <PrestaPageLayout
      slug="reconstruction-areole"
      breadcrumb="Prestations · Reconstruction aréole"
      titre="Reconstruction aréole 3D"
      sousTitre="Technique spécialisée pour la reconstruction aréolaire post-mastectomie."
      heroImage="/images/areole.webp"
      heroImageAlt="Reconstruction aréole 3D — post-mastectomie"
      heroImagePosition="object-center"
      intro="La reconstruction aréolaire par dermopigmentation permet de recréer visuellement le mamelon après une mastectomie grâce à un travail de pigmentation entièrement personnalisé. Chaque réalisation est pensée avec précision afin de retrouver un résultat réaliste, harmonieux et adapté à la morphologie de chacune. Cette prestation peut également être associée au camouflage de certaines cicatrices dans une approche douce, bienveillante et confidentielle."
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
            <strong className="text-black">Note :</strong> une consultation préalable est indispensable afin d&apos;échanger ensemble sur votre projet et d&apos;évaluer les possibilités de prise en charge.
          </p>
        </div>
      }
    />
  );
}
