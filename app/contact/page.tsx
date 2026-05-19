import type { Metadata } from "next";
import { FadeUp } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Clock, CreditCard } from "lucide-react";
import Image from "next/image";
import MapboxMap from "@/components/MapboxMap";

export const metadata: Metadata = {
  title: "Contact & Rendez-vous — Lymar Dermo-Esthetic · Saint-Georges-de-Didonne",
  description:
    "Prenez rendez-vous avec Anastasiia Lymar. Cabinet de maquillage permanent à Saint-Georges-de-Didonne et Beaune. Réservation en ligne via Planity.",
  alternates: { canonical: "https://lymar-dermo-esthetic.fr/contact" },
};

const PLANITY = "https://www.planity.com/lymar-dermo-esthetic-17110-saint-georges-de-didonne";

const cabinets = [
  {
    ville: "Saint-Georges-de-Didonne",
    adresse: "34 Rue Henri Collignon",
    cp: "17110",
    maps: "https://maps.google.com/?q=34+Rue+Henri+Collignon,+17110+Saint-Georges-de-Didonne",
    lng: -1.0008,
    lat: 45.6025,
    zoom: 16,
  },
  {
    ville: "Beaune",
    adresse: "3 Rue du Moulin Noizé",
    cp: "21200",
    maps: "https://maps.google.com/?q=3+Rue+du+Moulin+Noizé,+21200+Beaune",
    lng: 4.8378,
    lat: 47.0221,
    zoom: 16,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative mt-16 overflow-hidden bg-white lg:flex lg:h-[calc(100svh-64px)]">

        {/* Mobile image */}
        <div className="relative h-100 w-full lg:hidden">
          <Image src="/images/contact.webp" alt="Cabinet Lymar Dermo-Esthetic" fill priority className="object-cover object-top" />
        </div>

        {/* Left — text */}
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 w-full lg:w-1/2 shrink-0 py-10 lg:py-14 overflow-hidden">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase font-glacial text-zinc-400 mb-4">
              Contact
            </p>
            <h1 className="font-(family-name:--font-playfair) text-[2.8rem] sm:text-5xl lg:text-[4.5rem] font-light text-black leading-[1.05] max-w-lg mb-8">
              Prenons contact
            </h1>

            <div className="space-y-4 mb-10">
              {cabinets.map((c) => (
                <div key={c.ville} className="flex items-start gap-3">
                  <MapPin size={14} className="text-zinc-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-(family-name:--font-inter) text-xs font-medium text-black">
                      {c.ville}
                    </p>
                    <p className="font-(family-name:--font-inter) text-xs text-zinc-500">
                      {c.adresse}, {c.cp}
                    </p>
                  </div>
                </div>
              ))}
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

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={PLANITY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-glacial text-xs tracking-widest uppercase bg-black text-white px-10 py-3 hover:bg-zinc-800 transition-colors"
              >
                Réserver sur Planity
              </a>
              <a
                href="https://www.instagram.com/lymar.dermo.esthetic/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 group-hover:text-black transition-colors">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="font-glacial text-xs tracking-widest uppercase text-zinc-400 group-hover:text-black transition-colors">
                  Voir sur Instagram
                </span>
              </a>
            </div>
          </FadeUp>
        </div>

        {/* Right — photo */}
        <div className="hidden lg:block relative flex-1">
          <Image
            src="/images/contact.webp"
            alt="Cabinet Lymar Dermo-Esthetic"
            fill
            priority
            className="object-cover object-top"
          />
        </div>

      </section>

      {/* Cartes */}
      <section className="py-12 lg:py-24 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase font-glacial text-zinc-400 mb-3">
              Nos cabinets
            </p>
            <h2 className="font-(family-name:--font-playfair) text-4xl font-semibold text-black mb-14">
              Deux adresses, une expertise
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cabinets.map((c, i) => (
              <FadeUp key={c.ville} delay={i * 0.15}>
                <div className="border border-zinc-100 overflow-hidden">
                  <div className="aspect-video relative bg-zinc-100">
                    <MapboxMap
                      lng={c.lng}
                      lat={c.lat}
                      zoom={c.zoom}
                      alt={`Localisation ${c.ville}`}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-(family-name:--font-playfair) text-xl font-bold text-black mb-3">
                      {c.ville}
                    </h3>
                    <div className="flex items-start gap-3 mb-4">
                      <MapPin size={15} className="text-zinc-400 mt-0.5 shrink-0" />
                      <p className="font-(family-name:--font-inter) text-sm text-zinc-600">
                        {c.adresse}<br />{c.cp} {c.ville}
                      </p>
                    </div>
                    <a
                      href={c.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-glacial text-xs tracking-widest uppercase text-black border-b border-black pb-0.5 hover:opacity-50 transition-opacity"
                    >
                      Voir sur Google Maps
                    </a>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-12 lg:py-24 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase font-glacial text-zinc-400 mb-3">
              Message
            </p>
            <h2 className="font-(family-name:--font-playfair) text-4xl font-light text-black mb-12">
              Envoyer un message
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs tracking-widest uppercase font-glacial text-zinc-500 mb-2 block">
                    Prénom
                  </label>
                  <Input
                    placeholder="Votre prénom"
                    className="rounded-none border-zinc-200 bg-white font-(family-name:--font-inter) text-sm focus-visible:ring-0 focus-visible:border-black"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase font-glacial text-zinc-500 mb-2 block">
                    Nom
                  </label>
                  <Input
                    placeholder="Votre nom"
                    className="rounded-none border-zinc-200 bg-white font-(family-name:--font-inter) text-sm focus-visible:ring-0 focus-visible:border-black"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase font-glacial text-zinc-500 mb-2 block">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="votre@email.fr"
                  className="rounded-none border-zinc-200 bg-white font-(family-name:--font-inter) text-sm focus-visible:ring-0 focus-visible:border-black"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase font-glacial text-zinc-500 mb-2 block">
                  Message
                </label>
                <Textarea
                  placeholder="Votre message, la prestation souhaitée..."
                  rows={6}
                  className="rounded-none border-zinc-200 bg-white font-(family-name:--font-inter) text-sm focus-visible:ring-0 focus-visible:border-black resize-none"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button
                  type="submit"
                  className="w-full sm:w-auto bg-black text-white hover:bg-zinc-700 rounded-none px-12 py-3 tracking-widest uppercase text-xs font-glacial"
                >
                  Envoyer
                </Button>
                <p className="font-(family-name:--font-inter) text-xs text-zinc-400">
                  Pour une réservation rapide, privilégiez{" "}
                  <a href={PLANITY} target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">
                    Planity
                  </a>.
                </p>
              </div>
            </form>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
