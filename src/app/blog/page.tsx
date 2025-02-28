import Header from "../components/shared/header";
import { Title } from "../components/ui/title";
import { SearchInput } from "../components/shared/search";
import BlogGrid from "../components/ui/blog-grid";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Статьи по Sims",
    description: "Техническая поддержка, разбор папки mods",
};

const Page = () => {
    return (
        <div>
            <Header />
            <div
                id="posts"
                className="flex max-w-[1300px] sticky top-0 z-20 bg-background m-auto flex-col gap-2 lg:gap-0 lg:flex-row justify-between items-center px-4 lg:px-0 py-4"
            >
                <Title size="2xl">Статьи по Sims</Title>
                <SearchInput defaultValue="" category="blog" />
            </div>
            <BlogGrid />
        </div>
    );
};

export default Page;
