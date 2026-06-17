import type { Metadata } from "next";
import PrestaPageLayout from "@/components/PrestaPageLayout";
import { FadeUp } from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Maquillage permanent sourcils à Saint-Georges-de-Didonne — Lymar Dermo Esthetic",
  description: "Maquillage permanent sourcils à Saint-Georges-de-Didonne. Effet poil à poil et effet poudré par Anastasiia Lymar. À partir de 250 €, retouche incluse.",
  alternates: { canonical: "https://www.lymardermoesthetic.fr/prestations/sourcils" },
};

const faq = [
  {
    q: "Quelle est la différence entre l'effet poil à poil et l'effet poudré ?",
    a: "L’effet poil à poil est idéal pour recréer une ligne de sourcils lorsqu’il y a peu ou pas de poils naturels. Il offre un résultat très naturel. L’effet poudré est recommandé lorsque la ligne est déjà présente. Il apporte plus de densité et un effet maquillé léger tout en restant élégant.",
  },
  {
    q: "Combien de temps dure le maquillage permanent des sourcils ?",
    a: "La tenue varie selon votre peau et votre mode de vie. En moyenne, le résultat reste visible entre 1 et 5 ans. Un entretien permet de conserver un résultat optimal.",
  },
  {
    q: "La séance est-elle douloureuse ?",
    a: "La prestation est généralement très bien tolérée. Nous travaillons dans les couches superficielles de la peau, ce qui limite l’inconfort. La sensation est souvent décrite comme un léger échauffement plutôt qu’une douleur.",
  },
  {
    q: "Puis-je venir si j'ai déjà du maquillage permanent ?",
    a: "Oui, sous réserve d’une consultation préalable. Celle-ci permet d’évaluer votre ancien maquillage permanent et de déterminer la solution la plus adaptée.",
  },
];

export default function SourcilsPage() {
  return (
    <PrestaPageLayout
      slug="sourcils"
      breadcrumb="Prestations · Sourcils"
      titre="Maquillage permanent sourcils"
      sousTitre="Effet poil à poil & effet poudré — résultats naturels et durables."
      heroImage="/images/sourcils.webp"
      heroImageAlt="Maquillage permanent sourcils — résultat naturel Lymar Dermo Esthetic"
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
