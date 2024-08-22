"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Minus, Plus } from "lucide-react";

//States
import useCartStore from "@/stores/cartStore";

interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  // Add other relevant properties
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({product}: ProductCardProps) {
  const { items, addToCart, removeFromCart, updateQuantity } = useCartStore();

  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleIncrement = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  return (
    <div className="flex flex-col gap-4  border-black rounded-lg">
      <Link href="/products/{product.id}">
        <div className="bg-stone-100 rounded-md">
          <Image src={product.imageUrl} alt="product" width={300} height={200} style={{ width: "auto", height: "auto" }} />
        </div>
        <div>
          <h3 className="mt-4 text-sm  text-gray-700">{product.name}</h3>
          <p className="mt-1 text-sm font-medium text-gray-900">
            {product.price} kr
          </p>
        </div>
      </Link>
      <div className=" flex flex-row-reverse justify-between items-center ">
        {quantity === 0 ? (
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
