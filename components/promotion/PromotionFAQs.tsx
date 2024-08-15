"use client";
import React from "react";
import Image from "next/image";
import faqs from "@/public/faqs.jpg";

import AccordionComponent from "@/components/ui/AccordionComponent";

// Mock data for the accordion
const accordionInfo = [
  {
    question: "What is the promotion about?",
    answer:
      "It's a summer sale, up to 50% off on selected items - Limited Time Only!",
  },
  {
    question: "How can I participate?",
    answer:
      "By shopping, early access for loyalty program members, and additional 10% off for online orders over $100.",
  },
  {
    question: "When does the promotion start?",
    answer: "The promotion starts on June 1st and ends on June 30th.",
  },
  {
    question: "What are the terms and conditions?",
    answer: "The promotion is valid for online orders only.",
  },
];

export default function PromotionFAQs() {
  return (
    <div className=" py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Image src={faqs} alt="FAQs" className="rounded-lg shadow-md" />
          </div>
          <div className="bg-stone-100 p-4 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <AccordionComponent data={accordionInfo} />
          </div>
        </div>
      </div>
    </div>
  );
}
