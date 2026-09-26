'use client';

import React from 'react';
import { CalendarDays, Sparkles } from 'lucide-react';
import { DeviceMode } from './types';

interface Props {
  onOpenBooking: () => void;
  deviceMode?: DeviceMode;
}

export function AlderAshMobileBookingBar({ onOpenBooking, deviceMode = 'desktop' }: Props) {
  const isMobile = deviceMode === 'mobile';

  // Visible when mobile simulation is active OR on real mobile screens (< 640px)
  const visibilityClass = isMobile
    ? 'block fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px]'
    : deviceMode === 'desktop'
    ? 'sm:hidden block fixed bottom-0 left-0 right-0 w-full'
    : 'hidden';

  return (
    <div
      role="region"
      aria-label="Mobile quick reservation bar"
      className={`${visibilityClass} z-30 p-2.5 sm:p-3 pointer-events-none transition-all duration-300`}
    >
      <div className="pointer-events-auto flex items-center justify-between gap-3 px-4 py-2.5 rounded-2xl bg-[#091D16]/95 border border-[#D98F4A]/35 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        {/* Pricing Info */}
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="font-serif text-sm sm:text-base font-semibold text-[#D98F4A] tracking-tight">
              From $210
            </span>
            <span className="text-[10px] text-[#E8DCC3]/65 font-sans">/ night</span>
          </div>
          <span className="text-[9px] text-[#E8DCC3]/55 font-medium tracking-wide flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5 text-[#D98F4A] shrink-0" />
            Best rate guarantee • 40 Cabins
          </span>
        </div>

        {/* Action Button */}
        <button
          onClick={onOpenBooking}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#D98F4A] via-[#E29D5D] to-[#D98F4A] text-[#140D04] text-xs font-bold tracking-wide shadow-lg shadow-[#D98F4A]/30 hover:shadow-[#D98F4A]/50 active:scale-95 transition-all cursor-pointer shrink-0"
        >
          <CalendarDays className="w-3.5 h-3.5" />
          <span>Book Your Stay</span>
        </button>
      </div>
    </div>
  );
}
