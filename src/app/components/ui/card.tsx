import { cn } from "@/lib/utils";
import Image from "next/image";
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
                "bg-accent hover:bg-maincolor hover:text-white p-2 rounded-xl flex items-center justify-center gap-8 w-1/3 h-[200px]",
                className
            )}
            scroll={false}
        >
            <Image
                src={"/" + slug.slice(1) + "_2.png"}
                alt="bg"
                width={75}
                height={75}
            />
            <div>
                <b>{title}</b>
            </div>
        </Link>
    );
};

export default Card;
