'use client';

import React from 'react';
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { TemplateCategory } from '@/types';

interface TemplateFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: TemplateCategory;
  onCategoryChange: (category: TemplateCategory) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  totalCount: number;
}

export function TemplateFilter({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  totalCount,
}: TemplateFilterProps) {
  const categories: { label: string; value: TemplateCategory }[] = [
    { label: 'All Templates', value: 'all' },
    { label: 'Web Applications', value: 'app' },
    { label: 'Mobile & PWA Apps', value: 'mobile' },
    { label: 'SaaS & Dashboards', value: 'saas' },
    { label: 'Websites & Portfolios', value: 'website' },
  ];

  return (
    <div className="space-y-4 mb-8">
      {/* Top Search Bar & Sort Dropdown */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        {/* Search Bar */}
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by name, tech stack (e.g. Next.js, Stripe)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input border border-slate-200/80 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              Clear
            </button>
          )}
        </div>

        {/* Sort selector */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline-flex items-center gap-1">
            <ArrowUpDown className="w-3.5 h-3.5" /> Sort:
          </span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="rounded-xl glass-panel px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 cursor-pointer"
          >
            <option value="featured" className="dark:bg-slate-900 text-slate-900 dark:text-white">Featured</option>
            <option value="popular" className="dark:bg-slate-900 text-slate-900 dark:text-white">Most Popular</option>
            <option value="price-asc" className="dark:bg-slate-900 text-slate-900 dark:text-white">Price: Low to High</option>
            <option value="price-desc" className="dark:bg-slate-900 text-slate-900 dark:text-white">Price: High to Low</option>
            <option value="rating" className="dark:bg-slate-900 text-slate-900 dark:text-white">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-between flex-wrap gap-2 pt-1 border-t border-slate-200/40 dark:border-white/5">
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => onCategoryChange(cat.value)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25 border border-indigo-400/40'
                    : 'glass-panel text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/80 dark:hover:bg-slate-800/80 border border-white/40 dark:border-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
          Showing <span className="font-bold text-slate-900 dark:text-white">{totalCount}</span> template{totalCount === 1 ? '' : 's'}
        </span>
      </div>
    </div>
  );
}
