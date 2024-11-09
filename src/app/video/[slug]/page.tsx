import getContent from "@/lib/getContent";
import React from "react";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Title } from "@/app/components/ui/title";
import fetchContentType from "@/lib/fetchContentType";
import { Video } from "../../../../types/types";
import { readableDate } from "@/lib/readableDate";
import Link from "next/link";

export default async function Page({ params }: any) {
    const video: Video = await fetchContentType(
        "videos",
        `filters[slug]=${params?.slug}&populate=*`,
        true
    );

    return (
        <>
            <div className="mt-16">
                <Link
                    href="/video"
                    className="font-bold p-4 bg-foreground rounded-xl"
                >
                    {"< Назад"}
                </Link>
                <Title
                    text={video.title}
                    size="2xl"
                    className="text-center mb-8"
                />
                <div className="text-center mb-8 text-fadedText">
                    <p>{readableDate(video.createdAt)} | 123 Просмотров</p>
                </div>
                <div className="bg-foreground p-16 flex justify-center rounded-3xl">
                    <iframe
                        id="player"
                        itemType="text/html"
                        width="640"
                        height="390"
                        src={`http://www.youtube.com/embed/${video.youtube_id}?enablejsapi=1`}
                    ></iframe>
                </div>
            </div>
        </>
    );
}
