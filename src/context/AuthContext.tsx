'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, PurchaseRecord } from '@/types';
import { SEED_USERS, INITIAL_PURCHASES } from '@/data/mockAuth';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isDevMode: boolean;
  purchases: PurchaseRecord[];
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  loginAsSeedUser: (userId: 'usr-001' | 'usr-002') => void;
  signup: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  toggleDevMode: () => void;
  recordPurchase: (
    templateId: string,
    templateName: string,
    amount: number,
    paymentMethod: PurchaseRecord['paymentMethod']
  ) => PurchaseRecord;
  hasPurchased: (templateId: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEYS = {
  USER: 'templestore_user',
  PURCHASES: 'templestore_purchases',
  DEV_MODE: 'templestore_dev_mode',
};

const initialSeedUser: User = {
  id: SEED_USERS[0].id,
  name: SEED_USERS[0].name,
  email: SEED_USERS[0].email,
  avatar: SEED_USERS[0].avatar,
  role: SEED_USERS[0].role,
  joinedDate: SEED_USERS[0].joinedDate,
  purchasedTemplateIds: SEED_USERS[0].purchasedTemplateIds,
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(initialSeedUser);
  const [purchases, setPurchases] = useState<PurchaseRecord[]>(INITIAL_PURCHASES);
  const [isDevMode, setIsDevMode] = useState<boolean>(true); // Enabled by default for easy testing!
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Initialize from localStorage or default to Seed User 1 for instant testability
  useEffect(() => {
    try {
      const storedDevMode = localStorage.getItem(STORAGE_KEYS.DEV_MODE);
      if (storedDevMode !== null) {
        setIsDevMode(storedDevMode === 'true');
      }

      const storedUser = localStorage.getItem(STORAGE_KEYS.USER);
      if (storedUser) {
        if (storedUser === 'guest') {
          setUser(null);
        } else {
          setUser(JSON.parse(storedUser));
        }
      } else {
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(initialSeedUser));
      }

      const storedPurchases = localStorage.getItem(STORAGE_KEYS.PURCHASES);
      if (storedPurchases) {
        setPurchases(JSON.parse(storedPurchases));
      } else {
        localStorage.setItem(STORAGE_KEYS.PURCHASES, JSON.stringify(INITIAL_PURCHASES));
      }
    } catch (e) {
      console.error('Failed to load auth state from local storage', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 600)); // Smooth micro-delay simulation

    const found = SEED_USERS.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (found && found.passwordHash === password) {
      const { passwordHash: _, ...safeUser } = found;
      setUser(safeUser);
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(safeUser));
      setIsLoading(false);
      return { success: true };
    }

    setIsLoading(false);
    return {
      success: false,
      error: 'Invalid credentials. Try demo@templestore.dev / password123 or sarah@templestore.dev / password123',
    };
  };

  const loginAsSeedUser = (userId: 'usr-001' | 'usr-002') => {
    const seed = SEED_USERS.find((u) => u.id === userId) || SEED_USERS[0];
    const { passwordHash: _, ...safeUser } = seed;
    setUser(safeUser);
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(safeUser));
  };

  const signup = async (
    name: string,
    email: string,
    _password: string
  ): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 700));

    const newUser: User = {
      id: `usr-${Date.now().toString().slice(-4)}`,
      name,
      email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}`,
      role: 'user',
      joinedDate: 'Today',
      purchasedTemplateIds: [],
    };

    setUser(newUser);
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(newUser));
    setIsLoading(false);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.setItem(STORAGE_KEYS.USER, 'guest');
  };

  const toggleDevMode = () => {
    setIsDevMode((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEYS.DEV_MODE, String(next));
      return next;
    });
  };

  const recordPurchase = (
    templateId: string,
    templateName: string,
    amount: number,
    paymentMethod: PurchaseRecord['paymentMethod']
  ): PurchaseRecord => {
    const newRecord: PurchaseRecord = {
      id: `pur-${Date.now().toString().slice(-5)}`,
      orderNumber: `ORD-${Math.floor(1000 + Math.random() * 9000)}-${templateId.slice(-2).toUpperCase()}`,
      templateId,
      templateName,
      amount,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      paymentMethod,
      status: 'completed',
      licenseKey: `${templateName.slice(0, 4).toUpperCase()}-LIC-${Math.random().toString(36).substring(2, 7).toUpperCase()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
      downloadUrl: '#',
    };

    setPurchases((prev) => {
      const updated = [newRecord, ...prev];
      localStorage.setItem(STORAGE_KEYS.PURCHASES, JSON.stringify(updated));
      return updated;
    });

    if (user) {
      setUser((prevUser) => {
        if (!prevUser) return null;
        const updatedUser: User = {
          ...prevUser,
          purchasedTemplateIds: Array.from(new Set([...prevUser.purchasedTemplateIds, templateId])),
        };
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(updatedUser));
        return updatedUser;
      });
    }

    return newRecord;
  };

  const hasPurchased = (templateId: string): boolean => {
    if (!user) return false;
    return user.purchasedTemplateIds.includes(templateId) || purchases.some((p) => p.templateId === templateId);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        isDevMode,
        purchases,
        login,
        loginAsSeedUser,
        signup,
        logout,
        toggleDevMode,
        recordPurchase,
        hasPurchased,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
