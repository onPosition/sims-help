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
            fontSize: {
                h1: ["55px", "65px"],
                h2: ["24px", "32px"],
                h3: ["20px", "28px"],
                body: ["16px", "24px"],
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
            card: "var(--card)",
            post: "var(--post)",
            bgheader: "var(--bg-header)",
            btnprimary: "var(--btn-primary)",
            postcard: "var(--postcard)",
        },
        screens: {
            sm: "380px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
    },
    plugins: [],
};
export default config;
