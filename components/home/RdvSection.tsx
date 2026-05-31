import { FadeUp } from "@/components/AnimatedSection";
import BookingButtons from "@/components/BookingButtons";

export default function RdvSection() {
  return (
    <section className="py-12 lg:py-32 bg-white border-t border-zinc-100">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <FadeUp>
          <p className="text-xs tracking-[0.25em] uppercase font-(family-name:--font-inter) text-zinc-400 mb-5">
            Réservation
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="font-logo text-4xl lg:text-5xl font-semibold text-black mb-6 leading-tight">
            Prêt(e) à vous sublimer ?
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="font-(family-name:--font-inter) text-base text-zinc-500 leading-relaxed mb-10">
            Réservez votre consultation (20 €, déduits si vous confirmez votre prestation). Disponible 24h/24 en ligne via Planity — confirmation immédiate.
          </p>
        </FadeUp>

        <FadeUp delay={0.3} className="relative z-10">
          <BookingButtons className="mx-auto" />
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
