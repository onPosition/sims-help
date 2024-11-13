import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
    className?: string;
    title: string;
    slug: string;
}

export const Card: React.FC<CardProps> = ({ className, title, slug }) => {
    return (
        <Link
            href={slug}
            className={cn(
                "bg-accent hover:bg-maincolor hover:text-white p-2 rounded-xl flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-8 w-full lg:w-1/3 h-[100px] lg:h-[200px]",
                className
            )}
            scroll={false}
        >
            <Image
                src={"/" + slug.slice(1) + "_3.png"}
                alt="bg"
                width={0}
                height={0}
                sizes="100%"
                className="w-10 lg:w-16 h-10 lg:h-16"
            />
            <div>
                <b>{title}</b>
            </div>
        </Link>
    );
};

export default Card;
