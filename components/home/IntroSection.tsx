import Link from "next/link";
import { FadeUp } from "@/components/AnimatedSection";

export default function IntroSection() {
  return (
    <section className="py-24 lg:py-32 bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase font-(family-name:--font-glacial) text-zinc-400 mt-2">
              Le cabinet
            </p>
          </FadeUp>

          <div>
            <FadeUp delay={0.1}>
              <h2 className="font-(family-name:--font-playfair) text-4xl lg:text-5xl font-semibold leading-tight text-black mb-8">
                Un regard expert au service de votre beauté naturelle
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="font-(family-name:--font-inter) text-base text-zinc-500 leading-relaxed mb-6">
                Formée auprès des meilleurs experts internationaux, Anastasiia Lymar vous accueille dans des cabinets intimistes à Saint-Georges-de-Didonne et à Beaune. Chaque intervention est pensée sur-mesure : formes, pigments, technique — tout est choisi pour sublimer ce qui vous est propre.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 font-(family-name:--font-glacial) text-xs tracking-widest uppercase text-black border-b border-black pb-0.5 hover:opacity-50 transition-opacity"
              >
                En savoir plus sur Anastasiia
              </Link>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
