import { FadeUp } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ReactNode } from "react";

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
}

const PLANITY = "https://www.planity.com/lymar-dermo-esthetic-17110-saint-georges-de-didonne";
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
}: Props) {
  return (
    <>
      {/* Hero — stack on mobile, 2-col on desktop */}
      <section className="relative mt-16 bg-white border-b border-zinc-100 overflow-hidden lg:h-[calc(100svh-64px)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full lg:h-full lg:flex lg:items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 lg:items-center w-full">

            {/* Text */}
            <div className="pt-14 pb-8 lg:py-0">
              <FadeUp>
                <p className="text-xs tracking-[0.25em] uppercase font-(family-name:--font-glacial) text-zinc-400 mb-4">
                  {breadcrumb}
                </p>
                <h1 className="font-(family-name:--font-playfair) text-[2.6rem] sm:text-5xl lg:text-[4.5rem] font-semibold text-black leading-[1.05] max-w-lg mb-5">
                  {titre}
                </h1>
                {sousTitre && (
                  <p className="font-(family-name:--font-inter) text-sm text-zinc-500 leading-relaxed max-w-sm mb-6">
                    {sousTitre}
                  </p>
                )}
                <p className="font-(family-name:--font-glacial) text-xs tracking-[0.2em] uppercase text-zinc-400">
                  À partir de {services[0]?.prix ?? "—"} · {services[0]?.duree ?? ""}
                </p>
              </FadeUp>
            </div>

            {/* Image — h-64 on mobile, fills column on desktop */}
            <div className="relative h-64 lg:h-[calc(100svh-64px-80px)]">
              <div className="relative w-full h-full overflow-hidden bg-zinc-100">
                <Image
                  src={heroImage}
                  alt={heroImageAlt}
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + Services */}
      <section className="py-20 bg-white">
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
                  <div key={s.nom} className="py-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="font-(family-name:--font-inter) text-sm font-medium text-black">{s.nom}</p>
                      {s.note && <p className="font-(family-name:--font-inter) text-xs text-zinc-400 mt-0.5">{s.note}</p>}
                      <p className="font-(family-name:--font-inter) text-xs text-zinc-400 mt-0.5">{s.duree}</p>
                    </div>
                    <p className="font-(family-name:--font-playfair) text-lg font-bold text-black whitespace-nowrap shrink-0">
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
      <section className="py-20 bg-zinc-50 border-t border-zinc-100 text-center">
        <FadeUp>
          <Button
            asChild
            className="bg-black text-white hover:bg-zinc-800 rounded-none px-12 py-4 h-auto tracking-widest uppercase text-xs font-(family-name:--font-glacial)"
          >
            <a href={PLANITY} target="_blank" rel="noopener noreferrer">
              Réserver sur Planity
            </a>
          </Button>
          <p className="mt-4 font-(family-name:--font-inter) text-xs text-zinc-400">
            Paiement : chèque · espèces · Wero
          </p>
        </FadeUp>
      </section>
    </>
  );
}
