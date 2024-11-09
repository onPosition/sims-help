import Link from "next/link";
import { Article, Video } from "../../../../types/types";
import CategoriesColumn from "./CategoriesColumn";
import PostCard from "./postCard";
import { Title } from "./title";

export default function BlogGrid({
    posts,
    blogCategory,
}: {
    posts: any;
    blogCategory?: string;
}) {
    return (
        <>
            <Title text="Статьи по Sims" size="2xl" />
            <div className="flex mt-8">
                <CategoriesColumn category="posts" />
                <div className="grid-cols-3 w-3/4 grid gap-4">
                    {posts.data
                        .filter(
                            (post: Article) =>
                                post.posts_categories[0].slug === blogCategory
                        )
                        .map((post: Article) => (
                            <Link href={`/blog/${post.slug}`} className="">
                                <PostCard
                                    title={post.Title}
                                    cover={post.Cover.url}
                                    key={post.id}
                                    date={post.createdAt}
                                    views={0}
                                />
                            </Link>
                        ))}
                </div>
            </div>
        </>
    );
}
