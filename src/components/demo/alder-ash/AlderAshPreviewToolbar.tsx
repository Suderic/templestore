'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Monitor, 
  Tablet, 
  Smartphone, 
  Sparkles, 
  ExternalLink,
  ShoppingBag,
  Maximize2,
  Minimize2
} from 'lucide-react';
import { DeviceMode } from './types';

interface Props {
  deviceMode: DeviceMode;
  onDeviceChange: (mode: DeviceMode) => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onOpenBooking: () => void;
}

export function AlderAshPreviewToolbar({
  deviceMode,
  onDeviceChange,
  isFullscreen,
  onToggleFullscreen,
  onOpenBooking
}: Props) {
  if (isFullscreen) {
    return (
      <button
        onClick={onToggleFullscreen}
        title="Exit Fullscreen Mode"
        className="fixed bottom-4 right-4 z-50 px-3.5 py-2 rounded-full bg-[#0F2B22]/90 border border-[#D98F4A]/40 text-[#F5EFE3] text-xs font-semibold backdrop-blur-md shadow-2xl flex items-center gap-2 hover:border-[#D98F4A] transition-all hover:scale-105"
      >
        <Minimize2 className="w-3.5 h-3.5 text-[#D98F4A]" />
        <span>Exit Fullscreen</span>
      </button>
    );
  }

  return (
    <div className="sticky top-0 z-50 w-full bg-[#091A14]/95 border-b border-[#D98F4A]/25 backdrop-blur-xl text-[#F5EFE3] px-3 sm:px-6 py-2.5 shadow-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        
        {/* Left: Back to Templestore */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            href="/templates/alder-ash-resort"
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-[#E8DCC3] hover:text-white transition-all group"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#D98F4A] group-hover:-translate-x-0.5 transition-transform" />
            <span className="hidden sm:inline">Back to Marketplace</span>
            <span className="sm:hidden">Back</span>
          </Link>

          <div className="hidden md:flex items-center gap-2 pl-2 border-l border-white/10">
            <span className="text-xs font-serif tracking-wide text-[#F5EFE3] font-medium">
              Alder &amp; Ash <span className="text-[#D98F4A] italic font-normal">— Forest Resort</span>
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#D98F4A]/15 text-[#D98F4A] border border-[#D98F4A]/30">
              Live Demo
            </span>
          </div>
        </div>

        {/* Center: Responsive Device Switcher */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/10">
          <button
            onClick={() => onDeviceChange('desktop')}
            title="Desktop View (100%)"
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
              deviceMode === 'desktop'
                ? 'bg-[#D98F4A] text-[#0F2B22] shadow-sm font-bold'
                : 'text-[#E8DCC3]/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Desktop</span>
          </button>

          <button
            onClick={() => onDeviceChange('tablet')}
            title="Tablet View (768px iPad)"
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
              deviceMode === 'tablet'
                ? 'bg-[#D98F4A] text-[#0F2B22] shadow-sm font-bold'
                : 'text-[#E8DCC3]/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <Tablet className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Tablet (768px)</span>
          </button>

          <button
            onClick={() => onDeviceChange('mobile')}
            title="Mobile View (390px iPhone)"
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
              deviceMode === 'mobile'
                ? 'bg-[#D98F4A] text-[#0F2B22] shadow-sm font-bold'
                : 'text-[#E8DCC3]/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Phone (390px)</span>
          </button>
        </div>

        {/* Right: Buy Template CTA & Fullscreen */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onToggleFullscreen}
            title="Toggle Fullscreen"
            className="hidden sm:flex items-center justify-center p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[#E8DCC3] hover:text-white transition-all"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>

          <Link
            href="/templates/alder-ash-resort"
            className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#D98F4A] to-[#E8A86B] text-[#120B04] text-xs font-bold shadow-md shadow-[#D98F4A]/25 hover:shadow-lg hover:shadow-[#D98F4A]/40 transition-all hover:scale-[1.02]"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Buy Template — $79</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
