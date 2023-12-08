import React from "react";
import { LuSalad } from "react-icons/lu";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { IoGiftOutline } from "react-icons/io5";

const Services = () => {
    return (
        <div className="my-16">
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
                <div className="">
                    <p className="text-sm text-[#FF6868] font-bold tracking-widest my-8">
                        Our Story & Services
                    </p>
                    <h2 className="w-64 md:w-[450px] lg:w-[550px] font-bold text-xl my-6 md:text-3xl md:mb-0 lg:text-5xl tracking-wider">
                        Our Culinary Journey And Services
                    </h2>
                    <p className="md:w-[400px] text-[#555555] my-6 font-medium text-sm lg:text-lg lg:w-[500px]">
                        Rooted in passion, we curate unforgettable dining
                        experiences and offer exceptional services, blending
                        culinary artistry with warm hospitality.
                    </p>
                    <button className="py-2 px-4 bg-primary text-white rounded-full">
                        Explore
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="w-[250px] h-[250px] rounded-2xl shadow-[0_5px_20px_0px_rgba(0,0,0,0.3)] flex justify-center items-center">
                        <div className="flex flex-col items-center text-center">
                            <LuSalad className="w-16 h-16 text-primary text-center" />
                            <h4 className="font-bold text-primary my-4">
                                Catering
                            </h4>
                            <p className="w-[220px] font-semibold text-sm text-[#90BD95]">
                                Delight your guests with our flavors and
                                presentation
                            </p>
                        </div>
                    </div>
                    <div className="w-[250px] h-[250px] rounded-2xl shadow-[0_5px_20px_0px_rgba(0,0,0,0.3)] flex justify-center items-center">
                        <div className="flex flex-col items-center text-center">
                            <AiOutlineFieldTime className="w-16 h-16 text-primary text-center" />
                            <h4 className="font-bold text-primary my-4">
                                Fast delivery
                            </h4>
                            <p className="w-[220px] font-semibold text-sm text-[#90BD95]">
                                We deliver your order promptly to your door
                            </p>
                        </div>
                    </div>
                    <div className="w-[250px] h-[250px] rounded-2xl shadow-[0_5px_20px_0px_rgba(0,0,0,0.3)] flex justify-center items-center">
                        <div className="flex flex-col items-center text-center">
                            <MdOutlineShoppingCartCheckout className="w-16 h-16 text-primary text-center" />
                            <h4 className="font-bold text-primary my-4">
                                Online Ordering
                            </h4>
                            <p className="w-[220px] font-semibold text-sm text-[#90BD95]">
                                Explore menu & order with ease using our Online
                                Ordering
                            </p>
                        </div>
                    </div>
                    <div className="w-[250px] h-[250px] rounded-2xl shadow-[0_5px_20px_0px_rgba(0,0,0,0.3)] flex justify-center items-center">
                        <div className="flex flex-col items-center text-center">
                            <IoGiftOutline className="w-16 h-16 text-primary text-center" />
                            <h4 className="font-bold text-primary my-4">
                                Gift Cards
                            </h4>
                            <p className="w-[220px] font-semibold text-sm text-[#90BD95]">
                                Give the gift of exceptional dining with Foodi
                                Gift Cards
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
