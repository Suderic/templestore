'use client';

import React from 'react';

interface BuyoLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * BuyoLogoIcon:
 * Bespoke vector mark seamlessly blending:
 * 1. The letter "B" (for Buyo)
 * 2. A sleek Shopping Bag with arched handles & boutique stitch fold
 */
export function BuyoLogoIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-hidden="true"
    >
      {/* Shopping Bag Arched Handle on Top */}
      <path 
        d="M12 9.5V6.8C12 4.7 13.7 3 15.8 3H16.2C18.3 3 20 4.7 20 6.8V9.5" 
        stroke="currentColor" 
        strokeWidth="2.2" 
        strokeLinecap="round" 
      />

      {/* Bag Body Outer Contour (Structured luxury tote) */}
      <path 
        d="M7.5 9.5H24.5L23.2 26.2C23.1 27.8 21.8 29 20.2 29H11.8C10.2 29 8.9 27.8 8.8 26.2L7.5 9.5Z" 
        fill="currentColor" 
        fillOpacity="0.18"
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinejoin="round" 
      />

      {/* Integrated Letter "B" Geometry across the bag front */}
      <path 
        d="M12 12.5H17.2C18.7 12.5 19.8 13.6 19.8 15C19.8 16.4 18.7 17.5 17.2 17.5H12V12.5Z" 
        fill="currentColor"
        fillOpacity="0.3"
        stroke="currentColor" 
        strokeWidth="1.9" 
        strokeLinejoin="round" 
      />
      <path 
        d="M12 17.5H18.2C19.8 17.5 21 18.7 21 20.3C21 21.9 19.8 23.2 18.2 23.2H12V17.5Z" 
        fill="currentColor"
        fillOpacity="0.3"
        stroke="currentColor" 
        strokeWidth="1.9" 
        strokeLinejoin="round" 
      />

      {/* Vertical Spine of B / Bag Seam */}
      <path 
        d="M12 11.5V24" 
        stroke="currentColor" 
        strokeWidth="2.4" 
        strokeLinecap="round" 
      />

      {/* Shopping spark / accent gem */}
      <circle cx="16.5" cy="20.3" r="1" fill="#F59E0B" />
    </svg>
  );
}

export function BuyoLogo({ 
  size = 'md', 
  showTagline = true, 
  className = '',
  onClick 
}: BuyoLogoProps) {
  const iconSizes = {
    sm: 'w-7 h-7 sm:w-8 sm:h-8',
    md: 'w-9 h-9 sm:w-10 sm:h-10',
    lg: 'w-11 h-11 sm:w-12 sm:h-12'
  };

  const svgSizes = {
    sm: 'w-4 h-4 sm:w-4.5 sm:h-4.5',
    md: 'w-5 h-5 sm:w-5.5 sm:h-5.5',
    lg: 'w-6 h-6 sm:w-7 sm:h-7'
  };

  const textSizes = {
    sm: 'text-sm sm:text-base',
    md: 'text-base sm:text-lg',
    lg: 'text-xl sm:text-2xl'
  };

  return (
    <div 
      onClick={onClick}
      className={`flex items-center gap-2.5 group select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Emblem Badge: High-contrast dark with glowing amber gradient border */}
      <div className={`${iconSizes[size]} rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-500 to-orange-400 p-[1.5px] shadow-md shadow-amber-500/20 group-hover:shadow-amber-500/40 group-hover:scale-105 transition-all duration-300 shrink-0`}>
        <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center relative overflow-hidden text-amber-400 group-hover:text-amber-300 transition-colors">
          <BuyoLogoIcon className={svgSizes[size]} />
          {/* Subtle glossy sheen */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Brand Typography: 1-word punchy 'buyo' */}
      <div className="flex flex-col text-left">
        <div className="flex items-center tracking-tight leading-none">
          <span className={`${textSizes[size]} font-black tracking-tight text-slate-900 dark:text-white uppercase font-sans`}>
            BUYO
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 ml-0.5 animate-pulse" />
        </div>
        
        {showTagline && (
          <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.22em] text-amber-600 dark:text-amber-400 uppercase leading-tight mt-0.5">
            MODERN LIVING
          </span>
        )}
      </div>
    </div>
  );
}
