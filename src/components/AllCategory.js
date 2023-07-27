import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { Link } from "react-router-dom";
import { ic_search } from "react-icons-kit/md/ic_search";

const AllCategory = () => {
    return (
        <div className="relative z-[5] bg-gradient-to-r from-teal-400 to-purple-600">
            <div className="">
                <div className="flex items-center justify-center mt-5 mb-2 py-3">
                    <span className="text-white text-2xl mt-3 font-semibold">
                        Which type of vehicle do you prefer today?
                    </span>
                </div>
                <div className="flex items-center justify-center mb-2  py-2">
                    <div className="relative flex items-center pl-3 pr-8">
                        <Icon
                            icon={ic_search}
                            size={20}
                            className="text-gray-500 absolute left-0 ml-5"
                        />
                        <input
                            type="text"
                            placeholder="Search any vehicle name"
                            className="w-80 py-2 pl-10 pr-8 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>
            <div className="flex items-center h-20 sm:h-30 sticky top-0  ">
                <div className="flex flex-1 justify-between mb-3 px-2  sm:px-0">
                    <div className="flex flex-col items-center  mr-5 sm:mr-10 ">
                        <Link to="/">
                            <img
                                src="https://callvcal.com/admin/photos/all.png"
                                alt="all-logo"
                                className="hover:bg-blue-400 ml-[50] transition-colors rounded-full p-1 cursor-pointer h-8 w-8 sm:h-12 sm:w-12"
                            />
                        </Link>
                        <span
                            className="font-medium text-white ml-12
                        "
                        >
                            All
                        </span>
                    </div>
                    <div className="flex flex-col items-center mr-5 sm:mr-10">
                        <Link to="/cars">
                            <img
                                src="https://callvcal.com/admin/photos/car.png"
                                alt="car-logo"
                                className="hover:bg-blue-400 transition-colors rounded-full p-1 cursor-pointer h-8 w-8 sm:h-12 sm:w-12"
                            />
                        </Link>
                        <span className="font-medium text-white">Car</span>
                    </div>
                    <div className="flex flex-col items-center mr-5 sm:mr-10">
                        <img
                            src="https://callvcal.com/admin/photos/loader.png"
                            alt="car-logo"
                            className="hover:bg-blue-400 transition-colors rounded-full p-1 cursor-pointer h-8 w-8 sm:h-12 sm:w-12"
                        />
                        <span className="font-medium text-white">GFR Car</span>
                    </div>
                    <div className="flex flex-col items-center mr-5 sm:mr-10">
                        <Link to="/bikes">
                            <img
                                src="https://callvcal.com/admin/photos/bike.png"
                                alt="bike-logo"
                                className="hover:bg-blue-400 transition-colors rounded-full p-1 cursor-pointer h-8 w-8 sm:h-12 sm:w-12"
                            />
                        </Link>
                        <span className="font-medium text-white">Bike</span>
                    </div>
                    <div className="flex flex-col items-center mr-5 sm:mr-10">
                        <img
                            src="https://callvcal.com/admin/photos/boat.png"
                            alt="boat-logo"
                            className="hover:bg-blue-400 transition-colors rounded-full p-1 cursor-pointer h-8 w-8 sm:h-12 sm:w-12"
                        />
                        <span className="font-medium text-white">Boat</span>
                    </div>
                    <div className="flex flex-col items-center mr-5 sm:mr-10">
                        <img
                            src="https://callvcal.com/admin/photos/choper.png"
                            alt="plane-logo"
                            className="hover:bg-blue-400 transition-colors rounded-full p-1 cursor-pointer h-8 w-8 sm:h-12 sm:w-12"
                        />
                        <span className="font-medium text-white">Plane</span>
                    </div>
                    <div className="flex flex-col items-center mr-5 sm:mr-[150]">
                        <img
                            src="https://callvcal.com/admin/photos/auto.png"
                            alt="auto-logo"
                            className="hover:bg-blue-400 transition-colors rounded-full p-1 cursor-pointer h-8 w-8 sm:h-12 sm:w-12"
                        />
                        <span className="font-medium text-white">Auto</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCategory;
