import { PLANITY_LOCATIONS } from "@/lib/site";

interface Props {
  className?: string;
  size?: "sm" | "md";
}

export default function BookingButtons({ className, size = "md" }: Props) {
  const padding = size === "sm" ? "px-7 py-2.5" : "px-10 py-4";
  return (
    <div className={`inline-grid grid-cols-1 sm:grid-cols-2 gap-3 ${className ?? ""}`}>
      {PLANITY_LOCATIONS.map((loc) => (
        <a
          key={loc.href}
          href={loc.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex flex-col items-center gap-0.5 bg-black text-white hover:bg-zinc-800 transition-colors ${padding}`}
        >
          <span className="font-glacial text-xs tracking-widest uppercase">Réserver</span>
          <span className="font-(family-name:--font-inter) text-[10px] text-zinc-400 normal-case tracking-wide">
            {loc.city}
          </span>
        </a>
      ))}
    </div>
  );
}
