'use client';

import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Truck, 
  ShieldCheck, 
  Sparkles,
  Tag
} from 'lucide-react';
import { CartItem } from './types';

interface GalaxyCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (itemId: string, newQty: number) => void;
  onRemoveItem: (itemId: string) => void;
  onProceedToCheckout: () => void;
}

export function GalaxyCartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}: GalaxyCartDrawerProps) {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((acc, it) => acc + it.unitPrice * it.quantity, 0);
  const discountAmount = rawSubtotal * (discountPercent / 100);
  const finalTotal = Math.max(0, rawSubtotal - discountAmount);

  // Free shipping threshold at $150
  const freeShippingThreshold = 150;
  const progressToFreeShipping = Math.min(100, (rawSubtotal / freeShippingThreshold) * 100);
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - rawSubtotal);

  const handleApplyPromo = () => {
    setPromoError('');
    setPromoSuccess('');
    if (['BUYO10', 'BUYO20', 'BUYOVIP', 'HAVEN10', 'HAUS10', 'LUMINA10', 'GALAXY10'].includes(promoCode.trim().toUpperCase())) {
      setDiscountPercent(10);
      setPromoSuccess('10% BUYO VIP Store Discount Applied!');
    } else if (promoCode.trim().toUpperCase() === 'FREESHIP') {
      setDiscountPercent(5);
      setPromoSuccess('Complimentary White-Glove Delivery voucher activated!');
    } else {
      setPromoError('Invalid coupon. Try using "BUYO10" for 10% off.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      
      {/* Translucent Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity animate-in fade-in"
      />

      {/* Slide-over Translucent Frosted Glass Drawer */}
      <div className="absolute top-0 right-0 bottom-0 w-full max-w-md backdrop-blur-2xl bg-white/90 dark:bg-slate-950/90 border-l border-slate-200/80 dark:border-white/10 p-5 sm:p-6 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
        
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-slate-200/70 dark:border-white/10">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-sky-500" />
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Your Shopping Cart
              </h2>
              <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400">
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

          {/* Free Shipping Meter */}
          <div className="py-3 px-3.5 my-3 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/60 dark:border-white/5 space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-sky-500" />
                {amountToFreeShipping === 0 
                  ? '🎉 You unlocked Free White-Glove Shipping!' 
                  : `Add $${amountToFreeShipping.toFixed(0)} more for Free Shipping`}
              </span>
              <span className="font-mono text-[10px] text-slate-400">
                {progressToFreeShipping.toFixed(0)}%
              </span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-sky-500 to-emerald-400 rounded-full transition-all duration-500"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>
        </div>

        {/* Middle: Items List */}
        <div className="flex-1 overflow-y-auto no-scrollbar py-2 space-y-3">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                Your cart is currently empty
              </h3>
              <p className="text-xs text-slate-400 max-w-[220px]">
                Looks like you haven't added any furniture, lighting, or living designs yet.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 cursor-pointer shadow-sm"
              >
                Explore Collections
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="p-3 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/60 dark:border-white/5 flex gap-3 relative group"
              >
                {/* Thumbnail */}
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-950 shrink-0 border border-slate-200/50 dark:border-white/5">
                  <img
                    src={item.product.images.hero}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0 space-y-1">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                    {item.product.name}
                  </h4>

                  {/* Badges for Selected Material and Size */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                      <span 
                        className="w-2 h-2 rounded-full inline-block"
                        style={{ backgroundColor: item.selectedMaterial.colorHex }}
                      />
                      <span className="truncate max-w-[85px]">{item.selectedMaterial.name}</span>
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono truncate max-w-[110px]">
                      {item.selectedSize.label}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs font-black text-slate-900 dark:text-white">
                      ${(item.unitPrice * item.quantity).toFixed(0)}
                    </span>

                    {/* Quantity Adjustment Buttons */}
                    <div className="flex items-center gap-2 px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-white/5">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                        title="Decrease"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-mono font-bold text-slate-900 dark:text-white px-1">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                        title="Increase"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Remove Trash Trigger */}
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="p-1 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors self-start cursor-pointer"
                  title="Remove from cart"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Bottom Checkout & Summary Drawer Footer */}
        {items.length > 0 && (
          <div className="pt-4 border-t border-slate-200/70 dark:border-white/10 space-y-3">
            
            {/* Promo Code Input */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5">
                <input
                  type="text"
                  placeholder="Promo Code (try GALAXY10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 h-8 px-3 rounded-xl text-xs bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 uppercase font-mono focus:outline-hidden focus:ring-1 focus:ring-sky-500 text-slate-900 dark:text-white"
                />
                <button
                  onClick={handleApplyPromo}
                  className="h-8 px-3 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-sky-500 hover:text-slate-950 text-xs font-bold text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </div>
              {promoSuccess && (
                <p className="text-[10px] text-emerald-500 font-semibold">{promoSuccess}</p>
              )}
              {promoError && (
                <p className="text-[10px] text-rose-500">{promoError}</p>
              )}
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 pt-1">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span className="font-mono text-slate-900 dark:text-white font-semibold">
                  ${rawSubtotal.toFixed(0)}
                </span>
              </div>

              {discountAmount > 0 && (
                <div className="flex items-center justify-between text-emerald-500 font-semibold">
                  <span>VIP Architectural Discount</span>
                  <span className="font-mono">-${discountAmount.toFixed(0)}</span>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span>White-Glove Delivery</span>
                <span className="font-bold text-emerald-500 uppercase text-[10px]">
                  Free (Included)
                </span>
              </div>

              <div className="flex items-center justify-between text-sm font-black text-slate-900 dark:text-white pt-2 border-t border-slate-200/60 dark:border-white/5">
                <span>Estimated Total (GST Incl.)</span>
                <span className="text-base text-sky-600 dark:text-sky-400">
                  ${finalTotal.toFixed(0)} AUD
                </span>
              </div>
            </div>

            {/* Checkout Action Button */}
            <button
              onClick={onProceedToCheckout}
              className="w-full py-3.5 px-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-3 text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-500" />
                <span>SSL Encrypted</span>
              </span>
              <span>•</span>
              <span>5-Year Warranty Covered</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
