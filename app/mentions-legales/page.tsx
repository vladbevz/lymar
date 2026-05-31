import type { Metadata } from "next";
import { FadeUp } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Mentions légales — Lymar Dermo-Esthetic",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <section className="pt-36 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <h1 className="font-logo text-4xl font-light text-black mb-12">
            Mentions légales
          </h1>
          <div className="space-y-10 font-(family-name:--font-inter) text-sm text-zinc-500 leading-relaxed">

            {/* Éditeur */}
            <div>
              <h2 className="font-logo text-xl text-black mb-4">Éditeur du site</h2>
              <p>
                <strong className="text-black">Raison sociale :</strong> LYMAR ANASTASIIA<br />
                <strong className="text-black">Forme juridique :</strong> Entrepreneur individuel<br />
                <strong className="text-black">Adresse du siège :</strong> 60 Avenue de Pontaillac, 17200 Royan<br />
                <strong className="text-black">Adresse du cabinet :</strong> 34 Rue Henri Collignon, 17110 Saint-Georges-de-Didonne<br />
                <strong className="text-black">SIREN :</strong> 902 956 366<br />
                <strong className="text-black">SIRET :</strong> 902 956 366 00014<br />
                <strong className="text-black">Numéro TVA intracommunautaire :</strong> FR65902956366<br />
                <strong className="text-black">Code APE/NAF :</strong> 9602B — Soins de beauté<br />
                <strong className="text-black">RCS :</strong> Saintes<br />
                <strong className="text-black">Email :</strong>{" "}
                <a href="mailto:contact@lymar-dermo-esthetic.fr" className="underline hover:text-black transition-colors">
                  contact@lymar-dermo-esthetic.fr
                </a>
              </p>
            </div>

            {/* Directeur de publication */}
            <div>
              <h2 className="font-logo text-xl text-black mb-4">Directrice de publication</h2>
              <p>Anastasiia Lymar, en qualité d&apos;entrepreneur individuel.</p>
            </div>

            {/* Hébergement */}
            <div>
              <h2 className="font-logo text-xl text-black mb-4">Hébergement</h2>
              <p>
                <strong className="text-black">Vercel Inc.</strong><br />
                340 Pine Street, Suite 1501<br />
                San Francisco, CA 94104 — États-Unis<br />
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">vercel.com</a>
              </p>
              <p className="mt-3">
                <strong className="text-black">OVH SAS</strong> (registrar de domaine)<br />
                2 Rue Kellermann, 59100 Roubaix — France<br />
                <a href="https://www.ovh.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">ovh.com</a>
              </p>
            </div>

            {/* Conception */}
            <div>
              <h2 className="font-logo text-xl text-black mb-4">Conception et développement</h2>
              <p>
                Site conçu et développé par{" "}
                <a href="https://ateliercode.fr" target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">
                  AtelierCode.fr
                </a>
              </p>
            </div>

            {/* Propriété intellectuelle */}
            <div>
              <h2 className="font-logo text-xl text-black mb-4">Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble du contenu de ce site — textes, images, logos, graphismes — est la propriété exclusive de LYMAR ANASTASIIA et est protégé par le droit d&apos;auteur français (Code de la propriété intellectuelle). Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite.
              </p>
            </div>

            {/* Responsabilité */}
            <div>
              <h2 className="font-logo text-xl text-black mb-4">Limitation de responsabilité</h2>
              <p>
                Lymar Dermo-Esthetic s&apos;efforce de maintenir les informations publiées sur ce site aussi exactes et à jour que possible, mais ne peut garantir leur exhaustivité ni leur exactitude à tout moment. Les informations relatives aux tarifs et prestations sont susceptibles d&apos;évoluer sans préavis.
              </p>
            </div>

            {/* Données personnelles */}
            <div>
              <h2 className="font-logo text-xl text-black mb-4">Données personnelles</h2>
              <p>
                La collecte et le traitement des données personnelles sont régis par notre{" "}
                <a href="/politique-confidentialite" className="underline hover:text-black transition-colors">
                  politique de confidentialité
                </a>
                , conformément au Règlement Général sur la Protection des Données (RGPD) n°2016/679 du 27 avril 2016.
              </p>
            </div>

            {/* Droit applicable */}
            <div>
              <h2 className="font-logo text-xl text-black mb-4">Droit applicable</h2>
              <p>
                Le présent site et ses mentions légales sont soumis au droit français. Tout litige relatif à l&apos;utilisation de ce site sera de la compétence exclusive des tribunaux français.
              </p>
            </div>

          </div>
        </FadeUp>
      </div>
    </section>
  );
}
