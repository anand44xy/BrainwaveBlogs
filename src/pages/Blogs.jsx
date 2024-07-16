import React from 'react'
import BlogPage from '../components/BlogPage'

const Blogs = () => {
    return (
        <div>
            <div className='text-white px-4 py-40 bg-black text-center'>
                <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Blogs Page</h1>
            </div>

            {/* all blogs container */}
            <div className='max-w-7xl mx-auto'>
                <BlogPage/>
            </div>
        </div>

    )
}

export default Blogs
