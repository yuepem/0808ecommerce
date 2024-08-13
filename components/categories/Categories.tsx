"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Mock data for categories
const categories = [
  { name: "All", href: "/categories/all" },
  { name: "Electronics", href: "/categories/electronics" },
  { name: "Clothing", href: "/categories/clothing" },
  { name: "Home", href: "/categories/home" },
  { name: "Sports", href: "/categories/sports" },
  { name: "Books", href: "/categories/books" },
  { name: "Toys", href: "/categories/toys" },
];

export default function Categories() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-6 mx-1 sm:mx-8 px-2">
        <h2 className="text-2xl font-semibold pb-4">Categories</h2>
        <div className="overflow-x-scroll">
          <div className="flex space-x-4 pb-4 w-max">
            {categories.map((category) => (
              <div key={category.href} className="w-20 h-20 sm:w-24 sm:h-24 rounded-md">
                <Link href={category.href}>
                  <Image
                    className="rounded-md"
                    src="/placeHolder.jpg"
                    alt={category.name}
                    width={100}
                    height={100}
                  />
                  <p className="text-center text-sm pt-1">{category.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


