import React from "react";
import Input from "../ui/input";
import Button from "../ui/button";
import Card from "../ui/card";
import Link from "next/link";
// import { usePathname } from "next/navigation";

interface HeaderProps {
    activeCategory: string;
}

export const Header: React.FC<HeaderProps> = ({ activeCategory }) => {
    return (
        <header
            className="bg-[#eff0f3] px-16"
            style={{
                backgroundImage: `url('/bg.png')`,
                backdropFilter: "blur(2px)",
            }}
        >
            {/* Upper block: title, subtitle, search + tg-bot rounded image */}
            <div className=" flex items-center  justify-center h-[400px]  b min-w-[680px]   ">
                <section className="w-4/6 ">
                    <h1 className="text-[3rem] font-bold c-black text-black font-sans leading-none pb-[2rem]">
                        <Link href="/">
                            {" "}
                            Техническая <br /> поддержка
                        </Link>
                    </h1>
                    <div className="border-l-2 pl-4 border-black mb-[1rem]">
                        <p className="text-gray-400 max-w-[400px] border-left-4 border-black">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Distinctio facere illo officiis.
                        </p>
                    </div>
                    <Input />
                    <Button className="" />
                </section>
                <aside className="w-2/6 p-2 flex items-center justify-center aspect-square">
                    <div className="size-full bg-white rounded-full  flex items-center justify-center">
                        <p className="text-black">
                            <i>Telegram bot</i>
                        </p>
                    </div>
                </aside>
            </div>
            {/* Categories cards container*/}
            <section className="flex items-center justify-center gap-4">
                <Card
                    title="Блог"
                    slug="articles"
                    className={
                        activeCategory === "articles" ? "bg-[#6246ea]" : ""
                    }
                />
                <Card
                    title="Видео"
                    slug="videos"
                    className={
                        activeCategory === "videos" ? "bg-[#6246ea]" : ""
                    }
                />
                <Card
                    title="Услуги"
                    slug="services"
                    className={
                        activeCategory === "services" ? "bg-[#6246ea]" : ""
                    }
                />
            </section>
        </header>
    );
};

export default Header;
