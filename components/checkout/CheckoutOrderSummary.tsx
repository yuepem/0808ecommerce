"use client";
import React, { useState, useEffect} from "react";
import useCartStore from "@/stores/cartStore";

const shipping = 5;

interface OrderItem {
  id: string;
  name: string;
  // imageUrl: string;
  // cartId: string;
  //   productId: string;
  price: string;
  quantity: number;
}

export default function CheckoutOrderSummary() {
  const [OrderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { items, getTotalPrice } = useCartStore();

  useEffect(() => {
    setOrderItems(items);
    setTotalPrice(getTotalPrice());
  }, [items, getTotalPrice]);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="space-y-4">
        {OrderItems.map((item: any) => (
          <div key={item.id} className="flex justify-between">
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>{(item.price * item.quantity).toFixed(2)} kr</span>
          </div>
        ))}
        <div className="border-t pt-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{totalPrice.toFixed(2)} kr</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{shipping.toFixed(2)} kr</span>
          </div>
          <div className="flex justify-between font-semibold mt-2">
            <span>Total</span>
            <span>{(totalPrice + shipping).toFixed(2)} kr</span>
          </div>
        </div>
      </div>
    </div>
  );
}
