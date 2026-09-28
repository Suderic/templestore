import { Product, ProductMaterial } from './types';

export const LUMINA_MATERIALS: ProductMaterial[] = [
  {
    id: 'boucle-cream',
    name: 'Oatmeal Wool Bouclé',
    colorHex: '#f3ece2',
    gradient: 'linear-gradient(135deg, #fdfbf7, #e8dfd3)',
    textureLabel: 'Tactile Wool & Alpaca Blend'
  },
  {
    id: 'smoked-oak',
    name: 'Smoked European Oak',
    colorHex: '#3b2f27',
    gradient: 'linear-gradient(135deg, #4a3c33, #29201a)',
    textureLabel: 'Solid FSC-Certified Timber'
  },
  {
    id: 'natural-oak',
    name: 'Natural White Oak',
    colorHex: '#d8b98b',
    gradient: 'linear-gradient(135deg, #e8cd9f, #c7a46f)',
    textureLabel: 'Matte Oil Protected Hardwood'
  },
  {
    id: 'brushed-brass',
    name: 'Brushed Brass Gold',
    colorHex: '#d4af37',
    gradient: 'linear-gradient(135deg, #eab308, #ca8a04)',
    textureLabel: 'Solid Machined Brass'
  },
  {
    id: 'matte-charcoal',
    name: 'Matte Charcoal Slate',
    colorHex: '#18181b',
    gradient: 'linear-gradient(135deg, #27272a, #09090b)',
    textureLabel: 'Anodized Aircraft Aluminum'
  },
  {
    id: 'french-flax',
    name: 'Natural Sage Linen',
    colorHex: '#9ba897',
    gradient: 'linear-gradient(135deg, #b0bead, #869482)',
    textureLabel: 'Pre-Washed Normandy Flax'
  }
];

