import React from "react";
import Header from "../components/shared/header";
import Main from "../components/shared/main";
interface articlesProps {}

export const articles: React.FC<articlesProps> = () => {
    return (
        <div className="container max-w-[1100px] mx-auto">
            <Header activeCategory="articles" />
            <Main />
        </div>
    );
};

export default articles;
