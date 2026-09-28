'use client';

import React, { useState } from 'react';
import { 
  X, 
  Star, 
  ShoppingCart, 
  Heart, 
  Check, 
  ShieldCheck, 
  Truck, 
  Sparkles,
  Layers,
  Clock,
  Compass
} from 'lucide-react';
import { Product, ProductMaterial, ProductSizeOption } from './types';

interface GalaxyQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, material: ProductMaterial, size: ProductSizeOption, quantity: number) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export function GalaxyQuickViewModal({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted
}: GalaxyQuickViewModalProps) {
  if (!product) return null;

  const [activeImageKey, setActiveImageKey] = useState<'hero' | 'ambient' | 'detail' | 'lifestyle'>('hero');
  const [selectedMaterial, setSelectedMaterial] = useState<ProductMaterial>(
    product.materials.find(m => m.id === product.defaultMaterialId) || product.materials[0]
  );
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(product.defaultSizeIndex || 0);
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const selectedSize = product.sizes[selectedSizeIndex] || product.sizes[0];
  const finalPrice = (product.price + (selectedSize.priceDelta || 0)) * quantity;
  const originalPrice = product.originalPrice 
    ? (product.originalPrice + (selectedSize.priceDelta || 0)) * quantity 
    : undefined;

  const handleAdd = () => {
    onAddToCart(product, selectedMaterial, selectedSize, quantity);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      
      {/* Translucent Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity animate-in fade-in"
      />

      {/* Translucent Modal Dialog Card */}
      <div className="relative w-full max-w-4xl rounded-3xl backdrop-blur-2xl bg-white/95 dark:bg-slate-900/95 border border-white/40 dark:border-white/10 shadow-2xl shadow-black/60 p-5 sm:p-8 z-10 animate-in zoom-in-95 duration-250 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Image Gallery */}
          <div className="md:col-span-6 space-y-3">
            
            {/* Main Image Stage */}
            <div className="relative aspect-[4/4.5] rounded-2xl overflow-hidden bg-slate-950 border border-slate-200/80 dark:border-white/10 flex items-center justify-center">
              <img
                src={product.images[activeImageKey]}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />

              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                {product.badge && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 shadow-xs">
                    {product.badge}
                  </span>
                )}
                {product.readyToDeliver && (
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold bg-slate-950/80 backdrop-blur-md text-emerald-400 border border-emerald-400/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>In Stock (Ships in 24h)</span>
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Switcher */}
            <div className="flex items-center gap-2 pt-1">
              {(['hero', 'ambient', 'detail', 'lifestyle'] as const).map((k) => (
                <button
                  key={k}
                  onClick={() => setActiveImageKey(k)}
                  className={`w-14 h-14 rounded-xl overflow-hidden border transition-all cursor-pointer ${
                    activeImageKey === k 
                      ? 'ring-2 ring-amber-500 border-white scale-105' 
                      : 'border-slate-200 dark:border-white/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={product.images[k]} 
                    alt={k} 
                    className="w-full h-full object-cover" 
                  />
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Information, Sizing, Materials & Add to Cart */}
          <div className="md:col-span-6 space-y-4">
            
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  {product.categoryLabel}
                </span>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <div className="flex items-center gap-1 text-amber-500 text-xs">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="font-bold text-slate-900 dark:text-white">{product.rating}</span>
                  <span className="text-slate-400">({product.reviewsCount} verified reviews)</span>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
                {product.name}
              </h2>

              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                {product.subtitle}
              </p>
            </div>

            {/* Pricing */}
            <div className="p-3 rounded-2xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-white/5 flex items-baseline justify-between">
              <div>
                <span className="text-xs text-slate-400 block font-medium">Price (GST inclusive)</span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                    ${finalPrice.toFixed(0)}
                  </span>
                  {originalPrice && (
                    <span className="text-sm line-through text-slate-400">
                      ${originalPrice.toFixed(0)}
                    </span>
                  )}
                </div>
              </div>

              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                Free Delivery &gt; $150
              </span>
            </div>

            {/* Material & Finish Selection */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-bold text-slate-800 dark:text-slate-200">
                  Material &amp; Finish: <span className="font-normal text-amber-600 dark:text-amber-400">{selectedMaterial.name}</span>
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {product.materials.map((mat) => (
                  <button
                    key={mat.id}
                    onClick={() => setSelectedMaterial(mat)}
                    className={`h-8 px-2.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer border ${
                      selectedMaterial.id === mat.id
                        ? 'border-amber-500 bg-amber-500/10 text-amber-700 dark:text-amber-300 font-bold'
                        : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span 
                      className="w-3.5 h-3.5 rounded-full border border-black/20"
                      style={{ background: mat.gradient || mat.colorHex }}
                    />
                    <span>{mat.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size / Set Radio Options */}
            <div>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-1.5">
                Options / Dimensions:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {product.sizes.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedSizeIndex(idx)}
                    className={`p-2 rounded-xl text-left text-xs transition-all cursor-pointer border ${
                      selectedSizeIndex === idx
                        ? 'border-amber-500 bg-amber-500/10 text-slate-900 dark:text-white font-bold ring-1 ring-amber-500'
                        : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    <div className="font-semibold truncate">{s.label}</div>
                    <div className="text-[10px] text-slate-400">
                      {s.priceDelta === 0 ? 'Standard Option' : `+$${s.priceDelta}`}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart Controls */}
            <div className="pt-2 flex items-center gap-3">
              <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 h-11 px-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-2 text-slate-500 hover:text-slate-900 dark:hover:text-white text-base cursor-pointer"
                >
                  -
                </button>
                <span className="w-8 text-center text-xs font-bold text-slate-900 dark:text-white font-mono">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-2 text-slate-500 hover:text-slate-900 dark:hover:text-white text-base cursor-pointer"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAdd}
                className={`flex-1 h-11 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer ${
                  justAdded
                    ? 'bg-emerald-500 text-white'
                    : 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-amber-400/20 active:scale-98'
                }`}
              >
                {justAdded ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Shopping Cart</span>
                  </>
                )}
              </button>

              <button
                onClick={() => onToggleWishlist(product)}
                className={`w-11 h-11 rounded-2xl border flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
                  isWishlisted
                    ? 'bg-rose-500 text-white border-rose-500'
                    : 'border-slate-200 dark:border-slate-700 text-slate-500 hover:text-rose-500'
                }`}
                title="Save to Moodboard"
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Quick Specs Badges */}
            <div className="pt-2 border-t border-slate-200/60 dark:border-white/5 grid grid-cols-3 gap-2 text-center text-[10px] text-slate-500 dark:text-slate-400">
              <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                <span className="font-bold text-slate-700 dark:text-slate-300 block">{product.specifications.warrantyYears}-Year</span>
                <span>Warranty</span>
              </div>
              <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                <span className="font-bold text-slate-700 dark:text-slate-300 block">FSC® Certified</span>
                <span>Sustainable</span>
              </div>
              <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                <span className="font-bold text-slate-700 dark:text-slate-300 block">30-Day Trial</span>
                <span>In-Home</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
