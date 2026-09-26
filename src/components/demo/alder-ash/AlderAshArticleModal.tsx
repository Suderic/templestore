'use client';

import React from 'react';
import { X, Calendar, User, Clock, BookOpen, Share2 } from 'lucide-react';
import { ResortBlogPost, DeviceMode } from './types';

interface Props {
  post: ResortBlogPost | null;
  onClose: () => void;
  onToast: (msg: string) => void;
  deviceMode?: DeviceMode;
}

export function AlderAshArticleModal({ post, onClose, onToast, deviceMode = 'desktop' }: Props) {
  if (!post) return null;

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
        {/* Hero Photo Banner */}
        <div className={`relative ${isMobile ? 'aspect-[16/10]' : 'aspect-[21/9]'} w-full bg-slate-900 overflow-hidden`}>
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B241C] via-[#0B241C]/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-2 rounded-xl bg-black/50 hover:bg-black/70 text-white backdrop-blur-md transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Meta & Body */}
        <div className={`${isMobile ? 'p-4 space-y-4' : 'p-6 sm:p-10 space-y-6'}`}>
          <div>
            <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#D98F4A]/20 text-[#D98F4A] border border-[#D98F4A]/30">
              {post.category}
            </span>
            <h2 className={`font-serif ${isMobile ? 'text-xl' : 'text-2xl sm:text-4xl'} font-medium text-[#F5EFE3] mt-2 leading-tight`}>
              {post.title}
            </h2>

            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-[#E8DCC3]/60 mt-3 pt-3 border-t border-white/10 font-sans">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#D98F4A]" />
                {post.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Full Article Text */}
          <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-[#E8DCC3]/85 leading-relaxed font-sans border-t border-white/10 pt-4">
            {post.fullText.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Footer of modal */}
          <div className="pt-4 sm:pt-6 border-t border-white/10 flex items-center justify-between gap-3">
            <span className="text-[11px] sm:text-xs text-[#E8DCC3]/50 italic font-serif">
              Published by Alder &amp; Ash Gazette
            </span>

            <button
              onClick={() => onToast('Article link copied to clipboard!')}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-[#E8DCC3] hover:text-white transition-all cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-[#D98F4A]" />
              <span>Share</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
