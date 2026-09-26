'use client';

import React from 'react';
import { TreePine, ArrowUp, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { ResortPage, DeviceMode } from './types';
import { AlderAshReveal } from './AlderAshReveal';

interface Props {
  onPageChange: (page: ResortPage) => void;
  onOpenBooking: () => void;
  onToast: (msg: string) => void;
  deviceMode?: DeviceMode;
}

export function AlderAshFooter({ onPageChange, onOpenBooking, onToast, deviceMode = 'desktop' }: Props) {
  const isMobile = deviceMode === 'mobile';
  const isTablet = deviceMode === 'tablet';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerGridClass = isMobile 
    ? 'grid grid-cols-1 gap-8' 
    : isTablet 
    ? 'grid grid-cols-2 gap-8' 
    : 'grid grid-cols-1 md:grid-cols-4 gap-10';

  return (
    <footer className={`w-full bg-[#081812] border-t border-[#F5EFE3]/10 text-[#F5EFE3] pt-14 sm:pt-16 ${isMobile ? 'pb-24' : 'pb-12'} transition-colors`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Column Grid */}
        <AlderAshReveal direction="up">
          <div className={`${footerGridClass} pb-12 border-b border-[#F5EFE3]/10`}>
          
          {/* Brand & Ethos */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#164031] to-[#0B241C] border border-[#D98F4A]/40 flex items-center justify-center text-[#D98F4A]">
                <TreePine className="w-5 h-5" />
              </div>
              <span className="font-serif text-xl font-medium tracking-tight text-[#F5EFE3]">
                Alder &amp; Ash
              </span>
            </div>

            <p className="text-xs text-[#E8DCC3]/70 leading-relaxed font-sans">
              A 40-cabin eco-retreat built into old-growth pine in the Cascade Foothills. Founded in 1912 with wood-fired baths and off-grid restorative calm.
            </p>

            <div className="pt-2 text-xs text-[#E8DCC3]/50 font-serif italic">
              "Slow down, the forest waited for you."
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h5 className="font-serif text-sm font-medium text-[#D98F4A] tracking-wide">
              The Retreat
            </h5>
            <ul className="space-y-2 text-xs text-[#E8DCC3]/70 font-sans">
              <li>
                <button onClick={() => onPageChange('rooms')} className="hover:text-[#D98F4A] transition-colors cursor-pointer">
                  Accommodations &amp; Cabins
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('dining')} className="hover:text-[#D98F4A] transition-colors cursor-pointer">
                  The Hearth Room &amp; Menus
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('experiences')} className="hover:text-[#D98F4A] transition-colors cursor-pointer">
                  Seasonal Activities &amp; Soaking
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('gallery')} className="hover:text-[#D98F4A] transition-colors cursor-pointer">
                  Lodge Photo Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('blog')} className="hover:text-[#D98F4A] transition-colors cursor-pointer">
                  Notes from the Lodge (Journal)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Guest Support */}
          <div className="space-y-3">
            <h5 className="font-serif text-sm font-medium text-[#D98F4A] tracking-wide">
              Guest Care
            </h5>
            <ul className="space-y-2 text-xs text-[#E8DCC3]/70 font-sans">
              <li>
                <button onClick={() => onPageChange('faq')} className="hover:text-[#D98F4A] transition-colors cursor-pointer">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('contact')} className="hover:text-[#D98F4A] transition-colors cursor-pointer">
                  Directions &amp; Mountain Route
                </button>
              </li>
              <li>
                <button onClick={onOpenBooking} className="text-[#D98F4A] font-bold hover:underline cursor-pointer">
                  Direct Reservation Portal →
                </button>
              </li>
              <li>
                <span className="text-[#E8DCC3]/50">Front Desk: 7am – 10pm daily</span>
              </li>
              <li>
                <span className="text-[#E8DCC3]/50">Emergency Host: 24/7 on grounds</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-3">
            <h5 className="font-serif text-sm font-medium text-[#D98F4A] tracking-wide">
              Forest Dispatch
            </h5>
            <p className="text-xs text-[#E8DCC3]/70 font-sans">
              Quarterly essays on seasonal foraging, mountain weather, and cabin release dates.
            </p>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                onToast('Thank you for subscribing to the Forest Dispatch.');
                (e.target as HTMLFormElement).reset();
              }}
              className="space-y-2 pt-1"
            >
              <input
                type="email"
                required
                placeholder="your.email@example.com"
                className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-[#F5EFE3] text-xs focus:border-[#D98F4A] outline-none"
              />
              <button
                type="submit"
                className="w-full py-2 rounded-xl bg-[#D98F4A] hover:bg-[#E8A86B] text-[#120B04] text-xs font-bold transition-all cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </AlderAshReveal>

      {/* Bottom Credits Bar */}
      <AlderAshReveal direction="up" delay={0.1}>
        <div className={`pt-8 flex ${isMobile ? 'flex-col gap-4 text-center items-center' : 'flex-col sm:flex-row items-center justify-between gap-4'} text-xs text-[#E8DCC3]/50 font-sans`}>
          <div className={`flex ${isMobile ? 'flex-col gap-1 items-center' : 'flex-wrap items-center gap-2 sm:gap-4'}`}>
            <span>© 1912–2026 Alder &amp; Ash Resort, LLC.</span>
            <span className={isMobile ? 'hidden' : 'inline'}>•</span>
            <span>Cascade Foothills, WA</span>
            <span className={isMobile ? 'hidden' : 'inline'}>•</span>
            <span className="text-[#D98F4A]/80 font-medium">Templestore Live Template Preview</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[#E8DCC3] hover:text-white transition-all cursor-pointer text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </AlderAshReveal>

      </div>
    </footer>
  );
}
