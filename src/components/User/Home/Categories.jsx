import React from 'react'

const Categories = () => {

    const categories = [
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
    return (
        <>
            <div className='homepage-categories-container'>
                <h1 className='homepage-categories-container-heading p-700 text-xl md:text-2xl'>Categories</h1>
                <div className='flex justify-center items-center gap-2 mt-7 flex-wrap'>
                    {
                        categories.map((categories, index) => (
                            <div className='bg-white rounded-xl hover:drop-shadow-lg w-36 md:w-48 mb-4' key={index}>
                                <img className='rounded' src={categories.image}></img>
                                <div className='p-400 text-sm text-center mt-2 bg-white'>
                                    {categories.category}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Categories