'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  Check, 
  ShieldCheck,
  Send
} from 'lucide-react';
import { ProductCategory, StorePage } from './types';
import { BuyoLogo } from './BuyoLogo';

interface GalaxyFooterProps {
  onNavigatePage: (page: StorePage) => void;
  onOpenHelp: () => void;
  onSelectCategory?: (cat: ProductCategory) => void;
}

export function GalaxyFooter({ onNavigatePage, onOpenHelp, onSelectCategory }: GalaxyFooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-white/10 relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-amber-500/5 blur-[140px] pointer-events-none" />

      {/* Top Newsletter Strip */}
      <div className="border-b border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
              Architectural Trade &amp; Living Journal
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Stay Informed on New Seasonal Releases
            </h3>
            <p className="text-xs text-slate-400 max-w-md">
              Receive private invitations to seasonal previews, designer collaborations, and interior styling monographs.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex-1 max-w-md">
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent px-3 py-2 text-xs text-white placeholder:text-slate-400 focus:outline-hidden"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 shadow-sm"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Subscribe</span>
                  </>
                )}
              </button>
            </div>
            {subscribed && (
              <p className="text-[10px] text-emerald-400 mt-1 pl-2">
                ✓ Thank you for subscribing. We respect your inbox privacy.
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <BuyoLogo 
              size="md"
              onClick={() => {
                onNavigatePage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Curated modern living store supplying design-forward furniture, architectural lighting, high-fidelity acoustics, and artisanal ceramics for contemporary spaces.
            </p>

            {/* Contact Details */}
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Flagship Studios: Sydney (Surry Hills) • Melbourne (Fitzroy) • Auckland (Ponsonby)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="tel:+61291884400" className="hover:text-white transition-colors">
                  +61 2 9188 4400
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="mailto:concierge@buyo.store" className="hover:text-white transition-colors">
                  concierge@buyo.store
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <span className="w-8 h-8 rounded-xl bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer" title="LinkedIn">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.63 1.63 0 1 0 0-3.25 1.63 1.63 0 0 0 0 3.25M7.85 18.5V10.13H5.06V18.5h2.79Z"/></svg>
              </span>
              <span className="w-8 h-8 rounded-xl bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer" title="Instagram">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </span>
              <span className="w-8 h-8 rounded-xl bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer" title="Pinterest">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0a12 12 0 0 0-4.37 23.17c-.07-.63-.13-1.6.03-2.29l1-4.22s-.25-.5-.25-1.25c0-1.17.68-2.05 1.53-2.05.72 0 1.07.54 1.07 1.19 0 .73-.46 1.82-.7 2.83-.2.85.42 1.54 1.26 1.54 1.51 0 2.68-1.59 2.68-3.89 0-2.03-1.46-3.45-3.54-3.45-2.42 0-3.83 1.81-3.83 3.68 0 .73.28 1.51.63 1.94.07.09.08.16.06.25l-.23.97c-.04.15-.13.18-.3.11-1.11-.52-1.8-2.14-1.8-3.44 0-2.8 2.03-5.37 5.86-5.37 3.08 0 5.47 2.2 5.47 5.13 0 3.06-1.93 5.53-4.61 5.53-.9 0-1.75-.47-2.04-1.02l-.56 2.12c-.2 1.78-.75 2-.12 2.06A12 12 0 1 0 12 0z"/></svg>
              </span>
            </div>
          </div>

          {/* Department Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Living Collections
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {[
                { name: 'Furniture & Seating', page: 'furniture' },
                { name: 'Architectural Lighting', page: 'lighting' },
                { name: 'Smart Audio & Tech', page: 'audio-tech' },
                { name: 'Ceramics & Tableware', page: 'tableware' },
                { name: 'Bedding & Textiles', page: 'textiles' },
                { name: 'All Living Collections', page: 'home' }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      onNavigatePage(link.page as StorePage);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer & Trade Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Trade &amp; Service
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => {
                    onNavigatePage('showrooms');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} 
                  className="hover:text-amber-400 cursor-pointer text-left"
                >
                  Flagship Studios (Sydney, Melbourne, Auckland)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onNavigatePage('craftsmanship');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} 
                  className="hover:text-amber-400 cursor-pointer text-left"
                >
                  10-Year Craftsmanship Guarantee
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onNavigatePage('showrooms');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} 
                  className="hover:text-amber-400 cursor-pointer text-left"
                >
                  Complimentary Material Swatch Kit
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onNavigatePage('craftsmanship');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} 
                  className="hover:text-amber-400 cursor-pointer text-left"
                >
                  White-Glove Delivery &amp; In-Home Placement
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onNavigatePage('craftsmanship');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} 
                  className="hover:text-amber-400 cursor-pointer text-left"
                >
                  30-Day In-Home Comfort Trial
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenHelp} 
                  className="hover:text-amber-400 cursor-pointer text-left"
                >
                  Architectural Trade Program (20% Off)
                </button>
              </li>
            </ul>
          </div>

          {/* Accreditation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Sustainability
            </h4>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>FSC® Certified</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                100% sustainably managed European forests with zero VOC plant-based wax oils.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            Copyright © 2026 Buyo Living Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="hover:text-white cursor-pointer" onClick={onOpenHelp}>Terms &amp; Conditions</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer" onClick={onOpenHelp}>Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer" onClick={onOpenHelp}>Trade Terms</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
