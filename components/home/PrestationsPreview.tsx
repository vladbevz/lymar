"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { StaggerWrapper, StaggerItem, FadeUp } from "@/components/AnimatedSection";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    title: "Sourcils",
    description: "Effet poil à poil (microblading) ou poudré (microshading) — sourcils redessinés, naturels et durables.",
    href: "/prestations/sourcils",
    prix: "À partir de 250 €",
  },
  {
    title: "Lèvres",
    description: "Candy Lips dégradé ou effet aquarelle — couleur, volume et définition en toute délicatesse.",
    href: "/prestations/levres",
    prix: "300 €",
  },
  {
    title: "Tricopigmentation",
    description: "Micropigmentation du cuir chevelu pour redonner densité et uniformité aux zones clairsemées.",
    href: "/prestations/tricopigmentation",
    prix: "À partir de 350 €",
  },
  {
    title: "Taches de rousseur",
    description: "Taches de rousseur semi-permanentes — effet naturel, soleil ou intense — pour une peau vivante.",
    href: "/prestations/taches-rousseur",
    prix: "À partir de 150 €",
  },
  {
    title: "Soins cils & sourcils",
    description: "Lashlift, browlift, teinture — des soins express pour sublimer votre regard au quotidien.",
    href: "/prestations/soins-cils-sourcils",
    prix: "À partir de 10 €",
  },
  {
    title: "Pigmentation correctrice",
    description: "Camouflage dermique de cicatrices (blépharoplastie, lifting, petites cicatrices) et reconstruction aréole.",
    href: "/prestations/pigmentation-correctrice",
    prix: "À partir de 150 €",
  },
];

const cardVariants = {
  rest: { backgroundColor: "#ffffff", y: 0 },
  hover: { backgroundColor: "#f7f7f7", y: -3 },
};
const titleVariants = { rest: { scale: 1 }, hover: { scale: 1.04 } };
const arrowVariants = { rest: { x: 0 }, hover: { x: 5 } };
const transition = { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const };

function Card({ cat }: { cat: (typeof categories)[0] }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      transition={transition}
      className="h-full border border-zinc-100"
    >
      <Link href={cat.href} className="block p-8 h-full">
        <motion.h3
          variants={titleVariants}
          transition={transition}
          className="font-(family-name:--font-playfair) text-2xl font-bold text-black mb-2 origin-left"
        >
          {cat.title}
        </motion.h3>
        <p className="font-(family-name:--font-inter) text-xs text-zinc-400 mb-3">{cat.prix}</p>
        <p className="font-(family-name:--font-inter) text-sm text-zinc-500 leading-relaxed mb-6">
          {cat.description}
        </p>
        <span className="inline-flex items-center gap-1.5 font-glacial text-xs tracking-widest uppercase text-black">
          Découvrir
          <motion.span variants={arrowVariants} transition={transition}>
            <ArrowRight size={12} />
          </motion.span>
        </span>
      </Link>
    </motion.div>
  );
}

export default function PrestationsPreview() {
  const [idx, setIdx] = useState(0);
  const dragStartX = useRef(0);
  const maxIdx = categories.length - 1;

  const prev = () => setIdx((i) => Math.max(0, i - 1));
  const next = () => setIdx((i) => Math.min(maxIdx, i + 1));

  return (
    <section className="py-12 lg:py-32 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="flex items-end justify-between mb-10 lg:mb-14">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase font-glacial text-zinc-400 mb-3">
                Prestations
              </p>
              <h2 className="font-(family-name:--font-playfair) text-4xl lg:text-5xl font-semibold text-black leading-tight">
                Notre expertise
              </h2>
            </div>
            <Link
              href="/prestations"
              className="hidden lg:flex items-center gap-2 font-glacial text-xs tracking-widest uppercase text-zinc-500 hover:text-black transition-colors"
            >
              Tout voir <ArrowRight size={12} />
            </Link>
          </div>
        </FadeUp>

        {/* Desktop grid */}
        <div className="hidden lg:block">
          <StaggerWrapper className="grid grid-cols-3 gap-px bg-zinc-100">
            {categories.map((cat) => (
              <StaggerItem key={cat.href}>
                <Card cat={cat} />
              </StaggerItem>
            ))}
          </StaggerWrapper>
        </div>

        {/* Mobile slider */}
        <div className="lg:hidden relative">
          {/* Prev */}
          <button
            onClick={prev}
            disabled={idx === 0}
            aria-label="Précédent"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-9 h-9 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-400 hover:text-black hover:border-zinc-400 transition-all shadow-sm disabled:opacity-20 disabled:pointer-events-none"
          >
            <ChevronLeft size={16} strokeWidth={1.5} />
          </button>

          {/* Track */}
          <div
            className="overflow-hidden"
            onPointerDown={(e) => { dragStartX.current = e.clientX; }}
            onPointerUp={(e) => {
              const diff = e.clientX - dragStartX.current;
              if (diff < -40) next();
              else if (diff > 40) prev();
            }}
          >
            <motion.div
              className="flex"
              animate={{ x: `${-idx * 100}%` }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {categories.map((cat) => (
                <div key={cat.href} className="w-full shrink-0">
                  <Card cat={cat} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Next */}
          <button
            onClick={next}
            disabled={idx === maxIdx}
            aria-label="Suivant"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-9 h-9 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-400 hover:text-black hover:border-zinc-400 transition-all shadow-sm disabled:opacity-20 disabled:pointer-events-none"
          >
            <ChevronRight size={16} strokeWidth={1.5} />
          </button>

          {/* Dots */}
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

        {/* Mobile — voir toutes */}
        <FadeUp delay={0.2}>
          <div className="text-center mt-8 lg:hidden">
            <Link
              href="/prestations"
              className="inline-flex items-center gap-2 font-glacial text-xs tracking-widest uppercase text-black border-b border-black pb-0.5 hover:opacity-50 transition-opacity"
            >
              Voir toutes les prestations <ArrowRight size={12} />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
