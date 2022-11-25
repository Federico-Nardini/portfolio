import React from "react";

const Card = (props) => {
    return (
        <div
            className={`bg-gray-900 justify-between text-secondary shadow-lg flex flex-col rounded-3xl hover:scale-105 duration-300`}
        >
            <div className="p-4 flex-1">
                <img
                    className=" bg-cover border-4  border-gray-900 mx-auto rounded-2xl shadow-xl bg-transparent"
                    src={props.logo}
                    alt="/"
                />
            </div>
            <div className="h-[100%] flex flex-col justify-between px-4 pb-4">
                <h2 className="text-2xl font-bold mb-2">{props.title}</h2>

                <p className="font-semibold h-full mb-6">{props.description}</p>

                <div className="flex h-full flex-1 items-end text-xs flex-wrap sm:text-base">
                    <div className="bg-primary text-secondary flex items-center gap-2 h-8 rounded-md py-1 px-2 mb-2 mr-2">
                        {props.techOne} {props.nameOne}
                    </div>
                    <div className="bg-primary flex items-center gap-2 rounded-md h-8 px-2 mb-2 mr-2">
                        {props.techTwo} {props.nameTwo}
                    </div>
                    <div
                        className={
                            !props.techThree
                                ? "hidden"
                                : "bg-primary flex items-center gap-2 rounded-md h-8 mb-2 px-2 mr-2"
                        }
                    >
                        {props.techThree} {props.nameThree}
                    </div>
                </div>

                <div className="flex mt-2  justify-between w-full gap-4 ">
                    <a
                        href={props.btnWebsite}
                        target="_blank"
                        className={
                            props.title === "This portfolio"
                                ? "hidden"
                                : "bg-secondary text-center h-full text-primary rounded-full font-medium w-full px-4 py-2"
                        }
                    >
                        Website
                    </a>
                    <a
                        href={props.btnCode}
                        target="_blank"
                        className="bg-secondary text-center h-full text-primary rounded-full font-medium w-full px-4 py-2"
                    >
                        Code
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
