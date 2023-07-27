import React, { useState } from "react";
import { useParams } from "react-router-dom";
import KTM from "../assets/bikes/o250.jpg";
import ASuz from "../assets/bikes/ASuzuki.jpg";
import pulsar from "../assets/bikes/pulsar.jpg";
import pulsar2 from "../assets/bikes/pulsar160.jpg";
import pulsarblue from "../assets/bikes/pulsarblue.jpg";
import pulsarblue125 from "../assets/bikes/pulsarblue125.jpg";
import pulsarred160 from "../assets/bikes/pulsarred160.png";
import royalenfield from "../assets/bikes/royalenfield.jpg";
import scootydio from "../assets/bikes/scootydio.jpg";

// Assuming you have the `cars` array defined somewhere in your code
// and it contains the necessary car data
const bikes = [
    { name: "KTM", image: KTM },
    { name: "Suzuki", image: ASuz },
    { name: "Pulsar", image: pulsar },
    { name: "Pulsar", image: pulsar2 },
    { name: "Pulsar Blue", image: pulsarblue },
    { name: "Pulsar 125", image: pulsarblue125 },
    { name: "pulsar 160", image: pulsarred160 },
    { name: "Royal Enfield", image: royalenfield },
    { name: "Dio", image: scootydio },
];

const BikeDetails = () => {
    const { name } = useParams();

    // Find the bike object based on the name from the URL
    const bike = bikes.find((bike) => bike.name === name);

    if (!bike) {
        return <div>Bike not found</div>;
    }
    const [language, setLanguage] = useState("English");

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };

    const renderTextByLanguage = () => {
        switch (language) {
            case "Hindi":
                return (
                    <div className=" flex flex-col gap-2 font-normal text-lg">
                        <h1>
                            {" "}
                            - आवश्यक दस्तावेज़ - आधार कार्ड, ड्राइवर लाइसेंस
                        </h1>
                        <h1> - सुरक्षा जमा - 10000 या कुछ मूल्यवान वस्त्र</h1>
                        <h1> - अतिरिक्त शुल्क - रुपये 10/किमी</h1>
                        <h1> - बुकिंग 6 घंटे की दूरी सीमा 100 किमी</h1>
                        <h1> - बुकिंग 12 घंटे की दूरी सीमा 200 किमी</h1>
                        <h1> - बुकिंग 1 दिन की दूरी सीमा 300 किमी</h1>
                        <h1>
                            {" "}
                            - बुकिंग विशेष दूरी 2 दिन की सीमा 1000 किमी और
                            अतिरिक्त दिन 2500/दिन
                        </h1>
                    </div>
                );
            case "Telugu":
                return (
                    <div className=" flex flex-col gap-2 font-normal text-lg">
                        <h1>
                            {" "}
                            - డాక్యుమెంట్ అవసరం - ఆధార్ కార్డు, డ్రైవర్ లైసెన్స్
                        </h1>
                        <h1>
                            {" "}
                            - భద్రత డిపాజిట్ - 10000 లేదా కొన్ని అమూల్యమైన
                            సమానాలు
                        </h1>
                        <h1> - అదనపు ధరలు - రూ. 10/కి.మీ</h1>
                        <h1> - బుకింగ్ 6 గంటల దూరం పరిమితి 100 కిమీ</h1>
                        <h1> - బుకింగ్ 12 గంటల దూరం పరిమితి 200 కిమీ</h1>
                        <h1> - బుకింగ్ 1 రోజు దూరం పరిమితి 300 కిమీ</h1>
                        <h1>
                            {" "}
                            - ప్రత్యేక దూరం కోసం బుకింగ్ 2 రోజు పరిమితి 1000
                            కిమీ మరియు అదనపు రోజు 2500/రోజు
                        </h1>
                    </div>
                );
            default:
                return (
                    <div className=" flex flex-col gap-2 font-normal text-lg">
                        <h1>
                            {" "}
                            - Document required - Aadhar card, driver licence
                        </h1>
                        <h1>
                            {" "}
                            - Security deposit - 10000 or some valuable goods
                        </h1>
                        <h1> - Extra charges - Rs 10/km</h1>
                        <h1> - Booking 6-hour distance limit 100km</h1>
                        <h1> - Booking 12-hour distance limit 200km</h1>
                        <h1> - Booking 1-day distance limit 300km</h1>
                        <h1>
                            {" "}
                            - Booking special distance for 2 days limit 1000km
                            and extra day 2500/day
                        </h1>
                    </div>
                );
        }
    };

    const [days, setDays] = useState(0);

    const handleChange = (event) => {
        setDays(event.target.value);
    };

    return (
        <div className="flex flex-col lg:flex-row lg:items-center">
            <div className="lg:ml-15">
                <h1 className="ml-[150] mt-5 mb-5 text-4xl  font-bold">
                    {bike.name}
                </h1>
                <img
                    src={bike.image}
                    className="w-[450] h-80 border shadow-xl ml-10 mb-4"
                    alt="Bike"
                />
                <h2 className="text-lg font-semibold  ml-12">Model: PULSAR</h2>
                <h3 className="text-lg font-semibold  ml-12">BIKE</h3>
            </div>
            <div className="lg:ml-[100] mt-5 flex flex-col lg:w-1/2">
                <div className="flex flex-row gap-3 mb-3">
                    <h1 className="text-lg text-black font-medium mt-2">
                        Details:
                    </h1>
                    <button
                        className="bg-white border border-gray-200 text-green-400 p-2 rounded-md hover:bg-green-400 hover:text-white"
                        onClick={() => handleLanguageChange("Default")}
                    >
                        Default
                    </button>
                    <button
                        className="bg-white border border-gray-200 text-green-400 p-2 rounded-md hover:bg-green-400 hover:text-white"
                        onClick={() => handleLanguageChange("English")}
                    >
                        English
                    </button>
                    <button
                        className="bg-white border border-gray-200 text-green-400 p-2 rounded-md hover:bg-green-400 hover:text-white"
                        onClick={() => handleLanguageChange("Hindi")}
                    >
                        Hindi
                    </button>
                    <button
                        className="bg-white border border-gray-200 text-green-400 p-2 rounded-md hover:bg-green-400 hover:text-white"
                        onClick={() => handleLanguageChange("Telugu")}
                    >
                        Telugu
                    </button>
                </div>
                {renderTextByLanguage()}
                <div className="flex flex-col gap-2 mt-5 lg:flex-row lg:gap-10">
                    <button className="bg-blue-400 text-white hover:bg-white hover:text-blue-400 border  rounded-md p-2">
                        {" "}
                        1000 For 6 hours
                    </button>
                    <button className="bg-blue-400 text-white hover:bg-white hover:text-blue-400 border  rounded-md p-2">
                        {" "}
                        2000 For 12 hours
                    </button>
                    <button className="bg-blue-400 text-white hover:bg-white hover:text-blue-400 border  rounded-md p-2">
                        {" "}
                        3000 For 24 hours
                    </button>
                </div>
                <div className="flex items-center mt-3 justify-center">
                    <div className="flex-grow bg-gray-700 h-px"></div>
                    <div className="mx-4 text-gray-500 font-semibold">OR</div>
                    <div className="flex-grow bg-gray-700 h-px"></div>
                </div>
                <div className="flex flex-col gap-2 mt-3 mb-2 lg:flex-row lg:items-center lg:gap-10">
                    <div className="flex flex-col lg:flex-row lg:gap-2">
                        <h1 className="font-medium text-lg ">Book days</h1>
                        <h1>Rs {days * 3000}</h1>
                    </div>
                    <div className="ml-auto lg:ml-0">
                        <input
                            type="number"
                            value={days}
                            onChange={handleChange}
                            className="w-10 h-10 border border-black"
                        />
                    </div>
                </div>
                <div className="flex items-center mt-3 mb-2 justify-center">
                    <div className="flex-grow bg-gray-700 h-px"></div>

                    <div className="flex-grow bg-gray-700 h-px"></div>
                </div>
                <button className="text-lg text-violet-500 bg-purple-300 border rounded-xl w-60 mx-auto lg:ml-[170]">
                    Book
                </button>
            </div>
        </div>
    );
};

export default BikeDetails;
