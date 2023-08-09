import React, { useState } from 'react'

const TrendingProducts = () => {
    const trendingProducts = [
        {
            image: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/phones-tablets_300x240.png",
            category: "Phones & Tablet"
        },
        {
            image: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/groceries_300x240v2.png",
            category: "Groceries"
        },
        {
            image: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/generic_300x240.jpg",
            category: "Computers"
        },
        {
            image: "https://ng.jumia.is/cms/0-6-anniversary/2023/Brand-day/30-Nivea/generic_300x240.jpg",
            category: "Health & Beauty"
        },
        {
            image: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/televisions_300x240.png",
            category: "Televisions"
        },
        {
            image: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/fash_300x240.jpg",
            category: "Fashions"
        },
        {
            image: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/refrigerators_300x240.png",
            category: "Refrigerators"
        },
        {
            image: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/earphones_300x240.png",
            category: "Mobile Accessories"
        },
        {
            image: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/generator.gif",
            category: "Generators"
        },
        {
            image: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/fashion_300x240.png",
            category: "Men's Sneakers"
        },
        {
            image: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/watches_300x240.png",
            category: "Watches"
        },
        {
            image: "https://ng.jumia.is/cms/0-1-initiatives/clearance-sale/2023/Clearance.gif",
            category: "Clearance Sales"
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
            <div className='homepage-categories-container bg-gray-200 w-full'>
                <div className='flex items-center justify-between'>
                    <h1 className='homepage-categories-container-heading p-700 text-xl md:text-2xl'>Trending Products</h1>
                    <div className='flex gap-0'>
                        <div
                            onClick={prevSlide}
                            className='text-2xl p-1 rounded-tl rounded-bl border-r border-gray-100 bg-white text-gray-900 cursor-pointer'
                        >
                            <i className="ri-arrow-drop-left-line text-2xl"></i>
                        </div>
                        <div
                            onClick={nextSlide}
                            className='text-2xl p-1 bg-white rounded-tr rounded-br border-l text-gray-900 cursor-pointer'
                        >
                            <i className="ri-arrow-drop-right-line text-2xl"></i>
                        </div>
                    </div>
                </div>
                <div className='flex justify-start gap-2 md:gap-4 mt-7 w-full overflow-x-auto'>
                    {visibleProducts.map((product, index) => (
                        <div className='bg-gray-100 rounded-xl hover:drop-shadow-lg w-48 md:w-72 mb-4' key={index}>
                            <img className='rounded' src={product.image} alt={`Trending Product ${index}`} />
                            <div className='p-400 text-sm text-center mt-2 bg-white'>
                                {product.category}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TrendingProducts