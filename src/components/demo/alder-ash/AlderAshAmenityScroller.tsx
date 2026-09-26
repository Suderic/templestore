'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Flame, 
  TreePine, 
  Sparkles, 
  Coffee, 
  Compass, 
  Star, 
  MapPin, 
  ArrowRight,
  CheckCircle2,
  CalendarDays
} from 'lucide-react';
import { DeviceMode, ResortPage } from './types';

export interface AmenitySlide {
  id: string;
  category: string;
  title: string;
  description: string;
  badge: string;
  imageUrl: string;
  targetPage: ResortPage;
  actionText: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const RESORT_AMENITIES: AmenitySlide[] = [
  {
    id: 'amenity-baths',
    category: 'WELLNESS & SPA',
    title: 'Wood-Fired Cedar Soaking Baths',
    description: 'Four secluded outdoor cedar soaking tubs tucked into the fern understory, heated daily with seasoned alder firewood and filled from natural mineral springs.',
    badge: '104°F Natural Spring Waters • 4 Private Tubs',
    imageUrl: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1600&auto=format&fit=crop&q=80',
    targetPage: 'experiences',
    actionText: 'Explore Bathhouse Rituals',
    icon: Flame
  },
  {
    id: 'amenity-cabins',
    category: 'ACCOMMODATIONS',
    title: 'Handcrafted Timber Cabins & A-Frames',
    description: '40 private cedar sanctuaries with floor-to-ceiling Douglas fir glass, private viewing porches, Jotul cast-iron woodstoves, and organic Pendleton wool throws.',
    badge: '40 Forest Cabins • Woodstoves & River Views',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600&auto=format&fit=crop&q=80',
    targetPage: 'rooms',
    actionText: 'View Cabins & Suites',
    icon: TreePine
  },
  {
    id: 'amenity-sauna',
    category: 'HYDROTHERAPY',
    title: 'Nordic Cedar Steam Sauna & River Plunge',
    description: 'Traditional Finnish dry rock sauna with fresh birch aromatherapy, paired with a cantilevered cold mountain spring immersion deck overlooking the rapids.',
    badge: 'Daily 7am – 10pm • Birch & Cedar Aromatherapy',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&auto=format&fit=crop&q=80',
    targetPage: 'experiences',
    actionText: 'View Hydrotherapy Details',
    icon: Sparkles
  },
  {
    id: 'amenity-dining',
    category: 'CULINARY SANCTUARY',
    title: 'The Hearth Room & Wood-Fired Kitchen',
    description: 'Pacific Northwest seasonal dining centered on foraged chanterelles, cedar-planked river salmon, 5am hearth-baked sourdough, and alder-smoked rye cocktails.',
    badge: 'Artisan Breakfast Included • Foraged Dinners',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1600&auto=format&fit=crop&q=80',
    targetPage: 'dining',
    actionText: 'Browse Seasonal Menus',
    icon: Coffee
  },
  {
    id: 'amenity-kayaks',
    category: 'WATER ADVENTURE',
    title: 'Wooden Kayaks & Alpine River Launch',
    description: 'Custom handcrafted wooden watercraft for peaceful paddles down Alder Creek to the estuary, with life vests, dry bags, and guided wildlife excursions.',
    badge: 'Complimentary Guest Kayaks • Private Dock',
    imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&auto=format&fit=crop&q=80',
    targetPage: 'experiences',
    actionText: 'Book Guided Paddles',
    icon: Compass
  },
  {
    id: 'amenity-stargazing',
    category: 'NIGHT SKY SANCTUARY',
    title: 'Zero-Light Stargazing Deck & Telescope',
    description: 'High-elevation mountain meadow deck protected from all urban light pollution, featuring a 10-inch Dobsonian telescope, heated wool loungers, and nightly campfire lore.',
    badge: '320 Dark-Sky Acres • 10" Telescope & Firepit',
    imageUrl: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1600&auto=format&fit=crop&q=80',
    targetPage: 'experiences',
    actionText: 'Discover Stargazing Deck',
    icon: Star
  },
  {
    id: 'amenity-trails',
    category: 'FOREST TRAILS',
    title: '18 Miles of Pine Trails & Eagle Ridge',
    description: 'Step directly off your porch onto unpaved, soft conifer needle trails winding through ancient moss and ferns to the panoramic alpine eagle overlook.',
    badge: '18 Miles Unpaved • Daypacks & Poles Provided',
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&auto=format&fit=crop&q=80',
    targetPage: 'experiences',
    actionText: 'Explore Trail Network',
    icon: MapPin
  }
];

interface Props {
  onOpenBooking: () => void;
  onPageChange: (page: ResortPage) => void;
  deviceMode?: DeviceMode;
}

export function AlderAshAmenityScroller({ onOpenBooking, onPageChange, deviceMode = 'desktop' }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const isMobile = deviceMode === 'mobile';
  const isTablet = deviceMode === 'tablet';

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % RESORT_AMENITIES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + RESORT_AMENITIES.length) % RESORT_AMENITIES.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-scroll timer
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, nextSlide]);

  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  // Keep active thumbnail in view within horizontal strip ONLY (never scroll document window)
  useEffect(() => {
    const container = thumbnailContainerRef.current;
    const el = thumbnailRefs.current[currentIndex];
    if (container && el) {
      const elOffsetLeft = el.offsetLeft;
      const elWidth = el.offsetWidth;
      const containerWidth = container.offsetWidth;
      container.scrollTo({
        left: elOffsetLeft - (containerWidth / 2) + (elWidth / 2),
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartXRef.current = null;
  };

  const currentAmenity = RESORT_AMENITIES[currentIndex];
  const CurrentIcon = currentAmenity.icon;

  return (
    <div className="mt-8 sm:mt-12 space-y-4 max-w-5xl mx-auto w-full">
      {/* 1. MAIN FEATURED SHOWCASE BANNER */}
      <div 
        className={`relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/15 ${
          isMobile ? 'aspect-[4/3]' : 'aspect-[16/9]'
        } w-full group select-none transition-all duration-300`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Images Layer with Crossfade */}
        {RESORT_AMENITIES.map((amenity, idx) => (
          <div
            key={amenity.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={amenity.imageUrl}
              alt={amenity.title}
              className={`w-full h-full object-cover transition-transform duration-1000 ${
                idx === currentIndex ? 'scale-100 group-hover:scale-105' : 'scale-110'
              }`}
            />
          </div>
        ))}

        {/* Ambient Dark Gradients for Text Readability */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#071610] via-[#071610]/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />

        {/* Top Header Information Over Image */}
        <div className="absolute top-3 sm:top-5 left-3 sm:left-6 right-3 sm:right-6 z-30 flex items-center justify-between gap-2">
          {/* Category Pill with Icon */}
          <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#E8DCC3]">
            <CurrentIcon className="w-3.5 h-3.5 text-[#D98F4A]" />
            <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#D98F4A]">
              {currentAmenity.category}
            </span>
            <span className="text-white/40 text-[10px] hidden sm:inline">•</span>
            <span className="text-white/70 text-[10px] sm:text-xs font-mono hidden sm:inline">
              0{currentIndex + 1} / 0{RESORT_AMENITIES.length}
            </span>
          </div>

          {/* Feature Badge */}
          <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#0F2B22]/85 backdrop-blur-md border border-[#D98F4A]/40 text-[10px] sm:text-xs text-[#F5EFE3] font-medium shadow-lg">
            <Sparkles className="w-3 h-3 text-[#D98F4A] shrink-0" />
            <span className="truncate max-w-[180px] sm:max-w-none">{currentAmenity.badge}</span>
          </div>
        </div>

        {/* Left & Right Chevron Controls */}
        <div className="absolute inset-y-0 left-2 sm:left-4 z-30 flex items-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            aria-label="Previous amenity slide"
            className="p-2 sm:p-2.5 rounded-full bg-black/50 hover:bg-[#D98F4A] text-white hover:text-[#120B04] border border-white/20 backdrop-blur-md transition-all active:scale-90 cursor-pointer shadow-lg hover:shadow-[#D98F4A]/40"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          </button>
        </div>

        <div className="absolute inset-y-0 right-2 sm:right-4 z-30 flex items-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            aria-label="Next amenity slide"
            className="p-2 sm:p-2.5 rounded-full bg-black/50 hover:bg-[#D98F4A] text-white hover:text-[#120B04] border border-white/20 backdrop-blur-md transition-all active:scale-90 cursor-pointer shadow-lg hover:shadow-[#D98F4A]/40"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Bottom Amenity Content & CTAs */}
        <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 z-30 flex flex-col gap-2 sm:gap-3 text-left">
          <div>
            <h3 className="font-serif text-lg sm:text-2xl lg:text-3xl font-medium text-[#F5EFE3] tracking-tight leading-snug">
              {currentAmenity.title}
            </h3>
            <p className="text-[11px] sm:text-sm text-[#E8DCC3]/85 font-sans leading-relaxed max-w-2xl mt-1 line-clamp-2 sm:line-clamp-2">
              {currentAmenity.description}
            </p>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between gap-3 pt-1 border-t border-white/10">
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => onPageChange(currentAmenity.targetPage)}
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#D98F4A] hover:bg-[#E8A86B] text-[#120B04] text-xs font-bold tracking-wide transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>{currentAmenity.actionText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenBooking}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#F5EFE3] text-xs font-semibold backdrop-blur-md transition-all cursor-pointer"
              >
                <CalendarDays className="w-3.5 h-3.5 text-[#D98F4A]" />
                <span>Reserve Stay</span>
              </button>
            </div>

            {/* Auto-play toggle and pagination indicators */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                aria-label={isAutoPlaying ? 'Pause amenity slideshow' : 'Play amenity slideshow'}
                className="p-1.5 sm:p-2 rounded-full bg-black/40 hover:bg-white/20 text-[#E8DCC3] border border-white/15 backdrop-blur-md transition-all cursor-pointer"
                title={isAutoPlaying ? 'Pause Auto-scroll' : 'Resume Auto-scroll'}
              >
                {isAutoPlaying ? (
                  <Pause className="w-3 h-3 text-[#D98F4A]" />
                ) : (
                  <Play className="w-3 h-3 text-[#D98F4A] translate-x-0.5" />
                )}
              </button>

              {/* Progress Dots Track */}
              <div className="flex items-center gap-1.5">
                {RESORT_AMENITIES.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => goToSlide(dotIdx)}
                    aria-label={`Go to amenity slide ${dotIdx + 1}`}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      dotIdx === currentIndex 
                        ? 'w-5 sm:w-6 h-1.5 sm:h-2 bg-[#D98F4A] shadow-sm shadow-[#D98F4A]' 
                        : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. HORIZONTAL SCROLLING AMENITY THUMBNAILS STRIP */}
      <div className="relative w-full">
        {/* Left/Right Edge Gradient Masking */}
        <div className="absolute left-0 inset-y-0 w-6 bg-gradient-to-r from-[#0F2B22] to-transparent pointer-events-none z-10 hidden sm:block" />
        <div className="absolute right-0 inset-y-0 w-6 bg-gradient-to-l from-[#0F2B22] to-transparent pointer-events-none z-10 hidden sm:block" />

        <div 
          ref={thumbnailContainerRef}
          className="flex items-center gap-2.5 overflow-x-auto pb-2 pt-1 px-1 scrollbar-none snap-x snap-mandatory"
        >
          {RESORT_AMENITIES.map((amenity, idx) => {
            const isActive = idx === currentIndex;
            const Icon = amenity.icon;
            return (
              <button
                key={amenity.id}
                ref={(el) => {
                  thumbnailRefs.current[idx] = el;
                }}
                onClick={() => goToSlide(idx)}
                className={`snap-center shrink-0 flex items-center gap-2.5 p-2 rounded-xl transition-all cursor-pointer text-left border ${
                  isActive
                    ? 'bg-[#0F2B22] border-[#D98F4A] shadow-lg shadow-[#D98F4A]/15 scale-[1.02]'
                    : 'bg-[#F5EFE3]/[0.03] hover:bg-[#F5EFE3]/[0.08] border-[#F5EFE3]/10 opacity-70 hover:opacity-100'
                }`}
                style={{ minWidth: isMobile ? '160px' : '180px' }}
              >
                <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden shrink-0 border border-white/10">
                  <img
                    src={amenity.imageUrl}
                    alt={amenity.title}
                    className="w-full h-full object-cover"
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-[#D98F4A]/20 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D98F4A]" />
                    </div>
                  )}
                </div>

                <div className="flex flex-col min-w-0 pr-1">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#D98F4A] truncate">
                    {amenity.category.split(' ')[0]}
                  </span>
                  <span className={`font-serif text-xs font-medium leading-tight truncate ${
                    isActive ? 'text-[#F5EFE3] font-semibold' : 'text-[#E8DCC3]/80'
                  }`}>
                    {amenity.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
