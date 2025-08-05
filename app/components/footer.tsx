import React from 'react'
import ubuntu from '../utils/fonts/ubuntu'

const Footer = () => {
    return (
        <footer className='w-full h-15 py-2 px-5 shadow-md  bg-linear-to-bl from-sky-500 to-violet-500 text-center'>
            <div className={`max-w-[100rem] mx-auto px-12 flex items-center justify-between text-white ${ubuntu.className}`}>
                @Muhammad Rifky Ramadani 2025
            </div>
        </footer >
    )
}

export default Footer
