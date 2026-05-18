import type { Metadata } from "next";
import PrestaPageLayout from "@/components/PrestaPageLayout";
import { FadeUp } from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Maquillage permanent sourcils à Saint-Georges-de-Didonne — Lymar Dermo-Esthetic",
  description: "Microblading et microshading à Saint-Georges-de-Didonne. Sourcils redessinés, naturels et durables par Anastasiia Lymar. À partir de 250 €, retouche incluse.",
};

const faq = [
  {
    q: "Quelle est la différence entre microblading et microshading ?",
    a: "Le microblading (effet poil à poil) reproduit des poils individuels à l'aide d'une lame fine pour un rendu très naturel. Le microshading (effet poudré) crée un dégradé vaporeux semblable à un sourcil maquillé. Les deux techniques peuvent être combinées.",
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
      breadcrumb="Prestations · Sourcils"
      titre="Maquillage permanent sourcils"
      sousTitre="Microblading & microshading à Saint-Georges-de-Didonne — résultats naturels et durables."
      heroImage="/images/sourcils.webp"
      heroImageAlt="Microblading sourcils — résultat naturel Lymar Dermo-Esthetic"
      heroImageFit="contain"
      intro="Technique poil à poil ou effet poudré — chaque paire de sourcils est redessinée selon la morphologie du visage, les poils naturels et les souhaits de la cliente. La 1ère retouche est incluse dans le tarif."
      services={[
        { nom: "Effet poil à poil (microblading) + 1ère retouche", duree: "1h 40 min", prix: "250 €" },
        { nom: "Effet poudré (microshading) + 1ère retouche", duree: "1h 40 min", prix: "250 €" },
        { nom: "Retouche sourcils (6–7 mois)", duree: "1h", prix: "120–150 €" },
        { nom: "Retouche sourcils (1 an)", duree: "1h", prix: "150–180 €" },
        { nom: "Consultation maquillage permanent", duree: "30 min", prix: "20 €", note: "Déduits si prestation confirmée" },
      ]}
    >
      {/* FAQ */}
      <section className="py-8 lg:py-16 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <h2 className="font-(family-name:--font-playfair) text-3xl font-semibold text-black mb-8">
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
