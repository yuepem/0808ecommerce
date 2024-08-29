// Cart types
export interface CartItem {
    id: string;
    name: string;
    imageUrl: string;
    // cartId: string;
    //   productId: string;
    price: number;
    quantity: number;
  }
  
 export  interface CartStore {
    // * state
    items: CartItem[];
  
    /* Actions */
    addToCart: (item: { id: string; name: string; imageUrl: string; price: number }) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
  }
  