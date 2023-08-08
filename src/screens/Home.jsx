import React from 'react'
import CTA from '../components/User/Home/CTA'
import NavBar from '../components/User/Home/NavBar'
import Banner from '../components/User/Home/Banner'
import Categories from '../components/User/Home/Categories'
import CustomerExperience from '../components/User/Home/CustomerExperience'
import '../styles/user/home.css'

const Home = () => {
    return (
        <>
            <CTA />
            <NavBar />
            <Banner />
            <CustomerExperience />
            <Categories />
        </>
    )
}

export default Home