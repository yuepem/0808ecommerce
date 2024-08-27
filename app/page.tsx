"use client";
import React, { useState, useEffect } from "react";
import Banner from "@/components/promotion/Banner";
import Categories from "@/components/categories/Categories";
import ProductsList from "@/components/products/ProductsList";
import Banner2 from "@/components/promotion/Banner2";
import useProductStore from "@/stores/productStore";




export default function Home() {
  
  const { products, loading, error, fetchHomeProducts } =
    useProductStore();
  const [currentView, setCurrentView] = useState<
    "home" | "category" | "search"
  >("home");

  // const listName =
  //   currentView === "home"
  //     ? "Featured Products"
  //     : currentView === "category"
  //     ? "category results"
  //     : "search results";

  useEffect(() => {
    fetchHomeProducts();
  }, [fetchHomeProducts]);

  return (
    <main>
      <Banner />
      <Categories  setCurrentView={setCurrentView} />
      <ProductsList products={products} loading={loading} error={error}  />
      <Banner2 />
    </main>
  );
}
