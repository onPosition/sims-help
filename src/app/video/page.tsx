import React from "react";
import Header from "../components/shared/header";
import Content from "../components/shared/content";
import { Title } from "../components/ui/title";
import { SearchInput } from "../components/shared/search";

const videos: React.FC = () => {
    return (
        <div>
            <Header activeCategory="video" />
            <div className="flex flex-col lg:flex-row justify-between items-center">
                <Title text="Видео туториалы" size="2xl" />
                <SearchInput defaultValue="" category="videos" />
            </div>
            <Content activeCategory="video" />
        </div>
    );
};

export default videos;
