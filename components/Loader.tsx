"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

function revealPage() {
  document.documentElement.classList.remove("lymar-loading");
}

export default function Loader() {
  const [mounted, setMounted] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const already = sessionStorage.getItem("lymar_loaded");
    if (!already) {
      sessionStorage.setItem("lymar_loaded", "1");
      setMounted(true);
    } else {
      revealPage();
    }
  }, []);

  useEffect(() => {
    if (!mounted || !loaderRef.current) return;
    const el = loaderRef.current;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".loader-title",
        { opacity: 0, letterSpacing: "0.4em" },
        { opacity: 1, letterSpacing: "0.55em", duration: 1, delay: 0.2, ease: "power2.out" }
      )
        .fromTo(
          ".loader-subtitle",
          { opacity: 0 },
          { opacity: 0.6, duration: 0.8, ease: "power2.out" },
          "-=0.3"
        )
        .to(el, {
          opacity: 0,
          duration: 0.8,
          delay: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            setMounted(false);
            revealPage();
          },
        });
    }, el);

    return () => ctx.revert();
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-200 bg-black flex flex-col items-center justify-center"
    >
      <h1
        className="loader-title font-logo text-white text-4xl md:text-5xl uppercase mb-3"
        style={{ opacity: 0, letterSpacing: "0.4em" }}
      >
        Lymar
      </h1>
      <p
        className="loader-subtitle font-glacial text-white text-[9px] uppercase"
        style={{ opacity: 0, letterSpacing: "0.3em" }}
      >
        Dermo-Esthetic
      </p>
    </div>
  );
}
