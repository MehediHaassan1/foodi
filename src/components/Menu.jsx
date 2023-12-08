import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Menu = () => {
    const data = [
        {
            id: "65728dce00420275ac9ec156",
            index: 0,
            picture: "https://i.ibb.co/3z9m801/Fattoush-salad.png",
            name: "Fattoush salad",
            price: "24.00",
            rating: "4.9",
        },
        {
            id: "65728dce5dd3b3f8094fe480",
            index: 1,
            picture: "https://i.ibb.co/5r3j41n/Vegetable-salad.png",
            name: "Vegetable salad",
            price: "26.00",
            rating: "4.6",
        },
        {
            id: "65728dce33962066de0c2eb8",
            index: 2,
            picture: "https://i.ibb.co/wRcGZVj/Egg-salad.png",
            name: "Egg vegi salad",
            price: "23.00",
            rating: "4.5",
        },
    ];
    return (
        <div className="my-16">
            <div className="flex flex-col md:flex-row justify-between mb-16">
                <div>
                    <p className="text-sm text-[#FF6868] font-bold tracking-widest mb-8">
                        Special Dishes
                    </p>
                    <h1 className="w-64 md:w-[350px] lg:w-[500px] font-bold text-2xl my-6 md:text-3xl md:mb-0 lg:text-5xl tracking-wider">
                        Standout Dishes{" "}
                        <span className="inline-block mt-2">From Our Menu</span>
                    </h1>
                </div>
                <div className="flex gap-10 items-end">
                    <IoIosArrowBack className="w-10 h-10 p-2 rounded-full bg-[#EFEFEF] cursor-pointer text-[#6F6E6E] font-bold" />
                    <IoIosArrowForward className="w-10 h-10 p-2 rounded-full  bg-primary cursor-pointer text-white font-bold" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-10">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="w-full  md:w-fit rounded-2xl shadow-xl relative"
                    >
                        <div className="flex justify-center items-center py-4 ">
                            <img
                                src={item.picture}
                                alt={item.name}
                                className="w-56 md:w-48"
                            />
                        </div>
                        <div className="flex justify-between items-end px-6 py-4">
                            <div>
                                <h4 className="text-lg lg:text-3xl font-semibold mb-2">
                                    {item.name}
                                </h4>
                                <p className="font-bold">
                                    <span className="text-[#FF6868] text-sm">
                                        $
                                    </span>
                                    {item.price}
                                </p>
                            </div>
                            <div>
                                <p className="flex justify-between items-center">
                                    <span className="mr-2">
                                        <FaStar className="text-[#FFE605]" />
                                    </span>
                                    {item.rating}
                                </p>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-8 h-8 bg-primary text-white rounded-tr-2xl rounded-bl-2xl flex justify-center items-center">
                            <FaRegHeart />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
