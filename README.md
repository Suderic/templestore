# Templestore — Template Marketplace Web App

A Next.js 14+ (Next.js 16 App Router) marketplace for discovering and buying website and app templates. Features instant QR-code purchasing, credit card checkout simulation, user dashboard, seed authentication, a responsive glassmorphic aesthetic, and a fully interactive live demo for the flagship **Alder & Ash — Forest Resort** template.

---

## 📑 Complete Handover Documentation & Blueprints

For complete system handovers, blueprints, architecture diagrams, and flowcharts, see:

- [**`HANDOVER_BLUEPRINT.md`**](file:///D:/New%20project/Templestore/HANDOVER_BLUEPRINT.md) — Master executive handover and runbook
- [**`docs/ARCHITECTURE.md`**](file:///D:/New%20project/Templestore/docs/ARCHITECTURE.md) — System architecture, module boundaries, and viewport isolation
- [**`docs/FLOWCHARTS.md`**](file:///D:/New%20project/Templestore/docs/FLOWCHARTS.md) — User journeys, QR payments, 5-step booking engine, and auth flowcharts
- [**`docs/DATA_LAYER_GUIDE.md`**](file:///D:/New%20project/Templestore/docs/DATA_LAYER_GUIDE.md) — How to add or edit templates without touching UI components
- [**`docs/DESIGN_SYSTEM.md`**](file:///D:/New%20project/Templestore/docs/DESIGN_SYSTEM.md) — Glassmorphism tokens, luxury SVG icons, and typography
- [**`docs/DEPLOYMENT_HANDOVER.md`**](file:///D:/New%20project/Templestore/docs/DEPLOYMENT_HANDOVER.md) — Vercel/Docker runbooks and Phase 2 backend stubs

---

## 🌟 Key Highlights & Architecture

- **Single Source of Truth (`/src/data/templates.ts`)**: All template cards, categories, galleries, dynamic slug pages, and pricing draw directly from this data file. Adding or replacing templates requires zero UI code modifications.
- **Flagship Live Demo (`/demo/alder-ash`)**: Fully interactive 8-page eco-resort template featuring a responsive device switcher (Desktop, Tablet 768px, Mobile 390px), 5-step reservation engine, and photo lightbox.
- **Bespoke Luxury Icons (`/src/components/ui/Icons.tsx`)**: High-end dual-tone SVG glyphs with zero duplicate graphics across sections.
- **Glassmorphism Aesthetic**: Frosted-glass panels (`backdrop-blur-xl`), gradient glows, soft border contrast, and spring press micro-interactions.
- **Persistent Dark / Light Mode**: Instant, flicker-free theme switching with `next-themes` and Tailwind CSS custom variant.
- **Dynamic QR-Code Purchasing**: Generates dynamic QR codes (`qrcode.react`) with currency switching (USDT, USDC, ETH), payment payloads, timer, address copy, and an instant payment simulator with celebratory confetti!
- **Direct Checkout Flow**: Stripe-ready mock payment modal with instant order confirmation, license key generation, and dashboard sync.
- **Auth-Protected User Dashboard**: Preloaded with seed user accounts (`Alex Designer` and `Sarah Developer`), purchase history table, license keys, simulated ZIP downloads, and an official printable receipt modal.
- **Local Dev Testing Suite**: Top dev banner allowing 1-click user switching and guest testing out of the box.

---

## 🚀 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 16 (App Router)** | Framework, server components, dynamic routing |
| **TypeScript** | Strict type safety for data models and components |
| **Tailwind CSS v4** | Utility-first styling with custom glassmorphism tokens |
| **Framer Motion** | Spring micro-interactions, modal backdrops, layout transitions |
| **qrcode.react** | Dynamic SVG QR code generation |
| **next-themes** | Dark/light theme persistence |
| **Lucide React** | Clean, modern iconography |
| **canvas-confetti** | Micro-celebration animations upon payment verification |

---

## 📂 Project Structure

```text
Templestore/
├── public/
│   └── previews/               # Crisp vector UI mockups (nova, aura, pulse, apex)
├── src/
│   ├── app/
│   │   ├── auth/
│   │   │   ├── signin/page.tsx # Sign-in page with 1-click demo login
│   │   │   └── signup/page.tsx # Sign-up page
│   │   ├── contact/page.tsx    # Contact inquiry page with validation
│   │   ├── dashboard/page.tsx  # User dashboard with downloads & receipts
│   │   ├── templates/
│   │   │   ├── page.tsx        # Template gallery with search, filter, sort
│   │   │   └── [slug]/page.tsx # Dynamic template detail & purchase page
│   │   ├── globals.css         # Glassmorphic utilities & dark mode styling
│   │   ├── layout.tsx          # Root layout with providers & ambient glows
│   │   └── page.tsx            # Landing homepage
│   ├── components/
│   │   ├── layout/             # Navbar, Footer, DevBanner
│   │   ├── providers/          # ThemeProvider
│   │   ├── templates/          # TemplateCard, TemplateFilter, TemplateGallery,
│   │   │                       # QRCodeModal, DirectCheckoutModal, ContactModal
│   │   └── ui/                 # Button, Input, Modal, Badge, ThemeToggle
│   ├── context/
│   │   └── AuthContext.tsx     # Client authentication & purchase state
│   ├── data/
│   │   ├── templates.ts        # ⭐ SINGLE SOURCE OF TRUTH FOR TEMPLATES
│   │   └── mockAuth.ts         # Seed users & initial purchase records
│   └── types/
│       └── index.ts            # TypeScript definitions (Template, User, Purchase)
├── .env.example
├── package.json
└── tsconfig.json
```

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Verification
```bash
npm run build
npm start
```

---

## 🧪 Testing the Auth & Purchasing Flows Locally

The local dev environment includes pre-seeded demo accounts so you can test all features without configuration:

### Pre-Seeded Accounts
| Account | Email | Password | Pre-purchased Templates |
| :--- | :--- | :--- | :--- |
| **Alex Designer** | `demo@templestore.dev` | `password123` | Alder & Ash — Forest Resort, Aura Studio |
| **Sarah Developer** | `sarah@templestore.dev` | `password123` | Apex Modern E-Commerce |

### Quick Testing Features
1. **Dev Banner (Top Bar)**: Click **"Switch Seed Account"** at any time to immediately alternate between Alex (2 purchases), Sarah (1 purchase), or Guest mode.
2. **Buy via QR Code**: Visit any template (e.g. `/templates/alder-ash-resort`), click **"Buy via QR Code"**, and click **"Simulate Instant QR Payment & Verify"**. The payment will succeed, trigger confetti, generate a unique commercial license key, and add the template to your `/dashboard`.
3. **Buy Directly**: Click **"Buy Directly (Checkout)"**, inspect the Stripe-style mock card form, and click **"Pay (Instant Test Order)"**.
4. **Downloads**: In `/dashboard`, click **"Download ZIP"** on any purchased template to test the animated download trigger.
5. **Receipts**: In `/dashboard` under **"Purchase History"**, click **"View Receipt"** to view and print official formatted invoices.

---

## 🧩 Adding Real Templates Later (Single Source of Truth)

To add new templates or replace the dummy placeholders, edit `src/data/templates.ts`. 

Simply append a new item matching the `Template` schema:

```typescript
{
  id: 'tpl-005',
  slug: 'zenith-ai-chat',
  name: 'Zenith AI Chat Assistant',
  tagline: 'Multi-model LLM interface with vector search and streaming UI',
  category: 'saas', // 'website' | 'app' | 'mobile' | 'saas'
  price: 99,
  originalPrice: 149,
  rating: 5.0,
  reviewsCount: 12,
  salesCount: 84,
  featured: true,
  badge: 'New',
  shortDescription: 'Modern streaming chat interface with OpenAI and Claude adapters.',
  longDescription: 'Full markdown description...',
  features: ['Streaming responses', 'Voice input', 'Prompt marketplace'],
  previewImages: [
    { url: '/previews/your-image.png', alt: 'Screenshot 1', caption: 'Chat Workspace' }
  ],
  techStack: [
    { name: 'Next.js 14', category: 'frontend' },
    { name: 'Tailwind CSS', category: 'styling' }
  ],
  purchaseLink: 'https://checkout.stripe.com/...',
  version: '1.0.0',
  lastUpdated: 'November 2026',
  author: {
    name: 'Your Studio',
    avatar: 'https://...',
    role: 'Core Creator'
  },
  fileSize: '4.2 MB',
  includedItems: ['Next.js 14 Codebase', 'Figma File', 'Documentation']
}
```

The gallery filters, detail pages, search bar, and QR generator will instantly adapt without touching UI code.

---

## 🚢 Upgrading to Production

When ready to transition from Phase 1 local prototype to production:

1. **Authentication**:
   - Replace `src/context/AuthContext.tsx` with **NextAuth.js (Auth.js v5)** or **Clerk**.
   - Configure OAuth providers (GitHub, Google) or email magic links.
2. **Payment Gateway**:
   - For credit cards: Integrate **Stripe Elements** with a server-side route handler (`/api/checkout/route.ts`) and listen to the `checkout.session.completed` webhook.
   - For crypto/QR code payments: Integrate **Coinbase Commerce**, **NOWPayments**, or a smart contract event listener (e.g. Alchemy/Infura webhooks).
3. **Database**:
   - Connect PostgreSQL via **Prisma ORM** or **Supabase** using the schema already modeled in `src/types/index.ts`.
4. **Secure File Storage**:
   - Host template ZIP archives in an **AWS S3 bucket** or **Cloudflare R2**, and generate time-limited pre-signed download URLs upon verified purchase.
