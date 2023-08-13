import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import phone from '../../../assets/images/icons8-phone-100.png'
import groceries from '../../../assets/images/icons8-groceries-96.png'
import computer from '../../../assets/images/icons8-computer-100.png'
import beauty from '../../../assets/images/icons8-cream-64.png'
import television from '../../../assets/images/icons8-television-64.png'
import fashion from '../../../assets/images/icons8-fashions-64.png'
import accessories from '../../../assets/images/icons8-headphone-64.png'
import refrigerators from '../../../assets/images/icons8-refrigerator-64.png'
import watch from '../../../assets/images/icons8-watch-96.png'
import sneakers from '../../../assets/images/icons8-sneakers-64.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Categories = () => {

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
        <>
            <div className='homepage-categories-container relative'>
                <h1 className='homepage-categories-container-heading p-600 text-xl md:text-2xl'>Categories</h1>
                <Swiper  loop={true} spaceBetween={10} breakpoints={{  320: {
                    slidesPerView: 1.8,
                    spaceBetween: 5, 
                },640: {
                    slidesPerView: 4,
                    spaceBetween: 5, 
                },1000: {
                    slidesPerView: 8.5,
                    spaceBetween: 5, 
                }, }} className='mt-7'>
                    {
                        categories.map((categories, index) => (
                            <SwiperSlide className='flex flex-col items-center justify-center bg-blue-100 rounded w-[130px] gap-2 md:w-36 mb-4 px-3 py-5' key={index}>
                                <img className='rounded w-[70px] item-center' src={categories.image}></img>
                                <p className='p-400 text-sm'>{categories.category}</p>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    )
}

export default Categories