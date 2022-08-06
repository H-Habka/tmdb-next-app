/** @type {import('tailwindcss').Config} */
module.exports = {
    variants: {
        scrollbars: ["dark"],
    },
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        screens: {
            xsm:"480px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        extend: {
            colors: {
                WithOpacity : 'rgba(0,0,0,0.4)',
                darkMode: "hsl(0, 0%, 18.82%)",
                darkModeMain: "hsl(0, 0%, 10.82%)",
            },
            gridTemplateColumns: {
                auto10rem: "repeat(auto-fill, minmax(10rem, 1fr))",
                auto15rem: "repeat(auto-fill, minmax(15rem, 1fr))",
                auto20rem: "repeat(auto-fill, minmax(20rem, 1fr))",
                auto30rem: "repeat(auto-fill, minmax(30rem, 1fr))",
            },
        },
    },
    plugins: [require("tailwind-scrollbar")],
};
