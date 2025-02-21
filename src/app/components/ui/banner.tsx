import React from "react";
import Image from "next/image";
import { strapiImage } from "@/lib/strapiImage";

interface bannerProps {
    serviceSlug?: string;
    text?: string;
    image?: string;
}

export const Banner: React.FC<bannerProps> = ({ serviceSlug, text, image }) => {
    function parseBoldText(input) {
        // Разделяем текст на части: обычный текст и выделенный жирный
        const parts = input.split(/(\*\*.+?\*\*)/);

        return (
            <span>
                {parts.map((part, index) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                        // Удаляем ** и оборачиваем в <b>
                        <span key={index} className="text-maincolor font-bold">
                            {part.slice(2, -2)}
                        </span>
                    ) : (
                        // Обычный текст
                        <span key={index}>{part}</span>
                    )
                )}
            </span>
        );
    }

    return (
        <div className="mb-8 flex flex-row justify-between">
            <div className="w-1/2 text-xl ">
                <p>{parseBoldText(text)}</p>
            </div>
            <a href={`/services/${serviceSlug}`} className="w-1/2 relative">
                <img
                    src="/arrow.png"
                    className="absolute bottom-20 -left-44 pointer-events-none rotate-[24deg]"
                />
                <Image
                    src={strapiImage(image)}
                    alt="re"
                    width={0}
                    height={0}
                    sizes="100%"
                    className="w-full h-100% rounded-xl"
                />
            </a>
        </div>
    );
};

export default Banner;
