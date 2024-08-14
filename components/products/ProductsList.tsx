"use client";

import React from 'react';
import ProductCard from "./ProductCard";

export default function ProductsList() {
  return (
    <div className=" text-black font-bold" >
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between pb-4">
            <h1 className="text-2xl font-semibold pb-2">Products</h1>
            <p className="text-gray-500 text-sm">Showing 100 products</p>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}
