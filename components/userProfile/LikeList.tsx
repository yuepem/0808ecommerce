"use client";
import React from "react";

// Mock data
const wishlist = [
  { id: "1", name: "Wireless Headphones", price: "$79.99" },
  { id: "2", name: "Smart Watch", price: "$199.99" },
  { id: "3", name: "Portable Charger", price: "$49.99" },
];

export default function LikeList() {
  return (
    <div className="space-y-4">
      {wishlist.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b pb-2"
        >
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}
