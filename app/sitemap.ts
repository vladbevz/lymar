import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: SITE_URL,                                         lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${SITE_URL}/prestations`,                        lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/contact`,                            lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/prestations/sourcils`,               lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/prestations/levres`,                 lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/prestations/tricopigmentation`,      lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/prestations/taches-rousseur`,        lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/prestations/soins-cils-sourcils`,    lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/prestations/pigmentation-correctrice`,lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/prestations/reconstruction-areole`,  lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/prestations/yeux`,                   lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/galerie`,                            lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/a-propos`,                           lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/mentions-legales`,                   lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${SITE_URL}/politique-confidentialite`,          lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
  ];
}
