import React from "react";

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { TbBrandTelegram } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";

const Contacts = () => {
    return (
        <div id="contact" className="w-full pb-16 pt-8 md:pt-16 text-primary bg-white px-4">
            <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row">
                <div className="lg:col-span-2 my-4   mb-auto mr-auto py-4 px-6 rounded-2xl">
                    <div className=" ">
                        <div className="md:flex gap-4 hidden mb-4 font-bold text-7xl">
                            <h2>We're here,</h2>
                            <h2>let's talk.</h2>
                        </div>
                        <h1 className="md:text-4xl flex flex-col  md:flex-row  sm:text-3xl text-2xl font-bold py-2">
                            Wanna ask me
                            <div className="bg-accentLighter ml-[-8px] md:ml-[0px] mt-4 mx-auto md:mt-6 h-[20px] px-2 rounded-lg">
                                <div className="mt-[-16px]  md:mt-[-24px]">anything?</div>
                            </div>
                        </h1>
                    </div>
                </div>
                <div className="my-4 bg-accentLighter text-primary py-8 px-10 rounded-2xl">
                    <div className="flex  items-center mb-2 justify-between w-full">
                        <HiOutlineMailOpen size={30} />
                        <a
                            href="mailto:fnardini1996@gmail.com"
                            className="p-3 ml-3 flex w-full  rounded-md font-semibold"
                        >
                            fnardini1996@gmail.com
                        </a>
                    </div>
                    <div className="flex  items-center mb-2 justify-between w-full">
                        <TbBrandTelegram size={30} />
                        <a
                            href="https://telegram.me/mekbeth"
                            className="p-3 ml-3 flex w-full  rounded-md font-semibold"
                        >
                            @mekbeth
                        </a>
                    </div>
                    <div className="flex  items-center  justify-between w-full">
                        <FiGithub size={30} />
                        <a
                            href="https://github.com/Federico-Nardini"
                            target="_blank"
                            className="p-3 ml-3 flex w-full  border-white  rounded-md font-semibold"
                        >
                            /Federico-Nardini
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
