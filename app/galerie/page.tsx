"use client";

import { useState } from "react";
import { FadeUp } from "@/components/AnimatedSection";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";

type Categorie = "tous" | "sourcils" | "levres" | "yeux" | "corrections";

const filtres: { label: string; value: Categorie }[] = [
  { label: "Tous", value: "tous" },
  { label: "Sourcils", value: "sourcils" },
  { label: "Lèvres", value: "levres" },
  { label: "Yeux", value: "yeux" },
  { label: "Corrections", value: "corrections" },
];

const photos = [
  { src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80&fit=crop", alt: "Microblading sourcils avant/après", cat: "sourcils" as Categorie },
  { src: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&q=80&fit=crop", alt: "Candy Lips avant/après", cat: "levres" as Categorie },
  { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80&fit=crop", alt: "Microshading sourcils résultat", cat: "sourcils" as Categorie },
  { src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80&fit=crop", alt: "Lash liner résultat", cat: "yeux" as Categorie },
  { src: "https://images.unsplash.com/photo-1503236823255-94609f598e71?w=600&q=80&fit=crop", alt: "Effet aquarelle lèvres", cat: "levres" as Categorie },
  { src: "https://images.unsplash.com/photo-1487412840181-f6f0af1f5427?w=600&q=80&fit=crop&crop=faces", alt: "Portrait — résultat naturel", cat: "sourcils" as Categorie },
  { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80&fit=crop", alt: "Séance maquillage permanent", cat: "sourcils" as Categorie },
  { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80&fit=crop&crop=faces", alt: "Portrait — sourcils redessinés", cat: "yeux" as Categorie },
  { src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80&fit=crop", alt: "Maquillage permanent lèvres résultat", cat: "levres" as Categorie },
];

export default function GaleriePage() {
  const [filtre, setFiltre] = useState<Categorie>("tous");
  const [selected, setSelected] = useState<(typeof photos)[0] | null>(null);

  const filtered = filtre === "tous" ? photos : photos.filter((p) => p.cat === filtre);

  return (
    <>
      {/* Hero — stack on mobile, 2-col on desktop */}
      <section className="relative mt-16 bg-white border-b border-zinc-100 overflow-hidden lg:h-[calc(100svh-64px)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full lg:h-full lg:flex lg:items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 lg:items-center w-full">

            {/* Text */}
            <div className="pt-14 pb-8 lg:py-0">
              <FadeUp>
                <p className="text-xs tracking-[0.25em] uppercase font-(family-name:--font-inter) text-zinc-400 mb-4">
                  Galerie
                </p>
                <h1 className="font-(family-name:--font-playfair) text-[2.6rem] sm:text-5xl lg:text-[4.5rem] font-semibold text-black leading-[1.05] mb-5">
                  Avant / Après
                </h1>
                <p className="font-(family-name:--font-inter) text-sm text-zinc-500 leading-relaxed max-w-sm mb-6">
                  Résultats réels — sourcils, lèvres, yeux, corrections. Chaque transformation révèle une beauté unique.
                </p>
                <p className="font-(family-name:--font-inter) text-xs tracking-[0.2em] uppercase text-zinc-400">
                  {photos.length} réalisations · Filtrable par catégorie
                </p>
              </FadeUp>
            </div>

            {/* Image — h-64 on mobile, 2×2 mosaic on desktop */}
            <div className="relative h-64 lg:h-[calc(100svh-64px-80px)]">
              {/* Mobile: single image */}
              <div className="lg:hidden relative w-full h-full overflow-hidden bg-zinc-100">
                <Image
                  src={photos[0].src}
                  alt={photos[0].alt}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              {/* Desktop: 2×2 grid */}
              <div className="hidden lg:grid grid-cols-2 gap-2 w-full h-full">
                {photos.slice(0, 4).map((photo) => (
                  <div key={photo.src} className="relative overflow-hidden bg-zinc-100">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-8 bg-white sticky top-16 z-10 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4">
            {filtres.map((f) => (
              <button
                key={f.value}
                onClick={() => setFiltre(f.value)}
                className={`text-xs tracking-widest uppercase font-(family-name:--font-inter) pb-1 transition-all ${
                  filtre === f.value
                    ? "text-black border-b border-black"
                    : "text-zinc-500 hover:text-black"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((photo) => (
              <button
                key={photo.src}
                onClick={() => setSelected(photo)}
                className="block w-full overflow-hidden group relative"
              >
                <div className="relative w-full aspect-square bg-zinc-50">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center font-(family-name:--font-inter) text-sm text-zinc-500 py-20">
              Photos à venir
            </p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-3xl bg-white border border-zinc-200 p-0">
          {selected && (
            <div className="relative aspect-square w-full">
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
