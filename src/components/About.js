import React from "react";
import docpic from "../assets/abouts/docpic.png";
import emailpic from "../assets/abouts/emailpic.png";
import firepic from "../assets/abouts/firepic.png";
import micpic from "../assets/abouts/micpic.png";

const About = () => {
    return (
        <div className="bg-gray-100 w-full h-full">
            <div className="flex flex-row bg-gray-100">
                <div className="flex flex-col flex-1 items-center justify-center mr-0">
                    <div className="flex flex-row">
                        <div className="flex flex-col h-[270px] w-[220px] rounded-lg shadow-lg bg-white m-4 p-4">
                            <img
                                src={emailpic}
                                className="h-[70px] w-[70px]"
                                alt=""
                            />
                            <div className=" mt-2 text-xl font-bold text-black">
                                End to End
                            </div>
                            <div className="text-md text-gray-400 mt-2">
                                Our messenger uses only proven technologies.
                                Therefore, no one will read your messages.
                            </div>
                        </div>
                        <div className="flex flex-col h-[270px] w-[220px] rounded-lg shadow-lg bg-white m-4 p-4">
                            <img
                                src={micpic}
                                className="h-[70px] w-[70px]"
                                alt=""
                            />
                            <div className=" mt-2 text-xl font-bold text-black">
                                Voice Message
                            </div>
                            <div className="text-md text-gray-400 my-2">
                                When you don't have time to write a text, send
                                your companion a voice message.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col h-[270px] w-[220px] rounded-lg shadow-lg bg-white m-4 p-4">
                            <img
                                src={docpic}
                                className="h-[70px] w-[70px]"
                                alt=""
                            />
                            <div className=" mt-2 text-xl font-bold text-black">
                                News Widget
                            </div>
                            <div className="text-md text-gray-400 my-2">
                                All the news of the world is at hand, our
                                messenger has a pre-installed news widget.
                            </div>
                        </div>
                        <div className="flex flex-col h-[270px] w-[220px] rounded-lg shadow-lg bg-white m-4 p-4">
                            <img
                                src={firepic}
                                className="h-[70px] w-[70px]"
                                alt=""
                            />
                            <div className=" mt-2 text-xl font-bold text-black">
                                Tags
                            </div>
                            <div className="text-md text-gray-400 my-2">
                                Place messages in tags or create new ones.Using
                                tags makes interaction easier.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col flex-1 items-center justify-center mr-[100] my-10">
                    <div class="text-5xl font-bold text-center mb-4">
                        Try the familiar functions in the new execution
                    </div>
                    <div class="text-lg text-gray-400 text-center mb-4">
                        The very functions that help you in everyday life are
                        already built into our messenger and are not just built
                        in but invented anew.
                    </div>
                    <button class="bg-blue-500 text-white w-40 py-2 px-4 rounded-md">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
