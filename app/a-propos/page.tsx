import type { Metadata } from "next";
import Image from "next/image";
import { FadeUp } from "@/components/AnimatedSection";
import { Separator } from "@/components/ui/separator";
import RdvSection from "@/components/home/RdvSection";

export const metadata: Metadata = {
  title: "À propos — Anastasiia Lymar · Maquillage Permanent",
  description:
    "Découvrez Anastasiia Lymar, experte en maquillage permanent formée à l'international. Précision, personnalisation et résultats naturels à Saint-Georges-de-Didonne.",
  alternates: { canonical: "https://lymar-dermo-esthetic.fr/a-propos" },
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
    texte: "Le plus beau maquillage permanent est celui qu’on ne remarque pas",
  },
];

export default function AProposPage() {
  return (
    <>
      {/* Hero — split layout */}
      <section className="relative mt-16 overflow-hidden bg-white lg:flex lg:h-[calc(100svh-64px)]">
        {/* Mobile image */}
        <div className="relative h-100 w-full lg:hidden">
          <Image src="/images/apropos1.webp" alt="Portrait d'Anastasiia Lymar" fill priority className="object-cover object-[center_35%]" />
        </div>
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 w-full lg:w-1/2 shrink-0 py-10 lg:py-14 overflow-hidden">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase font-(family-name:--font-inter) text-zinc-400 mb-4">
              À propos
            </p>
            <h1 className="font-logo text-[2.8rem] sm:text-5xl lg:text-[4.5rem] font-light text-black leading-[1.05] max-w-lg mb-5">
              Anastasiia Lymar
            </h1>
            <p className="font-(family-name:--font-inter) text-sm text-zinc-500 leading-relaxed max-w-sm mb-6">
              Experte internationale en maquillage permanent et pigmentation correctrice. Deux cabinets : Saint-Georges-de-Didonne et Beaune.
            </p>
            <a
              href="https://www.instagram.com/lymar.dermo.esthetic/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 group w-fit"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 group-hover:text-black transition-colors">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="font-(family-name:--font-inter) text-xs tracking-widest uppercase text-zinc-400 group-hover:text-black transition-colors">
                Voir sur Instagram
              </span>
            </a>
          </FadeUp>
        </div>
        <div className="hidden lg:block relative flex-1">
          <Image
            src="/images/apropos1.webp"
            alt="Portrait d'Anastasiia Lymar"
            fill
            priority
            className="object-cover object-[center_35%]"
          />
        </div>
      </section>

      {/* Portrait + Histoire */}
      <section className="py-8 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
            <FadeUp>
              <div className="relative aspect-3/4 w-full max-w-sm">
                <Image
                  src="/images/apropos2.webp"
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
                <p className="font-logo text-2xl text-black mb-8 leading-relaxed">
                  &ldquo;Chaque visage est une toile unique. Mon rôle est de révéler sa beauté propre, avec précision et bienveillance.&rdquo;
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <Separator className="w-12 bg-black mb-8" />
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="space-y-5 font-(family-name:--font-inter) text-base text-zinc-500 leading-relaxed">
                  <p>
                    Passionnée par l&apos;art du maquillage permanent depuis plus de dix ans, Anastasiia Lymar a forgé son expertise auprès des maîtres les plus reconnus en Europe.
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
      <section className="py-12 lg:py-24 bg-warm">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <p className="text-xs tracking-[0.3em] uppercase font-(family-name:--font-inter) text-zinc-500 mb-4">
              Formation
            </p>
            <h2 className="font-logo text-4xl font-light text-black mb-4">
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
      <section className="py-12 lg:py-24 bg-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase font-(family-name:--font-inter) text-zinc-500 mb-4">
                Mes valeurs
              </p>
              <h2 className="font-logo text-4xl font-light text-black">
                Ce qui guide mon travail
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valeurs.map((v, i) => (
              <FadeUp key={v.titre} delay={i * 0.15}>
                <div className="text-center px-6">
                  <div className="w-px h-12 bg-black mx-auto mb-6" />
                  <h3 className="font-logo text-2xl text-black mb-4">
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
