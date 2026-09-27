'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Template } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { QRCodeModal } from '@/components/templates/QRCodeModal';
import { Star, QrCode, ArrowUpRight, CheckCircle2, Zap, Compass } from 'lucide-react';
import { QrLuxury, DiamondSparkle } from '@/components/ui/Icons';

interface TemplateCardProps {
  template: Template;
  priority?: boolean;
}

export function TemplateCard({ template, priority = false }: TemplateCardProps) {
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  const categoryLabels = {
    website: 'Website',
    app: 'Web App',
    mobile: 'Mobile App',
    saas: 'SaaS UI',
    all: 'All',
  };

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        className="group relative flex flex-col rounded-2xl glass-card border border-white/50 dark:border-white/10 hover:border-indigo-400/40 dark:hover:border-indigo-500/30 overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10"
      >
        {/* Preview Image with Glow Overlay */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900/10 dark:bg-slate-950/40">
          <img
            src={template.previewImages[0]?.url || '/previews/alder-1.jpg'}
            alt={template.previewImages[0]?.alt || template.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading={priority ? 'eager' : 'lazy'}
          />

          {/* Frosted Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wide uppercase glass-panel border border-white/40 dark:border-white/10 text-slate-800 dark:text-slate-100 shadow-sm pointer-events-auto">
              {categoryLabels[template.category]}
            </span>

            {template.badge && (
              <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wide uppercase bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 text-white shadow-md shadow-amber-500/25 pointer-events-auto flex items-center gap-1.5">
                <DiamondSparkle className="w-3.5 h-3.5" />
                {template.badge}
              </span>
            )}
          </div>

          {/* Floating Actions on Image Hover */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {template.livePreviewUrl ? (
              <Link
                href={template.category === 'website' ? template.livePreviewUrl : `/templates/${template.slug}#preview-gallery`}
                className="px-3 py-1.5 rounded-xl glass-panel bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white border border-white/60 dark:border-white/20 text-xs font-semibold shadow-xl hover:scale-105 transition-all flex items-center gap-1.5 cursor-pointer backdrop-blur-md pointer-events-auto"
                title={template.category === 'website' ? "Launch Live Demo" : "Try Interactive Preview"}
              >
                <Compass className="w-3.5 h-3.5 text-indigo-500" />
                <span>{template.category === 'website' ? "Live Demo" : "Interactive Preview"}</span>
              </Link>
            ) : <div />}

            <button
              onClick={() => setIsQrModalOpen(true)}
              className="px-3 py-1.5 rounded-xl glass-panel bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white border border-white/60 dark:border-white/20 text-xs font-semibold shadow-md shadow-black/10 dark:shadow-black/40 hover:shadow-lg hover:border-amber-500/40 hover:scale-105 hover:brightness-105 transition-all flex items-center gap-1.5 cursor-pointer backdrop-blur-md pointer-events-auto"
              title="Quick QR Payment"
            >
              <QrLuxury className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Quick QR</span>
            </button>
          </div>
        </div>

        {/* Card Body */}
        <div className="flex-1 p-5 flex flex-col justify-between">
          <div className="space-y-2.5">
            {/* Rating & Sales */}
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="font-bold text-slate-800 dark:text-slate-200">{template.rating}</span>
                <span className="text-[11px] text-slate-400">({template.reviewsCount})</span>
              </div>
              <span className="text-[11px] font-medium text-slate-400">
                {template.salesCount} sold
              </span>
            </div>

            {/* Title & Tagline */}
            <div>
              <Link href={`/templates/${template.slug}`} className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                <h3 className="text-base font-bold text-slate-900 dark:text-white line-clamp-1">
                  {template.name}
                </h3>
              </Link>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                {template.shortDescription}
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {template.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech.name}
                  className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-white/5"
                >
                  {tech.name}
                </span>
              ))}
              {template.techStack.length > 3 && (
                <span className="px-1.5 py-0.5 text-[10px] text-slate-400 font-medium">
                  +{template.techStack.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="mt-5 pt-3.5 border-t border-slate-200/50 dark:border-white/10 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-semibold text-slate-400 block leading-none mb-1">
                One-time
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-black text-slate-900 dark:text-white">
                  ${template.price}
                </span>
                {template.originalPrice && (
                  <span className="text-xs line-through text-slate-400">
                    ${template.originalPrice}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              {template.livePreviewUrl && (
                <Link
                  href={template.category === 'website' ? template.livePreviewUrl : `/templates/${template.slug}#preview-gallery`}
                  className="p-2 rounded-xl glass-panel text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 border border-white/40 dark:border-white/10 hover:border-indigo-500/30 shadow-sm hover:shadow-md hover:brightness-105 transition-all cursor-pointer hover:scale-105 active:scale-95"
                  title={template.category === 'website' ? "View Live Demo" : "Try Interactive Preview"}
                >
                  <Compass className="w-4 h-4" />
                </Link>
              )}

              <button
                onClick={() => setIsQrModalOpen(true)}
                className="p-2 rounded-xl glass-panel text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 border border-white/40 dark:border-white/10 hover:border-amber-500/30 shadow-sm hover:shadow-md hover:brightness-105 transition-all cursor-pointer hover:scale-105 active:scale-95"
                title="Purchase via QR Code"
              >
                <QrLuxury className="w-4 h-4" />
              </button>

              <Link href={`/templates/${template.slug}`}>
                <Button variant="primary" size="sm" className="font-semibold shadow-indigo-500/20">
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* QR Code Purchase Modal */}
      <QRCodeModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
        template={template}
      />
    </>
  );
}
