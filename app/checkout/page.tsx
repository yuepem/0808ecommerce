"use client";
import React, { useState } from "react";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import CheckoutOrderSummary from "@/components/checkout/CheckoutOrderSummary";

export default function Checkout() {
  return (
    <div className="bg-stone-100">
      <div className=" max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <div className="flex flex-col justify-between sm:px-10 md:flex-row gap-8">
          <div className="w-full  md:w-3/5">
            <CheckoutForm />
          </div>
          <div className="w-full md:w-2/5">
            <CheckoutOrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
