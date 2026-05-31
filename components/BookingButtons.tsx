"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { PLANITY_LOCATIONS } from "@/lib/site";

interface Props {
  className?: string;
}

export default function BookingButtons({ className }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <div className={`relative z-10 w-fit ${className ?? ""}`} ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 bg-black text-white hover:bg-zinc-800 transition-colors font-(family-name:--font-inter) text-xs tracking-widest uppercase px-7 py-2.5"
      >
        Réserver
        <ChevronDown
          size={10}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-1 w-60 bg-white border border-zinc-200 shadow-sm z-50 py-1">
          {PLANITY_LOCATIONS.map((loc) => (
            <a
              key={loc.href}
              href={loc.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex flex-col px-4 py-3 hover:bg-zinc-50 transition-colors"
            >
              <span className="font-(family-name:--font-inter) text-xs tracking-widest uppercase text-black">
                {loc.city}
              </span>
              <span className="font-(family-name:--font-inter) text-[10px] text-zinc-400 mt-0.5">
                Réserver sur Planity →
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
