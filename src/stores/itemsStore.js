import { create } from 'zustand';
import { intialItems } from '../lib/constants';

create((set) => ({
  items: intialItems,
  removeAllItems: () => {
    set(() => ({ items: [] }));
  },
  resetToInitial: () => {
    set(() => ({ items: intialItems }));
  },
  markAllAsComplete: () => {
    set((state) => {
      const newItems = state.items.map((item) => {
        return { ...item, packed: true };
      });
      return { items: newItems };
    });
  },
}));
