import React from 'react';
import { Link } from 'react-router-dom';
import {FaUser} from 'react-icons/fa';

const BlogCards = ({ blogs, currentPage, selectedCategory, pageSize }) => {
    // filter blogs based on user input or category selection
    const filteredBlogs = blogs
    .filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
    .slice((currentPage -1) * pageSize, currentPage * pageSize);

    console.log(filteredBlogs);

    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 p-18'>
            {
                filteredBlogs.map(blog => (
                    <Link key={blog.id} to={`/blogs/${blog.id}`} className='p-2 shadow-lg rounded cursor-pointer' >
                        <div>
                            <div> <img src={blog.image} alt={blog.title} className='w-full' /></div>
                            <h2 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>{blog.title}</h2>
                            <p className='mb-2 text-gray-600'><FaUser className='inline-flex items-center mr-2' />{blog.author}</p>
                            <p className='text-sm text-gray-500'>Published: {blog.published_date}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
}

export default BlogCards;
