import Image from "next/image";
import SearchBar from "./SearchBar";

import { ShoppingCart as CartIcon, User as UserIcon } from 'lucide-react';




const NavBar = () => {
    return (
        <header>
            <nav className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="bg-gray-400 flex ">
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
                        <CartIcon className="hover:cursor-pointer m-1"  size={24}/>
                        <UserIcon className="hover:cursor-pointer m-1" size={24}/>
                        
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;



