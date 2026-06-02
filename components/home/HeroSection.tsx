"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BookingButtons from "@/components/BookingButtons";

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.8 } });

      tl.from(".hero-eyebrow", { opacity: 0, y: 22 })
        .from(".hero-title",   { opacity: 0, y: 22 }, "-=0.5")
        .from(".hero-desc",    { opacity: 0, y: 22 }, "-=0.5")
        .from(".hero-cta",     { opacity: 0, y: 22 }, "-=0.5")
        .from(".hero-rating",  { opacity: 0, y: 22 }, "-=0.5")
        .from(".hero-img-desktop",     { opacity: 0, duration: 1.4 }, 0)
        .from(".hero-img-desktop img", { scale: 1.08, duration: 2.2 }, 0);
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative mt-16 bg-white lg:flex lg:h-[calc(100svh-64px)]"
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
      <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 w-full lg:w-1/2 shrink-0 py-10 lg:py-14">
        <p className="hero-eyebrow text-xs tracking-[0.25em] uppercase font-(family-name:--font-inter) text-zinc-400 mb-5">
          Saint-Georges-de-Didonne · Beaune
        </p>

        <h1 className="hero-title font-logo text-[2.8rem] sm:text-5xl lg:text-[4.5rem] xl:text-[5rem] font-light leading-[1.05] text-black mb-5">
          L&apos;art du
          <br />
          maquillage
          <br />
          permanent
        </h1>

        <p className="hero-desc font-(family-name:--font-inter) text-sm text-zinc-500 leading-relaxed mb-8 max-w-sm">
          Anastasiia Lymar — experte internationale en maquillage permanent et
          pigmentation correctrice.
        </p>

        <div className="hero-cta relative z-10 flex flex-wrap items-center gap-3">
          <BookingButtons />
          <Button
            asChild
            variant="outline"
            className="border-black text-black hover:bg-black hover:text-white rounded-none px-7 py-2.5 h-auto tracking-widest uppercase text-xs font-(family-name:--font-inter) transition-colors"
          >
            <Link href="/prestations">Voir les prestations</Link>
          </Button>
        </div>

        <a
          href="https://www.google.com/maps/place/?q=place_id:ChIJ59l4v819AUgRoj8GdINFgkM"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-rating mt-10 inline-flex items-center gap-3 border-t border-zinc-100 pt-6 group"
        >
          {/* Google coloured "G" */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="shrink-0"
          >
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>

          <div className="flex items-center gap-2">
            <span className="font-(family-name:--font-inter) text-sm font-semibold text-black">5.0</span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-[#FBBC05] text-sm leading-none">★</span>
              ))}
            </div>
            <span className="font-(family-name:--font-inter) text-xs text-zinc-400 group-hover:text-zinc-600 transition-colors">
              131 avis Google
            </span>
          </div>
        </a>
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
