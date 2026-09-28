'use client';

import React from 'react';
import { 
  Sparkles, 
  Armchair, 
  Lamp, 
  Speaker, 
  UtensilsCrossed, 
  Layers, 
  SlidersHorizontal,
  Check
} from 'lucide-react';
import { ProductCategory } from './types';
import { LUMINA_CATEGORIES } from './data';

interface GalaxyCategoryBarProps {
  activeCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  inStockOnly: boolean;
  onToggleInStock: () => void;
  totalCount: number;
}

export function GalaxyCategoryBar({
  activeCategory,
  onSelectCategory,
  sortBy,
  onSortChange,
  inStockOnly,
  onToggleInStock,
  totalCount
}: GalaxyCategoryBarProps) {
  
  const getIcon = (id: string) => {
    switch (id) {
      case 'all': return <Sparkles className="w-3.5 h-3.5" />;
      case 'furniture': return <Armchair className="w-3.5 h-3.5" />;
      case 'lighting': return <Lamp className="w-3.5 h-3.5" />;
      case 'audio-tech': return <Speaker className="w-3.5 h-3.5" />;
      case 'tableware': return <UtensilsCrossed className="w-3.5 h-3.5" />;
      case 'textiles': return <Layers className="w-3.5 h-3.5" />;
      default: return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="py-6 border-b border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        
        {/* Title & Section Subhead */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Curated Departments
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Explore by Living Category
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Honest materials, tactile comfort, and architectural craftsmanship for every room in your sanctuary.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-mono">
              {totalCount} designs available
            </span>
          </div>
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-2">
          
          {/* Horizontal Category Scroll Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
            {LUMINA_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id as ProductCategory)}
                  className={`h-9 px-3.5 rounded-xl text-xs font-semibold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-400/20 ring-2 ring-amber-300/40'
                      : 'bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-white/10 shadow-xs'
                  }`}
                >
                  <span className={isActive ? 'text-slate-950' : 'text-amber-500'}>
                    {getIcon(cat.id)}
                  </span>
                  <span>{cat.name}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md ${
                    isActive 
                      ? 'bg-slate-950/15 text-slate-950 font-bold' 
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Filters: Sort & Ready to Deliver */}
          <div className="flex items-center gap-2 shrink-0">
            
            {/* Ready to Deliver Filter Toggle */}
            <button
              onClick={onToggleInStock}
              className={`h-9 px-3 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer border ${
                inStockOnly
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 font-bold'
                  : 'bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border-slate-200/80 dark:border-white/10 hover:text-slate-900'
              }`}
            >
              <div className={`w-3.5 h-3.5 rounded-md border flex items-center justify-center ${
                inStockOnly ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-300 dark:border-slate-600'
              }`}>
                {inStockOnly && <Check className="w-2.5 h-2.5 stroke-[3]" />}
              </div>
              <span>In Stock (Ships in 24h)</span>
            </button>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
                className="h-9 pl-3 pr-8 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/10 shadow-xs appearance-none cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-amber-500"
              >
                <option value="featured">Sort: Curated Staff Picks</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Customer Rating</option>
              </select>
              <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400">
                <SlidersHorizontal className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
