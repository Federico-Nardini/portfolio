/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                //blue & light green theme
                primary: "#083d77",
                primaryDarker: "#112031",
                secondary: "#fff",
                accent: "#61ECBD",
                accentLighter: "#C8F9E8",
                accentSaturated: "#00F5A3",

                // green orange theme
                // primary: "#253027",
                // secondary: "#ebebd3",
                // accent: "#d97000",
                // primaryDarker: "#ebe3da",
                // accentLighter: "#ebe3da",
                // accentSaturated: "#00F5A3",
            },
            boxShadow: {
                2: "rgb(17, 32, 49) 0px 20px 30px -10px;",
                3: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;",
                4: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
                5: " rgba(0, 0, 0, 0.1) 0px 4px 12px;",
                6: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
            },
        },
    },
    plugins: [],
};

//253027 verde
//083d77 blu
//ebebd3 beige di blu
//e9e5c6 beige di verde
