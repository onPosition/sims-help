import { Title } from "@/app/components/ui/title";
import Header from "@/app/components/shared/header";
import { SearchInput } from "@/app/components/shared/search";

export default function ArticlesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header activeCategory="video" />
            <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row justify-between items-center">
                <Title text="Видео туториалы" size="2xl" />
                <SearchInput defaultValue="" category="videos" />
            </div>
            {children}
        </>
    );
}
