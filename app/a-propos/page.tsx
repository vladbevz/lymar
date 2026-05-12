import type { Metadata } from "next";
import Image from "next/image";
import { FadeUp } from "@/components/AnimatedSection";
import { Separator } from "@/components/ui/separator";
import RdvSection from "@/components/home/RdvSection";

export const metadata: Metadata = {
  title: "À propos — Anastasiia Lymar · Maquillage Permanent",
  description:
    "Découvrez Anastasiia Lymar, experte en maquillage permanent formée à l'international. Précision, personnalisation et résultats naturels à Saint-Georges-de-Didonne.",
};

const valeurs = [
  {
    titre: "Précision",
    texte: "Chaque trait est pensé, chaque nuance choisie. La perfection est dans le détail.",
  },
  {
    titre: "Personnalisation",
    texte: "Aucun visage ne se ressemble. Chaque intervention est conçue sur-mesure pour vous.",
  },
  {
    titre: "Naturel",
    texte: "Le maquillage permanent doit sublimer, jamais trahir. Le résultat ? On ne sait pas que c'est fait.",
  },
];

export default function AProposPage() {
  return (
    <>
      {/* Hero — stack on mobile, 2-col on desktop */}
      <section className="relative mt-16 bg-white border-b border-zinc-100 overflow-hidden lg:h-[calc(100svh-64px)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full lg:h-full lg:flex lg:items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 lg:items-center w-full">

            {/* Text */}
            <div className="pt-14 pb-8 lg:py-0">
              <FadeUp>
                <p className="text-xs tracking-[0.25em] uppercase font-(family-name:--font-inter) text-zinc-400 mb-4">
                  À propos
                </p>
                <h1 className="font-(family-name:--font-playfair) text-[2.6rem] sm:text-5xl lg:text-[4.5rem] font-bold italic text-black leading-[1.05] max-w-lg mb-5">
                  Anastasiia Lymar
                </h1>
                <p className="font-(family-name:--font-inter) text-sm text-zinc-500 leading-relaxed max-w-sm mb-6">
                  Experte internationale en maquillage permanent et pigmentation correctrice. Deux cabinets : Saint-Georges-de-Didonne et Beaune.
                </p>
                <p className="font-(family-name:--font-playfair) text-lg italic text-zinc-600 max-w-sm leading-relaxed">
                  &ldquo;Chaque visage est une toile unique. Mon rôle est de révéler sa beauté propre.&rdquo;
                </p>
              </FadeUp>
            </div>

            {/* Image — h-64 on mobile, fills column on desktop */}
            <div className="relative h-64 lg:h-[calc(100svh-64px-80px)]">
              <div className="relative w-full h-full overflow-hidden bg-zinc-100">
                <Image
                  src="https://images.unsplash.com/photo-1487412840181-f6f0af1f5427?w=900&q=85&fit=crop&crop=faces"
                  alt="Portrait d'Anastasiia Lymar, praticienne en maquillage permanent"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portrait + Histoire */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <FadeUp>
              <div className="relative aspect-3/4 w-full max-w-md">
                <Image
                  src="https://images.unsplash.com/photo-1487412840181-f6f0af1f5427?w=600&q=85&fit=crop&crop=faces"
                  alt="Portrait d'Anastasiia Lymar, praticienne en maquillage permanent"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 border border-zinc-200" />
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-black opacity-25 -z-10" />
              </div>
            </FadeUp>

            <div>
              <FadeUp delay={0.1}>
                <p className="font-(family-name:--font-playfair) text-2xl italic text-black mb-8 leading-relaxed">
                  &ldquo;Chaque visage est une toile unique. Mon rôle est de révéler sa beauté propre, avec précision et bienveillance.&rdquo;
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <Separator className="w-12 bg-black mb-8" />
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="space-y-5 font-(family-name:--font-inter) text-base text-zinc-500 leading-relaxed">
                  <p>
                    Passionnée par l&apos;art du maquillage permanent depuis plus de dix ans, Anastasiia Lymar a forgé son expertise auprès des maîtres les plus reconnus en Europe et en Asie.
                  </p>
                  <p>
                    Son approche est celle d&apos;une artiste autant que d&apos;une technicienne : elle analyse la morphologie de chaque visage, étudie les teintes naturelles de la peau et propose des formes qui harmonisent les traits plutôt que de les imposer.
                  </p>
                  <p>
                    Installée à Saint-Georges-de-Didonne, elle accueille sa clientèle dans un cabinet chaleureux et confidentiel, pensé pour que vous vous sentiez entre de bonnes mains dès le premier instant.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Formation */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <p className="text-xs tracking-[0.3em] uppercase font-(family-name:--font-inter) text-zinc-500 mb-4">
              Formation
            </p>
            <h2 className="font-(family-name:--font-playfair) text-4xl italic font-light text-black mb-4">
              Une expertise forgée à l&apos;international
            </h2>
            <Separator className="w-12 mx-auto bg-black mb-10" />
            <p className="font-(family-name:--font-inter) text-base text-zinc-500 leading-relaxed">
              Certifiée par les plus grands noms du maquillage permanent en Europe, Anastasiia se forme continuellement aux nouvelles techniques et aux innovations pigmentaires afin d&apos;offrir à ses clients les résultats les plus sûrs et les plus esthétiques.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase font-(family-name:--font-inter) text-zinc-500 mb-4">
                Mes valeurs
              </p>
              <h2 className="font-(family-name:--font-playfair) text-4xl italic font-light text-black">
                Ce qui guide mon travail
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valeurs.map((v, i) => (
              <FadeUp key={v.titre} delay={i * 0.15}>
                <div className="text-center px-6">
                  <div className="w-px h-12 bg-black mx-auto mb-6" />
                  <h3 className="font-(family-name:--font-playfair) text-2xl italic text-black mb-4">
                    {v.titre}
                  </h3>
                  <p className="font-(family-name:--font-inter) text-sm text-zinc-500 leading-relaxed">
                    {v.texte}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <RdvSection />
    </>
  );
}
