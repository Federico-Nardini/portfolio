import React from "react";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
    FaTelegram,
    FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" mx-auto py-20 md:pt-24 md:pb-10 px-4 bg-primary text-gray-400">
            <div className="md:flex-col md:text-center md:justify-center ">
                <h1 className=" text-3xl font-bold text-[#00df9a]">Fe.</h1>

                <p className="py-4">
                    This website is completely made by me with React and{" "}
                    <a className="text-blue-400" target="_blank" href="https://tailwindcss.com/">
                        TailwindCSS
                    </a>
                    . Others Node packages i used are{" "}
                    <a
                        className="text-blue-400"
                        target="_blank"
                        href="https://www.npmjs.com/package/react-typed"
                    >
                        react-typed
                    </a>
                    ,{" "}
                    <a
                        className="text-blue-400"
                        target="_blank"
                        href="https://react-icons.github.io/react-icons/"
                    >
                        react-icons
                    </a>{" "}
                    and{" "}
                    <a
                        className="text-blue-400"
                        target="_blank"
                        href="https://www.npmjs.com/package/react-scroll"
                    >
                        react-scroll
                    </a>
                    .
                </p>
                <div className="flex md:w-80 mx-auto justify-between  my-6">
                    <a
                        target="_blank"
                        className="hover:text-accent hover:scale-105"
                        href="https://github.com/Federico-Nardini"
                    >
                        <FaGithubSquare size={25} />
                    </a>
                    <a
                        target="_blank"
                        className="hover:text-accent hover:scale-105"
                        href="https://www.instagram.com/feather.ico/"
                    >
                        <FaInstagram size={25} />
                    </a>
                    <a
                        target="_blank"
                        className="hover:text-accent hover:scale-105"
                        href="https://twitter.com/Mekbeth1"
                    >
                        <FaTwitterSquare size={25} />
                    </a>
                    <a
                        target="_blank"
                        className="hover:text-accent hover:scale-105"
                        href="https://telegram.me/mekbeth"
                    >
                        <FaTelegram size={25} />
                    </a>
                    <a
                        target="_blank"
                        className="hover:text-accent hover:scale-105"
                        href="https://www.linkedin.com/in/federico-nardini-523b10179/"
                    >
                        <FaLinkedin size={25} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
