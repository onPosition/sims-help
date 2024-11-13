import Link from "next/link";
import { Video } from "../../../../types/types";
import CategoriesColumn from "./CategoriesColumn";
import PostCard from "./postCard";
import { getYoutubeCover } from "@/lib/getYoutubeCover";

export default function VideoGrid({
    videos,
    videoCategory,
}: {
    videos: { data: Video[] };
    videoCategory?: string;
}) {
    // console.log("Мы находимся в VideoGrid");
    // console.log(
    //     videos.data.forEach((video: Video) =>
    //         console.log(video.video_categories[0])
    //     )
    // );
    return (
        <>
            <div className="flex flex-col lg:flex-row mt-8">
                <CategoriesColumn
                    category="video"
                    activeCategory={videoCategory}
                />
                <div className="grid-cols-1 lg:grid-cols-3 w-full lg:w-3/4 grid gap-4">
                    {videos.data
                        .filter(
                            (video: Video) =>
                                video.video_categories[0].slug === videoCategory
                        )
                        .map((video: Video) => (
                            <Link href={`/video/${video.slug}`} key={video.id}>
                                <PostCard
                                    title={video.title}
                                    cover={getYoutubeCover(video.youtube_id)}
                                    key={video.id}
                                    date={video.createdAt}
                                    views={0}
                                    type="video"
                                />
                            </Link>
                        ))}
                </div>
            </div>
            <p className="text-fadedText w-full text-center mt-8">
                {"Видео в этой категории: " +
                    videos.data.filter(
                        (video: Video) =>
                            video.video_categories[0].slug === videoCategory
                    ).length}
            </p>
        </>
    );
}
