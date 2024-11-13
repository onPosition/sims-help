import fetchContentType from "@/lib/fetchContentType";
import { Article } from "../../../../types/types";
import PostCard from "./postCard";
import { Title } from "./title";
import Link from "next/link";

interface ArticlesRowProps {
    categorySlug?: string;
    title: string;
    sortBy?: string;
}

export async function ArticlesRow({
    categorySlug,
    title,
    sortBy,
}: ArticlesRowProps) {
    let posts = null;
    if (categorySlug) {
        posts = await fetchContentType(
            "posts",
            `filters[posts_categories][slug][$eq]=${categorySlug}&populate=*`
        );
    }
    if (sortBy) {
        posts = await fetchContentType(
            "posts",
            `sort[0]=${sortBy}:desc&populate=*`
        );
    }
    console.log("Посты на глагне " + posts);
    console.log(posts);
    return (
        <section className="mb-16">
            <div className="flex justify-between items-center font-bold mb-4">
                <Title size="md" text={title} />
                <Link href={"/blog/"} className="hover:text-maincolor">
                    {"Все Cтатьи >"}
                </Link>
            </div>
            <div className="grid grid-cols-1 w-full gap-4 lg:grid-cols-4">
                {posts.data.slice(0, 4).map((article: Article) => (
                    <Link href={`/blog/${article.slug}`} key={article.id}>
                        <PostCard
                            title={article.Title}
                            cover={article.Cover.url}
                            date={article.createdAt}
                            views={0}
                            type="post"
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
}
