import React from "react";
import ceo from "../assets/abouts/ceo.png";
import carImage from "../assets/abouts/car.png";
import bikeImage from "../assets/abouts/bike.png";
import autoImage from "../assets/abouts/auto.png";
import ambulanceImage from "../assets/abouts/ambulance.png";
import boatImage from "../assets/abouts/boat.png";
import loaderImage from "../assets/abouts/loader.png";
import { BACKGROUND_IMG } from "../config/config";

import { FaCar, FaMotorcycle, FaShip, FaSubway, FaBus } from "react-icons/fa";
const AboutUs = () => {
    const backgroundImageUrl = BACKGROUND_IMG;

    const vehicles = [
        {
            name: "Car",
            image: carImage,
            price: "$10",
            description: "A comfortable car for your trips in the city.",
        },
        {
            name: "Bike",
            image: bikeImage,
            price: "$5",
            description: "An agile bike for exploring the streets and parks.",
        },
        {
            name: "Boat",
            image: boatImage,
            price: "$20",
            description: "Enjoy a relaxing boat ride on the serene waters.",
        },
        {
            name: "Auto",
            image: autoImage,
            price: "$8",
            description: "Experience a fun ride on the iconic auto rickshaw.",
        },
        {
            name: "Loader",
            image: loaderImage,
            price: "$25",
            description: "A heavy-duty loader for your construction needs.",
        },
        {
            name: "Ambulance",
            image: ambulanceImage,
            price: "$8",
            description: "A life-saving ambulance for medical emergencies.",
        },
    ];

    return (
        <div className="bg-gray-100">
            <div
                className="h-60 md:h-96 flex items-center "
                style={{
                    backgroundImage: `url(${backgroundImageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="text-white text-center ml-0">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 ">
                        Welcome to CALLVCAL
                    </h1>
                    <p className="text-lg md:text-xl">
                        CallVCal is your one-stop destination for all your
                        vehicle rental needs.
                    </p>
                </div>
            </div>

            <div class="flex flex-col justify-center items-center gap-6 md:gap-10  border-2 border-gray-300 bg-white p-4 md:p-10">
                <div class="flex flex-col items-center">
                    <div class="flex flex-row justify-center gap-6 md:gap-10 ">
                        <div class="flex flex-col items-center w-40 h-48 md:w-96 md:h-60">
                            <img
                                class="w-12 h-12 md:w-20 md:h-20"
                                src="https://www.rentrip.in/assets/images/icons/route.png"
                                alt=""
                            />
                            <div className="text-bold text-xl md:text-2xl mt-2 md:mt-4 mb-2">
                                No Riding Limits
                            </div>
                            <div className="text-gray-500 text-sm md:text-base">
                                Odometer Won't Scare You Anymore.
                            </div>
                        </div>
                        <div class="flex flex-col items-center w-40 h-48 md:w-96 md:h-60">
                            <img
                                class="w-12 h-12 md:w-20 md:h-20"
                                src="https://www.rentrip.in/assets/images/icons/helmet.png"
                                alt=""
                            />
                            <div className="text-bold text-xl md:text-2xl mt-2 md:mt-4 mb-2">
                                Freebies
                            </div>
                            <div className="text-gray-500 text-sm md:text-base">
                                Helmets Always, Sometimes More.
                            </div>
                        </div>
                        <div class="flex flex-col items-center w-40 h-48 md:w-96 md:h-60">
                            <img
                                class="w-12 h-12 md:w-20 md:h-20"
                                src="https://www.rentrip.in/assets/images/icons/secure-payment.png"
                                alt=""
                            />
                            <div className="text-bold text-xl md:text-2xl mt-2 md:mt-4 mb-2">
                                Secure Payments
                            </div>
                            <div className="text-gray-500 text-sm md:text-base">
                                Our Payment Partners are Industry Leaders.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <div class="flex flex-row justify-center gap-6 md:gap-10 ">
                        <div class="flex flex-col items-center w-40 h-48 md:w-96 md:h-50">
                            <img
                                class="w-12 h-12 md:w-20 md:h-20"
                                src="https://www.rentrip.in/assets/images/icons/24-hours.png"
                                alt=""
                            />
                            <div className="text-bold text-xl md:text-2xl mt-2 md:mt-4 mb-2">
                                No Bullshit
                            </div>
                            <div className="text-gray-500 text-sm md:text-base">
                                A Day Rent is simply for 24 hrs, We mean it.
                            </div>
                        </div>
                        <div class="flex flex-col items-center w-40 h-48 md:w-96 md:h-50">
                            <img
                                class="w-12 h-12 md:w-20 md:h-20"
                                src="https://www.rentrip.in/assets/images/icons/person.png"
                                alt=""
                            />
                            <div className="text-bold text-xl md:text-2xl mt-2 md:mt-4 mb-2">
                                Verified Dealers
                            </div>
                            <div className="text-gray-500 text-sm md:text-base">
                                Every Single Dealer is Committed to Quality
                                Service.
                            </div>
                        </div>
                        <div class="flex flex-col items-center w-40 h-48 md:w-96 md:h-50">
                            <img
                                class="w-12 h-12 md:w-20 md:h-20"
                                src="https://www.rentrip.in/assets/images/icons/cash.png"
                                alt=""
                            />
                            <div className="text-bold text-xl md:text-2xl mt-2 md:mt-4 mb-2">
                                100% Moneyback
                            </div>
                            <div className="text-gray-500 text-sm md:text-base">
                                Not Happy With Service, Take Your Money Back.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center  p-4 md:p-20 px-20">
                <h1 className="text-3xl md:text-4xl font-bold mb-8">
                    Welcome to Our Company
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center p-4 rounded-lg shadow-md bg-white">
                        <img
                            src={carImage}
                            alt="Car"
                            className="w-24 h-24 md:w-32 md:h-32 mb-4"
                        />
                        <h3 className="text-lg md:text-xl font-semibold">
                            Car Services
                        </h3>
                        <p className="text-sm md:text-base text-gray-600">
                            We offer reliable and comfortable car services for
                            all your travel needs.
                        </p>
                    </div>
                    <div className="flex flex-col items-center p-4 rounded-lg shadow-md bg-white">
                        <img
                            src={bikeImage}
                            alt="Bike"
                            className="w-24 h-24 md:w-32 md:h-32 mb-4"
                        />
                        <h3 className="text-lg md:text-xl font-semibold">
                            Bike Rentals
                        </h3>
                        <p className="text-sm md:text-base text-gray-600">
                            Explore the city on two wheels with our convenient
                            bike rental options.
                        </p>
                    </div>
                    <div className="flex flex-col items-center p-4 rounded-lg shadow-md bg-white">
                        <img
                            src={autoImage}
                            alt="Auto"
                            className="w-24 h-24 md:w-32 md:h-32 mb-4"
                        />
                        <h3 className="text-lg md:text-xl font-semibold">
                            Auto
                        </h3>
                        <p className="text-sm md:text-base text-gray-600">
                            Drive in style with our premium Auto collection.
                            Luxury at its best.
                        </p>
                    </div>
                    <div className="flex flex-col items-center p-4 rounded-lg shadow-md bg-white">
                        <img
                            src={ambulanceImage}
                            alt="Ambulance"
                            className="w-24 h-24 md:w-32 md:h-32 mb-4"
                        />
                        <h3 className="text-lg md:text-xl font-semibold">
                            Emergency Services
                        </h3>
                        <p className="text-sm md:text-base text-gray-600">
                            Our quick and reliable ambulance services are
                            available 24/7 for emergencies.
                        </p>
                    </div>
                    <div className="flex flex-col items-center p-4 rounded-lg shadow-md bg-white">
                        <img
                            src={boatImage}
                            alt="Boat"
                            className="w-24 h-24 md:w-32 md:h-32 mb-4"
                        />
                        <h3 className="text-lg md:text-xl font-semibold">
                            Boat Rentals
                        </h3>
                        <p className="text-sm md:text-base text-gray-600">
                            Experience the serenity of water with our boat
                            rental packages.
                        </p>
                    </div>
                    <div className="flex flex-col items-center p-4 rounded-lg shadow-md bg-white">
                        <img
                            src={loaderImage}
                            alt="Loader"
                            className="w-24 h-24 md:w-32 md:h-32 mb-4"
                        />
                        <h3 className="text-lg md:text-xl font-semibold">
                            Cargo & Loader Services
                        </h3>
                        <p className="text-sm md:text-base text-gray-600">
                            We offer cargo and loader services for all your
                            transportation needs.
                        </p>
                    </div>
                </div>
                <p className="text-lg md:text-xl text-gray-600 mt-6 md:mt-8 max-w-xl text-center">
                    At our company, we are dedicated to providing top-notch
                    services to our customers. Our experienced team is always
                    ready to assist you with any queries or requests. Feel free
                    to reach out to us anytime!
                </p>
            </div>

            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
                        Our Pricing
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {vehicles.map((vehicle) => (
                            <div
                                key={vehicle.name}
                                className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6"
                            >
                                <img
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    className="w-full h-40 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-xl font-semibold text-center mb-2">
                                    {vehicle.name}
                                </h3>

                                <p className="text-gray-500 text-center mb-4">
                                    {vehicle.description}
                                </p>
                                <div className="flex items-center justify-center">
                                    <span className="text-2xl font-bold text-gray-800">
                                        {vehicle.price}
                                    </span>
                                    <p className="text-gray-600 text-center ml-2">
                                        Per Hour
                                    </p>
                                </div>
                                <button className="mt-4 px-6 py-2 text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700">
                                    Book Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="bg-gradient-to-r from-teal-400 to-purple-600 text-white py-12">
                <div className="container mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                        Meet Our Team
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <img
                                src={ceo}
                                alt="Team Member 1"
                                className="w-20 h-20 md:w-32 md:h-32 object-cover rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-lg md:text-xl font-bold">
                                Sonu Kumar
                            </h3>
                            <p>Co-Founder & CEO</p>
                        </div>
                        <div className="text-center">
                            <img
                                src={ceo}
                                alt="Team Member 1"
                                className="w-20 h-20 md:w-32 md:h-32 object-cover rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-lg md:text-xl font-bold">
                                Sonu Kumar
                            </h3>
                            <p>Co-Founder & CEO</p>
                        </div>
                        <div className="text-center">
                            <img
                                src={ceo}
                                alt="Team Member 1"
                                className="w-20 h-20 md:w-32 md:h-32 object-cover rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-lg md:text-xl font-bold">
                                Sonu Kumar
                            </h3>
                            <p>Co-Founder & CEO</p>
                        </div>
                        <div className="text-center">
                            <img
                                src={ceo}
                                alt="Team Member 1"
                                className="w-20 h-20 md:w-32 md:h-32 object-cover rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-lg md:text-xl font-bold">
                                Sonu Kumar
                            </h3>
                            <p>Co-Founder & CEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
