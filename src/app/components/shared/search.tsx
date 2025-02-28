"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";
import Button from "../ui/button";
import Image from "next/image";

interface iDefault {
    defaultValue: string | null;
    className?: string;
    showButton?: boolean;
    category: string;
}

export const SearchInput = ({
    defaultValue,
    className,
    showButton,
    category,
}: iDefault) => {
    const router = useRouter();
    const [inputValue, setValue] = useState(defaultValue);
    const searchCategories: { [key: string]: string } = {
        blog: "блогу",
        videos: "видео",
        website: "сайту",
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        setValue(inputValue);
    };

    const handleSearch = () => {
        if (inputValue && category === "blog")
            return router.push(`/search/?q=${inputValue}&category=posts`);
        if (inputValue && category === "videos")
            return router.push(`/search/?q=${inputValue}&category=videos`);
        if (inputValue && category === "website")
            return router.push(`search/?q=${inputValue}&category=all`);

        if (!inputValue) return;
    };

    const handleKeyPress = (event: { key: string }) => {
        if (event.key === "Enter") return handleSearch();
    };

    const currentData = searchCategories[category];

    return (
        <div
            className={cn(
                "flex gap-1 w-full lg:w-fit h-fit",
                showButton && "lg:w-full"
            )}
        >
            <div
                className={cn(
                    "bg-accent w-full flex flex-row items-center gap-1 p-1 pl-5 rounded-xl",
                    className
                )}
            >
                <label htmlFor="inputId" className="">
                    <Image
                        src="/search.png"
                        alt="search icon"
                        width={25}
                        height={25}
                        className="dark-invert"
                    />
                </label>

                <input
                    type="text"
                    id="inputId"
                    placeholder={`Поиск по ${currentData}`}
                    value={inputValue ?? ""}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                    className="bg-[transparent] outline-none border-none w-full py-3 pl-2 pr-3"
                />
            </div>
            {showButton && <Button handleClick={handleSearch} text="Искать" />}
        </div>
    );
};
