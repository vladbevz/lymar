import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FadeUp, StaggerWrapper, StaggerItem } from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";
import BookingButtons from "@/components/BookingButtons";

export const metadata: Metadata = {
  title: "Prestations — Maquillage Permanent & Pigmentation · Lymar Dermo-Esthetic",
  description: "Toutes les prestations de maquillage permanent : sourcils, lèvres, tricopigmentation, taches de rousseur, soins cils/sourcils, corrections. Saint-Georges-de-Didonne et Beaune.",
  alternates: { canonical: "https://lymar-dermo-esthetic.fr/prestations" },
};

const categories = [
  {
    slug: "sourcils",
    titre: "Sourcils",
    sous: "Effet poil à poil & Effet poudré",
    prix: "250 €",
    desc: "Effet poil à poil ou poudré — retouche incluse. 1h40 par séance.",
  },
  {
    slug: "levres",
    titre: "Lèvres",
    sous: "Candy Lips & Aquarelle",
    prix: "300 €",
    desc: "Dégradé ou effet aquarelle — 1ère retouche incluse. 2h par séance.",
  },
  {
    slug: "yeux",
    titre: "Yeux",
    sous: "Eyeliner permanent",
    prix: "150 €",
    desc: "Liner classique (250 €), poudré (280 €), ras-de-cils (150 €) — 1ère retouche incluse. 1h30–2h.",
  },
  {
    slug: "tricopigmentation",
    titre: "Tricopigmentation",
    sous: "Micropigmentation du cuir chevelu",
    prix: "350 €",
    desc: "1 à 3 zones, 1 à 3 séances. Densité et uniformité retrouvées.",
  },
  {
    slug: "taches-rousseur",
    titre: "Taches de rousseur",
    sous: "Semi-permanent",
    prix: "150 €",
    desc: "Effet naturel, soleil ou intense — une heure de séance.",
  },
  {
    slug: "soins-cils-sourcils",
    titre: "Soins cils & sourcils",
    sous: "Lashlift · Browlift · Teinture",
    prix: "10 €",
    desc: "Soins express non permanents pour sublimer le regard au quotidien.",
  },
  {
    slug: "pigmentation-correctrice",
    titre: "Pigmentation correctrice",
    sous: "Camouflage cicatrices",
    prix: "150 €",
    desc: "Cicatrices de blépharoplastie, lifting, petites cicatrices. Consultation incluse.",
  },
  {
    slug: "reconstruction-areole",
    titre: "Reconstruction aréole 3D",
    sous: "Post-mastectomie",
    prix: "350 €",
    desc: "Reconstruction aréolaire complète ou avec camouflage de cicatrice.",
  },
];

export default function PrestationsPage() {
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
                  Nos prestations
                </p>
                <h1 className="font-(family-name:--font-playfair) text-[2.6rem] sm:text-5xl lg:text-[4.5rem] font-semibold text-black leading-[1.05] mb-5">
                  Expertise
                  <br />
                  & précision
                </h1>
                <p className="font-(family-name:--font-inter) text-sm text-zinc-500 leading-relaxed max-w-sm mb-6">
                  Consultation personnalisée incluse (20 €, déduits si la prestation est confirmée). Sur rendez-vous uniquement — Saint-Georges-de-Didonne et Beaune.
                </p>
                <p className="font-(family-name:--font-glacial) text-xs tracking-[0.2em] uppercase text-zinc-400">
                  {categories.length} catégories de prestations
                </p>
              </FadeUp>
            </div>

            {/* Image — h-64 on mobile, fills column on desktop */}
            <div className="relative h-64 lg:h-[calc(100svh-64px-80px)]">
              <div className="relative w-full h-full overflow-hidden bg-zinc-100">
                <Image
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&q=85&fit=crop"
                  alt="Maquillage permanent — prestations Lymar Dermo-Esthetic"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grille */}
      <section className="py-0 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <StaggerWrapper className="divide-y divide-zinc-100">
            {categories.map((cat) => (
              <StaggerItem key={cat.slug}>
                <Link
                  href={`/prestations/${cat.slug}`}
                  className="group flex items-center justify-between gap-6 py-8 hover:pl-2 transition-all duration-300"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-4 mb-1">
                      <h2 className="font-(family-name:--font-playfair) text-2xl font-bold text-black group-hover:opacity-60 transition-opacity">
                        {cat.titre}
                      </h2>
                      <span className="font-(family-name:--font-inter) text-xs text-zinc-400 hidden sm:block">
                        {cat.sous}
                      </span>
                    </div>
                    <p className="font-(family-name:--font-inter) text-sm text-zinc-500 leading-relaxed max-w-lg">
                      {cat.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-6 shrink-0">
                    <span className="font-(family-name:--font-playfair) text-xl font-bold text-black hidden sm:block">
                      {cat.prix}
                    </span>
                    <ArrowRight size={18} className="text-zinc-300 group-hover:text-black group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerWrapper>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 lg:py-20 bg-zinc-50 border-t border-zinc-100 text-center">
        <FadeUp>
          <p className="font-(family-name:--font-playfair) text-3xl font-semibold text-black mb-4">
            Consultation — 20 €
          </p>
          <p className="font-(family-name:--font-inter) text-sm text-zinc-500 mb-8">
            30 minutes · déduits de votre prestation si vous confirmez un rendez-vous
          </p>
          <BookingButtons className="mx-auto" />
        </FadeUp>
      </section>
    </>
  );
}
