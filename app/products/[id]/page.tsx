"use client";
import React, { useState, useEffect } from "react";
import ProductDetails from "@/components/products/ProductDetails";
import ShippingInfo from "@/components/products/ShippingInfo";
import ProductsList from "@/components/products/ProductsList";

import useProductStore from "@/stores/productStore";

interface ProductDetailsPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { getProductById, relatedProducts, fetchRelatedProducts } =
    useProductStore();

  const [product, setProduct] = useState<any>(null);

  const { id } = params;

  useEffect(() => {
    // CHANGE: Created an async function to fetch the product
    const fetchProduct = async () => {
      const fetchedProduct = await getProductById(id);

      setProduct(fetchedProduct);

      if (fetchedProduct) {
        fetchRelatedProducts(id);
      }
    };

    fetchProduct();
  }, [id, getProductById, fetchRelatedProducts]);

  return product ? (
    <div className="sm:my-10">
      <ProductDetails product={product} />
      <ShippingInfo />
      <ProductsList products={relatedProducts} loading={false} error={null} />
    </div>
  ) : (
    <div className="sm:my-10">
      <p>Product not found</p>
    </div>
  );
}
