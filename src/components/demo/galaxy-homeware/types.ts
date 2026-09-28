export type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export type StorePage = 
  | 'home'
  | 'furniture'
  | 'lighting'
  | 'audio-tech'
  | 'tableware'
  | 'textiles'
  | 'showrooms'
  | 'craftsmanship';

export type ProductCategory = 
  | 'all'
  | 'furniture'
  | 'lighting'
  | 'audio-tech'
  | 'tableware'
  | 'textiles';

export type MoodLighting = 'morning' | 'daylight' | 'evening';

export interface ProductMaterial {
  id: string;
  name: string;
  colorHex: string;
  gradient?: string;
  textureLabel?: string;
}

export interface ProductSizeOption {
  label: string; // e.g., "Single Chair", "Set of 2", "Queen (210x210)", "2200mm Dining Table"
  dimensions?: string; // e.g., "820 x 780 x 740 mm"
  priceDelta: number; // e.g. +0, +120
}

export interface ProductReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verifiedPurchase: boolean;
  projectType?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: ProductCategory;
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  badge?: string; // "Bestseller", "New Release", "Design Award", "Staff Pick"
  badgeType?: 'bestseller' | 'new' | 'discount' | 'luxury';
  readyToDeliver: boolean;
  
  // High-res imagery for different angles & interior settings
  images: {
    hero: string;
    ambient: string;
    detail: string;
    lifestyle: string;
  };

  // Materials & Finish Swatches
  materials: ProductMaterial[];
  defaultMaterialId: string;

  // Sizing or Sets
  sizes: ProductSizeOption[];
  defaultSizeIndex: number;

  // Key Features
  bulletPoints: string[];
  description: string;
  specifications: {
    materialsUsed: string;
    origin: string;
    dimensions: string;
    weight: string;
    careInstructions: string;
    warrantyYears: number;
    leadTime: string;
  };

  reviews: ProductReview[];
}

export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  selectedMaterial: ProductMaterial;
  selectedSize: ProductSizeOption;
  quantity: number;
  unitPrice: number;
}

export interface WishlistItem {
  productId: string;
  product: Product;
  addedAt: string;
}

export type ModalType = 
  | 'cart' 
  | 'quickView' 
  | 'search' 
  | 'wishlist' 
  | 'checkout' 
  | 'helpChat' 
  | 'orderSuccess'
  | null;

// Backwards compatibility aliases to prevent client browser HMR cache errors
export type MirrorCategory = ProductCategory;
export type ProductFinish = ProductMaterial;
export type ColorTemperature = '3000k' | '4500k' | '6500k' | string;

