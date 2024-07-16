import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// react-icons
import { FaBars, FaDribbble, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaXmark } from 'react-icons/fa6';
import Model from './Model';

const Navbar = () => {
    // state for menu open/close
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModelOpen, setIsModelOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    //navItems
    const navItems = [
        { path: '/', Link: 'Home' },
        { path: '/services', Link: 'Services' },
        { path: '/about', Link: 'About' },
        { path: '/blogs', Link: 'Blogs' },
        { path: '/contact', Link: 'Contact' },
    ]

    // model details
    const openModel = () => {
        setIsModelOpen(true);
    }
    const closeModel = () => {
        setIsModelOpen(false);
    }

    return (
        <header className='bg-black fixed left-0 right-0 top-0'>
            <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
                <a href="/" className='text-xl font-bold text-sky-500'>Brainwave<span className='text-white'>Blogs</span></a>

                {/* nav items for lg devices */}
                <ul className='md:flex gap-12 text-lg hidden'>
                    {
                        navItems.map(({ path, Link }) =>
                            <li className='text-white' key={path}>
                                <NavLink className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    } to={path}> {Link} </NavLink>
                            </li>
                        )}
                </ul>

                {/* menu-icons */}
                <div className='text-white lg:flex gap-4 items-center hidden'>
                    <a href="https://www.facebook.com/" className='hover:text-sky-300'><FaFacebook /></a>
                    <a href="https://dribbble.com/" className='hover:text-sky-300'><FaDribbble /></a>
                    <a href="https://x.com/" className='hover:text-sky-300'><FaTwitter /></a>
                    <button onClick={openModel} className='bg-sky-500 px-5 py-1 rounded font-medium hover:bg-white hover:text-sky-500 transition-all ease-in duration-200'>Log in</button>
                </div>

                {/* model component is here */}
                <Model isOpen={isModelOpen} onClose={closeModel} />

                {/* mobile-menu btn, display mobile screen  */}
                <div className='text-white md:hidden right-9 fixed'>
                    <button onClick={toggleMenu} className='cursor-pointer'>
                        {
                            isMenuOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5' />
                        }
                    </button>
                </div>

                {/* menu items only for mobile */}
                <div>
                    <ul className={`md:hidden gap-12 text-lg block space-y-4 pl-4 pt-2  mt-14 bg-white ${isMenuOpen ? 'fixed top-0 left-0 w-full transition-all duration-150 ease-in' : 'hidden'}`}>
                        {
                            navItems.map(({ path, Link }) =>
                                <li className='text-black' key={path}>
                                    <NavLink to={path}> {Link} </NavLink>
                                </li>
                            )}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
