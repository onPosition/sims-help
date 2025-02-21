import clsx from "clsx";
import React from "react";

type TitleSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

interface Props {
    size: TitleSize;
    className?: string;
    children: React.ReactNode;
}

export const Title: React.FC<Props> = ({
    children,
    size = "sm",
    className,
}) => {
    const mapTagBySize = {
        xs: "h5",
        sm: "h4",
        md: "h3",
        lg: "h2",
        xl: "h1",
        "2xl": "h1",
    } as const;

    const mapClassNameBySize = {
        xs: "text-[16px] ys-text",
        sm: "text-[14px] lg:text-[22px] ys-text",
        md: "text-[20px] lg:text-[26px] ys-text",
        lg: "text-[32px] ys-display",
        xl: "text-[40px] ys-display",
        "2xl": "text-[32px] lg:text-[48px] ys-display font-montserrat-alternates",
    } as const;

    return React.createElement(
        mapTagBySize[size],
        { className: clsx(mapClassNameBySize[size], className) },
        children
    );
};
