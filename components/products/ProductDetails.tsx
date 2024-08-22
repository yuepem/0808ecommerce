"use client";
import React from "react";
// import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductCarousel from "./ProductCarousel";
import AccordionComponent from "@/components/ui/AccordionComponent";
import { Minus, Plus } from "lucide-react";
import useCartStore from "@/stores/cartStore";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  accordion: { question: string; answer: string }[];
}

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
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
    <div className=" max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className=" flex flex-col sm:flex-row gap-4">
        {/* component A */}
        <div className="bg-stone-100 rounded-2xl flex justify-center items-center sm:w-2/5 max-sm:p-4 ">
          <ProductCarousel images={product.imageUrl} />
        </div>
        {/* component B */}
        <div className="bg-stone-100 flex flex-col justify-between gap-4 sm:w-3/5 p-4 rounded-2xl">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold text-slate-600">{product.name}</h1>
            <p className="text-sm text-stone-600">{product.description}</p>
          </div>
          <div className=" bg-stone-200 rounded-2xl flex flex-col items-center py-2 sm:flex-row sm:items-end justify-between sm:p-6">
            <p className="p-2 sm:p-3 font-semibold">{product.price} kr</p>
            <div className=" max-sm:w-full flex justify-center p-2">
              {quantity === 0 ? (
                <Button
                  className="max-sm:w-3/5  rounded-full"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              ) : (
                <div className=" flex justify-center space-x-4 p-2 px-6 rounded-full">
                  <button
                    onClick={handleDecrement}
                    className="p-1 bg-black text-white rounded "
                  >
                    <Minus size={20} />
                  </button>
                  <span className="w-2 text-center text-lg font-semibold">
                    {quantity}
                  </span>
                  <button
                    onClick={handleIncrement}
                    className="p-1 bg-black text-white rounded"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="font-normal text-sm">
            {/* <ProductInformation /> */}
            <AccordionComponent data={product.accordion} />
          </div>
        </div>
      </div>
    </div>
  );
}
