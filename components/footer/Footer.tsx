'use client';
import React from "react";
import Link from "next/link";



const Footer = () => {
  return (
    <footer className="bg-stone-100 text-black mt-6 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-lg font-semibold mb-4">About Us</p>
            <p className="text-black">Swed-Shark is your one-stop shop for all your needs.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-black hover:text-gray-500 hover:font-semibold">Home</a></li>
              <li><a href="#" className="text-black hover:text-gray-500 hover:font-semibold">Products</a></li>
              <li><Link href="/about" className="text-black hover:text-gray-500 hover:font-semibold">About</Link></li>
              <li><a href="#" className="text-black hover:text-gray-500 hover:font-semibold">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-black">Email: info@swed-shark.com</p>
            <p className="text-black">Phone: +1 234 567 890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;