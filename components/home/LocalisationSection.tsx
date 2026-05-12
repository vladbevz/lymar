import { FadeUp } from "@/components/AnimatedSection";
import { MapPin } from "lucide-react";

const cabinets = [
  {
    ville: "Saint-Georges-de-Didonne",
    adresse: "34 Rue Henri Collignon",
    cp: "17110",
    horaires: "Lun–Sam 9h–19h",
    maps: "https://maps.google.com/?q=34+Rue+Henri+Collignon,+17110+Saint-Georges-de-Didonne",
    embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.0!2d-1.0036!3d45.5847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s34+Rue+Henri+Collignon%2C+17110+Saint-Georges-de-Didonne!5e0!3m2!1sfr!2sfr!4v1",
  },
  {
    ville: "Beaune",
    adresse: "Adresse à confirmer",
    cp: "21200",
    horaires: "Sur rendez-vous",
    maps: "https://maps.google.com/?q=Beaune+21200",
    embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43063.0!2d4.8357!3d47.0264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f29b5b1e7c8c6b%3A0x40c34dc02d54e37!2sBeaune!5e0!3m2!1sfr!2sfr!4v1",
  },
];

export default function LocalisationSection() {
  return (
    <section className="py-24 lg:py-32 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <p className="text-xs tracking-[0.25em] uppercase font-(family-name:--font-inter) text-zinc-400 mb-3">
            Nos cabinets
          </p>
          <h2 className="font-(family-name:--font-playfair) text-4xl font-bold italic text-black mb-14">
            Deux adresses, une expertise
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cabinets.map((c, i) => (
            <FadeUp key={c.ville} delay={i * 0.15}>
              <div className="border border-zinc-100">
                <div className="aspect-video relative overflow-hidden bg-zinc-100">
                  <iframe
                    title={`Localisation ${c.ville}`}
                    src={c.embed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 grayscale"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-(family-name:--font-playfair) text-xl font-bold text-black mb-3">
                    {c.ville}
                  </h3>
                  <div className="flex items-start gap-3 mb-2">
                    <MapPin size={15} className="text-zinc-400 mt-0.5 shrink-0" />
                    <p className="font-(family-name:--font-inter) text-sm text-zinc-600">
                      {c.adresse}<br />{c.cp} {c.ville}
                    </p>
                  </div>
                  <p className="font-(family-name:--font-inter) text-xs text-zinc-400 mb-4 ml-6">
                    {c.horaires}
                  </p>
                  <a
                    href={c.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-(family-name:--font-inter) text-xs tracking-widest uppercase text-black border-b border-black pb-0.5 hover:opacity-50 transition-opacity"
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
  );
}
