export type TemplateCategory = 'all' | 'website' | 'app' | 'mobile' | 'saas';

export interface TechStackItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'styling' | 'tooling';
  color?: string;
}

export interface TemplateFeature {
  title: string;
  description: string;
}

export interface Template {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: 'website' | 'app' | 'mobile' | 'saas';
  isMobileOnly?: boolean;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  salesCount: number;
  featured: boolean;
  badge?: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  detailedFeatures?: TemplateFeature[];
  previewImages: {
    url: string;
    alt: string;
    caption?: string;
  }[];
  techStack: TechStackItem[];
  purchaseLink?: string;
  livePreviewUrl?: string;
  version: string;
  lastUpdated: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  fileSize: string;
  includedItems: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'user' | 'admin';
  joinedDate: string;
  purchasedTemplateIds: string[];
}

export interface PurchaseRecord {
  id: string;
  orderNumber: string;
  templateId: string;
  templateName: string;
  amount: number;
  date: string;
  paymentMethod: 'QR Code (USDT/Crypto)' | 'QR Code (Instant Pay)' | 'Credit Card' | 'Direct Checkout';
  status: 'completed' | 'processing' | 'refunded';
  licenseKey: string;
  downloadUrl: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  templateRef?: string;
  subject: string;
  message: string;
  createdAt: string;
}
