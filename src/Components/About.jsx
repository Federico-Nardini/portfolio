import React from "react";

import Balerion from "../assets/Balerion.jpg";

const About = () => {
    return (
        <div className="w-full bg-white py-16 px-8">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img
                    className="w-[500px] mx-auto my-auto rounded-3xl"
                    src={Balerion}
                    alt="laptop img"
                />
                <div className="flex flex-col justify-center">
                    <div className="">
                        <h2 className="text-primary md:text-4xl sm:text-3xl text-2xl font-bold py-2 ">
                            Get to know me
                        </h2>
                    </div>

                    <p className="text-md sm:text-lg mb-4  font-semibold text-primary">
                        I'm a junior self taught web developer based in Rome, Italy. My passion for
                        coding, however, has been lively since 2014, when i worked on an Arduino
                        project for my school. During the last year i fell in love with Web
                        Development, in particular with React.
                    </p>
                    <h3 className="text-primary md:text-3xl sm:text-2xl text-xl font-bold py-2">
                        I'm not good at copywriting... but,
                    </h3>
                    <p className="text-md sm:text-lg mb-4 font-semibold text-primary">
                        if we talk about front-end, back-end, new technologies, frameworks or in
                        general <span className="font-bold uppercase">writing code</span> i'm always
                        ready and eager to learn more everyday.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
