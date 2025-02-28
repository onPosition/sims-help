import Link from "next/link";
import Image from "next/image";
import Navigation from "./navigation";
import fetchContentType from "@/lib/fetchContentType";
import { GlobalData, NavigationItem } from "../../../../types/types";
// import { usePathname } from "next/navigation";
import { strapiImage } from "@/lib/strapiImage";
import ActionButton from "../ui/action-button";

async function getGlobalData() {
    const globalData: GlobalData = await fetchContentType(
        "global",
        `/api/global?populate[0]=navigation&populate[1]=navigation.navigation_items.icon&populate[2]=hero.button.icon&populate[3]=hero.image&fields[0]=id&fields[1]=documentId&populate[4]=footer.logo`,
        true
    );
    return globalData;
}

const globalData = await getGlobalData();

const formattedText = globalData.hero.title.replaceAll("&nbsp;", "\u00A0");

console.log(strapiImage(globalData.footer.logo.url));

export default function Header({ navOnly = false }) {
    if (navOnly) {
        return (
            <nav className="max-w-[1300px] m-auto flex justify-between items-center">
                <Link href={"/"}>
                    <Image
                        src={strapiImage(globalData.footer.logo.url)}
                        className="w-[133px] dark-invert"
                        alt="logo"
                        width={133}
                        height={50}
                    />
                </Link>
                <div className="hidden lg:flex items-center gap-10 py-8">
                    {globalData.navigation.navigation_items.map(
                        (nav_item: NavigationItem) => (
                            <a href={`/${nav_item.slug}`} key={nav_item.id}>
                                {nav_item.title}
                            </a>
                        )
                    )}
                </div>
            </nav>
        );
    } else {
        return (
            <header className="mb-16">
                <nav className="max-w-[1300px] mx-auto flex flex-wrap items-center justify-between h-auto md:h-24 px-4">
                    {/* Логотип */}
                    <Link href={"/"} className="w-[133px]">
                        <Image
                            src={strapiImage(globalData.footer.logo.url)}
                            className="w-[133px] dark-invert"
                            alt="logo"
                            width={133}
                            height={50}
                        />
                    </Link>

                    {/* Навигация */}
                    <div className="hidden lg:flex flex-col items-center gap-4 md:gap-10 w-full md:w-auto text-center md:text-left mt-4 md:mt-0 px-4">
                        {globalData.navigation.navigation_items.map(
                            (nav_item: NavigationItem) => (
                                <Link
                                    href={`/${nav_item.slug}`}
                                    key={nav_item.id}
                                    className="px-4 py-2 md:px-0 md:py-0"
                                >
                                    {nav_item.title}
                                </Link>
                            )
                        )}
                    </div>
                </nav>

                <div className="bg-bgheader m-auto relative px-4">
                    <div className="absolute inset-0 bg-[url('/dots.png')] dark:opacity-20"></div>
                    <div className="relative z-10 max-w-[1300px]  flex m-auto items-center py-20 flex-col-reverse lg:flex-row justify-center  mb-16 gap-8">
                        <section className="w-full flex flex-col gap-10 lg:w-1/2 mb-8 lg:mb-0">
                            <h1 className="text-h1 sm:text-2xl font-bold font-sans max-w-[600px]">
                                <Link href="/">{formattedText}</Link>
                            </h1>
                            <div className="">
                                <p className="text-[21px] leading-8 max-w-[400px] border-left-4 border-black">
                                    {globalData.hero.subtitle}
                                </p>
                            </div>
                            <ActionButton
                                label={globalData.hero.button.text}
                                type={globalData.hero.button.type}
                                icon={strapiImage(
                                    globalData.hero.button.icon.url
                                )}
                            />
                        </section>
                        <aside className="w-full lg:w-1/2 p-2 flex items-center justify-center aspect-square relative">
                            <Image
                                src={strapiImage(globalData.hero.image.url)}
                                alt="tg"
                                className="h-full w-full"
                                fill
                                sizes="100vw"
                            />
                        </aside>
                    </div>
                </div>
                <div className="max-w-[1300px] mx-auto">
                    <Navigation
                        items={globalData.navigation.navigation_items}
                    />
                </div>
            </header>
        );
    }
}
