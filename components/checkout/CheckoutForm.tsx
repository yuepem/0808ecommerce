"use client";
import React, {useState} from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link"; 

export default function CheckoutForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        provence: "",
        postalCode: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
    });

    const handleChange = (e:any) =>{
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    };

    const handleSubmit = (e:any) =>{
        e.preventDefault();
        console.log(formData);
    };

  return (
    <div className="flex flex-col justify-between">
      <form onSubmit={handleSubmit}>
        {/* Shipping Information*/}
        <div className="bg-white space-y-4 p-6 mb-6 shadow-md rounded-lg ">
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange}  required className="w-full px-3 py-2 border rounded-md"/>
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md"/>
            <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md"/>
            <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md"/>
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md"/>
            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md"/>
            <input type="text" name="provence" placeholder="Provence" value={formData.provence} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md"/>
            <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md"/>
          </div>
        </div>
        {/* Payment Information */}
        <div className="bg-white space-y-4 p-6 mb-6 shadow-md rounded-lg ">
          <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
          <div className="space-y-4">
            <input type="text" name="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange}  required className="w-full px-3 py-2 border rounded-md"/>
          </div>
          <div className=" flex gap-4">
            <input type="text" name="expirationDate" placeholder="MM/YY" value={formData.expirationDate} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md"/>
            <input type="text" name="cvv" placeholder="CVV" value={formData.cvv} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md"  />
          </div>
        </div>
        <div className="w-full mb-6">
          <Link href="/checkout/confirmation">
            <Button type="submit" className="w-full">Place Order</Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
