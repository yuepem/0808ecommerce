"use client";
import React from "react";
// import Link from "next/link";
import Image from "next/image";
import useProductStore from "@/stores/productStore";

// Mock data for categories
const categories = [
  { id: 0, name: "All", href: "/categories/all" },
  { id: 1, name: "Electronics", href: "/categories/electronics" },
  { id: 2, name: "Clothing", href: "/categories/clothing" },
  { id: 3, name: "Home", href: "/categories/home" },
  { id: 4, name: "Sports", href: "/categories/sports" },
  { id: 5, name: "Books", href: "/categories/books" },
  { id: 6, name: "Toys", href: "/categories/toys" },
];

export default function Categories( {setCurrentView}: any) {
  const { fetchProductsByCategory } = useProductStore();
  const handleClick = (id: number) => {
    fetchProductsByCategory(id);
    setCurrentView("category");
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-6 mx-1 sm:mx-8 px-2">
        <h2 className="text-2xl font-semibold pb-4">Categories</h2>
        <div className="overflow-x-scroll">
          <div className="flex space-x-4 pb-4 w-max">
            {categories.map((category) => (
              <div
                key={category.href}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-md"
                onClick={() => handleClick(category.id)}
              >
                <Image
                  className="rounded-md"
                  src="/placeHolder.jpg"
                  alt={category.name}
                  width={100}
                  height={100}
                />
                <p className="text-center text-sm pt-1">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
