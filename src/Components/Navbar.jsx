import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="flex items-center justify-between h-24  mx-auto max-w-[1240px] px-4 py-4 text-secondary">
            <h1 className="w-full text-3xl font-bold text-secondary">Fe.</h1>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">About</li>
                <li className="p-4">Projects</li>
                <li className="p-4">Contact</li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
            </div>
            <div
                className={
                    !nav
                        ? "fixed left-[-100%]"
                        : "fixed left-0 top-0 w-[60%] h-full border-r bg-black border-r-gray-900 ease-in-out duration-200"
                }
            >
                <h1 className="w-full text-3xl font-bold text-secondary m-4">FN.</h1>
                <ul className="p-4 uppercase">
                    <li className="p-4 border-b border-secondary">Home</li>
                    <li className="p-4 border-b border-secondary">About</li>
                    <li className="p-4 border-b border-secondary">Projects</li>
                    <li className="p-4">Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
