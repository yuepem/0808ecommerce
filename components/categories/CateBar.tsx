"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const categories = [
  { name: "All", href: "/categories/all" },
  { name: "Electronics", href: "/categories/electronics" },
  { name: "Clothing", href: "/categories/clothing" },
  { name: "Home", href: "/categories/home" },
  { name: "Sports", href: "/categories/sports" },
  { name: "Books", href: "/categories/books" },
  { name: "Toys", href: "/categories/toys" },
];

export default function CateBar() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center items-center">
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="flex justify-between">
                    <CardContent className="flex p-2">
                      <div className="flex space-x-4 p-4 w-max">
                        {categories.map((category) => (
                          <div
                            key={category.href}
                            className="w-20 h-20 sm:w-24 sm:h-24 rounded-md"
                          >
                            <Link href={category.href}>
                              <Image
                                className="rounded-md"
                                src="/placeHolder.jpg"
                                alt={category.name}
                                width={100}
                                height={100}
                              />
                              <p className="text-center text-sm pt-1">
                                {category.name}
                              </p>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
