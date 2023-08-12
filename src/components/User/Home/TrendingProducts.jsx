import React, { useState } from 'react'
import ProductCard from './Cards/ProductCard';

const TrendingProducts = () => {
    const trendingProducts = [
        {
            image: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/phones-tablets_300x240.png",
            name: "Apple IPhone 14 Pro Max 6.7'' 6GB 256GB ROM IOS 16 - Space Black"
        },

    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed

    const prevSlide = () => {
        const step = isMobile ? 2 : 4;
        const newIndex = (currentIndex - step + trendingProducts.length) % trendingProducts.length;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const step = isMobile ? 2 : 4;
        const newIndex = (currentIndex + step) % trendingProducts.length;
        setCurrentIndex(newIndex);
    };

    const visibleProducts = trendingProducts.slice(currentIndex, currentIndex + (isMobile ? 2 : 4));


    return (
        <>
            <div className='homepage-categories-container w-full'>
                <div className='flex items-center justify-between'>
                    <h1 className='homepage-categories-container-heading p-600 text-xl md:text-2xl'>Trending Products</h1>
                    <div className='flex gap-0'>
                        <div
                            onClick={prevSlide}
                            className='text-2xl p-1 rounded-tl rounded-bl border-r border-gray-100 bg-gray-100 text-gray-900 cursor-pointer'
                        >
                            <i className="ri-arrow-drop-left-line text-2xl"></i>
                        </div>
                        <div
                            onClick={nextSlide}
                            className='text-2xl p-1 bg-gray-100 rounded-tr rounded-br border-l text-gray-900 cursor-pointer'
                        >
                            <i className="ri-arrow-drop-right-line text-2xl"></i>
                        </div>
                    </div>
                </div>
                <div className='flex justify-start gap-2 md:gap-4 mt-7 w-full overflow-x-auto'>
                    {visibleProducts.map((product, index) => (
                        <ProductCard product={product} index={index} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default TrendingProducts