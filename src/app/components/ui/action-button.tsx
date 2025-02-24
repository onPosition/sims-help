import { strapiImage } from "@/lib/strapiImage";
import Image from "next/image";
import React from "react";

interface ButtonProps {
    label: string;
    type?: string;
    icon?: string;
    onClick?: () => void;
    link?: string;
}

const ActionButton: React.FC<ButtonProps> = ({
    label,
    type,
    icon,
    onClick,
}) => {
    const types = {
        primary: "bg-btnprimary hover:bg-[#000] text-text",
        secondary: "bg-[white] hover:bg-red-600 text-[#000]",
    };

    return (
        <button
            className={`flex items-center gap-4 px-6 h-14 rounded-lg font-semibold transition ${types[type]}`}
            onClick={onClick}
        >
            <Image
                src={strapiImage(icon)}
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
