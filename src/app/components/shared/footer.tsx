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
    return (
        <div
            className="bg-bgheader mt-16 py-8 flex flex-col items-center justify-center font-semibold"
            style={{ backgroundImage: "url('/dots black 20.png')" }}
        >
            {/* Top section - logo, nav, buttons */}
            <div className="w-[1200px] border-[#BEB7AE] border-b-[1px] py-8 flex items-start justify-between">
                <Image
                    src={strapiImage(footerData.footer.logo.url)}
                    className="w-[133px] dark-invert"
                    alt="logo"
                    width={133}
                    height={50}
                />

                {footerData.navigation.navigation_items.map(
                    (nav_item: NavigationItem) => (
                        <a href={`/${nav_item.slug}`} key={nav_item.id}>
                            {nav_item.title}
                        </a>
                    )
                )}
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

            <div className="flex w-[1200px] justify-between py-8">
                {footerData.footer.line[0].item.map((line) =>
                    line.link ? (
                        <a href={line.link} key={line.id}>
                            {line.text}
                        </a>
                    ) : (
                        <p key={line.id}>{line.text}</p>
                    )
                )}
            </div>

            <p className="text-fadedText">
                © 2024 — {new Date().getFullYear()} Sims 4 Helper
            </p>
        </div>
    );
}
