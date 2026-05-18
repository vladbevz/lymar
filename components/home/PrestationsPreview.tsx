"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { StaggerWrapper, StaggerItem, FadeUp } from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";

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

const titleVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.04 },
};

const arrowVariants = {
  rest: { x: 0 },
  hover: { x: 5 },
};

const transition = { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const };

export default function PrestationsPreview() {
  return (
    <section className="py-12 lg:py-32 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="flex items-end justify-between mb-14">
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

        <StaggerWrapper className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-100">
          {categories.map((cat) => (
            <StaggerItem key={cat.href}>
              <motion.div
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
                transition={transition}
                className="h-full"
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
            </StaggerItem>
          ))}
        </StaggerWrapper>

        <FadeUp delay={0.2}>
          <div className="text-center mt-10 lg:hidden">
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
