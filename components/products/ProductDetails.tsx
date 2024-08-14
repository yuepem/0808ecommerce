"use client";
import React from "react";
// import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductCarousel from "./ProductCarousel";
import ProductInformation from "./ProductInformation";

export default function ProductDetails() {
  return (
    <div className=" max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className=" flex flex-col sm:flex-row gap-4">
        {/* component A */}
        <div className="bg-stone-100 rounded-2xl flex justify-center items-center sm:w-2/5 max-sm:p-4 ">
          <ProductCarousel />
        </div>
        {/* component B */}
        <div className="bg-stone-100 flex flex-col justify-between gap-4 sm:w-3/5 p-4 rounded-2xl" >
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl ">
              Nomad Tumbler with Straw Lid 550ml & 650ml
            </h1>
            <p className="text-sm text-stone-600">
              Olive drab green insulated bottle with flared screw lid and flat
              top. Made of stainless steel with a matte finish. Available in two
              sizes.
            </p>
          </div>
          <div className=" bg-stone-200 rounded-2xl flex flex-col items-center py-2 sm:flex-row sm:items-end justify-between sm:p-6">
            <p className="p-2 sm:p-3">$ 199.00</p>
            <Button className="w-4/5 my-auto rounded-full sm:w-1/2 md:w-1/3  ">Add to Cart</Button>
          </div>
          <div className="font-normal text-sm">
            <ProductInformation />
          </div>
        </div>
      </div>
    </div>
  );
}
