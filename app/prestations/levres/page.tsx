import type { Metadata } from "next";
import PrestaPageLayout from "@/components/PrestaPageLayout";

export const metadata: Metadata = {
  title: "Maquillage permanent lèvres — Candy Lips & Aquarelle · Lymar Dermo-Esthetic",
  description: "Maquillage permanent des lèvres à Saint-Georges-de-Didonne. Candy Lips dégradé et effet aquarelle. 300 € retouche incluse. Cabinet Anastasiia Lymar.",
  alternates: { canonical: "https://lymar-dermo-esthetic.fr/prestations/levres" },
};

export default function LevresPage() {
  return (
    <PrestaPageLayout
      slug="levres"
      breadcrumb="Prestations · Lèvres"
      titre="Maquillage permanent lèvres"
      sousTitre="Candy Lips dégradé & effet aquarelle — couleur, volume et définition en toute délicatesse."
      heroImage="/images/levres.webp"
      heroImageAlt="Maquillage permanent lèvres — Lymar Dermo-Esthetic"
      intro="Redonnez éclat, définition et harmonie à vos lèvres grâce au maquillage permanent. La technique « Candy Lips » offre un effet dégradé plus sophistiqué, avec des contours subtilement redessinés et un rendu légèrement plus maquillé pour apporter volume et effet 3D. L'effet « Aquarelle », quant à lui, mise sur la transparence et la douceur avec un résultat plus naturel, fondu et lumineux. Chaque prestation est entièrement personnalisée pour s'adapter parfaitement à votre visage et à l'intensité souhaitée."
      services={[
        { nom: "Lèvres dégradé (Candy Lips) + 1ère retouche", duree: "2h", prix: "300 €" },
        { nom: "Lèvres effet aquarelle + 1ère retouche", duree: "2h", prix: "300 €" },
        { nom: "Retouche lèvres (6–7 mois)", duree: "1h 30 min", prix: "120–150 €" },
        { nom: "Retouche lèvres (1 an)", duree: "1h 30 min", prix: "150–180 €" },
      ]}
      info={
        <div className="border-l-2 border-black pl-4">
          <p className="font-(family-name:--font-inter) text-xs text-zinc-500 leading-relaxed">
            <strong className="text-black">Herpès labial :</strong> si vous êtes sujette aux boutons de fièvre, un traitement antiviral préventif est recommandé avant la séance. Consultez votre médecin traitant.
          </p>
        </div>
      }
    />
  );
}
