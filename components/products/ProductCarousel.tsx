"use client"

import * as React from "react"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface ProductCarouselProps {
  images: string | string[];
}

export default function ProductCarousel({ images }: ProductCarouselProps) {
  // Convert single image to array if necessary
  const imageArray = Array.isArray(images) ? images : [images];

  return (
    <Carousel className="w-full max-w-xs relative pb-10">
      <CarouselContent>
        {imageArray.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image 
                    src={image} 
                    alt={`Product image ${index + 1}`} 
                    width={300} 
                    height={300} 
                    objectFit="cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="max-lg:absolute bottom-4 left-24 right-24 ">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  )
}