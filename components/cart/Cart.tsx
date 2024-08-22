"use client";
import React from "react";
import Link from "next/link";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import CartItemCard from "@/components/cart/CartItemCard";
import { Button } from "@/components/ui/button";
import { X as CloseIcon } from "lucide-react";

import useCartStore from "@/stores/cartStore";

/* interface CartItem {
  id: string;
  image: string; 
  name: string;
  price: number;
  quantity: number;
} */


export default function Cart({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isCartOpen: boolean) => void;
}) {
  const { items, getTotalPrice } = useCartStore();

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <DialogBackdrop
          className="fixed inset-0 bg-black bg-opacity-30"
          aria-hidden="true"
        />

        <div className="fixed inset-0 flex items-center justify-end ">
          <DialogPanel className="bg-neutral-100 w-full max-w-md h-full overflow-scroll  pt-6 px-3 text-left  ">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium">Shopping Cart</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <CloseIcon size={24} />
                </button>
              </div>
              <div className="flex flex-col gap-2 ">
                {
                  items.map((item) => (
                    <CartItemCard key={item.id} id={item.id} item={item} />
                  ))
                }
              </div>
              <hr className="border-t border-gray-400" />
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center px-2">
                  <h3 className="text-sm font-medium">Subtotal</h3>
                  <p className="text-sm font-medium">{getTotalPrice()} kr</p>
                </div>
                <div className="flex justify-center">
                  <Link href="/checkout" className="w-full">
                    <Button className="w-full" onClick={() => setIsOpen(false)}>Checkout</Button>
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}