"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { FadeUp } from "@/components/AnimatedSection";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Photo = { src: string; alt: string };

const sourcilsPhotos: Photo[] = [
  { src: "/images/sourcils-1.webp", alt: "Sourcils — effet poil à poil" },
  { src: "/images/sourcils-2.webp", alt: "Sourcils — résultat naturel" },
  { src: "/images/sourcils-3.webp", alt: "Sourcils — avant/après" },
  { src: "/images/sourcils-4.webp", alt: "Sourcils — effet poudré" },
  { src: "/images/sourcils-5.webp", alt: "Sourcils — résultat final" },
  { src: "/images/sourcils-6.webp", alt: "Sourcils — maquillage permanent" },
];

const levresPhotos: Photo[] = [
  { src: "/images/levres-1.webp", alt: "Lèvres — Candy Lips" },
  { src: "/images/levres-2.webp", alt: "Lèvres — effet aquarelle" },
  { src: "/images/levres-3.webp", alt: "Lèvres — résultat naturel" },
  { src: "/images/levres-4.webp", alt: "Lèvres — avant/après" },
  { src: "/images/levres-5.webp", alt: "Lèvres — maquillage permanent" },
  { src: "/images/levres-6.webp", alt: "Lèvres — Candy Lips dégradé" },
  { src: "/images/levres-7.webp", alt: "Lèvres — résultat final" },
  { src: "/images/levres-8.webp", alt: "Lèvres — définition et couleur" },
  { src: "/images/levres-9.webp", alt: "Lèvres — aquarelle fondu" },
];

const cilsPhotos: Photo[] = [
  { src: "/images/cils-1.webp", alt: "Soins cils / yeux — Lashlift" },
  { src: "/images/cils-2.webp", alt: "Soins cils / yeux — résultat naturel" },
  { src: "/images/cils-3.webp", alt: "Soins cils / yeux — Browlift" },
  { src: "/images/cils-4.webp", alt: "Soins cils / yeux — avant/après" },
  { src: "/images/cils-5.webp", alt: "Soins cils / yeux — résultat" },
];

const heroPhotos: Photo[] = [
  { src: "/images/gallery1.webp", alt: "Galerie Lymar — réalisation 1" },
  { src: "/images/gallery2.webp", alt: "Galerie Lymar — réalisation 2" },
  { src: "/images/gallery3.webp", alt: "Galerie Lymar — réalisation 3" },
  { src: "/images/gallery4.webp", alt: "Galerie Lymar — réalisation 4" },
];

interface ModalState {
  photos: Photo[];
  index: number;
}

const CARD_STEP = 262;

