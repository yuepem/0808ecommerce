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
            <h1 className="text-2xl ">{product.name}</h1>
            <p className="text-sm text-stone-600">{product.description}</p>
          </div>
          <div className=" bg-stone-200 rounded-2xl flex flex-col items-center py-2 sm:flex-row sm:items-end justify-between sm:p-6">
            <p className="p-2 sm:p-3">{product.price} kr</p>
            <div>
              {quantity === 0 ? (
                <Button
                  className="w-4/5 my-auto rounded-full sm:w-1/2 md:w-1/3  "
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
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
          <div className="font-normal text-sm">
            {/* <ProductInformation /> */}
            <AccordionComponent data={product.accordion} />
          </div>
        </div>
      </div>
    </div>
  );
}
