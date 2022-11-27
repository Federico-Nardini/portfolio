import React from "react";

import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Newsletter = () => {
    return (
        <div
            id="contact"
            className="w-full  text-primary py-10 bg-gradient-to-l from-blue-300 to-accent"
        >
            <div className=" ">
                <div className="flex-col px-6 md:px-0 flex md:flex-row justify-center">
                    <h2 className="py-8 md:py-16 px-16 md:text-6xl text-center  w-full md:text-right sm:text-3xl text-2xl font-bold  ">
                        We're here
                    </h2>
                    <div className="py-8 md:py-16 px-16 w-full flex md:items-start items-center flex-col md:text-left rounded-full md:rounded-r-none bg-primary">
                        <h2 className="md:text-6xl text-transparent inline bg-clip-text bg-gradient-to-r from-blue-300 to-accentSaturated sm:text-3xl text-2xl font-bold">
                            Let's talk.
                        </h2>

                        <p className=" border-white text-white md:border-b-2 ml-1 hover:border-accent hover:text-accent  duration-300  md:mr-auto mt-2 text-md md:text-xl">
                            <a
                                href="mailto:fnardini1996@gmail.com"
                                className="flex italic justify-center items-center flex-nowrap"
                            >
                                fnardini1996@gmail.com{" "}
                                <BsFillArrowRightCircleFill size={20} className="pl-1 mt-1" />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
