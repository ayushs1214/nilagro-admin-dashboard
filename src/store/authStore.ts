import { create } from 'zustand';
import type { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: {
    id: '1',
    name: 'Super Admin',
    email: 'admin@milagro.com',
    role: 'superadmin',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    createdAt: '2024-01-01T00:00:00Z',
    lastLogin: '2024-03-15T14:30:00Z'
  },
  isAuthenticated: true,
  login: async (email: string, password: string) => {
    // Mock login - in real app, this would make an API call
    set({
      user: {
        id: '1',
        name: 'Super Admin',
        email: email,
        role: 'superadmin',
        status: 'active',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        createdAt: '2024-01-01T00:00:00Z',
        lastLogin: new Date().toISOString()
      },
      isAuthenticated: true
    });
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
  updateUser: (userData) => {
    set((state) => ({
      user: state.user ? { ...state.user, ...userData } : null
    }));
  }
}));