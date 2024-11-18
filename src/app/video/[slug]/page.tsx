import React from "react";
import { Title } from "@/app/components/ui/title";
import fetchContentType from "@/lib/fetchContentType";
import { Params, Video } from "../../../../types/types";
import Link from "next/link";
import splitYoutubeUrl from "@/lib/splitYoutubeId";
import PostMetadata from "@/app/components/ui/post-metadata";

async function getVideo({ params }: { params: Params }) {
    const slug = (await params).slug;
    const video: Video = await fetchContentType(
        "videos",
        `filters[slug]=${slug}&populate=*`,
        true
    );
    return video;
}

export async function generateMetadata({ params }) {
    const video = await getVideo({ params });
    return {
        title: `${video.title} | Sims Blog`,
    };
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const video = await getVideo({ params });

    const { videoId, timecodeInt } = splitYoutubeUrl(video.youtube_id);

    return (
        <>
            <div className="mt-16">
                <Link
                    href="/video"
                    className="font-bold p-4 bg-maincolor rounded-xl"
                >
                    {"< Назад"}
                </Link>
                <Title size="2xl" className="text-center my-8">
                    {video.title}
                </Title>
                <div className="text-center mb-8 text-fadedText">
                    <PostMetadata date={video.createdAt} views={0} />
                </div>

                <div className="bg-post p-8 lg:p-16 flex justify-center rounded-3xl">
                    <iframe
                        id="player"
                        itemType="text/html"
                        allow="autoplay"
                        width="640"
                        height="390"
                        src={`https://www.youtube.com/embed/${videoId}?start=${timecodeInt}&enablejsapi=1`}
                    ></iframe>
                </div>
            </div>
        </>
    );
}
