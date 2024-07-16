import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className='px-4 py-32 bg-black mx-auto'>
            <div className='text-white text-center'>
                <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>
                    Discover Insights at Brainwave Blogs
                </h1>
                <p className='text-gray-100 lg:w-3/5 mx-auto'>
                    Welcome to Brainwave Blogs, your ultimate destination for insightful articles and creative ideas. Dive deep into a world of knowledge and inspiration with us!
                </p>
                <div className='mt-2'>
                    <Link to="/" className='font-bold inline-flex items-center hover:text-sky-500'>Learn more <FaArrowRightLong className='ml-2 mt-1' /> </Link>
                </div>
            </div>
        </div>
    );
}

export default Banner;
