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

export default function Header({ navOnly = false }) {
    console.log(formattedText);
    console.log(globalData.hero.title);
    if (navOnly) {
        return (
            <nav className="max-w-[1200px] m-auto flex justify-between">
                <Link href={"/"}>
                    <Image
                        src={strapiImage(globalData.footer.logo.url)}
                        className="w-[133px] dark-invert"
                        alt="logo"
                        width={133}
                        height={50}
                    />
                </Link>
                <div className="flex items-center gap-10 py-8">
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
                <nav className="max-w-[1200px] m-auto flex justify-between">
                    <Link href="/" className="flex items-center">
                        <img
                            src={strapiImage(globalData.footer.logo.url)}
                            className="w-[133px] dark-invert"
                        />
                    </Link>
                    <div className="flex items-center gap-10 py-8">
                        {globalData.navigation.navigation_items.map(
                            (nav_item: NavigationItem) => (
                                <Link
                                    href={`/${nav_item.slug}`}
                                    key={nav_item.id}
                                >
                                    {nav_item.title}
                                </Link>
                            )
                        )}
                    </div>
                </nav>
                <div
                    className="bg-bgheader m-auto"
                    style={{ backgroundImage: "url('/dots black 20.png')" }}
                >
                    <div className="max-w-[1200px]  flex m-auto items-center py-16 flex-col-reverse lg:flex-row justify-center  mb-16 ">
                        <section className="w-full lg:w-4/6 mb-8 lg:mb-0">
                            <h1 className="text-[3rem] font-bold font-sans leading-none pb-[2rem] max-w-[600px]">
                                <Link href="/">{formattedText}</Link>
                            </h1>
                            <div className=" mb-[1rem]">
                                <p className="text-gray-600 max-w-[400px] border-left-4 border-black">
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
                        <aside className="w-full lg:w-2/6 p-2 flex items-center justify-center aspect-square">
                            <div className="size-full rounded-full  flex items-center justify-center">
                                <Image
                                    src={strapiImage(globalData.hero.image.url)}
                                    alt="tg"
                                    width={400}
                                    height={400}
                                />
                            </div>
                        </aside>
                    </div>
                </div>
                <div className="max-w-[1200px] mx-auto">
                    <Navigation
                        items={globalData.navigation.navigation_items}
                    />
                </div>
            </header>
        );
    }
}
