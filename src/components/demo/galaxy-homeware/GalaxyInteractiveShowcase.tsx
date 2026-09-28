'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Sun, 
  ShieldCheck, 
  Check, 
  Layers, 
  ArrowRight,
  Music,
  Power,
  Armchair,
  Utensils,
  Speaker
} from 'lucide-react';
import { MoodLighting } from './types';

interface GalaxyInteractiveShowcaseProps {
  onExploreClick: () => void;
}

export function GalaxyInteractiveShowcase({ onExploreClick }: GalaxyInteractiveShowcaseProps) {
  const [activeMood, setActiveMood] = useState<MoodLighting>('evening');
  const [activeScene, setActiveScene] = useState<'lounge' | 'dining' | 'audio'>('lounge');
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);
  const [brightness, setBrightness] = useState(80);

  const sceneImages = {
    lounge: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
    dining: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1000&q=80',
    audio: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=80'
  };

  const sceneTitles = {
    lounge: 'Lounge Nook • Koto Bouclé & Smoked Oak',
    dining: 'Dining Hall • Norden Oak & Komorebi Glass',
    audio: 'Listening Study • Atelier Hi-Fi & Acoustic Wool'
  };

  // Glow tints
  const moodColors = {
    morning: 'rgba(251, 191, 36,',
    daylight: 'rgba(56, 189, 248,',
    evening: 'rgba(245, 158, 11,'
  };

  const glowOpacity = (brightness / 100) * 0.45;

  return (
    <section id="room-mood-studio" className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden border-y border-white/10">
      
      {/* Background Soft Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[160px] pointer-events-none transition-all duration-700"
        style={{
          backgroundColor: `${moodColors[activeMood]} ${glowOpacity})`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-amber-500/20 text-amber-300 border border-amber-500/30">
            Interactive Living Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            The Living Room Ambiance Studio
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Experience how warm sculptural lighting, organic timber textures, and acoustic audio coalesce into an intimate everyday sanctuary.
          </p>
        </div>

        {/* 2-Column Interactive Playground */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: The Room Scene Configurator */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            <div className="w-full max-w-[440px] rounded-3xl p-4 backdrop-blur-2xl bg-white/5 border border-white/15 shadow-2xl relative">
              
              {/* Scene Display */}
              <div 
                className="relative rounded-2xl aspect-[3.8/4.6] overflow-hidden bg-slate-900 border border-white/20 transition-all duration-500 flex flex-col justify-between p-4"
                style={{
                  boxShadow: `0 0 ${brightness * 0.6}px ${moodColors[activeMood]} ${glowOpacity}), inset 0 0 20px rgba(255,255,255,0.1)`
                }}
              >
                {/* Scene Image */}
                <img
                  src={sceneImages[activeScene]}
                  alt="Interactive Room Scene"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                />

                {/* Mood Color Tint */}
                <div 
                  className="absolute inset-0 pointer-events-none transition-all duration-700"
                  style={{
                    backgroundColor: activeMood === 'evening' 
                      ? 'rgba(217, 119, 6, 0.20)' 
                      : activeMood === 'morning' 
                      ? 'rgba(251, 191, 36, 0.12)' 
                      : 'rgba(56, 189, 248, 0.06)'
                  }}
                />

                {/* Top Status */}
                <div className="relative z-10 flex items-center justify-between text-[11px] text-white">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/15">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-[10px] uppercase font-bold">{activeScene} Space</span>
                  </div>

                  {isPlayingAudio && (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30 text-[10px] font-bold">
                      <Music className="w-3 h-3 text-amber-400" />
                      <span>Nordic Vinyl Session</span>
                    </div>
                  )}
                </div>

                {/* Bottom Readout */}
                <div className="relative z-10 p-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-[11px]">
                  <span className="text-white font-medium text-[11px] truncate max-w-[240px]">
                    {sceneTitles[activeScene]}
                  </span>
                  <span className="text-amber-400 font-mono font-bold text-[10px] shrink-0">
                    {activeMood === 'morning' ? '3000K' : activeMood === 'daylight' ? '4500K' : '2400K'}
                  </span>
                </div>

              </div>

              {/* Interactive Control Console */}
              <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                
                {/* Scene Switcher */}
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5 tracking-wider">
                    Select Interior Space:
                  </span>
                  <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-slate-900 border border-white/10">
                    <button
                      onClick={() => setActiveScene('lounge')}
                      className={`py-1.5 px-2 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                        activeScene === 'lounge' ? 'bg-amber-400 text-slate-950' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Lounge Nook
                    </button>
                    <button
                      onClick={() => setActiveScene('dining')}
                      className={`py-1.5 px-2 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                        activeScene === 'dining' ? 'bg-amber-400 text-slate-950' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Dining Hall
                    </button>
                    <button
                      onClick={() => setActiveScene('audio')}
                      className={`py-1.5 px-2 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                        activeScene === 'audio' ? 'bg-amber-400 text-slate-950' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Listening Study
                    </button>
                  </div>
                </div>

                {/* Lighting Ambiance Buttons */}
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5 tracking-wider">
                    Natural Light Spectrum:
                  </span>
                  <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-slate-900 border border-white/10">
                    <button
                      onClick={() => setActiveMood('morning')}
                      className={`py-1.5 px-2 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                        activeMood === 'morning' ? 'bg-white text-slate-950' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Morning Sun
                    </button>
                    <button
                      onClick={() => setActiveMood('daylight')}
                      className={`py-1.5 px-2 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                        activeMood === 'daylight' ? 'bg-white text-slate-950' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Nordic Day
                    </button>
                    <button
                      onClick={() => setActiveMood('evening')}
                      className={`py-1.5 px-2 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                        activeMood === 'evening' ? 'bg-white text-slate-950' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Evening Glow
                    </button>
                  </div>
                </div>

                {/* Acoustic Vinyl Toggle */}
                <button
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className={`w-full py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer border ${
                    isPlayingAudio
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-xs'
                      : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
                  }`}
                >
                  <Music className="w-4 h-4 text-amber-400" />
                  <span>{isPlayingAudio ? 'Acoustic Sound Simulation: ON' : 'Turn Sound Simulation ON'}</span>
                </button>

              </div>

            </div>

          </div>

          {/* Right: Craftsmanship Advantages */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-4">
              {[
                {
                  title: 'FSC®-CERTIFIED EUROPEAN SOLID HARDWOOD',
                  desc: 'Every dining table and credenza frame is joined from sustainably harvested European white oak and American black walnut.'
                },
                {
                  title: 'HEAVYWEIGHT OATMEAL WOOL BOUCLÉ',
                  desc: 'Tactile, non-synthetic wool and alpaca yarn with natural hydrophobic stain-repellent characteristics for generational wear.'
                },
                {
                  title: 'MOUTH-BLOWN ACID-ETCHED OPAL GLASS',
                  desc: 'Handcrafted in Veneto, Italy. Multi-layered glass matrices eliminate diode harshness to produce soft, candle-like illumination.'
                },
                {
                  title: '360° ROOM-SENSING AUDIOPHILE ACOUSTICS',
                  desc: 'Dual silk-dome tweeters and deep woofers engineered to calibrate distortion-free lossless sound in open-plan architectural homes.'
                },
                {
                  title: 'PLANT-BASED NON-TOXIC OSMO WAX OILS',
                  desc: 'Zero-VOC breathable finishes preserve the natural tactile texture of timber while protecting against daily liquid spills.'
                },
                {
                  title: 'CIRCULAR RECYCLABLE CRATED PACKAGING',
                  desc: 'Custom engineered honeycomb carton pallets and zero non-biodegradable plastics ensure your order arrives in flawless condition.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/5 transition-colors">
                  <div className="p-1 rounded-full bg-amber-500/20 text-amber-300 shrink-0 mt-0.5 border border-amber-500/30">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-slate-950 font-black text-xs uppercase tracking-widest hover:bg-amber-400 hover:text-slate-950 transition-all hover:scale-102 cursor-pointer shadow-xl"
              >
                EXPLORE ALL COLLECTIONS
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
