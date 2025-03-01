import Image from "next/image";
import ActionButton from "../ui/action-button";
import { Title } from "../ui/title";

export default function NotFound() {
    return (
        <div className="relative z-10 max-w-[1300px]  flex justify-between flex-col m-auto items-center py-20 lg:flex-row  mb-16 gap-8">
            <section className="w-full flex flex-col gap-10 lg:w-2/5 mb-8 lg:mb-0">
                <h1 className="text-h1 font-bold font-sans max-w-[600px]">
                    {/* <Link href="/">{formattedText}</Link> */}
                </h1>
                <Title size="2xl">Страница не найдена</Title>
                <div className="">
                    <p className="text-[21px] leading-8 max-w-[400px] border-left-4 border-black">
                        Такой страницы не существует или она была удалена
                    </p>
                </div>
                <ActionButton label="Вернуться на главную" type="primary" />
            </section>
            <aside className="w-full lg:w-2/5 flex items-center justify-center aspect-square relative">
                <Image
                    src="/404.png"
                    alt="tg"
                    className="h-full w-full"
                    fill
                    sizes="100vw"
                />
            </aside>
        </div>
    );
}
