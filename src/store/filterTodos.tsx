import { create } from 'zustand';

interface FilterState {
  filter: string;
  setFilter: (value: string) => void;
}

export const useFilter = create<FilterState>((set) => ({
  filter: 'all',
  setFilter: (value: string) => set({ filter: value }),
}));
