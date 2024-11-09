import fetchContentType from "@/lib/fetchContentType";
import { Article, Category } from "../../../../types/types";
import PostCard from "./postCard";
import { Title } from "./title";
import Link from "next/link";

interface ArticlesRowProps {
    categorySlug: string;
    title: string;
}

export async function ArticlesRow({ categorySlug, title }: ArticlesRowProps) {
    const posts = await fetchContentType(
        "posts",
        `filters[posts_categories][slug][$eq]=${categorySlug}&populate=*`
    );
    console.log(posts);
    return (
        <section className="mb-16">
            <div className="flex justify-between items-center font-bold">
                <Title size="md" text={title} className="mb-4" />
                <Link href={"/blog/"} className="hover:text-maincolor">
                    {"Все Cтатьи >"}
                </Link>
            </div>
            <div className="grid-cols-4 w-full grid gap-4">
                {posts.data.map((article: Article) => (
                    <Link href={`/blog/${article.slug}`}>
                        <PostCard
                            title={article.Title}
                            cover={article.Cover.url}
                            key={article.id}
                            date={article.createdAt}
                            views={0}
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
}
