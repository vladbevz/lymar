"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import { FadeUp } from "@/components/AnimatedSection";

const avis = [
  {
    nom: "Dom W.",
    texte: "Anastasiia est une perle de douceur, de gentillesse. Elle a réussi à rattraper un maquillage mal fait à Paris il y a quelques années et dont j'étais complexée. Très professionnelle jusqu'à la pointe de son aiguille. Patiente et très pro. Cabinet très propre et agréable. Merci encore pour votre merveilleux travail.",
  },
  {
    nom: "H C",
    texte: "J'ai longtemps hésité et j'ai pris le temps de rechercher pendant des mois, et c'est en voyant les photos du travail d'Anastasiia que j'ai été convaincue. Le résultat est encore mieux que ce que j'imaginais et, presque un an après, j'en suis toujours aussi ravie. Un vrai bonheur de ne plus devoir maquiller mes sourcils au quotidien. Je reviendrai sans hésiter quand ce sera nécessaire, et sûrement pour d'autres prestations !",
  },
  {
    nom: "Morgane Grasset Deschamps",
    texte: "Plus que ravie du résultat de mon eye liner ombré. Anastasia est extrêmement professionnelle, douce et de bon conseils. Hygiène irréprochable, et praticienne remarquable. Merci encore ♡",
  },
  {
    nom: "Isabelle Martin",
    texte: "Ne pouvant plus me maquiller, j'ai pris conseil auprès d'Anastasia, et j'ai sauté le pas du maquillage permanent car elle m'a mise tout de suite en confiance. Et le résultat est vraiment à la hauteur de mes attentes. Je la remercie pour son professionnalisme, sa douceur et sa gentillesse. Je recommande vivement.",
  },
  {
    nom: "Louise F.",
    texte: "Anastasia est une perle, tant pour la qualité de son travail que pour sa douceur et sa gentillesse. Institut magnifique, parfaitement propre et soigné. Je me suis sentie écoutée et en confiance dès nos premiers échanges. Un résultat très naturel comme je le souhaitais. Merci Anastasia !",
  },
  {
    nom: "Virginie Basset",
    texte: "Anastasiia est très professionnelle. Un résultat de qualité. Cadre propre et soigné. Allez-y les yeux fermés ! Je recommande.",
  },
];

export default function AvisSection() {
  const [idx, setIdx] = useState(0);
  const [perView, setPerView] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);

  useEffect(() => {
    const calc = () => {
      if (!containerRef.current) return;
      const pv = window.innerWidth >= 1024 ? 3 : 1;
      setPerView(pv);
      setCardWidth(containerRef.current.offsetWidth / pv);
    };
    calc();
    const ro = new ResizeObserver(calc);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!trackRef.current || !cardWidth) return;
    gsap.to(trackRef.current, {
      x: -(idx * cardWidth),
      duration: 0.45,
      ease: "power2.out",
    });
  }, [idx, cardWidth]);

  const maxIdx = Math.max(0, avis.length - perView);
  const prev = useCallback(() => setIdx((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIdx((i) => Math.min(maxIdx, i + 1)), [maxIdx]);

  return (
    <section className="py-12 lg:py-32 bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <FadeUp>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase font-(family-name:--font-inter) text-zinc-400 mb-3">
                Avis clients
              </p>
              <h2 className="font-logo text-4xl lg:text-5xl font-semibold text-black leading-tight">
                Elles nous font confiance
              </h2>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="font-logo text-5xl font-light text-black">5.0</span>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-black text-sm">★</span>
                  ))}
                </div>
                <p className="font-(family-name:--font-inter) text-xs text-zinc-500">200+ avis Google & Planity</p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Slider */}
        <div className="relative">

          {/* Prev */}
          <button
            onClick={prev}
            disabled={idx === 0}
            aria-label="Avis précédent"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-10 w-10 h-10 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-400 hover:text-black hover:border-zinc-400 transition-all duration-200 disabled:opacity-20 disabled:pointer-events-none shadow-sm"
          >
            <ChevronLeft size={17} strokeWidth={1.5} />
          </button>

          {/* Track */}
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
              {avis.map((a) => (
                <div
                  key={a.nom}
                  className="shrink-0 px-2"
                  style={{ width: cardWidth || `${100 / perView}%` }}
                >
                  <div className="bg-white border border-zinc-100 p-7 h-full select-none">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
                        <User size={15} strokeWidth={1.5} className="text-zinc-400" />
                      </div>
                      <div>
                        <p className="font-(family-name:--font-inter) text-xs tracking-widest uppercase text-black leading-none mb-1">
                          {a.nom}
                        </p>
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i} className="text-black text-[10px]">★</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="font-(family-name:--font-inter) text-sm text-zinc-600 leading-relaxed">
                      &ldquo;{a.texte}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={next}
            disabled={idx === maxIdx}
            aria-label="Avis suivant"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-10 w-10 h-10 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-400 hover:text-black hover:border-zinc-400 transition-all duration-200 disabled:opacity-20 disabled:pointer-events-none shadow-sm"
          >
            <ChevronRight size={17} strokeWidth={1.5} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIdx + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Aller à l'avis ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === idx ? "bg-black w-5" : "bg-zinc-300 w-1.5"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
