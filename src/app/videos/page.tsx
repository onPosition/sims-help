import React from "react";
import Header from "../components/shared/header";
import Main from "../components/shared/main";
interface videosProps {}

export const videos: React.FC<videosProps> = () => {
    return (
        <div className="container max-w-[1100px] mx-auto">
            <Header activeCategory="videos" />
            <Main />
        </div>
    );
};

export default videos;
