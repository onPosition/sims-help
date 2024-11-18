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
                className="flex w-full flex-col gap-2 lg:gap-0 lg:flex-row justify-between items-center"
            >
                <Title size="2xl">Статьи по Sims</Title>
                <SearchInput defaultValue="" category="blog" />
            </div>
            <BlogGrid />
        </div>
    );
};

export default Page;
