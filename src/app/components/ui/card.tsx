import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface CardProps {
    className?: string | {};
    title: string;
    slug: string;
}

export const Card: React.FC<CardProps> = ({ className, title, slug }) => {
    return (
        <Link
            href={slug}
            className={cn(
                "bg-gray-200 p-2 rounded-xl flex my-8 items-center justify-center w-1/3 h-[200px]",
                className
            )}
            scroll={false}
        >
            <div>
                <p className="text-black">{title}</p>
            </div>
        </Link>
    );
};

export default Card;
