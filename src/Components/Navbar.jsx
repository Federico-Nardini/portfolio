import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="sticky top-0 bg-primary shadow-md ">
            <div className="flex items-center justify-between h-16 mx-auto max-w-[1240px] px-4 py-4 text-secondary">
                <h1 className="w-full text-3xl font-bold text-accent">Fe.</h1>
                <ul className="hidden  md:flex">
                    <li className="p-4 hover:text-accent cursor-pointer duration-300">
                        <Link to="home" activeClass="active" smooth={true} duration={400}>
                            Home
                        </Link>
                    </li>
                    <li className="p-4 hover:text-accent cursor-pointer duration-300">
                        <Link to="about" activeClass="active" smooth={true} duration={400}>
                            About
                        </Link>
                    </li>
                    <li className="p-4 hover:text-accent cursor-pointer duration-300">
                        <Link to="projects" activeClass="active" smooth={true} duration={400}>
                            Projects
                        </Link>
                    </li>
                    <li className="p-4 hover:text-accent cursor-pointer duration-300">
                        <Link to="contact" activeClass="active" smooth={true} duration={400}>
                            Contact
                        </Link>
                    </li>
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
                    <h1 className="w-full text-3xl font-bold text-accent m-4">Fe.</h1>
                    <ul className="p-4 uppercase">
                        <li className="p-2 border-b border-secondary cursor-pointer duration-300">
                            <Link
                                to="home"
                                onClick={handleNav}
                                activeClass="active"
                                smooth={true}
                                duration={400}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="p-2 border-b border-secondary cursor-pointer duration-300">
                            <Link
                                to="about"
                                onClick={handleNav}
                                activeClass="active"
                                smooth={true}
                                duration={400}
                            >
                                About
                            </Link>
                        </li>
                        <li className="p-2 border-b border-secondary cursor-pointer duration-300">
                            <Link
                                to="projects"
                                onClick={handleNav}
                                activeClass="active"
                                smooth={true}
                                duration={400}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="p-2 cursor-pointer duration-300">
                            <Link
                                to="contact"
                                onClick={handleNav}
                                activeClass="active"
                                smooth={true}
                                duration={400}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
