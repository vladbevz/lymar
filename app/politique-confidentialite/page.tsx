import type { Metadata } from "next";
import { FadeUp } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Lymar Dermo-Esthetic",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="pt-36 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <h1 className="font-(family-name:--font-playfair) text-4xl font-light text-black mb-12">
            Politique de confidentialité
          </h1>
          <div className="space-y-8 font-(family-name:--font-inter) text-sm text-zinc-500 leading-relaxed">
            <div>
              <h2 className="font-(family-name:--font-playfair) text-xl text-black mb-3">Données collectées</h2>
              <p>Nous collectons uniquement les données que vous nous fournissez volontairement via le formulaire de contact : prénom, nom, adresse email et message.</p>
            </div>
            <div>
              <h2 className="font-(family-name:--font-playfair) text-xl text-black mb-3">Finalité</h2>
              <p>Ces données sont utilisées exclusivement pour répondre à vos demandes d&apos;information et n&apos;ont aucune finalité commerciale.</p>
            </div>
            <div>
              <h2 className="font-(family-name:--font-playfair) text-xl text-black mb-3">Vos droits</h2>
              <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement et de portabilité de vos données personnelles. Pour exercer ces droits, contactez-nous via le formulaire de contact.</p>
            </div>
            <div>
              <h2 className="font-(family-name:--font-playfair) text-xl text-black mb-3">Cookies</h2>
              <p>Ce site n&apos;utilise pas de cookies de suivi ou de ciblage publicitaire.</p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
