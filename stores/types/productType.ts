// Product TYpes

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  stock: number;
  category_id: number;
  imageUrl: string;
  featuredType: string;
  accordion: { question: string; answer: string }[];
  created_at: string;
  updated_at: string;
}

export interface ProductStore {
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
