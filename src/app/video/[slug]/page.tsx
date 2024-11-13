import React from "react";
import { Title } from "@/app/components/ui/title";
import fetchContentType from "@/lib/fetchContentType";
import { Video } from "../../../../types/types";
import { readableDate } from "@/lib/readableDate";
import Link from "next/link";
import splitYoutubeUrl from "@/lib/splitYoutubeId";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;
    const video: Video = await fetchContentType(
        "videos",
        `filters[slug]=${slug}&populate=*`,
        true
    );
    const { videoId, timecodeInt } = splitYoutubeUrl(video.youtube_id);
    console.log(videoId);
    console.log(timecodeInt);

    return (
        <>
            <div className="mt-16">
                <Link
                    href="/video"
                    className="font-bold p-4 bg-maincolor rounded-xl"
                >
                    {"< Назад"}
                </Link>
                <Title
                    text={video.title}
                    size="2xl"
                    className="text-center my-8"
                />
                <div className="text-center mb-8 text-fadedText">
                    <p>{readableDate(video.createdAt)} | 123 Просмотров</p>
                </div>
                <div className="bg-post p-8 lg:p-16 flex justify-center rounded-3xl">
                    <iframe
                        id="player"
                        itemType="text/html"
                        width="640"
                        height="390"
                        src={`https://www.youtube.com/embed/${videoId}?start=${timecodeInt}&enablejsapi=1`}
                    ></iframe>
                </div>
            </div>
        </>
    );
}