function PhotoStrip({
  photos,
  label,
  onSelect,
}: {
  photos: Photo[];
  label: string;
  onSelect: (i: number) => void;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const constraints = useRef({ left: 0, right: 0 });
  const hasDragged = useRef(false);
  const startX = useRef(0);
  const startScrollX = useRef(0);

  useEffect(() => {
    const calc = () => {
      if (!outerRef.current || !innerRef.current) return;
      const cw = outerRef.current.offsetWidth;
      const iw = innerRef.current.scrollWidth;
      constraints.current = { left: Math.min(0, -(iw - cw)), right: 0 };
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [photos]);

  const getCurrentX = () =>
    (gsap.getProperty(innerRef.current!, "x") as number) || 0;

  const scrollPrev = () => {
    const target = Math.min(0, getCurrentX() + CARD_STEP * 2);
    gsap.to(innerRef.current, { x: target, duration: 0.4, ease: "power2.out" });
  };

  const scrollNext = () => {
    const target = Math.max(constraints.current.left, getCurrentX() - CARD_STEP * 2);
    gsap.to(innerRef.current, { x: target, duration: 0.4, ease: "power2.out" });
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    hasDragged.current = false;
    startX.current = e.clientX;
    startScrollX.current = getCurrentX();
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!e.buttons) return;
    hasDragged.current = true;
    const diff = e.clientX - startX.current;
    const newX = Math.max(
      constraints.current.left,
      Math.min(0, startScrollX.current + diff)
    );
    gsap.set(innerRef.current, { x: newX });
  };

  const handlePointerUp = () => {
    const cur = getCurrentX();
    const clamped = Math.max(constraints.current.left, Math.min(0, cur));
    gsap.to(innerRef.current, { x: clamped, duration: 0.3, ease: "power2.out" });
    setTimeout(() => { hasDragged.current = false; }, 60);
  };

  return (
    <div className="py-10">
      <FadeUp>
        <p className="font-glacial text-xs tracking-[0.28em] uppercase text-zinc-400 mb-6 px-6 lg:px-16">
          {label}
        </p>
      </FadeUp>

      <div className="relative">
        {/* Prev */}
        <button
          onClick={scrollPrev}
          aria-label="Précédent"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-400 hover:text-black hover:border-zinc-400 transition-all duration-200 shadow-sm ml-1"
        >
          <ChevronLeft size={15} strokeWidth={1.5} />
        </button>

        <div
          ref={outerRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          <div ref={innerRef} className="flex gap-2 px-6 lg:px-16">
            {photos.map((photo, i) => (
              <button
                key={photo.src}
                onClick={() => { if (!hasDragged.current) onSelect(i); }}
                className="relative shrink-0 overflow-hidden group transition-transform duration-[350ms] hover:scale-[1.015]"
                style={{ width: 260, height: 340 }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  draggable={false}
                  className="object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-[0.08] transition-opacity duration-400" />
              </button>
            ))}
            <div className="shrink-0 w-6 lg:w-10" />
          </div>
        </div>

        {/* Next */}
        <button
          onClick={scrollNext}
          aria-label="Suivant"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-400 hover:text-black hover:border-zinc-400 transition-all duration-200 shadow-sm mr-1"
        >
          <ChevronRight size={15} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}

export default function GaleriePage() {
  const [modal, setModal] = useState<ModalState | null>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);

  const openModal = useCallback((photos: Photo[], index: number) => {
    setModal({ photos, index });
    gsap.set(backdropRef.current, { pointerEvents: "auto" });
    gsap.to(backdropRef.current, { opacity: 1, duration: 0.2 });
  }, []);

  const closeModal = useCallback(() => {
    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        setModal(null);
        gsap.set(backdropRef.current, { pointerEvents: "none" });
      },
    });
  }, []);

  const prev = useCallback(
    () =>
      setModal((m) =>
        m ? { ...m, index: (m.index - 1 + m.photos.length) % m.photos.length } : null
      ),
    []
  );
  const next = useCallback(
    () =>
      setModal((m) =>
        m ? { ...m, index: (m.index + 1) % m.photos.length } : null
      ),
    []
  );

  // Animate image on index change
  useEffect(() => {
    if (!modal || !imageWrapRef.current) return;
    gsap.fromTo(
      imageWrapRef.current,
      { opacity: 0, scale: 0.96 },
      { opacity: 1, scale: 1, duration: 0.25, ease: "power2.out" }
    );
  }, [modal?.index]);

  // Keyboard nav
  useEffect(() => {
    if (!modal) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [modal, closeModal, prev, next]);

  return (
    <>
      {/* Hero */}
      <section className="relative mt-16 bg-white border-b border-zinc-100 overflow-hidden lg:h-[calc(100svh-64px)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full lg:h-full lg:flex lg:items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 lg:items-center w-full">
            <div className="pt-14 pb-8 lg:py-0">
              <FadeUp>
                <p className="text-xs tracking-[0.25em] uppercase font-glacial text-zinc-400 mb-4">
                  Galerie
                </p>
                <h1 className="font-(family-name:--font-playfair) text-[2.6rem] sm:text-5xl lg:text-[4.5rem] font-semibold text-black leading-[1.05] mb-5">
                  Nos réalisations
                </h1>
                <p className="font-(family-name:--font-inter) text-sm text-zinc-500 leading-relaxed max-w-sm mb-6">
                  Sourcils, lèvres, soins cils & yeux — chaque résultat révèle une beauté unique.
                </p>
                <p className="font-glacial text-xs tracking-[0.2em] uppercase text-zinc-400">
                  {sourcilsPhotos.length + levresPhotos.length + cilsPhotos.length} réalisations
                </p>
              </FadeUp>
            </div>

            <div className="relative h-72 lg:h-[calc(100svh-64px-80px)]">
              <div className="grid grid-cols-2 gap-1 lg:gap-2 w-full h-full">
                {heroPhotos.map((photo) => (
                  <div key={photo.src} className="relative overflow-hidden bg-zinc-100">
                    <Image src={photo.src} alt={photo.alt} fill priority className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sliders */}
      <section className="bg-white pb-4">
        <PhotoStrip
          label="Sourcils"
          photos={sourcilsPhotos}
          onSelect={(i) => openModal(sourcilsPhotos, i)}
        />
        <div className="border-t border-zinc-100 mx-6 lg:mx-16" />
        <PhotoStrip
          label="Lèvres"
          photos={levresPhotos}
          onSelect={(i) => openModal(levresPhotos, i)}
        />
        <div className="border-t border-zinc-100 mx-6 lg:mx-16" />
        <PhotoStrip
          label="Soins cils / yeux"
          photos={cilsPhotos}
          onSelect={(i) => openModal(cilsPhotos, i)}
        />
      </section>

      {/* Instagram */}
      <section className="py-16 bg-white border-t border-zinc-100 text-center">
        <FadeUp>
          <p className="font-glacial text-xs tracking-[0.25em] uppercase text-zinc-400 mb-4">
            Retrouvez plus de réalisations
          </p>
          <a
            href="https://www.instagram.com/lymar.dermo.esthetic/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black group-hover:opacity-50 transition-opacity"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span className="font-glacial text-xs tracking-widest uppercase text-zinc-500 group-hover:text-black transition-colors">
              Voir sur Instagram
            </span>
          </a>
        </FadeUp>
      </section>

      {/* Modal — always in DOM, opacity controlled by GSAP */}
      <div
        ref={backdropRef}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/92"
        style={{ opacity: 0, pointerEvents: "none" }}
        onClick={closeModal}
      >
        {/* Close */}
        <button
          onClick={(e) => { e.stopPropagation(); closeModal(); }}
          className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors z-20"
          aria-label="Fermer"
        >
          <X size={18} strokeWidth={1.5} />
        </button>

        {/* Counter */}
        {modal && (
          <p className="absolute top-6 left-1/2 -translate-x-1/2 font-glacial text-[10px] tracking-[0.25em] uppercase text-white/30 z-20 select-none">
            {modal.index + 1} / {modal.photos.length}
          </p>
        )}

        {/* Prev */}
        {modal && modal.photos.length > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 lg:left-8 text-white/30 hover:text-white transition-colors z-20 p-3"
            aria-label="Photo précédente"
          >
            <ChevronLeft size={24} strokeWidth={1} />
          </button>
        )}

        {/* Image */}
        {modal && (
          <div
            ref={imageWrapRef}
            className="relative"
            style={{ maxHeight: "82vh", maxWidth: "min(520px, 90vw)", width: "100%", aspectRatio: "3/4" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={modal.photos[modal.index].src}
              alt={modal.photos[modal.index].alt}
              fill
              className="object-contain"
            />
          </div>
        )}

        {/* Next */}
        {modal && modal.photos.length > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 lg:right-8 text-white/30 hover:text-white transition-colors z-20 p-3"
            aria-label="Photo suivante"
          >
            <ChevronRight size={24} strokeWidth={1} />
          </button>
        )}
      </div>
    </>
  );
}
