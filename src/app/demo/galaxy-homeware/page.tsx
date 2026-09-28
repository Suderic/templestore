'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { 
  DeviceMode, 
  StorePage,
  ProductCategory, 
  Product, 
  ProductMaterial, 
  ProductSizeOption, 
  CartItem, 
  WishlistItem, 
  ModalType 
} from '@/components/demo/galaxy-homeware/types';
import { LUMINA_PRODUCTS } from '@/components/demo/galaxy-homeware/data';
import { GalaxyNavbar } from '@/components/demo/galaxy-homeware/GalaxyNavbar';
import { GalaxyHero } from '@/components/demo/galaxy-homeware/GalaxyHero';
import { GalaxyCategoryBar } from '@/components/demo/galaxy-homeware/GalaxyCategoryBar';
import { GalaxyProductCard } from '@/components/demo/galaxy-homeware/GalaxyProductCard';
import { GalaxyInteractiveShowcase } from '@/components/demo/galaxy-homeware/GalaxyInteractiveShowcase';
import { GalaxyTrustSection } from '@/components/demo/galaxy-homeware/GalaxyTrustSection';
import { GalaxyFooter } from '@/components/demo/galaxy-homeware/GalaxyFooter';
import { GalaxyCartDrawer } from '@/components/demo/galaxy-homeware/GalaxyCartDrawer';
import { GalaxyQuickViewModal } from '@/components/demo/galaxy-homeware/GalaxyQuickViewModal';
import { GalaxyGlobalSearchModal } from '@/components/demo/galaxy-homeware/GalaxyGlobalSearchModal';
import { GalaxyWishlistDrawer } from '@/components/demo/galaxy-homeware/GalaxyWishlistDrawer';
import { GalaxyCheckoutModal } from '@/components/demo/galaxy-homeware/GalaxyCheckoutModal';
import { GalaxyNeedHelpWidget } from '@/components/demo/galaxy-homeware/GalaxyNeedHelpWidget';
import { GalaxyPreviewToolbar } from '@/components/demo/galaxy-homeware/GalaxyPreviewToolbar';
import { GalaxyMobileBottomBar } from '@/components/demo/galaxy-homeware/GalaxyMobileBottomBar';
import { DepartmentPageView } from '@/components/demo/galaxy-homeware/pages/DepartmentPageView';
import { ShowroomsPageView } from '@/components/demo/galaxy-homeware/pages/ShowroomsPageView';
import { CraftsmanshipPageView } from '@/components/demo/galaxy-homeware/pages/CraftsmanshipPageView';

