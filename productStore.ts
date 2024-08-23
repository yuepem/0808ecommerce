"use client";
import { create } from "zustand";

/* * import mockData for testing */
import categoryDATA from "@/dataForTesting/categoryDATA";
import productData from "@/dataForTesting/productData";

// * mockData
const mockProducts = productData;

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  stock: number;
  category_id: number;
  imageUrl: string;
  featuredType: string;
  accordion: { question: string; answer: string; }[];
  created_at: string;
  updated_at: string;
}

interface ProductStore {
  products: Product[];
  relatedProducts: Product[];
  loading: boolean;
  error: string | null;
  fetchHomeProducts: () => void;
  fetchProductsByCategory: (categoryId: number) => void;
  fetchRelatedProducts: (productId: string) => void;
  searchProducts: (query: string) => void;
  //* for admin
  // addProduct: (product: Product) => void;
  // updateProduct: (id: number, updates: Partial<Product>) => void;
  // deleteProduct: (id: number) => void;
  getProductById: (id: string) => Product | undefined;
}

const useProductStore = create<ProductStore>()((set, get) => ({
  products:[],
  relatedProducts: [],
  loading: true,
  error: null,

  // actions
  fetchHomeProducts: () => {
    set({ 
      products: mockProducts.slice(0, 15), 
      loading: false, 
      error: null 
    });
  },

  fetchProductsByCategory: (categoryId: number) => {
    const categoryProducts = mockProducts.filter(p => p.category_id === categoryId);
    set({
      products: categoryProducts,
      loading: false,
      error: null
    });
  },

  fetchRelatedProducts: (productId: string) => {
    const product = get().getProductById(productId);
    const products = mockProducts.filter(
      (p) => p.category_id === product?.category_id
    );
    set({ relatedProducts: products, loading: false, error: null });
  },

  getProductById: (id: string) => {
    return mockProducts.find((product) => product.id === id);
  },

  searchProducts: (query: string) => {
    const results = mockProducts.filter(
      (p) => p.name.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase())
    );

    set({ products: results, loading: false, error: null });
  },
}));

export default useProductStore;
