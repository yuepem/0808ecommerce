// Category types
export interface Category {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
  }
  
export interface CategoryStore {
    categories: Category[];
    loading: boolean;
    error: string | null;
    fetchCategories: () => void;
    getCategoryById: (id: number) => Category | undefined;
  }
  