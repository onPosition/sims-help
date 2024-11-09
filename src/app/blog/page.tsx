import React from "react";
import Header from "../components/shared/header";
import Content from "../components/shared/content";
import { Title } from "../components/ui/title";
import { SearchInput } from "../components/shared/search";
interface articlesProps {}

export const articles: React.FC<articlesProps> = () => {
    return (
        <div>
            <Header activeCategory="articles" />
            <div className="flex justify-between items-center ">
                <Title text="Статьи по Sims" size="2xl" />
                <SearchInput defaultValue="" category="blog" />
            </div>
            <Content activeCategory="posts" />
        </div>
    );
};

export default articles;
