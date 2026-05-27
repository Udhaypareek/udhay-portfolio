import { create } from 'zustand';

interface AppState {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isLowEnd: boolean;
  setIsLowEnd: (value: boolean) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  activeSection: 'hero',
  setActiveSection: (section) => set({ activeSection: section }),
  isLowEnd: false,
  setIsLowEnd: (value) => set({ isLowEnd: value }),
  mobileMenuOpen: false,
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
}));
