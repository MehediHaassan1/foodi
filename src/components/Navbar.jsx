import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-4">
            <div>
                <a href="/">
                    <img
                        src="https://i.ibb.co/G51NGsM/foodi-logo.png"
                        alt="foodi-logo"
                    />
                </a>
            </div>
            <div className="">
                <a className="mx-4 text-xl text-primary" href="/home">
                    Home
                </a>
                <a className="mx-4 text-xl" href="/menu">
                    Menu
                </a>
                <a className="mx-4 text-xl" href="/services">
                    Services
                </a>
                <a className="mx-4 text-xl" href="/offers">
                    Offers
                </a>
            </div>
            <div className="flex justify-between items-center">
                <CiSearch className="mr-4 h-5 w-5" />
                <IoBagOutline className="mr-4 h-5 w-5" />
                <button className="flex justify-between items-center border py-2 px-4 bg-primary text-white font-medium rounded-full text-xl">
                    <FiPhoneCall className="mr-2 h-5 w-5" />
                    Contact
                </button>
            </div>
        </div>
    );
};

export default Navbar;
