import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Title } from "./title";

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
                "bg-accent hover:bg-maincolor hover:text-white  px-4 p-4 lg:px-8 lg:pt-8 lg:pb-4 rounded-xl flex flex-col items-center text-center lg:text-left justify-between lg:items-start gap-2 lg:gap-8 w-1/3 h-fit lg:h-[200px]",
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
                <Title text={title} size="sm" className="font-bold" />
            </div>
        </Link>
    );
};

export default Card;
