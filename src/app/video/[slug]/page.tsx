import React from "react";
import { Title } from "@/app/components/ui/title";
import fetchContentType from "@/lib/fetchContentType";
import { Params, Video } from "../../../../types/types";
import splitYoutubeUrl from "@/lib/splitYoutubeId";
import PostMetadata from "@/app/components/ui/post-metadata";
import BackButton from "@/app/components/ui/back-button";

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
    if (video) {
        return {
            title: `${video.title} | Sims Blog`,
        };
    }
    return;
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const video = await getVideo({ params });
    if (!video) {
        return <h1>404</h1>;
    }
    const { videoId, timecodeInt } = splitYoutubeUrl(video.youtube_id);

    return (
        <>
            <div className=" max-w-[1200px] m-auto mt-16">
                <BackButton />
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
