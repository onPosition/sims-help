import React from "react";
import { Title } from "@/app/components/ui/title";
import fetchContentType from "@/lib/fetchContentType";
import { Article } from "../../../types/types";
import PostMetadata from "@/app/components/ui/post-metadata";
import BlockRendererClient from "@/app/components/ui/block-renderer-client";
import Header from "@/app/components/shared/header";

async function getPage() {
    const article: Article = await fetchContentType(
        "pages",
        `&populate=*`,
        true
    );
    return article;
}

export async function generateMetadata() {
    const article = await getPage();
    if (article)
        return {
            title: `${article.title} | Sims4Helper`,
        };
    return;
}

export default async function Page() {
    const article = await getPage();

    if (!article) {
        return <h1>404</h1>;
    }

    return (
        <div className="max-w-[1300px] m-auto px-4 lg:px-0">
            <Header navOnly={true} />
            <article className="mt-16">
                <Title size="2xl" className="text-center my-8">
                    {article.title}
                </Title>
                <PostMetadata date={article.createdAt} views={0} />

                <div className="bg-post mt-8 p-4 lg:p-16 rounded-3xl mb-16 post-article">
                    {/* <BlocksRenderer content={article.text} /> */}
                    <BlockRendererClient content={article.text} />
                </div>
            </article>
        </div>
    );
}
