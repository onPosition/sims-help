"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";
import Button from "../ui/button";

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
    const searchCategories: any = {
        blog: "блогу",
        video: "видео",
        website: "сайту",
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        setValue(inputValue);
    };

    const handleSearch = () => {
        if (inputValue && category === "blog")
            return router.push(`search/?q=${inputValue}&category=posts`);
        if (inputValue && category === "video")
            return router.push(`search/?q=${inputValue}&category=video`);
        if (inputValue && category === "website")
            return router.push(`search/?q=${inputValue}&category=all`);

        if (!inputValue) return;
    };

    const handleKeyPress = (event: { key: any }) => {
        if (event.key === "Enter") return handleSearch();
    };

    const currentData = searchCategories[category];

    return (
        <div className="flex gap-1">
            <div
                className={cn(
                    "bg-accent flex flex-row items-center gap-1 p-1 pl-5 rounded-[15px]",
                    className
                )}
            >
                <label htmlFor="inputId" className="">
                    🔍
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
