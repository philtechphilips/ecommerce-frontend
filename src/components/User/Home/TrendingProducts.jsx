import React, { useState } from 'react'

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
                        <div className='bg-gray-100 rounded-xl hover:drop-shadow-lg w-[49%] md:w-72 mb-4' key={index}>
                            <img className='rounded' src={product.image} alt={`Trending Product ${index}`} />
                            <div className='mt-2 flex flex-col gap-1 justify-between bg-white p-3'>
                                <div className='flex gap-1 items-center'>
                                    <i className="ri-star-fill text-amber-500 text-sm"></i>
                                    <p className='p-400 text-sm'>4.8</p>
                                    <p className='text-sm'>(750)</p>
                                </div>
                                <div>
                                    <p className='p-400 text-sm text-gray-900'>{product.name}</p>
                                    <p className='p-600 text-lg text-gray-800'>&#8358; 500 <sup className='text-xs p-400 text-gray-600'>&#8358;300</sup></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TrendingProducts