# CLAUDE.md — Lymar Dermo-Esthetic
# Projet : Site vitrine — AtelierCode x Lymar Dermo-Esthetic

---

## 👤 Le client

**LYMAR DERMO-ESTHETIC**
**Praticienne** : Anastasiia Lymar
**Adresse** : 34 Rue Henri Collignon, 17110 Saint-Georges-de-Didonne (Charente-Maritime)
**Spécialité** : Maquillage permanent & pigmentation correctrice
**Note Google/Planity** : ⭐ 5.0 / 77 avis — clientèle très satisfaite
**Prise de RDV** : Via Planity (lien à intégrer)
**Paiement** : Chèque, espèces, virement Wero — CB non acceptée (à mentionner clairement)

### Positionnement
Cabinet intimiste et haut de gamme, tenu par une seule praticienne.
Anastasiia s'est formée auprès des meilleurs experts internationaux.
Valeurs : précision, personnalisation, résultats naturels, cadre apaisant.

---

## 🛎️ Prestations à mettre en avant

### Maquillage permanent
| Prestation | Durée | Prix |
|---|---|---|
| Consultation personnalisée | 30 min | 20 € (déduit si RDV confirmé) |
| Sourcils — effet poil à poil (microblading) | ~2h | À confirmer |
| Sourcils — effet poudré (microshading) | ~2h | À confirmer |
| Lèvres dégradé (Candy Lips) + 1ère retouche | 2h | 300 € |
| Lèvres effet aquarelle + 1ère retouche | 2h | 300 € |
| Eyeliner / Lash Liner | À confirmer | À confirmer |

### Pigmentation correctrice
- Correction de cicatrices
- Correction de vergetures
- Autres corrections pigmentaires sur mesure

> ⚠️ Les prix exacts et la liste complète des prestations sont à confirmer avec Anastasiia.
> Ne pas inventer de prix — utiliser des placeholders si besoin.

---

## 🎨 Direction artistique

### Palette couleurs
```css
:root {
  --color-bg: #FAF7F4;           /* Blanc cassé chaud — base du site */
  --color-text: #1C1C1C;         /* Presque noir — lisibilité maximale */
  --color-accent: #C9A96E;       /* Or rose / champagne — luxe discret */
  --color-accent-light: #E8D5B7; /* Accent clair pour fonds */
  --color-muted: #8A7B6E;        /* Taupe — textes secondaires */
  --color-surface: #F0EBE3;      /* Surface cards / sections alternées */
}
```

**Ne jamais utiliser** : violet, bleu vif, vert, couleurs froides. Ce cabinet est chaleur, douceur, féminité.

### Typographie
- **Titre principal (H1)** : `Cormorant Garamond` — élégance, luxe, féminin
- **Sous-titres (H2, H3)** : `Cormorant Garamond` italic ou `Raleway` light
- **Corps de texte** : `Raleway` Regular 400 — lisible, aéré
- **Accent / citation** : `Cormorant Garamond` italic, grande taille, couleur accent

```tsx
// next/font import
import { Cormorant_Garamond, Raleway } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});
```

### Stack technique
- **Framework** : Next.js 15 (App Router)
- **Styling** : Tailwind CSS
- **Composants UI** : shadcn/ui — initialiser en début de projet :
  ```bash
  npx shadcn@latest init
  ```
- **Animations** : Framer Motion
- **Icons** : lucide-react

### Composants shadcn/ui à utiliser

| Composant | Usage dans ce projet |
|---|---|
| `Button` | Tous les CTA "Prendre RDV", boutons formulaire |
| `Card` | Cards prestations, cards avis clients |
| `Badge` | Tags "Nouveau", "Inclus retouche", prix |
| `Separator` | Séparateurs fins entre sections |
| `NavigationMenu` | Menu desktop avec dropdown Prestations |
| `Sheet` | Menu burger mobile |
| `Dialog` | Lightbox galerie avant/après |
| `Form` + `Input` + `Textarea` | Formulaire de contact |
| `Accordion` | FAQ sur les pages prestations |

> Toujours customiser les composants shadcn avec la palette du projet (var CSS) —
> ne jamais laisser les couleurs par défaut (bleu/gris shadcn).

```tsx
// Exemple : Button customisé accent or
<Button
  className="bg-[var(--color-accent)] text-white hover:bg-[var(--color-muted)] rounded-none px-8 py-3 tracking-widest uppercase text-sm"
>
  Prendre rendez-vous
</Button>
```

---

### Ambiance visuelle
- **Style général** : Luxe doux, spa haut de gamme, beauté française
- **Beaucoup d'espace blanc** (ou blanc cassé) — jamais surchargé
- **Photos grandes format** — avant/après sourcils, ambiance cabinet, portrait Anastasiia
- **Lignes fines** comme séparateurs — jamais de blocs lourds
- Shadows très légères : `box-shadow: 0 2px 20px rgba(0,0,0,0.06)` maximum

---

## ✨ Animations Framer Motion

### Règles pour ce projet
- **Subtiles et lentes** — ce n'est pas un site SaaS. Durée : 0.7s–1s
- **Pas de bounce, pas d'élastique** — ease `[0.25, 0.1, 0.25, 1]` ou `easeOut`
- **Scroll reveal** sur chaque section — `whileInView`, `once: true`

```tsx
// Pattern standard pour ce projet
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }
};

// Stagger pour listes de prestations
const staggerContainer = {
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};
```

---

## 📐 Structure du site (multi-page)

### Architecture Next.js App Router

