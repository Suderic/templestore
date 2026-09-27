import { Template } from '@/types';

/**
 * TEMPLESTORE TEMPLATES DATA LAYER
 * Single source of truth for all template data.
 * To add a new template, simply add a new object to this array.
 * UI components automatically adapt without code modifications.
 */
export const TEMPLATES: Template[] = [
  {
    id: 'tpl-001',
    slug: 'alder-ash-resort',
    name: 'Alder & Ash — Forest Resort',
    tagline: 'Multi-page luxury eco-resort & hospitality website template',
    category: 'website',
    price: 79,
    originalPrice: 129,
    rating: 4.98,
    reviewsCount: 56,
    salesCount: 194,
    featured: true,
    badge: 'Featured',
    shortDescription: 'Handcrafted multi-page eco-resort template featuring 8 responsive page views, room capacity filter, hearth dining menus, and a 5-step booking engine.',
    longDescription: `Alder & Ash is an ultra-premium website template meticulously tailored for boutique resorts, eco-lodges, wilderness retreats, and luxury hospitality destinations. Built with an earthy glassmorphic aesthetic (old-growth pine, warm embers, and moss green), smooth Fraunces serif typography, and an interactive 5-step reservation engine.

Whether you operate a secluded mountain lodge, coastal retreat, or wilderness glamping destination, Alder & Ash delivers 8+ production-ready responsive page views: accommodations with capacity filtering, farm-to-table dining menus with dietary callouts, seasonal activity guides, an interactive lightbox gallery, lodge journal, categorized FAQs, contact & arrival directions, and a full multi-step reservation engine.`,
    features: [
      '8+ Dedicated Multi-Page Views (Home, Rooms, Dining, Experiences, Gallery, Journal, FAQ, Contact)',
      'Interactive 5-Step Reservation & Quick-Book Engine with add-ons & instant confirmation',
      'Bespoke Forest & Ember Glassmorphism Design System (Pine, Sand, Ember, Moss)',
      'Room Availability Filter by Guest Capacity (Solo, Couple, Family/Group)',
      'Interactive Hearth Dining Menus with Dietary Callouts (Breakfast, Dinner, Drinks)',
      'Interactive Filterable Photo Gallery with Fullscreen Lightbox',
      '100% Responsive Design for Desktop, Tablet, and Mobile screens',
      'Zero-framework static HTML/CSS/JS export + Next.js App Router source',
      'Production-grade SEO & OpenGraph metadata ready'
    ],
    detailedFeatures: [
      {
        title: '8 Dedicated Hospitality Page Layouts',
        description: 'Meticulously crafted pages for accommodations, dining reservations, curated experiences, image gallery, journal, and visitor FAQ.'
      },
      {
        title: '5-Step Booking & Add-on Engine',
        description: 'Comprehensive guest reservation flow with room selection, stay dates, curated add-ons (cedar sauna, guided dawn hikes), and instant confirmation.'
      },
      {
        title: 'Bespoke Natural Design System',
        description: 'Tuned palette of old-growth pine, moss, sand, and ember with Fraunces serif typography and responsive glassmorphism.'
      }
    ],
    previewImages: [
      {
        url: '/previews/alder-web-1.svg',
        alt: 'Alder & Ash Forest Resort Website Homepage & Hero Section',
        caption: 'Homepage — Hero & Forest Retreat Introduction'
      },
      {
        url: '/previews/alder-web-2.svg',
        alt: 'Alder & Ash Curated Accommodations & Cabin Views with Guest Filters',
        caption: 'Accommodations — Cabin Suites & Room Capacity Filter'
      },
      {
        url: '/previews/alder-web-3.svg',
        alt: 'Alder & Ash Hearth Dining & Farm-to-Table Restaurant Menus',
        caption: 'Dining — Hearth Fire & Foraged Seasonal Menus'
      },
      {
        url: '/previews/alder-web-4.svg',
        alt: 'Alder & Ash 5-Step Interactive Reservation Engine',
        caption: 'Booking Flow — 5-Step Guest Reservation & Add-on Engine'
      },
      {
        url: '/previews/alder-1.jpg',
        alt: 'Alder & Ash Forest Resort A-Frame cabin in old growth pine forest',
        caption: 'Photography — Lodge Grounds & Forest Cabins'
      },
      {
        url: '/previews/alder-2.jpg',
        alt: 'Wood-fired cedar hot tub soaking pool with mountain views',
        caption: 'Photography — Geothermal Cedar Soaking Tubs'
      },
      {
        url: '/previews/alder-3.jpg',
        alt: 'Cozy timber suite interior with woodstove fireplace',
        caption: 'Photography — Creekside & Canopy Suites'
      }
    ],
    techStack: [
      { name: 'Next.js 14+', category: 'frontend', color: '#000000' },
      { name: 'Tailwind CSS', category: 'styling', color: '#3E7A5C' },
      { name: 'TypeScript', category: 'frontend', color: '#3178C6' },
      { name: 'HTML5 / Vanilla JS', category: 'frontend', color: '#E34F26' },
      { name: 'Framer Motion', category: 'styling', color: '#D98F4A' },
      { name: 'Lucide Icons', category: 'tooling', color: '#F59E0B' }
    ],
    purchaseLink: 'https://checkout.templestore.dev/alder-ash',
    livePreviewUrl: '/demo/alder-ash',
    version: '1.0.0',
    lastUpdated: 'September 2026',
    author: {
      name: 'Cascade Craft Studio',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
      role: 'Hospitality Architecture'
    },
    fileSize: '6.2 MB',
    includedItems: [
      'Full Multi-Page Website Source Code',
      'Static HTML/CSS/JS Flat Export',
      'Interactive 5-Step Reservation Engine',
      'Figma Design Tokens & Typography Kit',
      'Curated High-Res Unsplash Photography Pack',
      'Commercial Unlimited Client Deployments',
      'Lifetime Updates & Support'
    ]
  },
  {
    id: 'tpl-002',
    slug: 'aura-agency-portfolio',
    name: 'Aura Studio & Agency',
    tagline: 'High-end creative portfolio with fluid micro-interactions',
    category: 'website',
    price: 49,
    originalPrice: 89,
    rating: 4.95,
    reviewsCount: 34,
    salesCount: 245,
    featured: true,
    badge: 'Trending',
    shortDescription: 'Sleek, minimalist digital agency and portfolio template with smooth inertial scrolling, magnetic cursor effects, and case study layouts.',
    longDescription: `Aura is crafted for modern design studios, creative agencies, and senior independent contractors who need an unforgettable digital presence. 

Engineered with buttery smooth Framer Motion animations, dynamic case study showcases, interactive project galleries, and responsive contact flows that convert visitors into high-paying clients.`,
    features: [
      'Magnetic cursor & hover interactions',
      'Dynamic Case Study CMS structure with MDX support',
      'Full-bleed interactive media galleries',
      'Fluid dark/light mode toggle with frosted highlights',
      'Contact form with email dispatch & validation',
      'Client testimonial slider with responsive touch gestures',
      'Perfect 100/100 Lighthouse performance score',
      'Modular components for services, process, and pricing'
    ],
    detailedFeatures: [
      {
        title: 'Project Case Studies',
        description: 'Immersive grid and list view for projects with video support and client deliverables.'
      },
      {
        title: 'Interactive Process Roadmap',
        description: 'Step-by-step visual client onboarding flow with interactive tabs.'
      },
      {
        title: 'Client Pitch Deck Kit',
        description: 'Includes reusable presentation cards and proposal sections.'
      }
    ],
    previewImages: [
      {
        url: '/previews/aura-1.svg',
        alt: 'Aura Agency Hero screen with dramatic typography and glass cards',
        caption: 'Hero Section & Featured Works'
      },
      {
        url: '/previews/aura-2.svg',
        alt: 'Aura Case Study Detail page with media lightbox',
        caption: 'In-Depth Case Study Presentation'
      },
      {
        url: '/previews/aura-3.svg',
        alt: 'Aura Services & Contact booking modal',
        caption: 'Services Matrix & Booking Funnel'
      }
    ],
    techStack: [
      { name: 'React 19', category: 'frontend', color: '#61DAFB' },
      { name: 'Next.js 14', category: 'frontend', color: '#000000' },
      { name: 'Tailwind CSS', category: 'styling', color: '#06B6D4' },
      { name: 'Framer Motion', category: 'styling', color: '#FF0055' },
      { name: 'MDX', category: 'tooling', color: '#FCB32C' }
    ],
    purchaseLink: 'https://checkout.templestore.dev/aura',
    livePreviewUrl: 'https://aura-preview.templestore.dev',
    version: '1.8.2',
    lastUpdated: 'September 2026',
    author: {
      name: 'Studio Monolith',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
      role: 'Award-winning Design Collective'
    },
    fileSize: '3.2 MB',
    includedItems: [
      'Next.js 14 Application Code',
      'Framer Motion Custom Hooks & Transitions',
      'Figma Assets & Responsive Wireframes',
      'Markdown Case Studies Content Sample',
      'Single & Multi-Site Commercial License'
    ]
  },
  {
    id: 'tpl-003',
    slug: 'pulse-fitness-companion',
    name: 'Pulse Fitness & Habits',
    tagline: 'Mobile-first habit tracker & wellness companion template',
    category: 'mobile',
    price: 59,
    originalPrice: 99,
    rating: 4.88,
    reviewsCount: 29,
    salesCount: 188,
    featured: false,
    badge: 'Mobile App',
    shortDescription: 'Cross-platform health & routine tracking mobile interface with gamified streaks, workout planners, and biometric charts.',
    longDescription: `Pulse brings consumer-grade polish to wellness and habit-building applications. Modeled after top-grossing fitness apps, Pulse features biometric tracking charts, weekly routine planner cards, workout timers, and social streak achievements.

Engineered for mobile responsiveness with PWA (Progressive Web App) capability and React Native / Expo compatibility.`,
    features: [
      'PWA & Mobile-First Responsive layouts with iOS/Android viewport styles',
      'Interactive streak calendar & habit check-in micro-interactions',
      'Workout session timer with audio cues and set logger',
      'Calorie & macro tracker with SVG circular progress rings',
      'Dark mode optimized for nighttime usage (OLED deep black)',
      'Offline state caching with local storage persistence',
      'Ready-to-use biometric & wearable sync placeholder hooks',
      'Push notification permission prompt modal'
    ],
    detailedFeatures: [
      {
        title: 'Gamified Habit Rings',
        description: 'Smooth SVG animated rings that fill up as tasks are completed.'
      },
      {
        title: 'Workout Split Builder',
        description: 'Drag-and-drop exercise scheduler with rest interval timers.'
      }
    ],
    previewImages: [
      {
        url: '/previews/pulse-1.svg',
        alt: 'Pulse mobile screen showing daily habits and workout planner',
        caption: 'Daily Routine & Habit Tracker'
      },
      {
        url: '/previews/pulse-2.svg',
        alt: 'Pulse analytics screen with heart rate and calorie charts',
        caption: 'Biometric Metrics & Progress Charts'
      }
    ],
    techStack: [
      { name: 'React Native / Web', category: 'frontend', color: '#61DAFB' },
      { name: 'TypeScript', category: 'frontend', color: '#3178C6' },
      { name: 'Tailwind CSS', category: 'styling', color: '#06B6D4' },
      { name: 'Zustand State', category: 'tooling', color: '#443E38' }
    ],
    purchaseLink: 'https://checkout.templestore.dev/pulse',
    livePreviewUrl: 'https://pulse-preview.templestore.dev',
    version: '1.2.0',
    lastUpdated: 'August 2026',
    author: {
      name: 'Vanguard Labs',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces',
      role: 'Mobile UI Specialists'
    },
    fileSize: '5.1 MB',
    includedItems: [
      'Next.js PWA Web View Codebase',
      'React Native / Expo Starter Template',
      'Full Design Tokens & Icon Set',
      'Sound Effects & Haptic Feedback Config',
      'Standard Commercial License'
    ]
  },
  {
    id: 'tpl-004',
    slug: 'apex-modern-storefront',
    name: 'Apex Modern E-Commerce',
    tagline: 'High-conversion headless storefront with instant checkout',
    category: 'website',
    price: 89,
    originalPrice: 149,
    rating: 4.96,
    reviewsCount: 52,
    salesCount: 420,
    featured: true,
    badge: 'Best Seller',
    shortDescription: 'Blazing fast headless e-commerce storefront with slide-out cart drawer, multi-currency switcher, search filtering, and Stripe readiness.',
    longDescription: `Apex is an enterprise-grade e-commerce template designed to maximize checkout conversion rates. Includes instant product search with fuzzy matching, interactive color & size variant selectors, product review accordion, and a seamless slide-out cart drawer.

Easily connects to Shopify, MedusaJS, Stripe, or custom headless backends.`,
    features: [
      'Frictionless slide-out mini-cart with live order total calculation',
      'Faceted product filtering (size, color, price range, brand)',
      'Stripe & PayPal payment checkout UI stubs',
      'Dynamic product variant selector with live image swapping',
      'Customer reviews and Q&A accordion section',
      'Discount coupon validator & toast notification system',
      'Wishlist persistence via local storage',
      'Optimized Core Web Vitals (sub-50ms interaction latency)'
    ],
    detailedFeatures: [
      {
        title: 'Optimized Checkout Funnel',
        description: '1-page checkout UI with address auto-complete and guest checkout option.'
      },
      {
        title: 'Product Zoom & 360 Gallery',
        description: 'Interactive high-res image zoom and thumbnail carousel.'
      }
    ],
    previewImages: [
      {
        url: '/previews/apex-1.svg',
        alt: 'Apex E-commerce hero banner and product grid',
        caption: 'Storefront Homepage & Featured Drop'
      },
      {
        url: '/previews/apex-2.svg',
        alt: 'Apex Product Detail page with variant selector and cart drawer',
        caption: 'Product Detail & Cart Drawer'
      },
      {
        url: '/previews/apex-3.svg',
        alt: 'Apex One-page checkout screen with order summary',
        caption: 'Checkout & Payment Summary'
      }
    ],
    techStack: [
      { name: 'Next.js 14', category: 'frontend', color: '#000000' },
      { name: 'TypeScript', category: 'frontend', color: '#3178C6' },
      { name: 'Tailwind CSS', category: 'styling', color: '#06B6D4' },
      { name: 'Stripe SDK Ready', category: 'backend', color: '#635BFF' },
      { name: 'Framer Motion', category: 'styling', color: '#FF0055' }
    ],
    purchaseLink: 'https://checkout.templestore.dev/apex',
    livePreviewUrl: 'https://apex-preview.templestore.dev',
    version: '3.1.0',
    lastUpdated: 'November 2026',
    author: {
      name: 'Omni Commerce',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=faces',
      role: 'E-commerce Architecture Team'
    },
    fileSize: '6.4 MB',
    includedItems: [
      'Next.js 14 E-commerce App Router Code',
      'Cart Drawer & State Management Setup',
      'Figma Complete UI Kit (30+ Components)',
      'Mock Product Dataset (50 items)',
      'Extended Commercial License with Staging Rights'
    ]
  },
  {
    id: 'tpl-005',
    slug: 'quickbill-offline-pos',
    name: 'QuickBill — Offline POS & Billing App',
    tagline: 'Offline-first POS, billing & receipt generator for retail counters',
    category: 'app',
    price: 69,
    originalPrice: 119,
    rating: 4.94,
    reviewsCount: 41,
    salesCount: 162,
    featured: true,
    badge: 'Offline POS',
    shortDescription: 'High-speed offline-first point-of-sale & invoice app with thermal receipt printing (2"/3"), VAT/tax calculation modes, 25 saved items catalog, and instant PDF receipts.',
    longDescription: `QuickBill POS is an enterprise-grade, offline-first billing and point-of-sale solution engineered for retail shops, cafes, service counters, and small business owners who demand speed, reliability, and zero cloud lock-in.

Built with a local-first architecture powered by Dexie (IndexedDB), QuickBill executes transactions in milliseconds without an active internet connection. It features complete business profile customization (VAT/PAN, header logos, tax IDs), a 25-item quick-pick catalog for high-frequency inventory, real-time flat & percentage discount calculations, and dual VAT/tax handling (disclosed breakdown vs tax included in unit price).

When it comes to hardware dispatch, QuickBill connects seamlessly to portable Bluetooth thermal receipt printers (2-inch and 3-inch rolls) as well as desktop Wi-Fi / USB network printers for standard A4 and A5 invoice receipts via jsPDF and html2canvas. Ready for cross-platform deployment on Android, iOS (via Capacitor), or any modern desktop browser.`,
    features: [
      '100% Offline-First Architecture (Zero cloud reliance, Dexie IndexedDB local database)',
      'Dual VAT / Tax Modes (Full breakdown vs Tax included in prices)',
      'Multi-Format Thermal Printing (2-inch & 3-inch receipt rolls + A4/A5 PDF invoices)',
      'Bluetooth & Network Printer Support for POS counter terminals',
      '25-Item Quick-Pick Catalog for instant line-item addition',
      'Dynamic Real-time Discounts (Flat cash amount or % percentage)',
      'Searchable Chronological Bill History with reprint, duplicate & delete',
      'Business Profile Branding (VAT/PAN, custom logo, contact info, customizable headers)',
      'Cross-Platform Ready: Android APK, iOS (Capacitor 6), and Standalone Web App'
    ],
    detailedFeatures: [
      {
        title: 'Local-First Dexie Database',
        description: 'Zero internet latency. All sales, business profiles, and customer receipts stay securely stored on the device.'
      },
      {
        title: 'Thermal Receipt & A4 Printing Engine',
        description: 'Supports Bluetooth 58mm/80mm thermal receipt rolls and standard A4/A5 PDF generation with thermal printer formatting.'
      },
      {
        title: 'Flexible Tax & Discount Engine',
        description: 'Configurable tax rates (e.g. 13% VAT) with single-tap toggle between item-level tax inclusion and bottom-line disclosure.'
      }
    ],
    previewImages: [
      {
        url: '/previews/quickbill-web-1.svg',
        alt: 'QuickBill POS Counter Interface, Tax Calculation & Thermal Roll Preview',
        caption: 'POS Counter — Active Order, VAT Breakdown & Thermal Roll'
      },
      {
        url: '/previews/quickbill-1.png',
        alt: 'QuickBill Light Mode Invoicing Screen and Line Items Table',
        caption: 'Light Interface — Fast Cashier & Line Item Entry'
      },
      {
        url: '/previews/quickbill-2.png',
        alt: 'QuickBill Dark Mode Countertop Interface for OLED Displays',
        caption: 'Dark Mode — Countertop OLED Display & Quick Sale'
      }
    ],
    techStack: [
      { name: 'React 18', category: 'frontend', color: '#61DAFB' },
      { name: 'Vite', category: 'tooling', color: '#646CFF' },
      { name: 'TypeScript', category: 'frontend', color: '#3178C6' },
      { name: 'Tailwind CSS', category: 'styling', color: '#06B6D4' },
      { name: 'Dexie / IndexedDB', category: 'database', color: '#10B981' },
      { name: 'Capacitor 6', category: 'tooling', color: '#119EFF' },
      { name: 'jsPDF / Canvas', category: 'tooling', color: '#EF4444' }
    ],
    purchaseLink: 'https://checkout.templestore.dev/quickbill',
    livePreviewUrl: '/demos/quickbill.html',
    version: '1.0.0',
    lastUpdated: 'September 2026',
    author: {
      name: 'Sovereign POS Systems',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces',
      role: 'Retail & Offline POS Architect'
    },
    fileSize: '4.8 MB',
    includedItems: [
      'Full Vite + React 18 + TypeScript Source Code',
      'Capacitor 6 Android & iOS Native Project Scaffold',
      'Standalone Single-File Flat HTML Phone Edition',
      'Dexie.js IndexedDB Schema & Migration Scripts',
      'Thermal Receipt & A4 PDF Print Driver Utilities',
      'Commercial Unlimited Business License',
      'Lifetime Updates & Free Maintenance'
    ]
  },
  {
    id: 'tpl-006',
    slug: 'win-the-day-momentum',
    name: 'Win the Day — Habit & Momentum Engine',
    tagline: 'Offline-first 101-point habit scoring, focus timer & momentum tracking PWA',
    category: 'mobile',
    price: 45,
    originalPrice: 79,
    rating: 4.97,
    reviewsCount: 38,
    salesCount: 210,
    featured: true,
    badge: 'PWA Engine',
    shortDescription: 'Calibrated 101-point personal productivity system with streak bonuses, Pomodoro focus timer, 3L water logger, and GitHub-style consistency matrix.',
    longDescription: `Win the Day is a zero-friction, offline-first personal productivity and habit execution system engineered to eliminate decision fatigue, enforce discipline with a calibrated 101-point scoring formula, and maintain unstoppable daily momentum.

Modeled after modern luxury wellness apps like Bend and Gentler Streak, Win the Day operates on a balanced daily scorecard: 100 base task points + 1 bonus point awarded for consecutive winning streaks. The routine intelligently highlights tasks based on the time of day (Morning Routine → Day Health & Fitness → Deep Work → Evening Wind-Down) with strict accountability penalties (-5 points per missed essential task).

Packed with interactive utilities including a 60-minute background-resilient Pomodoro companion, an interactive 6 x 500ml quick-tap water logger, automated gym rest-day credit logic, and an intelligent 3:00 AM rollover rule that protects night owls and late shifts. Features a 16-week GitHub-style consistency heatmap visualizing your performance tiers. Zero accounts, zero tracking, sub-100ms loading, and 100% offline sovereignty installable straight to your iPhone or Android home screen.`,
    features: [
      '100% Offline-First & Private (No logins, no analytics, sub-100ms load time)',
      'Calibrated 101-Point Daily Formula (100 base + 1 streak bonus)',
      'Time-Contextual Routine (Auto-highlights Morning, Health, Deep Work, and Evening)',
      '60-Minute Focus Companion Timer with background resilience & audio fanfare',
      'Interactive 3L Hydration Logger (6 × 500ml quick-tap increments with sound)',
      '16-Week GitHub-Style Consistency Matrix & Performance Heatmap',
      'Gym Rest-Day Logic (Planned recovery days are credited automatically)',
      'Intelligent 3:00 AM Rollover (Protects night owls and irregular sleep routines)',
      'PWA Ready: 1-Tap Add to Home Screen on iOS Safari & Android Chrome',
      'Data Sovereignty: 1-Tap Full JSON Backup Export & Instant Restore'
    ],
    detailedFeatures: [
      {
        title: '101-Point Calibrated Scoring System',
        description: '100 points for daily baseline habits + 1 bonus point for continuous winning streaks, with -5 pt deductions for skipped essentials.'
      },
      {
        title: '16-Week Consistency Matrix',
        description: 'Visual heatmap tracking consistency across 112 days with color tiers for 100+ perfect, 80+ win, and partial days.'
      },
      {
        title: 'Deep Work Companion & Audio Engine',
        description: 'Built-in 60-minute countdown with synthesized Web Audio haptics and background timer preservation.'
      }
    ],
    previewImages: [
      {
        url: '/previews/win-the-day-1.svg',
        alt: 'Win the Day 101-Point Daily Momentum Dashboard, Routine Checklist and Streak Fire',
        caption: 'Momentum Dashboard — 101 Daily Points, Streak Fire & Routine'
      },
      {
        url: '/previews/win-the-day-2.svg',
        alt: 'Win the Day Hydration Logger, Macro Intakes and Offline Architecture',
        caption: 'Sovereign Architecture — 3L Water Logger & Zero-Cloud Offline Cache'
      }
    ],
    techStack: [
      { name: 'HTML5 / Modern JS', category: 'frontend', color: '#F7DF1E' },
      { name: 'PWA / Service Worker', category: 'tooling', color: '#5A0FC8' },
      { name: 'CSS3 Glassmorphism', category: 'styling', color: '#38BDF8' },
      { name: 'Web Audio API', category: 'tooling', color: '#10B981' },
      { name: 'LocalStorage Engine', category: 'database', color: '#F59E0B' },
      { name: 'Lucide SVG Icons', category: 'styling', color: '#EC4899' }
    ],
    purchaseLink: 'https://checkout.templestore.dev/win-the-day',
    livePreviewUrl: '/demos/win-the-day.html',
    version: '1.0.0',
    lastUpdated: 'September 2026',
    author: {
      name: 'Discipline Labs',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
      role: 'Productivity Systems Designer'
    },
    fileSize: '1.2 MB',
    includedItems: [
      'Complete PWA Source Code (HTML, CSS, JS modular architecture)',
      'Self-Contained Single-File Standalone Mobile Edition',
      'PWA Service Worker & Manifest Configuration',
      'Synthesized Web Audio Haptic & Sound Modules',
      'JSON Backup & Restore Data Engine',
      'Extended Commercial & Personal Use License',
      'Lifetime Updates & Roadmap Access'
    ]
  }
];

/**
 * Helper to fetch all templates
 */
export function getAllTemplates(): Template[] {
  return TEMPLATES;
}

/**
 * Helper to find a template by slug
 */
export function getTemplateBySlug(slug: string): Template | undefined {
  return TEMPLATES.find((tpl) => tpl.slug === slug);
}

/**
 * Helper to get featured templates
 */
export function getFeaturedTemplates(): Template[] {
  return TEMPLATES.filter((tpl) => tpl.featured);
}
