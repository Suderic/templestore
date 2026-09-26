export type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export type ResortPage = 
  | 'home' 
  | 'rooms' 
  | 'dining' 
  | 'experiences' 
  | 'gallery' 
  | 'blog' 
  | 'faq' 
  | 'contact';

export interface ResortRoom {
  id: string;
  name: string;
  type: 'solo' | 'couple' | 'group';
  rate: number;
  capacity: string;
  beds: string;
  view: string;
  size: string;
  description: string;
  amenities: string[];
  imageUrl: string;
  features: string[];
}

export interface ResortMenuItem {
  id: string;
  name: string;
  category: 'breakfast' | 'dinner' | 'drinks';
  price: number;
  description: string;
  dietary?: string[];
  foraged?: boolean;
}

export interface ResortExperience {
  id: string;
  title: string;
  duration: string;
  price: number;
  capacity: string;
  time: string;
  description: string;
  included: string[];
  imageUrl: string;
  meetingPoint: string;
}

export interface ResortGalleryItem {
  id: string;
  title: string;
  category: 'cabins' | 'dining' | 'nature' | 'wellness';
  imageUrl: string;
  caption: string;
}

export interface ResortBlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  fullText: string[];
  imageUrl: string;
}

export interface ResortFaq {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'onsite' | 'dining' | 'accessibility';
}

export interface ResortAddOn {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface BookingState {
  step: number;
  stayType: 'individual' | 'couple' | 'group';
  roomId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  selectedAddOns: string[];
  fullName: string;
  email: string;
  phone: string;
  notes: string;
  confirmationId?: string;
}
