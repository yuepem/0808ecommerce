'use client'
import React, {useState} from 'react';
import Image from "next/image";
import SearchBar from "./SearchBar";
import Cart from "@/components/cart/Cart";
// import Test from "@/components/cart/Test";

import { ShoppingCart as CartIcon, User as UserIcon } from 'lucide-react';

const NavBar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    return (
        <header>
            <nav className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex mx-4">
                    <Image
                        src="/next.svg"
                        alt="logo"
                        width={100}
                        height={100}
                    />
                </div>
                <div className=" flex items-end">
                    <ul className="flex gap-4 p-2 mr-2">
                        <SearchBar />
                        <CartIcon className="hover:cursor-pointer m-1" size={24} onClick={() => setIsCartOpen(true)} />
                        <UserIcon className="hover:cursor-pointer m-1" size={24} />
                        <Cart isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
                        {/* <Test isOpen={isCartOpen} setIsOpen={setIsCartOpen}/> */}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;



