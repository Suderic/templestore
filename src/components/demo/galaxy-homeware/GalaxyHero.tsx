'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Play, 
  Star,
  Layers,
  ChevronRight,
  Armchair,
  Lamp,
  Speaker
} from 'lucide-react';
import { MoodLighting } from './types';

interface GalaxyHeroProps {
  onExploreClick: () => void;
  onOpenStudio: () => void;
}

export function GalaxyHero({ onExploreClick, onOpenStudio }: GalaxyHeroProps) {
  const [activeMood, setActiveMood] = useState<MoodLighting>('evening');
  const [activeMaterialPreset, setActiveMaterialPreset] = useState<'oak' | 'walnut' | 'brass'>('oak');

  // Atmosphere glow tones
  const moodGlows = {
    morning: 'rgba(251, 191, 36, 0.35)', // Golden Morning Sun
    daylight: 'rgba(56, 189, 248, 0.28)', // Crisp Nordic Daylight
    evening: 'rgba(245, 158, 11, 0.40)'   // Warm Intimate Candlelight
  };

  const heroImages = {
    oak: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80',
    walnut: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
    brass: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80'
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      
      {/* Background Decorative Ambient Radial Gradients */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] rounded-full blur-[140px] pointer-events-none opacity-40 transition-all duration-700"
        style={{ backgroundColor: moodGlows[activeMood] }}
      />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines, Value Prop & Interactive CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-amber-300 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Architectural Living 2026 Collection</span>
              <span className="hidden sm:inline text-white/40">•</span>
              <span className="hidden sm:inline text-white/80">FSC® Sustainable Hardwood</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-white">
              Timeless Design,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-stone-200 to-amber-100">
                Crafted for Living.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Curated Scandinavian furniture, sculptural ambient lighting, audiophile acoustics, and hand-thrown stoneware ceramics. Honest materials engineered for human warmth.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-amber-400/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Explore All Departments</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenStudio}
                className="px-5 py-3.5 rounded-2xl backdrop-blur-md bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 flex items-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <Play className="w-3 h-3 fill-current text-amber-300 ml-0.5" />
                </div>
                <span>Interactive Ambiance Studio</span>
              </button>
            </div>

            {/* Trust Indicator Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <span className="text-xl sm:text-2xl font-black text-white block">10-Year</span>
                <span className="text-[11px] sm:text-xs text-slate-400">Craftsmanship Warranty</span>
              </div>
              <div className="border-l border-white/10 pl-3">
                <span className="text-xl sm:text-2xl font-black text-white block">100%</span>
                <span className="text-[11px] sm:text-xs text-slate-400">FSC Certified Timber</span>
              </div>
              <div className="border-l border-white/10 pl-3">
                <span className="text-xl sm:text-2xl font-black text-white block">30-Day</span>
                <span className="text-[11px] sm:text-xs text-slate-400">In-Home Comfort Trial</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Living Room Showcase Card */}
          <div className="lg:col-span-5 relative">
            
            <div className="relative mx-auto max-w-[440px] rounded-3xl p-3 sm:p-4 backdrop-blur-xl bg-white/5 border border-white/15 shadow-2xl shadow-black/80">
              
              {/* Dynamic Living Showcase Frame */}
              <div 
                className="relative rounded-2xl overflow-hidden aspect-[4/4.8] bg-slate-900 border border-white/20 transition-all duration-700 shadow-inner flex flex-col justify-between p-4"
                style={{
                  boxShadow: `0 0 45px ${moodGlows[activeMood]}, inset 0 0 15px rgba(255,255,255,0.1)`
                }}
              >
                {/* Dynamic Lifestyle Interior Photo */}
                <img
                  src={heroImages[activeMaterialPreset]}
                  alt="Buyo Living Space"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 transition-opacity duration-700"
                />

                {/* Subtle Ambiance Filter Tint */}
                <div 
                  className="absolute inset-0 pointer-events-none transition-all duration-700"
                  style={{
                    backgroundColor: activeMood === 'evening' 
                      ? 'rgba(217, 119, 6, 0.15)' 
                      : activeMood === 'morning' 
                      ? 'rgba(251, 191, 36, 0.10)' 
                      : 'rgba(56, 189, 248, 0.05)'
                  }}
                />

                {/* Top Badge Overlay */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-300/30 flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Featured Piece • Koto Lounge</span>
                  </span>

                  <span className="px-2 py-0.5 rounded-md text-[10px] font-mono text-white/90 bg-slate-950/70 backdrop-blur-md border border-white/10">
                    Natural Oak &amp; Bouclé
                  </span>
                </div>

                {/* Bottom Interactive Mood & Material Customizer */}
                <div className="relative z-10 rounded-2xl backdrop-blur-xl bg-slate-950/85 border border-white/15 p-3 space-y-2.5 shadow-xl">
                  
                  <div className="flex items-center justify-between text-[11px] text-slate-300">
                    <span className="font-semibold flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>Natural Ambiance Simulation</span>
                    </span>
                    <span className="font-mono text-amber-400 text-[10px] font-bold uppercase">
                      {activeMood === 'morning' ? '3000K Morning' : activeMood === 'daylight' ? '4500K Day' : '2700K Evening Warmth'}
                    </span>
                  </div>

                  {/* Mood Buttons */}
                  <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10">
                    <button
                      onClick={() => setActiveMood('morning')}
                      className={`py-1.5 px-2 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                        activeMood === 'morning'
                          ? 'bg-amber-400 text-slate-950 shadow-xs'
                          : 'text-slate-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      Morning Sun
                    </button>
                    <button
                      onClick={() => setActiveMood('daylight')}
                      className={`py-1.5 px-2 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                        activeMood === 'daylight'
                          ? 'bg-sky-400 text-slate-950 shadow-xs'
                          : 'text-slate-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      Nordic Day
                    </button>
                    <button
                      onClick={() => setActiveMood('evening')}
                      className={`py-1.5 px-2 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                        activeMood === 'evening'
                          ? 'bg-amber-500 text-slate-950 shadow-xs'
                          : 'text-slate-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      Evening Glow
                    </button>
                  </div>

                  {/* Material Preset Switcher */}
                  <div className="flex items-center justify-between pt-1 text-[10px] text-slate-300">
                    <span className="text-slate-400">Palette:</span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setActiveMaterialPreset('oak')}
                        className={`px-2 py-0.5 rounded-md font-semibold transition-all cursor-pointer ${
                          activeMaterialPreset === 'oak' 
                            ? 'bg-white text-slate-950' 
                            : 'bg-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        Oak &amp; Bouclé
                      </button>
                      <button
                        onClick={() => setActiveMaterialPreset('walnut')}
                        className={`px-2 py-0.5 rounded-md font-semibold transition-all cursor-pointer ${
                          activeMaterialPreset === 'walnut' 
                            ? 'bg-white text-slate-950' 
                            : 'bg-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        Solid Walnut
                      </button>
                      <button
                        onClick={() => setActiveMaterialPreset('brass')}
                        className={`px-2 py-0.5 rounded-md font-semibold transition-all cursor-pointer ${
                          activeMaterialPreset === 'brass' 
                            ? 'bg-white text-slate-950' 
                            : 'bg-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        Mouth-Blown Glass
                      </button>
                    </div>
                  </div>

                </div>

              </div>

              {/* Float Tag */}
              <div className="absolute -bottom-3 -left-3 hidden sm:flex items-center gap-2 p-2.5 rounded-xl backdrop-blur-xl bg-slate-900/90 border border-white/15 text-xs text-white shadow-xl">
                <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Complimentary Room-of-Choice Delivery</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
