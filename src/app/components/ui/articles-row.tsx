import fetchContentType from "@/lib/fetchContentType";
import { Article } from "../../../../types/types";
import PostCard from "./postCard";
import { Title } from "./title";
import Link from "next/link";

interface ArticlesRowProps {
    categorySlug?: string;
    title: string;
    sortBy?: string;
    filters?: string;
    id?: string;
    relatedAtricles?: string[];
}

export async function ArticlesRow({
    categorySlug,
    title,
    sortBy,
    filters,
    id,
    relatedAtricles,
}: ArticlesRowProps) {
    let posts = null;
    if (categorySlug) {
        posts = await fetchContentType(
            "posts",
            `filters[post_category][slug][$eq]=${categorySlug}&populate=*`
        );
    }
    if (sortBy) {
        posts = await fetchContentType(
            "posts",
            `sort[0]=${sortBy}:desc&populate=*`
        );
    }
    if (filters) {
        posts = await fetchContentType("posts", `filters[popular]&populate=*`);
    }
    if (relatedAtricles) {
        const query = relatedAtricles
            .map((slug) => `filters[slug][$in]=${encodeURIComponent(slug)}`)
            .join("&");
        const fullQuery = `${query}&populate=*`;
        posts = await fetchContentType("posts", fullQuery);
    }
    return (
        <section className="mb-16">
            <div className="flex justify-between items-center font-bold mb-4">
                <Title size="md">{title}</Title>
                <Link
                    href={
                        categorySlug
                            ? `/blog/category/${categorySlug}`
                            : "/blog/"
                    }
                    className="hover:text-maincolor"
                >
                    {"Все Cтатьи >"}
                </Link>
            </div>
            <div className="grid grid-cols-1 w-full gap-4 lg:grid-cols-4">
                {posts.data
                    .filter((article) => article.id !== id)
                    .slice(0, 4)
                    .map((article: Article) => (
                        <Link href={`/blog/${article.slug}`} key={article.id}>
                            <PostCard
                                title={article.title}
                                cover={article.cover.url}
                                date={article.updatedAt}
                                views={0}
                                type="post"
                            />
                        </Link>
                    ))}
            </div>
        </section>
    );
}
