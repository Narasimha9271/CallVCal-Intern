import React from "react";
import KTM from "../assets/bikes/o250.jpg";
import ASuz from "../assets/bikes/ASuzuki.jpg";
import pulsar from "../assets/bikes/pulsar.jpg";
import pulsar2 from "../assets/bikes/pulsar160.jpg";
import pulsarblue from "../assets/bikes/pulsarblue.jpg";
import pulsarblue125 from "../assets/bikes/pulsarblue125.jpg";
import pulsarred160 from "../assets/bikes/pulsarred160.png";
import royalenfield from "../assets/bikes/royalenfield.jpg";
import scootydio from "../assets/bikes/scootydio.jpg";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { bicycle } from "react-icons-kit/fa/bicycle";
import { star } from "react-icons-kit/fa/star";

const Card = ({ name, image }) => {
    return (
        <Link to={`/bikes/${name}`}>
            <div className="h-full flex flex-col justify-between border p-4 shadow-md">
                <div className="h-60%">
                    <img
                        src={image}
                        alt="Card Image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="h-40%">
                    <div className="flex justify-between h-1/3">
                        <span className="font-bold  text-sm md:text-base">
                            {name}
                        </span>
                        <span className="font-bold">marcazzo</span>
                    </div>
                    <div className="flex justify-between h-1/3">
                        <span className="text-gray-400 md:text-sm">Bike</span>
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
                            <span>80/hr</span>
                        </span>
                        <span className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-red-500 mt-1"></div>
                            <span className="ml-1 text-xs md:text-sm text-blue-400 mt-1">
                                TADEPALLIGUDEM
                            </span>
                            <Icon
                                icon={bicycle}
                                size={18}
                                className="text-blue-400 ml-1 "
                            />

                            <span className="ml-1 text-xs md:text-sm text-blue-400">
                                17 meters
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

const Grid = ({ bikes }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {bikes.map((bike, index) => (
                <div className="col-span-1" key={index}>
                    <Card name={bike.name} image={bike.image} />
                </div>
            ))}
        </div>
    );
};

const Bikes = () => {
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

    return (
        <div className="container mx-auto mt-10">
            <Grid bikes={bikes} />
        </div>
    );
};

export default Bikes;
