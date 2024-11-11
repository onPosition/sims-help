import React from "react";
import Header from "../components/shared/header";
import Content from "../components/shared/content";
import { Title } from "../components/ui/title";
import { SearchInput } from "../components/shared/search";

const Page = () => {
    return (
        <div>
            <Header activeCategory="articles" />
            <div
                id="posts"
                className="flex flex-col lg:flex-row justify-between items-center"
            >
                <Title text="Статьи по Sims" size="2xl" />
                <SearchInput defaultValue="" category="blog" />
            </div>
            <Content activeCategory="posts" blogCategory="" />
        </div>
    );
};

export default Page;
