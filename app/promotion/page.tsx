"use client";
import PromotionDetails from "@/components/promotion/PromotionDetails";
import PromotionFAQs from "@/components/promotion/PromotionFAQs";

export default function Promotion() {
  return (
    <div>
      <div className="bg-slate-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Summer Sale Extra</h1>
          <p className="text-xl mb-8">
            Up to 50% off on selected items - Limited Time Only!
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      {/* Promotion Details */}
      <div className="bg-stone-50 ">
        <PromotionDetails />
      </div>
      {/* <PromotionFAQs /> */}
      <div className="bg-slate-50">
        <PromotionFAQs />
      </div>
    </div>
  );
}
