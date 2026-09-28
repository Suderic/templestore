'use client';

import React from 'react';
import { 
  X, 
  Heart, 
  Trash2, 
  ShoppingCart, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Product, WishlistItem } from './types';

interface GalaxyWishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: WishlistItem[];
  onRemoveItem: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  onMoveAllToCart: () => void;
}

export function GalaxyWishlistDrawer({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onAddToCart,
  onMoveAllToCart
}: GalaxyWishlistDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      
      {/* Translucent Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity animate-in fade-in"
      />

      {/* Drawer */}
      <div className="absolute top-0 right-0 bottom-0 w-full max-w-md backdrop-blur-2xl bg-white/90 dark:bg-slate-950/90 border-l border-slate-200/80 dark:border-white/10 p-5 sm:p-6 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-slate-200/70 dark:border-white/10">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500 fill-current" />
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Saved Moodboard
              </h2>
              <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-rose-500/10 text-rose-600 dark:text-rose-400">
                {items.length}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto no-scrollbar py-4 space-y-3">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-rose-50 dark:bg-rose-950/40 flex items-center justify-center text-rose-400">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                No items saved yet
              </h3>
              <p className="text-xs text-slate-400 max-w-[220px]">
                Click the heart icon on any furniture, lighting, or tableware design to save it to your moodboard.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-xs cursor-pointer shadow-sm"
              >
                Browse Collections
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.productId}
                className="p-3 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/60 dark:border-white/5 flex gap-3 relative group"
              >
                <div className="w-18 h-18 rounded-xl overflow-hidden bg-slate-950 shrink-0 border border-slate-200/50 dark:border-white/5">
                  <img
                    src={item.product.images.hero}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0 space-y-1">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                    {item.product.name}
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    {item.product.categoryLabel} • Ships in 24h
                  </p>
                  <p className="text-xs font-black text-slate-900 dark:text-white">
                    ${item.product.price.toFixed(0)}
                  </p>

                  <div className="pt-1 flex items-center gap-2">
                    <button
                      onClick={() => onAddToCart(item.product)}
                      className="px-2.5 py-1 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-[11px] flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <ShoppingCart className="w-3 h-3" />
                      <span>Move to Cart</span>
                    </button>
                    <button
                      onClick={() => onRemoveItem(item.productId)}
                      className="text-slate-400 hover:text-rose-500 p-1 cursor-pointer"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="pt-4 border-t border-slate-200/70 dark:border-white/10 space-y-2">
            <button
              onClick={onMoveAllToCart}
              className="w-full py-3 px-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Move All to Shopping Cart</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
