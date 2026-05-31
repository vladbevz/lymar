"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { StaggerWrapper, StaggerItem, FadeUp } from "@/components/AnimatedSection";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    title: "Sourcils",
    href: "/prestations/sourcils",
    prix: "À partir de 250 €",
    image: "/images/sourcils.webp",
    imagePosition: "object-center",
  },
  {
    title: "Lèvres",
    href: "/prestations/levres",
    prix: "300 €",
    image: "/images/levres.webp",
    imagePosition: "object-center",
  },
  {
    title: "Yeux",
    href: "/prestations/yeux",
    prix: "À partir de 150 €",
    image: "/images/yeux.webp",
    imagePosition: "object-top",
  },
  {
    title: "Tricopigmentation",
    href: "/prestations/tricopigmentation",
    prix: "À partir de 350 €",
    image: "/images/tricopigmentation.webp",
    imagePosition: "object-center",
  },
  {
    title: "Taches de rousseur",
    href: "/prestations/taches-rousseur",
    prix: "À partir de 150 €",
    image: "/images/taches.webp",
    imagePosition: "object-bottom",
  },
  {
    title: "Soins cils & sourcils",
    href: "/prestations/soins-cils-sourcils",
    prix: "À partir de 10 €",
    image: "/images/soins-cils.webp",
    imagePosition: "object-center",
  },
];

function Card({ cat }: { cat: (typeof categories)[0] }) {
  return (
    <Link
      href={cat.href}
      className="group relative block w-full overflow-hidden"
      style={{ aspectRatio: "3/4" }}
    >
      {/* Photo */}
      <Image
        src={cat.image}
        alt={cat.title}
        fill
        className={`object-cover ${cat.imagePosition} transition-transform duration-700 ease-out group-hover:scale-105`}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />

      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="font-logo text-2xl text-white mb-1 leading-tight">
          {cat.title}
        </h3>
        <p className="font-(family-name:--font-inter) text-xs text-white/50 mb-4">
          {cat.prix}
        </p>
        <span className="inline-flex items-center gap-1.5 font-(family-name:--font-inter) text-xs tracking-widest uppercase text-white/70 group-hover:text-white transition-colors duration-300">
          Découvrir
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight size={11} />
          </span>
        </span>
      </div>
    </Link>
  );
}

export default function PrestationsPreview() {
  const [idx, setIdx] = useState(0);
  const dragStartX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const maxIdx = categories.length - 1;

  const prev = () => setIdx((i) => Math.max(0, i - 1));
  const next = () => setIdx((i) => Math.min(maxIdx, i + 1));

  useEffect(() => {
    if (!trackRef.current || !containerRef.current) return;
    const w = containerRef.current.offsetWidth;
    gsap.to(trackRef.current, {
      x: -(idx * w),
      duration: 0.4,
      ease: "power2.out",
    });
  }, [idx]);

  return (
    <section className="py-12 lg:py-32 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="mb-10 lg:mb-14">
            <p className="text-xs tracking-[0.25em] uppercase font-(family-name:--font-inter) text-zinc-400 mb-3">
              Prestations
            </p>
            <h2 className="font-logo text-4xl lg:text-5xl font-semibold text-black leading-tight">
              Notre expertise
            </h2>
          </div>
        </FadeUp>

        {/* Desktop grid */}
        <div className="hidden lg:block">
          <StaggerWrapper className="grid grid-cols-3 gap-3">
            {categories.map((cat) => (
              <StaggerItem key={cat.href}>
                <Card cat={cat} />
              </StaggerItem>
            ))}
          </StaggerWrapper>
        </div>

        {/* Mobile slider */}
        <div className="lg:hidden relative">
          <button
            onClick={prev}
            disabled={idx === 0}
            aria-label="Précédent"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-9 h-9 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-400 hover:text-black hover:border-zinc-400 transition-all shadow-sm disabled:opacity-20 disabled:pointer-events-none"
          >
            <ChevronLeft size={16} strokeWidth={1.5} />
          </button>

          <div
            ref={containerRef}
            className="overflow-hidden"
            onPointerDown={(e) => { dragStartX.current = e.clientX; }}
            onPointerUp={(e) => {
              const diff = e.clientX - dragStartX.current;
              if (diff < -40) next();
              else if (diff > 40) prev();
            }}
          >
            <div ref={trackRef} className="flex">
              {categories.map((cat) => (
                <div key={cat.href} className="w-full shrink-0">
                  <Card cat={cat} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            disabled={idx === maxIdx}
            aria-label="Suivant"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-9 h-9 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-400 hover:text-black hover:border-zinc-400 transition-all shadow-sm disabled:opacity-20 disabled:pointer-events-none"
          >
            <ChevronRight size={16} strokeWidth={1.5} />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {categories.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === idx ? "bg-black w-5" : "bg-zinc-300 w-1.5"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Voir toutes */}
        <FadeUp delay={0.2}>
          <div className="text-center mt-10">
            <Link
              href="/prestations"
              className="inline-flex items-center gap-2 font-(family-name:--font-inter) text-xs tracking-widest uppercase text-black border-b border-black pb-0.5 hover:opacity-50 transition-opacity"
            >
              Voir toutes les prestations <ArrowRight size={12} />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
