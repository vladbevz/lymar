import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CookieBanner from "@/components/CookieBanner";
import { JsonLd } from "@/components/JsonLd";
import Script from "next/script";
import { SITE_URL, SITE_NAME, PLANITY, INSTAGRAM } from "@/lib/site";

const inter = Montserrat({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const description =
  "Cabinet de maquillage permanent et pigmentation correctrice à Saint-Georges-de-Didonne et Beaune. Anastasiia Lymar, experte internationale. Sourcils, lèvres, yeux. RDV en ligne.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Maquillage Permanent Saint-Georges-de-Didonne`,
    template: `%s — ${SITE_NAME}`,
  },
  description,
  keywords: [
    "maquillage permanent",
    "microblading",
    "microshading",
    "sourcils permanents",
    "lèvres permanentes",
    "pigmentation correctrice",
    "tricopigmentation",
    "Saint-Georges-de-Didonne",
    "Beaune",
    "Anastasiia Lymar",
    "Charente-Maritime",
  ],
  authors: [{ name: "Anastasiia Lymar", url: `${SITE_URL}/a-propos` }],
  creator: "Anastasiia Lymar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Maquillage Permanent Saint-Georges-de-Didonne`,
    description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${SITE_NAME} — Maquillage Permanent` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Maquillage Permanent`,
    description,
    images: ["/opengraph-image"],
  },
  alternates: { canonical: SITE_URL },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  description,
  url: SITE_URL,
  image: `${SITE_URL}/images/hero.webp`,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "34 Rue Henri Collignon",
    addressLocality: "Saint-Georges-de-Didonne",
    postalCode: "17110",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.6025,
    longitude: -1.0008,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "200",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [INSTAGRAM, PLANITY],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anastasiia Lymar",
  jobTitle: "Experte en maquillage permanent et pigmentation correctrice",
  description:
    "Praticienne internationale formée auprès des meilleurs experts européens en maquillage permanent.",
  url: `${SITE_URL}/a-propos`,
  worksFor: { "@type": "BeautySalon", "@id": `${SITE_URL}/#business` },
  sameAs: [INSTAGRAM],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        {/* Preload above-fold fonts to unblock LCP */}
        <link
          rel="preload"
          href="/fonts/font (1)/BauerBodoniStd-Roman.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Preconnect to Clarity CDN (saves ~620ms on first load) */}
        <link rel="preconnect" href="https://scripts.clarity.ms" />
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={personSchema} />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#0A0A0A]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
        <CookieBanner />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-7LYDD40DHC" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7LYDD40DHC');
        `}</Script>
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){if(c[a])return;c[a]=function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","x3xl18eooc");`,
          }}
        />
      </body>
    </html>
  );
}
