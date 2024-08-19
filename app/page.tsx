"use client"

import Banner from "@/components/promotion/Banner";
import Categories from "@/components/categories/Categories";
import ProductsList from "@/components/products/ProductsList";
import Banner2 from "@/components/promotion/Banner2";
import CateBar from "@/components/categories/CateBar";



export default function Home() {
  
  return (
    <main >
      <Banner />
      <Categories />
      {/* <CateBar /> */}
      <ProductsList />
      <Banner2 />
    </main>
  );
}