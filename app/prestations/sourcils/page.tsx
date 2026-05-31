import type { Metadata } from "next";
import PrestaPageLayout from "@/components/PrestaPageLayout";
import { FadeUp } from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Maquillage permanent sourcils à Saint-Georges-de-Didonne — Lymar Dermo-Esthetic",
  description: "Maquillage permanent sourcils à Saint-Georges-de-Didonne. Effet poil à poil et effet poudré par Anastasiia Lymar. À partir de 250 €, retouche incluse.",
  alternates: { canonical: "https://lymar-dermo-esthetic.fr/prestations/sourcils" },
};

const faq = [
  {
    q: "Quelle est la différence entre l'effet poil à poil et l'effet poudré ?",
    a: "L'effet poil à poil reproduit des poils individuels à l'aide d'une lame fine pour un rendu très naturel et aérien. L'effet poudré crée un dégradé vaporeux semblable à un sourcil maquillé. Les deux techniques peuvent être combinées.",
  },
  {
    q: "Combien de temps dure le maquillage permanent des sourcils ?",
    a: "En moyenne 1 à 3 ans selon le type de peau, le mode de vie et l'exposition au soleil. Une retouche est recommandée tous les 6 à 12 mois.",
  },
  {
    q: "La séance est-elle douloureuse ?",
    a: "Un gel anesthésiant est appliqué avant la séance pour minimiser l'inconfort. La grande majorité des clientes décrivent la sensation comme légère.",
  },
  {
    q: "Puis-je venir si j'ai déjà du maquillage permanent ?",
    a: "Oui, une consultation préalable permet d'évaluer l'état du pigment existant et de définir la meilleure approche (correction, densification ou repigmentation).",
  },
];

export default function SourcilsPage() {
  return (
    <PrestaPageLayout
      slug="sourcils"
      breadcrumb="Prestations · Sourcils"
      titre="Maquillage permanent sourcils"
      sousTitre="Effet poil à poil & effet poudré à Saint-Georges-de-Didonne — résultats naturels et durables."
      heroImage="/images/sourcils.webp"
      heroImageAlt="Maquillage permanent sourcils — résultat naturel Lymar Dermo-Esthetic"
      heroImageFit="contain"
      intro="Le maquillage permanent des sourcils permet de rééquilibrer les volumes, corriger les asymétries et redonner du caractère au regard sans effet figé. Le poil à poil imite avec précision l'implantation naturelle du sourcil pour un résultat aérien et ultra réaliste. Le sourcil poudré apporte une ligne plus présente et veloutée, avec un dégradé délicat inspiré de l'effet d'un crayon ou d'une poudre appliquée avec légèreté. Chaque création est pensée pour s'intégrer naturellement aux traits du visage et révéler l'expression du regard."
      services={[
        { nom: "Effet poil à poil + 1ère retouche", duree: "1h 40 min", prix: "250 €" },
        { nom: "Effet poudré + 1ère retouche", duree: "1h 40 min", prix: "250 €" },
        { nom: "Retouche sourcils (6–7 mois)", duree: "1h", prix: "120–150 €" },
        { nom: "Retouche sourcils (1 an)", duree: "1h", prix: "150–180 €" },
        { nom: "Consultation maquillage permanent", duree: "30 min", prix: "20 €", note: "Déduits si prestation confirmée" },
      ]}
    >
      {/* FAQ */}
      <section className="py-8 lg:py-16 bg-warm border-t border-zinc-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <h2 className="font-logo text-4xl font-semibold text-black mb-8">
              Questions fréquentes
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Accordion multiple={false} className="divide-y divide-zinc-100">
              {faq.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-none">
                  <AccordionTrigger className="font-(family-name:--font-inter) text-sm text-black hover:text-zinc-500 hover:no-underline py-5 text-left">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-(family-name:--font-inter) text-sm text-zinc-500 leading-relaxed pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeUp>
        </div>
      </section>
    </PrestaPageLayout>
  );
}
