import React from "react";
import Card from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import { SearchInput } from "./search";
// import { usePathname } from "next/navigation";

interface HeaderProps {
    activeCategory: string;
}

export const Header: React.FC<HeaderProps> = ({ activeCategory }) => {
    return (
        <header
            className="mb-16"
            // style={{
            //     backgroundImage: `url('/bg.png')`,
            // }}
        >
            {/* Upper block: title, subtitle, search + tg-bot rounded image */}
            <div className=" flex items-center flex-col-reverse lg:flex-row justify-center  ">
                <section className="w-full lg:w-4/6 mb-8 lg:mb-0">
                    <h1 className="text-[3rem] font-bold font-sans leading-none pb-[2rem]">
                        <Link href="/">
                            {" "}
                            Техническая <br /> поддержка Sims 4
                        </Link>
                    </h1>
                    <div className="border-l-2 pl-4 border-black mb-[1rem]">
                        <p className="text-gray-600 max-w-[400px] border-left-4 border-black">
                            Изучайте все тонкости игры вместе с нами. Ваш
                            персонаж в беде? Давайте вместе найдем выход!
                        </p>
                    </div>
                    <SearchInput
                        defaultValue={""}
                        className="w-full lg:w-1/2"
                        showButton={true}
                        category="blog"
                    />
                </section>
                <aside className="w-full lg:w-2/6 p-2 flex items-center justify-center aspect-square">
                    <div className="size-full rounded-full  flex items-center justify-center">
                        <p>
                            <Image
                                src="/tg.png"
                                alt="tg"
                                width={400}
                                height={400}
                            />
                        </p>
                    </div>
                </aside>
            </div>
            {/* Categories cards container*/}
            <section className="flex flex-row items-center justify-center gap-4">
                <Card
                    title="Полезные Cтатьи"
                    slug="/blog"
                    className={
                        activeCategory === "articles"
                            ? "bg-maincolor text-white"
                            : ""
                    }
                />
                <Card
                    title="Видео-Туториалы"
                    slug="/video"
                    className={
                        activeCategory === "video"
                            ? "bg-maincolor text-white"
                            : ""
                    }
                />
                <Card
                    title="Услуги поддержки"
                    slug="/services"
                    className={
                        activeCategory === "services"
                            ? "bg-maincolor text-white "
                            : ""
                    }
                />
            </section>
        </header>
    );
};

export default Header;
