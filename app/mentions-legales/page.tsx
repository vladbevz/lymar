import type { Metadata } from "next";
import { FadeUp } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Mentions légales — Lymar Dermo-Esthetic",
};

export default function MentionsLegalesPage() {
  return (
    <section className="pt-36 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <h1 className="font-(family-name:--font-playfair) text-4xl font-light text-black mb-12">
            Mentions légales
          </h1>
          <div className="space-y-8 font-(family-name:--font-inter) text-sm text-zinc-500 leading-relaxed">
            <div>
              <h2 className="font-(family-name:--font-playfair) text-xl text-black mb-3">Éditeur du site</h2>
              <p>Anastasiia Lymar — Lymar Dermo-Esthetic<br />
              34 Rue Henri Collignon, 17110 Saint-Georges-de-Didonne</p>
            </div>
            <div>
              <h2 className="font-(family-name:--font-playfair) text-xl text-black mb-3">Hébergement</h2>
              <p>À compléter avec les informations d&apos;hébergement.</p>
            </div>
            <div>
              <h2 className="font-(family-name:--font-playfair) text-xl text-black mb-3">Propriété intellectuelle</h2>
              <p>L&apos;ensemble du contenu de ce site (textes, images, logos) est la propriété exclusive de Lymar Dermo-Esthetic et est protégé par le droit d&apos;auteur.</p>
            </div>
            <div>
              <h2 className="font-(family-name:--font-playfair) text-xl text-black mb-3">Données personnelles</h2>
              <p>Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes et ne sont pas transmises à des tiers. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données.</p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
