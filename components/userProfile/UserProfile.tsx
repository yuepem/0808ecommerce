"use client";

import React, { useState } from "react";
import Image from "next/image";
import Profile from "@/components/userProfile/Profile";
import OrdersHistory from "@/components/userProfile/OrdersHistory";
import LikeList from "@/components/userProfile/LikeList";
import avatar from "@/public/avatar.png";
import { CreditCard, LogOut } from "lucide-react";

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <Profile />;
      case "orders":
        return <OrdersHistory />;
      case "wishlist":
        return <LikeList />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Image
          src={avatar}
          alt="XiaoYue avatar"
          className="w-20 h-20 rounded-full mr-4"
        />
        <h1 className="text-2xl font-medium">Welcome, Xiao Yue</h1>
      </div>

      <div className="flex mb-6">
        <button
          onClick={() => setActiveTab("profile")}
          className={`mr-4 pb-2 ${
            activeTab === "profile" ? "border-b-2 border-gray-800" : ""
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab("orders")}
          className={`mr-4 pb-2 ${
            activeTab === "orders" ? "border-b-2 border-gray-800" : ""
          }`}
        >
          Orders
        </button>
        <button
          onClick={() => setActiveTab("wishlist")}
          className={`mr-4 pb-2 ${
            activeTab === "wishlist" ? "border-b-2 border-gray-800" : ""
          }`}
        >
          Wishlist(pending)
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">{renderContent()}</div>

      <div className="mt-8 flex justify-between">
        <button className="text-gray-600 hover:text-gray-800 flex items-center">
          <CreditCard size={20} className="mr-2" />
          Payment Methods
        </button>
        <button className="text-gray-600 hover:text-gray-800 flex items-center">
          <LogOut size={20} className="mr-2" />
          Log Out
        </button>
      </div>
    </div>
  );
}
