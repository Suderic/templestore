'use client';

import React, { useState } from 'react';
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Eye, 
  Check, 
  Sparkles, 
  Truck
} from 'lucide-react';
import { Product, ProductMaterial, ProductSizeOption } from './types';

interface GalaxyProductCardProps {
  product: Product;
  onAddToCart: (product: Product, material: ProductMaterial, size: ProductSizeOption) => void;
  onQuickView: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export function GalaxyProductCard({
  product,
  onAddToCart,
  onQuickView,
  onToggleWishlist,
  isWishlisted
}: GalaxyProductCardProps) {
  const [selectedMaterial, setSelectedMaterial] = useState<ProductMaterial>(
    product.materials.find(m => m.id === product.defaultMaterialId) || product.materials[0]
  );
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(product.defaultSizeIndex || 0);
  const [isHovered, setIsHovered] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const selectedSize = product.sizes[selectedSizeIndex] || product.sizes[0];
  const finalPrice = product.price + (selectedSize.priceDelta || 0);
  const originalPrice = product.originalPrice 
    ? product.originalPrice + (selectedSize.priceDelta || 0)
    : undefined;

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedMaterial, selectedSize);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-white/10 p-3.5 sm:p-4 shadow-sm hover:shadow-xl hover:shadow-amber-500/10 hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between"
    >
      
      {/* 1. PRODUCT MEDIA CONTAINER */}
      <div 
        className="relative rounded-2xl overflow-hidden aspect-[4/4.2] bg-slate-950/90 border border-slate-100 dark:border-white/5 cursor-pointer flex items-center justify-center"
        onClick={() => onQuickView(product)}
      >
        
        {/* Soft Ambient Hover Glow */}
        <div 
          className="absolute inset-2 rounded-xl blur-md pointer-events-none transition-all duration-500 opacity-0 group-hover:opacity-40"
          style={{ backgroundColor: selectedMaterial.colorHex }}
        />

        {/* Product Photo */}
        <img
          src={isHovered ? product.images.ambient : product.images.hero}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm ${
              product.badgeType === 'bestseller'
                ? 'bg-amber-400 text-slate-950 font-bold'
                : product.badgeType === 'luxury'
                ? 'bg-purple-600 text-white font-bold'
                : 'bg-stone-900 text-amber-300 font-bold border border-amber-300/30'
            }`}>
              {product.badge}
            </span>
          )}

          {product.readyToDeliver && (
            <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold bg-slate-950/80 backdrop-blur-md text-emerald-400 border border-emerald-400/30 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Ships in 24h</span>
            </span>
          )}
        </div>

        {/* Top Right: Wishlist Heart & Quick View Floating Triggers */}
        <div className="absolute top-2.5 right-2.5 flex flex-col gap-1.5 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product);
            }}
            className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all cursor-pointer shadow-sm ${
              isWishlisted
                ? 'bg-rose-500 text-white'
                : 'bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-rose-500 hover:bg-white'
            }`}
            title="Add to Wishlist"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="w-8 h-8 rounded-full bg-white/80 dark:bg-slate-900/80 hover:bg-amber-400 hover:text-slate-950 text-slate-700 dark:text-slate-300 flex items-center justify-center backdrop-blur-md transition-all cursor-pointer shadow-sm opacity-90 sm:opacity-0 group-hover:opacity-100"
            title="Quick View Details"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Hover Material Pill */}
        <div 
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-2 left-2 right-2 p-1.5 rounded-xl backdrop-blur-xl bg-slate-950/85 border border-white/10 flex items-center justify-between text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        >
          <span className="text-[9px] text-slate-300 pl-1 truncate max-w-[140px]">
            {selectedMaterial.textureLabel || selectedMaterial.name}
          </span>
          <span className="text-[9px] font-mono text-amber-400 font-bold uppercase shrink-0">
            {product.categoryLabel}
          </span>
        </div>

      </div>

      {/* 2. PRODUCT DETAILS & SWATCHES */}
      <div className="pt-3 space-y-2">
        
        {/* Rating Stars & Department Tag */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="font-bold text-slate-900 dark:text-white text-xs">{product.rating}</span>
            <span className="text-[11px] text-slate-400">({product.reviewsCount})</span>
          </div>

          <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            {product.categoryLabel}
          </span>
        </div>

        {/* Product Title */}
        <h3 
          onClick={() => onQuickView(product)}
          className="text-sm font-bold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors line-clamp-1 cursor-pointer"
        >
          {product.name}
        </h3>

        {/* Subtitle / Bullet Points */}
        <div className="space-y-0.5 text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
          {product.bulletPoints.slice(0, 2).map((bp, i) => (
            <p key={i} className="flex items-center gap-1.5 truncate">
              <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0" />
              <span>{bp}</span>
            </p>
          ))}
        </div>

        {/* Material Swatches & Size Options Pill */}
        <div className="flex items-center justify-between pt-1">
          {/* Finish Circles */}
          <div className="flex items-center gap-1">
            {product.materials.map((mat) => (
              <button
                key={mat.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedMaterial(mat);
                }}
                className={`w-4 h-4 rounded-full border transition-all cursor-pointer ${
                  selectedMaterial.id === mat.id
                    ? 'ring-2 ring-amber-500 scale-110 border-white'
                    : 'border-slate-300 dark:border-slate-700 hover:scale-105'
                }`}
                style={{ background: mat.gradient || mat.colorHex }}
                title={mat.name}
              />
            ))}
          </div>

          {/* Size / Set Pill */}
          <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full truncate max-w-[120px]">
            {selectedSize.label}
          </span>
        </div>

        {/* Price & Action Buttons */}
        <div className="pt-2 border-t border-slate-100 dark:border-white/5 flex items-center justify-between gap-2">
          
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                ${finalPrice.toFixed(0)}
              </span>
              {originalPrice && (
                <span className="text-xs line-through text-slate-400">
                  ${originalPrice.toFixed(0)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold block leading-none">
              Free Delivery &gt; $150
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAdd}
            className={`h-9 px-3 sm:px-3.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs ${
              justAdded
                ? 'bg-emerald-500 text-white'
                : 'bg-amber-400 hover:bg-amber-300 text-slate-950 active:scale-95'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span className="hidden sm:inline">Added!</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-3.5 h-3.5" />
                <span>Add to Cart</span>
              </>
            )}
          </button>

        </div>

      </div>

    </div>
  );
}
