"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const prestations = [
  { label: "Sourcils", href: "/prestations/sourcils" },
  { label: "Lèvres", href: "/prestations/levres" },
  { label: "Tricopigmentation", href: "/prestations/tricopigmentation" },
  { label: "Taches de rousseur", href: "/prestations/taches-rousseur" },
  { label: "Soins cils & sourcils", href: "/prestations/soins-cils-sourcils" },
  { label: "Pigmentation correctrice", href: "/prestations/pigmentation-correctrice" },
  { label: "Reconstruction aréole", href: "/prestations/reconstruction-areole" },
];

const navLinks = [
  { label: "À propos", href: "/a-propos" },
  { label: "Galerie", href: "/galerie" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight hover:opacity-70 transition-opacity">
          <span className="font-(family-name:--font-playfair) text-xl font-light tracking-[0.25em] uppercase text-black">
            Lymar
          </span>
          <span className="font-glacial text-[9px] tracking-[0.3em] uppercase text-zinc-500">
            Dermo-Esthetic
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-(family-name:--font-glacial) text-xs tracking-widest uppercase text-zinc-500 hover:text-black data-[state=open]:text-black h-auto py-0">
                  Prestations
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-64 p-2 bg-white border border-zinc-200 shadow-sm">
                    {prestations.map((p) => (
                      <li key={p.href}>
                        <Link
                          href={p.href}
                          className="block px-4 py-2.5 text-sm font-(family-name:--font-inter) text-zinc-700 hover:text-black hover:bg-zinc-50 transition-colors"
                        >
                          {p.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs tracking-widest uppercase font-(family-name:--font-glacial) text-zinc-500 hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <Button
            asChild
            className="bg-black text-white hover:bg-zinc-800 rounded-none px-5 py-2 tracking-widest uppercase text-xs font-(family-name:--font-glacial) h-auto"
          >
            <a href="https://www.planity.com/lymar-dermo-esthetic-17110-saint-georges-de-didonne" target="_blank" rel="noopener noreferrer">
              Réserver
            </a>
          </Button>
        </nav>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            className="lg:hidden p-2 text-black"
            aria-label="Ouvrir le menu"
          >
            <Menu size={22} />
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-white border-l border-zinc-100 pt-14">
            <nav className="flex flex-col gap-1">
              <p className="px-4 py-2 text-xs tracking-widest uppercase text-zinc-400 font-(family-name:--font-glacial)">
                Prestations
              </p>
              {prestations.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 text-sm font-(family-name:--font-inter) text-zinc-700 hover:text-black transition-colors"
                >
                  {p.label}
                </Link>
              ))}
              <div className="my-3 border-t border-zinc-100" />
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 text-xs tracking-widest uppercase font-(family-name:--font-glacial) text-zinc-500 hover:text-black transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-6 px-4">
                <Button
                  asChild
                  className="w-full bg-black text-white hover:bg-zinc-800 rounded-none py-3 tracking-widest uppercase text-xs font-(family-name:--font-glacial)"
                >
                  <a
                    href="https://www.planity.com/lymar-dermo-esthetic-17110-saint-georges-de-didonne"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                  >
                    Réserver
                  </a>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
