import React, { Suspense } from "react";
import Content from "../components/shared/content";
import Header from "../components/shared/header";
import { Title } from "../components/ui/title";
import { SearchInput } from "../components/shared/search";

const videos: React.FC = () => {
    return (
        <div>
            <Header activeCategory="video" />
            <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row justify-between items-center">
                <Title text="Видео туториалы" size="2xl" />
                <SearchInput defaultValue="" category="videos" />
            </div>
            {/* <Suspense
                fallback={
                    <div className="flex justify-center mt-8">Загружаем...</div>
                }
            > */}
            <Content activeCategory="video" />
            {/* </Suspense> */}
        </div>
    );
};

export default videos;
