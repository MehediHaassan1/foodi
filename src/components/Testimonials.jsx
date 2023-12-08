import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
    return (
        <div className="my-16  flex justify-center items-center   ">
            <div className="flex flex-col md:flex-row justify-between gap-10 lg:gap-20 items-center">
                <div className="bg-[url('https://i.ibb.co/LpdnqRV/chef-rect.png')] bg-no-repeat bg-contain bg-bottom md:w-[300px] lg:w-[350px]">
                    <img
                        src="https://i.ibb.co/3BX5s8W/best-chef.png"
                        alt="best-chef"
                    />
                </div>
                <div className="">
                    <p className="text-sm text-[#FF6868] font-bold tracking-widest my-8">
                        Testimonials
                    </p>
                    <h2 className="w-64 md:w-[340px] lg:w-[550px] font-bold text-xl my-6 md:text-3xl md:mb-0 lg:text-5xl tracking-wider">
                        What Our Customers Say About Us
                    </h2>
                    <p className="md:w-[340px] text-[#555555] my-6 font-medium text-sm lg:text-lg lg:w-[500px]">
                        “I had the pleasure of dining at Foodi last night, and
                        I'm still raving about the experience! The attention to
                        detail in presentation and service was impeccable”
                    </p>
                    <p className="font-semibold">Customer Feedback</p>
                    <div className="flex">
                        <p className="flex justify-center items-center font-bold">
                            <span className="mr-2">
                                <FaStar className="text-[#FFE605]" />
                            </span>
                            4.9
                        </p>
                        <p className="mx-4 text-[#807E7E]">(18.6k Reviews)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
