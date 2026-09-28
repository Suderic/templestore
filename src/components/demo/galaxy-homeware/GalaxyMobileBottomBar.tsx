'use client';

import React from 'react';
import { ShoppingBag, Search, Heart, Sparkles, Home } from 'lucide-react';
import { ProductCategory, StorePage } from './types';

interface GalaxyMobileBottomBarProps {
  cartCount: number;
  cartTotal: number;
  wishlistCount: number;
  activePage: StorePage;
  onNavigatePage: (page: StorePage) => void;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onSelectCategory?: (cat: ProductCategory) => void;
}

export function GalaxyMobileBottomBar({
  cartCount,
  cartTotal,
  wishlistCount,
  activePage,
  onNavigatePage,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onSelectCategory
}: GalaxyMobileBottomBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-2 bg-white/85 dark:bg-slate-950/85 backdrop-blur-2xl border-t border-slate-200/80 dark:border-white/10 shadow-2xl">
      <div className="max-w-md mx-auto flex items-center justify-around gap-1">
        
        {/* Home */}
        <button
          onClick={() => {
            onNavigatePage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex-1 py-1 flex flex-col items-center gap-0.5 cursor-pointer transition-colors ${
            activePage === 'home' ? 'text-amber-500 font-bold' : 'text-slate-600 dark:text-slate-400 hover:text-amber-500'
          }`}
        >
          <Home className="w-4 h-4" />
          <span className="text-[10px]">Home</span>
        </button>

        {/* Shop / Furniture */}
        <button
          onClick={() => {
            onNavigatePage('furniture');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex-1 py-1 flex flex-col items-center gap-0.5 cursor-pointer transition-colors ${
            activePage === 'furniture' ? 'text-amber-500 font-bold' : 'text-slate-600 dark:text-slate-400 hover:text-amber-500'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-[10px]">Shop</span>
        </button>

        {/* Search */}
        <button
          onClick={onOpenSearch}
          className="flex-1 py-1 flex flex-col items-center gap-0.5 text-slate-600 dark:text-slate-400 hover:text-sky-500 cursor-pointer"
        >
          <Search className="w-4 h-4" />
          <span className="text-[10px] font-bold">Search</span>
        </button>

        {/* Wishlist */}
        <button
          onClick={onOpenWishlist}
          className="flex-1 py-1 flex flex-col items-center gap-0.5 text-slate-600 dark:text-slate-400 hover:text-rose-500 cursor-pointer relative"
        >
          <Heart className="w-4 h-4" />
          {wishlistCount > 0 && (
            <span className="absolute top-0 right-1/4 w-3.5 h-3.5 rounded-full bg-rose-500 text-white text-[8px] font-bold flex items-center justify-center">
              {wishlistCount}
            </span>
          )}
          <span className="text-[10px] font-bold">Wishlist</span>
        </button>

        {/* Cart */}
        <button
          onClick={onOpenCart}
          className="flex-1 py-1.5 px-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
        >
          <div className="relative">
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 px-1 rounded-full bg-sky-500 text-white text-[8px] font-black min-w-3 h-3 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[11px] font-black">${cartTotal.toFixed(0)}</span>
        </button>

      </div>
    </div>
  );
}
