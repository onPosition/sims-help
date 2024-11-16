import React, { Suspense } from "react";
import Content from "../components/shared/content";
import Header from "../components/shared/header";
import { Title } from "../components/ui/title";
import { SearchInput } from "../components/shared/search";

const Page = () => {
    return (
        <div>
            <Header activeCategory="articles" />
            <div
                id="posts"
                className="flex w-full flex-col gap-2 lg:gap-0 lg:flex-row justify-between items-center"
            >
                <Title text="Статьи по Sims" size="2xl" />
                <SearchInput defaultValue="" category="blog" />
            </div>
            {/* <Suspense
                fallback={
                    <div className="flex justify-center w-full h-36">
                        Загружаем...
                    </div>
                }
            > */}
            <Content activeCategory="posts" blogCategory="" />
            {/* </Suspense> */}
        </div>
    );
};

export default Page;
