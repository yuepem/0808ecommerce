"use client";
import React from "react";
import Image from "next/image";
import summer from "@/public/summer.jpg";


export default function PromotionDetails() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-slate-100 p-4 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-6">Promotion Details</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Up to 50% off on summer clothing and accessories</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Additional 10% off for online orders over $100</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>
                Free shipping on all orders during the promotion period
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Early access for loyalty program members</span>
            </li>
          </ul>
          <p className="mt-6 text-gray-600">
            *Offer valid from July 1 to August 31, 2024. Terms and conditions
            apply.
          </p>
        </div>
        <div>
          <Image
            src={summer}
            alt="Summer Sale"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
