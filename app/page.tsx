"use client"

import NavBar from "@/components/navigation/NavBar";
import Banner from "@/components/promotion/Banner";
import Categories from "@/components/categories/Categories";
import ProductsList from "@/components/products/ProductsList";
import Banner3 from "@/components/promotion/Banner3";
import Banner2 from "@/components/promotion/Banner2";
import Footer from "@/components/footer/Footer";



export default function Home() {
  
  return (
    <main>
      <NavBar />
      <Banner />
      <Categories />

      <ProductsList />
      <Banner3 />
      <Banner2 />
      <Footer />
    </main>
  );
}
