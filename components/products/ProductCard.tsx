"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Minus, Plus } from "lucide-react";

export default function ProductCard() {
  const [isInCart, setIsInCart] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setIsInCart(true);
    setQuantity(1);
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    } else {
      setQuantity(0);
      setIsInCart(false);
    }
  };

  return (
    <div className="flex flex-col gap-4  border-black rounded-lg">
      <Link href="/products">
        <div className="bg-stone-100 rounded-md">
          <Image src="" alt="product" width={300} height={200} />
        </div>
        <div>
          <h3 className="mt-4 text-sm  text-gray-700">Product Name</h3>
          <p className="mt-1 text-sm font-medium text-gray-900">
            $ 89
          </p>
        </div>
      </Link>
      <div className=" flex flex-row-reverse justify-between items-center ">
        {!isInCart ? (
          <div>
            <button
              className="p-2 text-black rounded-full hover:bg-stone-200 hover:text-black"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={20} />
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-3 p-1">
            <button
              onClick={handleDecrement}
              className="p-1 bg-stone-200 rounded"
            >
              <Minus size={18} />
            </button>
            <span className="w-2 text-center font-light">{quantity}</span>
            <button
              onClick={handleIncrement}
              className="p-1 bg-stone-200 rounded"
            >
              <Plus size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
