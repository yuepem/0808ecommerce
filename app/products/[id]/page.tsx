"use client";
import React from "react";
import ProductDetails from "@/components/products/ProductDetails";
import ShippingInfo from "@/components/products/ShippingInfo";
import ProductsList from "@/components/products/ProductsList";

import useProductStore from "@/stores/productStore";

export default function ProductDetailsPage({ params }: any) {
  const { getProductById, relatedProducts } = useProductStore();

  const { id } = params;
  const product = getProductById(id);

  return product ? (
    <div className="sm:my-10">
      <ProductDetails product={product} />
      <ShippingInfo  />
      <ProductsList products={relatedProducts} />
    </div>
  ) : (
    <div className="sm:my-10">
      <p>Product not found</p>
    </div>
  );
}
