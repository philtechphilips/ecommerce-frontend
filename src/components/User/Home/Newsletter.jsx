import React from 'react'

const Newsletter = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 md:gap-5 p-5'>
            <div className='w-full md:w-[650px] text-center'>
                <h1 className='p-700 text-lg md:text-3xl'>Subscribe to our newsletter to get updates to our latest collection</h1>
                <p className='p-500 text-sm mt-2 md;mt-4 text-gray-500'>Get 10% off on your first order just by subscribing to our newsletter</p>
                <form className="flex flex-col md:flex-row justify-center mt-5">
                    <div className='bg-gray-100 border border-gray-300 rounded-lg p-2'>
                        <i className="ri-mail-line text-lg text-gray-400"></i>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="flex-1 bg-transparent border-none focus:outline-none p-400 w-72 md:w-72 pl-3"
                        />
                    </div>
                    <button type='submit' className='p-2 ml-0 mt-2 md:ml-2 p-500 text-lg bg-gray-950 rounded-lg text-white px-6 w-full md:w-fit'>Subscribe</button>
                </form>
            </div>
        </div>

    )
}

export default Newsletter