export const LUMINA_PRODUCTS: Product[] = [
  // =========================================================================
  // 1. FURNITURE & SEATING
  // =========================================================================
  {
    id: 'koto-boucle-lounge-chair',
    slug: 'koto-boucle-lounge-chair',
    name: 'Koto Ergonomic Bouclé Lounge Chair',
    subtitle: 'Sculptural silhouette with solid smoked oak legs and high-resilience foam',
    category: 'furniture',
    categoryLabel: 'Furniture & Seating',
    price: 890,
    originalPrice: 1050,
    rating: 4.9,
    reviewsCount: 42,
    badge: 'Bestseller',
    badgeType: 'bestseller',
    readyToDeliver: true,
    images: {
      hero: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80',
      ambient: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      detail: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
    },
    materials: [LUMINA_MATERIALS[0], LUMINA_MATERIALS[4], LUMINA_MATERIALS[5]],
    defaultMaterialId: 'boucle-cream',
    sizes: [
      { label: 'Single Accent Lounge', dimensions: '820 x 780 x 740 mm', priceDelta: 0 },
      { label: 'Lounge + Matching Ottoman', dimensions: 'Set with 550mm Footstool', priceDelta: 260 }
    ],
    defaultSizeIndex: 0,
    bulletPoints: [
      'Heavyweight 580g/m² tactile bouclé fabric with hydrophobic stain protection',
      'Solid FSC European smoked oak frame joined with traditional mortise & tenon',
      'Dual-density high-resilience memory foam core contours to your posture',
      'Delivered fully assembled in custom protective crating'
    ],
    description: `The Koto Lounge Chair is a study in quiet sculptural confidence. Designed in Copenhagen and handcrafted from sustainable European timber, its enveloping curve offers generous lumbar support while making an undeniable architectural statement in living spaces, library corners, and master suites.`,
    specifications: {
      materialsUsed: 'Oatmeal Wool Bouclé (70% Wool, 30% Alpaca), Solid European Smoked Oak',
      origin: 'Handcrafted in Portugal',
      dimensions: '820mm Width × 780mm Depth × 740mm Height (Seat Height: 410mm)',
      weight: '22 kg',
      careInstructions: 'Spot clean with mild wool detergent or professional upholstery cleaning.',
      warrantyYears: 10,
      leadTime: 'In Stock • Dispatches in 24-48 hours'
    },
    reviews: [
      {
        id: 'rev-1',
        author: 'Elena Rostova',
        location: 'Melbourne, VIC',
        rating: 5,
        date: '2 weeks ago',
        title: 'The bouclé texture is absolute luxury',
        comment: 'We ordered two for our formal living area. Incredibly supportive to sit in for hours and the craftsmanship of the oak legs is immaculate.',
        verifiedPurchase: true,
        projectType: 'Architectural Residence'
      }
    ]
  },
  {
    id: 'norden-solid-oak-dining-table',
    slug: 'norden-solid-oak-dining-table',
    name: 'Norden Solid White Oak Dining Table',
    subtitle: 'Full-plank European white oak with soft chamfered under-bevel and matte oil finish',
    category: 'furniture',
    categoryLabel: 'Furniture & Seating',
    price: 1480,
    originalPrice: 1750,
    rating: 5.0,
    reviewsCount: 31,
    badge: 'Design Award',
    badgeType: 'luxury',
    readyToDeliver: true,
    images: {
      hero: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
      ambient: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      detail: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80'
    },
    materials: [LUMINA_MATERIALS[2], LUMINA_MATERIALS[1]],
    defaultMaterialId: 'natural-oak',
    sizes: [
      { label: '6-Seater (1800 x 950 mm)', dimensions: '1800 x 950 x 750 mm', priceDelta: 0 },
      { label: '8-Seater (2200 x 1000 mm)', dimensions: '2200 x 1000 x 750 mm', priceDelta: 310 },
      { label: '10-Seater Banquet (2600 x 1050 mm)', dimensions: '2600 x 1050 x 750 mm', priceDelta: 580 }
    ],
    defaultSizeIndex: 1,
    bulletPoints: [
      'Solid 38mm solid full-length continuous grain European oak planks',
      'Hand-finished with plant-based VOC-free Osmo matte oil',
      'Engineered steel expansion channels underneath prevent seasonal warping',
      'Chamfered edge creates an elegant, visually weightless floating profile'
    ],
    description: `Built for a lifetime of communal gatherings, the Norden Dining Table celebrates the honest beauty of natural timber grain. Each tabletop is book-matched by hand to ensure continuous character lines and smooth transitions.`,
    specifications: {
      materialsUsed: '100% Solid European White Oak (FSC Certified), Steel Stability Brackets',
      origin: 'Crafted in Slovenia',
      dimensions: '2200mm Length × 1000mm Width × 750mm Height (Seats 8-10)',
      weight: '68 kg',
      careInstructions: 'Wipe with damp cloth. Re-oil annually with natural Osmo wood wax.',
      warrantyYears: 10,
      leadTime: 'In Stock • White-Glove In-Room Delivery'
    },
    reviews: [
      {
        id: 'rev-2',
        author: 'Julian M.',
        location: 'Sydney, NSW',
        rating: 5,
        date: '1 month ago',
        title: 'Centerpiece of our open-plan home',
        comment: 'The 2200mm size comfortably fits 8 chairs. The feel of the smooth solid oak underhand is unmatched.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'bari-fluted-walnut-credenza',
    slug: 'bari-fluted-walnut-credenza',
    name: 'Bari Fluted Walnut Media Credenza',
    subtitle: 'Precision CNC fluted tambour sliding doors with integrated wire management',
    category: 'furniture',
    categoryLabel: 'Furniture & Seating',
    price: 1290,
    originalPrice: 1490,
    rating: 4.8,
    reviewsCount: 26,
    badge: 'New Release',
    badgeType: 'new',
    readyToDeliver: true,
    images: {
      hero: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
      ambient: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
      detail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
    },
    materials: [LUMINA_MATERIALS[1], LUMINA_MATERIALS[2]],
    defaultMaterialId: 'smoked-oak',
    sizes: [
      { label: 'Medium (1600 mm)', dimensions: '1600 x 450 x 580 mm', priceDelta: 0 },
      { label: 'Large (2000 mm Grand Credenza)', dimensions: '2000 x 450 x 580 mm', priceDelta: 240 }
    ],
    defaultSizeIndex: 0,
    bulletPoints: [
      'Architectural 3D vertical fluting across continuous sliding tambour doors',
      'Acoustically transparent slat openings allow remote IR and audio passthrough',
      'Solid brass inset leveling feet and soft-closing internal shelf bays',
      'Rear ventilation ports keep amplifiers and gaming consoles cool'
    ],
    description: `The Bari Credenza marries functional entertainment storage with mid-century architectural rhythm. The seamless fluted slats slide effortlessly along curved tracks, concealing AV components without blocking ventilation.`,
    specifications: {
      materialsUsed: 'American Black Walnut Veneer over High-Density Core, Solid Brass Hardware',
      origin: 'Designed in Melbourne, Australia',
      dimensions: '1600mm W × 450mm D × 580mm H',
      weight: '48 kg',
      careInstructions: 'Dust with soft dry microfiber cloth. Avoid direct window UV exposure.',
      warrantyYears: 5,
      leadTime: 'Dispatches within 3 business days'
    },
    reviews: []
  },

  // =========================================================================
  // 2. ARCHITECTURAL LIGHTING
  // =========================================================================
  {
    id: 'komorebi-sculptural-pendant',
    slug: 'komorebi-sculptural-pendant',
    name: 'Komorebi Sculptural Brass Chandelier',
    subtitle: 'Mouth-blown frosted opal glass spheres on hand-finished brushed brass arms',
    category: 'lighting',
    categoryLabel: 'Architectural Lighting',
    price: 680,
    originalPrice: 820,
    rating: 4.9,
    reviewsCount: 38,
    badge: 'Popular',
    badgeType: 'bestseller',
    readyToDeliver: true,
    images: {
      hero: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80',
      ambient: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80',
      detail: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80'
    },
    materials: [LUMINA_MATERIALS[3], LUMINA_MATERIALS[4]],
    defaultMaterialId: 'brushed-brass',
    sizes: [
      { label: '6-Globe Chandelier (950mm Span)', dimensions: '950 x 950 x 600 mm', priceDelta: 0 },
      { label: '8-Globe Statement Grand (1250mm Span)', dimensions: '1250 x 1250 x 750 mm', priceDelta: 210 }
    ],
    defaultSizeIndex: 0,
    bulletPoints: [
      'High-CRI 97+ warm dimmable illumination (2200K sunset to 3000K warm gold)',
      'Triplex mouth-blown frosted glass diffuses glare for velvety dining light',
      'Solid brushed brass armature with anti-tarnish protective micro-coating',
      'Compatible with standard wall dimmers and smart home automation'
    ],
    description: `Inspired by the Japanese concept of sunlight filtering through leaves, the Komorebi pendant casts a gentle, ambient glow over dining tables and kitchen islands. Each glass sphere is mouth-blown by skilled artisans.`,
    specifications: {
      materialsUsed: 'Hand-Spun Solid Brass, Mouth-Blown Acid-Etched Opal Glass',
      origin: 'Veneto, Italy',
      dimensions: '950mm Diameter × 600mm Drop (Adjustable drop rod up to 1500mm)',
      weight: '7.5 kg',
      careInstructions: 'Wipe glass with lint-free microfiber cloth when cool.',
      warrantyYears: 5,
      leadTime: 'In Stock • Ships in 24 hours'
    },
    reviews: []
  },
  {
    id: 'kanso-cast-aluminum-table-lamp',
    slug: 'kanso-cast-aluminum-table-lamp',
    name: 'Kanso Wireless Cast Aluminum Table Lamp',
    subtitle: 'Portable rechargeable lamp with tactile rotational dimmer and 20h battery',
    category: 'lighting',
    categoryLabel: 'Architectural Lighting',
    price: 320,
    originalPrice: 380,
    rating: 4.8,
    reviewsCount: 54,
    badge: 'Staff Pick',
    badgeType: 'new',
    readyToDeliver: true,
    images: {
      hero: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80',
      ambient: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80',
      detail: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80'
    },
    materials: [LUMINA_MATERIALS[4], LUMINA_MATERIALS[3]],
    defaultMaterialId: 'matte-charcoal',
    sizes: [
      { label: 'Standard Desk / Bedside', dimensions: '160 x 160 x 280 mm', priceDelta: 0 },
      { label: 'Pair (Set of 2 Bedside Lamps)', dimensions: 'Two Matching 280mm Lamps', priceDelta: 270 }
    ],
    defaultSizeIndex: 0,
    bulletPoints: [
      'Cordless 20-hour battery life with USB-C magnetic charging dock included',
      'Precision knurled brass dial smoothly dims from candlelight glow to reading task light',
      'Solid die-cast aluminum chassis provides weighty, stable tabletop presence',
      'IP44 splash resistance allows indoor and outdoor terrace dining use'
    ],
    description: `The Kanso lamp liberates architectural lighting from wall sockets. Pick it up from your bedside and carry it to the terrace or bookshelf. The knurled top knob delivers delightful mechanical tactile feedback.`,
    specifications: {
      materialsUsed: 'Die-Cast Anodized Aluminum, Knurled Brass, Warm 2700K LED',
      origin: 'Stockholm, Sweden',
      dimensions: '160mm Base × 280mm Height',
      weight: '1.4 kg',
      careInstructions: 'Clean with damp cloth. Battery charges to 100% in 3.5 hours.',
      warrantyYears: 3,
      leadTime: 'In Stock • Ships in 24 hours'
    },
    reviews: []
  },
  {
    id: 'linear-magnetic-track-sconce',
    slug: 'linear-magnetic-track-sconce',
    name: 'Linear Magnetic Architectural Wall Sconce',
    subtitle: 'Slimline wall bar with 360° rotational spotlight and ambient wall wash',
    category: 'lighting',
    categoryLabel: 'Architectural Lighting',
    price: 440,
    originalPrice: 510,
    rating: 4.7,
    reviewsCount: 19,
    badge: 'Minimalist',
    badgeType: 'luxury',
    readyToDeliver: true,
    images: {
      hero: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&q=80',
      ambient: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80',
      detail: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
    },
    materials: [LUMINA_MATERIALS[4], LUMINA_MATERIALS[3]],
    defaultMaterialId: 'matte-charcoal',
    sizes: [
      { label: '600mm Wall Bar', dimensions: '600 x 40 x 60 mm', priceDelta: 0 },
      { label: '900mm Gallery Bar', dimensions: '900 x 40 x 60 mm', priceDelta: 90 }
    ],
    defaultSizeIndex: 0,
    bulletPoints: [
      'Dual optical channels: diffuse rear wall wash plus adjustable task spotlight',
      'Integrated touch sensor on the aluminum endcap for on/off and stepless dimming',
      'Hardwired or plug-in flexible installation with color-matched textile cord',
      'Flicker-free driver certified for video calls and reading'
    ],
    description: `A minimalist favorite for bedside reading, hallway gallery art illumination, and architectural accentuation. The magnetic spot snaps firmly into place and swivels freely in any direction.`,
    specifications: {
      materialsUsed: 'Extruded Aircraft Aluminum, Optical PMMA Diffuser, Neodymium Magnets',
      origin: 'Designed in Zurich, Switzerland',
      dimensions: '600mm Length × 40mm Depth × 60mm Height',
      weight: '1.2 kg',
      careInstructions: 'Dust with dry cloth. LED rated for 50,000 operational hours.',
      warrantyYears: 5,
      leadTime: 'In Stock • Ships in 24 hours'
    },
    reviews: []
  },

  // =========================================================================
  // 3. SMART AUDIO & HOME TECH
  // =========================================================================
  {
    id: 'atelier-hi-fi-wireless-speaker',
    slug: 'atelier-hi-fi-wireless-speaker',
    name: 'Atelier Hi-Fi Acoustic Wireless Speaker',
    subtitle: '360° omnidirectional sound, Danish Kvadrat fabric grille & solid walnut top',
    category: 'audio-tech',
    categoryLabel: 'Audio & Living Tech',
    price: 590,
    originalPrice: 690,
    rating: 4.9,
    reviewsCount: 36,
    badge: 'Audiophile',
    badgeType: 'luxury',
    readyToDeliver: true,
    images: {
      hero: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1200&q=80',
      ambient: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80',
      detail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80'
    },
    materials: [LUMINA_MATERIALS[1], LUMINA_MATERIALS[0]],
    defaultMaterialId: 'smoked-oak',
    sizes: [
      { label: 'Single Hi-Fi Speaker', dimensions: '210 x 210 x 290 mm', priceDelta: 0 },
      { label: 'Stereo Pair (Left + Right Sync)', dimensions: 'Two Paired Room Speakers', priceDelta: 490 }
    ],
    defaultSizeIndex: 0,
    bulletPoints: [
      'Audiophile acoustic chamber with dual 4" woofers and silk dome tweeters',
      'Supports Apple AirPlay 2, Spotify Connect, Tidal Connect, and lossless Bluetooth 5.3',
      'Solid turned walnut control crown with capacitive touch track skip and volume',
      'Room-sensing acoustic calibration automatically balances sound to room size'
    ],
    description: `Bridging the gap between high-end furniture and studio sound. The Atelier speaker blends into your interior decor like an art object while filling open-plan rooms with deep, resonant, distortion-free sound.`,
    specifications: {
      materialsUsed: 'Solid American Walnut, Kvadrat Custom Acoustic Wool, Anodized Metal Base',
      origin: 'Engineered in Berlin, Germany',
      dimensions: '210mm Diameter × 290mm Height',
      weight: '4.8 kg',
      careInstructions: 'Gently vacuum fabric grille with soft brush attachment.',
      warrantyYears: 3,
      leadTime: 'In Stock • Ships in 24 hours'
    },
    reviews: []
  },
  {
    id: 'nomad-dual-magsafe-valet-tray',
    slug: 'nomad-dual-magsafe-valet-tray',
    name: 'Nomad Dual MagSafe Leather Valet Tray',
    subtitle: 'Machined aircraft aluminum charging tray wrapped in full-grain Italian leather',
    category: 'audio-tech',
    categoryLabel: 'Audio & Living Tech',
    price: 180,
    originalPrice: 220,
    rating: 4.8,
    reviewsCount: 62,
    badge: 'Everyday Carry',
    badgeType: 'new',
    readyToDeliver: true,
    images: {
      hero: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1200&q=80',
      ambient: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1200&q=80',
      detail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80'
    },
    materials: [LUMINA_MATERIALS[4], LUMINA_MATERIALS[3]],
    defaultMaterialId: 'matte-charcoal',
    sizes: [
      { label: 'Dual Pad (Phone + Watch / AirPods)', dimensions: '280 x 180 x 18 mm', priceDelta: 0 },
      { label: 'Executive Trio Tray with Key Catch', dimensions: '360 x 220 x 20 mm', priceDelta: 50 }
    ],
    defaultSizeIndex: 0,
    bulletPoints: [
      'Fast 15W Qi2 certified wireless charging for iPhone and Android devices',
      'Dedicated Apple Watch fast-charging puck and AirPods Qi indent',
      'Milled from a single solid block of aluminum with non-slip weighted silicone base',
      'Vegetable-tanned leather surface patinas handsomely over years of use'
    ],
    description: `Declutter your nightstand or entryway console. Keep your everyday essentials organized, charged, and beautifully presented in one sleek, weighted tray.`,
    specifications: {
      materialsUsed: 'CNC-Milled Aerospace Aluminum, Italian Tuscan Full-Grain Leather',
      origin: 'Milan, Italy',
      dimensions: '280mm L × 180mm W × 18mm H',
      weight: '620 g',
      careInstructions: 'Condition leather occasionally with natural beeswax cream.',
      warrantyYears: 3,
      leadTime: 'In Stock • Ships in 24 hours'
    },
    reviews: []
  },

  // =========================================================================
  // 4. CERAMICS & TABLEWARE
  // =========================================================================
  {
    id: 'kuro-matte-stoneware-dinner-set',
    slug: 'kuro-matte-stoneware-dinner-set',
    name: 'Kuro Matte Stoneware 16-Piece Dinnerware Set',
    subtitle: 'Hand-thrown artisanal ceramics with satin matte glaze and unglazed raw rim',
    category: 'tableware',
    categoryLabel: 'Ceramics & Tableware',
    price: 240,
    originalPrice: 290,
    rating: 4.9,
    reviewsCount: 47,
    badge: 'Bestseller',
    badgeType: 'bestseller',
    readyToDeliver: true,
    images: {
      hero: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1200&q=80',
      ambient: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=80',
      detail: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80'
    },
    materials: [LUMINA_MATERIALS[4], LUMINA_MATERIALS[0]],
    defaultMaterialId: 'matte-charcoal',
    sizes: [
      { label: '16-Piece Complete Service for 4', dimensions: 'Plates, Salad, Bowls, Mugs', priceDelta: 0 },
      { label: '32-Piece Banquet Service for 8', dimensions: 'Complete Service for 8 + Serving Platter', priceDelta: 210 }
    ],
    defaultSizeIndex: 0,
    bulletPoints: [
      'Includes 4 Dinner Plates, 4 Salad Plates, 4 Soup/Pasta Bowls, 4 Everyday Mugs',
      'High-fired durable stoneware is microwave, dishwasher, and oven-safe to 220°C',
      'Satin matte reactive glaze creates subtle organic tone variations across every dish',
      'Stackable design with scratch-resistant surface engineered for daily dining'
    ],
    description: `Elevate daily meals into a mindful dining experience. The Kuro set balances Japanese wabi-sabi simplicity with heavy, tactile durability that withstands decades of daily use and dinner parties.`,
    specifications: {
      materialsUsed: 'High-Fired Natural Stoneware Clay, Non-Toxic Food-Grade Satin Glaze',
      origin: 'Kyoto, Japan',
      dimensions: 'Dinner: 270mm • Salad: 210mm • Bowl: 170mm (750ml) • Mug: 350ml',
      weight: '9.8 kg (Set of 16)',
      careInstructions: 'Dishwasher safe. Microwave safe. Avoid sudden extreme temperature shock.',
      warrantyYears: 5,
      leadTime: 'In Stock • Ships in 24 hours'
    },
    reviews: []
  },
  {
    id: 'ripple-handblown-crystal-tumblers',
    slug: 'ripple-handblown-crystal-tumblers',
    name: 'Ripple Handblown Fluted Crystal Tumblers (Set of 6)',
    subtitle: 'Fine mouth-blown lead-free crystal with architectural ribbed vertical fluting',
    category: 'tableware',
    categoryLabel: 'Ceramics & Tableware',
    price: 120,
    originalPrice: 150,
    rating: 4.8,
    reviewsCount: 33,
    badge: 'Trending',
    badgeType: 'new',
    readyToDeliver: true,
    images: {
      hero: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
      ambient: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1200&q=80',
      detail: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80'
    },
    materials: [LUMINA_MATERIALS[0]],
    defaultMaterialId: 'boucle-cream',
    sizes: [
      { label: 'Set of 6 Tumblers (320ml)', dimensions: 'Set of 6 x 320ml Glasses', priceDelta: 0 },
      { label: 'Tumbler + Matching Carafe Set', dimensions: '6 Tumblers + 1000ml Wine/Water Carafe', priceDelta: 65 }
    ],
    defaultSizeIndex: 0,
    bulletPoints: [
      'Handcrafted from ultra-clear, lead-free European crystal glass',
      'Tactile fluted ripples catch light brilliantly with iced cocktails and water',
      'Laser-cut thin rim enhances the sensory aroma and tasting experience',
      'Dishwasher safe on gentle glass cycle with reinforced thermal resistance'
    ],
    description: `Light dances through every ridge. The Ripple series brings an unmistakable air of mid-century sophistication to your bar cart and dinner table.`,
    specifications: {
      materialsUsed: 'Mouth-Blown Lead-Free Barium Crystal Glass',
      origin: 'Bohemia, Czech Republic',
      dimensions: '85mm Diameter × 95mm Height (320ml Capacity each)',
      weight: '1.2 kg',
      careInstructions: 'Dishwasher safe. Handwash recommended for optimal crystal clarity.',
      warrantyYears: 2,
      leadTime: 'In Stock • Ships in 24 hours'
    },
    reviews: []
  },

  // =========================================================================
  // 5. TEXTILES & BEDDING SANCTUARY
  // =========================================================================
  {
    id: 'normandy-washed-french-linen-set',
    slug: 'normandy-washed-french-linen-set',
    name: 'Normandy Washed French Linen Bedding Set',
    subtitle: '100% certified French flax, garment pre-washed with pumice stone for supreme softness',
    category: 'textiles',
    categoryLabel: 'Linen & Textiles',
    price: 310,
    originalPrice: 380,
    rating: 4.9,
    reviewsCount: 78,
    badge: 'Bestseller',
    badgeType: 'bestseller',
    readyToDeliver: true,
    images: {
      hero: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
      ambient: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
      detail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
    },
    materials: [LUMINA_MATERIALS[5], LUMINA_MATERIALS[0], LUMINA_MATERIALS[4]],
    defaultMaterialId: 'french-flax',
    sizes: [
      { label: 'Queen Bed Set (Duvet + 2 Shams)', dimensions: '210 x 210 cm + 50 x 75 cm', priceDelta: 0 },
      { label: 'King Bed Set (Duvet + 2 Shams)', dimensions: '245 x 210 cm + 50 x 75 cm', priceDelta: 40 },
      { label: 'Super King Complete Bundle (+ Fitted Sheet)', dimensions: 'Complete Luxury Bundle', priceDelta: 110 }
    ],
    defaultSizeIndex: 0,
    bulletPoints: [
      'Grown in Normandy, France from 100% natural, pesticide-free flax fibers',
      'Naturally thermo-regulating: breathes cool in summer, traps warmth in winter',
      'Becomes increasingly softer and more supple with every home laundry cycle',
      'Hidden natural shell button closure and interior duvet corner tie straps'
    ],
    description: `Sleep in effortless natural comfort. Pure French linen is the ultimate bedding material—hypoallergenic, moisture-wicking, and naturally textured with a lived-in drape that requires zero ironing.`,
    specifications: {
      materialsUsed: '100% Certified French Flax Linen (OEKO-TEX Standard 100 Certified)',
      origin: 'Normandy, France',
      dimensions: 'Queen: 210 × 210 cm | King: 245 × 210 cm',
      weight: '2.6 kg',
      careInstructions: 'Machine wash warm (40°C) with mild detergent. Tumble dry low or line dry.',
      warrantyYears: 3,
      leadTime: 'In Stock • Ships in 24 hours'
    },
    reviews: []
  },
  {
    id: 'alpaca-waffle-weave-throw-blanket',
    slug: 'alpaca-waffle-weave-throw-blanket',
    name: 'Alpaca Waffle Weave Heirloom Throw Blanket',
    subtitle: 'Featherweight Peruvian baby alpaca and organic merino wool blend with eyelash fringe',
    category: 'textiles',
    categoryLabel: 'Linen & Textiles',
    price: 190,
    originalPrice: 240,
    rating: 5.0,
    reviewsCount: 29,
    badge: 'Pure Luxury',
    badgeType: 'luxury',
    readyToDeliver: true,
    images: {
      hero: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
      ambient: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
      detail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80'
    },
    materials: [LUMINA_MATERIALS[0], LUMINA_MATERIALS[5], LUMINA_MATERIALS[4]],
    defaultMaterialId: 'boucle-cream',
    sizes: [
      { label: 'Standard Throw (140 x 200 cm)', dimensions: '1400 x 2000 mm', priceDelta: 0 },
      { label: 'Oversized Daybed Throw (160 x 240 cm)', dimensions: '1600 x 2400 mm', priceDelta: 60 }
    ],
    defaultSizeIndex: 0,
    bulletPoints: [
      'Ultra-soft 60% Peruvian Baby Alpaca, 40% Extra-Fine Australian Merino Wool',
      'Breathable 3D waffle honeycomb weave provides cloud-like thermal warmth without weight',
      'Lanolin-free and hypoallergenic for sensitive skin; zero prickle feel',
      'Hand-twisted eyelash fringe detailing along both ends'
    ],
    description: `Drape over your lounge chair or fold at the foot of your bed. The delicate honeycomb waffle weave traps pockets of warm air while feeling light as a summer cloud.`,
    specifications: {
      materialsUsed: '60% Baby Alpaca, 40% Merino Wool (Cruelty-Free Sheared)',
      origin: 'Arequipa, Peru',
      dimensions: '1400mm × 2000mm (Includes 80mm fringe)',
      weight: '680 g',
      careInstructions: 'Dry clean or gentle hand wash in cold water with wool wash. Lay flat to dry.',
      warrantyYears: 3,
      leadTime: 'In Stock • Ships in 24 hours'
    },
    reviews: []
  }
];

export const LUMINA_CATEGORIES = [
  { id: 'all', name: 'All Collections', count: LUMINA_PRODUCTS.length, icon: 'Sparkles' },
  { id: 'furniture', name: 'Furniture & Seating', count: 3, icon: 'Armchair' },
  { id: 'lighting', name: 'Architectural Lighting', count: 3, icon: 'Lamp' },
  { id: 'audio-tech', name: 'Audio & Living Tech', count: 2, icon: 'Speaker' },
  { id: 'tableware', name: 'Ceramics & Dining', count: 2, icon: 'Utensils' },
  { id: 'textiles', name: 'Bedding & Textiles', count: 2, icon: 'Layers' }
];

export const LUMINA_TRUST_POINTS = [
  {
    icon: 'ShieldCheck',
    title: '10-Year Craftsmanship Guarantee',
    description: 'Every timber joint, upholstery stitch, and electrical component is covered under our decade-long replacement warranty.'
  },
  {
    icon: 'Truck',
    title: 'White-Glove In-Home Delivery',
    description: 'Complimentary room-of-choice placement and packaging removal on all furniture orders over $150 across ANZ.'
  },
  {
    icon: 'RotateCcw',
    title: '30-Day In-Home Trial',
    description: 'Experience how our pieces feel in your natural home lighting. Returns accepted within 30 days, zero hassle.'
  },
  {
    icon: 'Sparkles',
    title: 'Sustainable FSC-Certified Materials',
    description: 'Ethically harvested solid hardwoods, organic French flax linen, and VOC-free plant-based protective finishes.'
  },
  {
    icon: 'Award',
    title: 'Architectural Trade Program',
    description: 'Exclusive 20% trade pricing, custom dimension fabrication, and dedicated concierge specs for design studios.'
  },
  {
    icon: 'Headphones',
    title: 'Dedicated Design Concierge',
    description: 'Complimentary interior styling advice, free fabric and timber swatch kits dispatched to your door.'
  }
];

// Backwards compatibility aliases to prevent client browser HMR / Turbopack cache desync
export const GALAXY_CATEGORIES = LUMINA_CATEGORIES;
export const GALAXY_PRODUCTS = LUMINA_PRODUCTS;
export const GALAXY_TRUST_POINTS = LUMINA_TRUST_POINTS;
export const GALAXY_TRUST_FEATURES = LUMINA_TRUST_POINTS;

