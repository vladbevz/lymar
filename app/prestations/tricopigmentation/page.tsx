import type { Metadata } from "next";
import PrestaPageLayout from "@/components/PrestaPageLayout";

export const metadata: Metadata = {
  title: "Tricopigmentation — Micropigmentation du cuir chevelu · Lymar Dermo-Esthetic",
  description: "Tricopigmentation (micropigmentation du cuir chevelu) à Saint-Georges-de-Didonne. Densité et uniformité retrouvées. Cabinet Anastasiia Lymar.",
  alternates: { canonical: "https://lymar-dermo-esthetic.fr/prestations/tricopigmentation" },
};

export default function TricopigmentationPage() {
  return (
    <PrestaPageLayout
      slug="tricopigmentation"
      breadcrumb="Prestations · Tricopigmentation"
      titre="Tricopigmentation"
      sousTitre="Micropigmentation du cuir chevelu pour redonner densité et uniformité aux zones clairsemées."
      heroImage="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=900&q=85&fit=crop"
      heroImageAlt="Tricopigmentation — micropigmentation cuir chevelu"
      intro="La tricopigmentation reproduit l'apparence de poils rasés sur le cuir chevelu par des micro-points de pigment. Elle est indiquée pour les zones de calvitie, de clairsemement ou après certaines interventions médicales. Le traitement se déroule en 1 à 3 séances selon les zones à traiter."
      services={[
        { nom: "1 zone — 1 séance", duree: "2h", prix: "350 €" },
        { nom: "2 zones — 2 séances", duree: "2h", prix: "700 €" },
        { nom: "3 zones — 3 séances", duree: "2h", prix: "1 050 €" },
      ]}
    />
  );
}
