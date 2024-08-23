"use client";
import React, { useEffect} from "react";

import OrderItemCard from "./OrderItemCard";
import { CircleCheck } from 'lucide-react';
import useOrderStore from "@/stores/orderStore";

export default function Confirmation(id: any) {
  const { orderId } = id;

  const getOrder = useOrderStore((state) => state.getOrder);
  const orderData = orderId ? getOrder(orderId as string) : null;

  if (!orderData) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" max-w-3xl mx-auto my-12 ">
      <div className="bg-stone-50 flex flex-col justify-between gap-4 space-y-4 p-4 mb-6 shadow-md rounded-lg">
        <div className="flex flex-col items-center gap-4">
          <CircleCheck className="text-green-600 w-10 h-10" />
          <h1 className="text-2xl font-semibold">Thank you for your order!</h1>
          <p className="text-sm text-gray-500">
            Your order number is: {orderData.order.id}
          </p>
        </div>
        <hr />
        <div className="flex flex-col gap-2 px-4">
          <h2 className="text-md font-semibold text-gray-500 pb-4">Shipping Address</h2>
          <p>{orderData.order.customerInfo.firstName} {orderData.order.customerInfo.lastName}</p>
          <p>{orderData.order.customerInfo.phoneNumber}</p>
          <p>{orderData.order.customerInfo.address}</p>
        </div>
        <hr />
        <div className="flex flex-col gap-2 px-4">
          <h2 className="text-md font-semibold text-gray-500 pb-4">Order Items</h2>
          <div className="flex flex-col gap-2">
            {orderData.items.map((item) => (
              <OrderItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
        <hr />
        <div className="flex justify-between gap-2 px-4">
          <h3 className="text-md pb-4">Total</h3>
          <p className="text-md pb-4">{orderData.order.totalPrice.toFixed(2)} kr</p>
        </div>
      </div>
    </div>
  );
}