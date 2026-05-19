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
      intro="Redéfinissez vos lèvres avec les techniques Candy Lips (dégradé du contour vers le centre, effet gourmand) ou aquarelle (fondu vaporeux ultra-naturel). La 1ère retouche est incluse. Si vous êtes sujette aux herpès labiaux, un traitement antiviral préventif est recommandé avant la séance."
      services={[
        { nom: "Lèvres dégradé (Candy Lips) + 1ère retouche", duree: "2h", prix: "300 €" },
        { nom: "Lèvres effet aquarelle + 1ère retouche", duree: "2h", prix: "300 €" },
        { nom: "Retouche lèvres (6–7 mois)", duree: "1h 30 min", prix: "120–150 €" },
        { nom: "Retouche lèvres (1 an)", duree: "1h 30 min", prix: "150–180 €" },
      ]}
      info={
        <div className="border-l-2 border-black pl-4">
          <p className="font-(family-name:--font-inter) text-xs text-zinc-500 leading-relaxed">
            <strong className="text-black">Herpès :</strong> si vous êtes sujette aux poussées d&apos;herpès labiaux, consultez votre médecin pour un traitement antiviral préventif avant la séance.
          </p>
        </div>
      }
    />
  );
}
