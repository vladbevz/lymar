import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import PrestationsPreview from "@/components/home/PrestationsPreview";
import AvisSection from "@/components/home/AvisSection";
import RdvSection from "@/components/home/RdvSection";
import LocalisationSection from "@/components/home/LocalisationSection";

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
