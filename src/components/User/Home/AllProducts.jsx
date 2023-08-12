import React, { useState } from 'react'
import ProductCard from './Cards/ProductCard'

const AllProducts = () => {
    const products = [
        {
            image: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/phones-tablets_300x240.png",
            name: "Apple IPhone 14 Pro Max 6.7'' 6GB 256GB ROM IOS 16 - Space Black"
        }
    ]

    return (
        <div className='flex flex-col items-center'>
            <div className='homepage-categories-container bg-white w-full'>
                <div className='flex items-center justify-between'>
                    <h1 className='homepage-categories-container-heading p-600 text-xl md:text-2xl'>All Products</h1>
                </div>
                <div className='flex flex-wrap justify-start gap-1 md:gap-4 mt-7 w-full'>
                    {products.map((product, index) => (
                       <ProductCard product={product} index={index} />
                    ))}
                </div>
            </div>
            <button className='p-500 md:mt-[-50px] mb-24  border w-fit border-[#6FCEAD] rounded px-5 py-2 hover:bg-[#6FCEAD] hover:text-white text-[#6FCEAD]'>View more</button>
        </div>
    )
}

export default AllProducts