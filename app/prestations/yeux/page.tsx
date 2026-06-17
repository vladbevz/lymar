import type { Metadata } from "next";
import PrestaPageLayout from "@/components/PrestaPageLayout";
import { FadeUp } from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Eyeliner permanent — Liner classique, poudré & ras-de-cils · Lymar Dermo Esthetic",
  description: "Eyeliner permanent à Saint-Georges-de-Didonne. Liner classique, poudré, ras-de-cils haut ou bas — 1ère retouche incluse. Cabinet Anastasiia Lymar.",
  alternates: { canonical: "https://www.lymardermoesthetic.fr/prestations/yeux" },
};

const faq = [
  {
    q: "Quelle est la différence entre un ras de cils, un liner classique et un liner poudré ?",
    a: "Le ras de cils intensifie discrètement le regard en pigmentant la ligne des cils pour un effet très naturel. Le liner classique crée un trait plus défini, tandis que le liner poudré offre un rendu plus doux et légèrement estompé.",
  },
  {
    q: "À quoi ressemblent les yeux juste après la séance ?",
    a: "Les yeux peuvent être légèrement sensibles ou gonflés durant quelques heures. Le tracé apparaît également plus intense les premiers jours avant de s'adoucir pendant la cicatrisation.",
  },
  {
    q: "Puis-je porter des extensions de cils ?",
    a: "Oui, mais une dépose des extensions est nécessaire avant la prestation afin de permettre un travail précis et sécurisé sur la ligne des cils.",
  },
  {
    q: "Le maquillage permanent des yeux est-il adapté à tout le monde ?",
    a: "Cette prestation convient à la majorité des personnes souhaitant intensifier leur regard et gagner du temps au quotidien. Un échange préalable permet de vérifier que la technique choisie est adaptée à vos besoins.",
  },
];

export default function YeuxPage() {
  return (
    <PrestaPageLayout
      slug="yeux"
      breadcrumb="Prestations · Yeux"
      titre="Eyeliner permanent"
      sousTitre="Liner classique, poudré ou ras-de-cils — un regard intense et raffiné, défini au trait près."
      heroImage="/images/yeux.webp"
      heroImageAlt="Eyeliner permanent — regard sublimé"
      heroImagePosition="object-center"
      intro="L'eyeliner permanent redéfinit le regard de façon subtile ou affirmée selon la technique choisie. Chaque trait est dessiné avec précision pour s'adapter à la morphologie de l'œil."
      services={[
        { nom: "Ras-de-cils haut + 1ère retouche (6–9 sem.)", duree: "1h30", prix: "150 €" },
        { nom: "Ras-de-cils bas + 1ère retouche (6–9 sem.)", duree: "1h30", prix: "150 €" },
        { nom: "Liner classique + 1ère retouche (6–9 sem.)", duree: "2h", prix: "250 €" },
        { nom: "Liner poudré + 1ère retouche (6–9 sem.)", duree: "2h", prix: "280 €" },
        { nom: "Retouche yeux (6–7 mois)", duree: "1h", prix: "120–150 €" },
        { nom: "Retouche yeux (1 an)", duree: "1h", prix: "150–180 €" },
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
