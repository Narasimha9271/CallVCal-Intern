import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";

const Title = () => {
    return (
        <div className="text-xl font-bold text-blue-600 ml-5">
            <Link to="/">CALLVCAL</Link>
        </div>
    );
};

const MobileMenu = ({ onClose }) => {
    const handleMenuItemClick = () => {
        onClose(); // Close the mobile menu when a menu item is clicked
    };
    return (
        <div className="nav-items absolute top-20 right-0 bg-white w-full p-5">
            <button
                onClick={handleMenuItemClick}
                className="block w-full text-left p-3 text-base font-bold text-black hover:bg-blue-300"
            >
                <Link to="/">Home</Link>
            </button>

            <button
                onClick={handleMenuItemClick}
                className="block w-full text-left p-3 text-base font-bold text-black hover:bg-blue-300"
            >
                <Link to="/about">About Us</Link>
            </button>

            <button
                onClick={handleMenuItemClick}
                className="block w-full text-left p-3 text-base font-bold text-black hover:bg-blue-300"
            >
                <Link to="/login"> Log In</Link>
            </button>

            <button
                onClick={handleMenuItemClick}
                className="block w-full text-left p-3 text-base font-bold text-black hover:bg-blue-300"
            >
                <Link to="/signup"> Sign Up</Link>
            </button>

            <button
                onClick={handleMenuItemClick}
                className="block w-full text-left p-3 text-base font-bold text-black hover:bg-blue-300"
            >
                <Link to="/feedback"> Feedback</Link>
            </button>

            <button
                onClick={handleMenuItemClick}
                className="block w-full text-left p-3 text-base font-bold text-black hover:bg-blue-300"
            >
                <Link to="/createblog">Create Blog</Link>
            </button>

            <button
                onClick={handleMenuItemClick}
                className="block w-full text-left p-3 text-base font-bold text-black hover:bg-blue-300"
            >
                <Link to="/blog"> Blog Portal</Link>
            </button>
        </div>
    );
};

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="flex items-center justify-between bg-white shadow-lg h-20 sticky z-[999] top-0">
            <Title />
            <div className="nav-items hidden sm:flex py-10 justify-end">
                <button className="p-3 text-base font-bold text-black hover:bg-blue-300">
                    <Link to="/">Home</Link>
                </button>

                <button className="p-3 text-base font-bold text-black hover:bg-blue-300">
                    <Link to="/about">About Us</Link>
                </button>

                <button className="m-3 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-white hover:border-blue-500 hover:text-blue-500 border border-blue-500 transition-colors duration-300">
                    <Link to="/login"> Log In</Link>
                </button>

                <button className="m-3 bg-white hover:bg-blue-500 hover:text-white text-blue-500 border border-blue-500 hover:border-transparent font-semibold py-2 px-4 rounded-md">
                    <Link to="/signup"> Sign Up</Link>
                </button>

                <button className="m-3 bg-white hover:bg-green-500 hover:text-white text-green-500 border border-green-500 hover:border-transparent font-semibold py-2 px-4 rounded-md">
                    <Link to="/feedback"> Feedback</Link>
                </button>

                <button className="m-3 bg-white hover:bg-red-500 hover:text-white text-red-500 border border-red-500 hover:border-transparent font-semibold py-2 px-4 rounded-md">
                    <Link to="/createblog">Create Blog</Link>
                </button>

                <button className="m-3 bg-white hover:bg-red-500 hover:text-white text-red-500 border border-red-500 hover:border-transparent font-semibold py-2 px-4 rounded-md">
                    <Link to="/blog"> Blog Portal</Link>
                </button>
            </div>

            {/* Hamburger Menu */}
            <button className="sm:hidden p-3" onClick={toggleMobileMenu}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7oSi_YdarakDB25vEvGD4lausLzTojboO0w&usqp=CAU"
                    alt=""
                    className="w-20 h-20"
                />
            </button>

            {isMobileMenuOpen && <MobileMenu onClose={closeMobileMenu} />}
        </div>
    );
};

export default Header;
