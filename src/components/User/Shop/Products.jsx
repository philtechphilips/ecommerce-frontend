import React from 'react'
import ProductCard from '../Home/Cards/ProductCard'
import groceries from '../../../assets/images/icons8-groceries-96.png'
import computer from '../../../assets/images/icons8-computer-100.png'
import beauty from '../../../assets/images/icons8-cream-64.png'
import television from '../../../assets/images/icons8-television-64.png'
import fashion from '../../../assets/images/icons8-fashions-64.png'
import accessories from '../../../assets/images/icons8-headphone-64.png'
import refrigerators from '../../../assets/images/icons8-refrigerator-64.png'
import watch from '../../../assets/images/icons8-watch-96.png'
import sneakers from '../../../assets/images/icons8-sneakers-64.png'
import phone from '../../../assets/images/icons8-phone-100.png'

const Products = () => {
  const products = [
    {
      image: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/phones-tablets_300x240.png",
      name: "Apple IPhone 14 Pro Max 6.7'' 6GB 256GB ROM IOS 16 - Space Black"
    },
    {
      image: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/phones-tablets_300x240.png",
      name: "Apple IPhone 14 Pro Max 6.7'' 6GB 256GB ROM IOS 16 - Space Black"
    },
    {
      image: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/phones-tablets_300x240.png",
      name: "Apple IPhone 14 Pro Max 6.7'' 6GB 256GB ROM IOS 16 - Space Black"
    },
    {
      image: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/phones-tablets_300x240.png",
      name: "Apple IPhone 14 Pro Max 6.7'' 6GB 256GB ROM IOS 16 - Space Black"
    },
    {
      image: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/phones-tablets_300x240.png",
      name: "Apple IPhone 14 Pro Max 6.7'' 6GB 256GB ROM IOS 16 - Space Black"
    },
    {
      image: "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/phones-tablets_300x240.png",
      name: "Apple IPhone 14 Pro Max 6.7'' 6GB 256GB ROM IOS 16 - Space Black"
    }
  ]

  const categories = [
    {
      image: phone,
      category: "Phones & Tablet"
    },
    {
      image: groceries,
      category: "Groceries"
    },
    {
      image: computer,
      category: "Computers"
    },
    {
      image: beauty,
      category: "Health & Beauty"
    },
    {
      image: television,
      category: "Televisions"
    },
    {
      image: fashion,
      category: "Fashions"
    },
    {
      image: refrigerators,
      category: "Refrigerators"
    },
    {
      image: accessories,
      category: "Electronics"
    },
    {
      image: sneakers,
      category: "Sneakers"
    },
    {
      image: watch,
      category: "Watches"
    },
  ]

  return (
    <div className='flex flex-col items-center'>
      <div className='homepage-categories-container bg-white w-full'>
        <div className='flex items-center justify-between'>
          <h1 className='homepage-categories-container-heading p-600 text-xl md:text-2xl'>All Products</h1>
        </div>
        <div className='flex flex-wrap justify-start gap-1 md:gap-4 mt-7 w-full'>
          {products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </div>
      <button className='p-500 md:mt-[0px] mb-24  border w-fit border-[#6FCEAD] rounded px-5 py-2 hover:bg-[#6FCEAD] hover:text-white text-[#6FCEAD]'>View more</button>
    </div>
  )
}


export default Products