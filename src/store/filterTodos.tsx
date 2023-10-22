import { create } from 'zustand';

type Filter = 'all' | 'uncompleted' | 'completed';

interface FilterState {
  filter: Filter;
  setFilter: (value: Filter) => void;
}

export const useFilter = create<FilterState>((set) => ({
  filter: 'all',
  setFilter: (value: Filter) => set({ filter: value }),
}));
