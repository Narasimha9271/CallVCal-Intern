import React from "react";
import { Link } from "react-router-dom";
import hundai from "../assets/cars/hundai.jpg";
import hundai2 from "../assets/cars/hundai2.jpg";
import hundai3 from "../assets/cars/hundai3.png";
import hundai4 from "../assets/cars/hundai4.png";
import mahindra from "../assets/cars/mahindrathar.jpg";
import o1 from "../assets/cars/o1.jpg";
import o2 from "../assets/cars/o2.jpg";
import o3 from "../assets/cars/o3.png";
import o4 from "../assets/cars/o4.png";
import swift from "../assets/cars/swift.jpg";
import swift2 from "../assets/cars/swift2.jpg";
import swift3 from "../assets/cars/swiftcar3.jpg";
import swift4 from "../assets/cars/swift4.jpg";
import swift5 from "../assets/cars/swift5.jpg";
import swift7 from "../assets/cars/swift7.jpg";
import swift8 from "../assets/cars/swift8.png";
import swift9 from "../assets/cars/swift9.png";
import swift10 from "../assets/cars/swiftwagnor6.jpg";
import o5 from "../assets/cars/o4.png";
import o6 from "../assets/cars/swift.jpg";
import { Icon } from "react-icons-kit";
import { truck } from "react-icons-kit/icomoon/truck";
import { star } from "react-icons-kit/fa/star";

const Card = ({ name, image }) => {
    return (
        <Link to={`/cars/${name}`}>
            <div className="h-full flex flex-col justify-between p-4 border shadow-md">
                <div className="h-60% ">
                    <img
                        src={image}
                        alt="Card Image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="h-40%">
                    <div className="flex justify-between h-1/3">
                        <span className="font-bold text-sm md:text-base">
                            {name}
                        </span>
                        <span className="font-bold">marcazzo</span>
                    </div>
                    <div className="flex justify-between h-1/3">
                        <span className="text-gray-400  md:text-sm">Car</span>
                        <span className="text-yellow-500">
                            <Icon icon={star} size={12} />
                            <Icon icon={star} size={12} />
                            <Icon icon={star} size={12} />
                            <Icon icon={star} size={12} />
                            <Icon icon={star} size={12} />
                        </span>
                    </div>
                    <div className="flex justify-between h-1/3 mt-2">
                        <span className="flex items-center font-semibold text-xs md:text-sm">
                            <span>&#x20B9;</span>
                            <span>167/hr</span>
                        </span>
                        <span className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-red-500 mt-1"></div>
                            <span className="ml-1 text-xs md:text-sm text-blue-400 mt-1">
                                SECUNDRABAD
                            </span>
                            <Icon
                                icon={truck}
                                size={13}
                                className="text-blue-400 ml-1 "
                            />
                            <span className="ml-1 text-xs md:text-sm text-blue-400">
                                35 meters
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

const Grid = ({ cars }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {cars.map((car, index) => (
                <div className="col-span-1" key={index}>
                    <Card name={car.name} image={car.image} />
                </div>
            ))}
        </div>
    );
};

const Cars = () => {
    const cars = [
        { name: "Mahindra", image: mahindra },
        { name: "Car2", image: hundai },
        { name: "Car3", image: hundai2 },
        { name: "Mahindra", image: hundai3 },
        { name: "Car2", image: hundai4 },
        { name: "Car3", image: o1 },
        { name: "Mahindra", image: o2 },
        { name: "Car3", image: o3 },
        { name: "Car3", image: o4 },
        { name: "Mahindra", image: swift },
        { name: "Car2", image: swift10 },
        { name: "Car3", image: swift2 },
        { name: "Car2", image: swift3 },
        { name: "Car3", image: swift4 },
        { name: "Car2", image: swift5 },
        { name: "Car3", image: swift7 },
        { name: "Car3", image: swift8 },
        { name: "Car3", image: swift9 },
        { name: "Audi", image: o5 },
        { name: "Innova", image: o6 },
    ];

    return (
        <div className="container mx-auto mt-10">
            <Grid cars={cars} />
        </div>
    );
};

export default Cars;
