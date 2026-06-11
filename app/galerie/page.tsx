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
  { src: "/images/sourcils-7.webp", alt: "Sourcils — avant/après" },
  { src: "/images/sourcils-8.webp", alt: "Sourcils — résultat naturel" },
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
  { src: "/images/levres-10.webp", alt: "Lèvres — résultat avant/après" },
  { src: "/images/levres-11.webp", alt: "Lèvres — maquillage permanent" },
];

const cilsPhotos: Photo[] = [
  { src: "/images/cils-1.webp", alt: "Soins cils / yeux — Lashlift" },
  { src: "/images/cils-2.webp", alt: "Soins cils / yeux — résultat naturel" },
  { src: "/images/cils-3.webp", alt: "Soins cils / yeux — Browlift" },
  { src: "/images/cils-4.webp", alt: "Soins cils / yeux — avant/après" },
  { src: "/images/cils-5.jpg",  alt: "Soins cils / yeux — résultat" },
  { src: "/images/cils-6.webp", alt: "Soins cils / yeux — Lashlift résultat" },
  { src: "/images/cils-7.webp", alt: "Soins cils / yeux — avant/après" },
];

interface ModalState {
  photos: Photo[];
  index: number;
}

function PhotoStrip({
  photos,
  label,
  onSelect,
}: {
  photos: Photo[];
  label: string;
  onSelect: (i: number) => void;
}) {
  const [active, setActive] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const total = photos.length;

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Mobile: 1 dominant slide (72%) with peeks
  // Desktop: 3 slides visible (30% each + 2% gap = 32% step), active centered
  const slideW = isDesktop ? 30 : 72;
  const gap = 2;
  const step = slideW + gap;
  const peekOffset = isDesktop ? (100 - slideW) / 2 : 14; // 35% on desktop centers active

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  const swipeStart = useRef(0);
  const onPointerDown = (e: React.PointerEvent) => { swipeStart.current = e.clientX; };
  const onPointerUp = (e: React.PointerEvent) => {
    const diff = e.clientX - swipeStart.current;
    if (diff > 50) prev();
    else if (diff < -50) next();
  };

  return (
    <div className="py-10">
      <FadeUp>
        <p className="font-(family-name:--font-inter) text-xs tracking-[0.28em] uppercase text-zinc-400 mb-6 px-6 lg:px-16">
          {label}
        </p>
      </FadeUp>

      {/* Slider */}
      <div
        className="relative overflow-hidden"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        <div
          className="flex"
          style={{
            transform: `translateX(calc(${peekOffset}% - ${active * step}%))`,
            transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {photos.map((photo, i) => {
            const isActive = i === active;
            return (
              <div
                key={photo.src}
                style={{
                  flex: `0 0 ${slideW}%`,
                  marginRight: `${gap}%`,
                  transform: isActive ? "scale(1)" : "scale(0.95)",
                  opacity: isActive ? 1 : 0.5,
                  filter: isActive ? "brightness(1)" : "brightness(0.85)",
                  transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.5s, filter 0.5s",
                  cursor: "pointer",
                }}
                onClick={() => {
                  if (isActive) onSelect(i);
                  else setActive(i);
                }}
              >
                <div className="relative overflow-hidden bg-white" style={{ height: isDesktop ? 420 : 460 }}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={isDesktop ? "30vw" : "72vw"}
                    className="object-contain pointer-events-none"
                    draggable={false}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div
        className="flex items-center mt-4 gap-4"
        style={{ paddingLeft: `${peekOffset}%`, paddingRight: `${peekOffset}%` }}
      >
        <button
          onClick={prev}
          aria-label="Précédent"
          className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-black hover:border-zinc-400 transition-all shrink-0"
        >
          <ChevronLeft size={16} strokeWidth={1.5} />
        </button>

        <div className="flex-1 h-px bg-zinc-100 relative">
          <div
            className="absolute left-0 top-0 h-full bg-zinc-800 transition-all duration-500"
            style={{ width: `${((active + 1) / total) * 100}%` }}
          />
        </div>

        <span className="font-(family-name:--font-inter) text-[10px] tracking-[0.2em] text-zinc-400 shrink-0 min-w-[36px] text-right">
          {active + 1} / {total}
        </span>

        <button
          onClick={next}
          aria-label="Suivant"
          className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-black hover:border-zinc-400 transition-all shrink-0"
        >
          <ChevronRight size={16} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}

export default function GaleriePage() {
  const [modal, setModal] = useState<ModalState | null>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const modalSwipeStart = useRef(0);
  const modalDidSwipe = useRef(false);

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

  useEffect(() => {
    if (!modal || !imageWrapRef.current) return;
    gsap.fromTo(
      imageWrapRef.current,
      { opacity: 0, scale: 0.96 },
      { opacity: 1, scale: 1, duration: 0.25, ease: "power2.out" }
    );
  }, [modal?.index]);

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
      <section className="relative mt-16 overflow-hidden bg-white border-b border-zinc-100 lg:flex lg:h-[calc(100svh-64px)]">

        {/* Mobile image */}
        <div className="relative h-100 w-full lg:hidden">
          <Image
            src="/images/gallery-hero.webp"
            alt="Galerie Lymar Dermo Esthetic — réalisations maquillage permanent"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Left — text */}
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 w-full lg:w-1/2 shrink-0 py-10 lg:py-14 overflow-hidden">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase font-(family-name:--font-inter) text-zinc-400 mb-4">
              Galerie
            </p>
            <h1 className="font-logo text-[2.8rem] sm:text-5xl lg:text-[4.5rem] font-light text-black leading-[1.05] mb-5">
              Nos réalisations
            </h1>
            <p className="font-(family-name:--font-inter) text-sm text-zinc-500 leading-relaxed max-w-sm mb-6">
              Sourcils, lèvres, yeux — chaque résultat révèle une beauté unique.
            </p>
            <p className="font-(family-name:--font-inter) text-xs tracking-[0.2em] uppercase text-zinc-400">
              {sourcilsPhotos.length + levresPhotos.length + cilsPhotos.length} réalisations
            </p>
          </FadeUp>
        </div>

        {/* Right — edge-to-edge photo */}
        <div className="hidden lg:block relative flex-1">
          <Image
            src="/images/gallery-hero.webp"
            alt="Galerie Lymar Dermo Esthetic — réalisations maquillage permanent"
            fill
            priority
            className="object-cover object-center"
          />
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
          <p className="font-(family-name:--font-inter) text-xs tracking-[0.25em] uppercase text-zinc-400 mb-4">
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
            <span className="font-(family-name:--font-inter) text-xs tracking-widest uppercase text-zinc-500 group-hover:text-black transition-colors">
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
        onPointerDown={(e) => { modalSwipeStart.current = e.clientX; modalDidSwipe.current = false; }}
        onPointerUp={(e) => {
          const diff = e.clientX - modalSwipeStart.current;
          if (Math.abs(diff) > 50) { modalDidSwipe.current = true; diff < 0 ? next() : prev(); }
        }}
        onClick={() => { if (!modalDidSwipe.current) closeModal(); }}
      >
        <button
          onClick={(e) => { e.stopPropagation(); closeModal(); }}
          className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors z-20"
          aria-label="Fermer"
        >
          <X size={18} strokeWidth={1.5} />
        </button>

        {modal && (
          <p className="absolute top-6 left-1/2 -translate-x-1/2 font-(family-name:--font-inter) text-[10px] tracking-[0.25em] uppercase text-white/30 z-20 select-none">
            {modal.index + 1} / {modal.photos.length}
          </p>
        )}

        {modal && modal.photos.length > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 lg:left-8 text-white/30 hover:text-white transition-colors z-20 p-3"
            aria-label="Photo précédente"
          >
            <ChevronLeft size={24} strokeWidth={1} />
          </button>
        )}

        {modal && (
          <div
            ref={imageWrapRef}
            className="relative"
            style={{ maxHeight: "82vh", maxWidth: "min(520px, 90vw)", width: "100%", aspectRatio: "3/4" }}
            onPointerDown={(e) => e.stopPropagation()}
            onPointerUp={(e) => e.stopPropagation()}
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
