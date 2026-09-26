'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  TreePine, 
  CalendarDays, 
  ArrowRight, 
  Users, 
  BedDouble, 
  Eye, 
  Maximize, 
  Check, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronDown, 
  Sparkles,
  Flame,
  Coffee,
  Compass,
  Star,
  BookOpen,
  Filter,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { 
  DeviceMode, 
  ResortPage, 
  ResortRoom, 
  ResortBlogPost, 
  ResortGalleryItem 
} from '@/components/demo/alder-ash/types';
import { 
  RESORT_ROOMS, 
  RESORT_MENUS, 
  RESORT_EXPERIENCES, 
  RESORT_GALLERY, 
  RESORT_BLOG, 
  RESORT_FAQS 
} from '@/components/demo/alder-ash/data';
import { AlderAshPreviewToolbar } from '@/components/demo/alder-ash/AlderAshPreviewToolbar';
import { AlderAshNavbar } from '@/components/demo/alder-ash/AlderAshNavbar';
import { AlderAshFooter } from '@/components/demo/alder-ash/AlderAshFooter';
import { AlderAshBookingModal } from '@/components/demo/alder-ash/AlderAshBookingModal';
import { AlderAshRoomModal } from '@/components/demo/alder-ash/AlderAshRoomModal';
import { AlderAshArticleModal } from '@/components/demo/alder-ash/AlderAshArticleModal';
import { AlderAshLightbox } from '@/components/demo/alder-ash/AlderAshLightbox';
import { AlderAshMobileBookingBar } from '@/components/demo/alder-ash/AlderAshMobileBookingBar';
import { AlderAshAmenityScroller } from '@/components/demo/alder-ash/AlderAshAmenityScroller';
import { AlderAshReveal } from '@/components/demo/alder-ash/AlderAshReveal';

