"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const STORAGE_KEY = "lymar-rgpd-accepted";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-zinc-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="font-(family-name:--font-inter) text-xs text-zinc-500 leading-relaxed max-w-2xl">
          Ce site ne place aucun cookie de suivi. Les données saisies dans le formulaire de contact sont utilisées uniquement pour répondre à vos demandes.{" "}
          <Link href="/politique-confidentialite" className="underline hover:text-black transition-colors">
            En savoir plus
          </Link>
        </p>
        <button
          onClick={dismiss}
          className="flex items-center gap-2 shrink-0 font-(family-name:--font-inter) text-xs tracking-widest uppercase bg-black text-white px-5 py-2.5 hover:bg-zinc-800 transition-colors"
        >
          J&apos;ai compris
          <X size={12} />
        </button>
      </div>
    </div>
  );
}
