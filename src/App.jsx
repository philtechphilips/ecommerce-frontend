import { useState } from 'react'
import './App.css'
import Home from './screens/Home'
import 'remixicon/fonts/remixicon.css'
import { Route, Routes } from 'react-router-dom'
import Shop from './screens/Shop'
import OrderComplete from './screens/OrderComplete'
import Checkout from './screens/Checkout'
import Payment from './screens/Payment'
import ProductDetails from './screens/ProductDetails'
import Cart from './screens/Cart'
import Login from './screens/Login'
import VerifyIdentity from './screens/VerifyIdentity'
import CreateAccount from './screens/CreateAccount'
import ForgotPassword from './screens/ForgotPassword'
import SecurityCode from './screens/SecurityCode'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/order-complete" element={<OrderComplete />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/verify-identity" element={<VerifyIdentity />}></Route>
        <Route path="/create-account" element={<CreateAccount />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/security-code" element={<SecurityCode />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/product-details" element={<ProductDetails />}></Route>
      </Routes>
    </>
  )
}

export default App
