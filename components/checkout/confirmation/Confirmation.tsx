"use client";
import OrderItemCard from "./OrderItemCard";
import { CircleCheck } from 'lucide-react';

export default function Confirmation() {
  return (
    <div className=" max-w-3xl mx-auto my-12 ">
      <div className="bg-stone-50 flex flex-col justify-between gap-4 space-y-4 p-4 mb-6 shadow-md rounded-lg">
        <div className="flex flex-col items-center gap-4">
          <CircleCheck className="text-green-600 w-10 h-10" />
          <h1 className="text-2xl font-semibold">Thank you for your order!</h1>
          <p className="text-sm text-gray-500">
            Your order number is: #123456789
          </p>
        </div>
        <hr />
        <div className="flex flex-col gap-2 px-4">
          <h2 className="text-md font-semibold text-gray-500 pb-4">Shipping Address</h2>
          <p>John Doe</p>
          <p>1234567890</p>
          <p>4517 Washington Ave 165 65, Stockholm, Sweden</p>
        </div>
        <hr />
        <div className="flex flex-col gap-2 px-4">
          <h2 className="text-md font-semibold text-gray-500 pb-4">Order Items</h2>
          <div className="flex flex-col gap-2">
            <OrderItemCard />
            <OrderItemCard />
            <OrderItemCard />
          </div>
        </div>
        <hr />
        <div className="flex justify-between gap-2 px-4">
          <h3 className="text-md pb-4">Total</h3>
          <p className="text-md pb-4">$ 569</p>
        </div>
      </div>
    </div>
  );
}