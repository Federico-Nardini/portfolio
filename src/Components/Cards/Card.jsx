import React from "react";

const Card = (props) => {
    return (
        <div className="bg-white text-primary p-4 shadow-lg flex flex-col justify-between rounded-3xl md:hover:scale-105 duration-300 ">
            <div
                className={` h-full justify-between   flex flex-col md:flex-row-reverse lg:flex-col `}
            >
                <div className="p-4 md:w-[60%] sm:h-[100%]  lg:w-[100%] lg:h-auto  md:flex-none flex-1">
                    <img
                        className=" bg-cover mx-auto rounded-2xl lg:rounded-b-none  bg-transparent"
                        src={props.logo}
                        alt="project image"
                    />
                </div>
                <div className="h-[100%] sm:pt-4 lg:pt-0 sm:w-[100%] flex flex-col justify-between px-4 pb-4">
                    <h2 className="text-2xl font-bold lg:mb-2">{props.title}</h2>

                    <p className="font-semibold  h-full mb-2 md:mb-4 lg:mb-6">
                        {props.description}
                    </p>

                    <div className="flex h-full flex-1  items-end text-xs text-white flex-wrap sm:text-base">
                        <div className="bg-primary  flex items-center gap-2 h-[1.8rem] rounded-md py-1 px-2 mb-2 mr-2">
                            {props.techOne} {props.nameOne}
                        </div>
                        <div className="bg-primary flex items-center gap-2 rounded-md h-[1.8rem] px-2 mb-2 mr-2">
                            {props.techTwo} {props.nameTwo}
                        </div>
                        <div
                            className={
                                !props.techThree
                                    ? "hidden"
                                    : "bg-primary flex items-center gap-2 rounded-md h-[1.8rem] mb-2 px-2 mr-2"
                            }
                        >
                            {props.techThree} {props.nameThree}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mt-2 justify-between px-4 pb-4 w-full gap-4 ">
                <a
                    href={props.btnWebsite}
                    target="_blank"
                    className={
                        props.title === "This portfolio"
                            ? "hidden"
                            : "bg-primary text-center shadow-md  shadow-gray-500 h-full text-white rounded-xl font-medium w-full px-4 py-2"
                    }
                >
                    Website
                </a>
                <a
                    href={props.btnCode}
                    target="_blank"
                    className="bg-primary text-center shadow-md shadow-gray-500 h-full text-white rounded-xl font-medium w-full px-4 py-2"
                >
                    Code
                </a>
            </div>
        </div>
    );
};

export default Card;
