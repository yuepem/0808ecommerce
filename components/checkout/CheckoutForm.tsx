"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useOrderStore from "@/stores/orderStore";
// import  { debounce } from "lodash.debounce";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  city?: string;
  province?: string;
  postalCode?: string;
  cardNumber?: string;
  expirationDate?: string;
  cvv?: string;
}

export default function CheckoutForm() {
  const createOrder = useOrderStore((state) => state.createOrder);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const validateField = (
    name: keyof FormData,
    value: string
  ): string | undefined => {
    switch (name) {
      case "firstName":
      case "lastName":
        return value.length < 3
          ? "Name must be at least 3 characters long"
          : undefined;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? "Invalid email address" : undefined;
      case "phoneNumber":
        const phoneRegex = /^\d{10,11}$/;
        return !phoneRegex.test(value)
          ? "Invalid phone number(10-11 digits)"
          : undefined;
      case "address":
      case "city":
        return value.length < 5
          ? "Address must be at least 5 characters long"
          : undefined;
      case "province":
        return value.length < 2
          ? "Province must be at least 2 characters long"
          : undefined;
      case "postalCode":
        const postalCodeRegex = /^\d{5}$/;
        return !postalCodeRegex.test(value)
          ? "Invalid postal code(5 digits)"
          : undefined;
      case "cardNumber":
        // 4 Digits for testing
        const cardNumberRegex = /^\d{4}$/;
        return !cardNumberRegex.test(value)
          ? "Invalid card number(4 digits for testing)"
          : undefined;
      case "expirationDate":
        const expirationDateRegex = /^\d{4}$/;
        return !expirationDateRegex.test(value)
          ? "Invalid expiration date(MM/YY"
          : undefined;
      case "cvv":
        const cvvRegex = /^\d{3}$/;
        return !cvvRegex.test(value) ? "Invalid CVV(3 digits)" : undefined;
      default:
        return undefined;
    }
  };

  useEffect(() => {
    const isAllFieldsValid = Object.values(formData).every(
      (value) => value !== ""
    );
    const hasNoErrors = Object.values(formErrors).every(
      (error) => error === undefined
    );
    if (isAllFieldsValid && hasNoErrors) setIsFormValid(true);
  }, [formData, formErrors]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = validateField(name as keyof FormData, value);
    setFormErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) {
      setError("Please check your inputs and fill in all fields correctly.");
      return;
    }
    setIsSubmitting(true);
    setError(null);

    try {
      const { cardNumber, expirationDate, cvv, ...customerInfo } = formData;

      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const orderId = await createOrder(customerInfo, {
        cardNumber,
        expirationDate,
        cvv,
      });

      console.log("Order created:", orderId);
      setOrderId(orderId);
      setTimeout(() => {
        setShowConfirmation(true);
      }, 2000); // 2 seconds delay
    } catch (error) {
      console.error("Failed to place order:", error);
      setError("Failed to place order. Please try again.");
      setIsSubmitting(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInvalidSubmit = () => {
    if (!isFormValid) {
      setError("Please check your inputs and fill in all fields correctly.");
      return;
    }
  };

  const inputFiled = (
    name: keyof FormData,
    placeholder: string,
    type: string = "text"
  ) => (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={formData[name]}
        onChange={handleChange}
        required
        className={`w-full px-3 py-2 border rounded-md ${
          formErrors[name] ? "border-red-500 " : ""
        } focus:outline-2 focus:ring-2 focus:ring-red-500`}
      />
      {formErrors[name] && (
        <p className="text-red-500 text-sm mt-1" role="alert">
          {formErrors[name]}
        </p>
      )}
    </div>
  );

  return (
    <div className="flex flex-col justify-between">
      <form onSubmit={handleSubmit}>
        {/* Shipping Information*/}
        <div className="bg-white space-y-4 p-6 mb-6 shadow-md rounded-lg ">
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {inputFiled("firstName", "First Name")}
            {inputFiled("lastName", "Last Name")}
            {inputFiled("email", "Email", "email")}
            {inputFiled("phoneNumber", "Phone Number")}
            {inputFiled("address", "Address")}
            {inputFiled("city", "City")}
            {inputFiled("province", "Province")}
            {inputFiled("postalCode", "Postal Code")}
          </div>
        </div>
        {/* Payment Information */}
        <div className="bg-white space-y-4 p-6 mb-6 shadow-md rounded-lg ">
          <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
          <div className="space-y-4">
            {inputFiled("cardNumber", "Card Number")}
          </div>
          <div className="flex gap-4">
            {inputFiled("expirationDate", "Expiration Date")}
            {inputFiled("cvv", "CVV")}
          </div>
        </div>
        {error && <p className="text-red-500" role="alert">{error}</p>}
        <div className="w-full mb-6">
          
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting || !isFormValid}
              onClick={!isFormValid ? handleInvalidSubmit : undefined}
            >
              {isSubmitting ? "Placing Order..." : "Place Order"}
            </Button>
          
        </div>
      </form>
      {showConfirmation && orderId && (
        <div className="mt-4 text-center">
          <p className="text-green-500 font-semibold">
            Order placed successfully!
          </p>
          <Link href={`/checkout/confirmation/${orderId}`}>
            <Button className="mt-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              View Order Confirmation
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
