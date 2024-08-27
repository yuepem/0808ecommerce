'use client';

import { create } from 'zustand';
import { CategoryStore } from './types/categoryType';

// Import the mock data
import categoryDATA from "@/dataForTesting/categoryDATA";


const useCategoryStore = create<CategoryStore>()((set, get) => ({
  categories: [],
  loading: false,
  error: null,

  fetchCategories: () => {
    set({ loading: true });
    try {
      // Simulating an API call with the mock data
      setTimeout(() => {
        set({ categories: categoryDATA, loading: false, error: null });
      }, 500);
    } catch (error) {
      set({ error: 'Failed to fetch categories', loading: false });
    }
  },

  getCategoryById: (id: number) => {
    return get().categories.find(category => category.id === id);
  },

  
}));

export default useCategoryStore;