import React from 'react'
import NavBar from '../components/User/Home/NavBar'
import Footer from '../components/User/Home/Footer'
import Newsletter from '../components/User/Home/Newsletter'
import CTA from '../components/User/Home/CTA'
import Products from '../components/User/Shop/Products'

const Shop = () => {
  return (
    <>
    <CTA />
    <NavBar />
    <Products />
    <Newsletter />
    <Footer />
    </>
  )
}

export default Shop