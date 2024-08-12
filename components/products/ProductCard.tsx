"use client";
import React from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Minus, Plus } from "lucide-react";

export default function ProductCard() {
  return (
    <div className="flex flex-col gap-4 border-2 border-black rounded-md">
      <div className="bg-gray-200">
        <Image src="" alt="product" width={300} height={200} />
      </div>
      <div className="bg-gray-400">
        <h3>Product Name</h3>
        <p>Product Price</p>
      </div>
      <div className="flex flex-row-reverse gap-4 justify-between place-items-center bg-gray-600">
        <div>
          <Button >
            <ShoppingCart size={20} />
          </Button>
        </div>
        <div className="flex gap-4 place-items-center">
          <Button>
            <Minus size={20} />
          </Button>
          <span className="text-white ">1</span>
          <Button>
            <Plus size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
