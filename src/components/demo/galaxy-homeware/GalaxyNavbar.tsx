'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  ShoppingBag, 
  Heart, 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  ArrowRight, 
  Armchair, 
  Lamp, 
  Speaker, 
  UtensilsCrossed, 
  Layers, 
  MapPin 
} from 'lucide-react';
import { ProductCategory, StorePage } from './types';
import { LUMINA_CATEGORIES } from './data';
import { BuyoLogo } from './BuyoLogo';

interface GalaxyNavbarProps {
  cartCount: number;
  cartTotal: number;
  wishlistCount: number;
  activePage: StorePage;
  onNavigatePage: (page: StorePage) => void;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenHelp: () => void;
  activeCategory?: ProductCategory;
  onSelectCategory?: (cat: ProductCategory) => void;
}

export function GalaxyNavbar({
  cartCount,
  cartTotal,
  wishlistCount,
  activePage,
  onNavigatePage,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenHelp,
  activeCategory = 'all',
  onSelectCategory
}: GalaxyNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const megaMenuContainerRef = useRef<HTMLDivElement>(null);

  const handleOpenMegaMenu = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
      megaMenuTimeoutRef.current = null;
    }
    setMegaMenuOpen(true);
  };

  const handleCloseMegaMenu = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    megaMenuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 140);
  };

  const handleImmediateCloseMegaMenu = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
      megaMenuTimeoutRef.current = null;
    }
    setMegaMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      handleImmediateCloseMegaMenu();
    };

    const handleOutsideClick = (e: MouseEvent) => {
      if (megaMenuContainerRef.current && !megaMenuContainerRef.current.contains(e.target as Node)) {
        handleImmediateCloseMegaMenu();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleImmediateCloseMegaMenu();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
      if (megaMenuTimeoutRef.current) {
        clearTimeout(megaMenuTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      
      {/* 1. TOP ANNOUNCEMENT NOTICE BAR */}
      <div className="bg-slate-950 text-white text-[11px] sm:text-xs py-1.5 px-4 border-b border-white/10 select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold uppercase tracking-wider text-[9px] shrink-0 border border-amber-500/30">
              Spring Release
            </span>
            <span className="text-slate-300 truncate">
              Complimentary White-Glove In-Home Delivery on Orders Over $150 • 30-Day Home Trial
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-slate-400 text-xs shrink-0">
            <span className="hover:text-white transition-colors cursor-pointer" onClick={onOpenHelp}>
              Flagship Studios: Sydney, Melbourne &amp; Auckland
            </span>
            <span className="text-slate-600">•</span>
            <button onClick={onOpenHelp} className="flex items-center gap-1 hover:text-amber-300 transition-colors cursor-pointer">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Complimentary Swatch Kit</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. TRANSLUCENT MAIN NAVIGATION BAR */}
      <nav className={`w-full transition-all duration-300 backdrop-blur-xl ${
        isScrolled 
          ? 'bg-white/80 dark:bg-slate-950/80 shadow-lg shadow-black/5 border-b border-slate-200/60 dark:border-white/10 py-2.5' 
          : 'bg-white/65 dark:bg-slate-950/65 border-b border-white/30 dark:border-white/10 py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Logo with Buyo B + Shopping Bag Emblem */}
          <div className="flex items-center gap-3">
            <BuyoLogo 
              size="md"
              onClick={() => {
                onNavigatePage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>

          {/* Desktop Navigation Links & Mega Dropdown Trigger */}
          <div className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => {
                onNavigatePage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onMouseEnter={handleImmediateCloseMegaMenu}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activePage === 'home'
                  ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/20'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
              }`}
            >
              Home
            </button>

            {/* Explore Departments with Integrated Hover Flyout */}
            <div 
              ref={megaMenuContainerRef}
              className="relative inline-block"
              onMouseEnter={handleOpenMegaMenu}
              onMouseLeave={handleCloseMegaMenu}
            >
              <button
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  ['furniture', 'lighting', 'audio-tech', 'tableware', 'textiles'].includes(activePage) || megaMenuOpen
                    ? 'bg-slate-100 dark:bg-slate-800 text-amber-600 dark:text-amber-400 font-bold' 
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100/70 dark:hover:bg-slate-800/70'
                }`}
              >
                <span>Explore Departments</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180 text-amber-500' : ''}`} />
              </button>

              {/* TRANSLUCENT MEGA MENU FLYOUT */}
              {megaMenuOpen && (
                <div 
                  className="absolute top-full left-0 pt-2 w-[620px] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={handleOpenMegaMenu}
                  onMouseLeave={handleCloseMegaMenu}
                >
                  <div className="p-5 rounded-3xl backdrop-blur-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/80 dark:border-white/10 shadow-2xl">
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2 px-1">
                          Curated Living Departments
                        </span>
                        <div className="space-y-1">
                          {LUMINA_CATEGORIES.slice(1).map((cat) => (
                            <button
                              key={cat.id}
                              onClick={() => {
                                onNavigatePage(cat.id as StorePage);
                                handleImmediateCloseMegaMenu();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-amber-50 dark:hover:bg-amber-950/40 hover:text-amber-600 dark:hover:text-amber-400 flex items-center justify-between transition-all cursor-pointer group"
                            >
                              <span>{cat.name}</span>
                              <span className="text-[10px] text-slate-400 group-hover:text-amber-500">
                                {cat.count} items →
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 via-stone-500/10 to-transparent border border-amber-500/20 flex flex-col justify-between">
                        <div>
                          <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                            Design Highlight
                          </span>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-2">
                            Tactile Living &amp; Honest Materials
                          </h4>
                          <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                            Handcrafted from solid European white oak, mouth-blown crystal, washed French linen, and heavy wool bouclé.
                          </p>
                        </div>

                        <button
                          onClick={() => {
                            handleImmediateCloseMegaMenu();
                            onNavigatePage('showrooms');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
                        >
                          <span>Visit Flagship Studios</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => {
                onNavigatePage('furniture');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onMouseEnter={handleImmediateCloseMegaMenu}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activePage === 'furniture'
                  ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/20'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
              }`}
            >
              Furniture
            </button>

            <button
              onClick={() => {
                onNavigatePage('lighting');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onMouseEnter={handleImmediateCloseMegaMenu}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activePage === 'lighting'
                  ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/20'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
              }`}
            >
              Lighting
            </button>

            <button
              onClick={() => {
                onNavigatePage('audio-tech');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onMouseEnter={handleImmediateCloseMegaMenu}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activePage === 'audio-tech'
                  ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/20'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
              }`}
            >
              Audio Tech
            </button>

            <button
              onClick={() => {
                onNavigatePage('tableware');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onMouseEnter={handleImmediateCloseMegaMenu}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activePage === 'tableware'
                  ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/20'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
              }`}
            >
              Tableware
            </button>

            <button
              onClick={() => {
                onNavigatePage('textiles');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onMouseEnter={handleImmediateCloseMegaMenu}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activePage === 'textiles'
                  ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/20'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
              }`}
            >
              Textiles
            </button>

            <button
              onClick={() => {
                onNavigatePage('showrooms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onMouseEnter={handleImmediateCloseMegaMenu}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activePage === 'showrooms'
                  ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/20'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
              }`}
            >
              Showrooms
            </button>

            <button
              onClick={() => {
                onNavigatePage('craftsmanship');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onMouseEnter={handleImmediateCloseMegaMenu}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activePage === 'craftsmanship'
                  ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/20'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
              }`}
            >
              Craftsmanship
            </button>
          </div>

          {/* Right Action Icons: Search, Wishlist, Cart Drawer Trigger */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            
            {/* Global Search Button */}
            <button
              onClick={onOpenSearch}
              onMouseEnter={handleImmediateCloseMegaMenu}
              className="p-2 sm:px-3 sm:py-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/70 transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 whitespace-nowrap"
              title="Search collection (⌘K)"
            >
              <Search className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0" />
              <span className="text-xs text-slate-500 dark:text-slate-400 hidden xl:inline font-medium">Search</span>
              <kbd className="hidden xl:inline text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800 text-slate-500 border border-slate-300/60 dark:border-white/10 shrink-0">
                ⌘K
              </kbd>
            </button>

            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              onMouseEnter={handleImmediateCloseMegaMenu}
              className="relative p-2 sm:p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-rose-500 dark:hover:text-rose-400 hover:bg-rose-50/70 dark:hover:bg-rose-950/30 transition-all cursor-pointer"
              title="Saved Moodboard"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-bold flex items-center justify-center shadow-xs animate-in zoom-in">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Drawer Trigger Button with Subtotal */}
            <button
              onClick={onOpenCart}
              onMouseEnter={handleImmediateCloseMegaMenu}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-amber-600 dark:hover:bg-amber-400 hover:text-white dark:hover:text-slate-950 shadow-md shadow-slate-900/10 transition-all cursor-pointer group"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 px-1 rounded-full bg-amber-500 text-slate-950 text-[9px] font-black min-w-3.5 h-3.5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-xs font-bold hidden sm:inline">
                ${cartTotal.toFixed(0)}
              </span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden cursor-pointer"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </nav>

      {/* 3. MOBILE TRANSLUCENT SLIDE-OUT MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity animate-in fade-in"
          />

          <div className="absolute top-0 right-0 bottom-0 w-[85%] max-w-[340px] backdrop-blur-2xl bg-white/95 dark:bg-slate-950/95 border-l border-slate-200/80 dark:border-white/10 p-5 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-250">
            
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 dark:border-white/10">
                <BuyoLogo 
                  size="sm"
                  onClick={() => {
                    onNavigatePage('home');
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSearch();
                }}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-500 text-xs flex items-center gap-2 border border-slate-200/80 dark:border-white/5 cursor-pointer"
              >
                <Search className="w-4 h-4 text-slate-400" />
                <span>Search chairs, tables, lamps, linen...</span>
              </button>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                  Shop by Department
                </span>
                <div className="space-y-1">
                  <button
                    onClick={() => {
                      onNavigatePage('home');
                      setMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                      activePage === 'home'
                        ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/20'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                    }`}
                  >
                    <span>Storefront Home</span>
                    <span className="text-[10px] text-slate-400">All Collections</span>
                  </button>

                  {LUMINA_CATEGORIES.slice(1).map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        onNavigatePage(cat.id as StorePage);
                        setMobileMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                        activePage === cat.id
                          ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/20'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className="text-[10px] text-slate-400">({cat.count} items)</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-200/60 dark:border-white/10">
                <button
                  onClick={() => {
                    onNavigatePage('home');
                    setMobileMenuOpen(false);
                    setTimeout(() => {
                      const el = document.getElementById('room-mood-studio');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Interactive Ambiance Studio</span>
                </button>

                <button
                  onClick={() => {
                    onNavigatePage('craftsmanship');
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold cursor-pointer flex items-center gap-2 ${
                    activePage === 'craftsmanship'
                      ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>10-Year Craftsmanship Guarantee</span>
                </button>

                <button
                  onClick={() => {
                    onNavigatePage('showrooms');
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold cursor-pointer flex items-center gap-2 ${
                    activePage === 'showrooms'
                      ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  <span>Studios &amp; Flagship Showrooms</span>
                </button>
              </div>
            </div>

            <div 
              onClick={() => {
                onNavigatePage('showrooms');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/70 dark:border-white/5 space-y-1.5 cursor-pointer hover:border-amber-500/40 transition-colors"
            >
              <span className="text-[10px] uppercase font-bold text-amber-500 block">Flagship Showrooms</span>
              <p className="text-xs font-bold text-slate-900 dark:text-white">
                Sydney • Melbourne • Auckland
              </p>
              <p className="text-[11px] text-slate-500">
                Book private 1-on-1 styling appointment →
              </p>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}
