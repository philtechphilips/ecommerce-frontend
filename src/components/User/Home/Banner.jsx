import React from 'react'
import backgroundImage from "../../../assets/images/pexels-mnz-1639729.jpg"
const backgroundImage1 = 'https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const Banner = () => {
    return (
        <>
            <div className='max-w-[1400px] h-[450px] w-full m-auto px-20 relative group'>
                <div
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                    className='w-full h-full rounded-lg bg-center bg-cover duration-500 relative'
                >
                    {/* Background Overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg"></div>
                </div>
            </div>
        </>
    )
}

export default Banner