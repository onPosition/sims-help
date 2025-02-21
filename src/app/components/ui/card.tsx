"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { usePathname } from "next/navigation";
import { strapiImage } from "@/lib/strapiImage";

interface CardProps {
    className?: string;
    title: string;
    slug: string;
    icon: string;
}

export const Card: React.FC<CardProps> = ({ className, title, slug, icon }) => {
    const pathname = usePathname();
    return (
        <Link
            href={slug}
            className={cn(
                "bg-card border-[1px] border-accent hover:border-maincolor hover:text-white px-4 p-4 lg:px-8 lg:pt-8 lg:pb-4 rounded-xl flex flex-col items-center text-center lg:text-left transition-colors justify-between lg:items-start gap-2 lg:gap-8 w-1/3 h-fit lg:h-[200px]",
                pathname.includes(slug) && "bg-maincolor",
                className
            )}
            scroll={false}
        >
            <Image
                src={strapiImage(icon)}
                alt="bg"
                width={0}
                height={0}
                sizes="100%"
                className="w-10 lg:w-16 h-10 lg:h-16"
            />
            <div>
                <Title size="sm" className="font-bold">
                    {title}
                </Title>
            </div>
        </Link>
    );
};

export default Card;
