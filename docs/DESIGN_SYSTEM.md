# Templestore & Alder Ash — Design System & Tokens

This document details the visual identity, design tokens, typography, glassmorphism filters, and bespoke iconography used across Templestore and its template demos.

---

## 1. Templestore Marketplace Design System

### 1.1 Color Tokens

| Token | Light Mode Value | Dark Mode Value | Usage |
| :--- | :--- | :--- | :--- |
| **Background Base** | `#F8FAFC` (`slate-50`) | `#090D16` (`slate-950`) | Main canvas background |
| **Glass Card Surface** | `rgba(255, 255, 255, 0.75)` | `rgba(15, 23, 42, 0.65)` | Cards, dialogs, dropdowns |
| **Glass Panel Surface** | `rgba(255, 255, 255, 0.55)` | `rgba(30, 41, 59, 0.45)` | Navbars, stat widgets |
| **Border Soft** | `rgba(255, 255, 255, 0.60)` | `rgba(255, 255, 255, 0.10)` | Card borders & dividers |
| **Primary Brand Gradient** | `from-amber-500 via-orange-500 to-amber-600` | Same | Logos, CTAs, highlight pills |
| **Secondary Accent** | `#6366F1` (`indigo-500`) | `#818CF8` (`indigo-400`) | Interactive badges & tech pills |
| **Text Primary** | `#0F172A` (`slate-900`) | `#F8FAFC` (`slate-50`) | Headings and titles |
| **Text Secondary** | `#475569` (`slate-600`) | `#94A3B8` (`slate-400`) | Body copy and descriptions |

### 1.2 Glassmorphism CSS Utility Classes (`globals.css`)

```css
/* Glass Card (Frosted Panels) */
.glass-card {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.6);
}

.dark .glass-card {
  background: rgba(15, 23, 42, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* Glass Panel (Header & Floating Controls) */
.glass-panel {
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.dark .glass-panel {
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
```

---

## 2. Bespoke Luxury Icon Catalog (`src/components/ui/Icons.tsx`)

Every primary concept in Templestore features a dedicated SVG icon with embedded dual-tone gradients:

| Icon Component | Visual Representation | Primary Location |
| :--- | :--- | :--- |
| **`LogoMark`** | Upward temple pyramid monogram with glowing ambient aura | Navbar, Footer, Auth pages |
| **`BrowseLuxury`** | Responsive viewport window with inspect viewfinder & wireframes | Step 01: "Browse & Inspect" |
| **`DatabaseLuxury`** | Stacked data discs with glowing Amber/Orange connection nodes | "Single Source Data Layer" card, Footer |
| **`PaletteLuxury`** | Multi-tone gradient artist palette with contrast dots | "Diverse Themes & Design Systems" card |
| **`CodeLuxury`** | Terminal brackets `< / >` with Cyan/Blue gradient | "100% TypeScript" hero stats bar |
| **`QrLuxury`** | Dynamic 3-corner QR code with glowing data cells | QR Payment modal & CTAs |
| **`ShieldLuxury`** | Dual-layer security shield with emerald checkmark | Commercial license & security badges |
| **`UpdateLuxury`** | Orbiting synchronization arrows with Emerald/Cyan glow | "Free Lifetime Updates" badges |
| **`SunLuxury` / `MoonLuxury`** | Dual-core radiant sun and cratered crescent moon | Segmented `ThemeToggle` component |

---

## 3. Alder & Ash Resort Template Design System

Designed specifically for luxury eco-resorts, wilderness lodges, and boutique hospitality:

### 3.1 Forest Color Palette

```css
:root {
  --pine:    #0F2B22; /* Primary deep conifer green background */
  --pine-2:  #164031; /* Gradient midtone for timber cards */
  --moss:    #3E7A5C; /* Accent shadow & nature highlights */
  --sand:    #E8DCC3; /* Light surfaces, secondary text, accents */
  --ember:   #D98F4A; /* Warm hearth fire CTA, active badges */
  --ember-2: #E8A86B; /* Gradient hover transition */
  --cream:   #F5EFE3; /* Crisp, high-contrast display text */
  --line:    rgba(245, 239, 227, 0.08); /* Minimalist divider line */
}
```

### 3.2 Typography Tokens
- **Display & Headings**: `font-serif` mapped to **`Fraunces`** (weights: 400, 500, 700; letter-spacing: 0.2px). Italic ember accents are used for emotional punctuation (e.g. *waited for you.*).
- **Body & Controls**: `font-sans` mapped to **`Manrope`** (weights: 400, 500, 600, 700, 800) for legibility at small sizes and high contrast against dark timber backgrounds.

---

## 4. Animation & Interaction Tokens

- **Spring Transitions**:
  `type: 'spring', stiffness: 350, damping: 25` (card hover lifting and modal scale-in).
- **Reduced Motion Support**:
  `@media (prefers-reduced-motion: reduce)` disables non-essential animations.
- **Micro-Celebrations**:
  `canvas-confetti` configured with high-spread star and circle bursts upon simulated payment completion.
