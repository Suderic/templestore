'use client';

import React from 'react';
import { X, Check, BedDouble, Users, Eye, Maximize, CalendarDays, Flame } from 'lucide-react';
import { ResortRoom, DeviceMode } from './types';

interface Props {
  room: ResortRoom | null;
  onClose: () => void;
  onBookRoom: (roomId: string) => void;
  deviceMode?: DeviceMode;
}

export function AlderAshRoomModal({ room, onClose, onBookRoom, deviceMode = 'desktop' }: Props) {
  if (!room) return null;

  const isMobile = deviceMode === 'mobile';
  const isTablet = deviceMode === 'tablet';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className={`relative w-full ${
          isMobile ? 'max-w-[390px] rounded-2xl' : isTablet ? 'max-w-[640px] rounded-3xl' : 'max-w-3xl rounded-3xl'
        } bg-[#0B241C] border border-[#F5EFE3]/20 overflow-hidden shadow-2xl text-[#F5EFE3] my-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Image Banner */}
        <div className={`relative ${isMobile ? 'aspect-[16/10]' : 'aspect-[16/9]'} w-full bg-slate-900 overflow-hidden`}>
          <img
            src={room.imageUrl}
            alt={room.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B241C] via-[#0B241C]/30 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-2 rounded-xl bg-black/50 hover:bg-black/70 text-white backdrop-blur-md transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3.5 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6 flex items-end justify-between">
            <div>
              <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#D98F4A] text-[#120B04]">
                {room.features[0] || 'Featured Cabin'}
              </span>
              <h3 className={`font-serif ${isMobile ? 'text-xl' : 'text-2xl sm:text-3xl'} font-medium text-white mt-1`}>
                {room.name}
              </h3>
            </div>
            <div className="text-right">
              <span className={`font-serif ${isMobile ? 'text-xl' : 'text-2xl sm:text-3xl'} font-bold text-[#D98F4A]`}>
                ${room.rate}
              </span>
              <span className="text-[11px] sm:text-xs text-[#E8DCC3]/70 font-sans block">/night</span>
            </div>
          </div>
        </div>

        {/* Content Details */}
        <div className={`${isMobile ? 'p-4 space-y-4' : 'p-6 sm:p-8 space-y-6'}`}>
          {/* Quick Specs Pill Row */}
          <div className={`grid ${isMobile ? 'grid-cols-2 gap-2' : isTablet ? 'grid-cols-4 gap-2.5' : 'grid-cols-2 sm:grid-cols-4 gap-3'}`}>
            <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2">
              <Users className="w-4 h-4 text-[#D98F4A] shrink-0" />
              <span className="text-[11px] sm:text-xs font-semibold">{room.capacity}</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2">
              <BedDouble className="w-4 h-4 text-[#D98F4A] shrink-0" />
              <span className="text-[11px] sm:text-xs font-semibold">{room.beds}</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#D98F4A] shrink-0" />
              <span className="text-[11px] sm:text-xs font-semibold truncate">{room.view}</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2">
              <Maximize className="w-4 h-4 text-[#D98F4A] shrink-0" />
              <span className="text-[11px] sm:text-xs font-semibold">{room.size}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-serif text-base sm:text-lg text-[#F5EFE3] mb-1.5 sm:mb-2">Cabin Overview</h4>
            <p className="text-xs sm:text-sm text-[#E8DCC3]/80 leading-relaxed font-sans">
              {room.description}
            </p>
          </div>

          {/* Amenities Grid */}
          <div>
            <h4 className="font-serif text-base sm:text-lg text-[#F5EFE3] mb-2 sm:mb-3">Included Cabin Comforts</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              {room.amenities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-[#E8DCC3]">
                  <div className="w-4 h-4 rounded-full bg-[#D98F4A]/20 flex items-center justify-center shrink-0 text-[#D98F4A]">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between gap-4">
            <span className="text-xs text-[#E8DCC3]/60 hidden sm:inline">
              Includes artisan breakfast in the Hearth Room daily
            </span>

            <button
              onClick={() => onBookRoom(room.id)}
              className="w-full sm:w-auto px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-[#D98F4A] to-[#E8A86B] text-[#120B04] text-xs font-bold shadow-lg shadow-[#D98F4A]/25 hover:shadow-[#D98F4A]/40 flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <CalendarDays className="w-4 h-4" />
              <span>{isMobile ? `Book — $${room.rate}/nt` : `Book This Room — $${room.rate}/night`}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
