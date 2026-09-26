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
  // Check if template has an interactive live demo (local Next.js route like /demo/alder-ash)
  const hasLiveDemo = Boolean(template.livePreviewUrl && template.livePreviewUrl.startsWith('/demo'));

  // Default to live interactive mode if available, otherwise screenshots
  const [previewMode, setPreviewMode] = useState<'live' | 'screenshots'>(hasLiveDemo ? 'live' : 'screenshots');
  const [viewportMode, setViewportMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [iframeKey, setIframeKey] = useState(0);
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const currentImage = template.previewImages[selectedImageIndex] || template.previewImages[0];

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
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-2.5 rounded-2xl glass-panel border border-white/40 dark:border-white/10 shadow-sm">
        
        {/* Left: Viewport Size Switcher with Pixel Dimensions */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-1 hidden lg:inline">
            Viewport:
          </span>

          {/* Desktop Button */}
          <button
            onClick={() => handleDeviceChange('desktop')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              viewportMode === 'desktop'
                ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md shadow-indigo-500/25 font-bold scale-[1.02]'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
            }`}
            title="Desktop View (1200px+ Full Width)"
          >
            <Monitor className="w-3.5 h-3.5 shrink-0" />
            <span>Desktop</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
              viewportMode === 'desktop' ? 'bg-white/20 text-white' : 'bg-slate-200/60 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
            }`}>
              1280px
            </span>
          </button>

          {/* Tablet Button */}
          <button
            onClick={() => handleDeviceChange('tablet')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              viewportMode === 'tablet'
                ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md shadow-indigo-500/25 font-bold scale-[1.02]'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
            }`}
            title="Tablet View (768px iPad Screen)"
          >
            <Tablet className="w-3.5 h-3.5 shrink-0" />
            <span>Tablet</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
              viewportMode === 'tablet' ? 'bg-white/20 text-white' : 'bg-slate-200/60 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
            }`}>
              768px
            </span>
          </button>

          {/* Mobile Button */}
          <button
            onClick={() => handleDeviceChange('mobile')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              viewportMode === 'mobile'
                ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md shadow-indigo-500/25 font-bold scale-[1.02]'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
            }`}
            title="Mobile View (390px iPhone Screen)"
          >
            <Smartphone className="w-3.5 h-3.5 shrink-0" />
            <span>Mobile</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
              viewportMode === 'mobile' ? 'bg-white/20 text-white' : 'bg-slate-200/60 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
            }`}>
              390px
            </span>
          </button>
        </div>

        {/* Center / Right: Live vs Screenshots Toggle & Actions */}
        <div className="flex items-center justify-between sm:justify-end gap-2">
          
          {/* Mode Switcher Toggle Pill (If Live Demo Exists) */}
          {hasLiveDemo && (
            <div className="flex items-center p-0.5 rounded-xl bg-slate-200/50 dark:bg-slate-950/40 border border-slate-300/40 dark:border-white/5">
              <button
                onClick={() => setPreviewMode('live')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                  previewMode === 'live'
                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Sparkles className="w-3 h-3 text-amber-500" />
                <span>Live Interactive</span>
              </button>

              <button
                onClick={() => setPreviewMode('screenshots')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                  previewMode === 'screenshots'
                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Eye className="w-3 h-3" />
                <span>Screenshots ({template.previewImages.length})</span>
              </button>
            </div>
          )}

          {/* Action: Open in New Window / Full Screen */}
          {template.livePreviewUrl && (
            <a
              href={template.livePreviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-panel text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all border border-indigo-500/20 shadow-sm shrink-0"
              title="Launch full screen demo in new tab"
            >
              <span>Full Demo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}

        </div>

      </div>

      {/* Viewport Description & Status */}
      <div className="flex items-center justify-between px-2 text-[11px] text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-1.5">
          <Info className="w-3 h-3 text-indigo-500 shrink-0" />
          <span>
            {viewportMode === 'desktop' && 'Viewing full desktop website layout with multi-column grid and full navigation.'}
            {viewportMode === 'tablet' && 'Viewing 768px tablet layout in an authentic iPad device frame.'}
            {viewportMode === 'mobile' && 'Viewing 390px mobile layout in an authentic smartphone device frame with mobile drawer & booking bar.'}
          </span>
        </div>
        <span className="hidden sm:inline font-mono text-[10px] text-slate-400">
          {previewMode === 'live' ? '⚡ Interactive Next.js Session' : '📸 High-Resolution Website Captures'}
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
            <div className="relative w-full h-[620px] bg-slate-950/90 overflow-hidden flex items-center justify-center">
              {previewMode === 'live' && hasLiveDemo ? (
                <>
                  {isIframeLoading && (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#07130D] text-[#F5EFE3] gap-3">
                      <div className="w-8 h-8 border-2 border-[#D98F4A] border-t-transparent rounded-full animate-spin" />
                      <p className="text-xs font-serif tracking-wider text-[#D98F4A]">
                        Loading interactive {template.name}...
                      </p>
                    </div>
                  )}
                  <iframe
                    key={iframeKey}
                    ref={iframeRef}
                    src={iframeSrc}
                    onLoad={() => setIsIframeLoading(false)}
                    className="w-full h-full border-0 bg-[#0F2B22]"
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
              <div className="relative rounded-[22px] overflow-hidden h-[760px] bg-slate-950 border border-white/10 shadow-inner">
                {previewMode === 'live' && hasLiveDemo ? (
                  <>
                    {isIframeLoading && (
                      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#07130D] text-[#F5EFE3] gap-3">
                        <div className="w-8 h-8 border-2 border-[#D98F4A] border-t-transparent rounded-full animate-spin" />
                        <p className="text-xs font-serif tracking-wider text-[#D98F4A]">
                          Simulating iPad Viewport...
                        </p>
                      </div>
                    )}
                    <iframe
                      key={iframeKey}
                      ref={iframeRef}
                      src={iframeSrc}
                      onLoad={() => setIsIframeLoading(false)}
                      className="w-full h-full border-0 bg-[#0F2B22]"
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
            className="w-[390px] max-w-full mx-auto"
          >
            {/* iPhone Chassis */}
            <div className="rounded-[52px] p-2.5 sm:p-3 bg-slate-950 border-[6px] border-slate-700/80 dark:border-slate-800 shadow-2xl shadow-black/80 relative">
              
              {/* Dynamic Island Pill at top center */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 w-28 h-6 bg-black rounded-full flex items-center justify-between px-3 border border-white/10 shadow-lg pointer-events-none">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700" />
                <span className="w-2 h-2 rounded-full bg-indigo-950/80 border border-indigo-700" />
              </div>

              {/* Mobile Screen */}
              <div className="relative rounded-[42px] overflow-hidden h-[760px] bg-slate-950 border border-white/10 shadow-inner">
                {previewMode === 'live' && hasLiveDemo ? (
                  <>
                    {isIframeLoading && (
                      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#07130D] text-[#F5EFE3] gap-3">
                        <div className="w-8 h-8 border-2 border-[#D98F4A] border-t-transparent rounded-full animate-spin" />
                        <p className="text-xs font-serif tracking-wider text-[#D98F4A]">
                          Simulating iPhone Viewport...
                        </p>
                      </div>
                    )}
                    <iframe
                      key={iframeKey}
                      ref={iframeRef}
                      src={iframeSrc}
                      onLoad={() => setIsIframeLoading(false)}
                      className="w-full h-full border-0 bg-[#0F2B22]"
                      title={`${template.name} Mobile Live Demo`}
                    />
                  </>
                ) : (
                  <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-slate-950 pt-8">
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

              {/* Mobile Home Bar Indicator */}
              <div className="w-32 h-1 rounded-full bg-white/40 mx-auto mt-2" />
            </div>

            {/* Mobile Viewport Label */}
            <div className="mt-2 text-center text-xs text-slate-400 font-mono">
              Apple iPhone 16 Pro Viewport • 390 × 844 (Portrait Simulated)
            </div>
          </motion.div>
        )}

      </div>

      {/* 3. THUMBNAILS STRIP (For browsing all website page views and photography) */}
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

        <div className="flex items-center gap-3 overflow-x-auto py-2 px-1">
          {template.previewImages.map((img, idx) => {
            const isSelected = previewMode === 'screenshots' && selectedImageIndex === idx;
            return (
              <button
                key={img.url}
                onClick={() => {
                  setSelectedImageIndex(idx);
                  setPreviewMode('screenshots');
                }}
                className={`relative group shrink-0 w-36 h-22 rounded-xl overflow-hidden border-2 transition-all cursor-pointer text-left ${
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
