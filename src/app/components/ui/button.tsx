import { cn } from "@/lib/utils";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className }: ButtonProps) {
    return (
        <button className={cn("bg-[#6246ea] p-3 px-5 rounded-md", className)}>
            <b>Искать</b>
        </button>
    );
}