```
app/
  layout.tsx              ← Header + Footer globaux
  page.tsx                ← Accueil
  a-propos/
    page.tsx
  prestations/
    page.tsx              ← Vue d'ensemble toutes prestations
    sourcils/
      page.tsx            ← SEO : "microblading Saint-Georges-de-Didonne"
    levres/
      page.tsx            ← SEO : "maquillage permanent lèvres Royan"
    yeux/
      page.tsx            ← SEO : "eyeliner permanent Charente-Maritime"
    pigmentation-correctrice/
      page.tsx            ← SEO : "pigmentation correctrice cicatrices"
  galerie/
    page.tsx
  contact/
    page.tsx
```

---

### Contenu par page

**`/` — Accueil**
- Hero plein écran : titre fort + photo + 2 CTA
- Introduction courte (3 lignes) + lien → À propos
- Aperçu des 4 catégories de prestations (cards cliquables)
- 3 avis clients mis en avant + note 5.0
- Section "Prendre RDV" avec lien Planity
- Localisation (ville + lien Google Maps)

**`/a-propos`**
- Portrait Anastasiia + histoire personnelle
- Formation internationale
- Valeurs : précision, personnalisation, résultats naturels
- Photo du cabinet
- Citation signature (Cormorant italic)

**`/prestations`**
- Vue d'ensemble : 4 grandes catégories avec cards
- Chaque card → lien vers la page dédiée

**`/prestations/sourcils`**
- Titre H1 optimisé SEO : "Maquillage permanent sourcils à Saint-Georges-de-Didonne"
- Description détaillée microblading + microshading
- Avant/après photos (galerie)
- Prix + durée + infos retouche
- FAQ spécifique sourcils
- CTA Planity

**`/prestations/levres`**
- H1 : "Maquillage permanent lèvres — Candy Lips & Aquarelle"
- Candy Lips vs Aquarelle : explication visuelle
- Prix : 300 € + retouche incluse
- Infos herpès (important — déjà mentionné sur Planity)
- Avant/après + CTA

**`/prestations/yeux`**
- H1 : "Eyeliner permanent — Lash Liner & Cat Eyes"
- Techniques disponibles
- Avant/après + prix + CTA

**`/prestations/pigmentation-correctrice`**
- H1 : "Pigmentation correctrice — Cicatrices & Vergetures"
- Explication de la technique
- Cas traités : cicatrices, vergetures, corrections
- Avant/après + CTA

**`/galerie`**
- Grid masonry toutes catégories
- Filtres : Sourcils | Lèvres | Yeux | Corrections
- Lightbox au clic

**`/contact`**
- Bouton Planity principal (réservation)
- Formulaire : nom, email, message
- Adresse : 34 Rue Henri Collignon, 17110 Saint-Georges-de-Didonne
- Horaires (à confirmer)
- Paiement : chèque, espèces, Wero — CB non acceptée
- Google Maps embed

---

### Navigation (Header)
```
Logo | Prestations ▾ | À propos | Galerie | Contact | [Prendre RDV]
                ↓
     Sourcils · Lèvres · Yeux · Pigmentation correctrice
```

---

## 🚫 Interdictions absolues pour ce projet

- Pas de couleurs vives / néon / dégradés flashy
- Pas de style "médical" (blanc clinique froid, bleu hôpital)
- Pas de stock photos génériques (femmes souriantes Shutterstock)
- Pas d'animations rapides ou agressives
- Pas de texte dense — aérer au maximum
- Ne jamais afficher de prix non confirmés par la cliente
- Ne jamais mentionner le paiement par CB (elle ne l'accepte pas)

---

## 📋 Checklist avant livraison

- [ ] Lien Planity sur tous les CTA "Prendre RDV"
- [ ] Mention paiement (chèque / espèces / Wero — pas de CB) visible
- [ ] Adresse : 34 Rue Henri Collignon, 17110 Saint-Georges-de-Didonne
- [ ] Google Maps embed fonctionnel
- [ ] Note 5.0 / 77 avis mise en valeur
- [ ] Mentions légales + RGPD
- [ ] `<title>` : "Lymar Dermo-Esthetic — Maquillage Permanent Saint-Georges-de-Didonne"
- [ ] `<meta description>` : Cabinet de maquillage permanent et pigmentation correctrice à Saint-Georges-de-Didonne. Anastasiia Lymar, experte internationale. Sourcils, lèvres, yeux. RDV en ligne.
- [ ] Images `next/image` avec alt descriptifs
- [ ] Responsive mobile parfait (clientèle majoritairement sur téléphone)
- [ ] `next build` sans erreurs

---

## 💡 Prompt de démarrage recommandé

```
Crée la Hero Section du site Lymar Dermo-Esthetic.
Praticienne : Anastasiia Lymar, maquillage permanent à Saint-Georges-de-Didonne.
Palette : blanc cassé (#FAF7F4), or rose (#C9A96E), texte (#1C1C1C).
Typo : Cormorant Garamond pour le titre, Raleway pour le reste.
Layout : plein écran, photo next/image à droite, texte à gauche.
Titre : "L'art du maquillage permanent" — grand, Cormorant italic.
Sous-titre : "Cabinet Anastasiia Lymar · Saint-Georges-de-Didonne"
2 CTA : "Découvrir les prestations" (outline) + "Prendre rendez-vous" (filled accent).
Animation Framer Motion : fade up lent (0.8s), stagger 0.15s entre éléments.
Ambiance : luxe doux, féminin, apaisant — jamais agressif.
```
