"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    if (!initialized.current) {
      initialized.current = true;
      gsap.set(btn, { opacity: 0, y: 8, pointerEvents: "none" });
      return;
    }

    if (visible) {
      gsap.set(btn, { pointerEvents: "auto" });
      gsap.to(btn, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
    } else {
      gsap.to(btn, {
        opacity: 0,
        y: 8,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => gsap.set(btn, { pointerEvents: "none" }),
      });
    }
  }, [visible]);

  return (
    <button
      ref={btnRef}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Retour en haut"
      className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300 group"
    >
      <ArrowUp
        size={16}
        strokeWidth={1.5}
        className="group-hover:-translate-y-0.5 transition-transform duration-300"
      />
    </button>
  );
}
