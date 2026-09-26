import { 
  ResortRoom, 
  ResortMenuItem, 
  ResortExperience, 
  ResortGalleryItem, 
  ResortBlogPost, 
  ResortFaq, 
  ResortAddOn 
} from './types';

export const RESORT_ROOMS: ResortRoom[] = [
  {
    id: 'solo-cabin',
    name: 'Solo Cabin',
    type: 'solo',
    rate: 210,
    capacity: '1 Guest',
    beds: '1 Queen Bed',
    view: 'Fern Understory & Pine Grove',
    size: '340 sq ft',
    description: 'An intimate, handcrafted timber haven built for solo writers, artists, and nature seekers. Features a Jotul woodstove, private cedar porch, reading nook, and writing desk overlooking the ferns.',
    amenities: [
      'Jotul Cast Iron Woodstove',
      'Hand-carved Cedar Reading Desk',
      'Pendleton Wool Throws',
      'Walk-in Slate Rain Shower',
      'Pour-Over Coffee & Local Herb Tea',
      'WiFi-Free by Default (desk toggle available)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=900&auto=format&fit=crop&q=80',
    features: ['Woodstove', 'Porch Deck', 'Writing Nook']
  },
  {
    id: 'creekside-suite',
    name: 'Creekside Suite',
    type: 'couple',
    rate: 395,
    capacity: '2 Guests',
    beds: '1 King Bed',
    view: 'Alder Creek Rapids & Old Pine',
    size: '580 sq ft',
    description: 'Positioned twenty paces from Alder Creek, this romantic suite combines open-timber rafters with a private cedar soaking tub on the cantilevered deck. Drift off to the sound of flowing alpine water.',
    amenities: [
      'Private Outdoor Cedar Soaking Tub',
      'Double-sided River Stone Fireplace',
      'Plush Organic Linen King Bed',
      'Custom Timber Bar with Local Wines',
      'Binoculars & Field Flora Guides',
      'Heated Slate Bathroom Floors'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=900&auto=format&fit=crop&q=80',
    features: ['Private Tub', 'River View', 'Stone Fireplace']
  },
  {
    id: 'canopy-loft',
    name: 'Canopy Loft',
    type: 'couple',
    rate: 450,
    capacity: '2 Guests',
    beds: '1 King Bed',
    view: 'Panoramic Treetop Canopy & Mountain Ridge',
    size: '640 sq ft',
    description: 'Elevated fifteen feet into the Douglas fir branches with soaring cathedral windows. Features a skylight over the bed for stargazing and a private sunset deck with wood-fired cedar tub.',
    amenities: [
      'Floor-to-Ceiling Panoramic Glass',
      'Stargazing Bed Skylight',
      'Private Sunset Observation Deck',
      'Japanese Soaking Tub',
      'Hearth-side Wool Daybed',
      'Artisan Sourdough Breakfast Basket Daily'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900&auto=format&fit=crop&q=80',
    features: ['Treetop View', 'Soaking Tub', 'Skylight']
  },
  {
    id: 'family-cabin',
    name: 'Family Cabin',
    type: 'group',
    rate: 540,
    capacity: '4 Guests',
    beds: '2 Queen Beds',
    view: 'Sunlit Meadow & Cascade Foothills',
    size: '780 sq ft',
    description: 'Two separate bedrooms flanking a spacious central living room with a grand stone hearth, board game library, and full timber kitchen nook for relaxed family gatherings.',
    amenities: [
      'Two Private Bedrooms with Pocket Doors',
      'Central Hearth with Seasoned Alder Firewood',
      'Handcrafted Dining Table (Seats 6)',
      'Understory Kitchenette & French Press Station',
      'Covered Wrap-around Porch with Hammock',
      'Curated Board Game & Nature Book Library'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=900&auto=format&fit=crop&q=80',
    features: ['2 Bedrooms', 'Full Hearth', 'Kitchen Nook']
  },
  {
    id: 'timber-lodge',
    name: 'Timber Lodge House',
    type: 'group',
    rate: 820,
    capacity: '6 Guests',
    beds: '3 King / Queen Beds',
    view: 'Valley Overlook & Pine Ridge',
    size: '1,250 sq ft',
    description: 'A two-story reclaimed timber home with exposed mortise-and-tenon joints, chef kitchen, sunken living room, deep cedar hot tub, and private trail access onto the ridge.',
    amenities: [
      'Three En-suite Bedrooms',
      'Sunken Hearth Living Room',
      'Commercial-grade Timber Kitchen',
      'Expansive Deck with 6-person Cedar Hot Tub',
      'Outdoor Dining Table & Wood-fired BBQ',
      'Direct Private Trailhead Access'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=900&auto=format&fit=crop&q=80',
    features: ['3 Bedrooms', '6-Person Tub', 'Chef Kitchen']
  },
  {
    id: 'ridge-outpost',
    name: 'The Ridge Outpost',
    type: 'group',
    rate: 1180,
    capacity: '8-10 Guests',
    beds: '4 Bedrooms + Bunk Nook',
    view: '360° Alpine Wilderness & Starfield',
    size: '1,800 sq ft',
    description: 'The pinnacle retreat at Alder & Ash. Perched at our highest elevation, this magnificent timber estate includes a private outdoor cedar sauna, private geothermal hot springs, and dedicated hearth dining delivery.',
    amenities: [
      'Private Nordic Cedar Steam Sauna',
      'Natural Geothermal Thermal Pool Access',
      'Four Master Suites with Private Porches',
      'Grand Stone Fireplace & Expansive Library',
      'Dedicated Lodge Host & Luggage Transport',
      'Nightly Campfire Butler Service'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&auto=format&fit=crop&q=80',
    features: ['Private Sauna', 'Hot Springs Pool', 'Host Service']
  }
];

export const RESORT_MENUS: ResortMenuItem[] = [
  // Breakfast
  {
    id: 'b-1',
    name: 'Woodstove Porridge',
    category: 'breakfast',
    price: 12,
    description: 'Slow-simmered steel-cut oats, orchard apples, toasted hazelnuts, and dark maple from our own tapped trees.',
    dietary: ['Vegan', 'Gluten-Free Available'],
    foraged: true
  },
  {
    id: 'b-2',
    name: 'Trout & Farm Eggs',
    category: 'breakfast',
    price: 19,
    description: 'Creek-caught brook trout with charred butter, soft pasture eggs, pickled ramps, and toasted sourdough rye.',
    dietary: ['High Protein', 'Organic'],
    foraged: true
  },
  {
    id: 'b-3',
    name: 'Forager’s Toast',
    category: 'breakfast',
    price: 15,
    description: 'Wild forest chanterelles sauteed with thyme, whipped cultured butter, and fresh tarragon on wood-fired bread.',
    dietary: ['Vegetarian'],
    foraged: true
  },
  {
    id: 'b-4',
    name: 'Cascade Berry Skillet Cake',
    category: 'breakfast',
    price: 14,
    description: 'Warm cast-iron cornmeal pancake studded with huckleberries, served with cultured cream and pine sugar.',
    dietary: ['Vegetarian']
  },

  // Dinner
  {
    id: 'd-1',
    name: 'Fire-Roasted Root Plate',
    category: 'dinner',
    price: 28,
    description: 'Ember-baked winter squash, charred sweet leek, roasted parsnip, and creamy wild hazelnut butter.',
    dietary: ['Vegan', 'Gluten-Free'],
    foraged: true
  },
  {
    id: 'd-2',
    name: 'Cedar-Planked River Salmon',
    category: 'dinner',
    price: 34,
    description: 'Wild river salmon slowly roasted over alder wood on western red cedar planks, pine needle salt, and braised fiddleheads.',
    dietary: ['Gluten-Free', 'High Protein'],
    foraged: true
  },
  {
    id: 'd-3',
    name: 'Smoked Venison Loin',
    category: 'dinner',
    price: 38,
    description: 'Locally sourced venison, juniper berry reduction, celery root mash, and wilted dandelion greens.',
    dietary: ['Organic', 'Gluten-Free']
  },
  {
    id: 'd-4',
    name: 'Braised Morel & Spelt Pot Pie',
    category: 'dinner',
    price: 26,
    description: 'Early-season spring morels, sweet roasted garlic, garden thyme, and flaky butter pastry crust.',
    dietary: ['Vegetarian'],
    foraged: true
  },

  // Drinks
  {
    id: 'dr-1',
    name: 'Alder-Smoked Old Fashioned',
    category: 'drinks',
    price: 16,
    description: 'Small-batch rye whiskey, charred pine cone syrup, aromatic wood bitters, and flamed orange peel.',
    dietary: ['Alcoholic', 'House Specialty']
  },
  {
    id: 'dr-2',
    name: 'Wild Juniper & Tonic',
    category: 'drinks',
    price: 14,
    description: 'Botanical gin infused with foraged Cascade juniper berries, cedar bitters, and crisp tonic.',
    dietary: ['Alcoholic']
  },
  {
    id: 'dr-3',
    name: 'Hot Spiced Orchard Cider',
    category: 'drinks',
    price: 9,
    description: 'Unfiltered local apple cider steeped with star anise, cinnamon stick, and clove over the open fire.',
    dietary: ['Non-Alcoholic', 'Warm']
  },
  {
    id: 'dr-4',
    name: 'Pine Needle & Wild Mint Tea',
    category: 'drinks',
    price: 7,
    description: 'Freshly foraged white pine needles, wild spearmint, lemon verbena, and raw mountain wildflower honey.',
    dietary: ['Non-Alcoholic', 'Caffeine-Free'],
    foraged: true
  }
];

export const RESORT_EXPERIENCES: ResortExperience[] = [
  {
    id: 'exp-1',
    title: 'Guided Dawn Ridge Hike',
    duration: '2.5 Hours',
    price: 45,
    capacity: 'Max 8 Guests',
    time: '6:00 AM Daily',
    description: 'Ascend through morning mist to the eagle outlook ridge. Your guide shares tree and bird identification, ending with piping hot summit pour-over coffee as the sun hits the peaks.',
    included: ['Expert Naturalist Guide', 'Single-origin Pour-over Coffee', 'Trekking Poles & Daypack'],
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80',
    meetingPoint: 'Lodge Hearth Room Porch'
  },
  {
    id: 'exp-2',
    title: 'Geothermal Cedar Tub Soak',
    duration: '90 Minutes',
    price: 60,
    capacity: '1–2 Guests',
    time: 'Slots every 2 hours',
    description: 'A secluded private cedar soaking tub tucked under towering ferns. Natural mineral spring water heated with seasoned alder logs, accompanied by cold towels and mountain herb tea.',
    included: ['Private Cedar Bath Enclosure', 'Natural Thermal Mineral Water', 'Linen Robes & Herbal Cold Tea'],
    imageUrl: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&auto=format&fit=crop&q=80',
    meetingPoint: 'Forest Spa Bathhouse Pavilion'
  },
  {
    id: 'exp-3',
    title: 'Calm-Water River Kayaking',
    duration: '2.0 Hours',
    price: 55,
    capacity: 'Max 6 Guests',
    time: '10:00 AM & 2:00 PM',
    description: 'Paddle the tranquil mirror waters of Alder Creek and the lower estuary. Spot river otters, bald eagles, and ancient driftwood bars with a certified wilderness kayak guide.',
    included: ['Handcrafted Wooden Kayaks', 'Life Vests & Dry Bags', 'River Safety Briefing'],
    imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=80',
    meetingPoint: 'Lower Creek Boat Launch'
  },
  {
    id: 'exp-4',
    title: 'Sunrise Forest Deck Yoga',
    duration: '60 Minutes',
    price: 30,
    capacity: 'Max 12 Guests',
    time: '7:30 AM Daily',
    description: 'A slow, grounding vinyasa practice held on our elevated moss deck suspended over the creek. Breathe in crisp cedar aroma as morning fog dissipates into the canopy.',
    included: ['Organic Cork Mats & Blocks', 'Wool Warm-up Blankets', 'Warm Herbal Elixir Post-Session'],
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80',
    meetingPoint: 'Moss Deck Pavilion'
  },
  {
    id: 'exp-5',
    title: 'Midnight Stargazing Deck',
    duration: 'Open All Night',
    price: 0,
    capacity: 'All Lodge Guests',
    time: 'Sunset to Dawn',
    description: 'With zero urban light pollution, our high-altitude meadow deck provides breathtaking views of the Milky Way, constellations, and shooting stars with our 10-inch Dobsonian telescope.',
    included: ['10-inch Dobsonian Telescope', 'Wool Blankets & Reclining Loungers', 'Night-sky Star Charts'],
    imageUrl: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&auto=format&fit=crop&q=80',
    meetingPoint: 'Upper Meadow Observation Deck'
  },
  {
    id: 'exp-6',
    title: 'Campfire & Nightly Lore',
    duration: '90 Minutes',
    price: 0,
    capacity: 'All Lodge Guests',
    time: '8:00 PM Nightly',
    description: 'Gather around the great stone firepit as dusk settles. Enjoy artisanal fire-roasted s’mores, acoustic mountain melodies, and stories of the valley from local historians.',
    included: ['Artisanal Marshmallow & S’mores Kit', 'Mulled Spiced Cider', 'Fireside Seating & Wool Throws'],
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80',
    meetingPoint: 'The Great Lodge Fire Circle'
  }
];

export const RESORT_GALLERY: ResortGalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Misty Dawn at Alder Creek',
    category: 'nature',
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1000&auto=format&fit=crop&q=80',
    caption: 'Sunlight filtering through hundred-year-old western red cedars along Alder Creek.'
  },
  {
    id: 'gal-2',
    title: 'Canopy Suite Bedroom',
    category: 'cabins',
    imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1000&auto=format&fit=crop&q=80',
    caption: 'Floor-to-ceiling glass looking straight out into the Douglas fir canopy.'
  },
  {
    id: 'gal-3',
    title: 'Wood-Fired Cedar Soaking Tub',
    category: 'wellness',
    imageUrl: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1000&auto=format&fit=crop&q=80',
    caption: 'Steaming spring waters heated with seasoned alder wood logs in the forest.'
  },
  {
    id: 'gal-4',
    title: 'Hearth Room Family Supper',
    category: 'dining',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1000&auto=format&fit=crop&q=80',
    caption: 'Long shared communal table laden with wood-fired cast-iron specialties.'
  },
  {
    id: 'gal-5',
    title: 'Solo Cabin Interior & Woodstove',
    category: 'cabins',
    imageUrl: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1000&auto=format&fit=crop&q=80',
    caption: 'Cozy timber walls, warm wool blankets, and crackling cast iron warmth.'
  },
  {
    id: 'gal-6',
    title: 'Morning Sourdough & Hot Coffee',
    category: 'dining',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1000&auto=format&fit=crop&q=80',
    caption: 'Daily sourdough baked at 5am using stone-ground regional heritage grain.'
  },
  {
    id: 'gal-7',
    title: 'Nordic Cedar Steam Sauna',
    category: 'wellness',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&auto=format&fit=crop&q=80',
    caption: 'Traditional dry sauna with granite stones and fresh birch branches.'
  },
  {
    id: 'gal-8',
    title: 'Quiet Kayak on Mirror Lake',
    category: 'nature',
    imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1000&auto=format&fit=crop&q=80',
    caption: 'Glass-like waters reflecting the snow-dusted peaks at midday.'
  },
  {
    id: 'gal-9',
    title: 'Timber Lodge Stone Fireplace',
    category: 'cabins',
    imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&auto=format&fit=crop&q=80',
    caption: 'River boulder fireplace warming the lodge living room after an afternoon hike.'
  },
  {
    id: 'gal-10',
    title: 'Campfire Glow Under Orion',
    category: 'wellness',
    imageUrl: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1000&auto=format&fit=crop&q=80',
    caption: 'Warm cedar embers glowing against the night sky of the Cascade wilderness.'
  }
];

export const RESORT_BLOG: ResortBlogPost[] = [
  {
    id: 'blog-1',
    title: 'What Autumn Looks Like on the Ridge',
    category: 'Season',
    date: 'October 12, 2026',
    author: 'Elena Rostova, Lodge Naturalist',
    readTime: '4 min read',
    excerpt: 'The vine maples turn crimson first, the river chill deepens, and the afternoon light slants golden through the cedar needles by 4pm.',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80',
    fullText: [
      'There is a quiet week in mid-October when the entire valley transforms. The vine maples along Alder Creek flare from olive green into vivid vermilion and ember-gold.',
      'Guests who visit during this shoulder window understand something essential about the Pacific Northwest: the quiet season is the richest season. The morning frost melts into diamond dew, and the smoke from forty Jotul stoves scents the crisp air with dry cedar and seasoned alder.',
      'We recommend packing thick wool socks, a notebook you intend to fill, and an open morning to sit on the porch with our single-origin pour-over coffee while the fog rolls down the mountainside.'
    ]
  },
  {
    id: 'blog-2',
    title: 'Foraging With Our Kitchen Team',
    category: 'Food',
    date: 'September 28, 2026',
    author: 'Chef Liam Vance, The Hearth Room',
    readTime: '6 min read',
    excerpt: 'A morning spent following our forager through the damp moss before breakfast service begins. Chanterelles, wild sorrel, and wintergreen.',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80',
    fullText: [
      'At 5:30 in the morning, the forest understory is still completely quiet. Head Chef Liam Vance and our lead forager Marcus step onto the damp moss beds just west of the old mill trail.',
      'By the time the sun crests the eastern ridge, our wooden trug baskets are filled with golden chanterelles, young wood sorrel, tender pine tips, and wild elderberries.',
      'These foraged treasures find their way directly onto your plate in the Hearth Room just two hours later — tossed in cultured butter over thick slices of freshly baked dark rye sourdough.'
    ]
  },
  {
    id: 'blog-3',
    title: 'Why We Built the Soaking Tubs From Cedar',
    category: 'Wellness',
    date: 'September 14, 2026',
    author: 'Thomas Craig, Master Woodwright',
    readTime: '5 min read',
    excerpt: 'The chemistry of western red cedar, natural tannins, and what wood-fired heat does differently for physical rest.',
    imageUrl: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&auto=format&fit=crop&q=80',
    fullText: [
      'Modern plastic or fiberglass hot tubs operate with harsh chemical bromine and loud mechanical blowers. When we founded Alder & Ash in 1912, the original lodge used pure cedar water boxes.',
      'Western red cedar contains natural thujaplicins — powerful organic compounds that resist decay and release a soothing, grounding aromatic oil when touched by warm water.',
      'Heated slowly with dense alder logs, the water retains heat gently without chemical sterilization. Soaking under the branches while the river flows below calms the central nervous system in ways modern spas cannot duplicate.'
    ]
  },
  {
    id: 'blog-4',
    title: 'The Art of the Deliberate Pause: Off-Grid by Choice',
    category: 'Philosophy',
    date: 'August 30, 2026',
    author: 'Clara Hayes, Co-Founder',
    readTime: '3 min read',
    excerpt: 'Why all forty of our cabins are WiFi-free by default, and why our guests thank us for it by day two.',
    imageUrl: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&auto=format&fit=crop&q=80',
    fullText: [
      'When you check into Alder & Ash, your phone signal will begin to fade three miles down the gravel logging road. By the time you cross the timber bridge, your screen will show "No Service".',
      'This is intentional. Our cabins have no glowing LED router lights, no televisions, and no notification chimes. If you truly need connectivity for an urgent deadline, our front desk can toggle high-speed satellite WiFi in your cabin upon request.',
      'Yet over 94% of our guests never ask for the code. Instead, they pick up a book, light the woodstove, listen to the creek, and remember what it feels like to have uninterrupted thoughts.'
    ]
  }
];

export const RESORT_FAQS: ResortFaq[] = [
  // Booking
  {
    id: 'faq-1',
    category: 'booking',
    question: 'What is your cancellation policy?',
    answer: 'We offer full refunds for cancellations made up to 7 days prior to your arrival date. Within 7 days, a one-night deposit is retained. Group bookings of 3 or more cabins follow our seasonal retreat agreement sent upon inquiry.'
  },
  {
    id: 'faq-2',
    category: 'booking',
    question: 'What are check-in and check-out times?',
    answer: 'Check-in begins at 3:00 PM. Check-out is at 11:00 AM. If you arrive early, you are welcome to store your luggage at the Hearth Room, enjoy a complimentary tea, or begin exploring the trail system.'
  },
  {
    id: 'faq-3',
    category: 'booking',
    question: 'Is Alder & Ash open year-round?',
    answer: 'Yes, we are open 365 days a year. Winter (January–March) is especially magical with woodstoves roaring and snowshoe trails active. The cedar hot springs and Hearth Room dining operate without interruption all winter.'
  },

  // Onsite
  {
    id: 'faq-4',
    category: 'onsite',
    question: 'Is there WiFi or mobile cell phone service?',
    answer: 'All cabins are designed to be off-grid sanctuaries and are WiFi-free by default. If you require connectivity for remote work, please notify the front desk at check-in, and we will activate high-speed Starlink WiFi in your cabin free of charge.'
  },
  {
    id: 'faq-5',
    category: 'onsite',
    question: 'How do the wood-fired stoves and soaking tubs work?',
    answer: 'Upon arrival, your stove will be prepped with seasoned alder logs, kindling, and natural fire-starters. Our lodge hosts are available 24/7 to deliver firewood or assist with lighting your tub or fireplace.'
  },
  {
    id: 'faq-6',
    category: 'onsite',
    question: 'What should I pack for my stay?',
    answer: 'We recommend comfortable hiking footwear, warm wool socks, rain-resistant outerwear, and casual attire for dinner. We provide organic toiletries, wool blankets, bath robes, flashlights, and umbrellas.'
  },

  // Dining
  {
    id: 'faq-7',
    category: 'dining',
    question: 'Do you accommodate allergies and dietary restrictions?',
    answer: 'Absolutely. Because our culinary team crafts every menu fresh daily, we seamlessly accommodate vegetarian, vegan, celiac gluten-free, dairy-free, and nut allergies. Please note your requirements in your booking request.'
  },
  {
    id: 'faq-8',
    category: 'dining',
    question: 'Is breakfast included in the cabin rate?',
    answer: 'Yes! Every morning between 7:30 AM and 10:30 AM, guests are invited to the Hearth Room for fresh sourdough, woodstove porridge, pasture eggs, and locally roasted coffee included with your stay.'
  },

  // Accessibility
  {
    id: 'faq-9',
    category: 'accessibility',
    question: 'Are there wheelchair-accessible cabins?',
    answer: 'Yes. Cabins 03 and 04 (Creekside Meadow Cabins) feature step-free boardwalk ramp access, 36-inch interior door clearances, roll-in slate showers with grab bars, and accessible parking spaces directly adjacent.'
  },
  {
    id: 'faq-10',
    category: 'accessibility',
    question: 'Are dogs or pets allowed at the resort?',
    answer: 'We welcome well-behaved dogs in four designated pet-friendly cabins (Solo 02, Creekside 04, Family 01). A $45 one-time cleaning fee applies, and dogs must remain on leash on the communal lodge boardwalks.'
  }
];

export const RESORT_ADDONS: ResortAddOn[] = [
  {
    id: 'add-sauna',
    name: 'Nordic Cedar Steam Sauna Session',
    price: 40,
    description: '60 minutes of private steam therapy with fresh eucalyptus branches and cold plunge.'
  },
  {
    id: 'add-tub',
    name: 'Geothermal Tub Soak Slot',
    price: 60,
    description: 'Private 90-minute soaking session with hot spring mineral water and herbal tea.'
  },
  {
    id: 'add-hike',
    name: 'Guided Dawn Ridge Hike',
    price: 45,
    description: 'Naturalist-led 2.5-hour trek with summit pour-over coffee at sunrise.'
  },
  {
    id: 'add-basket',
    name: 'Artisan Sourdough & Wine Basket',
    price: 35,
    description: 'Warm loaf, aged mountain cheddar, honeycomb, and bottle of Pacific Northwest Pinot Noir.'
  }
];
