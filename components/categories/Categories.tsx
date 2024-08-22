"use client";
import React, { useEffect } from "react";
// import Link from "next/link";
import Image from "next/image";
import useProductStore from "@/stores/productStore";
import useCategoryStore from "@/stores/categoryStor";


export default function Categories( {setCurrentView}: any) {
  const { categories, loading, error, fetchCategories } = useCategoryStore();
  const { fetchProductsByCategory } = useProductStore();

  useEffect( () => {
    fetchCategories();
  }, [fetchCategories])
  const handleClick = (id: number) => {
    fetchProductsByCategory(id);
    setCurrentView("category");
  }
  
  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error loading categories: {error}</p>;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-6 mx-1 sm:mx-8 px-2">
        <h2 className="text-2xl font-semibold pb-4">Categories</h2>
        <div className="overflow-x-scroll">
          <div className="flex space-x-4 pb-4 w-max">
            {categories.length > 0 ? (
              categories.map((category) => (
                <div
                  key={category.id}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-md cursor-pointer"
                  onClick={() => handleClick(category.id)}
                >
                  <Image
                    className="rounded-md"
                    src="/placeHolder.jpg"
                    alt={category.name}
                    width={100}
                    height={100}
                  />
                  <p className="text-center text-sm pt-1">{category.name}</p>
                </div>
              ))
            ) : (
              <p>No categories available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}