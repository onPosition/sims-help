import Link from "next/link";
import { Article } from "../../../../types/types";
import CategoriesColumn from "./CategoriesColumn";
import PostCard from "./postCard";

export default function BlogGrid({
    posts,
    blogCategory,
}: {
    posts: { data: Article[] };
    blogCategory?: string;
}) {
    console.log("Мы находимся в BlogGrid");
    return (
        <>
            <div className="flex flex-col lg:flex-row mt-8">
                <CategoriesColumn
                    category="posts"
                    activeCategory={blogCategory}
                />
                <div className="grid-cols-1 lg:grid-cols-3 w-full lg:w-3/4 grid gap-4">
                    {posts.data
                        .filter(
                            (post: Article) =>
                                post.posts_categories[0].slug === blogCategory
                        )
                        .map((post: Article) => (
                            <Link href={`/blog/${post.slug}`} key={post.id}>
                                <PostCard
                                    title={post.Title}
                                    cover={post.Cover.url}
                                    key={post.id}
                                    date={post.createdAt}
                                    views={0}
                                    type="post"
                                />
                            </Link>
                        ))}
                </div>
            </div>
            <p className="text-fadedText w-full text-center mt-8">
                {"Видео в этой категории: " +
                    posts.data.filter(
                        (post: Article) =>
                            post.posts_categories[0].slug === blogCategory
                    ).length}
            </p>
        </>
    );
}
