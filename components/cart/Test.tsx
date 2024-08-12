"use client";
import React from "react";
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import CartItemCard from "@/components/cart/CartItemCard";
import { Button } from "@/components/ui/button";
import { X as CloseIcon} from "lucide-react";

export default function Cart({isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isCartOpen: boolean) => void }) {

  return (
    <>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <DialogBackdrop 
          className="fixed inset-0 bg-black bg-opacity-30 transition-opacity ease-in-out duration-1000" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-end transition-transform ease-in-out duration-1000">
          <DialogPanel className="bg-neutral-100 w-full max-w-md h-full overflow-scroll pt-6 px-3 text-left transform transition-transform ease-in-out duration-1000">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium">Shopping Cart</h2>
                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-500">
                  <CloseIcon size={24} />
                </button>
              </div>
              <div className="flex flex-col gap-2 ">
                <CartItemCard />
                <CartItemCard />
                <CartItemCard />
                <CartItemCard />
                <CartItemCard />
                <CartItemCard />
              </div>
              <hr className="border-t border-gray-400" />
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center px-2">
                  <h3 className="text-sm font-medium">Subtotal</h3>
                  <p className="text-sm font-medium">$159.00</p>
                </div>
                <div className="flex justify-center">
                  <Button className="w-3/4">Checkout</Button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}