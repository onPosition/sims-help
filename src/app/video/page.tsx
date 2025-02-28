import React from "react";
import Header from "../components/shared/header";
import { Title } from "../components/ui/title";
import { SearchInput } from "../components/shared/search";
import VideoGrid from "../components/ui/video-grid";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Видео туториалы по Sims 4",
    description: "Видео туториалы по Sims на все возможные темы",
};

const videos: React.FC = () => {
    return (
        <div className="">
            <Header />
            <div
                className="flex lg:sticky py-4 z-20 bg-background flex-col  top-0 z-100  max-w-[1300px] m-auto gap-2 lg:gap-0 lg:flex-row justify-between items-center px-4 lg:px-0"
                id="video"
            >
                <Title size="2xl">Видео туториалы</Title>
                <SearchInput defaultValue="" category="videos" />
            </div>
            <VideoGrid />
        </div>
    );
};

export default videos;
