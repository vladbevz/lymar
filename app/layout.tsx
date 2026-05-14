import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

const playfair = Cormorant_Garamond({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Lymar Dermo-Esthetic — Maquillage Permanent Saint-Georges-de-Didonne",
  description:
    "Cabinet de maquillage permanent et pigmentation correctrice à Saint-Georges-de-Didonne et Beaune. Anastasiia Lymar, experte internationale. Sourcils, lèvres, yeux. RDV en ligne.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{if(!sessionStorage.getItem('lymar_loaded'))document.documentElement.classList.add('lymar-loading')}catch(e){}` }} />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#0A0A0A]">
        <Loader />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
