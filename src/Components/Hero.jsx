import React from "react";
import Typed from "react-typed";

const Hero = () => {
    return (
        <div className="text-secondary">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <h1 className="text-4xl font-bold md:text-7xl sm:text-6xl sm:py-4 md:py-6">
                    I'm Federico Nardini
                </h1>
                <p className=" font-bold  text-lg md:text-3xl sm:text-2xl">
                    a Junior Web Developer
                </p>
                <div className="flex items-center justify-center">
                    <p className="py-0 sm:py-4 text-3xl font-bold md:text-5xl sm:text-4xl">
                        I work with
                    </p>
                    <div className="bg-secondary ml-4 pb-2 pt-1 mt-1 text-primary text-3xl  font-bold md:pl-4 pl-2 md:text-5xl sm:text-4xl">
                        <Typed
                            className="mt-1"
                            strings={[
                                "ReactJS",
                                "CSS",
                                "HTML",
                                "Javascript",
                                "TailwindCSS",
                                "NodeJS",
                                "ExpressJS",
                            ]}
                            typeSpeed={60}
                            backSpeed={30}
                            loop
                        />
                    </div>
                </div>

                <button className="bg-transparent w-[200px]  border-4 hover:bg-secondary hover:text-primary  rounded-full  duration-300 border-secondary font-medium my-6 mx-auto py-3 text-secondary">
                    My projects
                </button>
            </div>
        </div>
    );
};

export default Hero;

//text-[#00df98]
