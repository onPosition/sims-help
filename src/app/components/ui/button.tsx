import { cn } from "@/lib/utils";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    handleClick?: () => void;
    text: string;
}

export default function Button({ className, handleClick, text }: ButtonProps) {
    return (
        <button
            className={cn(
                "bg-maincolor text-[#fff] p-3 px-5 rounded-md font-bold hover:opacity-90",
                className
            )}
            onClick={handleClick}
        >
            <span className="drop-shadow-md">{text}</span>
        </button>
    );
}
