import type { Metadata } from "next";
import { FadeUp } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Lymar Dermo-Esthetic",
  robots: { index: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="pt-36 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <h1 className="font-logo text-4xl font-light text-black mb-4">
            Politique de confidentialité
          </h1>
          <p className="font-(family-name:--font-inter) text-xs text-zinc-400 mb-12">
            Dernière mise à jour : juin 2025
          </p>
          <div className="space-y-10 font-(family-name:--font-inter) text-sm text-zinc-500 leading-relaxed">

            <div>
              <h2 className="font-logo text-xl text-black mb-4">Responsable du traitement</h2>
              <p>
                LYMAR ANASTASIIA — Entrepreneur individuel<br />
                60 Avenue de Pontaillac, 17200 Royan<br />
                SIRET : 902 956 366 00014<br />
                Email :{" "}
                <a href="mailto:contact@lymar-dermo-esthetic.fr" className="underline hover:text-black transition-colors">
                  contact@lymar-dermo-esthetic.fr
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-logo text-xl text-black mb-4">Données collectées</h2>
              <p>
                Ce site collecte uniquement les données que vous nous communiquez volontairement via le formulaire de contact :
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-zinc-500">
                <li>Prénom et nom</li>
                <li>Adresse email</li>
                <li>Message libre</li>
              </ul>
              <p className="mt-3">
                Aucune autre donnée n&apos;est collectée à votre insu. Ce site ne recourt à aucun outil d&apos;analyse statistique (Google Analytics, etc.) ni à aucun pixel de suivi publicitaire.
              </p>
            </div>

            <div>
              <h2 className="font-logo text-xl text-black mb-4">Finalité du traitement</h2>
              <p>
                Les données transmises via le formulaire de contact sont utilisées exclusivement pour répondre à votre demande d&apos;information ou de prise de rendez-vous. Elles ne sont pas utilisées à des fins commerciales, de prospection ou de profilage.
              </p>
            </div>

            <div>
              <h2 className="font-logo text-xl text-black mb-4">Base légale</h2>
              <p>
                Le traitement est fondé sur votre consentement (article 6.1.a du RGPD), exprimé par l&apos;envoi volontaire du formulaire de contact.
              </p>
            </div>

            <div>
              <h2 className="font-logo text-xl text-black mb-4">Durée de conservation</h2>
              <p>
                Vos données sont conservées le temps nécessaire au traitement de votre demande, et au maximum 3 ans à compter du dernier contact, conformément aux recommandations de la CNIL.
              </p>
            </div>

            <div>
              <h2 className="font-logo text-xl text-black mb-4">Destinataires des données</h2>
              <p>
                Vos données ne sont jamais vendues, cédées ou transmises à des tiers à des fins commerciales. Elles peuvent être transmises à des prestataires techniques strictement nécessaires au fonctionnement du service (hébergeur Vercel), dans le respect du RGPD.
              </p>
            </div>

            <div>
              <h2 className="font-logo text-xl text-black mb-4">Cookies</h2>
              <p>
                Ce site n&apos;utilise aucun cookie de suivi, de publicité ou d&apos;analyse. Aucune donnée de navigation n&apos;est collectée à des fins de traçage.
              </p>
              <p className="mt-3">
                L&apos;hébergeur Vercel peut collecter des données techniques de journalisation (adresse IP, date et heure de connexion) à des fins de sécurité et de performance, conformément à sa propre{" "}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">
                  politique de confidentialité
                </a>.
              </p>
            </div>

            <div>
              <h2 className="font-logo text-xl text-black mb-4">Vos droits</h2>
              <p>
                Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants sur vos données personnelles :
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-zinc-500">
                <li><strong className="text-black">Droit d&apos;accès</strong> : obtenir une copie de vos données</li>
                <li><strong className="text-black">Droit de rectification</strong> : corriger des données inexactes</li>
                <li><strong className="text-black">Droit à l&apos;effacement</strong> : demander la suppression de vos données</li>
                <li><strong className="text-black">Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
                <li><strong className="text-black">Droit d&apos;opposition</strong> : vous opposer à un traitement</li>
                <li><strong className="text-black">Droit de retrait du consentement</strong> : à tout moment, sans effet rétroactif</li>
              </ul>
              <p className="mt-3">
                Pour exercer ces droits, contactez-nous à :{" "}
                <a href="mailto:contact@lymar-dermo-esthetic.fr" className="underline hover:text-black transition-colors">
                  contact@lymar-dermo-esthetic.fr
                </a>
              </p>
              <p className="mt-3">
                En cas de réclamation non résolue, vous pouvez saisir la{" "}
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">
                  CNIL
                </a>{" "}
                (Commission Nationale de l&apos;Informatique et des Libertés).
              </p>
            </div>

            <div>
              <h2 className="font-logo text-xl text-black mb-4">Sécurité</h2>
              <p>
                Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou divulgation. Ce site est servi exclusivement en HTTPS.
              </p>
            </div>

          </div>
        </FadeUp>
      </div>
    </section>
  );
}
