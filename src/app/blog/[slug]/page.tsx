import React from "react";
import { Title } from "@/app/components/ui/title";
import fetchContentType from "@/lib/fetchContentType";
import { Article, Params } from "../../../../types/types";
import { ArticlesRow } from "@/app/components/ui/articles-row";
import PostMetadata from "@/app/components/ui/post-metadata";
import BlockRendererClient from "@/app/components/ui/block-renderer-client";
import Banner from "@/app/components/ui/banner";
import Header from "@/app/components/shared/header";

async function getPost({ params }: { params: Params }) {
    const slug = (await params).slug;

    const article: Article = await fetchContentType(
        "posts",
        `filters[slug]=${slug}&populate=*`,
        true
    );
    return article;
}
async function getServiceInfo({ params }: { params: Params }) {
    const slug = (await params).slug;
    const coverUrl: Article = await fetchContentType(
        "posts",
        `filters[slug]=${slug}&[populate][dynamic_zone][on][dinamyc-zone.cta][populate][service][populate]=cover`,
        true
    );
    const response = coverUrl.dynamic_zone[0]?.service;
    return response || null;
}
async function getRelatedArticles({ params }: { params: Params }) {
    const slug = (await params).slug;
    const articlesArray: any = await fetchContentType(
        "posts",
        `filters[slug]=${slug}&populate[dynamic_zone][on][dinamyc-zone.related-posts][populate]=*`,
        true
    );
    const response = articlesArray.dynamic_zone[0]?.posts.map(
        (post) => post.slug
    );
    return response || null;
}

export async function generateMetadata({ params }) {
    const article = await getPost({ params });
    if (article)
        return {
            title: `${article.title} | Sims Blog`,
        };
    return;
}

export default async function Page({ params }: { params: Params }) {
    const article = await getPost({ params });

    if (!article) {
        return <h1>404</h1>;
    }

    const ctaObject = article.dynamic_zone?.find(
        (zone) => zone.__component === "dinamyc-zone.cta"
    );

    const serviceInfo = await getServiceInfo({ params });

    const relatedAtricles = await getRelatedArticles({ params });
    console.log(relatedAtricles);

    return (
        <div className="max-w-[1200px] m-auto">
            <Header navOnly={true} />
            <article className="mt-16">
                <Title size="2xl" className="text-center my-8">
                    {article.title}
                </Title>
                <PostMetadata date={article.createdAt} views={0} />

                <div className="bg-post mt-8 p-8 lg:p-16 rounded-3xl mb-16 post-article">
                    {/* <BlocksRenderer content={article.text} /> */}
                    <BlockRendererClient content={article.text} />
                </div>
            </article>
            {ctaObject && (
                <Banner
                    text={ctaObject.text}
                    image={serviceInfo.cover.url}
                    serviceSlug={serviceInfo.slug}
                />
            )}
            {!relatedAtricles ? (
                <ArticlesRow
                    categorySlug={article.post_category[0].slug}
                    title="Связанные статьи"
                    id={article.id}
                />
            ) : (
                <ArticlesRow
                    relatedAtricles={relatedAtricles}
                    title="Связанные статьи_"
                    id={article.id}
                />
            )}
        </div>
    );
}
