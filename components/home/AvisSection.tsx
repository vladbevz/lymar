import { StaggerWrapper, StaggerItem, FadeUp } from "@/components/AnimatedSection";

const avis = [
  {
    nom: "Sophie M.",
    service: "Microblading sourcils",
    texte: "Anastasiia est une véritable artiste. Mes sourcils ont été entièrement redessinés, le résultat est naturel et précis. Je recommande vivement !",
  },
  {
    nom: "Clara D.",
    service: "Candy Lips",
    texte: "Un cadre magnifique, une praticienne à l'écoute et un résultat qui dépasse mes attentes. Mes lèvres sont parfaitement définies, c'est exactement ce que je cherchais.",
  },
  {
    nom: "Isabelle R.",
    service: "Correction cicatrice",
    texte: "Professionnalisme, douceur et talent. Anastasiia prend le temps d'expliquer chaque étape. Résultat bluffant sur ma cicatrice de blépharoplastie.",
  },
];

export default function AvisSection() {
  return (
    <section className="py-24 lg:py-32 bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="flex items-center gap-6 mb-14">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase font-(family-name:--font-inter) text-zinc-400 mb-3">
                Avis clients
              </p>
              <div className="flex items-center gap-3">
                <span className="font-(family-name:--font-playfair) text-5xl font-bold text-black">5.0</span>
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-black text-sm">★</span>
                    ))}
                  </div>
                  <p className="font-(family-name:--font-inter) text-xs text-zinc-500">77 avis Google & Planity</p>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        <StaggerWrapper className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {avis.map((a) => (
            <StaggerItem key={a.nom}>
              <div className="bg-white border border-zinc-100 p-8 h-full">
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-black text-sm">★</span>
                  ))}
                </div>
                <p className="font-(family-name:--font-playfair) text-lg italic text-black leading-relaxed mb-6">
                  &ldquo;{a.texte}&rdquo;
                </p>
                <div className="border-t border-zinc-100 pt-4">
                  <p className="font-(family-name:--font-inter) text-sm font-medium text-black">{a.nom}</p>
                  <p className="font-(family-name:--font-inter) text-xs text-zinc-500 mt-0.5">{a.service}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerWrapper>
      </div>
    </section>
  );
}
