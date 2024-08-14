'use client'
import React from 'react';
import ProductDetails from '@/components/products/ProductDetails';
import ShippingInfo from '@/components/products/ShippingInfo';

export default function ProductDetailsPage() {
    return (
        <div className='my-10'>
            <ProductDetails />
            <ShippingInfo />
        </div>
    )
    
}