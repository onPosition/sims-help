import Link from "next/link";
import { Video } from "../../../../types/types";
import CategoriesColumn from "./CategoriesColumn";
import PostCard from "./postCard";
import { getYoutubeCover } from "@/lib/getYoutubeCover";
import fetchContentType from "@/lib/fetchContentType";

export default async function VideoGrid({
    videoCategory,
}: {
    videoCategory?: string;
}) {
    const videos = await fetchContentType(
        "videos",
        "sort[0]=popularity:desc&populate=*",
        false,
        100
    );
    return (
        <>
            <div className="max-w-[1300px] m-auto flex flex-col lg:flex-row mt-8 px-4 lg:px-0 relative scroll-mt-40">
                <CategoriesColumn
                    category="video"
                    activeCategory={videoCategory}
                />

                <div className="grid-cols-1 lg:grid-cols-3 w-full lg:w-3/4 grid gap-4">
                    {videos.data
                        .filter(
                            videoCategory
                                ? (video: Video) =>
                                      video.video_category[0].slug ===
                                      videoCategory
                                : () => true
                        )
                        .map((video: Video) => (
                            <Link href={`/video/${video.slug}`} key={video.id}>
                                <PostCard
                                    title={video.title}
                                    cover={getYoutubeCover(video.youtube_id)}
                                    key={video.id}
                                    date={video.updatedAt}
                                    views={0}
                                    type="video"
                                />
                            </Link>
                        ))}
                </div>
            </div>
            {/* {videoCategory && (
                <p className="text-fadedText w-full text-center mt-8">
                    {"Видео в этой категории: " +
                        videos.data.filter(
                            (video: Video) =>
                                video.video_category[0].slug === videoCategory
                        ).length}
                </p>
            )} */}
        </>
    );
}
