import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const SlidBar = () => {
    const [popularBlogs, setPopularBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(response => response.json())
            .then(data => setPopularBlogs(data.slice(0, 15)))
    }, []);

    return (
        <div className='p-4 bg-gray-100 shadow-md rounded'>
            {/* Latest Blogs */}
            <div>
                <h3 className='text-2xl font-semibold mb-4'>Latest Blogs</h3>
                {
                    popularBlogs.slice(0,4).map(blog => (
                        <div key={blog.id} className='my-4 border-b-2 border-spacing-2 pb-4'>
                            <h4 className='font-medium mb-2'>{blog.title}</h4>
                            <Link to={`/blog/${blog.id}`} className='text-base inline-flex items-center hover:text-sky-500'>
                                Read more <FaArrowRight className='ml-2' />
                            </Link>
                        </div>
                    ))
                }
            </div>

            {/* Popular Blogs */}
            <div className='mt-8'>
                <h3 className='text-2xl font-semibold mb-4 mt-15'>Popular Blogs</h3>
                {
                    popularBlogs.slice(0, 4).map(blog => (
                        <div key={blog.id} className='my-4 border-b-2 border-spacing-2 pb-4'>
                            <h4 className='font-medium mb-2'>{blog.title}</h4>
                            <Link to={`/blog/${blog.id}`} className='text-base inline-flex items-center hover:text-sky-500'>
                                Read more <FaArrowRight className='ml-2' />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default SlidBar;
