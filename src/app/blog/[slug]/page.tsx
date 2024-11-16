import React from "react";
import { Title } from "@/app/components/ui/title";
import fetchContentType from "@/lib/fetchContentType";
import { Article, Params } from "../../../../types/types";
import Link from "next/link";
import { ArticlesRow } from "@/app/components/ui/articles-row";
import PostMetadata from "@/app/components/ui/post-metadata";
import BlockRendererClient from "@/app/components/ui/block-renderer-client";

async function getPost({ params }: { params: Params }) {
    const slug = (await params).slug;
    const article: Article = await fetchContentType(
        "posts",
        `filters[slug]=${slug}&populate=*`,
        true
    );
    return article;
}

export async function generateMetadata({ params }) {
    const article = await getPost({ params });
    return {
        title: `${article.title} | Sims Blog`,
    };
}

export default async function Page({ params }: { params: Params }) {
    // const slug = (await params).slug;
    // const article: Article = await fetchContentType(
    //     "posts",
    //     `filters[slug]=${slug}&populate=*`,
    //     true
    // );
    const article = await getPost({ params });

    return (
        <>
            <article className="mt-16">
                <Link
                    href="/blog"
                    className="font-bold p-4 mb-8 bg-maincolor rounded-xl"
                >
                    {"< Назад"}
                </Link>
                <Title
                    text={article.title}
                    size="2xl"
                    className="text-center my-8"
                />
                <PostMetadata date={article.createdAt} views={0} />

                <div className="bg-post mt-8 p-8 lg:p-16 rounded-3xl mb-16 post-article">
                    <BlockRendererClient content={article.text} />
                </div>
            </article>
            <ArticlesRow
                categorySlug={article.post_category[0].slug}
                title="Связанные статьи"
                id={article.id}
            />
        </>
    );
}
