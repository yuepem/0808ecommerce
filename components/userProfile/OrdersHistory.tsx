"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

//Mock data
const orders = [
  { 
    id: "1234", 
    date: "2023-07-15", 
    total: "$120.00", 
    status: "Delivered",
    items: [
      { name: "Item 1", quantity: 1, price: "$50.00" },
      { name: "Item 2", quantity: 2, price: "$35.00" }
    ]
  },
  { 
    id: "5678", 
    date: "2023-06-30", 
    total: "$85.50", 
    status: "Shipped",
    items: [
      { name: "Item 3", quantity: 1, price: "$85.50" }
    ]
  },
  { 
    id: "9012", 
    date: "2023-06-15", 
    total: "$200.00", 
    status: "Processing",
    items: [
      { name: "Item 4", quantity: 4, price: "$50.00" }
    ]
  },
];

export default function OrdersHistory() {
  const [expandedOrder, setExpandedOrder] = useState(null);

  const toggleOrderExpansion = (orderId: any) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  if (!orders || orders.length === 0) {
    return <p>No orders found</p>;
  }

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div key={order.id} className="border rounded-lg overflow-hidden">
          <div
            className="flex justify-between items-center p-4 cursor-pointer bg-gray-50"
            onClick={() => toggleOrderExpansion(order.id)}
          >
            <div>
              <p className="font-medium">Order #{order.id}</p>
              <p className="text-sm text-gray-600">{order.date}</p>
            </div>
            <div className="text-right flex items-center">
              <div className="mr-4">
                <p>{order.total}</p>
                <p className="text-sm text-gray-600">{order.status}</p>
              </div>
              {expandedOrder === order.id ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </div>
          </div>
          {expandedOrder === order.id && (
            <div className="p-4 bg-white">
              <h4 className="font-medium mb-2">Order Details:</h4>
              {order.items &&
                order.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center mb-2"
                  >
                    <span>
                      {item.name} (x{item.quantity})
                    </span>
                    <span>{item.price}</span>
                  </div>
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}