"use client";
import React, { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import useProductStore from "@/stores/productStore";

const SearchBar = ({ className = "" }: { className?: string }) => {
  const { searchProducts } = useProductStore();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    searchProducts(searchTerm);
    setSearchTerm("");
  };

  return (
    <div className={` relative flex items-center  p-2 ${className}`}>
      <input
        className="border-b-2 px-2 py-1 w-full"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        onKeyUp={(e) => e.key === "Enter" && handleSearch()}
      />
      <button onClick={handleSearch}>
        <SearchIcon
          className="absolute right-3 hover:cursor-pointer"
          size={20}
        />
      </button>
    </div>
  );
};

export default SearchBar;
