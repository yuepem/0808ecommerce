"use client";
import { create } from "zustand";
import { ProductStore } from "./types/productType";

/* * import mockData for testing */
import productData from "@/dataForTesting/productData"; // Ensure this matches the actual file name

// * mockData
const mockProducts = productData;

const useProductStore = create<ProductStore>()((set, get) => ({
  products: [],
  relatedProducts: [],
  loading: true,
  error: null,

  // actions
  fetchHomeProducts: () => {
    set({
      products: mockProducts.slice(0, 15).map(p => ({...p, price: parseFloat(p.price)})), 
      loading: false,
      error: null,
    });
  },

  fetchProductsByCategory: (categoryId: number) => {
    const categoryProducts = mockProducts.filter(
      (p) => p.category_id === categoryId
    );
    set({
      products: categoryProducts.map(p => ({...p, price: parseFloat(p.price)})),
      loading: false,
      error: null,
    });
  },

  fetchRelatedProducts: (productId: string) => {
    const product = get().getProductById(productId);
    const results = mockProducts.filter(
      (p) => p.category_id === product?.category_id
    );
    if (!product) {
      set({ relatedProducts: get().products, loading: false, error: null });
    } else {
      set({ relatedProducts: results.map(p => ({...p, price: parseFloat(p.price)})), loading: false, error: null });
    }
  },

  getProductById: (id: string) => {
    const product = mockProducts.find((product) => product.id === id);
    // Ensure price is a number
    return product ? { ...product, price: parseFloat(product.price) } : undefined;
  },

  searchProducts: (query: string) => {
    const results = mockProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
    );

    set({ products: results.map(p => ({...p, price: parseFloat(p.price)})), loading: false, error: null });
  },
}));

export default useProductStore;
