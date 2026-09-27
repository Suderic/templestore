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
      'Tailwind CSS Design Tokens & Typography System',
      'Royalty-Free Demo Assets & Vector Icon Library',
      '12 Deployments Included (1/Month for 1st Year)',
      '1-Year Version Updates & Bug Fix Warranty'
    ]
  },
  {
    id: 'tpl-002',
    slug: 'quickbill-cloud-pos',
    name: 'QuickBill — Modern Cloud POS & Billing App',
    tagline: 'Cloud-connected POS, billing & receipt generator with multi-device sync',
    category: 'app',
    price: 69,
    originalPrice: 119,
    rating: 4.94,
    reviewsCount: 41,
    salesCount: 162,
    featured: true,
    badge: 'Cloud POS',
    shortDescription: 'Sleek, high-speed cloud point-of-sale & invoice web app with thermal receipt printing (2"/3"), real-time cloud sync, VAT/tax calculation modes, and instant PDF receipts.',
    longDescription: `QuickBill Cloud POS is a modern, high-speed point-of-sale and billing web application engineered for retail shops, cafes, service counters, and multi-location businesses demanding speed, reliability, and real-time cloud sync.

Built with a sleek, compact interface and local-first caching, QuickBill ensures your checkout counter never skips a beat while syncing sales, catalogs, and customer histories seamlessly across all your devices in real time. It features business profile customization (VAT/PAN, branding, tax rates), an unlimited quick-pick catalog with instant category filtering, real-time flat & percentage discount calculations, and dual VAT/tax handling (full tax breakdown vs tax inclusive pricing).

Hardware ready out of the box: QuickBill connects to Bluetooth 58mm/80mm thermal receipt printers and standard desktop printers for instant A4/A5 PDF generation. Fully responsive across desktop, tablet, and smartphone screens.`,
    features: [
      'Real-Time Cloud Synchronization (Multi-device access across phone, tablet, and desktop)',
      'Local-First Cache Resilience (Continues operating smoothly even during network dips)',
      'Dual VAT / Tax Modes (Full breakdown vs Tax included in prices)',
      'Multi-Format Thermal Printing (2-inch & 3-inch receipt rolls + A4/A5 PDF invoices)',
      'Bluetooth & Network Printer Support for POS counter terminals',
      'Unlimited Quick-Pick Product Catalog with category pills and live search',
      'Dynamic Real-time Discounts (Flat cash amount or % percentage)',
      'Searchable Bill History with reprint, duplicate & delete',
      'Business Profile & Stamp Branding (VAT/PAN, custom logo, official seal/stamp, customizable headers)',
      'Compact, Modern Responsive UI for countertop tablets and mobile phones'
    ],
    detailedFeatures: [
      {
        title: 'Real-Time Cloud Synchronization',
        description: 'Instant multi-device synchronization. Sales data, catalog items, and billing receipts stay unified across all terminals and managers.'
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
        alt: 'QuickBill Cloud POS Counter Interface, Tax Calculation & Thermal Roll Preview',
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
      { name: 'Cloud Sync API', category: 'backend', color: '#10B981' },
      { name: 'Dexie Local Cache', category: 'database', color: '#8B5CF6' },
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
      role: 'Retail & Cloud POS Architect'
    },
    fileSize: '4.8 MB',
    includedItems: [
      'Full Vite + React 18 + TypeScript Source Code',
      'Capacitor 6 Android & iOS Native Project Scaffold',
      'Standalone Single-File Flat HTML Phone Edition',
      'Cloud Synchronization Engine & Schema Scripts',
      'Thermal Receipt & A4 PDF Print Driver Utilities',
      'Single Commercial Business License (12 Deploys/Year)',
      '1-Year Version Updates & Patch Maintenance'
    ]
  },
  {
    id: 'tpl-003',
    slug: 'win-the-day-momentum',
    name: 'Win the Day — Cloud Habit & Momentum Engine',
    tagline: 'Mobile-only habit scoring, real-time cloud sync & daily momentum tracker',
    category: 'mobile',
    isMobileOnly: true,
    price: 45,
    originalPrice: 79,
    rating: 4.97,
    reviewsCount: 38,
    salesCount: 210,
    featured: true,
    badge: 'Mobile App',
    shortDescription: 'Calibrated 101-point personal productivity mobile app with instant cloud sync, streak bonuses, Pomodoro focus timer, and consistency heatmap matrix.',
    longDescription: `Win the Day is an online mobile personal productivity and habit execution app engineered to eliminate decision fatigue, enforce discipline with a calibrated 101-point scoring formula, and maintain unstoppable daily momentum directly on your smartphone.

Modeled after modern luxury wellness apps like Bend and Gentler Streak, Win the Day synchronizes seamlessly to the cloud while keeping you focused on what matters: 100 base task points + 1 bonus point awarded for consecutive winning streaks. The routine intelligently highlights tasks based on the time of day (Morning Routine → Day Health & Fitness → Deep Work → Evening Wind-Down) with strict accountability penalties (-5 points per missed essential task).

Packed with interactive utilities including a 60-minute background-resilient Pomodoro companion, an interactive 6 x 500ml quick-tap water logger, automated gym rest-day credit logic, and an intelligent 3:00 AM rollover rule that protects night owls and late shifts. Features a 16-week consistency heatmap visualizing your performance tiers, designed exclusively for iOS and Android smartphone screens.`,
    features: [
      'Mobile Cloud Sync (Real-time synchronization across iOS & Android smartphones)',
      'Offline-Resilient Local Caching (Automatic background sync whenever reconnected)',
      'Calibrated 101-Point Daily Formula (100 base + 1 streak bonus)',
      'Time-Contextual Routine (Auto-highlights Morning, Health, Deep Work, and Evening)',
      '60-Minute Focus Companion Timer with background resilience & audio fanfare',
      'Interactive 3L Hydration Logger (6 × 500ml quick-tap increments with sound)',
      '16-Week GitHub-Style Consistency Matrix & Performance Heatmap',
      'Gym Rest-Day Logic (Planned recovery days are credited automatically)',
      'Intelligent 3:00 AM Rollover (Protects night owls and irregular sleep routines)',
      'Native-Feel Mobile PWA: Designed exclusively for mobile devices with haptic feedback & touch gestures'
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
        alt: 'Win the Day Hydration Logger, Macro Intakes and Cloud Sync Architecture',
        caption: 'Cloud Architecture — 3L Water Logger & Multi-Device Sync'
      }
    ],
    techStack: [
      { name: 'HTML5 / Modern JS', category: 'frontend', color: '#F7DF1E' },
      { name: 'Cloud Sync API', category: 'backend', color: '#10B981' },
      { name: 'CSS3 Glassmorphism', category: 'styling', color: '#38BDF8' },
      { name: 'PWA / Service Worker', category: 'tooling', color: '#5A0FC8' },
      { name: 'Web Audio API', category: 'tooling', color: '#EC4899' },
      { name: 'Lucide SVG Icons', category: 'styling', color: '#6366F1' }
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
      'Extended Commercial & Personal Use License (12 Deploys/Year)',
      '1-Year Version Updates & Roadmap Access'
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
