import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontFamily: {
                sans: ["var(--font-montserrat)"],
            },
            // cursor: {
            //     default:
            //         "url(https://play.tailwindcss.com/favicons/favicon-16x16.png?v=3), default",
            // },
        },
        colors: {
            maincolor: "var(--maincolor)",
            inputbg: "var(--inputbg)",
            accent: "var(--accent)",
            fadedText: "var(--faded-text)",
        },
    },
    plugins: [],
};
export default config;
