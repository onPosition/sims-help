import getContent from "@/lib/getContent";
import React from "react";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Title } from "@/app/components/ui/title";
import fetchContentType from "@/lib/fetchContentType";
import { Article } from "../../../../types/types";
import { readableDate } from "@/lib/readableDate";
import Link from "next/link";
import { ArticlesRow } from "@/app/components/ui/articles-row";
import PostMetadata from "@/app/components/ui/post-metadata";

// export async function generateStaticParams() {
//     const posts = await getContent("posts");

//     return posts.data.map((post: { id: any }) => ({
//         id: post.id.toString(),
//     }));
// }

type BlogPostProps = {
    params: { slug: string };
};

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;
    const article: Article = await fetchContentType(
        "posts",
        `filters[slug]=${slug}&populate=*`,
        true
    );

    return (
        <article className="mt-16">
            <Link
                href="/blog"
                className="font-bold p-4 bg-foreground rounded-xl"
            >
                {"< Назад"}
            </Link>
            <Title
                text={article.Title}
                size="2xl"
                className="text-center mb-4"
            />
            <PostMetadata date={article.createdAt} views={0} />

            <div className="bg-[#f2f2f2] mt-8 p-16 rounded-3xl mb-16">
                <BlocksRenderer content={article.text} />
            </div>
            <ArticlesRow
                categorySlug="obshhie-voprosy"
                title="Связанные статьи"
            />
        </article>
    );
}
