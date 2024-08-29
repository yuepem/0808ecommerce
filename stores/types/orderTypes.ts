// Order types
export interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  streetAddress: string;
  city: string;
  province: string;
  postalCode: string;
}

export interface PaymentInfo {
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  customerInfo: CustomerInfo;
  paymentInfo: PaymentInfo;
  totalPrice: number;
  createdAt: string;
}

export interface OrderStore {
  orders: Order[];
  orderItems: OrderItem[];
  createOrder: (
    customerInfo: CustomerInfo,
    paymentInfo: PaymentInfo
  ) => Promise<string>;
  getOrder: (orderId: string) => { order: Order; items: OrderItem[] } | null;
}