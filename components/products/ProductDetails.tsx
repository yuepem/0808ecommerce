"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductCarousel from "./ProductCarousel";
import ProductInformation from "./ProductInformation";

export default function ProductDetails() {
  return (
    <div className=" max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className=" flex flex-col sm:flex-row gap-4 p-4">
        {/* component A */}
        <div className="flex justify-center items-center sm:w-2/5 ">
          <ProductCarousel />
        </div>
        {/* component B */}
        <div className="flex flex-col gap-4 sm:w-3/5  ">
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold">
              Nomad Tumbler with Straw Lid 550ml & 650ml
            </h1>
            <p>
              Olive drab green insulated bottle with flared screw lid and flat
              top.
            </p>
          </div>
          <div className="flex flex-col  items-end gap-6 py-2 sm:flex-row justify-between sm:p-6">
            <p className=" font-semibold p-3">$ 199.00</p>
            <Button className="w-full sm:w-1/3">Add to Cart</Button>
          </div>
          <div >
            <ProductInformation />
          </div>
        </div>
      </div>
    </div>
  );
}
