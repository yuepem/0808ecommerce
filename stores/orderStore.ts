import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import useCartStore from "./cartStore";
import { v4 as uuidv4 } from "uuid";

interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
}

interface PaymentInfo {
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  id: string;
  customerInfo: CustomerInfo;
  paymentInfo: PaymentInfo;
  totalPrice: number;
  createdAt: string;
}

interface OrderStore {
  orders: Order[];
  orderItems: OrderItem[];
  createOrder: (
    customerInfo: CustomerInfo,
    paymentInfo: PaymentInfo
  ) => Promise<string>;
  getOrder: (orderId: string) => { order: Order; items: OrderItem[] } | null;
}

const useOrderStore = create<OrderStore>()(
  persist(
    (set, get) => ({
      orders: [],
      orderItems: [],
    
      createOrder: async (customerInfo: CustomerInfo, paymentInfo: PaymentInfo) => {
        const cartStore = useCartStore.getState();
        const cartItems = cartStore.items;
        const totalPrice = cartStore.getTotalPrice();
    
        // Create the order
        const orderId = uuidv4();
        const newOrder: Order = {
          id: orderId,
          customerInfo,
          paymentInfo,
          totalPrice,
          createdAt: new Date().toISOString(),
        };
    
        // Create the order items
        const newOrderItems: OrderItem[] = cartItems.map((item, index) => ({
          id: `${orderId}_${index + 1}`,
          orderId,
          productId: item.id,
          imageUrl: item.imageUrl,
          name: item.name,
          price: parseFloat(item.price),
          quantity: item.quantity,
        }));
    
        set((state) => ({
          orders: [...state.orders, newOrder],
          orderItems: [...state.orderItems, ...newOrderItems],
        }));
    
        console.log("Order created:", newOrder);
        console.log("Order items:", newOrderItems);
        // Clear the cart
        cartStore.clearCart();
    
        return orderId;
      },
    
      getOrder: (orderId: string) => {
        const { orders, orderItems } = get();
        const order = orders.find((o) => o.id === orderId);
        const items = orderItems.filter((item) => item.orderId === orderId);
    
        if (!order) return null;
    
        return { order, items };
      },
    }),
    {
      name: "order-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useOrderStore;