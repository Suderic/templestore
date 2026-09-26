# Templestore — Data Layer & Extensibility Guide

A core architectural strength of Templestore is its **Single Source of Truth** data layer located in [`src/data/templates.ts`](file:///D:/New%20project/Templestore/src/data/templates.ts).

All marketplace views—including the Home page hero, featured templates grid, `/templates` gallery with category filtering, search, sorting, and `/templates/[slug]` dynamic product pages—are dynamically generated from this file.

---

## 1. The Template Schema

Each template entry conforms to the strict `Template` interface defined in `src/types/index.ts`:

```typescript
export interface Template {
  id: string;               // Unique template ID (e.g. 'tpl-001')
  slug: string;             // URL-friendly slug (e.g. 'alder-ash-resort')
  name: string;             // Display title
  tagline: string;          // Short one-line summary
  category: 'website' | 'app' | 'mobile' | 'saas'; // Category filter key
  price: number;            // Current price in USD
  originalPrice?: number;   // Strike-through original price
  rating: number;           // Average rating (e.g. 4.98)
  reviewsCount: number;     // Number of reviews
  salesCount: number;       // Sales counter
  featured: boolean;        // If true, highlighted on homepage
  badge?: string;           // Optional badge ('Featured', 'Trending', 'Popular')
  shortDescription: string; // Used in search indexing and cards
  longDescription: string;  // Detailed overview rendered on detail page
  features: string[];       // Bullet points checklist
  detailedFeatures?: {      // Detailed cards on product page
    title: string;
    description: string;
  }[];
  previewImages: {          // Image gallery array
    url: string;
    alt: string;
    caption?: string;
  }[];
  techStack: {              // Tech stack badges
    name: string;
    category: 'frontend' | 'backend' | 'database' | 'styling' | 'tooling';
    color?: string;
  }[];
  purchaseLink?: string;    // External direct link (if applicable)
  livePreviewUrl?: string;  // Internal or external interactive preview route
  version: string;          // Semantic version (e.g. '1.0.0')
  lastUpdated: string;      // Human-readable date string
  author: {                 // Creator attribution
    name: string;
    avatar: string;
    role: string;
  };
  fileSize: string;         // Download package size
  includedItems: string[];  // Deliverables checklist on product page
}
```

---

## 2. Step-by-Step: Adding a New Template

To add a new template to the marketplace, **you never need to modify UI component code**. Follow these simple steps:

### Step 1: Add Images to `/public/previews/`
Drop your mockup or photography images into `public/previews/` (e.g., `my-template-1.jpg`, `my-template-2.jpg`).

### Step 2: Append an Object to `TEMPLATES` in `src/data/templates.ts`

```typescript
{
  id: 'tpl-005',
  slug: 'zenith-ai-studio',
  name: 'Zenith AI Studio',
  tagline: 'Modern generative AI workspace with canvas UI',
  category: 'saas',
  price: 69,
  originalPrice: 99,
  rating: 4.94,
  reviewsCount: 28,
  salesCount: 110,
  featured: true,
  badge: 'New',
  shortDescription: 'Generative AI canvas editor and workflow builder template.',
  longDescription: `Zenith AI Studio is a specialized Next.js template for building multi-modal AI copilots, infinite canvas nodes, and prompt management workspaces...`,
  features: [
    'Next.js 14 App Router with React Server Components',
    'Interactive Infinite Canvas Node Builder',
    'Dark and Light glassmorphic themes',
    'OpenAI and Anthropic API stream integration stubs'
  ],
  previewImages: [
    {
      url: '/previews/zenith-1.jpg',
      alt: 'Zenith AI Canvas Workspace overview',
      caption: 'Node Canvas & Live Inference'
    }
  ],
  techStack: [
    { name: 'Next.js 14', category: 'frontend', color: '#000000' },
    { name: 'TypeScript', category: 'frontend', color: '#3178C6' },
    { name: 'Tailwind CSS', category: 'styling', color: '#06B6D4' }
  ],
  livePreviewUrl: '/demo/zenith-ai',
  version: '1.0.0',
  lastUpdated: 'October 2026',
  author: {
    name: 'Zenith Labs',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    role: 'AI Interfaces'
  },
  fileSize: '5.4 MB',
  includedItems: [
    'Full Next.js Source Code',
    'Figma Design System',
    'Commercial License'
  ]
}
```

### Step 3: Verify Automated Propagation
Once saved:
1. **Gallery Page (`/templates`)**: Instantly lists the new template, indexes its keywords in the search bar, includes it in the category tab count, and supports price sorting.
2. **Dynamic Slug Route (`/templates/zenith-ai-studio`)**: Next.js automatically generates the dynamic page without creating new files.
3. **QR Code Checkout & Direct Modal**: Immediately operational for the new item.

---

## 3. Connecting an Interactive Live Demo

When providing a live interactive demonstration (like Alder & Ash at `/demo/alder-ash`):
1. Build the demo page under `src/app/demo/<slug>/page.tsx`.
2. Set `livePreviewUrl: '/demo/<slug>'` in the template object.
3. Templestore will automatically:
   - Render the **"Launch Live Demo"** button on the product detail page sidebar.
   - Render the **"View Live Demo"** button beneath the product title.
   - Show a **"Live Demo"** pill button on image hover in the gallery cards.
   - Automatically unmount marketplace headers (`Navbar`, `Footer`, `DevBanner`) so the template runs in its native standalone atmosphere.
