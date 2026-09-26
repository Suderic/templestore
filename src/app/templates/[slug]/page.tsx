'use client';

import React, { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  getAllTemplates, 
  getTemplateBySlug 
} from '@/data/templates';
import { TemplateGallery } from '@/components/templates/TemplateGallery';
import { QRCodeModal } from '@/components/templates/QRCodeModal';
import { DirectCheckoutModal } from '@/components/templates/DirectCheckoutModal';
import { ContactInquiryModal } from '@/components/templates/ContactInquiryModal';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  QrCode, 
  CreditCard, 
  Mail, 
  Check, 
  Star, 
  ShieldCheck, 
  ArrowLeft, 
  Sparkles, 
  FileCode, 
  Layers, 
  ExternalLink,
  Clock,
  HardDrive,
  Compass
} from 'lucide-react';
import { QrLuxury, ShieldLuxury, UpdateLuxury, DownloadLuxury, DiamondSparkle } from '@/components/ui/Icons';
import { TemplateCard } from '@/components/templates/TemplateCard';

export default function TemplateDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const template = getTemplateBySlug(slug);

  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [isDirectCheckoutOpen, setIsDirectCheckoutOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  if (!template) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Template Not Found</h2>
        <p className="text-sm text-slate-500">The template you requested does not exist or has been moved.</p>
        <Link href="/templates">
          <Button variant="primary" size="md">
            Return to Gallery
          </Button>
        </Link>
      </div>
    );
  }

  const allTemplates = getAllTemplates();
  const relatedTemplates = allTemplates.filter((t) => t.id !== template.id).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-14">
      
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
        <Link href="/templates" className="hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Gallery
        </Link>
        <span>/</span>
        <span className="capitalize">{template.category}</span>
        <span>/</span>
        <span className="text-slate-900 dark:text-white font-medium">{template.name}</span>
      </div>

      {/* Main Grid: Gallery on left, Purchase sidebar on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column (Gallery & Deep Details) */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Header Title & Tagline */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                {template.category.toUpperCase()}
              </span>
              {template.badge && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20">
                  {template.badge}
                </span>
              )}
              <span className="text-xs text-slate-400 ml-auto">
                v{template.version} • Updated {template.lastUpdated}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {template.name}
            </h1>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
              {template.tagline}
            </p>

            {template.livePreviewUrl && (
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Link href={template.livePreviewUrl}>
                  <Button variant="glow" size="md" className="font-bold shadow-indigo-500/20">
                    <Compass className="w-4 h-4 mr-2" />
                    <span>View Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-2 opacity-70" />
                  </Button>
                </Link>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Fully interactive preview with mobile, tablet &amp; desktop modes
                </span>
              </div>
            )}
          </div>

          {/* Gallery Component */}
          <TemplateGallery template={template} />

          {/* Description & Overview */}
          <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/50 dark:border-white/10 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Overview & Architecture
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line leading-relaxed">
              {template.longDescription}
            </p>
          </div>

          {/* Key Features Checklist */}
          <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/50 dark:border-white/10 space-y-5">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              What's Included in {template.name}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {template.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                  <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-500 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Breakdown */}
          <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/50 dark:border-white/10 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Tech Stack & Tooling
            </h3>
            <div className="flex flex-wrap gap-2">
              {template.techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="px-3 py-1.5 rounded-xl glass-panel text-xs font-semibold text-slate-800 dark:text-slate-200 border border-white/40 dark:border-white/10 flex items-center gap-1.5"
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: tech.color || '#6366f1' }}
                  />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Author Card */}
          <div className="p-6 rounded-2xl glass-panel border border-white/40 dark:border-white/10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <img
                src={template.author.avatar}
                alt={template.author.name}
                className="w-12 h-12 rounded-xl object-cover shadow-sm"
              />
              <div>
                <p className="text-xs text-slate-400">Created by</p>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {template.author.name}
                </h4>
                <p className="text-xs text-indigo-500">{template.author.role}</p>
              </div>
            </div>
            <div className="text-right text-xs text-slate-400 hidden sm:block">
              <p>File Size: <span className="font-semibold text-slate-800 dark:text-slate-200">{template.fileSize}</span></p>
              <p>Verified Author: <span className="text-emerald-500 font-semibold">100% Guaranteed</span></p>
            </div>
          </div>

        </div>

        {/* Right Sticky Purchase Sidebar */}
        <div className="lg:col-span-4 sticky top-24 space-y-5">
          <div className="p-6 sm:p-7 rounded-3xl glass-card border border-white/60 dark:border-white/10 shadow-2xl space-y-6">
            
            {/* Price Badge */}
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Commercial License
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl font-black text-slate-900 dark:text-white">
                    ${template.price}
                  </span>
                  {template.originalPrice && (
                    <span className="text-sm line-through text-slate-400">
                      ${template.originalPrice}
                    </span>
                  )}
                  <span className="text-xs text-emerald-500 font-semibold">
                    Save ${ (template.originalPrice || template.price + 40) - template.price }
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-amber-500 text-xs">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-bold text-slate-900 dark:text-white">{template.rating}</span>
                <span className="text-slate-400">({template.reviewsCount})</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              {/* Launch Live Demo */}
              {template.livePreviewUrl && (
                <Link href={template.livePreviewUrl} className="block w-full">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full justify-center py-3.5 border-indigo-500/40 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/10 font-bold shadow-sm"
                  >
                    <Compass className="w-4 h-4 mr-2 text-indigo-500" />
                    <span>Launch Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-2 opacity-70" />
                  </Button>
                </Link>
              )}

              {/* Buy via QR Code */}
              <Button
                variant="glow"
                size="lg"
                className="w-full justify-center py-4 font-bold shadow-xl shadow-purple-500/25 border border-white/20"
                onClick={() => setIsQrModalOpen(true)}
              >
                <QrLuxury className="w-5 h-5 mr-2 text-white shrink-0 drop-shadow-xs" />
                <span>Buy via QR Code</span>
              </Button>

              {/* Buy directly */}
              <Button
                variant="secondary"
                size="lg"
                className="w-full justify-center py-4"
                onClick={() => setIsDirectCheckoutOpen(true)}
              >
                <CreditCard className="w-5 h-5 mr-2 text-indigo-400" />
                <span>Buy Directly (Checkout)</span>
              </Button>

              {/* Contact Us to purchase */}
              <Button
                variant="glass"
                size="md"
                className="w-full justify-center text-xs"
                onClick={() => setIsContactModalOpen(true)}
              >
                <Mail className="w-4 h-4 mr-2 text-amber-500" />
                <span>Contact Us to Purchase / Inquire</span>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="pt-4 border-t border-slate-200/50 dark:border-white/10 space-y-2.5 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2.5">
                <ShieldLuxury className="w-4 h-4 shrink-0" />
                <span>Instant download link & source code access</span>
              </div>
              <div className="flex items-center gap-2.5">
                <UpdateLuxury className="w-4 h-4 shrink-0" />
                <span>Free lifetime updates & bug fixes</span>
              </div>
              <div className="flex items-center gap-2.5">
                <DownloadLuxury className="w-4 h-4 shrink-0" />
                <span>Commercial unlimited client deployments</span>
              </div>
            </div>

            {/* Included Assets */}
            <div className="pt-4 border-t border-slate-200/50 dark:border-white/10">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-2">
                Package Contents
              </p>
              <ul className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                {template.includedItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>

      {/* Recommended / Related Templates */}
      <div className="pt-10 border-t border-slate-200/50 dark:border-white/10 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Other Popular Templates
          </h3>
          <Link href="/templates" className="text-xs text-indigo-500 hover:underline">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedTemplates.map((rel) => (
            <TemplateCard key={rel.id} template={rel} />
          ))}
        </div>
      </div>

      {/* Modals */}
      <QRCodeModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
        template={template}
      />

      <DirectCheckoutModal
        isOpen={isDirectCheckoutOpen}
        onClose={() => setIsDirectCheckoutOpen(false)}
        template={template}
      />

      <ContactInquiryModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        template={template}
      />

    </div>
  );
}
