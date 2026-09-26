import { User, PurchaseRecord } from '@/types';

export const SEED_USERS: (User & { passwordHash: string })[] = [
  {
    id: 'usr-001',
    name: 'Alex Designer',
    email: 'demo@templestore.dev',
    passwordHash: 'password123',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    role: 'user',
    joinedDate: 'August 14, 2026',
    purchasedTemplateIds: ['tpl-001', 'tpl-002']
  },
  {
    id: 'usr-002',
    name: 'Sarah Developer',
    email: 'sarah@templestore.dev',
    passwordHash: 'password123',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
    role: 'user',
    joinedDate: 'September 02, 2026',
    purchasedTemplateIds: ['tpl-004']
  }
];

export const INITIAL_PURCHASES: PurchaseRecord[] = [
  {
    id: 'pur-101',
    orderNumber: 'ORD-9842-AA',
    templateId: 'tpl-001',
    templateName: 'Alder & Ash — Forest Resort',
    amount: 79,
    date: 'Sep 24, 2026',
    paymentMethod: 'QR Code (USDT/Crypto)',
    status: 'completed',
    licenseKey: 'ALDER-PRO-9842-87F2-441A',
    downloadUrl: '#'
  },
  {
    id: 'pur-102',
    orderNumber: 'ORD-7231-AU',
    templateId: 'tpl-002',
    templateName: 'Aura Studio & Agency',
    amount: 49,
    date: 'Sep 20, 2026',
    paymentMethod: 'Credit Card',
    status: 'completed',
    licenseKey: 'AURA-STD-7231-11E9-09BC',
    downloadUrl: '#'
  },
  {
    id: 'pur-103',
    orderNumber: 'ORD-5541-AP',
    templateId: 'tpl-004',
    templateName: 'Apex Modern E-Commerce',
    amount: 89,
    date: 'Aug 28, 2026',
    paymentMethod: 'Direct Checkout',
    status: 'completed',
    licenseKey: 'APEX-EXT-5541-66C0-128D',
    downloadUrl: '#'
  }
];
