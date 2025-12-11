import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center text-center my-24 px-4">

                {/* ★ Glass Badge */}
                <div className="text-stone-600 inline-flex items-center gap-2 bg-white/50 backdrop-blur-md 
                    px-6 py-1.5 rounded-full border border-gray-300 shadow-sm">
                    <p className="text-sm font-medium">Best text-to-image generator</p>
                    <img src={assets.star_icon} alt="" className="w-4 h-4" />
                </div>

                {/* ★ Heading */}
                <h1 className="text-4xl sm:text-7xl max-w-2xl mx-auto mt-10 font-bold leading-tight">
                    Turn text into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-600">images</span> in seconds
                </h1>

                {/* ★ Subtitle */}
                <p className="text-center max-w-2xl mx-auto mt-6 text-gray-600 text-lg leading-relaxed">
                    Unleash your creativity with AI. Transform your imagination into stunning visuals instantly—just type and watch the magic unfold.
                </p>

                {/* ★ Button */}
                <button className="cursor-pointer sm:text-lg text-white bg-black mt-8 px-14 py-3 flex items-center gap-3 
                       rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 hover:bg-neutral-900 
                       transition-all duration-300">
                    Generate Images
                    <img className='h-6' src={assets.star_group} alt="" />
                </button>

                {/* ★ Image Preview Row */}
                <div className="flex flex-wrap justify-center mt-20 gap-4">
                    {Array(6).fill('').map((item, index) => (
                        <img
                            key={index}
                            src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
                            alt=""
                            className="rounded-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer 
                     max-sm:w-16 w-20 shadow-md"
                        />
                    ))}
                </div>

                <p className="mt-3 text-neutral-500 text-sm tracking-wide">
                    Generated with Imagify ✨
                </p>
            </div>
        </>


    )
}

export default Header
