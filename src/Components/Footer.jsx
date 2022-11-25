import React from "react";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="max-w-[1240px] mx-auto pt-10 px-4 gap-8 text-gray-300">
            <div>
                <h4 className="w-full text-3xl text-center font-bold mb-4 text-secondary">Fe.</h4>
            </div>

            <p className="text-center">
                Made by <span className="text-blue-400">Federico Nardini</span>
            </p>
        </div>
    );
};

export default Footer;
