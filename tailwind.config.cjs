/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#083d77",
                primaryDarker: "#112031",
                secondary: "#fff",
                accent: "#61ECBD",
                accentLighter: "#C8F9E8",
                accentSaturated: "#00F5A3",
            },
            boxShadow: {
                2: "rgb(17, 32, 49) 0px 20px 30px -10px;",
            },
        },
    },
    plugins: [],
};

//253027 verde
//083d77 blu
//ebebd3 beige di blu
//e9e5c6 beige di verde
