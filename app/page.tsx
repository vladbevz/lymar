import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import PrestationsPreview from "@/components/home/PrestationsPreview";
import AvisSection from "@/components/home/AvisSection";
import RdvSection from "@/components/home/RdvSection";
import LocalisationSection from "@/components/home/LocalisationSection";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lymar Dermo-Esthetic — Maquillage Permanent Saint-Georges-de-Didonne",
  description:
    "Cabinet de maquillage permanent et pigmentation correctrice à Saint-Georges-de-Didonne et Beaune. Anastasiia Lymar, experte internationale. Sourcils, lèvres, yeux. RDV en ligne.",
  alternates: { canonical: SITE_URL },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <PrestationsPreview />
      <AvisSection />
      <RdvSection />
      <LocalisationSection />
    </>
  );
}
