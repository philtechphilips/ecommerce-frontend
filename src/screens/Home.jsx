import React from 'react'
import CTA from '../components/User/Home/CTA'
import NavBar from '../components/User/Home/NavBar'
import Banner from '../components/User/Home/Banner'
import Categories from '../components/User/Home/Categories'
import CustomerExperience from '../components/User/Home/CustomerExperience'
import '../styles/user/home.css'
import TrendingProducts from '../components/User/Home/TrendingProducts'
import AllProducts from '../components/User/Home/AllProducts'

const Home = () => {
    return (
        <>
            <CTA />
            <NavBar />
            <Banner />
            <CustomerExperience />
            <Categories />
            <TrendingProducts />
            <AllProducts />
        </>
    )
}

export default Home