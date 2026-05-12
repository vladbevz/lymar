"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const PLANITY = "https://www.planity.com/lymar-dermo-esthetic-17110-saint-georges-de-didonne";

export default function HeroSection() {
  return (
    <section className="relative mt-16 bg-white overflow-hidden lg:h-[calc(100svh-64px)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full lg:h-full lg:flex lg:items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 lg:items-center w-full">

          {/* Text */}
          <div className="pt-14 pb-8 lg:py-0">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="text-xs tracking-[0.25em] uppercase font-(family-name:--font-inter) text-zinc-400 mb-4"
            >
              Saint-Georges-de-Didonne · Beaune
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="font-(family-name:--font-playfair) text-[2.6rem] sm:text-5xl lg:text-[4.5rem] font-bold italic leading-[1.05] text-black mb-5"
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
              className="font-(family-name:--font-inter) text-sm text-zinc-500 leading-relaxed mb-6 max-w-xs lg:max-w-sm"
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
                className="bg-black text-white hover:bg-zinc-800 rounded-none px-7 py-2.5 h-auto tracking-widest uppercase text-xs font-(family-name:--font-inter)"
              >
                <a href={PLANITY} target="_blank" rel="noopener noreferrer">
                  Prendre rendez-vous
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white rounded-none px-7 py-2.5 h-auto tracking-widest uppercase text-xs font-(family-name:--font-inter) transition-colors"
              >
                <Link href="/prestations">Voir les prestations</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex items-center gap-3 border-t border-zinc-100 pt-6"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-black text-sm">★</span>
                ))}
              </div>
              <p className="font-(family-name:--font-inter) text-sm text-zinc-500">
                <strong className="text-black">5.0</strong> · 77 avis vérifiés
              </p>
            </motion.div>
          </div>

          {/* Image — h-64 on mobile, full-height on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="relative h-64 lg:h-[calc(100svh-64px-80px)]"
          >
            <div className="relative w-full h-full overflow-hidden bg-zinc-100">
              <Image
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=85&fit=crop&crop=faces"
                alt="Maquillage permanent — cabinet Lymar Dermo-Esthetic"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
