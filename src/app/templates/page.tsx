'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllTemplates } from '@/data/templates';
import { TemplateCategory } from '@/types';
import { TemplateCard } from '@/components/templates/TemplateCard';
import { TemplateFilter } from '@/components/templates/TemplateFilter';
import { Layers, FilterX } from 'lucide-react';
import { Button } from '@/components/ui/Button';

function TemplatesContent() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get('category') as TemplateCategory) || 'all';

  const allTemplates = useMemo(() => getAllTemplates(), []);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory>(initialCategory);
  const [sortBy, setSortBy] = useState('featured');

  // Filter & Sort Logic
  const filteredTemplates = useMemo(() => {
    return allTemplates
      .filter((template) => {
        // Category filter
        if (selectedCategory !== 'all' && template.category !== selectedCategory) {
          return false;
        }

        // Search query filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = template.name.toLowerCase().includes(q);
          const matchDesc = template.shortDescription.toLowerCase().includes(q);
          const matchTech = template.techStack.some((t) => t.name.toLowerCase().includes(q));
          const matchTagline = template.tagline.toLowerCase().includes(q);
          if (!matchName && !matchDesc && !matchTech && !matchTagline) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'popular') return b.salesCount - a.salesCount;
        if (sortBy === 'rating') return b.rating - a.rating;
        // Default: featured
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [allTemplates, selectedCategory, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSortBy('featured');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Template Gallery
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-500 dark:text-slate-400">
          Explore our collection of modular website and app boilerplates. Test the responsive layouts and dynamic QR checkout in real time.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <TemplateFilter
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
        totalCount={filteredTemplates.length}
      />

      {/* Gallery Grid */}
      {filteredTemplates.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredTemplates.map((template, idx) => (
              <motion.div
                key={template.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <TemplateCard template={template} priority={idx < 3} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        /* Empty State */
        <div className="py-20 text-center rounded-3xl glass-card border border-white/50 dark:border-white/10 max-w-lg mx-auto p-8 space-y-4">
          <div className="w-14 h-14 rounded-2xl glass-panel mx-auto flex items-center justify-center text-slate-400">
            <FilterX className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            No templates found
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            We couldn't find any templates matching "{searchQuery}". Try adjusting your keywords or clearing the category filter.
          </p>
          <Button variant="primary" size="sm" onClick={handleResetFilters}>
            Reset All Filters
          </Button>
        </div>
      )}
    </div>
  );
}

export default function TemplatesPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-20 text-center text-slate-400">
          Loading gallery...
        </div>
      }
    >
      <TemplatesContent />
    </Suspense>
  );
}
