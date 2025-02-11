import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false); // Fixit: State for mobile menu toggle

    return (
        <header className="shadow sticky z-50 top-0 bg-white">
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex justify-between items-center mx-auto max-w-screen-xl">
                    
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>

                    {/* Navigation + Buttons (Visible on Desktop) */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <NavLink to="/" className={({ isActive }) => 
                            `text-gray-700 hover:text-orange-700 ${isActive ? "text-orange-700" : ""}`
                        }>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => 
                            `text-gray-700 hover:text-orange-700 ${isActive ? "text-orange-700" : ""}`
                        }>
                            About
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => 
                            `text-gray-700 hover:text-orange-700 ${isActive ? "text-orange-700" : ""}`
                        }>
                            Contact
                        </NavLink>
                        <NavLink to="/github" className={({ isActive }) => 
                            `text-gray-700 hover:text-orange-700 ${isActive ? "text-orange-700" : ""}`
                        }>
                            Github
                        </NavLink>
                        <Link to="#" className="text-gray-800 hover:bg-gray-50 px-4 py-2 rounded">
                            Log in
                        </Link>
                        <Link to="#" className="text-white bg-orange-700 hover:bg-orange-800 px-4 py-2 rounded">
                            Get started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="lg:hidden text-gray-700 focus:outline-none ml-4"
                    >
                        {isOpen ? '✖' : '☰'} 
                    </button>
                </div>

                {/* Mobile Menu (Only on Mobile) */}
                {isOpen && (
                    <div className="lg:hidden flex flex-col items-center space-y-4 py-4">
                        <NavLink to="/" className="text-gray-700 hover:text-orange-700">Home</NavLink>
                        <NavLink to="/about" className="text-gray-700 hover:text-orange-700">About</NavLink>
                        <NavLink to="/contact" className="text-gray-700 hover:text-orange-700">Contact</NavLink>
                        <NavLink to="/github" className="text-gray-700 hover:text-orange-700">Github</NavLink>
                        <Link to="#" className="text-gray-800 hover:bg-gray-50 px-4 py-2 rounded">Log in</Link>
                        <Link to="#" className="text-white bg-orange-700 hover:bg-orange-800 px-4 py-2 rounded">Get started</Link>
                    </div>
                )}
            </nav>
        </header>
    );
}
