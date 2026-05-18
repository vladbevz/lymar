import Link from "next/link";
import { MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-(family-name:--font-playfair) text-xl font-light tracking-[0.15em] uppercase text-white mb-3">
              Lymar Dermo-Esthetic
            </h3>
            <p className="text-xs font-(family-name:--font-inter) text-zinc-500 leading-relaxed">
              Maquillage permanent & pigmentation correctrice. Experte internationale.
            </p>
          </div>

          {/* Cabinet 1 */}
          <div>
            <h4 className="font-(family-name:--font-glacial) text-xs tracking-widest uppercase text-zinc-500 mb-4">
              Saint-Georges-de-Didonne
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin size={13} className="text-zinc-600 mt-0.5 shrink-0" />
                <p className="font-(family-name:--font-inter) text-xs text-zinc-400">
                  34 Rue Henri Collignon<br />17110 Saint-Georges-de-Didonne
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={13} className="text-zinc-600 shrink-0" />
                <p className="font-(family-name:--font-inter) text-xs text-zinc-400">Lun–Sam 9h–19h</p>
              </div>
            </div>
          </div>

          {/* Cabinet 2 */}
          <div>
            <h4 className="font-(family-name:--font-glacial) text-xs tracking-widest uppercase text-zinc-500 mb-4">
              Beaune
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin size={13} className="text-zinc-600 mt-0.5 shrink-0" />
                <p className="font-(family-name:--font-inter) text-xs text-zinc-400">
                  3 Rue du Moulin Noizé<br />21200 Beaune
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={13} className="text-zinc-600 shrink-0" />
                <p className="font-(family-name:--font-inter) text-xs text-zinc-400">Sur rendez-vous</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-(family-name:--font-glacial) text-xs tracking-widest uppercase text-zinc-500 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { label: "À propos", href: "/a-propos" },
                { label: "Prestations", href: "/prestations" },
                { label: "Galerie", href: "/galerie" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-(family-name:--font-inter) text-xs text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="font-(family-name:--font-inter) text-xs text-zinc-600 mt-4 leading-relaxed">
              Paiement : chèque · espèces · Wero
            </p>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-(family-name:--font-inter) text-xs text-zinc-600">
            © {new Date().getFullYear()} Lymar Dermo-Esthetic · Anastasiia Lymar
          </p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="font-(family-name:--font-inter) text-xs text-zinc-600 hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="font-(family-name:--font-inter) text-xs text-zinc-600 hover:text-white transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
