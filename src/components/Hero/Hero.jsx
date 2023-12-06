import React from "react";
import "./Hero.css";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="my-8 flex flex-col-reverse md:flex-row gap-2 lg:gap-4 justify-between items-center">
            <div>
                <h3 className="font-bold text-2xl my-6 md:text-3xl lg:text-5xl">
                    Dive into Delights Of Delectable{" "}
                    <span className="text-primary">Food</span>
                </h3>
                <p className="my-6 font-medium w-full leading-relaxed lg:my-12 lg:text-xl">
                    Where Each Plate Weaves a Story of Culinary Mastery and
                    Passionate Craftsmanship
                </p>
                <div className="w-[300px] flex justify-between items-center">
                    <button className="py-2 px-4 bg-primary text-white rounded-full">
                        Order Now
                    </button>
                    <div className="flex items-center justify-between">
                        <span>Watch Video</span>
                        <button className="w-12 h-12 rounded-full flex justify-center items-center shadow-lg">
                            <FaPlay />
                        </button>
                    </div>
                </div>
            </div>
            <div className="hero-section">
                <img
                    className=""
                    src="https://i.ibb.co/c8X1ctx/hero-banner-image.png"
                    alt="hero-banner"
                />
            </div>
        </div>
    );
};

export default Hero;
