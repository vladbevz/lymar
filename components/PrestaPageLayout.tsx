import { FadeUp } from "@/components/AnimatedSection";
import { JsonLd } from "@/components/JsonLd";
import BookingButtons from "@/components/BookingButtons";
import Image from "next/image";
import { ReactNode } from "react";
import { SITE_URL, SITE_NAME } from "@/lib/site";

interface Service {
  nom: string;
  duree: string;
  prix: string;
  note?: string;
}

interface Props {
  breadcrumb: string;
  titre: string;
  sousTitre?: string;
  intro: string;
  services: Service[];
  info?: ReactNode;
  children?: ReactNode;
  heroImage?: string;
  heroImageAlt?: string;
  heroImageFit?: "cover" | "contain";
  heroImagePosition?: string;
  slug?: string;
}

const DEFAULT_IMG = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=85&fit=crop";

export default function PrestaPageLayout({
  breadcrumb,
  titre,
  sousTitre,
  intro,
  services,
  info,
  children,
  heroImage = DEFAULT_IMG,
  heroImageAlt = "Maquillage permanent — Lymar Dermo-Esthetic",
  heroImageFit = "cover",
  heroImagePosition = "object-bottom",
  slug,
}: Props) {
  const pageName = breadcrumb.split("·").pop()?.trim() ?? titre;

  const serviceSchema = slug
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: titre,
        description: intro,
        url: `${SITE_URL}/prestations/${slug}`,
        provider: {
          "@type": "BeautySalon",
          "@id": `${SITE_URL}/#business`,
          name: SITE_NAME,
          url: SITE_URL,
        },
        areaServed: [
          { "@type": "City", "name": "Saint-Georges-de-Didonne" },
          { "@type": "City", "name": "Beaune" },
        ],
        offers: services.map((s) => ({
          "@type": "Offer",
          name: s.nom,
          description: s.duree,
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: s.prix,
          },
        })),
      }
    : null;

  const breadcrumbSchema = slug
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Prestations", item: `${SITE_URL}/prestations` },
          { "@type": "ListItem", position: 3, name: pageName, item: `${SITE_URL}/prestations/${slug}` },
        ],
      }
    : null;

  return (
    <>
      {serviceSchema && <JsonLd data={serviceSchema} />}
      {breadcrumbSchema && <JsonLd data={breadcrumbSchema} />}

      {/* Hero — split like home hero */}
      <section className="relative mt-16 overflow-hidden bg-white lg:flex lg:h-[calc(100svh-64px)]">

        {/* Mobile image */}
        <div className="relative h-100 w-full lg:hidden">
          <Image
            src={heroImage}
            alt={heroImageAlt}
            fill
            priority
            className={`object-cover ${heroImagePosition}`}
          />
        </div>

        {/* Left — text */}
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 w-full lg:w-1/2 shrink-0 py-10 lg:py-14 overflow-hidden">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase font-(family-name:--font-inter) text-zinc-400 mb-4">
              {breadcrumb}
            </p>
            <h1 className="font-logo text-[2.8rem] sm:text-5xl lg:text-[4.5rem] font-light text-black leading-[1.05] max-w-lg mb-5">
              {titre}
            </h1>
            {sousTitre && (
              <p className="font-(family-name:--font-inter) text-sm text-zinc-500 leading-relaxed max-w-sm mb-6">
                {sousTitre}
              </p>
            )}
            <p className="font-(family-name:--font-inter) text-xs tracking-[0.2em] uppercase text-zinc-400">
              À partir de {services[0]?.prix ?? "—"} · {services[0]?.duree ?? ""}
            </p>
          </FadeUp>
        </div>

        {/* Right — edge-to-edge photo */}
        <div className="hidden lg:block relative flex-1">
          <Image
            src={heroImage}
            alt={heroImageAlt}
            fill
            priority
            className={`object-cover ${heroImagePosition}`}
          />
        </div>

      </section>

      {/* Intro + Services */}
      <section className="py-10 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16">
            {/* Intro */}
            <FadeUp>
              <p className="font-(family-name:--font-inter) text-base text-zinc-500 leading-relaxed">
                {intro}
              </p>
              {info && <div className="mt-6">{info}</div>}
            </FadeUp>

            {/* Tableau services */}
            <FadeUp delay={0.1}>
              <div className="divide-y divide-zinc-100">
                {services.map((s) => (
                  <div key={s.nom} className="py-5 flex items-center justify-between gap-4">
                    <div>
                      <p className="font-(family-name:--font-inter) text-sm font-medium text-black">{s.nom}</p>
                      {s.note && <p className="font-(family-name:--font-inter) text-xs text-zinc-400 mt-0.5">{s.note}</p>}
                      <p className="font-(family-name:--font-inter) text-xs text-zinc-400 mt-0.5">{s.duree}</p>
                    </div>
                    <p className="font-logo text-lg font-bold text-black whitespace-nowrap shrink-0 bg-warm px-4 py-1.5 min-w-[120px] text-center">
                      {s.prix}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Contenu optionnel */}
      {children}

      {/* CTA */}
      <section className="py-10 lg:py-20 bg-white border-t border-zinc-100 text-center">
        <FadeUp>
          <p className="font-(family-name:--font-inter) text-xs tracking-[0.25em] uppercase text-zinc-400 mb-4">
            Réserver sur Planity
          </p>
          <BookingButtons className="mx-auto" />
          <p className="mt-4 font-(family-name:--font-inter) text-xs text-zinc-400">
            Paiement : chèque · espèces · Wero
          </p>
        </FadeUp>
      </section>
    </>
  );
}
