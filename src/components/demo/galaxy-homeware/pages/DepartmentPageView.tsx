'use client';

import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  ChevronRight, 
  ShieldCheck, 
  Truck, 
  SlidersHorizontal, 
  Check, 
  Info, 
  ArrowRight,
  Armchair,
  Lamp,
  Speaker,
  UtensilsCrossed,
  Layers,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { 
  Product, 
  ProductCategory, 
  ProductMaterial, 
  ProductSizeOption, 
  WishlistItem, 
  StorePage 
} from '../types';
import { GalaxyProductCard } from '../GalaxyProductCard';

interface DepartmentPageViewProps {
  department: ProductCategory;
  products: Product[];
  onAddToCart: (product: Product, material: ProductMaterial, size: ProductSizeOption) => void;
  onQuickView: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlist: WishlistItem[];
  onNavigateHome: () => void;
  onNavigatePage: (page: StorePage) => void;
}

export function DepartmentPageView({
  department,
  products,
  onAddToCart,
  onQuickView,
  onToggleWishlist,
  wishlist,
  onNavigateHome,
  onNavigatePage
}: DepartmentPageViewProps) {
  // Filters inside department
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Department metadata
  const meta = useMemo(() => {
    switch (department) {
      case 'furniture':
        return {
          title: 'Furniture & Seating',
          subtitle: 'Architectural Silhouettes & Tactile Comfort',
          badge: 'Solid FSC Hardwoods & Bouclé',
          heroImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80',
          description: 'Sculptural low-slung lounge chairs, solid European white oak dining tables, and fluted walnut credenzas. Each piece is constructed with traditional mortise-and-tenon joinery and finished with zero-VOC plant oils.',
          features: [
            '10-Year Structural Frame Warranty',
            'Kiln-Dried European White Oak & Ash',
            '50,000 Martindale High-Durability Bouclé',
            'Free White-Glove In-Room Placement'
          ],
          stylingTip: {
            title: 'Proportion & Low-Profile Living',
            body: 'Low-slung silhouettes like the Koto Lounge Chair expand sightlines in urban apartments. Pair warm textured bouclé with smoked oak or raw brass to create subtle textural contrast.'
          },
          faqs: [
            { q: 'How is the furniture delivered into my home?', a: 'All furniture orders over $150 receive complimentary White-Glove delivery. Our two-person team will bring the item into your room of choice, assemble it, and recycle all protective wooden crates.' },
            { q: 'Can I order custom timber or fabric dimensions?', a: 'Yes! For dining tables and credenzas, we offer custom dimension fabrication with a 4-6 week lead time. Contact our concierge for 3D technical drawings.' },
            { q: 'How should I care for solid oak finishes?', a: 'Clean regularly with a soft dry cloth. For liquid spills, wipe immediately. Apply our organic beeswax timber conditioning balm once annually.' }
          ]
        };

      case 'lighting':
        return {
          title: 'Architectural Lighting',
          subtitle: 'Sculptural Illumination & Atmospheric Calm',
          badge: 'Mouth-Blown Glass & Raw Brass',
          heroImage: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1600&q=80',
          description: 'Fluted brass chandeliers, wireless cast aluminum table lamps, and magnetic track sconces engineered to create serene, layered lighting environments without glare.',
          features: [
            'CRI 97+ Museum Color Rendering Index',
            'Stepless Smooth Dimming 2700K–4500K',
            'Mouth-Blown Acid-Etched Opal Glass',
            'UL, CE & AS/NZS 60598 Certified'
          ],
          stylingTip: {
            title: 'Layered Ambiance: The Golden Ratio',
            body: 'Avoid relying solely on overhead ceiling lights. Combine a diffused fluted chandelier over the dining table with portable wireless table lamps at eye level for intimate evening dining.'
          },
          faqs: [
            { q: 'Are these lights compatible with wall dimmers?', a: 'Yes. All hardwired fixtures support standard phase-cut and 0-10V architectural dimming systems with zero flicker.' },
            { q: 'What is the battery life on portable lamps like Kanso?', a: 'The Kanso Table Lamp provides up to 20 hours on ambient mood setting (30%) and 8 hours at full 100% reading brightness via USB-C fast charge.' },
            { q: 'Are bulbs included with the chandeliers?', a: 'Yes, custom warm-dim LED modules (2700K, 50,000-hour rated) are pre-installed and thoroughly tested before crating.' }
          ]
        };

      case 'audio-tech':
        return {
          title: 'Audio & Living Tech',
          subtitle: 'High-Fidelity Sound & Tactile Tech',
          badge: 'Audiophile Sound & Kvadrat Wool',
          heroImage: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1600&q=80',
          description: 'Acoustic excellence married to living spaces. 360-degree wireless hi-fi sound wrapped in Danish architectural wool, alongside wireless MagSafe induction charging trays in full-grain Italian leather.',
          features: [
            '360° Omnidirectional Acoustic Dispersion',
            'Apple AirPlay 2, Spotify Connect & Lossless Bluetooth',
            'Bespoke Kvadrat Reminisce Wool Weave',
            'Qi2 15W Fast Wireless Magnetic Charging'
          ],
          stylingTip: {
            title: 'Invisible Acoustic Placement',
            body: 'Unlike industrial black speaker boxes, our Aether 360° is designed to rest naturally on sideboards and credenzas, filling open spaces with warm vinyl acoustics.'
          },
          faqs: [
            { q: 'Can two Aether speakers be paired as a stereo pair?', a: 'Yes. Through the Buyo companion app or Apple AirPlay, two speakers pair wirelessly into discrete left and right audiophile channels.' },
            { q: 'Does the Valet Tray charge phone and watch simultaneously?', a: 'Yes. The Valet Tray features dual high-speed Qi2 magnetic coils that charge your phone and smartwatch or earbuds concurrently.' }
          ]
        };

      case 'tableware':
        return {
          title: 'Ceramics & Tableware',
          subtitle: 'Artisanal Stoneware & Fluted Glass',
          badge: 'High-Fire 1280°C Stoneware',
          heroImage: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1600&q=80',
          description: 'Hand-thrown stoneware dinnerware sets with organic matte glazes and ripple-fluted mouth-blown crystal tumblers designed for communal everyday dining and celebratory gatherings.',
          features: [
            'High-Fired at 1280°C for Chip Resistance',
            '100% Food Safe, Lead & Cadmium Free',
            'Dishwasher & Microwave Safe Durability',
            'Mouth-Blown Ripple Crystal Construction'
          ],
          stylingTip: {
            title: 'The Organic Minimalist Table',
            body: 'Combine matte charcoal or chalk stoneware plates with fluted ripple crystal tumblers and natural linen napkins. Imperfect rim curves catch candlelight naturally.'
          },
          faqs: [
            { q: 'Is the stoneware safe for daily dishwasher use?', a: 'Yes. Fired at 1280°C, our dense vitrified stoneware does not absorb moisture and resists thermal shock in standard dishwashers.' },
            { q: 'Are replacement plates available if one breaks?', a: 'Yes. We maintain open-stock replacement inventory for all dinnerware collections so you can replace individual pieces anytime.' }
          ]
        };

      case 'textiles':
      default:
        return {
          title: 'Bedding & Living Textiles',
          subtitle: 'Washed European Flax & Baby Alpaca',
          badge: '100% Normandy French Flax',
          heroImage: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1600&q=80',
          description: 'Pure French washed flax linen duvet sets and Peruvian baby alpaca waffle throws. Pre-washed with volcanic stones for relaxed softness that grows cozier with every wash.',
          features: [
            '180 GSM Pure Normandy Flax Linen',
            'OEKO-TEX Standard 100 Certified',
            'Thermo-Regulating for Warm & Cool Sleep',
            'Hypoallergenic Baby Alpaca Wool'
          ],
          stylingTip: {
            title: 'Effortless Bed Styling',
            body: 'Embrace natural flax linen wrinkles rather than ironing. Layer a neutral oatmeal duvet cover with a draped terracotta alpaca throw at the foot of the bed for textural depth.'
          },
          faqs: [
            { q: 'How should French linen bedding be washed?', a: 'Wash on a gentle cycle in lukewarm water with mild liquid detergent. Tumble dry on low or line dry in the shade to preserve natural flax fibers.' },
            { q: 'Does the linen shed or pill initially?', a: 'Because our flax is stone-washed during weaving, shedding is minimal and disappears completely after the first 1-2 home washes.' }
          ]
        };
    }
  }, [department]);

  // Extract materials available in this department
  const availableMaterials = useMemo(() => {
    const map = new Map<string, ProductMaterial>();
    products.forEach((p) => {
      p.materials.forEach((m) => {
        if (!map.has(m.id)) {
          map.set(m.id, m);
        }
      });
    });
    return Array.from(map.values());
  }, [products]);

  // Filtered & Sorted products
  const departmentProducts = useMemo(() => {
    let list = [...products];

    if (selectedMaterial !== 'all') {
      list = list.filter((p) => p.materials.some((m) => m.id === selectedMaterial));
    }

    if (inStockOnly) {
      list = list.filter((p) => p.readyToDeliver);
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [products, selectedMaterial, inStockOnly, sortBy]);

  // Other departments for cross-navigation
  const allDepts: { id: StorePage; name: string; count: number }[] = [
    { id: 'furniture', name: 'Furniture & Seating', count: 3 },
    { id: 'lighting', name: 'Architectural Lighting', count: 3 },
    { id: 'audio-tech', name: 'Audio & Living Tech', count: 2 },
    { id: 'tableware', name: 'Ceramics & Tableware', count: 2 },
    { id: 'textiles', name: 'Bedding & Textiles', count: 2 }
  ];
  const otherDepartments = allDepts.filter((d) => d.id !== department);

  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      
      {/* 1. BREADCRUMBS BAR */}
      <div className="bg-slate-100/80 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-white/10 py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <button 
            onClick={onNavigateHome}
            className="hover:text-amber-500 font-medium transition-colors cursor-pointer"
          >
            Buyo
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-400">Departments</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-bold text-slate-900 dark:text-white">
            {meta.title}
          </span>
        </div>
      </div>

      {/* 2. DEDICATED DEPARTMENT HERO BANNER */}
      <div className="relative overflow-hidden bg-slate-950 text-white py-16 sm:py-24 border-b border-white/10">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={meta.heroImage} 
            alt={meta.title}
            className="w-full h-full object-cover opacity-25 filter blur-[1px] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl space-y-4">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-xs font-bold text-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{meta.badge}</span>
            </div>

            {/* Department Title */}
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              {meta.title}
            </h1>

            {/* Subtitle & Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {meta.description}
            </p>

            {/* Department Feature Badges Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
              {meta.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 stroke-[3]" />
                  <span className="font-medium text-[11px] leading-tight">{feat}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* 3. DEPARTMENT SUB-FILTER & SORTING TOOLBAR */}
      <div className="sticky top-14 sm:top-16 z-30 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 py-3.5 px-4 sm:px-6 lg:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Material Swatches Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <span className="text-xs font-bold text-slate-400 mr-1 shrink-0 uppercase tracking-wider text-[10px]">
              Material:
            </span>
            <button
              onClick={() => setSelectedMaterial('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all cursor-pointer ${
                selectedMaterial === 'all'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              All Materials ({products.length})
            </button>

            {availableMaterials.map((mat) => (
              <button
                key={mat.id}
                onClick={() => setSelectedMaterial(mat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 flex items-center gap-1.5 transition-all cursor-pointer ${
                  selectedMaterial === mat.id
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-white/5'
                }`}
              >
                <span 
                  className="w-2.5 h-2.5 rounded-full border border-black/20" 
                  style={{ backgroundColor: mat.colorHex }}
                />
                <span>{mat.name}</span>
              </button>
            ))}
          </div>

          {/* Right Filters: In-Stock & Sort By */}
          <div className="flex items-center justify-between md:justify-end gap-3 shrink-0">
            {/* Ready to Deliver Switch */}
            <button
              onClick={() => setInStockOnly(!inStockOnly)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                inStockOnly
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${inStockOnly ? 'bg-emerald-500' : 'bg-slate-400'}`} />
              <span>Ships in 24h</span>
            </button>

            {/* Sorting Dropdown */}
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent font-bold text-slate-900 dark:text-white focus:outline-hidden cursor-pointer"
              >
                <option value="featured" className="bg-white dark:bg-slate-900">Featured Atelier</option>
                <option value="price-asc" className="bg-white dark:bg-slate-900">Price: Low to High</option>
                <option value="price-desc" className="bg-white dark:bg-slate-900">Price: High to Low</option>
                <option value="rating" className="bg-white dark:bg-slate-900">Highest Rated (★)</option>
              </select>
            </div>
          </div>

        </div>
      </div>

      {/* 4. PRODUCT GRID */}
      <section className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Results Counter */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200/80 dark:border-white/10">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              {meta.title} Collection
            </h2>
            <p className="text-xs text-slate-500">
              Showing {departmentProducts.length} pieces curated for contemporary interiors
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Truck className="w-3.5 h-3.5 text-amber-500" />
              <span>Free In-Home Placement over $150</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {departmentProducts.map((product) => (
            <GalaxyProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
              onToggleWishlist={onToggleWishlist}
              isWishlisted={wishlist.some(w => w.productId === product.id)}
            />
          ))}
        </div>

        {departmentProducts.length === 0 && (
          <div className="py-16 text-center space-y-3 bg-slate-50 dark:bg-slate-900/40 rounded-3xl p-8 border border-dashed border-slate-300 dark:border-white/10">
            <Info className="w-8 h-8 text-amber-500 mx-auto" />
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              No matching pieces found with current filters
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try selecting a different material swatch or clearing the "Ships in 24h" filter.
            </p>
            <button
              onClick={() => {
                setSelectedMaterial('all');
                setInStockOnly(false);
              }}
              className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </section>

      {/* 5. STYLING GUIDE & ATELIER NOTES */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-6 sm:p-10 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Atelier Styling Notes
              </span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                {meta.stylingTip.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {meta.stylingTip.body}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-700 dark:text-slate-200">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>30-Day In-Home Trial</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-amber-500" />
                  <span>White-Glove In-Home Placement</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-3">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Need Personalized Styling Advice?</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Our interior stylists can draft 3D floor plan layout recommendations and dispatch complimentary material swatch kits.
              </p>
              <button
                onClick={() => onNavigatePage('showrooms')}
                className="w-full py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-xs flex items-center justify-center gap-2 hover:bg-amber-400 hover:text-slate-950 transition-colors cursor-pointer"
              >
                <span>Book 1-on-1 Studio Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 6. DEPARTMENT FAQS */}
      <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center space-y-2 mb-8">
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Care &amp; Delivery
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-3">
          {meta.faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/80 overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 dark:text-white cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180 text-amber-500' : ''}`} />
              </button>

              {openFaq === idx && (
                <div className="px-4 pb-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. CROSS-DEPARTMENT EXPLORATION STRIP */}
      <section className="py-10 bg-slate-100 dark:bg-slate-900 border-t border-slate-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
            Explore Other Departments
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {otherDepartments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => {
                  onNavigatePage(dept.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-3.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-white/10 hover:border-amber-500 text-left flex items-center justify-between group transition-all cursor-pointer shadow-xs"
              >
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-amber-500 block">
                    {dept.name}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {dept.count} curated items
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
