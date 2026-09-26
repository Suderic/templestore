'use client';

import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ResortGalleryItem, DeviceMode } from './types';

interface Props {
  item: ResortGalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  deviceMode?: DeviceMode;
}

export function AlderAshLightbox({ item, onClose, onPrev, onNext, deviceMode = 'desktop' }: Props) {
  if (!item) return null;

  const isMobile = deviceMode === 'mobile';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200 select-none"
      onClick={onClose}
    >
      {/* Top Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer z-10"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Navigation Buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all cursor-pointer z-10"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all cursor-pointer z-10"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Center Image Container */}
      <div 
        className={`${isMobile ? 'max-w-[360px] max-h-[80vh]' : 'max-w-5xl max-h-[85vh]'} flex flex-col items-center px-2`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.imageUrl}
          alt={item.title}
          className={`${isMobile ? 'max-h-[58vh]' : 'max-h-[75vh]'} w-auto max-w-full object-contain rounded-xl sm:rounded-2xl shadow-2xl border border-white/10`}
        />
        <div className="mt-3 sm:mt-4 text-center">
          <h4 className="font-serif text-base sm:text-lg text-[#F5EFE3] font-medium">{item.title}</h4>
          <p className="text-[11px] sm:text-xs text-[#E8DCC3]/70 font-sans mt-0.5">{item.caption}</p>
        </div>
      </div>
    </div>
  );
}
