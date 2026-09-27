'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Template } from '@/types';
import { 
  Monitor, 
  Tablet, 
  Smartphone, 
  ExternalLink, 
  RotateCw, 
  Sparkles, 
  Eye, 
  Layers, 
  Check, 
  ShieldCheck, 
  Lock, 
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Info
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface TemplateGalleryProps {
  template: Template;
}

export function TemplateGallery({ template }: TemplateGalleryProps) {
  const isWebsite = template.category === 'website';
  const isMobileOnly = template.category === 'mobile' || Boolean((template as any).isMobileOnly);
  const hasLiveDemo = Boolean(template.livePreviewUrl);

  // Default to live interactive mode if available, otherwise screenshots
  const [previewMode, setPreviewMode] = useState<'live' | 'screenshots'>(hasLiveDemo ? 'live' : 'screenshots');
  const [viewportMode, setViewportMode] = useState<'desktop' | 'tablet' | 'mobile'>(
    isMobileOnly ? 'mobile' : 'desktop'
  );
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [iframeKey, setIframeKey] = useState(0);
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const currentImage = template.previewImages[selectedImageIndex] || template.previewImages[0];

  // Lock viewport to mobile if template is mobile-only
  useEffect(() => {
    if (isMobileOnly && viewportMode !== 'mobile') {
      setViewportMode('mobile');
    }
  }, [template.slug, isMobileOnly, viewportMode]);

  // Sync device mode to iframe via postMessage whenever viewportMode changes
  useEffect(() => {
    if (iframeRef.current?.contentWindow) {
      try {
        iframeRef.current.contentWindow.postMessage(
          { type: 'SET_DEVICE_MODE', mode: viewportMode },
          '*'
        );
      } catch {
        // cross-origin ignore
      }
    }
  }, [viewportMode]);

  // Handle iframe reload
  const handleReload = () => {
    setIsRefreshing(true);
    setIsIframeLoading(true);
    setIframeKey((prev) => prev + 1);
    setTimeout(() => setIsRefreshing(false), 600);
  };

  // Change device mode with instant postMessage
  const handleDeviceChange = (mode: 'desktop' | 'tablet' | 'mobile') => {
    if (isMobileOnly) return;
    setViewportMode(mode);
    if (iframeRef.current?.contentWindow) {
      try {
        iframeRef.current.contentWindow.postMessage(
          { type: 'SET_DEVICE_MODE', mode },
          '*'
        );
      } catch {
        // ignore
      }
    }
  };

  const iframeSrc = hasLiveDemo
    ? `${template.livePreviewUrl}?embed=true&device=${viewportMode}`
    : template.livePreviewUrl;

  return (
    <div className="space-y-4">
      
      {/* 1. VIEWPORT & PREVIEW TYPE CONTROL BAR */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 p-2 rounded-2xl glass-panel border border-white/60 dark:border-white/10 shadow-xs">
        
        {/* Left: Viewport Size Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {isMobileOnly ? (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-500/10 dark:bg-purple-950/40 border border-purple-500/25 text-purple-600 dark:text-purple-400 text-xs font-semibold shadow-xs">
              <Smartphone className="w-3.5 h-3.5 shrink-0 text-purple-500" />
              <span>Mobile App Only</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-600 dark:text-purple-300 font-bold">
                390px iPhone Viewport
              </span>
            </div>
          ) : (
            <>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 hidden sm:inline select-none pl-1">
                Viewport:
              </span>

              <div className="inline-flex items-center p-0.5 rounded-xl bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-white/5 shadow-inner">
                {/* Desktop Button */}
                <button
                  onClick={() => handleDeviceChange('desktop')}
                  className={`h-7 px-2.5 rounded-lg text-xs font-medium flex items-center gap-1.5 whitespace-nowrap transition-all cursor-pointer ${
                    viewportMode === 'desktop'
                      ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 font-semibold shadow-xs ring-1 ring-black/5 dark:ring-white/10'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
                  }`}
                  title="Desktop View (1280px)"
                >
                  <Monitor className="w-3.5 h-3.5 shrink-0" />
                  <span>Desktop</span>
                  <span className={`text-[10px] font-mono px-1 py-0.2 rounded ${
                    viewportMode === 'desktop' 
                      ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-semibold' 
                      : 'text-slate-400 dark:text-slate-500'
                  }`}>
                    1280px
                  </span>
                </button>

                {/* Tablet Button */}
                <button
                  onClick={() => handleDeviceChange('tablet')}
                  className={`h-7 px-2.5 rounded-lg text-xs font-medium flex items-center gap-1.5 whitespace-nowrap transition-all cursor-pointer ${
                    viewportMode === 'tablet'
                      ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 font-semibold shadow-xs ring-1 ring-black/5 dark:ring-white/10'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
                  }`}
                  title="Tablet View (768px)"
                >
                  <Tablet className="w-3.5 h-3.5 shrink-0" />
                  <span>Tablet</span>
                  <span className={`text-[10px] font-mono px-1 py-0.2 rounded ${
                    viewportMode === 'tablet' 
                      ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-semibold' 
                      : 'text-slate-400 dark:text-slate-500'
                  }`}>
                    768px
                  </span>
                </button>

                {/* Mobile Button */}
                <button
                  onClick={() => handleDeviceChange('mobile')}
                  className={`h-7 px-2.5 rounded-lg text-xs font-medium flex items-center gap-1.5 whitespace-nowrap transition-all cursor-pointer ${
                    viewportMode === 'mobile'
                      ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 font-semibold shadow-xs ring-1 ring-black/5 dark:ring-white/10'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
                  }`}
                  title="Mobile View (390px)"
                >
                  <Smartphone className="w-3.5 h-3.5 shrink-0" />
                  <span>Mobile</span>
                  <span className={`text-[10px] font-mono px-1 py-0.2 rounded ${
                    viewportMode === 'mobile' 
                      ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-semibold' 
                      : 'text-slate-400 dark:text-slate-500'
                  }`}>
                    390px
                  </span>
                </button>
              </div>
            </>
          )}
        </div>

        {/* Right: Live vs Screenshots Toggle & Full Demo Action */}
        <div className="flex items-center gap-2 shrink-0">
          
          {/* Mode Switcher Toggle Pill */}
          {hasLiveDemo && (
            <div className="inline-flex items-center p-0.5 rounded-xl bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-white/5 shadow-inner">
              <button
                onClick={() => setPreviewMode('live')}
                className={`h-7 px-3 rounded-lg text-xs font-medium flex items-center gap-1.5 whitespace-nowrap transition-all cursor-pointer ${
                  previewMode === 'live'
                    ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 font-semibold shadow-xs ring-1 ring-black/5 dark:ring-white/10'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20 shrink-0" />
                <span>Live Demo</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
              </button>

              <button
                onClick={() => setPreviewMode('screenshots')}
                className={`h-7 px-3 rounded-lg text-xs font-medium flex items-center gap-1.5 whitespace-nowrap transition-all cursor-pointer ${
                  previewMode === 'screenshots'
                    ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 font-semibold shadow-xs ring-1 ring-black/5 dark:ring-white/10'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
                }`}
              >
                <Eye className="w-3.5 h-3.5 shrink-0" />
                <span>Screenshots</span>
                <span className={`text-[10px] font-mono px-1 py-0.2 rounded ${
                  previewMode === 'screenshots'
                    ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-semibold'
                    : 'text-slate-400 dark:text-slate-500'
                }`}>
                  {template.previewImages.length}
                </span>
              </button>
            </div>
          )}

          {/* Action: Open in New Window ONLY for website templates. Apps demo through the preview itself! */}
          {isWebsite && template.livePreviewUrl ? (
            <a
              href={template.livePreviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 inline-flex items-center gap-1.5 px-3 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/70 dark:hover:bg-indigo-950/40 border border-slate-200/80 dark:border-white/10 hover:border-indigo-300 dark:hover:border-indigo-800/60 shadow-xs transition-all whitespace-nowrap shrink-0 cursor-pointer"
              title="Launch full screen demo in new tab"
            >
              <span>Full Demo</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0 text-slate-400 group-hover:text-indigo-600" />
            </a>
          ) : (
            hasLiveDemo && previewMode === 'live' && (
              <button
                onClick={handleReload}
                className="h-8 inline-flex items-center gap-1.5 px-3 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-white/10 shadow-xs transition-all whitespace-nowrap shrink-0 cursor-pointer"
                title="Reset or reload interactive demo session"
              >
                <RotateCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-indigo-500' : ''}`} />
                <span>Restart Demo</span>
              </button>
            )
          )}

        </div>

      </div>

      {/* Viewport Description & Status */}
      <div className="flex items-center justify-between px-2 text-[11px] text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-1.5">
          <Info className="w-3 h-3 text-indigo-500 shrink-0" />
          <span>
            {isMobileOnly
              ? 'Viewing native mobile app layout inside an authentic smartphone device frame.'
              : viewportMode === 'desktop'
              ? 'Viewing full desktop website layout with multi-column grid and full navigation.'
              : viewportMode === 'tablet'
              ? 'Viewing 768px tablet layout in an authentic iPad device frame.'
              : 'Viewing 390px mobile layout in an authentic smartphone device frame with mobile drawer & booking bar.'}
          </span>
        </div>
        <span className="hidden sm:inline font-mono text-[10px] text-slate-400">
          {previewMode === 'live' 
            ? (isWebsite ? '⚡ Interactive Next.js Session' : '⚡ Interactive Live App Preview') 
            : '📸 High-Resolution Captures'}
        </span>
      </div>

      {/* 2. MAIN PREVIEW CONTAINER (ADAPTS BY DEVICE MODE) */}
      <div className="flex justify-center items-center py-2 transition-all duration-300">
        
        {/* =========================================================================
            A. DESKTOP VIEWPORT: Full-width macOS / Modern Browser Window Mockup
        ========================================================================= */}
        {viewportMode === 'desktop' && (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="w-full rounded-2xl glass-card border border-white/50 dark:border-white/10 shadow-2xl overflow-hidden"
          >
            {/* Realistic Browser Header Bar */}
            <div className="h-10 px-4 glass-panel border-b border-white/30 dark:border-white/10 flex items-center justify-between gap-3 bg-slate-100/70 dark:bg-slate-900/80">
              
              {/* Browser Dots */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-3 h-3 rounded-full bg-rose-500/90 shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-amber-500/90 shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/90 shadow-sm" />
              </div>

              {/* URL Address Bar with Padlock and Reload Button */}
              <div className="flex-1 max-w-lg mx-auto flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 dark:bg-slate-950/60 border border-slate-300/40 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-300 shadow-inner">
                <Lock className="w-3 h-3 text-emerald-500 shrink-0" />
                <span className="truncate flex-1 text-[11px]">
                  https://preview.templestore.dev/{template.slug}
                </span>
                {previewMode === 'live' && hasLiveDemo && (
                  <button
                    onClick={handleReload}
                    title="Reload Live Demo"
                    className="p-0.5 rounded hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-all cursor-pointer"
                  >
                    <RotateCw className={`w-3 h-3 ${isRefreshing ? 'animate-spin text-indigo-500' : ''}`} />
                  </button>
                )}
              </div>

              {/* Device Tag */}
              <div className="shrink-0 flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 hidden sm:inline">
                  Desktop 1280px
                </span>
              </div>
            </div>

            {/* Desktop Screen Content Area */}
            <div className="relative w-full h-[480px] sm:h-[620px] bg-slate-950 overflow-hidden flex items-center justify-center">
              {previewMode === 'live' && hasLiveDemo ? (
                <>
                  {isIframeLoading && (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950 text-slate-100 gap-3">
                      <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                      <p className="text-xs font-medium tracking-wider text-indigo-400">
                        Loading interactive {template.name}...
                      </p>
                    </div>
                  )}
                  <iframe
                    key={iframeKey}
                    ref={iframeRef}
                    src={iframeSrc}
                    onLoad={() => setIsIframeLoading(false)}
                    className="w-full h-full border-0 bg-slate-900"
                    title={`${template.name} Desktop Live Demo`}
                    loading="lazy"
                  />
                </>
              ) : (
                <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-slate-950">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImage.url}
                      src={currentImage.url}
                      alt={currentImage.alt}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className="w-full h-full object-contain object-top"
                    />
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Caption bar */}
            {previewMode === 'screenshots' && currentImage.caption && (
              <div className="px-4 py-2 text-xs text-center text-slate-500 dark:text-slate-400 glass-panel border-t border-white/30 dark:border-white/5 font-medium">
                {currentImage.caption}
              </div>
            )}
          </motion.div>
        )}

        {/* =========================================================================
            B. TABLET VIEWPORT: Realistic 768px iPad Device Frame
        ========================================================================= */}
        {viewportMode === 'tablet' && (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="w-[768px] max-w-full mx-auto"
          >
            {/* iPad Device Frame */}
            <div className="rounded-[36px] p-3 sm:p-4 bg-slate-900 border-[6px] border-slate-700/80 dark:border-slate-800 shadow-2xl shadow-black/60 relative">
              
              {/* Tablet Camera Sensor Dot */}
              <div className="w-2.5 h-2.5 rounded-full bg-slate-700/80 mx-auto mb-2.5 border border-white/10" />

              {/* Tablet Screen */}
              <div className="relative rounded-[22px] overflow-hidden h-[520px] sm:h-[680px] bg-slate-950 border border-white/10 shadow-inner">
                {previewMode === 'live' && hasLiveDemo ? (
                  <>
                    {isIframeLoading && (
                      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950 text-slate-100 gap-3">
                        <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                        <p className="text-xs font-medium tracking-wider text-indigo-400">
                          Simulating iPad Viewport...
                        </p>
                      </div>
                    )}
                    <iframe
                      key={iframeKey}
                      ref={iframeRef}
                      src={iframeSrc}
                      onLoad={() => setIsIframeLoading(false)}
                      className="w-full h-full border-0 bg-slate-900"
                      title={`${template.name} Tablet Live Demo`}
                    />
                  </>
                ) : (
                  <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-slate-950">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImage.url}
                        src={currentImage.url}
                        alt={currentImage.alt}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-full h-full object-contain"
                      />
                    </AnimatePresence>
                  </div>
                )}
              </div>

              {/* Tablet Bottom Home Bar */}
              <div className="w-32 h-1 rounded-full bg-slate-600/60 mx-auto mt-3" />
            </div>

            {/* Tablet Viewport Label */}
            <div className="mt-2 text-center text-xs text-slate-400 font-mono">
              Apple iPad Air Viewport • 768 × 1024 (Scaled for Preview)
            </div>
          </motion.div>
        )}

        {/* =========================================================================
            C. MOBILE VIEWPORT: Realistic 390px iPhone Smartphone Frame (iPhone 16 Pro Style)
        ========================================================================= */}
        {viewportMode === 'mobile' && (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-[390px] mx-auto"
          >
            {/* iPhone Chassis */}
            <div className="rounded-[44px] sm:rounded-[52px] p-2 sm:p-3 bg-slate-950 border-[5px] sm:border-[6px] border-slate-700/80 dark:border-slate-800 shadow-2xl shadow-black/80 relative">
              
              {/* Mobile Screen: Flex column with dedicated iOS Status Bar at top and content below */}
              <div className="relative rounded-[36px] sm:rounded-[42px] overflow-hidden h-[560px] sm:h-[700px] bg-slate-950 border border-white/10 shadow-inner flex flex-col">
                
                {/* Authentic iOS Status Bar - Houses Dynamic Island cleanly so it never obstructs template headers */}
                <div className="h-10 sm:h-11 w-full bg-slate-950 flex items-center justify-between px-5 select-none shrink-0 border-b border-white/5 z-20">
                  {/* Left: Standard iOS Time */}
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-200 tracking-tight pl-1">
                    9:41
                  </span>

                  {/* Center: Dynamic Island Pill */}
                  <div className="w-24 sm:w-28 h-5 sm:h-5.5 bg-black rounded-full flex items-center justify-between px-2.5 sm:px-3 border border-white/15 shadow-sm">
                    <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-slate-900 border border-slate-700" />
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-indigo-950/80 border border-indigo-700" />
                  </div>

                  {/* Right: iOS System Indicators (Cellular, WiFi, Battery) */}
                  <div className="flex items-center gap-1.5 text-slate-200 pr-1">
                    {/* Cellular signal bars */}
                    <svg className="w-3.5 h-3.5 fill-current opacity-90" viewBox="0 0 24 24">
                      <path d="M2 17h3v4H2v-4zm6-5h3v9H8v-9zm6-5h3v14h-3V7zm6-5h3v19h-3V2z" />
                    </svg>
                    {/* WiFi icon */}
                    <svg className="w-3.5 h-3.5 fill-current opacity-90" viewBox="0 0 24 24">
                      <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98A16.88 16.88 0 0012 4zm0 4c3.42 0 6.55 1.29 8.95 3.42L12 19.34 3.05 11.42A12.92 12.92 0 0112 8z" />
                    </svg>
                    {/* Battery indicator */}
                    <div className="w-5 h-2.5 border border-slate-200/90 rounded-[3px] p-[1px] flex items-center">
                      <div className="h-full w-3.5 bg-slate-200 rounded-[1px]" />
                    </div>
                  </div>
                </div>

                {/* Viewport Screen Content (Iframe / Screenshots) */}
                <div className="flex-1 w-full relative overflow-hidden bg-slate-900">
                  {previewMode === 'live' && hasLiveDemo ? (
                    <>
                      {isIframeLoading && (
                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950 text-slate-100 gap-3">
                          <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                          <p className="text-xs font-medium tracking-wider text-indigo-400">
                            Simulating iPhone Viewport...
                          </p>
                        </div>
                      )}
                      <iframe
                        key={iframeKey}
                        ref={iframeRef}
                        src={iframeSrc}
                        onLoad={() => setIsIframeLoading(false)}
                        className="w-full h-full border-0 bg-slate-900"
                        title={`${template.name} Mobile Live Demo`}
                      />
                    </>
                  ) : (
                    <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-slate-950">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentImage.url}
                          src={currentImage.url}
                          alt={currentImage.alt}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="w-full h-full object-contain"
                        />
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile Home Bar Indicator */}
              <div className="w-32 h-1 rounded-full bg-white/40 mx-auto mt-2" />
            </div>

            {/* Mobile Viewport Label */}
            <div className="mt-2 text-center text-xs text-slate-400 font-mono">
              Apple iPhone 16 Pro Viewport • 390 × 844 (Interactive Mobile App Preview)
            </div>
          </motion.div>
        )}

      </div>

      {/* 3. THUMBNAILS STRIP (For browsing all template views) */}
      <div className="space-y-2 pt-2">
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
          <span className="font-semibold flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-indigo-500" />
            Template Views &amp; Media Showcase:
          </span>
          <span className="text-[11px] text-slate-400">
            Click any preview to inspect screen capture
          </span>
        </div>

        <div className="flex items-center gap-3 overflow-x-auto py-2 px-1 no-scrollbar">
          {template.previewImages.map((img, idx) => {
            const isSelected = previewMode === 'screenshots' && selectedImageIndex === idx;
            return (
              <button
                key={img.url}
                onClick={() => {
                  setSelectedImageIndex(idx);
                  setPreviewMode('screenshots');
                }}
                className={`relative group shrink-0 w-32 sm:w-36 h-20 sm:h-24 rounded-xl overflow-hidden border-2 transition-all cursor-pointer text-left ${
                  isSelected
                    ? 'border-indigo-500 shadow-lg shadow-indigo-500/30 scale-105 ring-2 ring-indigo-500/20'
                    : 'border-white/40 dark:border-white/10 opacity-75 hover:opacity-100 hover:border-slate-400'
                }`}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Gradient overlay with caption snippet */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-1.5">
                  <span className="text-[10px] font-bold text-white truncate drop-shadow-md">
                    {img.caption || `Screen ${idx + 1}`}
                  </span>
                </div>

                {isSelected && (
                  <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
