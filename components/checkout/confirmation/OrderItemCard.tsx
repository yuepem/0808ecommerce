"use client";
import React from "react";
import Image from "next/image";

export default function CartItemCard() {
  return (
    <div className="flex justify-start gap-4 py-2 p-4 items-start rounded-md ">
      <div className="py-2">
        <Image
          className="rounded-md"
          src="/placeHolder.jpg"
          alt="Product image"
          width={100}
          height={100}
        />
      </div>
      <div className="flex-auto my-auto">
        <div className="flex justify-between ">
          <div>
            <h2 className="text-sm ">Product Name</h2>
          </div>
          <div className="flex gap-4 place-items-center">
            <span className="font-bold"> * 2</span>
          </div>
          <div>
            <span className="text-sm ">$ 99.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
