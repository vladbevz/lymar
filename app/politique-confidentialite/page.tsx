import type { Metadata } from "next";
import { FadeUp } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Lymar Dermo Esthetic",
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
            Dernière mise à jour : juin 2026
          </p>
          <div className="space-y-10 font-(family-name:--font-inter) text-sm text-zinc-500 leading-relaxed">

            <div>
              <h2 className="font-logo text-xl text-black mb-4">Responsable du traitement</h2>
              <p>
                LYMAR ANASTASIIA — Entrepreneur individuel<br />
                60 Avenue de Pontaillac, 17200 Royan<br />
                SIRET : 902 956 366 00014<br />
                Email :{" "}
                <a href="mailto:anastasiia.lymar@gmail.com" className="underline hover:text-black transition-colors">
                  anastasiia.lymar@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-logo text-xl text-black mb-4">Données collectées</h2>
              <p>
                Ce site collecte deux catégories de données :
              </p>
              <p className="mt-3 font-medium text-black">1. Données transmises volontairement (formulaire de contact) :</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-500">
                <li>Prénom et nom</li>
                <li>Adresse email</li>
                <li>Message libre</li>
              </ul>
              <p className="mt-3 font-medium text-black">2. Données de navigation (analytics) :</p>
              <p className="mt-2">
                Ce site utilise <strong className="text-black">Google Analytics</strong> (Google LLC) et <strong className="text-black">Microsoft Clarity</strong> (Microsoft Corp.) pour mesurer l&apos;audience et améliorer l&apos;expérience utilisateur. Ces outils collectent des données anonymisées : pages visitées, durée de session, pays d&apos;origine, type d&apos;appareil. Aucune donnée personnelle identifiable n&apos;est transmise à ces services.
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
                Le traitement des données du formulaire de contact est fondé sur votre consentement (article 6.1.a du RGPD), exprimé par l&apos;envoi volontaire du formulaire.
              </p>
              <p className="mt-3">
                L&apos;utilisation des outils d&apos;analyse (Google Analytics, Microsoft Clarity) est fondée sur notre intérêt légitime à comprendre l&apos;utilisation du site (article 6.1.f du RGPD), les données étant anonymisées et non utilisées à des fins publicitaires.
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
                Vos données ne sont jamais vendues ni cédées à des fins commerciales. Elles peuvent être partagées avec les prestataires techniques suivants, dans le strict cadre de leurs missions :
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-zinc-500">
                <li><strong className="text-black">Vercel</strong> — hébergement du site</li>
                <li><strong className="text-black">Resend</strong> — acheminement des messages du formulaire de contact</li>
                <li><strong className="text-black">Google LLC</strong> — mesure d&apos;audience (Google Analytics)</li>
                <li><strong className="text-black">Microsoft Corp.</strong> — analyse comportementale anonymisée (Microsoft Clarity)</li>
              </ul>
              <p className="mt-3">
                Ces prestataires sont soumis à leurs propres politiques de confidentialité et, pour Google et Microsoft, au Privacy Shield ou mécanismes équivalents assurant un niveau de protection adéquat.
              </p>
            </div>

            <div>
              <h2 className="font-logo text-xl text-black mb-4">Cookies</h2>
              <p>
                Ce site utilise des cookies techniques et analytiques :
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-zinc-500">
                <li>
                  <strong className="text-black">Cookies de préférence</strong> — mémorisation de votre consentement au bandeau cookie (stockage local, non transmis à des tiers).
                </li>
                <li>
                  <strong className="text-black">Google Analytics</strong> — cookies <code className="text-xs bg-zinc-100 px-1">_ga</code>, <code className="text-xs bg-zinc-100 px-1">_ga_*</code> déposés par Google LLC pour mesurer l&apos;audience. Durée : 13 mois.{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">Politique Google</a>.
                </li>
                <li>
                  <strong className="text-black">Microsoft Clarity</strong> — cookies <code className="text-xs bg-zinc-100 px-1">_clck</code>, <code className="text-xs bg-zinc-100 px-1">_clsk</code> déposés par Microsoft Corp. pour l&apos;analyse du comportement de navigation (heatmaps, sessions). Durée : 1 an.{" "}
                  <a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">Politique Microsoft</a>.
                </li>
              </ul>
              <p className="mt-3">
                L&apos;hébergeur Vercel peut également collecter des données techniques de journalisation (adresse IP, horodatage) à des fins de sécurité, conformément à sa{" "}
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
                <a href="mailto:anastasiia.lymar@gmail.com" className="underline hover:text-black transition-colors">
                  anastasiia.lymar@gmail.com
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
