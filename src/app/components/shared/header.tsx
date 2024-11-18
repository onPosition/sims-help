import Link from "next/link";
import Image from "next/image";
import { SearchInput } from "./search";
import Navigation from "./navigation";
// import { usePathname } from "next/navigation";

export default function Header() {
    return (
        <header
            className="mb-16"
            // style={{
            //     backgroundImage: `url('/bg.png')`,
            // }}
        >
            <div className=" flex items-center flex-col-reverse lg:flex-row justify-center  ">
                <section className="w-full lg:w-4/6 mb-8 lg:mb-0">
                    <h1 className="text-[3rem] font-bold font-sans leading-none pb-[2rem]">
                        <Link href="/">
                            Техническая <br /> поддержка Sims 4
                        </Link>
                    </h1>
                    <div className="border-l-2 pl-4 border-black mb-[1rem]">
                        <p className="text-gray-600 max-w-[400px] border-left-4 border-black">
                            Изучайте все тонкости игры вместе с нами. Ваш
                            персонаж в беде? Давайте вместе найдем выход!
                        </p>
                    </div>
                    <SearchInput
                        defaultValue={""}
                        className="w-full lg:w-1/2"
                        showButton={true}
                        category="blog"
                    />
                </section>
                <aside className="w-full lg:w-2/6 p-2 flex items-center justify-center aspect-square">
                    <div className="size-full rounded-full  flex items-center justify-center">
                        <Image
                            src="/tg.png"
                            alt="tg"
                            width={400}
                            height={400}
                        />
                    </div>
                </aside>
            </div>
            <Navigation />
        </header>
    );
}
