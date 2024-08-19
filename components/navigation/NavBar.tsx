"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import Cart from "@/components/cart/Cart";
// import Test from "@/components/cart/Test";

import { ShoppingCart as CartIcon, User as UserIcon, Search as SearchIcon } from "lucide-react";

const NavBar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // New state for search bar

  return (
    <header>
      <nav className="max-w-7xl mx-auto flex justify-between items-center ">
        <Link href="/">
          <div className="flex mx-4">
            <Image src="/next.svg" alt="logo" width={100} height={100} />
          </div>
        </Link>
        <div className="hidden sm:flex mx-4 flex-grow justify-end">
          <SearchBar className="w-1/2" />
        </div>
        <div className="flex items-end">
          <ul className="flex gap-4 p-2 mr-2">
            <SearchIcon
              className="hover:cursor-pointer m-1 sm:hidden"
              size={24}
              onClick={() => setIsSearchOpen(!isSearchOpen)} // Toggle search bar
            />
            <CartIcon
              className="hover:cursor-pointer m-1"
              size={24}
              onClick={() => setIsCartOpen(true)}
            />
            <Link href="/userProfile">
              <UserIcon className="hover:cursor-pointer m-1" size={24} />
            </Link>
            <Cart isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
            {/* <Test isOpen={isCartOpen} setIsOpen={setIsCartOpen}/> */}
          </ul>
        </div>
      </nav>
      {isSearchOpen && ( // Conditionally render search bar
        <div className="flex sm:hidden px-4">
          <SearchBar className="flex-grow" />
        </div>
      )}
    </header>
  );
};

export default NavBar;