export default function AlderAshDemoPage() {
  // Navigation & View State
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activePage, setActivePage] = useState<ResortPage>('home');
  const [isEmbedded, setIsEmbedded] = useState(false);

  // Detect embedding (iframe or embed query param) and listen for device mode messages
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const isEmbed = params.get('embed') === 'true' || window.self !== window.top;
      setIsEmbedded(isEmbed);

      const deviceParam = params.get('device') as DeviceMode;
      if (deviceParam === 'mobile' || deviceParam === 'tablet' || deviceParam === 'desktop') {
        setDeviceMode(deviceParam);
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

  // Interactive Modals State
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedRoomId, setPreselectedRoomId] = useState<string | undefined>();
  const [detailRoom, setDetailRoom] = useState<ResortRoom | null>(null);
  const [detailPost, setDetailPost] = useState<ResortBlogPost | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filters State
  const [roomFilter, setRoomFilter] = useState<'all' | 'solo' | 'couple' | 'group'>('all');
  const [diningTab, setDiningTab] = useState<'breakfast' | 'dinner' | 'drinks'>('breakfast');
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'cabins' | 'dining' | 'nature' | 'wellness'>('all');
  const [faqCategory, setFaqCategory] = useState<'all' | 'booking' | 'onsite' | 'dining' | 'accessibility'>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((cur) => (cur === msg ? null : cur));
    }, 4000);
  };

  const handleOpenBooking = (roomId?: string) => {
    setPreselectedRoomId(roomId);
    setBookingModalOpen(true);
  };

  // Filtered Lists
  const filteredRooms = roomFilter === 'all' 
    ? RESORT_ROOMS 
    : RESORT_ROOMS.filter((r) => r.type === roomFilter);

  const filteredMenus = RESORT_MENUS.filter((m) => m.category === diningTab);

  const filteredGallery = galleryFilter === 'all'
    ? RESORT_GALLERY
    : RESORT_GALLERY.filter((g) => g.category === galleryFilter);

  const filteredFaqs = faqCategory === 'all'
    ? RESORT_FAQS
    : RESORT_FAQS.filter((f) => f.category === faqCategory);

  // Responsive mode flags
  const isMobile = deviceMode === 'mobile';
  const isTablet = deviceMode === 'tablet';

  // Responsive Grid Classes tailored for preview simulation AND real viewports
  const grid3Col = isMobile ? 'grid-cols-1 gap-5' : isTablet ? 'grid-cols-1 sm:grid-cols-2 gap-5' : 'grid-cols-1 md:grid-cols-3 gap-6';
  const gridRooms = isMobile ? 'grid-cols-1 gap-5' : isTablet ? 'grid-cols-1 sm:grid-cols-2 gap-5' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8';
  const gridExperiences = isMobile ? 'grid-cols-1 gap-5' : isTablet ? 'grid-cols-1 sm:grid-cols-2 gap-5' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8';
  const gridGallery = isMobile ? 'grid-cols-2 gap-2.5 sm:gap-3' : isTablet ? 'grid-cols-2 sm:grid-cols-3 gap-4' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6';
  const gridBlog = isMobile ? 'grid-cols-1 gap-6' : isTablet ? 'grid-cols-1 sm:grid-cols-2 gap-6' : 'grid-cols-1 md:grid-cols-2 gap-8';
  const gridContact = isMobile || isTablet ? 'grid-cols-1 gap-8' : 'grid-cols-1 lg:grid-cols-12 gap-10';
  const gridStats = isMobile ? 'grid-cols-2 gap-2 p-3' : isTablet ? 'grid-cols-2 sm:grid-cols-4 gap-3 p-4' : 'grid-cols-2 md:grid-cols-4 gap-4 p-5';

  // Frame container class depending on device mode
  const frameContainerClass = (isFullscreen || isEmbedded)
    ? 'w-full min-h-screen'
    : deviceMode === 'tablet'
    ? 'max-w-[768px] mx-auto my-6 rounded-3xl shadow-2xl border-4 border-slate-700/60 overflow-hidden w-full overflow-x-hidden'
    : deviceMode === 'mobile'
    ? 'max-w-[390px] mx-auto my-6 rounded-3xl shadow-2xl border-4 border-slate-700/60 overflow-hidden w-full overflow-x-hidden'
    : 'w-full min-h-screen';

  return (
    <div className="min-h-screen bg-[#06120D] text-[#F5EFE3] flex flex-col font-sans selection:bg-[#D98F4A] selection:text-[#0F2B22]">
      
      {/* 1. TOP PREVIEW TOOLBAR - Hidden when embedded inside marketplace preview iframe */}
      {!isEmbedded && (
        <AlderAshPreviewToolbar
          deviceMode={deviceMode}
          onDeviceChange={setDeviceMode}
          isFullscreen={isFullscreen}
          onToggleFullscreen={() => setIsFullscreen(!isFullscreen)}
          onOpenBooking={() => handleOpenBooking()}
        />
      )}

      {/* 2. RESPONSIVE DEVICE VIEWPORT CONTAINER */}
      <div className={`flex-1 flex flex-col bg-[#0F2B22] ${frameContainerClass} transition-all duration-300 relative`}>
        
        {/* Background ambient lighting */}
        <div 
          className="fixed inset-0 pointer-events-none -z-10"
          style={{
            background: `
              radial-gradient(1100px 700px at 15% -10%, rgba(62,122,92,0.35), transparent 60%),
              radial-gradient(900px 600px at 100% 10%, rgba(217,143,74,0.18), transparent 55%),
              linear-gradient(160deg, #0F2B22 0%, #164031 45%, #0B241C 100%)
            `
          }}
        />

        {/* RESORT NAVIGATION */}
        <AlderAshNavbar
          activePage={activePage}
          onPageChange={setActivePage}
          onOpenBooking={() => handleOpenBooking()}
          deviceMode={deviceMode}
        />

        {/* ========================================================
            PAGE 1: HOME
        ======================================================== */}
        {activePage === 'home' && (
          <div className={`${isMobile ? 'space-y-16 pb-16' : 'space-y-24 sm:space-y-32 pb-20'}`}>
            
            {/* HERO SECTION */}
            <section className={`relative ${isMobile ? 'pt-10' : 'pt-16 sm:pt-24'} px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center`}>
              <AlderAshReveal direction="up" delay={0.05}>
                <span className="inline-block text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#D98F4A] mb-3">
                  SOMEWHERE IN THE CASCADE FOOTHILLS
                </span>
                <h1 className={`font-serif ${
                  isMobile ? 'text-3xl' : isTablet ? 'text-4xl sm:text-5xl' : 'text-4xl sm:text-6xl lg:text-7xl'
                } font-medium tracking-tight text-[#F5EFE3] leading-[1.12] max-w-4xl mx-auto`}>
                  Slow down, the forest{' '}
                  <em className="text-[#D98F4A] font-normal italic">waited for you.</em>
                </h1>
                <p className={`mt-4 sm:mt-6 ${
                  isMobile ? 'text-xs sm:text-sm' : 'text-base sm:text-lg'
                } text-[#E8DCC3]/80 max-w-2xl mx-auto leading-relaxed font-sans`}>
                  Alder &amp; Ash is a 40-cabin retreat built into old-growth pine, with wood-fired cedar baths, a river-fed pool, and nothing on the agenda but rest.
                </p>

                {/* Hero Actions */}
                <div className={`mt-6 sm:mt-8 flex ${isMobile ? 'flex-col w-full' : 'flex-col sm:flex-row'} items-center justify-center gap-3 sm:gap-4`}>
                  <button
                    onClick={() => handleOpenBooking()}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#D98F4A] via-[#E29D5D] to-[#D98F4A] text-[#140D04] font-bold text-xs sm:text-sm shadow-xl shadow-[#D98F4A]/30 hover:shadow-[#D98F4A]/50 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                  >
                    Check Availability &amp; Rates
                  </button>
                  <button
                    onClick={() => setActivePage('experiences')}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-[#F5EFE3]/20 text-[#F5EFE3] font-semibold text-xs sm:text-sm backdrop-blur-md transition-all cursor-pointer"
                  >
                    See Guided Experiences
                  </button>
                </div>
              </AlderAshReveal>

              {/* Hero Resort Amenities Showcase Scroller (Auto-scrolling multiple amenities) */}
              <AlderAshReveal direction="up" delay={0.15}>
                <AlderAshAmenityScroller
                  onOpenBooking={() => handleOpenBooking()}
                  onPageChange={setActivePage}
                  deviceMode={deviceMode}
                />
              </AlderAshReveal>

              {/* 4 Stats Metrics Row */}
              <AlderAshReveal direction="up" delay={0.2}>
                <div className={`mt-8 sm:mt-12 grid ${gridStats} rounded-2xl bg-[#F5EFE3]/[0.05] border border-[#F5EFE3]/10 backdrop-blur-md`}>
                  <div className="text-center p-2">
                    <p className={`font-serif ${isMobile ? 'text-2xl' : 'text-3xl'} font-medium text-[#D98F4A]`}>40</p>
                    <p className="text-[11px] sm:text-xs text-[#E8DCC3]/70 mt-0.5">Cabins &amp; Suites</p>
                  </div>
                  <div className="text-center p-2 border-l border-white/10">
                    <p className={`font-serif ${isMobile ? 'text-2xl' : 'text-3xl'} font-medium text-[#D98F4A]`}>320</p>
                    <p className="text-[11px] sm:text-xs text-[#E8DCC3]/70 mt-0.5">Forested Acres</p>
                  </div>
                  <div className={`text-center p-2 ${isMobile ? 'border-t border-white/10' : 'border-l border-white/10'}`}>
                    <p className={`font-serif ${isMobile ? 'text-2xl' : 'text-3xl'} font-medium text-[#D98F4A]`}>4.98</p>
                    <p className="text-[11px] sm:text-xs text-[#E8DCC3]/70 mt-0.5">Guest Satisfaction</p>
                  </div>
                  <div className={`text-center p-2 border-l border-white/10 ${isMobile ? 'border-t border-white/10' : ''}`}>
                    <p className={`font-serif ${isMobile ? 'text-2xl' : 'text-3xl'} font-medium text-[#D98F4A]`}>1912</p>
                    <p className="text-[11px] sm:text-xs text-[#E8DCC3]/70 mt-0.5">Original Lodge</p>
                  </div>
                </div>
              </AlderAshReveal>
            </section>

            {/* WHY ALDER & ASH (3 GLASS CARDS) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AlderAshReveal direction="up">
                <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D98F4A]">
                    WHY ALDER &amp; ASH
                  </span>
                  <h2 className={`font-serif ${isMobile ? 'text-xl' : 'text-2xl sm:text-4xl'} font-medium text-[#F5EFE3] mt-2`}>
                    A resort built around the woods, not on top of them.
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-[#E8DCC3]/70">
                    We kept the ancient conifers, the river gravel, and the quiet. Everything you touch is timber, stone, wool, or linen.
                  </p>
                </div>
              </AlderAshReveal>

              <div className={`grid ${grid3Col}`}>
                
                {/* Card 1: Soaking tubs */}
                <AlderAshReveal delay={0.1}>
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#F5EFE3]/[0.05] border border-[#F5EFE3]/10 backdrop-blur-md space-y-4 hover:border-[#D98F4A]/40 transition-all group h-full">
                    <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-900">
                      <img
                        src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=700&auto=format&fit=crop&q=80"
                        alt="Cedar Wood-Fired Soaking Tub"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-medium text-[#F5EFE3]">
                      Wood-Fired Soaking Tubs
                    </h3>
                    <p className="text-xs sm:text-sm text-[#E8DCC3]/75 leading-relaxed font-sans">
                      Hand-coopered cedar tubs heated with seasoned alder wood logs. Set in deep fern understories, fed by natural mountain spring waters.
                    </p>
                  </div>
                </AlderAshReveal>

                {/* Card 2: Hearth Room Dining */}
                <AlderAshReveal delay={0.2}>
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#F5EFE3]/[0.05] border border-[#F5EFE3]/10 backdrop-blur-md space-y-4 hover:border-[#D98F4A]/40 transition-all group h-full">
                    <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-900">
                      <img
                        src="https://images.unsplash.com/photo-1544025162-d76694265947?w=700&auto=format&fit=crop&q=80"
                        alt="The Hearth Room Dining"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-medium text-[#F5EFE3]">
                      The Hearth Room
                    </h3>
                    <p className="text-xs sm:text-sm text-[#E8DCC3]/75 leading-relaxed font-sans">
                      One communal seating, one long cedar table. A daily changing menu driven by morning farm harvests, wild forest chanterelles, and embers.
                    </p>
                  </div>
                </AlderAshReveal>

                {/* Card 3: 18 Miles of Trails */}
                <AlderAshReveal delay={0.3}>
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#F5EFE3]/[0.05] border border-[#F5EFE3]/10 backdrop-blur-md space-y-4 hover:border-[#D98F4A]/40 transition-all group h-full">
                    <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-900">
                      <img
                        src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=700&auto=format&fit=crop&q=80"
                        alt="18 Miles of Trails"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-medium text-[#F5EFE3]">
                      18 Miles of Unpaved Trails
                    </h3>
                    <p className="text-xs sm:text-sm text-[#E8DCC3]/75 leading-relaxed font-sans">
                      Step off your cabin porch straight onto soft pine-needle trails. Walk along the river rapids or climb to the eagle overlook with no roads in sight.
                    </p>
                  </div>
                </AlderAshReveal>

              </div>
            </section>

            {/* FEATURED CABINS TEASER */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AlderAshReveal direction="up">
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D98F4A]">
                      ACCOMMODATIONS
                    </span>
                    <h2 className={`font-serif ${isMobile ? 'text-xl' : 'text-2xl sm:text-3xl'} font-medium text-[#F5EFE3] mt-1`}>
                      Every room looks at the trees.
                    </h2>
                    <p className="text-xs sm:text-sm text-[#E8DCC3]/70 mt-1">
                      Wood-built, wifi-free by default, stocked with seasoned alder firewood and Pendleton wool.
                    </p>
                  </div>

                  <button
                    onClick={() => setActivePage('rooms')}
                    className="flex items-center gap-1.5 text-xs font-bold text-[#D98F4A] hover:underline cursor-pointer"
                  >
                    <span>View All 6 Cabins &amp; Suites</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </AlderAshReveal>

              <div className={`grid ${grid3Col}`}>
                {RESORT_ROOMS.slice(0, 3).map((room, idx) => (
                  <AlderAshReveal key={room.id} delay={idx * 0.12}>
                    <div
                      className="p-5 rounded-2xl bg-[#F5EFE3]/[0.05] border border-[#F5EFE3]/10 backdrop-blur-md flex flex-col justify-between hover:border-[#D98F4A]/40 transition-all group h-full"
                    >
                      <div>
                        <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 mb-4">
                          <img
                            src={room.imageUrl}
                            alt={room.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-[#E8DCC3]">
                            {room.capacity}
                          </span>
                        </div>

                        <h3 className="font-serif text-xl font-medium text-[#F5EFE3]">
                          {room.name}
                        </h3>
                        <p className="text-xs text-[#E8DCC3]/70 mt-1 line-clamp-2">
                          {room.description}
                        </p>

                        <div className="mt-3 flex items-center gap-2 text-xs text-[#E8DCC3]/80">
                          <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px]">
                            {room.beds}
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px]">
                            {room.features[0]}
                          </span>
                        </div>
                      </div>

                      <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                        <div>
                          <span className="font-serif text-xl font-bold text-[#D98F4A]">${room.rate}</span>
                          <span className="text-[11px] text-[#E8DCC3]/60 font-sans"> / night</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setDetailRoom(room)}
                            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-[#E8DCC3] cursor-pointer"
                          >
                            Details
                          </button>
                          <button
                            onClick={() => handleOpenBooking(room.id)}
                            className="px-3.5 py-1.5 rounded-lg bg-[#D98F4A] hover:bg-[#E8A86B] text-[#140D04] text-xs font-bold cursor-pointer transition-colors"
                          >
                            Book
                          </button>
                        </div>
                      </div>
                    </div>
                  </AlderAshReveal>
                ))}
              </div>
            </section>

            {/* GUEST TESTIMONIALS STRIP */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AlderAshReveal direction="up">
                <div className="p-6 sm:p-12 rounded-3xl bg-[#091C15]/90 border border-[#F5EFE3]/15 backdrop-blur-md">
                  <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D98F4A]">
                      VISITOR TESTIMONIALS
                    </span>
                    <h3 className={`font-serif ${isMobile ? 'text-xl' : 'text-2xl sm:text-3xl'} font-medium text-[#F5EFE3] mt-1`}>
                      Words from those who slowed down.
                    </h3>
                  </div>

                  <div className={`grid ${grid3Col}`}>
                    <AlderAshReveal delay={0.1}>
                      <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 h-full">
                        <div className="flex gap-1 text-[#D98F4A]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <p className="text-xs sm:text-sm text-[#E8DCC3]/80 italic font-serif leading-relaxed">
                          "Three days without internet in the Creekside Suite cured months of digital exhaustion. The private cedar tub under the rain was pure therapy."
                        </p>
                        <p className="text-xs font-semibold text-white pt-2 border-t border-white/10">
                          Julianne &amp; Marcus — Seattle, WA
                        </p>
                      </div>
                    </AlderAshReveal>

                    <AlderAshReveal delay={0.2}>
                      <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 h-full">
                        <div className="flex gap-1 text-[#D98F4A]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <p className="text-xs sm:text-sm text-[#E8DCC3]/80 italic font-serif leading-relaxed">
                          "The food in the Hearth Room is worth the journey alone. Chanterelles picked that very morning and salmon roasted over seasoned cedar."
                        </p>
                        <p className="text-xs font-semibold text-white pt-2 border-t border-white/10">
                          Dr. Richard Bailey — Portland, OR
                        </p>
                      </div>
                    </AlderAshReveal>

                    <AlderAshReveal delay={0.3}>
                      <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 h-full">
                        <div className="flex gap-1 text-[#D98F4A]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <p className="text-xs sm:text-sm text-[#E8DCC3]/80 italic font-serif leading-relaxed">
                          "We booked the Ridge Outpost for our leadership retreat. The balance of seclusion, timber architecture, and dawn hikes was unforgettable."
                        </p>
                        <p className="text-xs font-semibold text-white pt-2 border-t border-white/10">
                          Avery Chen — San Francisco, CA
                        </p>
                      </div>
                    </AlderAshReveal>
                  </div>
                </div>
              </AlderAshReveal>
            </section>

          </div>
        )}

        {/* ========================================================
            PAGE 2: ROOMS & CABINS
        ======================================================== */}
        {activePage === 'rooms' && (
          <div className={`max-w-7xl mx-auto ${isMobile ? 'px-3 py-8 space-y-6' : 'px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10'}`}>
            {/* Header & Filter */}
            <AlderAshReveal direction="up">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D98F4A]">
                  CABINS &amp; SUITES
                </span>
                <h1 className={`font-serif ${isMobile ? 'text-2xl' : 'text-3xl sm:text-5xl'} font-medium text-[#F5EFE3] mt-2`}>
                  Accommodations
                </h1>
                <p className="text-xs sm:text-sm text-[#E8DCC3]/75 mt-2 sm:mt-3 leading-relaxed">
                  From intimate writer's cabins to full timber lodge houses. Every cabin is built from regional timber, heated with seasoned wood, and opens directly to the forest.
                </p>
              </div>

              {/* Filter Row */}
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap mt-6">
                {[
                  { id: 'all', label: 'All Cabins (6)' },
                  { id: 'solo', label: 'Solo Retreats (1)' },
                  { id: 'couple', label: 'Couples & Pairs (2)' },
                  { id: 'group', label: 'Family & Groups (3)' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setRoomFilter(tab.id as any)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                      roomFilter === tab.id
                        ? 'bg-[#D98F4A] text-[#120B04] font-bold shadow-md'
                        : 'bg-white/5 text-[#E8DCC3] hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </AlderAshReveal>

            {/* Cabins Grid */}
            <div className={`grid ${gridRooms}`}>
              {filteredRooms.map((room, idx) => (
                <AlderAshReveal key={room.id} delay={idx * 0.1}>
                  <div
                    className="rounded-3xl bg-[#F5EFE3]/[0.05] border border-[#F5EFE3]/10 backdrop-blur-md overflow-hidden flex flex-col justify-between hover:border-[#D98F4A]/40 transition-all group h-full"
                  >
                    <div>
                      <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                        <img
                          src={room.imageUrl}
                          alt={room.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-[#E8DCC3]">
                          {room.capacity}
                        </span>
                        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#D98F4A] text-[#140D04]">
                          {room.size}
                        </span>
                      </div>

                      <div className="p-6 space-y-3">
                        <h3 className="font-serif text-2xl font-medium text-[#F5EFE3]">
                          {room.name}
                        </h3>
                        <p className="text-xs text-[#E8DCC3]/75 leading-relaxed">
                          {room.description}
                        </p>

                        <div className="pt-2 border-t border-white/10 space-y-1.5 text-xs text-[#E8DCC3]">
                          <div className="flex items-center gap-2">
                            <BedDouble className="w-3.5 h-3.5 text-[#D98F4A]" />
                            <span>{room.beds}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Eye className="w-3.5 h-3.5 text-[#D98F4A]" />
                            <span>{room.view}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 pt-0 border-t border-white/10 mt-4 flex items-center justify-between">
                      <div>
                        <span className="font-serif text-2xl font-bold text-[#D98F4A]">${room.rate}</span>
                        <span className="text-xs text-[#E8DCC3]/60 font-sans"> / night</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setDetailRoom(room)}
                          className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-[#E8DCC3] cursor-pointer"
                        >
                          Details
                        </button>
                        <button
                          onClick={() => handleOpenBooking(room.id)}
                          className="px-4 py-2 rounded-xl bg-[#D98F4A] hover:bg-[#E8A86B] text-[#120B04] text-xs font-bold cursor-pointer transition-all shadow-md"
                        >
                          Reserve
                        </button>
                      </div>
                    </div>
                  </div>
                </AlderAshReveal>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================
            PAGE 3: DINING (THE HEARTH ROOM)
        ======================================================== */}
        {activePage === 'dining' && (
          <div className={`max-w-5xl mx-auto ${isMobile ? 'px-3 py-8 space-y-8' : 'px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12'}`}>
            {/* Header */}
            <AlderAshReveal direction="up">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D98F4A]">
                  WOOD-FIRED CUISINE
                </span>
                <h1 className={`font-serif ${isMobile ? 'text-2xl' : 'text-3xl sm:text-5xl'} font-medium text-[#F5EFE3] mt-2`}>
                  The Hearth Room
                </h1>
                <p className="text-xs sm:text-sm text-[#E8DCC3]/75 mt-2 sm:mt-3 leading-relaxed">
                  One seating, one long table, a menu written each morning from the farm and the forager's basket. Dietary restrictions warmly accommodated with advance notice.
                </p>
              </div>
            </AlderAshReveal>

            {/* Dining Hero Image */}
            <AlderAshReveal direction="up" delay={0.1}>
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] border border-white/15 shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&auto=format&fit=crop&q=80"
                  alt="The Hearth Room Table"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B241C] via-transparent to-black/30" />
                <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-2">
                  <span className="text-[11px] sm:text-xs font-serif text-[#E8DCC3]">
                    Breakfast: 7:30am – 10:30am • Dinner: 6:30pm Nightly
                  </span>
                  <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#D98F4A] text-[#120B04] text-[11px] sm:text-xs font-bold">
                    Included for all guests
                  </span>
                </div>
              </div>
            </AlderAshReveal>

            {/* Menu Tabs */}
            <AlderAshReveal direction="up" delay={0.15}>
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
                {[
                  { id: 'breakfast', label: 'Morning Breakfast' },
                  { id: 'dinner', label: 'Ember & Hearth Dinner' },
                  { id: 'drinks', label: 'Fireside Drinks & Teas' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setDiningTab(tab.id as any)}
                    className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                      diningTab === tab.id
                        ? 'bg-[#D98F4A] text-[#120B04] font-bold shadow-md'
                        : 'bg-white/5 text-[#E8DCC3] hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </AlderAshReveal>

            {/* Menu Items List */}
            <AlderAshReveal direction="up" delay={0.2}>
              <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#F5EFE3]/[0.05] border border-[#F5EFE3]/10 backdrop-blur-md divide-y divide-white/10">
                {filteredMenus.map((item) => (
                  <div key={item.id} className="py-4 sm:py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <h4 className="font-serif text-base sm:text-lg text-[#F5EFE3] font-medium">{item.name}</h4>
                        {item.dietary?.map((tag, i) => (
                          <span key={i} className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-[#D98F4A]/15 text-[#D98F4A] border border-[#D98F4A]/25">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-[#E8DCC3]/70 max-w-xl">{item.description}</p>
                    </div>
                    <span className="font-serif text-base sm:text-lg font-bold text-[#D98F4A] shrink-0">
                      ${item.price}
                    </span>
                  </div>
                ))}
              </div>
            </AlderAshReveal>

            {/* Table Reservation Card */}
            <AlderAshReveal direction="up" delay={0.25}>
              <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#164031] to-[#0B241C] border border-[#D98F4A]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 shadow-xl">
                <div className="space-y-1">
                  <h4 className="font-serif text-lg sm:text-xl text-[#F5EFE3] font-medium">Visiting for dinner only?</h4>
                  <p className="text-xs text-[#E8DCC3]/70">
                    We reserve eight seats nightly for non-lodging guests. Pre-booking is required by 2pm.
                  </p>
                </div>
                <button
                  onClick={() => showToast('Dinner reservation inquiry received! We will confirm by email.')}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#D98F4A] hover:bg-[#E8A86B] text-[#120B04] text-xs font-bold shadow-md cursor-pointer shrink-0 text-center"
                >
                  Reserve a Hearth Table
                </button>
              </div>
            </AlderAshReveal>
          </div>
        )}

        {/* ========================================================
            PAGE 4: EXPERIENCES
        ======================================================== */}
        {activePage === 'experiences' && (
          <div className={`max-w-7xl mx-auto ${isMobile ? 'px-3 py-8 space-y-8' : 'px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12'}`}>
            {/* Header */}
            <AlderAshReveal direction="up">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D98F4A]">
                  WILDERNESS &amp; REST
                </span>
                <h1 className={`font-serif ${isMobile ? 'text-2xl' : 'text-3xl sm:text-5xl'} font-medium text-[#F5EFE3] mt-2`}>
                  Curated Experiences
                </h1>
                <p className="text-xs sm:text-sm text-[#E8DCC3]/75 mt-2 sm:mt-3 leading-relaxed">
                  Things to do, or not do, while you're here. From guided sunrise ridge hikes to private cedar tubs and midnight stargazing.
                </p>
              </div>
            </AlderAshReveal>

            {/* Experiences Grid */}
            <div className={`grid ${gridExperiences}`}>
              {RESORT_EXPERIENCES.map((exp, idx) => (
                <AlderAshReveal key={exp.id} delay={idx * 0.1}>
                  <div
                    className="rounded-2xl sm:rounded-3xl bg-[#F5EFE3]/[0.05] border border-[#F5EFE3]/10 backdrop-blur-md overflow-hidden flex flex-col justify-between hover:border-[#D98F4A]/40 transition-all group h-full"
                  >
                    <div>
                      <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                        <img
                          src={exp.imageUrl}
                          alt={exp.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-[#E8DCC3]">
                          {exp.duration}
                        </span>
                        {exp.price === 0 ? (
                          <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/80 text-white">
                            Complimentary
                          </span>
                        ) : (
                          <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#D98F4A] text-[#120B04]">
                            ${exp.price} / person
                          </span>
                        )}
                      </div>

                      <div className="p-5 sm:p-6 space-y-3">
                        <h3 className="font-serif text-lg sm:text-xl font-medium text-[#F5EFE3]">
                          {exp.title}
                        </h3>
                        <p className="text-xs text-[#E8DCC3]/75 leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="pt-2 border-t border-white/10 space-y-1 text-xs text-[#E8DCC3]/60">
                          <p>Time: <span className="text-white">{exp.time}</span></p>
                          <p>Meets at: <span className="text-white">{exp.meetingPoint}</span></p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 pt-0">
                      <button
                        onClick={() => handleOpenBooking()}
                        className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-[#E8DCC3] hover:text-white transition-all cursor-pointer text-center"
                      >
                        Book With Cabin Stay →
                      </button>
                    </div>
                  </div>
                </AlderAshReveal>
              ))}
            </div>

            {/* Seasonal Guide Callout */}
            <AlderAshReveal direction="up" delay={0.15}>
              <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#F5EFE3]/[0.05] border border-white/10 backdrop-blur-md space-y-4">
                <h3 className="font-serif text-lg sm:text-xl text-[#F5EFE3]">Seasonal Highlights</h3>
                <div className={`grid ${isMobile ? 'grid-cols-1 gap-3' : isTablet ? 'grid-cols-2 gap-3' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'} text-xs text-[#E8DCC3]/80`}>
                  <div className="p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 space-y-1">
                    <span className="font-bold text-[#D98F4A] block uppercase">Spring (Apr–Jun)</span>
                    <p>Mountain runoff waterfalls, early wild morels, blooming trilliums.</p>
                  </div>
                  <div className="p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 space-y-1">
                    <span className="font-bold text-[#D98F4A] block uppercase">Summer (Jul–Aug)</span>
                    <p>River swimming holes, summit wildflowers, warm outdoor dinners.</p>
                  </div>
                  <div className="p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 space-y-1">
                    <span className="font-bold text-[#D98F4A] block uppercase">Autumn (Sep–Nov)</span>
                    <p>Vine maple crimson foliage, woodstoves lit, chanterelle foraging.</p>
                  </div>
                  <div className="p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 space-y-1">
                    <span className="font-bold text-[#D98F4A] block uppercase">Winter (Dec–Mar)</span>
                    <p>Snowshoe trails, geothermal steam soaking, fireside reading.</p>
                  </div>
                </div>
              </div>
            </AlderAshReveal>
          </div>
        )}

        {/* ========================================================
            PAGE 5: GALLERY
        ======================================================== */}
        {activePage === 'gallery' && (
          <div className={`max-w-7xl mx-auto ${isMobile ? 'px-3 py-8 space-y-6' : 'px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10'}`}>
            {/* Header & Filter */}
            <AlderAshReveal direction="up">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D98F4A]">
                  VISUAL ARCHIVE
                </span>
                <h1 className={`font-serif ${isMobile ? 'text-2xl' : 'text-3xl sm:text-5xl'} font-medium text-[#F5EFE3] mt-2`}>
                  The Place, In Light
                </h1>
                <p className="text-xs sm:text-sm text-[#E8DCC3]/75 mt-2 sm:mt-3 leading-relaxed">
                  Click any image to view in high resolution.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap mt-6">
                {[
                  { id: 'all', label: 'All Photographs' },
                  { id: 'cabins', label: 'Cabins & Interiors' },
                  { id: 'nature', label: 'Forest & River' },
                  { id: 'dining', label: 'The Hearth Room' },
                  { id: 'wellness', label: 'Soaking & Saunas' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setGalleryFilter(tab.id as any)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                      galleryFilter === tab.id
                        ? 'bg-[#D98F4A] text-[#120B04] font-bold shadow-md'
                        : 'bg-white/5 text-[#E8DCC3] hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </AlderAshReveal>

            {/* Gallery Grid */}
            <div className={`grid ${gridGallery}`}>
              {filteredGallery.map((item, idx) => (
                <AlderAshReveal key={item.id} delay={(idx % 4) * 0.08}>
                  <div
                    onClick={() => setLightboxIndex(idx)}
                    className="group relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 border border-white/10 cursor-pointer shadow-lg hover:border-[#D98F4A]/50 transition-all h-full"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent ${
                      isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    } transition-opacity p-2.5 sm:p-4 flex flex-col justify-end`}>
                      <p className="font-serif text-xs sm:text-sm font-medium text-white truncate">{item.title}</p>
                      <p className="text-[10px] sm:text-[11px] text-[#E8DCC3]/70 truncate">{item.caption}</p>
                    </div>
                  </div>
                </AlderAshReveal>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================
            PAGE 6: JOURNAL / BLOG
        ======================================================== */}
        {activePage === 'blog' && (
          <div className={`max-w-5xl mx-auto ${isMobile ? 'px-3 py-8 space-y-8' : 'px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12'}`}>
            {/* Header */}
            <AlderAshReveal direction="up">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D98F4A]">
                  THE LODGE GAZETTE
                </span>
                <h1 className={`font-serif ${isMobile ? 'text-2xl' : 'text-3xl sm:text-5xl'} font-medium text-[#F5EFE3] mt-2`}>
                  Notes from the Lodge
                </h1>
                <p className="text-xs sm:text-sm text-[#E8DCC3]/75 mt-2 sm:mt-3 leading-relaxed">
                  Essays on seasonal changes, foraging notes, woodwright reflections, and the restorative benefits of offline rest.
                </p>
              </div>
            </AlderAshReveal>

            {/* Blog Posts Grid */}
            <div className={`grid ${gridBlog}`}>
              {RESORT_BLOG.map((post, idx) => (
                <AlderAshReveal key={post.id} delay={idx * 0.1}>
                  <div
                    onClick={() => setDetailPost(post)}
                    className="rounded-2xl sm:rounded-3xl bg-[#F5EFE3]/[0.05] border border-[#F5EFE3]/10 backdrop-blur-md overflow-hidden cursor-pointer hover:border-[#D98F4A]/40 transition-all group flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="aspect-[16/9] w-full bg-slate-900 overflow-hidden relative">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#D98F4A] text-[#120B04]">
                          {post.category}
                        </span>
                      </div>

                      <div className="p-5 sm:p-6 space-y-2">
                        <div className="flex items-center gap-2 text-[11px] sm:text-xs text-[#E8DCC3]/60">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="font-serif text-lg sm:text-xl font-medium text-[#F5EFE3] group-hover:text-[#D98F4A] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-xs text-[#E8DCC3]/75 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 pt-0 flex items-center justify-between text-xs text-[#D98F4A] font-bold">
                      <span>Read Full Essay →</span>
                      <span className="text-[#E8DCC3]/50 font-normal">{post.author}</span>
                    </div>
                  </div>
                </AlderAshReveal>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================
            PAGE 7: FAQ
        ======================================================== */}
        {activePage === 'faq' && (
          <div className={`max-w-4xl mx-auto ${isMobile ? 'px-3 py-8 space-y-6' : 'px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10'}`}>
            {/* Header & Filter Tabs */}
            <AlderAshReveal direction="up">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D98F4A]">
                  HELP &amp; INFORMATION
                </span>
                <h1 className={`font-serif ${isMobile ? 'text-2xl' : 'text-3xl sm:text-5xl'} font-medium text-[#F5EFE3] mt-2`}>
                  Good to know before you book.
                </h1>
                <p className="text-xs sm:text-sm text-[#E8DCC3]/75 mt-2 sm:mt-3 leading-relaxed">
                  Everything regarding check-in times, our off-grid WiFi philosophy, dining seatings, and pet policies.
                </p>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap mt-6">
                {[
                  { id: 'all', label: 'All Questions' },
                  { id: 'booking', label: 'Booking & Policies' },
                  { id: 'onsite', label: 'On-Site & Off-Grid' },
                  { id: 'dining', label: 'Dining & Allergies' },
                  { id: 'accessibility', label: 'Accessibility & Dogs' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setFaqCategory(tab.id as any)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                      faqCategory === tab.id
                        ? 'bg-[#D98F4A] text-[#120B04] font-bold shadow-md'
                        : 'bg-white/5 text-[#E8DCC3] hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </AlderAshReveal>

            {/* Accordion List */}
            <AlderAshReveal direction="up" delay={0.15}>
              <div className="space-y-3">
                {filteredFaqs.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="rounded-2xl bg-[#F5EFE3]/[0.05] border border-[#F5EFE3]/10 backdrop-blur-md overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                        className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer"
                      >
                        <span className="font-serif text-sm sm:text-lg font-medium text-[#F5EFE3]">
                          {faq.question}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-[#D98F4A] shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`} />
                      </button>

                      {isOpen && (
                        <div className="px-4 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-[#E8DCC3]/80 leading-relaxed font-sans border-t border-white/5 pt-3 animate-in fade-in duration-200">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </AlderAshReveal>
          </div>
        )}

        {/* ========================================================
            PAGE 8: CONTACT & DIRECTIONS
        ======================================================== */}
        {activePage === 'contact' && (
          <div className={`max-w-6xl mx-auto ${isMobile ? 'px-3 py-8 space-y-8' : 'px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12'}`}>
            {/* Header */}
            <AlderAshReveal direction="up">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D98F4A]">
                  GETTING HERE &amp; INQUIRIES
                </span>
                <h1 className={`font-serif ${isMobile ? 'text-2xl' : 'text-3xl sm:text-5xl'} font-medium text-[#F5EFE3] mt-2`}>
                  Plan Your Stay
                </h1>
                <p className="text-xs sm:text-sm text-[#E8DCC3]/75 mt-2 sm:mt-3 leading-relaxed">
                  Nestled in the Cascade Foothills. Send us a note or ask questions regarding weddings, retreats, and directions.
                </p>
              </div>
            </AlderAshReveal>

            <div className={`grid ${gridContact}`}>
              
              {/* Left Column: Contact Form */}
              <AlderAshReveal direction="up" delay={0.1} className={isMobile || isTablet ? 'w-full' : 'lg:col-span-7'}>
                <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#F5EFE3]/[0.05] border border-[#F5EFE3]/10 backdrop-blur-md space-y-5 h-full">
                  <h3 className="font-serif text-lg sm:text-xl text-[#F5EFE3]">Send a Message to the Lodge</h3>
                  
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      showToast('Message sent! Our front desk will respond within 24 hours.');
                      (e.target as HTMLFormElement).reset();
                    }}
                    className="space-y-4"
                  >
                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'} gap-4`}>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#E8DCC3] mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Elena Vance"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-[#D98F4A] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#E8DCC3] mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="elena@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-[#D98F4A] outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#E8DCC3] mb-1.5">
                        What is this regarding?
                      </label>
                      <select className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B241C] border border-white/10 text-[#F5EFE3] text-xs focus:border-[#D98F4A] outline-none cursor-pointer">
                        <option>General Lodge Inquiry</option>
                        <option>Wedding or Private Group Retreat</option>
                        <option>Hearth Room Dining Reservations</option>
                        <option>Accessibility Accommodations</option>
                        <option>Press &amp; Photography Access</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#E8DCC3] mb-1.5">
                        Your Message *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about your upcoming dates or questions..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-[#D98F4A] outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D98F4A] to-[#E8A86B] text-[#120B04] text-xs font-bold shadow-lg shadow-[#D98F4A]/25 hover:shadow-[#D98F4A]/40 transition-all cursor-pointer"
                    >
                      Send Dispatch to Front Desk
                    </button>
                  </form>
                </div>
              </AlderAshReveal>

              {/* Right Column: Address & Map Info */}
              <AlderAshReveal direction="up" delay={0.2} className={isMobile || isTablet ? 'w-full' : 'lg:col-span-5'}>
                <div className="space-y-6 h-full">
                  
                  {/* Contact Card */}
                  <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#F5EFE3]/[0.05] border border-[#F5EFE3]/10 backdrop-blur-md space-y-4">
                    <h4 className="font-serif text-base sm:text-lg text-[#F5EFE3]">Lodge Contact Info</h4>
                    
                    <div className="space-y-3 text-xs text-[#E8DCC3]">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-[#D98F4A] shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-white">Alder &amp; Ash Lodge</p>
                          <p className="text-[#E8DCC3]/70">4420 Alder Creek Road, Cascade Foothills, WA 98288</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-[#D98F4A] shrink-0" />
                        <span>(555) 019-2244 • 7am – 10pm daily</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-[#D98F4A] shrink-0" />
                        <span>stay@alderandash.example</span>
                      </div>
                    </div>
                  </div>

                {/* Getting Here Guide */}
                <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#F5EFE3]/[0.05] border border-[#F5EFE3]/10 backdrop-blur-md space-y-3 text-xs text-[#E8DCC3]/80">
                  <h4 className="font-serif text-base sm:text-lg text-[#F5EFE3]">Arrival &amp; Transit Directions</h4>
                  <p>
                    <strong className="text-white">From Seattle (2.5 hrs):</strong> Take Highway 2 East past Index to Milepost 38. Turn right onto Alder Creek Forest Road. Continue 4 miles past the timber bridge.
                  </p>
                  <p>
                    <strong className="text-white">From Portland (3 hrs):</strong> Take I-5 North to Highway 522 East, joining US-2 toward the Cascade passes.
                  </p>
                  <p className="text-[11px] text-[#D98F4A]">
                    * Note: Cellular GPS signals fade 5 miles before the property. We email an offline PDF trail map upon booking.
                  </p>
                </div>
              </div>
            </AlderAshReveal>

            </div>
          </div>
        )}

        {/* RESORT FOOTER */}
        <AlderAshFooter
          onPageChange={setActivePage}
          onOpenBooking={() => handleOpenBooking()}
          onToast={showToast}
          deviceMode={deviceMode}
        />

        {/* MOBILE STICKY RESERVATION BAR */}
        <AlderAshMobileBookingBar
          onOpenBooking={() => handleOpenBooking()}
          deviceMode={deviceMode}
        />

        {/* ========================================================
            MODALS & OVERLAYS
        ======================================================== */}
        {/* 1. Booking Modal */}
        <AlderAshBookingModal
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
          preselectedRoomId={preselectedRoomId}
          onToast={showToast}
          deviceMode={deviceMode}
        />

        {/* 2. Room Detail Modal */}
        <AlderAshRoomModal
          room={detailRoom}
          onClose={() => setDetailRoom(null)}
          onBookRoom={(roomId) => {
            setDetailRoom(null);
            handleOpenBooking(roomId);
          }}
          deviceMode={deviceMode}
        />

        {/* 3. Journal Article Modal */}
        <AlderAshArticleModal
          post={detailPost}
          onClose={() => setDetailPost(null)}
          onToast={showToast}
          deviceMode={deviceMode}
        />

        {/* 4. Fullscreen Lightbox */}
        {lightboxIndex !== null && (
          <AlderAshLightbox
            item={filteredGallery[lightboxIndex]}
            onClose={() => setLightboxIndex(null)}
            onPrev={() => {
              setLightboxIndex((prev) => 
                prev !== null ? (prev === 0 ? filteredGallery.length - 1 : prev - 1) : 0
              );
            }}
            onNext={() => {
              setLightboxIndex((prev) => 
                prev !== null ? (prev === filteredGallery.length - 1 ? 0 : prev + 1) : 0
              );
            }}
            deviceMode={deviceMode}
          />
        )}

        {/* 5. Floating Toast Notification */}
        {toastMessage && (
          <div className={`fixed z-50 ${
            isMobile 
              ? 'bottom-20 left-4 right-4 max-w-[360px] mx-auto justify-center' 
              : 'bottom-6 right-6'
          } px-4 py-3 rounded-2xl bg-[#091A14]/95 border border-[#D98F4A]/50 text-white text-xs font-semibold shadow-2xl backdrop-blur-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-200`}>
            <div className="w-6 h-6 rounded-full bg-[#D98F4A]/20 flex items-center justify-center text-[#D98F4A] shrink-0">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <span>{toastMessage}</span>
          </div>
        )}

      </div>
    </div>
  );
}
