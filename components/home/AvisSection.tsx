"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeUp } from "@/components/AnimatedSection";

const GoogleG = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const Stars = ({ size = "sm" }: { size?: "sm" | "xs" }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={`text-[#FBBC05] ${size === "sm" ? "text-sm" : "text-[10px]"} leading-none`}>★</span>
    ))}
  </div>
);

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
    <section className="pt-12 pb-8 lg:pt-32 lg:pb-14 bg-warm border-t border-zinc-100">
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
            <a
              href="https://www.google.com/maps/place/?q=place_id:ChIJ59l4v819AUgRoj8GdINFgkM"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 shrink-0 group"
            >
              <GoogleG size={22} />
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-logo text-3xl font-light text-black leading-none">5.0</span>
                  <Stars size="sm" />
                </div>
                <p className="font-(family-name:--font-inter) text-xs text-zinc-400 group-hover:text-zinc-600 transition-colors">
                  131 avis Google
                </p>
              </div>
            </a>
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
                  <div className="bg-white border border-zinc-100 p-7 h-full select-none flex flex-col">

                    {/* Quote mark */}
                    <span
                      className="font-logo text-5xl leading-none mb-3 select-none"
                      style={{ color: "var(--color-accent)" }}
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>

                    {/* Review text */}
                    <p className="font-(family-name:--font-inter) text-sm text-zinc-600 leading-relaxed flex-1 mb-6">
                      {a.texte}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-5 border-t border-zinc-100">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-(family-name:--font-inter) font-medium"
                        style={{ background: "var(--color-accent-light)", color: "var(--color-muted)" }}
                      >
                        {a.nom.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-(family-name:--font-inter) text-xs tracking-widest uppercase text-black leading-none mb-1">
                          {a.nom}
                        </p>
                        <Stars size="xs" />
                      </div>
                    </div>

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

        {/* Leave a review CTA */}
        <div className="flex justify-center mt-10">
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJ59l4v819AUgRoj8GdINFgkM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-black text-black hover:bg-black hover:text-white transition-colors px-7 py-3 text-xs tracking-widest uppercase font-(family-name:--font-inter)"
          >
            <GoogleG size={14} />
            Laisser un avis Google
          </a>
        </div>

      </div>
    </section>
  );
}