export default function GalaxyHomewareDemoPage() {
  // Viewport & Embedding State
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isEmbedded, setIsEmbedded] = useState(false);

  // Multi-Page Navigation State
  const [activePage, setActivePage] = useState<StorePage>('home');

  // Catalog State
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [sortBy, setSortBy] = useState('featured');
  const [inStockOnly, setInStockOnly] = useState(false);

  // E-Commerce Cart & Wishlist State
  // Initialized with 1 default luxury lounge chair so the user experiences a live cart immediately
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'init-item-1',
      productId: LUMINA_PRODUCTS[0].id,
      product: LUMINA_PRODUCTS[0],
      selectedMaterial: LUMINA_PRODUCTS[0].materials[0],
      selectedSize: LUMINA_PRODUCTS[0].sizes[0],
      quantity: 1,
      unitPrice: LUMINA_PRODUCTS[0].price
    }
  ]);

  const [wishlist, setWishlist] = useState<WishlistItem[]>([
    {
      productId: LUMINA_PRODUCTS[2].id,
      product: LUMINA_PRODUCTS[2],
      addedAt: new Date().toISOString()
    },
    {
      productId: LUMINA_PRODUCTS[5].id,
      product: LUMINA_PRODUCTS[5],
      addedAt: new Date().toISOString()
    }
  ]);

  // Modals
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Detect embedding & listen for postMessage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const isEmbed = params.get('embed') === 'true' || window.self !== window.top;
      setIsEmbedded(isEmbed);

      const deviceParam = params.get('device') as DeviceMode;
      if (['desktop', 'tablet', 'mobile'].includes(deviceParam)) {
        setDeviceMode(deviceParam);
      }

      const pageParam = params.get('page') as StorePage;
      if (['home', 'furniture', 'lighting', 'audio-tech', 'tableware', 'textiles', 'showrooms', 'craftsmanship'].includes(pageParam)) {
        setActivePage(pageParam);
      }

      const handleMessage = (e: MessageEvent) => {
        if (e.data?.type === 'SET_DEVICE_MODE' && ['desktop', 'tablet', 'mobile'].includes(e.data.mode)) {
          setDeviceMode(e.data.mode);
        }
      };

      window.addEventListener('message', handleMessage);
      return () => window.removeEventListener('message', handleMessage);
    }
  }, []);

  const handleNavigatePage = (page: StorePage) => {
    setActivePage(page);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (page === 'home') {
        url.searchParams.delete('page');
      } else {
        url.searchParams.set('page', page);
      }
      window.history.pushState(null, '', url.toString());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    let list = [...LUMINA_PRODUCTS];

    if (activeCategory !== 'all') {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (inStockOnly) {
      list = list.filter((p) => p.readyToDeliver);
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [activeCategory, inStockOnly, sortBy]);

  // Cart Calculations
  const cartCount = cartItems.reduce((acc, it) => acc + it.quantity, 0);
  const cartTotal = cartItems.reduce((acc, it) => acc + it.unitPrice * it.quantity, 0);

  // Cart Actions
  const handleAddToCart = (
    product: Product,
    material: ProductMaterial,
    size: ProductSizeOption,
    quantity: number = 1
  ) => {
    const unitPrice = product.price + (size.priceDelta || 0);
    const existingIndex = cartItems.findIndex(
      (it) => it.productId === product.id && it.selectedMaterial.id === material.id && it.selectedSize.label === size.label
    );

    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += quantity;
      setCartItems(updated);
    } else {
      const newItem: CartItem = {
        id: `cart-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        productId: product.id,
        product,
        selectedMaterial: material,
        selectedSize: size,
        quantity,
        unitPrice
      };
      setCartItems([...cartItems, newItem]);
    }
    setActiveModal('cart');
  };

  const handleUpdateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveCartItem(itemId);
      return;
    }
    setCartItems(cartItems.map(it => it.id === itemId ? { ...it, quantity: newQty } : it));
  };

  const handleRemoveCartItem = (itemId: string) => {
    setCartItems(cartItems.filter(it => it.id !== itemId));
  };

  // Wishlist Actions
  const handleToggleWishlist = (product: Product) => {
    const exists = wishlist.some(w => w.productId === product.id);
    if (exists) {
      setWishlist(wishlist.filter(w => w.productId !== product.id));
    } else {
      setWishlist([...wishlist, { productId: product.id, product, addedAt: new Date().toISOString() }]);
    }
  };

  const handleRemoveWishlist = (productId: string) => {
    setWishlist(wishlist.filter(w => w.productId !== productId));
  };

  const handleMoveAllWishlistToCart = () => {
    wishlist.forEach((item) => {
      handleAddToCart(
        item.product,
        item.product.materials[0],
        item.product.sizes[0],
        1
      );
    });
    setWishlist([]);
    setActiveModal('cart');
  };

  // Fullscreen Toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Device Container Constraints
  const getDeviceContainerClass = () => {
    if (isEmbedded) {
      // In embedded iframe, parent already provides width constraints
      return 'w-full';
    }

    if (deviceMode === 'tablet') {
      return 'max-w-[768px] mx-auto my-6 rounded-[36px] shadow-2xl overflow-hidden border-[8px] border-slate-800 bg-slate-950';
    }

    if (deviceMode === 'mobile') {
      return 'max-w-[390px] mx-auto my-6 rounded-[44px] shadow-2xl overflow-hidden border-[8px] border-slate-800 bg-slate-950';
    }

    return 'w-full';
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-slate-950">
      
      {/* 1. TOP PREVIEW TOOLBAR (Hidden when embedded in iframe) */}
      <GalaxyPreviewToolbar
        deviceMode={deviceMode}
        onDeviceChange={setDeviceMode}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        isEmbedded={isEmbedded}
      />

      {/* 2. DEVICE CHASSIS WRAPPER */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${getDeviceContainerClass()}`}>
        
        {/* Authentic iOS Status Bar when simulating mobile in standalone view */}
        {!isEmbedded && deviceMode === 'mobile' && (
          <div className="h-10 w-full bg-slate-950 flex items-center justify-between px-6 text-white text-xs select-none shrink-0 border-b border-white/5">
            <span className="font-semibold text-[11px]">9:41</span>
            <div className="w-24 h-5 bg-black rounded-full flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-slate-900 border border-slate-700" />
            </div>
            <div className="flex items-center gap-1.5 text-[10px]">
              <span>5G</span>
              <div className="w-4 h-2 border border-white rounded-[2px] p-[1px]">
                <div className="h-full w-full bg-white rounded-xs" />
              </div>
            </div>
          </div>
        )}

        {/* 3. MAIN E-COMMERCE STORE CONTAINER */}
        <div className="flex-1 flex flex-col relative pb-16 lg:pb-0">
          
          {/* Navigation Bar */}
          <GalaxyNavbar
            cartCount={cartCount}
            cartTotal={cartTotal}
            wishlistCount={wishlist.length}
            activePage={activePage}
            onNavigatePage={handleNavigatePage}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            onOpenCart={() => setActiveModal('cart')}
            onOpenWishlist={() => setActiveModal('wishlist')}
            onOpenSearch={() => setActiveModal('search')}
            onOpenHelp={() => setActiveModal('helpChat')}
          />

          {/* PAGE VIEW ROUTING */}
          {activePage === 'home' && (
            <>
              {/* Hero Section */}
              <GalaxyHero
                onExploreClick={() => {
                  const el = document.getElementById('featured-departments');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                onOpenStudio={() => {
                  const el = document.getElementById('room-mood-studio');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              />

              {/* Featured Departments Grid Cards (Direct access to all 5 department pages) */}
              <section id="featured-departments" className="py-12 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200/80 dark:border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                        Curated Ateliers
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                        Explore by Department
                      </h2>
                    </div>
                    <p className="text-xs text-slate-500 max-w-sm">
                      Each collection is crafted by specialized European and Japanese heritage workshops.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {[
                      { id: 'furniture', name: 'Furniture & Seating', desc: 'Bouclé chairs & solid oak', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80', count: 3 },
                      { id: 'lighting', name: 'Architectural Lighting', desc: 'Fluted brass & opal glass', img: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80', count: 3 },
                      { id: 'audio-tech', name: 'Audio & Living Tech', desc: 'Kvadrat 360° & MagSafe', img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80', count: 2 },
                      { id: 'tableware', name: 'Ceramics & Tableware', desc: '1280°C Matte stoneware', img: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80', count: 2 },
                      { id: 'textiles', name: 'Bedding & Textiles', desc: 'Normandy washed flax', img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80', count: 2 }
                    ].map((dept) => (
                      <button
                        key={dept.id}
                        onClick={() => handleNavigatePage(dept.id as StorePage)}
                        className="group relative rounded-2xl overflow-hidden aspect-[4/5] p-4 flex flex-col justify-end text-left border border-slate-200/80 dark:border-white/10 shadow-md hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer"
                      >
                        <img 
                          src={dept.img} 
                          alt={dept.name}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                        <div className="relative z-10 space-y-0.5">
                          <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                            {dept.count} Curated Pieces
                          </span>
                          <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                            {dept.name}
                          </h3>
                          <p className="text-[11px] text-slate-300 line-clamp-1">
                            {dept.desc}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </section>

              {/* Catalog Categories & Sorting Filter Bar */}
              <div id="product-catalog" className="scroll-mt-16">
                <GalaxyCategoryBar
                  activeCategory={activeCategory}
                  onSelectCategory={setActiveCategory}
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                  inStockOnly={inStockOnly}
                  onToggleInStock={() => setInStockOnly(!inStockOnly)}
                  totalCount={filteredProducts.length}
                />
              </div>

              {/* Product Grid */}
              <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
                  {filteredProducts.map((product) => (
                    <GalaxyProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={(p, mat, sz) => handleAddToCart(p, mat, sz, 1)}
                      onQuickView={(p) => {
                        setQuickViewProduct(p);
                        setActiveModal('quickView');
                      }}
                      onToggleWishlist={handleToggleWishlist}
                      isWishlisted={wishlist.some(w => w.productId === product.id)}
                    />
                  ))}
                </div>

                {filteredProducts.length === 0 && (
                  <div className="py-16 text-center space-y-3">
                    <p className="text-sm font-semibold text-slate-500">
                      No designer pieces found in this category.
                    </p>
                    <button
                      onClick={() => {
                        setActiveCategory('all');
                        setInStockOnly(false);
                      }}
                      className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
                    >
                      Reset Filters
                    </button>
                  </div>
                )}
              </section>

              {/* Interactive Living Room Ambiance Studio (Kept on Homepage as requested) */}
              <GalaxyInteractiveShowcase
                onExploreClick={() => {
                  const el = document.getElementById('product-catalog');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              />

              {/* Peace of Mind & Customer Reviews Section */}
              <GalaxyTrustSection />
            </>
          )}

          {/* DEDICATED DEPARTMENT PAGES */}
          {['furniture', 'lighting', 'audio-tech', 'tableware', 'textiles'].includes(activePage) && (
            <DepartmentPageView
              department={activePage as ProductCategory}
              products={LUMINA_PRODUCTS.filter((p) => p.category === activePage)}
              onAddToCart={(p, mat, sz) => handleAddToCart(p, mat, sz, 1)}
              onQuickView={(p) => {
                setQuickViewProduct(p);
                setActiveModal('quickView');
              }}
              onToggleWishlist={handleToggleWishlist}
              wishlist={wishlist}
              onNavigateHome={() => handleNavigatePage('home')}
              onNavigatePage={handleNavigatePage}
            />
          )}

          {/* DEDICATED SHOWROOMS & STUDIOS PAGE */}
          {activePage === 'showrooms' && (
            <ShowroomsPageView
              onNavigateHome={() => handleNavigatePage('home')}
              onNavigatePage={handleNavigatePage}
            />
          )}

          {/* DEDICATED CRAFTSMANSHIP & 10-YR GUARANTEE PAGE */}
          {activePage === 'craftsmanship' && (
            <CraftsmanshipPageView
              onNavigateHome={() => handleNavigatePage('home')}
              onNavigatePage={handleNavigatePage}
            />
          )}

          {/* Comprehensive Footer */}
          <GalaxyFooter
            onNavigatePage={handleNavigatePage}
            onSelectCategory={setActiveCategory}
            onOpenHelp={() => setActiveModal('helpChat')}
          />

          {/* Mobile Bottom Docked Navigation Bar */}
          <GalaxyMobileBottomBar
            cartCount={cartCount}
            cartTotal={cartTotal}
            wishlistCount={wishlist.length}
            activePage={activePage}
            onNavigatePage={handleNavigatePage}
            onOpenCart={() => setActiveModal('cart')}
            onOpenWishlist={() => setActiveModal('wishlist')}
            onOpenSearch={() => setActiveModal('search')}
            onSelectCategory={setActiveCategory}
          />

          {/* Floating Concierge Chat Widget */}
          <GalaxyNeedHelpWidget
            isOpen={activeModal === 'helpChat'}
            onToggle={() => setActiveModal(activeModal === 'helpChat' ? null : 'helpChat')}
            onClose={() => setActiveModal(null)}
          />

        </div>

        {/* Mobile Chassis Bottom Home Bar in standalone preview */}
        {!isEmbedded && deviceMode === 'mobile' && (
          <div className="h-6 w-full bg-slate-950 flex items-center justify-center shrink-0 border-t border-white/5">
            <div className="w-32 h-1 rounded-full bg-white/40" />
          </div>
        )}

      </div>

      {/* 4. TRANSLUCENT MODALS & DRAWERS */}
      
      {/* Shopping Cart Drawer */}
      <GalaxyCartDrawer
        isOpen={activeModal === 'cart'}
        onClose={() => setActiveModal(null)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onProceedToCheckout={() => setActiveModal('checkout')}
      />

      {/* Quick View Modal */}
      <GalaxyQuickViewModal
        product={quickViewProduct}
        onClose={() => {
          setActiveModal(null);
          setQuickViewProduct(null);
        }}
        onAddToCart={(p, mat, sz, qty) => handleAddToCart(p, mat, sz, qty)}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlist.some(w => w.productId === quickViewProduct.id) : false}
      />

      {/* Global Search Modal */}
      <GalaxyGlobalSearchModal
        isOpen={activeModal === 'search'}
        onClose={() => setActiveModal(null)}
        onSelectProduct={(p) => {
          setQuickViewProduct(p);
          setActiveModal('quickView');
        }}
      />

      {/* Wishlist Drawer */}
      <GalaxyWishlistDrawer
        isOpen={activeModal === 'wishlist'}
        onClose={() => setActiveModal(null)}
        items={wishlist}
        onRemoveItem={handleRemoveWishlist}
        onAddToCart={(p) => handleAddToCart(p, p.materials[0], p.sizes[0], 1)}
        onMoveAllToCart={handleMoveAllWishlistToCart}
      />

      {/* Checkout Modal */}
      <GalaxyCheckoutModal
        isOpen={activeModal === 'checkout'}
        onClose={() => setActiveModal(null)}
        items={cartItems}
        onOrderCompleted={() => {
          setCartItems([]);
        }}
      />

    </div>
  );
}
