"use client";
import React from "react";
import { Container, Plane, CreditCard, Undo2 } from "lucide-react";

export default function ShippingInfo() {
  return (
    <div className=" max-w-7xl mx-auto my-6 sm:px-6 lg:px-8">
      <div className="bg-stone-100 rounded-2xl px-10 py-6 flex flex-col justify-between sm:flex-row gap-4">
        <div className="flex items-center gap-2 px-2 sm:flex-col sm:items-start md:flex-row ">
          <div className="bg-white rounded-xl p-4 ">
            <Container size={30} />
          </div>
          <div >
            <h2 className="font-semibold">Free Shipping</h2>
            <p className="font-light text-sm">No delivery fees on orders above $100</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-2 sm:flex-col sm:items-start md:flex-row ">
          <div className="bg-white rounded-xl p-4 ">
            <CreditCard size={30} />
          </div>
          <div >
            <h2 className="font-semibold">Secure Payments</h2>
            <p className="font-light text-sm">Safe and reliable payment methods</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-2 sm:flex-col sm:items-start md:flex-row ">
          <div className="bg-white rounded-xl p-4 ">
            <Undo2 size={30} />
          </div>
          <div >
            <h2 className="font-semibold">45 Days Return</h2>
            <p className="font-light text-sm">Easy returns within 45 days of buying</p>
          </div>
        </div>

      </div>
    </div>
  );
}
