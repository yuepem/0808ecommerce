export interface ShippingInfo {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    province: string;
    postalCode: string;
  }
  
  export interface PaymentInfo {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  }
  
  export interface CartItem {
    id: string;
    name: string;
    price: string;
    quantity: number;
  }
  
  export interface OrderItem {
    id: string;
    orderId: string;
    productId: string;
    name: string;
    price: number;
    quantity: number;
  }
  
  export interface Order {
    id: string;
    userId: string; // Assuming we have user authentication
    status: 'pending' | 'processing' | 'completed' | 'cancelled';
    shippingInfo: ShippingInfo;
    paymentInfo: PaymentInfo;
    subtotal: number;
    shipping: number;
    total: number;
    createdAt: string;
  }
  
  export interface OrderWithItems extends Order {
    orderItems: OrderItem[];
  }