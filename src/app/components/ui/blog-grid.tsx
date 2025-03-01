import Link from "next/link";
import { Article } from "../../../../types/types";
import CategoriesColumn from "./CategoriesColumn";
import PostCard from "./postCard";
import fetchContentType from "@/lib/fetchContentType";

export default async function BlogGrid({
    blogCategory,
}: {
    blogCategory?: string;
}) {
    const posts = await fetchContentType(
        "posts",
        "sort[0]=popularity:desc&populate=*",
        false,
        100
    );
    return (
        <>
            <div className="flex max-w-[1300px] m-auto flex-col lg:flex-row mt-8 px-4 lg:px-0 scroll-mt-40">
                <CategoriesColumn
                    category="posts"
                    activeCategory={blogCategory}
                />
                <div className="grid-cols-1 lg:grid-cols-3 w-full lg:w-3/4 grid gap-4">
                    {posts.data
                        .filter(
                            blogCategory
                                ? (post: Article) =>
                                      post.post_category[0].slug ===
                                      blogCategory
                                : () => true
                        )
                        .map((post: Article) => (
                            <Link href={`/blog/${post.slug}`} key={post.id}>
                                <PostCard
                                    title={post.title}
                                    cover={post.cover.url}
                                    key={post.id}
                                    date={post.updatedAt}
                                    views={0}
                                    type="post"
                                />
                            </Link>
                        ))}
                </div>
            </div>
            {/* {blogCategory && (
                <p className="text-fadedText w-full text-center mt-8">
                    {"Статей в этой категории: " +
                        posts.data.filter(
                            (post: Article) =>
                                post.post_category[0].slug === blogCategory
                        ).length}
                </p>
            )} */}
        </>
    );
}
