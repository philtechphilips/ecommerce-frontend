import React, { useState } from 'react'

const TrendingProducts = () => {
    const trendingProducts = [
        {
            image: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/phones-tablets_300x240.png",
            name: "Phones & Tablet"
        },
        {
            image: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/groceries_300x240v2.png",
            name: "Groceries"
        },
        {
            image: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/generic_300x240.jpg",
            name: "Computers"
        },
        {
            image: "https://ng.jumia.is/cms/0-6-anniversary/2023/Brand-day/30-Nivea/generic_300x240.jpg",
            name: "Health & Beauty"
        },
        {
            image: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/televisions_300x240.png",
            name: "Televisions"
        },
        {
            image: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/fash_300x240.jpg",
            name: "Fashions"
        },
        {
            image: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/refrigerators_300x240.png",
            name: "Refrigerators"
        },
        {
            image: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/earphones_300x240.png",
            name: "Mobile Accessories"
        },
        {
            image: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/generator.gif",
            name: "Generators"
        },
        {
            image: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/fashion_300x240.png",
            name: "Men's Sneakers"
        },
        {
            image: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/watches_300x240.png",
            name: "Watches"
        },
        {
            image: "https://ng.jumia.is/cms/0-1-initiatives/clearance-sale/2023/Clearance.gif",
            name: "Clearance Sales"
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
                            <div className='mt-2 flex items-center justify-between bg-white p-3'>
                                <div>
                                    <p className='p-700 text-sm text-gray-700'>{product.name}</p>
                                    <p className='p-700 text-lg text-gray-800'>&#8358; 500</p>
                                </div>
                                <div className='p-1 h-9 w-9 flex items-center justify-center rounded-full bg-gray-900'>
                                    <i className="ri-shopping-cart-line text-lg text-white"></i>
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