"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(useGSAP);

const PLANITY = "https://www.planity.com/lymar-dermo-esthetic-17110-saint-georges-de-didonne";

const TITLE_LINES = ["L'art du", "maquillage", "permanent"];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-eyebrow", { opacity: 0, y: 10, duration: 0.6 })
        .from(
          ".hero-line",
          { y: "110%", opacity: 0, duration: 0.75, stagger: 0.1 },
          "-=0.35"
        )
        .from(".hero-desc", { opacity: 0, y: 12, duration: 0.6 }, "-=0.45")
        .from(".hero-cta", { opacity: 0, y: 12, duration: 0.6 }, "-=0.4")
        .from(".hero-rating", { opacity: 0, duration: 0.5 }, "-=0.3")
        .from(".hero-img-desktop", { opacity: 0, duration: 1.4, ease: "power2.out" }, 0)
        .from(".hero-img-desktop img", { scale: 1.08, duration: 2.2, ease: "power2.out" }, 0);
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative mt-16 overflow-hidden bg-white lg:flex lg:h-[calc(100svh-64px)]"
    >
      {/* Mobile image */}
      <div className="relative h-95 w-full lg:hidden">
        <Image
          src="/images/hero.webp"
          alt="Anastasiia Lymar — maquillage permanent"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Left — text */}
      <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 w-full lg:w-1/2 shrink-0 py-10 lg:py-14 overflow-hidden">
        <p className="hero-eyebrow text-xs tracking-[0.25em] uppercase font-glacial text-zinc-400 mb-5">
          Saint-Georges-de-Didonne · Beaune
        </p>

        <h1 className="font-(family-name:--font-playfair) text-[2.8rem] sm:text-5xl lg:text-[4.5rem] xl:text-[5rem] font-light leading-[1.05] text-black mb-5">
          {TITLE_LINES.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <span className="hero-line block">{line}</span>
            </span>
          ))}
        </h1>

        <p className="hero-desc font-(family-name:--font-inter) text-sm text-zinc-500 leading-relaxed mb-8 max-w-sm">
          Anastasiia Lymar — experte internationale en maquillage permanent et
          pigmentation correctrice.
        </p>

        <div className="hero-cta flex flex-col sm:flex-row gap-3">
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
        </div>

        <div className="hero-rating mt-10 flex items-center gap-3 border-t border-zinc-100 pt-6">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-black text-sm">
                ★
              </span>
            ))}
          </div>
          <p className="font-(family-name:--font-inter) text-sm text-zinc-500">
            <strong className="text-black">5.0</strong> · 200+ avis vérifiés
          </p>
        </div>
      </div>

      {/* Right — full-height photo with zoom-out reveal */}
      <div className="hero-img-desktop hidden lg:block relative flex-1 self-stretch overflow-hidden">
        <Image
          src="/images/hero.webp"
          alt="Anastasiia Lymar — maquillage permanent au cabinet"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
