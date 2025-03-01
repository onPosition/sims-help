import type { Metadata } from "next";
import { Montserrat, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/shared/footer";
import ScrollToTop from "./components/shared/scroll-to-top";

const montserrat = Montserrat({
    subsets: ["cyrillic"],
    display: "swap",
    variable: "--font-montserrat",
});

const montserratAlt = Montserrat_Alternates({
    subsets: ["latin"],
    weight: ["400", "700"], // Можно выбрать нужные веса
    variable: "--font-montserrat-alt", // Создаём CSS-переменную
});

export const metadata: Metadata = {
    title: "Бот помощи Sims",
    description: "Техническая поддержка, разбор папки mods",
    icons: "/favicon.ico",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="ru"
            className={`${montserrat.variable} ${montserratAlt.variable}`}
        >
            <link rel="icon" href="/favicon.png" sizes="any" />

            <body
                // style={{
                //     backgroundImage: `url('/bg.png')`,
                //     backgroundSize: "cover",
                // }}
                className="font-sans w-full lg:px-0"
            >
                {children}
                <Footer />
                <ScrollToTop />
            </body>
        </html>
    );
}
