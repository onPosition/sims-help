import { strapiImage } from "@/lib/strapiImage";
import Image from "next/image";
import React from "react";

interface ButtonProps {
    label: string;
    type?: string;
    icon?: string;
    onClick?: () => void;
    link?: string;
    localImage?: boolean;
}

const ActionButton: React.FC<ButtonProps> = ({
    label,
    type,
    icon,
    onClick,
    localImage,
}) => {
    const types = {
        primary: "bg-btnprimary hover:bg-[#000] text-[#fff]",
        secondary: "bg-[white] hover:bg-red-600 text-[#000]",
    };

    return (
        <button
            className={`flex items-center gap-4  px-6 max-w-[300px] h-14 rounded-lg font-semibold transition ${types[type]}`}
            onClick={onClick}
        >
            <Image
                src={localImage ? icon : strapiImage(icon)}
                className="w-7 h-auto"
                alt="logo"
                width={133}
                height={50}
            />
            {label}
        </button>
    );
};

export default ActionButton;
