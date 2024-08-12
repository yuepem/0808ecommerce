"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function CartItemCard() {
  return (
    <div className="bg-white flex justify-start gap-4 py-2 px-2 items-start rounded-md ">
      <div className="py-2">
        <Image
          className="rounded-md"
          src="/placeHolder.jpg"
          alt="Product image"
          width={120}
          height={120}
  
        />
      </div>
      <div className="flex-auto flex-col px-2 ">
        <div className="flex justify-between pb-2 ">
          <div>
            <h2 className="text-sm ">Product Name</h2>
            <p className="text-xs text-gray-500">$ 99.00</p>
          </div>
          <div>
            <span className="text-sm ">$ 99.00</span>
          </div>
        </div>
        <div className="flex justify-between py-2 ">
          <div className="flex flex-row-reverse gap-4 justify-between place-items-center ">
            <div className="flex gap-4 place-items-center">
              <Button size="xs" className="rounded-full">
                <Minus size={13} />
              </Button>
              <span className="font-bold">1</span>
              <Button size="xs" className="rounded-full">
                <Plus size={13} />
              </Button>
            </div>
          </div>
          <div className="cursor-pointer flex items-end ">
            <Trash2 size={18} className="text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
