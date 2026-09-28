'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Monitor, 
  Tablet, 
  Smartphone, 
  Maximize, 
  Minimize, 
  ArrowLeft, 
  ShoppingBag,
  ExternalLink
} from 'lucide-react';
import { DeviceMode } from './types';

interface GalaxyPreviewToolbarProps {
  deviceMode: DeviceMode;
  onDeviceChange: (mode: DeviceMode) => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  isEmbedded?: boolean;
}

export function GalaxyPreviewToolbar({
  deviceMode,
  onDeviceChange,
  isFullscreen,
  onToggleFullscreen,
  isEmbedded = false
}: GalaxyPreviewToolbarProps) {
  if (isEmbedded) return null;

  return (
    <div className="sticky top-0 z-50 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/10 px-3 sm:px-6 py-2.5 shadow-xl select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        
        {/* Left: Back to Templestore & Title */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/templates/galaxy-homeware"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all hover:scale-102"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Back to Template Details</span>
            <span className="sm:hidden">Back</span>
          </Link>

          <div className="hidden md:flex items-center gap-2 pl-2 border-l border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-black text-white uppercase tracking-wider">
              BUYO
            </span>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
              Modern Living
            </span>
          </div>
        </div>

        {/* Center: Device Mode Switcher */}
        <div className="flex items-center p-1 rounded-2xl bg-white/10 border border-white/10 shadow-inner">
          {/* Desktop */}
          <button
            onClick={() => onDeviceChange('desktop')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              deviceMode === 'desktop'
                ? 'bg-sky-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
            title="Desktop 1280px View"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Desktop</span>
          </button>

          {/* Tablet */}
          <button
            onClick={() => onDeviceChange('tablet')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              deviceMode === 'tablet'
                ? 'bg-sky-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
            title="Tablet 768px View"
          >
            <Tablet className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Tablet</span>
          </button>

          {/* Mobile */}
          <button
            onClick={() => onDeviceChange('mobile')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              deviceMode === 'mobile'
                ? 'bg-sky-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
            title="Mobile 390px iPhone View"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Mobile</span>
          </button>
        </div>

        {/* Right: Fullscreen Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleFullscreen}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs transition-colors cursor-pointer"
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          >
            {isFullscreen ? (
              <Minimize className="w-4 h-4" />
            ) : (
              <Maximize className="w-4 h-4" />
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
