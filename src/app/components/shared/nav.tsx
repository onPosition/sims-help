import Navigation from "./navigation";
import fetchContentType from "@/lib/fetchContentType";
import { GlobalData } from "../../../../types/types";

async function getGlobalData() {
    const globalData: GlobalData = await fetchContentType(
        "global",
        `/api/global?populate[0]=navigation`,
        true
    );
    return globalData;
}

const globalData = await getGlobalData();

export default function Nav() {
    console.log(globalData);
    return (
        <header className="mb-16">
            <div className="bg-bgheader m-auto">
                <div className="max-w-[1200px]  flex m-auto items-center py-16 flex-col-reverse lg:flex-row justify-center  mb-16 ">
                    {/* {footerData.navigation.navigation_items.map(
                    (nav_item: NavigationItem) => (
                        <a href={`/${nav_item.slug}`} key={nav_item.id}>
                            {nav_item.title}
                        </a>
                    )
                )} */}
                </div>
            </div>
            <div className="max-w-[1200px] mx-auto">
                <Navigation items={globalData.navigation.navigation_items} />
            </div>
        </header>
    );
}
