import { FadeUp } from "@/components/AnimatedSection";
import { MapPin } from "lucide-react";
import MapboxMap from "@/components/MapboxMap";

const cabinets = [
  {
    ville: "Saint-Georges-de-Didonne",
    adresse: "34 Rue Henri Collignon",
    cp: "17110",
    horaires: "Sur rendez-vous uniquement",
    maps: "https://maps.google.com/?q=34+Rue+Henri+Collignon,+17110+Saint-Georges-de-Didonne",
    lng: -1.0008,
    lat: 45.6025,
    zoom: 16,
  },
  {
    ville: "Beaune",
    adresse: "3 Rue du Moulin Noizé",
    cp: "21200",
    horaires: "Sur rendez-vous uniquement",
    maps: "https://maps.google.com/?q=3+Rue+du+Moulin+Noizé,+21200+Beaune",
    lng: 4.8378,
    lat: 47.0221,
    zoom: 16,
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
