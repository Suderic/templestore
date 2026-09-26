'use client';

import React from 'react';

/**
 * HIGH-END BESPOKE ICONS & GLYPHS
 * Designed with dual-tone layers, micro-gradients, and glowing accents.
 */

export function LogoMark({ className = 'w-8 h-8', glow = true }: { className?: string; glow?: boolean }) {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      {glow && (
        <div className="absolute inset-0 bg-amber-500/25 dark:bg-amber-500/35 rounded-xl blur-md -z-10 animate-pulse" />
      )}
      <img
        src="/logo-mark.png"
        alt="Templestore Logo"
        className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(245,158,11,0.3)] transition-transform group-hover:scale-105"
      />
    </div>
  );
}

export function SunLuxury({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="sunCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="60%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </radialGradient>
        <linearGradient id="sunRays" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="5" fill="url(#sunCore)" stroke="#F59E0B" strokeWidth="1" />
      <path
        d="M12 2V4M12 20V22M4 12H2M22 12H20M5.636 5.636L7.05 7.05M16.95 16.95L18.364 18.364M5.636 18.364L7.05 16.95M16.95 7.05L18.364 5.636"
        stroke="url(#sunRays)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MoonLuxury({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A5B4FC" />
          <stop offset="50%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
      </defs>
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        fill="url(#moonGrad)"
        stroke="#818CF8"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="17.5" cy="5.5" r="1" fill="#C7D2FE" />
      <circle cx="19.5" cy="8.5" r="0.75" fill="#C7D2FE" />
    </svg>
  );
}

export function QrLuxury({ 
  className = 'w-5 h-5', 
  gradient = false 
}: { 
  className?: string; 
  gradient?: boolean;
}) {
  const color = gradient ? 'url(#qrGrad)' : 'currentColor';
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {gradient && (
        <defs>
          <linearGradient id="qrGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      )}
      {/* Top Left Finder */}
      <rect x="3" y="3" width="7" height="7" rx="1.5" stroke={color} strokeWidth="2" />
      <rect x="5.5" y="5.5" width="2" height="2" rx="0.5" fill={color} />
      {/* Top Right Finder */}
      <rect x="14" y="3" width="7" height="7" rx="1.5" stroke={color} strokeWidth="2" />
      <rect x="16.5" y="5.5" width="2" height="2" rx="0.5" fill={color} />
      {/* Bottom Left Finder */}
      <rect x="3" y="14" width="7" height="7" rx="1.5" stroke={color} strokeWidth="2" />
      <rect x="5.5" y="16.5" width="2" height="2" rx="0.5" fill={color} />
      {/* Dynamic Data Cells */}
      <path d="M14 14H16V16H14V14Z" fill={color} />
      <path d="M18 14H21V15H18V14Z" fill={color} />
      <path d="M14 18H16V21H14V18Z" fill={color} />
      <path d="M18 17H21V21H18V17Z" fill={color} />
      <path d="M16 16H18V18H16V16Z" fill={color} />
    </svg>
  );
}

export function ShieldLuxury({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shieldBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#059669" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="shieldStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>
      <path
        d="M12 2L3 6V11.5C3 16.8 6.8 21.7 12 23C17.2 21.7 21 16.8 21 11.5V6L12 2Z"
        fill="url(#shieldBg)"
        stroke="url(#shieldStroke)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12L11 14L15 10"
        stroke="#10B981"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RocketLuxury({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <path
        d="M4.5 16.5C3.5 15 2 12.5 2 12C3 11 5 11 7 12L9 10C8.5 7 10 4 14 2C15.5 5 16.5 7 14 9L12 11C13 13 13 15 12 16C11.5 16 9 14.5 7.5 13.5L4.5 16.5Z"
        fill="url(#rocketGrad)"
        fillOpacity="0.2"
        stroke="url(#rocketGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="7" r="1.5" fill="#F59E0B" />
      <path d="M15 15L21 21M18 15L21 18M15 18L18 21" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function DownloadLuxury({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
      </defs>
      <path
        d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
        stroke="url(#dlGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 10L12 15L17 10"
        stroke="url(#dlGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="12"
        y1="15"
        x2="12"
        y2="3"
        stroke="url(#dlGrad)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DiamondSparkle({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
        fill="url(#diamondGrad)"
        stroke="#F59E0B"
        strokeWidth="1"
      />
      <defs>
        <linearGradient id="diamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function BrowseLuxury({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="browseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
        <linearGradient id="browseGlass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818CF8" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#C084FC" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect x="2" y="3" width="20" height="15" rx="3" fill="url(#browseGlass)" stroke="url(#browseGrad)" strokeWidth="1.8" />
      <line x1="2" y1="7.5" x2="22" y2="7.5" stroke="url(#browseGrad)" strokeWidth="1.2" strokeOpacity="0.7" />
      <circle cx="5" cy="5.2" r="1" fill="#EF4444" />
      <circle cx="8" cy="5.2" r="1" fill="#F59E0B" />
      <circle cx="11" cy="5.2" r="1" fill="#10B981" />
      <circle cx="15" cy="13.5" r="3" stroke="url(#browseGrad)" strokeWidth="1.6" />
      <line x1="17.2" y1="15.7" x2="20" y2="18.5" stroke="url(#browseGrad)" strokeWidth="2" strokeLinecap="round" />
      <rect x="5" y="10" width="5" height="2.5" rx="0.75" fill="url(#browseGrad)" fillOpacity="0.4" />
      <rect x="5" y="13.5" width="6.5" height="1.8" rx="0.5" fill="url(#browseGrad)" fillOpacity="0.25" />
    </svg>
  );
}

export function DatabaseLuxury({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
        <linearGradient id="dbGradTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      <ellipse cx="12" cy="5" rx="8" ry="3" fill="url(#dbGradTop)" fillOpacity="0.25" stroke="url(#dbGrad)" strokeWidth="1.8" />
      <path d="M4 5V12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12V5" stroke="url(#dbGrad)" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 12V19C4 20.66 7.58 22 12 22C16.42 22 20 20.66 20 19V12" stroke="url(#dbGrad)" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="5" r="1.5" fill="#F59E0B" />
      <circle cx="12" cy="12" r="1.5" fill="#F97316" />
      <circle cx="12" cy="19" r="1.5" fill="#EA580C" />
    </svg>
  );
}

export function PaletteLuxury({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="palGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="50%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C12.83 22 13.5 21.33 13.5 20.5C13.5 20.12 13.35 19.78 13.11 19.51C12.87 19.24 12.72 18.89 12.72 18.5C12.72 17.67 13.39 17 14.22 17H16C19.31 17 22 14.31 22 11C22 6.03 17.52 2 12 2Z"
        fill="url(#palGrad)"
        fillOpacity="0.15"
        stroke="url(#palGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7" cy="8.5" r="1.5" fill="#38BDF8" />
      <circle cx="12" cy="6.5" r="1.5" fill="#A855F7" />
      <circle cx="17" cy="8.5" r="1.5" fill="#EC4899" />
      <circle cx="17.5" cy="13.5" r="1.5" fill="#F59E0B" />
    </svg>
  );
}

export function CodeLuxury({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="50%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <polyline points="16 18 22 12 16 6" stroke="url(#codeGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="8 6 2 12 8 18" stroke="url(#codeGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="14" y1="4" x2="10" y2="20" stroke="url(#codeGrad)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function UpdateLuxury({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="updateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <path
        d="M21 12A9 9 0 0 0 6 5.3L3 8M3 3V8H8"
        stroke="url(#updateGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 12A9 9 0 0 0 18 18.7L21 16M21 21V16H16"
        stroke="url(#updateGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
