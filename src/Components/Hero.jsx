import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Hero = () => {
    return (
        <div id="home" className="text-secondary bg-primary">
            <div className="max-w-[800px] mt-[-64px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <h1 className="text-4xl text-secondary font-bold md:text-7xl sm:text-6xl sm:py-4 md:py-6">
                    I'm Federico Nardini
                </h1>
                <p className=" font-bold text-secondary text-lg md:text-3xl sm:text-2xl">
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
                                "Tailwind",
                                "NodeJS",
                                "ExpressJS",
                            ]}
                            typeSpeed={60}
                            backSpeed={30}
                            loop
                        />
                    </div>
                </div>

                <Link
                    to="projects"
                    className="bg-transparent w-[200px]  border-4 hover:bg-accent hover:text-primary cursor-pointer rounded-full  duration-300 border-accent font-medium my-6 mx-auto py-3 text-accent"
                    activeClass="active"
                    smooth={true}
                    duration={400}
                >
                    Projects
                </Link>
            </div>
        </div>
    );
};

export default Hero;

//text-[#00df98]
