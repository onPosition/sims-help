import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
    subsets: ["cyrillic"],
    display: "swap",
    variable: "--font-montserrat",
});

export const metadata: Metadata = {
    title: "Бот помощи Sims",
    description: "Техническая поддержка, разбор папки mods",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" className={montserrat.variable}>
            <link rel="icon" href="/favicon.png" sizes="any" />
            <body className="font-sans container max-w-[1100px] mx-auto cursor-simsdefault">
                {children}
            </body>
        </html>
    );
}
