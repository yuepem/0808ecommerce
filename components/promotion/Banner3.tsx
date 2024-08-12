"use client";
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    /* background */
    <div className="bg-slate-400 text-white">
      {/*container */}
      <div className="max-w-7xl mx-auto py-6 px-4 flex justify-around  ">
        {/* content */}
        <div className=" mb-8 md:mb-0 flex flex-col justify-center ">
          <h2 className=" text-2xl font-bold mb-2">Special Offer</h2>
          <p className="text-lg mb-4">Get 50% off on all products</p>
          <Link href="/promotion">
            <Button>Shop Now</Button>
          </Link>
        </div>
        <div >
          <Image  src="/placeHolder.jpg" alt="Special offer" width={200} height={200} />
        </div>
      </div>
    </div>
  );
}