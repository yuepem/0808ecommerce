"use client";
import React from "react";
import Image from "next/image";

interface OrderItemsProps {
  item: {
    imageUrl: string;
    name: string;
    price: number;
    quantity: number;
  }
}

export default function OrderItemCard({item}: OrderItemsProps) {
  return (
    <div className="flex justify-start gap-4 py-2 p-4 items-start rounded-md ">
      <div className="py-2">
        <Image
          className="rounded-md"
          src={item.imageUrl}
          alt="Product image"
          width={100}
          height={100}
        />
      </div>
      <div className="flex-auto my-auto">
        <div className="flex justify-between ">
          <div>
            <h2 className="text-sm ">{item.name}</h2>
          </div>
          <div className="flex gap-4 place-items-center">
            <span className="font-semibold text-sm"> x {item.quantity}</span>
          </div>
          <div>
            <span className="text-sm ">{item.price.toFixed(2)} kr</span>
          </div>
        </div>
      </div>
    </div>
  );
}
