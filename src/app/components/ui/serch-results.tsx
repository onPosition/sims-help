import Link from "next/link";
import { Article } from "../../../../types/types";
import PostCard from "./postCard";
import { getYoutubeCover } from "@/lib/getYoutubeCover";

export default function SearchResults({
    posts,
    searchCategory,
}: {
    posts: { data: Article[] };
    searchCategory: string;
}) {
    return (
        <>
            <div className="flex mt-8">
                <div className="grid-cols-1 lg:grid-cols-4 w-full grid gap-4">
                    {searchCategory === "posts" &&
                        posts.data.map((post: Article) => (
                            <Link href={`/blog/${post.slug}`} key={post.id}>
                                {
                                    <PostCard
                                        title={post.title}
                                        cover={post.cover.url}
                                        key={post.id}
                                        date={post.createdAt}
                                        views={0}
                                    />
                                }
                            </Link>
                        ))}
                    {searchCategory === "videos" &&
                        posts.data.map((post: Article) => (
                            <Link href={`/video/${post.slug}`} key={post.id}>
                                {
                                    <PostCard
                                        title={post.title}
                                        cover={getYoutubeCover(post.youtube_id)}
                                        key={post.id}
                                        date={post.createdAt}
                                        views={0}
                                    />
                                }
                            </Link>
                        ))}
                </div>
            </div>
        </>
    );
}
