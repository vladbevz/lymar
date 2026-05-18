"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const PLANITY = "https://www.planity.com/lymar-dermo-esthetic-17110-saint-georges-de-didonne";

export default function HeroSection() {
  return (
    <section className="relative mt-16 overflow-hidden bg-white lg:flex lg:h-[calc(100svh-64px)]">

      {/* Mobile image */}
      <div className="relative h-95 w-full lg:hidden">
        <Image src="/images/hero.webp" alt="Anastasiia Lymar — maquillage permanent" fill priority className="object-cover object-center" />
      </div>

      {/* Left — text */}
      <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 w-full lg:w-1/2 shrink-0 py-10 lg:py-14 overflow-hidden">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="text-xs tracking-[0.25em] uppercase font-glacial text-zinc-400 mb-5"
        >
          Saint-Georges-de-Didonne · Beaune
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="font-(family-name:--font-playfair) text-[2.8rem] sm:text-5xl lg:text-[4.5rem] xl:text-[5rem] font-light leading-[1.05] text-black mb-5"
        >
          L&apos;art du
          <br />
          maquillage
          <br />
          permanent
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="font-(family-name:--font-inter) text-sm text-zinc-500 leading-relaxed mb-8 max-w-sm"
        >
          Anastasiia Lymar — experte internationale en maquillage permanent et pigmentation correctrice.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <Button
            asChild
            className="bg-black text-white hover:bg-zinc-800 rounded-none px-7 py-2.5 h-auto tracking-widest uppercase text-xs font-glacial"
          >
            <a href={PLANITY} target="_blank" rel="noopener noreferrer">
              Prendre rendez-vous
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-black text-black hover:bg-black hover:text-white rounded-none px-7 py-2.5 h-auto tracking-widest uppercase text-xs font-glacial transition-colors"
          >
            <Link href="/prestations">Voir les prestations</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex items-center gap-3 border-t border-zinc-100 pt-6"
        >
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-black text-sm">★</span>
            ))}
          </div>
          <p className="font-(family-name:--font-inter) text-sm text-zinc-500">
            <strong className="text-black">5.0</strong> · 200+ avis vérifiés
          </p>
        </motion.div>
      </div>

      {/* Right — full-height edge-to-edge photo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const }}
        className="hidden lg:block relative flex-1 self-stretch"
      >
        <Image
          src="/images/hero.webp"
          alt="Anastasiia Lymar — maquillage permanent au cabinet"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>
    </section>
  );
}
