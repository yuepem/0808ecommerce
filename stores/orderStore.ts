import { create } from 'zustand';
import useCartStore from './cartStore';
import { v4 as uuidv4 } from 'uuid';

interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  id: string;
  totalPrice: number;
  createdAt: string;
}

interface OrderStore {
  currentOrder: Order | null;
  orderItems: OrderItem[];
  createOrder: () => Promise<string>;
  getOrder: (orderId: string) => Promise<{ order: Order, items: OrderItem[] } | null>;
}

const useOrderStore = create<OrderStore>((set, get) => ({
  currentOrder: null,
  orderItems: [],

  createOrder: async () => {
    const cartStore = useCartStore.getState();
    const cartItems = cartStore.items;
    const totalPrice = cartStore.getTotalPrice();

    const orderId = uuidv4();
    const newOrder: Order = {
      id: orderId,
      totalPrice,
      createdAt: new Date().toISOString(),
    };

    const newOrderItems: OrderItem[] = cartItems.map(item => ({
      id: uuidv4(),
      orderId,
      productId: item.id,
      name: item.name,
      price: parseFloat(item.price),
      quantity: item.quantity,
    }));

    // Save order and order items using API
    try {
      const response = await fetch('/api/saveOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ order: newOrder, orderItems: newOrderItems }),
      });

      if (!response.ok) {
        throw new Error('Failed to save order');
      }

      // Update the store
      set({ currentOrder: newOrder, orderItems: newOrderItems });

      // Clear the cart
      cartStore.clearCart();

      return orderId;
    } catch (error) {
      console.error('Error saving order:', error);
      throw error;
    }
  },

  getOrder: async (orderId: string) => {
    try {
      const response = await fetch(`/api/getOrder?orderId=${orderId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch order');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching order:', error);
      return null;
    }
  },
}));

export default useOrderStore;