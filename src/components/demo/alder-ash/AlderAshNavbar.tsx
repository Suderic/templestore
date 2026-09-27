'use client';

import React, { useState } from 'react';
import { 
  TreePine, 
  Menu, 
  X, 
  CalendarDays, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { ResortPage, DeviceMode } from './types';

interface Props {
  activePage: ResortPage;
  onPageChange: (page: ResortPage) => void;
  onOpenBooking: () => void;
  deviceMode?: DeviceMode;
}

export function AlderAshNavbar({ activePage, onPageChange, onOpenBooking, deviceMode = 'desktop' }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Automatically close mobile menu whenever device mode switches
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [deviceMode]);

  const isMobile = deviceMode === 'mobile';
  const isTablet = deviceMode === 'tablet';
  const isCompact = isMobile || isTablet;

  const navItems: { id: ResortPage; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'dining', label: 'Dining' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'blog', label: 'Journal' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: ResortPage) => {
    onPageChange(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0F2B22]/95 backdrop-blur-xl border-b border-[#F5EFE3]/15 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 sm:gap-3 group text-left cursor-pointer shrink-0"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#164031] to-[#0B241C] border border-[#D98F4A]/40 flex items-center justify-center text-[#D98F4A] shadow-md shadow-[#D98F4A]/10 group-hover:scale-105 group-hover:border-[#D98F4A] transition-all">
            <TreePine className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-[#F5EFE3] leading-none group-hover:text-[#D98F4A] transition-colors whitespace-nowrap">
              Alder &amp; Ash
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-widest uppercase text-[#E8DCC3]/60 font-sans mt-0.5 font-semibold whitespace-nowrap">
              Cascade Forest Retreat
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className={`${isCompact ? 'hidden' : 'hidden lg:flex'} items-center gap-1 bg-[#F5EFE3]/[0.04] p-1.5 rounded-full border border-[#F5EFE3]/[0.08]`}>
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#F5EFE3]/15 text-[#F5EFE3] shadow-inner border border-[#F5EFE3]/20'
                    : 'text-[#E8DCC3]/75 hover:text-[#F5EFE3] hover:bg-[#F5EFE3]/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Header Book CTA - hidden on mobile viewports so header stays serene and uncluttered; prominent CTA is placed in floating bottom bar and mobile drawer */}
          <button
            onClick={onOpenBooking}
            className={`${
              isMobile ? 'hidden' : 'hidden sm:flex'
            } items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs rounded-full bg-gradient-to-r from-[#D98F4A] via-[#E29D5D] to-[#D98F4A] text-[#140D04] font-bold tracking-wide shadow-lg shadow-[#D98F4A]/25 hover:shadow-[#D98F4A]/40 hover:scale-[1.02] transition-all cursor-pointer active:scale-95`}
          >
            <CalendarDays className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span>Book Your Stay</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`${isCompact ? 'flex' : 'lg:hidden flex'} items-center justify-center p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#E8DCC3] hover:text-white hover:bg-white/10 transition-all cursor-pointer`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown - strictly hidden on desktop */}
      {mobileMenuOpen && (
        <div className={`${isCompact ? 'block' : 'lg:hidden'} w-full bg-[#0B241C]/98 backdrop-blur-2xl border-b border-[#F5EFE3]/15 px-4 sm:px-6 py-5 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl`}>
          <div className={`grid ${isMobile ? 'grid-cols-2 gap-1.5' : 'grid-cols-2 sm:grid-cols-4 gap-2'}`}>
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between p-2.5 sm:p-3 rounded-xl text-left text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-[#D98F4A]/20 text-[#D98F4A] border border-[#D98F4A]/30'
                      : 'bg-white/5 text-[#E8DCC3] hover:bg-white/10'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-[#D98F4A] to-[#E8A86B] text-[#140D04] text-center text-xs sm:text-sm font-bold shadow-lg shadow-[#D98F4A]/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <CalendarDays className="w-4 h-4" />
              <span>Reserve a Cabin / Room</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
