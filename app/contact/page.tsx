import type { Metadata } from "next";
import { FadeUp } from "@/components/AnimatedSection";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Clock, CreditCard } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact & Rendez-vous — Lymar Dermo-Esthetic · Saint-Georges-de-Didonne",
  description:
    "Prenez rendez-vous avec Anastasiia Lymar. Cabinet de maquillage permanent à Saint-Georges-de-Didonne. Réservation en ligne via Planity.",
};

export default function ContactPage() {
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
                  Contact
                </p>
                <h1 className="font-(family-name:--font-playfair) text-[2.6rem] sm:text-5xl lg:text-[4.5rem] font-bold italic text-black leading-[1.05] mb-5">
                  Prenons contact
                </h1>
                <p className="font-(family-name:--font-inter) text-sm text-zinc-500 leading-relaxed max-w-sm mb-8">
                  Réservation en ligne 24h/24 via Planity — ou envoyez-nous un message directement.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <MapPin size={14} className="text-zinc-400 shrink-0" />
                    <p className="font-(family-name:--font-inter) text-xs text-zinc-500">
                      34 Rue Henri Collignon, 17110 Saint-Georges-de-Didonne
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={14} className="text-zinc-400 shrink-0" />
                    <p className="font-(family-name:--font-inter) text-xs text-zinc-500">
                      Sur rendez-vous uniquement
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CreditCard size={14} className="text-zinc-400 shrink-0" />
                    <p className="font-(family-name:--font-inter) text-xs text-zinc-500">
                      Chèque · Espèces · Wero — CB non acceptée
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.planity.com/lymar-dermo-esthetic-17110-saint-georges-de-didonne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-(family-name:--font-inter) text-xs tracking-widest uppercase bg-black text-white px-10 py-3 hover:bg-zinc-800 transition-colors"
                >
                  Réserver sur Planity
                </a>
              </FadeUp>
            </div>

            {/* Image — h-64 on mobile, fills column on desktop */}
            <div className="relative h-64 lg:h-[calc(100svh-64px-80px)]">
              <div className="relative w-full h-full overflow-hidden bg-zinc-100">
                <Image
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=85&fit=crop"
                  alt="Cabinet Lymar Dermo-Esthetic — intérieur"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Infos + RDV */}
            <div>
              <FadeUp>
                <div className="mb-12 p-8 border border-black bg-zinc-50 text-center">
                  <p className="font-(family-name:--font-playfair) text-2xl italic text-black mb-2">
                    Réservation en ligne
                  </p>
                  <p className="font-(family-name:--font-inter) text-sm text-zinc-500 mb-6">
                    Disponible 24h/24 — choisissez votre prestation et votre créneau directement sur Planity.
                  </p>
                  <Button
                    asChild
                    className="bg-black text-white hover:bg-zinc-700 rounded-none px-8 py-3 tracking-widest uppercase text-xs font-(family-name:--font-inter) w-full"
                  >
                    <a href="https://www.planity.com/lymar-dermo-esthetic-17110-saint-georges-de-didonne" target="_blank" rel="noopener noreferrer">
                      Réserver sur Planity
                    </a>
                  </Button>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin size={18} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-(family-name:--font-inter) text-sm font-medium text-black mb-1">
                        Adresse
                      </p>
                      <p className="font-(family-name:--font-inter) text-sm text-zinc-500">
                        34 Rue Henri Collignon<br />
                        17110 Saint-Georges-de-Didonne
                      </p>
                      <a
                        href="https://maps.google.com/?q=34+Rue+Henri+Collignon,+17110+Saint-Georges-de-Didonne"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs tracking-widest uppercase font-(family-name:--font-inter) text-black border-b border-black pb-0.5 hover:text-zinc-500 hover:border-zinc-500 transition-colors mt-2 inline-block"
                      >
                        Voir sur Maps
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock size={18} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-(family-name:--font-inter) text-sm font-medium text-black mb-1">
                        Horaires
                      </p>
                      <p className="font-(family-name:--font-inter) text-sm text-zinc-500">
                        Sur rendez-vous uniquement
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CreditCard size={18} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-(family-name:--font-inter) text-sm font-medium text-black mb-1">
                        Modes de paiement
                      </p>
                      <p className="font-(family-name:--font-inter) text-sm text-zinc-500">
                        Chèque · Espèces · Virement Wero
                      </p>
                      <p className="font-(family-name:--font-inter) text-xs text-zinc-500 mt-1 italic">
                        CB non acceptée
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="mt-10 aspect-4/3 relative overflow-hidden border border-zinc-200">
                  <iframe
                    title="Localisation Lymar Dermo-Esthetic"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.0!2d-1.0036!3d45.5847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s34+Rue+Henri+Collignon%2C+17110+Saint-Georges-de-Didonne!5e0!3m2!1sfr!2sfr!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
              </FadeUp>
            </div>

            {/* Formulaire */}
            <FadeUp delay={0.15}>
              <div>
                <h2 className="font-(family-name:--font-playfair) text-2xl italic font-light text-black mb-8">
                  Envoyer un message
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs tracking-widest uppercase font-(family-name:--font-inter) text-zinc-500 mb-2 block">
                        Prénom
                      </label>
                      <Input
                        placeholder="Votre prénom"
                        className="rounded-none border-zinc-200 bg-white font-(family-name:--font-inter) text-sm focus-visible:ring-(--color-accent) focus-visible:border-black"
                      />
                    </div>
                    <div>
                      <label className="text-xs tracking-widest uppercase font-(family-name:--font-inter) text-zinc-500 mb-2 block">
                        Nom
                      </label>
                      <Input
                        placeholder="Votre nom"
                        className="rounded-none border-zinc-200 bg-white font-(family-name:--font-inter) text-sm focus-visible:ring-(--color-accent) focus-visible:border-black"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs tracking-widest uppercase font-(family-name:--font-inter) text-zinc-500 mb-2 block">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="votre@email.fr"
                      className="rounded-none border-zinc-200 bg-white font-(family-name:--font-inter) text-sm focus-visible:ring-(--color-accent) focus-visible:border-black"
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-widest uppercase font-(family-name:--font-inter) text-zinc-500 mb-2 block">
                      Message
                    </label>
                    <Textarea
                      placeholder="Votre message, la prestation souhaitée..."
                      rows={6}
                      className="rounded-none border-zinc-200 bg-white font-(family-name:--font-inter) text-sm focus-visible:ring-(--color-accent) focus-visible:border-black resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-black text-white hover:bg-zinc-700 rounded-none py-3 tracking-widest uppercase text-xs font-(family-name:--font-inter)"
                  >
                    Envoyer le message
                  </Button>
                  <p className="text-xs font-(family-name:--font-inter) text-zinc-500 text-center">
                    Pour une réservation rapide, privilégiez Planity.
                  </p>
                </form>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
