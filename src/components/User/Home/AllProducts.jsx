import React, { useState } from 'react'

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
                        <div className='bg-gray-100 rounded-xl hover:drop-shadow-lg w-[49%] md:w-72 mb-4' key={index}>
                            <img className='rounded' src={product.image} alt={`Trending Product ${index}`} />
                            <div className='mt-2 flex flex-col gap-1 justify-between bg-white p-3'>
                                <div className='flex gap-1 items-center'>
                                    <i className="ri-star-fill text-amber-500 text-sm"></i>
                                    <p className='p-400 text-sm'>4.8</p>
                                    <p className='text-sm'>(750)</p>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className='p-400 text-sm text-gray-900'>{product.name}</p>
                                    <div className='flex justify-between items-center'>
                                        <p className='p-600 text-lg text-gray-800'>&#8358; 500 <sup className='text-xs p-400 text-gray-600'>&#8358;300</sup></p>
                                        <button className='bg-[#6FCEAD] rounded-full px-2 py-1 md:px-3 md:py-2'><i className="ri-shopping-cart-2-line text-lg md:text-xl text-[#fff]"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className='p-500 md:mt-[-50px] mb-24  border w-fit border-[#6FCEAD] rounded px-5 py-2 hover:bg-[#6FCEAD] hover:text-white text-[#6FCEAD]'>View more</button>
        </div>
    )
}

export default AllProducts