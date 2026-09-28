'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  RotateCcw, 
  Truck, 
  ChevronRight, 
  Check, 
  MapPin, 
  Award, 
  HeartHandshake, 
  FileText,
  Clock,
  ArrowRight
} from 'lucide-react';
import { StorePage } from '../types';

interface CraftsmanshipPageViewProps {
  onNavigateHome: () => void;
  onNavigatePage: (page: StorePage) => void;
}

export function CraftsmanshipPageView({ onNavigateHome, onNavigatePage }: CraftsmanshipPageViewProps) {
  const [activeCareTab, setActiveCareTab] = useState<'timber' | 'fabric' | 'lighting' | 'ceramics'>('timber');

  const workshops = [
    {
      country: 'Italy',
      region: 'Veneto Studio',
      craft: 'Architectural Spun Brass & Mouth-Blown Opal Glass',
      desc: 'Master metalworkers hand-spin solid raw brass and anneal mouth-blown glass diffusers in multi-generational family kilns.'
    },
    {
      country: 'Sweden',
      region: 'Småland Joinery',
      craft: 'Kiln-Dried European White Oak & Traditional Mortise Joinery',
      desc: 'Sustainably harvested FSC oaks seasoned for 18 months, machined to 0.1mm tolerances and finished by hand with natural plant oils.'
    },
    {
      country: 'France',
      region: 'Normandy Atelier',
      craft: 'Long-Staple Organic French Flax Weaving',
      desc: 'Centuries-old flax cultivation along the Atlantic coast, pre-washed with volcanic pumice stones for immediate relaxed tactile softness.'
    },
    {
      country: 'Japan',
      region: 'Arita Kilns',
      craft: 'High-Fire 1280°C Vitrified Stoneware',
      desc: 'Local clays hand-formed and fired at intense temperatures to create non-porous, chip-resistant ceramic vessels for everyday rituals.'
    }
  ];

  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      
      {/* 1. BREADCRUMBS */}
      <div className="bg-slate-100/80 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-white/10 py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <button 
            onClick={onNavigateHome}
            className="hover:text-amber-500 font-medium transition-colors cursor-pointer"
          >
            Buyo
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-bold text-slate-900 dark:text-white">
            Story, Craftsmanship &amp; 10-Yr Guarantee
          </span>
        </div>
      </div>

      {/* 2. HERO */}
      <div className="relative overflow-hidden bg-slate-950 text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <div className="max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Decade-Long Commitment</span>
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Honest Materials. Generational Craft.
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              We design for decades, not fleeting seasons. Every timber grain, hand-turned brass luminaire, and upholstery stitch reflects our belief that modern homes deserve furniture with integrity.
            </p>
          </div>
        </div>
      </div>

      {/* 3. FOUR CORE GUARANTEES GRID */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 shadow-lg space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              10-Year Craft Guarantee
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Every timber joinery frame, structural spring system, and hardwired luminaire component is covered by a 10-year repair or replacement promise.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 shadow-lg space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <RotateCcw className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              30-Day In-Home Trial
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Experience our pieces in your natural room lighting and daily routines. If a silhouette doesn't feel effortless in your space, return it without hassle.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 shadow-lg space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-500/10 text-sky-500 flex items-center justify-center">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              White-Glove In-Home Placement
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Our trained two-person delivery team handles room-of-choice placement, assembly, inspection, and 100% recycling of protective timber crates.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 shadow-lg space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              100% FSC® Certified Hardwood
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Sustainably harvested from certified European forests, seasoned with solar kilns, and treated with non-toxic, zero-VOC natural plant wax oils.
            </p>
          </div>

        </div>
      </section>

      {/* 4. WORKSHOPS & PROVENANCE MAP */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
              Artisan Provenance
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Where Our Collections Are Born
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              We partner directly with specialized heritage ateliers across Europe and Japan who have spent generations perfecting their craft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workshops.map((w, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 shadow-md flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-500 font-bold flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                      {w.country}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs font-semibold text-slate-500">{w.region}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {w.craft}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed pt-1">
                    {w.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CARE & MAINTENANCE COMPANION */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center space-y-2 mb-8">
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Longevity &amp; Care
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Material Maintenance Guides
          </h2>
          <p className="text-xs text-slate-500">
            Simple rituals to keep natural materials aging gracefully over decades.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {[
            { id: 'timber', label: 'Solid White Oak & Walnut' },
            { id: 'fabric', label: 'Wool Bouclé & Linen' },
            { id: 'lighting', label: 'Raw Brass & Glass' },
            { id: 'ceramics', label: 'High-Fire Stoneware' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCareTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCareTab === tab.id
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Box */}
        <div className="rounded-3xl p-6 sm:p-8 bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 shadow-lg space-y-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          {activeCareTab === 'timber' && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Caring for Solid White Oak and Smoked Walnut
              </h4>
              <p>
                Our hardwoods are finished with organic beeswax and plant oils, allowing the wood pores to breathe naturally. Dust regularly with a dry, lint-free microfiber cloth.
              </p>
              <ul className="space-y-1.5 list-disc pl-5 text-slate-500 dark:text-slate-400">
                <li>Always use coasters under damp glasses and heat trivets under hot pans.</li>
                <li>Wipe liquid spills promptly with a dry absorbent cloth. Avoid silicone sprays or harsh chemical detergents.</li>
                <li>Apply our complimentary organic timber conditioning wax once annually to restore deep grain luster.</li>
              </ul>
            </div>
          )}

          {activeCareTab === 'fabric' && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Caring for Tactile Bouclé and Washed French Linen
              </h4>
              <p>
                Our 50,000 Martindale wool bouclé is naturally soil-resistant due to natural lanolin oils.
              </p>
              <ul className="space-y-1.5 list-disc pl-5 text-slate-500 dark:text-slate-400">
                <li>Vacuum upholstery bi-weekly on low suction using a soft brush attachment.</li>
                <li>For water or coffee spills, blot gently with a clean dry towel; do not rub into the bouclé loops.</li>
                <li>For linen bedding: wash in lukewarm water on a gentle cycle, and tumble dry low or line dry in the shade.</li>
              </ul>
            </div>
          )}

          {activeCareTab === 'lighting' && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Caring for Raw Brushed Brass and Mouth-Blown Glass
              </h4>
              <p>
                Our raw brass components will gracefully develop an authentic golden living patina over years of use.
              </p>
              <ul className="space-y-1.5 list-disc pl-5 text-slate-500 dark:text-slate-400">
                <li>Clean glass diffusers using a soft microfiber cloth lightly misted with distilled water when the fixture is cool.</li>
                <li>To maintain bright brass shine, polish occasionally with Cape Cod metal polishing cloths.</li>
                <li>Ensure power is disconnected from the wall switch prior to cleaning any hardwired pendant.</li>
              </ul>
            </div>
          )}

          {activeCareTab === 'ceramics' && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Caring for High-Fire 1280°C Vitrified Stoneware
              </h4>
              <p>
                Durable, non-porous, and resilient against everyday family meals.
              </p>
              <ul className="space-y-1.5 list-disc pl-5 text-slate-500 dark:text-slate-400">
                <li>100% dishwasher safe. Load plates with small gaps between rims to prevent mechanical vibrations.</li>
                <li>Microwave safe. Avoid moving directly from deep freezer to a preheated oven to prevent thermal shock.</li>
                <li>Cutlery marking from steel knives can be easily lifted using Bar Keepers Friend ceramic cleanser.</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* 6. CALL TO ACTION TO SHOP */}
      <section className="py-12 bg-slate-950 text-white border-t border-white/10 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-black text-white">
            Ready to Curate Your Home?
          </h3>
          <p className="text-xs text-slate-400">
            Explore our collections across furniture, architectural lighting, acoustics, and tableware.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigatePage('furniture')}
              className="px-6 py-3 rounded-2xl bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-colors cursor-pointer"
            >
              Explore Furniture →
            </button>
            <button
              onClick={() => onNavigatePage('lighting')}
              className="px-6 py-3 rounded-2xl bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-colors cursor-pointer"
            >
              Explore Lighting →
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
