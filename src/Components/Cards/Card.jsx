import React from "react";

const Card = (props) => {
    return (
        <div className="bg-primaryDarker text-white  shadow-2  flex flex-col justify-between rounded-xl  ">
            <div className=" h-full justify-between flex flex-col md:flex-row-reverse lg:flex-col ">
                <div className=" md:w-[60%] sm:h-[100%] p-4  lg:w-[100%] lg:h-auto  md:flex-none flex-1">
                    <img
                        className=" bg-cover mx-auto rounded-md bg-transparent"
                        src={props.logo}
                        alt="project image"
                    />
                </div>
                <div className="h-[100%]  pt-4 lg:pt-1 sm:w-[100%] flex flex-col justify-between px-4 pb-2">
                    <h2 className="text-2xl text-accent font-bold lg:mb-2">{props.title}</h2>

                    <p className="font-semibold  h-full mb-2 md:mb-4 lg:mb-6">
                        {props.description}
                    </p>

                    <div className="flex h-full flex-1 justify-start items-end text-xs text-white flex-wrap sm:text-base">
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
            <div className="flex justify-between px-4 pb-4 w-full gap-4 ">
                <a
                    href={props.btnWebsite}
                    target="_blank"
                    className={
                        props.title === "This portfolio"
                            ? "hidden"
                            : "bg-primary text-center hover:bg-accent hover:text-primaryDarker md:hover:scale-105 duration-100  h-full text-white rounded-xl font-medium w-full px-4 py-2"
                    }
                >
                    Website
                </a>
                <a
                    href={props.btnCode}
                    target="_blank"
                    className="bg-primary hover:bg-accent hover:text-primaryDarker  md:hover:scale-105 duration-300 text-center   h-full text-white rounded-xl font-medium w-full px-4 py-2"
                >
                    Code
                </a>
            </div>
        </div>
    );
};

export default Card;
