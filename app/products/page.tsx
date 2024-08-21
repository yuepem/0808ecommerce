'use client'
import React from 'react';
import ProductDetails from '@/components/products/ProductDetails';
import ShippingInfo from '@/components/products/ShippingInfo';
import ProductsList from '@/components/products/ProductsList';



export default function ProductDetailsPage() {
    return (
        <div className='sm:my-10'>
            <ProductDetails />
            <ShippingInfo />
            <ProductsList />
        </div>
    )
    
}