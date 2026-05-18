"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";
import { FadeUp } from "@/components/AnimatedSection";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Photo = { src: string; alt: string };

const sourcilsPhotos: Photo[] = [
  { src: "/images/gallery5.webp",  alt: "Sourcils — résultat naturel" },
  { src: "/images/gallery7.webp",  alt: "Sourcils — microblading" },
  { src: "/images/gallery8.webp",  alt: "Sourcils — effet poil à poil" },
  { src: "/images/gallery11.webp", alt: "Sourcils — microshading" },
  { src: "/images/gallery13.webp", alt: "Sourcils — avant/après" },
  { src: "/images/gallery14.webp", alt: "Sourcils — résultat final" },
];

const levresPhotos: Photo[] = [
  { src: "/images/gallery4.webp",  alt: "Lèvres — Candy Lips avant/après" },
  { src: "/images/gallery6.webp",  alt: "Lèvres — effet aquarelle" },
  { src: "/images/gallery10.webp", alt: "Lèvres — résultat naturel" },
  { src: "/images/gallery12.webp", alt: "Lèvres — maquillage permanent" },
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

const CARD_STEP = 262; // 260px card + 2px gap

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
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const isDragging = useRef(false);
  const x = useMotionValue(0);

  useEffect(() => {
    const calc = () => {
      if (!outerRef.current || !innerRef.current) return;
      const cw = outerRef.current.offsetWidth;
      const iw = innerRef.current.scrollWidth;
      setConstraints({ left: Math.min(0, -(iw - cw)), right: 0 });
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [photos]);

  const scrollPrev = () => {
    const target = Math.min(0, x.get() + CARD_STEP * 2);
    animate(x, target, { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] });
  };

  const scrollNext = () => {
    const target = Math.max(constraints.left, x.get() - CARD_STEP * 2);
    animate(x, target, { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] });
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
        >
        <motion.div
          ref={innerRef}
          className="flex gap-2 px-6 lg:px-16"
          drag="x"
          dragConstraints={constraints}
          dragElastic={0.06}
          dragMomentum={true}
          style={{ x }}
          onDragStart={() => {
            isDragging.current = false;
          }}
          onDrag={() => {
            isDragging.current = true;
          }}
          onDragEnd={() => {
            setTimeout(() => {
              isDragging.current = false;
            }, 60);
          }}
        >
          {photos.map((photo, i) => (
            <motion.button
              key={photo.src}
              onClick={() => {
                if (!isDragging.current) onSelect(i);
              }}
              className="relative shrink-0 overflow-hidden"
              style={{ width: 260, height: 340 }}
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                draggable={false}
                className="object-cover pointer-events-none"
              />
              <motion.div
                className="absolute inset-0 bg-black"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.08 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          ))}
          <div className="shrink-0 w-6 lg:w-10" />
        </motion.div>
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

  const openModal = useCallback(
    (photos: Photo[], index: number) => setModal({ photos, index }),
    []
  );
  const closeModal = useCallback(() => setModal(null), []);
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
                  Sourcils et lèvres — chaque résultat révèle une beauté unique.
                </p>
                <p className="font-glacial text-xs tracking-[0.2em] uppercase text-zinc-400">
                  {sourcilsPhotos.length + levresPhotos.length} réalisations
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

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92"
            onClick={closeModal}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors z-20"
              aria-label="Fermer"
            >
              <X size={18} strokeWidth={1.5} />
            </button>

            {/* Counter */}
            <p className="absolute top-6 left-1/2 -translate-x-1/2 font-glacial text-[10px] tracking-[0.25em] uppercase text-white/30 z-20 select-none">
              {modal.index + 1} / {modal.photos.length}
            </p>

            {/* Prev */}
            {modal.photos.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-4 lg:left-8 text-white/30 hover:text-white transition-colors z-20 p-3"
                aria-label="Photo précédente"
              >
                <ChevronLeft size={24} strokeWidth={1} />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={modal.index}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
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
            </motion.div>

            {/* Next */}
            {modal.photos.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-4 lg:right-8 text-white/30 hover:text-white transition-colors z-20 p-3"
                aria-label="Photo suivante"
              >
                <ChevronRight size={24} strokeWidth={1} />
              </button>
            )}

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
