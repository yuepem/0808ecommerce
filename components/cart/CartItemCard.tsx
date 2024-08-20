"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";

import useCartStore from "@/stores/cartStore";

export default function CartItemCard({ item }: any) {
  const { removeFromCart, updateQuantity } = useCartStore();

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="bg-white flex justify-start gap-4 py-2 px-2 items-start rounded-md ">
      <div className="py-2">
        <Image
          className="rounded-md"
          src={item.image}
          alt="Product image"
          width={120}
          height={120}
        />
      </div>
      <div className="flex-auto flex-col px-2 ">
        <div className="flex justify-between pb-2 ">
          <div>
            <h2 className="text-sm ">{item.name}</h2>
            <p className="text-xs text-gray-500">{item.price.toFixed(2)} kr</p>
          </div>
          <div>
            <span className="text-sm ">
              {(item.price * item.quantity).toFixed(2)} kr
            </span>
          </div>
        </div>
        <div className="flex justify-between py-2 ">
          <div className="flex flex-row-reverse gap-4 justify-between place-items-center ">
            <div className="flex gap-4 place-items-center">
              <Button
                size="xs"
                className="rounded-full"
                onClick={handleDecrement}
              >
                <Minus size={13} />
              </Button>
              <span className="font-bold"> {item.quantity} </span>
              <Button
                size="xs"
                className="rounded-full"
                onClick={handleIncrement}
              >
                <Plus size={13} />
              </Button>
            </div>
          </div>
          <div
            className="cursor-pointer flex items-end "
            onClick={handleRemove}
          >
            <Trash2 size={18} className="text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
