"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartItem {
  id: string;
  name: string;
  //   cartId: string;
  //   productId: string;
  price: number;
  quantity: number;
}

interface CartStore {
  // * state
  items: CartItem[];

  /* Actions */
  addToCart: (item: { id: string; name: string; price: number }) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);

          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }
          return {
            items: [
              ...state.items,
              {
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: 1,
              },
            ],
          };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),

      updateQuantity: (id, quantity) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity: quantity } : i
          ),
        })),

      clearCart: () => set({ items: [] }),

      getTotalItems: () => {
        const { items } = get();
        return items.reduce((acc, item) => acc + item.quantity, 0);
      },

      getTotalPrice: () => {
        const { items } = get();
        return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
      },
    }),
    {
      name: "cart-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore;
