import { allowedNodeEnvironmentFlags } from "process";
import { create } from "zustand";

// ! mockData
const mockProducts: Product[] = [
  {
    id: 1,
    name: "Laptop",
    description: "Powerful laptop for work",
    price: 999.99,
    stock: 50,
    categoryId: 1,
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Latest model smartphone",
    price: 699.99,
    stock: 100,
    categoryId: 1,
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling headphones",
    price: 199.99,
    stock: 75,
    categoryId: 1,
  },
  {
    id: 4,
    name: "T-shirt",
    description: "Comfortable cotton t-shirt",
    price: 19.99,
    stock: 200,
    categoryId: 2,
  },
  {
    id: 5,
    name: "Jeans",
    description: "Classic blue jeans",
    price: 49.99,
    stock: 150,
    categoryId: 2,
  },
  // Add more mock products as needed
];

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: number;
}

interface ProductStore {
  products: Product[];
  relatedProducts: Product[];
  loading: boolean;
  error: string | null;
  fetchHomeProducts: () => void;
  fetchProductsByCategory: (categoryId: number) => void;
  fetchRelatedProducts: (productId: number) => void;
  searchProducts: (query: string) => void;
  //* for admin
  // addProduct: (product: Product) => void;
  // updateProduct: (id: number, updates: Partial<Product>) => void;
  // deleteProduct: (id: number) => void;
  getProductById: (id: number) => Product | undefined;
}

const useProductStore = create<ProductStore>()((set, get) => ({
  products:[],
  relatedProducts: [],
  loading: true,
  error: null,

  // actions
  fetchHomeProducts: () => {
    set({ 
      products: mockProducts.slice(0, 4), // Assume first 4 products for homepage
      loading: false, 
      error: null 
    });
  },

  fetchProductsByCategory: (categoryId: number) => {
    const categoryProducts = mockProducts.filter(p => p.categoryId === categoryId);
    set({
      products: categoryProducts,
      loading: false,
      error: null
    });
  },

  fetchRelatedProducts: (productId: number) => {
    const product = get().getProductById(productId);
    const products = mockProducts.filter(
      (p) => p.categoryId === product?.categoryId
    );
    set({ relatedProducts: products, loading: false, error: null });
  },

  getProductById: (id: number) => {
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
