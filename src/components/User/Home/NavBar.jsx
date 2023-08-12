import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='h-12 hidden md:flex justify-between items-center px-10 py-12'>
            <Link to="/" className='logo text-4xl text-[#0C513F]'>NOSTRA</Link>

            <ul className="flex justify-between gap-10 items-center">
                <li className="p-600 text-gray-800"><Link to="/shop">Shop</Link></li>
                <li className="p-600 text-gray-800"><Link to="/#">Most Wanted</Link></li>
                <li className="p-600 text-gray-800"><Link to="/#">New Arrival</Link></li>
                <li className="p-600 text-gray-800"><Link to="/#">Brands</Link></li>
            </ul>

            <div className="flex items-center gap-10">
                <form className="flex items-center bg-gray-100 border border-gray-300 rounded-lg p-2">
                    <i className="ri-search-line text-lg text-gray-400 mr-1 cursor-pointer"></i>
                    <input
                        type="text"
                        placeholder="Search"
                        className="flex-1 bg-transparent border-none focus:outline-none p-400 w-60"
                    />
                </form>

                <div className="flex items-center gap-4">
                    <i className="ri-shopping-cart-2-line text-2xl"></i>
                    <i className="ri-user-3-line text-2xl"></i>
                </div>
            </div>
        </div>
    )
}

export default NavBar