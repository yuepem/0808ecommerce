"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const AboutPage = () => {
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-8 text-center">
        About Us & Contact
      </h1>

      <div className="flex flex-col gap-4">
        {/* About Us Section */}
        <div>
          <h2 className="text-2xl font-medium mb-4">Our Story</h2>
          <p className="mb-4 text-gray-600">
            Swed-Shark was founded in 2010 with a simple mission: to provide
            high-quality products and exceptional customer service. Over the
            years, we've grown from a small startup to a leading e-commerce
            platform, but our core values remain the same.
          </p>
          <p className="mb-6 text-gray-600">
            We believe in sustainability, innovation, and putting our customers
            first. Every product in our catalog is carefully selected to ensure
            it meets our high standards of quality and ethics.
          </p>
          <h3 className="text-xl font-medium mb-3">Contact Information</h3>
          <div className="space-y-2 text-gray-600">
            <div className="flex items-center">
              <Mail size={18} className="mr-2" />
              <span>info@swed-shark.com</span>
            </div>
            <div className="flex items-center">
              <Phone size={18} className="mr-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <MapPin size={18} className="mr-2" />
              <span>123 E-commerce St, Digital City, 12345</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
