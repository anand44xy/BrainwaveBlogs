import React from 'react';

const Model = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? "" : "hidden"}`}>
            <div className="model-container">
                <div className='bg-zinc-400 bg-transparent text-center p-5 h-96 lg:w-[500px] rounded shadow-md'>
                    {/* modal content */}
                    <h2 className='text-xl font-semibold mb-3 mt-5 uppercase'>Please Login here</h2>
                    <form>
                        {/* email */}
                        <div className='mt-8'>
                            <input
                                type="email"
                                id='email'
                                name='email'
                                placeholder='example@gmail.com'
                                className='md:w-[25rem] rounded-md border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6b7280] outline-none focus:border-[#6a62f1] focus:shadow-md'
                            />
                        </div>
                        {/* password */}
                        <div className='mt-4'>
                            <input
                                type="password"
                                id='password'
                                name='password'
                                placeholder='Password'
                                className=' md:w-[25rem] rounded-md border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6b7280] outline-none focus:border-[#6a62f1] focus:shadow-md'
                            />
                        </div>

                        <div className='mt-4'>
                            <button type='submit' className='hover:shadow-md rounded-md bg-blue-500 py-3 px-8 text-base font-semibold text-white outline-none'>Login</button>
                        </div>
                    </form>

                    {/* modal close */}
                    <button onClick={onClose} className='bg-gray-400 text-gray-800 font-semibold py-2 px-8 inline-flex items-center mt-5 hover:bg-slate-500 rounded'>Close</button>
                </div>
            </div>
        </div>
    );
};

export default Model;
