"use client";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

export default function AccordionComponent({ data }: { data: any }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {Array.isArray(data) && data.length > 0 ? (
        data.map((item: any, index: any) => (
          <AccordionItem key={`item-${index}`} value={`item-${index + 1}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))
      ) : (
        <p>No more information for now</p>
      )}
    </Accordion>
  );
}