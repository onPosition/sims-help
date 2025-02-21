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
            <img src={icon} className="w-7 h-auto" />
            {label}
        </button>
    );
};

export default ActionButton;
