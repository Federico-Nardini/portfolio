import React from "react";

const Newsletter = () => {
    return (
        <div className="w-full py-16 text-primary px-4 bg-white">
            <div className="max-w-[1240px] mx-auto ">
                <div className=" my-4">
                    <h1 className="md:text-4xl text-center sm:text-3xl text-2xl font-bold pt-2 mb-4">
                        Want to contact me?
                    </h1>
                    <p className="text-center text-2xl">
                        Send me an email:{" "}
                        <a href="mailto:fnardini1996@gmail.com" className="text-blue-400">
                            <u>fnardini1996@gmail.com</u>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
