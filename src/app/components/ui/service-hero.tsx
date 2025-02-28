import Image from "next/image";
import { strapiImage } from "@/lib/strapiImage";

export interface ServiceHeroProps {
    title: string;
    subtitle: string;
    image: string;
}

export default function ServiceHero({
    title,
    subtitle,
    image,
}: ServiceHeroProps) {
    return (
        <header className="mb-16">
            <div className="bg-bgheader m-auto relative">
                <div className="absolute inset-0 bg-[url('/dots.png')] dark:opacity-20"></div>
                <div className="relative px-4 lg:px-0 z-10 max-w-[1300px]  flex m-auto items-center py-20 flex-col-reverse lg:flex-row justify-center  mb-16 gap-8">
                    <section className="w-full flex flex-col gap-10 lg:w-1/2 mb-8 lg:mb-0">
                        <h1 className="text-h1 font-bold font-sans max-w-[600px]">
                            {title}
                        </h1>
                        <div className="">
                            <p className="text-[21px] leading-8 max-w-[400px] border-left-4 border-black">
                                {subtitle}
                            </p>
                        </div>
                    </section>
                    <aside className="w-full lg:w-1/2 p-2 flex items-center justify-center aspect-square relative">
                        <Image
                            src={strapiImage(image)}
                            alt="tg"
                            className="h-full w-full"
                            fill
                            sizes="100vw"
                        />
                    </aside>
                </div>
            </div>
        </header>
    );
}
