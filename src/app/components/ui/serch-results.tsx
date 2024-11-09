import Link from "next/link";
import { Article, Video } from "../../../../types/types";
import PostCard from "./postCard";
import { Title } from "./title";

export default function SearchResults({ posts, searchCategory }: any) {
    return (
        <>
            <div className="flex mt-8">
                <div className="grid-cols-3 w-3/4 grid gap-4">
                    {posts.data.map((post: Article) => (
                        <Link
                            href={`/${searchCategory}/${post.slug}`}
                            className=""
                        >
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
