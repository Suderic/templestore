'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Award, 
  Sparkles,
  Headphones,
  Star,
  CheckCircle2
} from 'lucide-react';
import { LUMINA_TRUST_POINTS } from './data';

export function GalaxyTrustSection() {
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Truck': return <Truck className="w-5 h-5" />;
      case 'RotateCcw': return <RotateCcw className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Award': return <Award className="w-5 h-5" />;
      case 'Headphones': return <Headphones className="w-5 h-5" />;
      default: return <ShieldCheck className="w-5 h-5" />;
    }
  };

  return (
    <section id="craftsmanship" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Trust Points Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Generational Quality
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Materials &amp; Craftsmanship Standards
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              We create pieces meant to be lived with, touched, and cherished for decades to come.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {LUMINA_TRUST_POINTS.map((point, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-3xl backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-white/10 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-500/20">
                    {getIcon(point.icon)}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {point.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>100% Certified Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="rounded-3xl p-6 sm:p-10 backdrop-blur-xl bg-white/70 dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/10 shadow-sm space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Verified Testimonials
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
                Cherished in Over 4,200 Contemporary Homes &amp; Studios
              </h3>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-900 dark:text-white">4.95 / 5.0</span>
              <span className="text-xs text-slate-400 font-mono">(480+ Reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                quote: "The Koto lounge chair is the first piece guests touch when they walk in. The oatmeal bouclé texture is so plush yet durable enough for our dog.",
                author: "Sarah & David Henderson",
                project: "Toorak Residence Renovation",
                location: "Melbourne, VIC",
                item: "Koto Bouclé Lounge Chair (Smoked Oak)"
              },
              {
                quote: "The Norden dining table arrived via white-glove delivery into our second-floor dining room. The book-matched solid white oak grain is like fine art.",
                author: "Marcus Chen",
                project: "Ponsonby Villa Extension",
                location: "Auckland, New Zealand",
                item: "Norden 2200mm Solid White Oak Table"
              },
              {
                quote: "Komorebi pendant over our kitchen island gives the warmest, most flattering dining light. We also bought the Atelier speaker—acoustics are unbelievable.",
                author: "Gemma Fitzpatrick",
                project: "Architectural Studio Build",
                location: "Sydney, NSW",
                item: "Komorebi Chandelier + Atelier Hi-Fi"
              }
            ].map((rev, i) => (
              <div 
                key={i}
                className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-white/5 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 italic leading-relaxed">
                    "{rev.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 dark:border-white/5 text-[11px]">
                  <p className="font-bold text-slate-900 dark:text-white">{rev.author}</p>
                  <p className="text-slate-400">{rev.project} • {rev.location}</p>
                  <p className="text-amber-600 dark:text-amber-400 font-medium text-[10px] mt-0.5">{rev.item}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
