"use client";
import React, { useState, useEffect } from "react";
import Banner from "@/components/promotion/Banner";
import Categories from "@/components/categories/Categories";
import ProductsList from "@/components/products/ProductsList";
import Banner2 from "@/components/promotion/Banner2";
import useProductStore from "@/stores/productStore";
// import CateBar from "@/components/categories/CateBar";

export default function Home() {
  const { products, loading, error, fetchHomeProducts, searchProducts } =
    useProductStore();
  const [currentView, setCurrentView] = useState<
    "home" | "category" | "search"
  >("home");

  const listName =
    currentView === "home"
      ? "Featured Products"
      : currentView === "category"
      ? "category results"
      : "search results";

  useEffect(() => {
    fetchHomeProducts();
  }, []);

  return (
    <main>
      <Banner />
      <Categories setCurrentView={setCurrentView} />
      {/* <CateBar /> */}
      <ProductsList products={products} listName={listName} />
      <Banner2 />
    </main>
  );
}
