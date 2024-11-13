import React, { Suspense } from "react";
import Content from "../components/shared/content";

const videos: React.FC = () => {
    return (
        <div>
            <Suspense
                fallback={
                    <div className="flex justify-center mt-8">Загружаем...</div>
                }
            >
                <Content activeCategory="video" />
            </Suspense>
        </div>
    );
};

export default videos;
