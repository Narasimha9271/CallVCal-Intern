import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="flex items-center justify-center min-h-screen  bg-gradient-to-r from-purple-900 to-blue-400">
            <div className="bg-white shadow-md rounded px-8 py-6 sm:px-10 sm:py-8 md:w-1/2 lg:w-1/3">
                <h2 className="text-3xl font-semibold mb-6">Sign Up</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 h-10"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 h-10"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-gray-700"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                className="w-full border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 h-10 pr-10"
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-0 top-0 h-10 w-10 mt-1 mr-2 flex items-center justify-center text-gray-500 hover:text-gray-700"
                            >
                                {showPassword ? (
                                    <BiShow className="h-5 w-5" />
                                ) : (
                                    <BiHide className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="confirmpassword"
                            className="block text-gray-700"
                        >
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmpassword"
                                className="w-full border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 h-10 pr-10"
                                placeholder="Reenter your password"
                            />
                            <button
                                type="button"
                                onClick={toggleConfirmPasswordVisibility}
                                className="absolute right-0 top-0 h-10 w-10 mt-1 mr-2 flex items-center justify-center text-gray-500 hover:text-gray-700"
                            >
                                {showConfirmPassword ? (
                                    <BiShow className="h-5 w-5" />
                                ) : (
                                    <BiHide className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
