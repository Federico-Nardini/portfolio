import React from "react";
import Card from "./Card";

import MealPrepDark from "../../assets/MealPrepDark.png";
import ThisPortfolio32 from "../../assets/ThisPortfolio32.png";

import { SiReact, SiTailwindcss, SiJavascript, SiCss3, SiHtml5 } from "react-icons/si";

const Cards = () => {
    return (
        <div
            id="projects"
            className="w-full pb-[5rem] md:pb-[10rem] pt-[5rem] md:pt-[10rem] px-8 md:px-8 bg-primary"
        >
            <div className="max-w-[1240px] mx-auto lg:grid-cols-3  grid gap-16 md:gap-8">
                <Card
                    logo={MealPrepDark}
                    title={"Meal Prep"}
                    description={
                        "This was my first personal project with VanillaJS. It's a simple weekly meal planner that saves data in the browser local storage. I still use it to these days. One day i'll add a real database."
                    }
                    techOne={<SiHtml5 size={20} className="text-orange-600" />}
                    techTwo={<SiCss3 size={20} className="text-blue-500" />}
                    techThree={<SiJavascript size={20} className="text-yellow-500" />}
                    nameOne={"HTML5"}
                    nameTwo={"CSS3"}
                    nameThree={"JS"}
                    btnWebsite={"https://federico-nardini.github.io/Meal-planner/"}
                    btnCode={"https://github.com/Federico-Nardini/Meal-planner"}
                />
                <Card
                    logo={ThisPortfolio32}
                    title={"This portfolio"}
                    description={
                        "Well, this is just the website you are currently on so i removed one button. If you want it back contact me."
                    }
                    techOne={<SiReact size={20} className="text-purple-300" />}
                    techTwo={<SiTailwindcss size={20} className="text-blue-400" />}
                    nameOne={"React"}
                    nameTwo={"TailwindCSS"}
                    btnCode={"https://github.com/Federico-Nardini/portfolio"}
                />
                <Card
                    logo={ThisPortfolio32}
                    title={"Innovatherm"}
                    description={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eum obcaecati, aspernatur corrupti deserunt eveniet? Veritatis vero, inventore quaerat"
                    }
                />
            </div>
        </div>
    );
};

export default Cards;
