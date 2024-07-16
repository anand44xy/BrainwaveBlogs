import React from 'react'
import { FaFacebook, FaTwitter, FaDribbble } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='bg-gray-900'>
            <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
            <div className='grid pb-8 lg:grid-cols-6'>
                <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>
                    {/* category-1 */}
                    <div>
                        <p className='font-medium tracking-wide text-gray-300'>Category</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-sky-500'>News</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-sky-500'>World</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-sky-500'>Games</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-sky-500'>Refereces</a>
                            </li>
                        </ul>
                    </div>

                    {/* category-2 */}
                    <div>
                        <p className='font-medium tracking-wide text-gray-300'>Apples</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-sky-500'>Web</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-sky-500'>e-commerce</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-sky-500'>Business</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-sky-500'>Entertainment</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-sky-500'>Portfolio</a>
                            </li>
                        </ul>
                    </div>

                    {/* category-3 */}
                    <div>
                        <p className='font-medium tracking-wide text-gray-300'>Cherry</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-sky-500'>Media</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-sky-500'>Brouchur</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-sky-500'>Nonprofit</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-sky-500'>Education</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-sky-500'>Projects</a>
                            </li>
                        </ul>
                    </div>

                    {/* category-4 */}
                    <div>
                        <p className='font-medium tracking-wide text-gray-300'>Business</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-sky-500'>
                                    Entrepreneur</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-sky-500'>Personal</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-sky-500'>Wiki</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-sky-500'>Forum</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-sky-500'>Projects</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Subscription */}
                <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5'>
                    <p className='font-medium tracking-wide text-gray-300'>Subscribe for updates</p>
                    <form className='md:max-w-md flex lg:col-span-2 lg:mt-0 mt-5 w-full gap-2'>
                        <input
                            type="email"
                            name='email'
                            id='email'
                            className='flex-grow w-full h-10 px-3 transition-all mt-2 duration-200 bg-white border border-gray-300 rounded shadow-sm focus:border-purple-400 focus:outline-none'
                        />
                        <button
                            type='submit'
                            className='inline-flex items-center justify-center h-10 px-6 mt-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-500 hover:bg-sky-600 focus:outline-none'>
                            Subscribe
                        </button>
                    </form>
                    <p className='mt-2 text-md text-slate-500'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, obcaecati hic fuga autem incidunt doloribus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium optio harum error recusandae illum! At sequi dolores illo facere nulla.
                    </p>
                </div>
            </div>

            {/* Social-Media */}
            <div className='border-t border-gray-800 text-white flex flex-col gap-10 pt-5 pb-10 sm:flex-row'>
                <p className='text-md text-gray-500'>2024 Anand Kumar Saini. All rights reserved.</p>
                <div className='flex gap-4 text-md  items-center '>
                    <a href="https://www.facebook.com/" className='hover:text-sky-300'><FaFacebook /></a>
                    <a href="https://dribbble.com/" className='hover:text-sky-300'><FaDribbble /></a>
                    <a href="https://x.com/" className='hover:text-sky-300'><FaTwitter /></a>
                </div>
            </div>

        </div>
        </div >
    )
}

export default Footer
