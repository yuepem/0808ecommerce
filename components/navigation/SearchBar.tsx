"use client";
import React from "react";

import { Search as SearchIcon } from "lucide-react";

const SearchBar = ({ className = "" }: { className?: string }) => {
  
  return (
    <div className={` relative flex items-center  p-2 ${className}`}>
      <input
        className="border-b-2 px-2 py-1 w-full"
        type="text"
        placeholder="Search..."
      />
      <SearchIcon className="absolute right-3 hover:cursor-pointer" size={20} />
    </div>
  );
};

export default SearchBar;
