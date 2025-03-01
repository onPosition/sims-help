import fetchContentType from "@/lib/fetchContentType";
import { FooterData, NavigationItem } from "../../../../types/types";
import { strapiImage } from "@/lib/strapiImage";
import ActionButton from "../ui/action-button";
import Image from "next/image";

async function getFooterData() {
    const footerData: FooterData = await fetchContentType(
        "global",
        `populate[0]=navigation.navigation_items&populate[1]=footer.button.icon&populate[2]=footer.line.item&populate[3]=footer.logo`,
        true
    );
    return footerData;
}

const footerData = await getFooterData();

export function Footer() {
    console.log(footerData);
    return (
        <div className="bg-bgheader mt-16 py-8 flex flex-col items-center justify-center font-semibold relative">
            {/* Фоновое изображение */}
            <div className="absolute inset-0 bg-[url('/dots.png')] dark:opacity-20 z-0"></div>

            {/* Верхний блок (лого, навигация, кнопки) */}
            <div className="w-full max-w-[1300px] border-[#BEB7AE] border-b-[1px] py-8 flex flex-wrap items-start justify-between relative gap-6 px-4 md:px-8">
                {/* Логотип */}
                <Image
                    src={strapiImage(footerData.footer.logo.url)}
                    className="w-[133px] dark-invert"
                    alt="logo"
                    width={133}
                    height={50}
                />

                {/* Навигация */}
                <nav className="flex flex-wrap gap-4 md:gap-8 flex-col lg:flex-row">
                    {footerData.navigation.navigation_items.map(
                        (nav_item: NavigationItem) => (
                            <a
                                href={`/${nav_item.slug}`}
                                key={nav_item.id}
                                className="h-14 flex items-center"
                            >
                                {nav_item.title}
                            </a>
                        )
                    )}
                </nav>

                {/* Кнопки */}
                <div className="flex flex-col gap-4">
                    {footerData.footer.button.map((button) => (
                        <ActionButton
                            label={button.text}
                            type={button.type}
                            icon={strapiImage(button.icon.url)}
                            key={button.id}
                        />
                    ))}
                </div>
            </div>

            {/* Средний блок (дополнительная информация) */}
            <div className="flex flex-wrap w-full max-w-[1300px] z-10 justify-between py-8 font-normal gap-4 px-4 md:px-8">
                {footerData.footer.line[0].item.map((line) =>
                    line.link ? (
                        <a
                            href={line.link}
                            key={line.id}
                            className="whitespace-nowrap"
                        >
                            {line.text}
                        </a>
                    ) : (
                        <p key={line.id} className="whitespace-nowrap">
                            {line.text}
                        </p>
                    )
                )}
            </div>

            {/* Нижний блок (копирайт) */}
            <p className="text-fadedText px-4 text-center">
                © 2024 — {new Date().getFullYear()} The Sims 4 Helper
            </p>
        </div>
    );
}
