import getContent from "@/lib/getContent";
import React from "react";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Title } from "@/app/components/ui/title";
import fetchContentType from "@/lib/fetchContentType";
import { Service, Video } from "../../../../types/types";
import { readableDate } from "@/lib/readableDate";
import Link from "next/link";

export default async function Page({ params }: any) {
    const service: Service = await fetchContentType(
        "services",
        `filters[slug]=${params?.slug}&populate=*`,
        true
    );

    return (
        <>
            <div className="mt-16">
                <Link
                    href="/services"
                    className="font-bold p-4 bg-foreground rounded-xl"
                >
                    {"< Назад"}
                </Link>
                <Title
                    text={service.title}
                    size="2xl"
                    className="text-center mb-8"
                />
                <div className="text-center mb-8 text-fadedText">
                    <p>{readableDate(service.createdAt)} | 123 Просмотров</p>
                </div>
                <div className="bg-foreground p-16 flex justify-center rounded-3xl">
                    <BlocksRenderer content={service.text} />
                </div>
            </div>
        </>
    );
}
