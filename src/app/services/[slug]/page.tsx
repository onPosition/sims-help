import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Title } from "@/app/components/ui/title";
import fetchContentType from "@/lib/fetchContentType";
import { Params, Service } from "../../../../types/types";
import { readableDate } from "@/lib/readableDate";
import Link from "next/link";

export default async function Page(props: { params: Params }) {
    const slug = (await props.params).slug;

    const service: Service = await fetchContentType(
        "services",
        `filters[slug]=${slug}&populate=*`,
        true
    );

    return (
        <>
            <div className="mt-16">
                <Link
                    href="/services"
                    className="font-bold p-4 bg-maincolor rounded-xl"
                >
                    {"< Назад"}
                </Link>
                <Title
                    text={service.title}
                    size="2xl"
                    className="text-center my-8"
                />
                <div className="text-center mb-8 text-fadedText">
                    <p>{readableDate(service.createdAt)} | 123 Просмотров</p>
                </div>
                <div className="bg-post p-8 lg:p-16 flex justify-center rounded-3xl">
                    <BlocksRenderer content={service.text} />
                </div>
            </div>
        </>
    );
}
