import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/shared/footer";

const montserrat = Montserrat({
    subsets: ["cyrillic"],
    display: "swap",
    variable: "--font-montserrat",
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
        <html lang="ru" className={montserrat.variable}>
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
            </body>
        </html>
    );
}
