import React, { Suspense } from "react";
import Content from "../components/shared/content";

const Page = () => {
    return (
        <div>
            <Suspense
                fallback={
                    <div className="flex justify-center w-full h-36">
                        Loading...
                    </div>
                }
            >
                <Content activeCategory="posts" blogCategory="" />
            </Suspense>
        </div>
    );
};

export default Page;
