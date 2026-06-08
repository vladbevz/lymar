"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { FadeUp } from "@/components/AnimatedSection";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, EffectCards, EffectCreative, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
import "swiper/css/effect-creative";

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
  { src: "/images/sourcils-9.webp", alt: "Sourcils — maquillage permanent" },
  { src: "/images/sourcils-10.webp", alt: "Sourcils — résultat final" },
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
  { src: "/images/levres-12.webp", alt: "Lèvres — Candy Lips" },
  { src: "/images/levres-13.webp", alt: "Lèvres — résultat naturel" },
];

const cilsPhotos: Photo[] = [
  { src: "/images/cils-1.webp", alt: "Soins cils / yeux — Lashlift" },
  { src: "/images/cils-2.webp", alt: "Soins cils / yeux — résultat naturel" },
  { src: "/images/cils-3.webp", alt: "Soins cils / yeux — Browlift" },
  { src: "/images/cils-4.webp", alt: "Soins cils / yeux — avant/après" },
  { src: "/images/cils-5.webp", alt: "Soins cils / yeux — résultat" },
  { src: "/images/cils-6.jpg",  alt: "Soins cils / yeux — Lashlift résultat" },
];


interface ModalState {
  photos: Photo[];
  index: number;
}

type SliderEffect = "coverflow" | "cards" | "creative";

const navId = (label: string) => label.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase();

const btnClass = "absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-400 hover:text-black hover:border-zinc-400 transition-all duration-200 shadow-sm";

function PhotoStrip({
  photos,
  label,
  onSelect,
  effect = "coverflow",
}: {
  photos: Photo[];
  label: string;
  onSelect: (i: number) => void;
  effect?: SliderEffect;
}) {
  const prevId = `prev-${navId(label)}`;
  const nextId = `next-${navId(label)}`;

  const nav = { prevEl: `#${prevId}`, nextEl: `#${nextId}` };

  return (
    <div className="py-10">
      <FadeUp>
        <p className="font-(family-name:--font-inter) text-xs tracking-[0.28em] uppercase text-zinc-400 mb-6 px-6 lg:px-16">
          {label}
        </p>
      </FadeUp>

      {/* ── COVERFLOW ── */}
      {effect === "coverflow" && (
        <div className="relative">
          <button id={prevId} aria-label="Précédent" className={`${btnClass} left-1`}>
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          <Swiper
            modules={[EffectCoverflow, Navigation]}
            effect="coverflow"
            centeredSlides
            slidesPerView="auto"
            grabCursor
            initialSlide={Math.floor(photos.length / 2)}
            coverflowEffect={{ rotate: 18, stretch: 0, depth: 180, modifier: 1, slideShadows: false }}
            navigation={nav}
            className="overflow-visible!"
          >
            {photos.map((photo, i) => (
              <SwiperSlide key={photo.src} style={{ width: 260 }}>
                {({ isActive }) => (
                  <button onClick={() => onSelect(i)} className="relative overflow-hidden block w-full transition-opacity duration-300" style={{ height: 340, opacity: isActive ? 1 : 0.55 }}>
                    <Image src={photo.src} alt={photo.alt} fill draggable={false} className="object-cover pointer-events-none" />
                  </button>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          <button id={nextId} aria-label="Suivant" className={`${btnClass} right-1`}>
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      )}

      {/* ── CARDS ── */}
      {effect === "cards" && (
        <div className="relative flex justify-center">
          <button id={prevId} aria-label="Précédent" className={`${btnClass} left-4 lg:left-16`}>
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          <Swiper
            modules={[EffectCards, Navigation]}
            effect="cards"
            grabCursor
            cardsEffect={{ slideShadows: false, perSlideOffset: 10, perSlideRotate: 4 }}
            navigation={nav}
            style={{ width: 280, height: 370 }}
          >
            {photos.map((photo, i) => (
              <SwiperSlide key={photo.src}>
                <button onClick={() => onSelect(i)} className="relative overflow-hidden block w-full h-full">
                  <Image src={photo.src} alt={photo.alt} fill draggable={false} className="object-cover pointer-events-none" />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
          <button id={nextId} aria-label="Suivant" className={`${btnClass} right-4 lg:right-16`}>
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      )}

      {/* ── CREATIVE ── */}
      {effect === "creative" && (
        <div className="relative">
          <button id={prevId} aria-label="Précédent" className={`${btnClass} left-1`}>
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          <Swiper
            modules={[EffectCreative, Navigation]}
            effect="creative"
            centeredSlides
            slidesPerView="auto"
            grabCursor
            initialSlide={Math.floor(photos.length / 2)}
            creativeEffect={{
              prev: { shadow: false, translate: ["-110%", 0, -200], opacity: 0 },
              next: { translate: ["110%", 0, 0], opacity: 0.6 },
            }}
            navigation={nav}
            style={{ overflow: "visible" }}
          >
            {photos.map((photo, i) => (
              <SwiperSlide key={photo.src} style={{ width: 320 }}>
                <button onClick={() => onSelect(i)} className="relative overflow-hidden block w-full" style={{ height: 400 }}>
                  <Image src={photo.src} alt={photo.alt} fill draggable={false} className="object-cover pointer-events-none" />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
          <button id={nextId} aria-label="Suivant" className={`${btnClass} right-1`}>
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      )}
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
      <section className="relative mt-16 overflow-hidden bg-white border-b border-zinc-100 lg:flex lg:h-[calc(100svh-64px)]">

        {/* Mobile image */}
        <div className="relative h-100 w-full lg:hidden">
          <Image
            src="/images/gallery-hero.webp"
            alt="Galerie Lymar Dermo Esthetic — réalisations maquillage permanent"
            fill
            priority
            className="object-cover object-bottom"
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
              Sourcils, lèvres, soins cils & yeux — chaque résultat révèle une beauté unique.
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
            className="object-cover object-bottom"
          />
        </div>

      </section>

      {/* Sliders */}
      <section className="bg-white pb-4">
        <PhotoStrip
          label="Sourcils"
          photos={sourcilsPhotos}
          onSelect={(i) => openModal(sourcilsPhotos, i)}
          effect="coverflow"
        />
        <div className="border-t border-zinc-100 mx-6 lg:mx-16" />
        <PhotoStrip
          label="Lèvres"
          photos={levresPhotos}
          onSelect={(i) => openModal(levresPhotos, i)}
          effect="coverflow"
        />
        <div className="border-t border-zinc-100 mx-6 lg:mx-16" />
        <PhotoStrip
          label="Soins cils / yeux"
          photos={cilsPhotos}
          onSelect={(i) => openModal(cilsPhotos, i)}
          effect="coverflow"
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
          <p className="absolute top-6 left-1/2 -translate-x-1/2 font-(family-name:--font-inter) text-[10px] tracking-[0.25em] uppercase text-white/30 z-20 select-none">
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
