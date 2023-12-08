import React from "react";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="my-16">
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6">
                <div>
                    <img
                        src="https://i.ibb.co/G51NGsM/foodi-logo.png"
                        alt="foodi-logo"
                    />
                    <p className="font-medium text-[#555555] mt-6">
                        Savor the artistry where every dish is a culinary
                        masterpiece
                    </p>
                </div>
                <div className="leading-loose">
                    <p className="font-semibold">Useful links</p>
                    <p className="text-[#555555]">About us</p>
                    <p className="text-[#555555]">Events</p>
                    <p className="text-[#555555]">Blogs</p>
                    <p className="text-[#555555]">FAQ</p>
                </div>
                <div className="leading-loose">
                    <p className="font-semibold">Main Menu</p>
                    <p className="text-[#555555]">Home</p>
                    <p className="text-[#555555]">Offers</p>
                    <p className="text-[#555555]">Menus</p>
                    <p className="text-[#555555]">Reservation</p>
                </div>
                <div className="leading-loose">
                    <p className="font-semibold">Contact Us</p>
                    <p className="text-[#555555]">example@email.com</p>
                    <p className="text-[#555555]">+64 958 248 966</p>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex justify-center items-center ">
                            <FiFacebook className="w-6 h-6" />
                        </div>
                        <div>
                            <IoLogoWhatsapp className="w-6 h-6" />
                        </div>
                        <div>
                            <FaInstagram className="w-6 h-6" />
                        </div>
                        <div>
                            <FiTwitter className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-[#555555] font-medium text-center mt-10">
                Copyright &copy; {new Date().getFullYear()} | All rights
                reserved
            </p>
        </div>
    );
};

export default Footer;
