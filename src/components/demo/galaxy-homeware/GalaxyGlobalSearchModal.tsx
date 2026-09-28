'use client';

import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Sparkles, Star } from 'lucide-react';
import { Product } from './types';
import { LUMINA_PRODUCTS } from './data';

interface GalaxyGlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export function GalaxyGlobalSearchModal({
  isOpen,
  onClose,
  onSelectProduct
}: GalaxyGlobalSearchModalProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const filteredProducts = query.trim() === ''
    ? LUMINA_PRODUCTS.slice(0, 4)
    : LUMINA_PRODUCTS.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.materials.some(m => m.name.toLowerCase().includes(q))
        );
      });

  const popularTags = [
    'Bouclé Lounge Chair',
    'Solid Oak Dining',
    'Sculptural Chandelier',
    'Acoustic Hi-Fi Speaker',
    'Matte Stoneware Set',
    'French Washed Linen'
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 lg:p-8 flex items-start justify-center pt-16 sm:pt-24">
      
      {/* Translucent Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity animate-in fade-in"
      />

      {/* Translucent Search Box Dialog */}
      <div className="relative w-full max-w-2xl rounded-3xl backdrop-blur-2xl bg-white/95 dark:bg-slate-900/95 border border-white/40 dark:border-white/10 shadow-2xl shadow-black/60 p-4 sm:p-6 z-10 animate-in zoom-in-95 duration-200">
        
        {/* Search Bar Input */}
        <div className="relative flex items-center">
          <Search className="w-5 h-5 text-amber-500 absolute left-3.5" />
          <input
            type="text"
            placeholder="Search chairs, dining tables, lamps, speakers, linen..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full h-12 pl-11 pr-10 rounded-2xl bg-slate-100 dark:bg-slate-800 text-sm font-medium text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500 border border-slate-200/80 dark:border-white/5"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3.5 p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="absolute right-3.5 text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-500">
              ESC
            </kbd>
          )}
        </div>

        {/* Popular Tags */}
        <div className="pt-3 pb-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 shrink-0">
            Popular Searches:
          </span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 rounded-lg text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-amber-950/40 hover:text-amber-600 dark:hover:text-amber-400 transition-colors whitespace-nowrap cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="pt-3 border-t border-slate-200/70 dark:border-white/10 space-y-2 max-h-[360px] overflow-y-auto no-scrollbar">
          <div className="flex items-center justify-between text-xs text-slate-400 px-1 mb-1">
            <span>{query ? `Search Results (${filteredProducts.length})` : 'Featured Designs'}</span>
            <span className="text-[10px]">Click item to inspect specifications</span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="py-8 text-center text-slate-400 text-xs">
              No pieces found matching "{query}". Try searching "Oak", "Lounge", "Lamp", or "Linen".
            </div>
          ) : (
            filteredProducts.map((p) => (
              <div
                key={p.id}
                onClick={() => {
                  onSelectProduct(p);
                  onClose();
                }}
                className="p-2.5 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors flex items-center justify-between gap-3 cursor-pointer group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-950 shrink-0 border border-slate-200/60 dark:border-white/10">
                    <img src={p.images.hero} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate group-hover:text-amber-500">
                      {p.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 truncate">
                      {p.categoryLabel} • {p.specifications.origin} • {p.specifications.warrantyYears}-Year Warranty
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="text-right">
                    <span className="text-xs font-black text-slate-900 dark:text-white block">
                      ${p.price.toFixed(0)}
                    </span>
                    <span className="text-[10px] text-emerald-500 font-semibold">Free Delivery &gt; $150</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
