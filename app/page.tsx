'use client';
import React, { useState, useEffect } from "react";
import Banner from "@/components/promotion/Banner";
import Categories from "@/components/categories/Categories";
import ProductsList from "@/components/products/ProductsList";
import Banner2 from "@/components/promotion/Banner2";
import useProductStore from "@/stores/productStore";

// Skeleton loader component
const ProductsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-gray-200 h-64 rounded-md animate-pulse"></div>
      ))}
    </div>
  );
};

export default function Home() {
  const { products, loading, error, fetchHomeProducts } = useProductStore();
  const [showLoading, setShowLoading] = useState(false);
  const [currentView, setCurrentView] = useState<"home" | "category" | "search">("home");

  useEffect(() => {
    fetchHomeProducts();
    const timer = setTimeout(() => setShowLoading(loading), 200);
    return () => clearTimeout(timer);
  }, [fetchHomeProducts, loading]); 

  // Determine what to display in the product list area
  const renderProductContent = () => {
    if (showLoading) {
      return <ProductsSkeleton />;
    }
    if (error) {
      return <div className="text-red-500">Error: {error}</div>;
    }
    return <ProductsList products={products} loading={loading} error={error} />; 
  };

  return (
    <main >
      <Banner />
      <Categories setCurrentView={setCurrentView} />
      {renderProductContent()}
      <Banner2 />
    </main>
  );
}