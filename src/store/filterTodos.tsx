import { create } from 'zustand';

interface FilterState {
  filter: any;
  setFilter: any;
}

export const useFilter = create<FilterState>((set) => ({
  filter: 'all',
  setFilter: (value: string) => set({ filter: value }),
}));
