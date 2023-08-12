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

const Categories = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 8
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            partialVisibilityGutter: 30
        }
    };

    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
            <div className='flex gap-0 absolute top-5 right-16'>
                <div onClick={() => previous()} className={`${currentSlide === 0 ? 'disable' : ''} text-2xl p-1 rounded-tl rounded-bl border-r border-gray-100 bg-gray-100 text-gray-900 cursor-pointer`}>
                    <i className="ri-arrow-drop-left-line text-2xl"></i>
                </div>
                <div onClick={() => next()}
                    className='text-2xl p-1 bg-gray-100 rounded-tr rounded-br border-l text-gray-900 cursor-pointer'
                >
                    <i className="ri-arrow-drop-right-line text-2xl"></i>
                </div>
            </div>

        );
    };

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
                <Carousel responsive={responsive} arrows={false} customButtonGroup={<ButtonGroup />} partialVisible={true} swipeable={true} keyBoardControl={true} infinite={true} customTransition="all .1"
                    transitionDuration={100} removeArrowOnDeviceType={["tablet", "mobile"]} draggable={true} className='mt-7 static'>
                    {
                        categories.map((categories, index) => (
                            <div className='flex flex-col items-center justify-center bg-blue-100 rounded w-[130px] gap-2 md:w-36 mb-4 px-3 py-5' key={index}>
                                <img className='rounded w-[70px] item-center' src={categories.image}></img>
                                <p className='p-400 text-sm'>{categories.category}</p>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </>
    )
}

export default Categories