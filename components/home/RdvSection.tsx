import { FadeUp } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

const PLANITY = "https://www.planity.com/lymar-dermo-esthetic-17110-saint-georges-de-didonne";

export default function RdvSection() {
  return (
    <section className="py-24 lg:py-32 bg-white border-t border-zinc-100">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <FadeUp>
          <p className="text-xs tracking-[0.25em] uppercase font-(family-name:--font-inter) text-zinc-400 mb-5">
            Réservation
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="font-(family-name:--font-playfair) text-4xl lg:text-5xl font-semibold text-black mb-6 leading-tight">
            Prête à vous sublimer ?
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="font-(family-name:--font-inter) text-base text-zinc-500 leading-relaxed mb-10">
            Réservez votre consultation (20 €, déduits si vous confirmez votre prestation). Disponible 24h/24 en ligne via Planity — confirmation immédiate.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <Button
            asChild
            className="bg-black text-white hover:bg-zinc-800 rounded-none px-12 py-4 h-auto tracking-widest uppercase text-xs font-(family-name:--font-inter)"
          >
            <a href={PLANITY} target="_blank" rel="noopener noreferrer">
              Réserver sur Planity
            </a>
          </Button>
        </FadeUp>

        <FadeUp delay={0.4}>
          <p className="mt-5 font-(family-name:--font-inter) text-xs text-zinc-400">
            Paiement : chèque · espèces · virement Wero — CB non acceptée
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
