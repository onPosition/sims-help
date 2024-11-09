import React from "react";
import Header from "../components/shared/header";
import Content from "../components/shared/content";
import { Title } from "../components/ui/title";
import { SearchInput } from "../components/shared/search";
interface videosProps {}

export const videos: React.FC<videosProps> = () => {
    return (
        <div>
            <Header activeCategory="video" />
            <div className="flex justify-between items-center ">
                <Title text="Видео туториалы" size="2xl" />
                <SearchInput defaultValue="" category="video" />
            </div>
            <Content activeCategory="video" />
        </div>
    );
};

export default videos;
