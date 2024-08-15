"use client";
import React from "react";

// Mock data for cart items
const cartItems = [
  { id: 1, name: "Product 1", price: 10, quantity: 2 },
  { id: 2, name: "Product 2", price: 15, quantity: 1 },
];

const subtotal = cartItems.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0
);
const shipping = 5;
const total = subtotal + shipping;

export default function CheckoutOrderSummary() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between">
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>${item.price * item.quantity}</span>
          </div>
        ))}
        <div className="border-t pt-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>${shipping}</span>
          </div>
          <div className="flex justify-between font-semibold mt-2">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
