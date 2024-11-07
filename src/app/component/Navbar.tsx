'use client';

import { FC } from 'react';

const Navbar: FC = () => {
    return (
        <nav className="w-full bg-gradient-to-r from-purple-50 to-purple-200 shadow-md pb-0">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4">

                <div className="flex items-center ml-8 ">
                    <img src="image/logo.png" alt="Ignited Minds Logo" className="h-20 w-auto cursor-pointer " />
                </div>


                {/* Mobile menu toggle (only visible on small screens) */}
                <div className="md:hidden flex items-center">
                    <button className="text-black focus:outline-none">
                        {/* Hamburger Icon */}
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Desktop Navigation Links (hidden on small screens, visible on medium and up) */}
                <div className="hidden md:flex items-center space-x-16 text-black font-semibold text-xl lg:ml-80">

                    <button className="hover:text-purple-700">About Us</button>
                    <button className="hover:text-purple-700">Courses</button>
                    <button className="hover:text-purple-700">Blogs</button>
                    <button className="hover:text-purple-700">Placements</button>
                </div>

                {/* Desktop Registration Button (hidden on small screens, visible on medium and up) */}
                <div className="hidden md:flex justify-end">
                    <button className="px-4 py-2 bg-transparent text-black border-2 border-black rounded-full">
                        Registrations
                    </button>
                </div>
            </div>

            {/* Mobile Menu (only visible on small screens) */}
            <div className="md:hidden bg-purple-200">
                <div className="flex flex-col items-center space-y-4 py-4 ">
                    <button className="text-black hover:text-purple-700">About Us</button>
                    <button className="text-black hover:text-purple-700">Courses</button>
                    <button className="text-black hover:text-purple-700">Blogs</button>
                    <button className="text-black hover:text-purple-700">Placements</button>
                    <button className="px-4 py-2 bg-transparent text-black border-2 border-black rounded-full mt-4">
                        Registrations
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
