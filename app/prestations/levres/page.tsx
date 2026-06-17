import type { Metadata } from "next";
import PrestaPageLayout from "@/components/PrestaPageLayout";
import { FadeUp } from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Maquillage permanent lèvres — Candy Lips & Aquarelle · Lymar Dermo Esthetic",
  description: "Maquillage permanent des lèvres à Saint-Georges-de-Didonne. Candy Lips dégradé et effet aquarelle. 300 € retouche incluse. Cabinet Anastasiia Lymar.",
  alternates: { canonical: "https://www.lymardermoesthetic.fr/prestations/levres" },
};

const faq = [
  {
    q: "Le maquillage permanent des lèvres est-il douloureux ?",
    a: "La prestation est généralement bien tolérée. La sensibilité varie d'une personne à l'autre, mais la plupart des clientes décrivent une gêne légère et tout à fait supportable.",
  },
  {
    q: "Combien de temps dure le maquillage permanent des lèvres ?",
    a: "La tenue varie selon votre peau, votre mode de vie et votre routine beauté. En moyenne, le résultat reste visible entre 2 et 5 ans avec un éclaircissement progressif au fil du temps.",
  },
  {
    q: "À quoi ressemblent les lèvres juste après la séance ?",
    a: "La couleur apparaît plus intense les premiers jours et les lèvres peuvent être légèrement gonflées. Après la cicatrisation, la teinte s'adoucit naturellement pour révéler le résultat final.",
  },
  {
    q: "Puis-je faire un maquillage permanent des lèvres si j'ai déjà eu des injections d'acide hyaluronique ?",
    a: "Oui, tout à fait. Le maquillage permanent est compatible et complémentaire aux injections d'acide hyaluronique. Il est simplement recommandé de respecter un délai d'environ 10 jours avant ou après les injections afin de garantir une cicatrisation optimale et un résultat harmonieux.",
  },
];

export default function LevresPage() {
  return (
    <PrestaPageLayout
      slug="levres"
      breadcrumb="Prestations · Lèvres"
      titre="Maquillage permanent lèvres"
      sousTitre="Candy Lips dégradé & effet aquarelle — couleur, volume et définition en toute délicatesse."
      heroImage="/images/levres.webp"
      heroImageAlt="Maquillage permanent lèvres — Lymar Dermo Esthetic"
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
