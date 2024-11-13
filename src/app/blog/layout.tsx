import Header from "../components/shared/header";
import { SearchInput } from "../components/shared/search";
import { Title } from "../components/ui/title";

type BlogLayoutProps = {
    children: React.ReactNode;
};

export default function ArticlesLayout({ children }: BlogLayoutProps) {
    return (
        <>
            <Header activeCategory="articles" />
            <div
                id="posts"
                className="flex w-full flex-col gap-2 lg:gap-0 lg:flex-row justify-between items-center"
            >
                <Title text="Статьи по Sims" size="2xl" />
                <SearchInput defaultValue="" category="blog" />
            </div>
            {children}
        </>
    );
}
