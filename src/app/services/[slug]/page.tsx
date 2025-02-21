import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Title } from "@/app/components/ui/title";
import fetchContentType from "@/lib/fetchContentType";
import { Params, Service } from "../../../../types/types";
import Image from "next/image";
import { strapiImage } from "@/lib/strapiImage";
import BackButton from "@/app/components/ui/back-button";

export async function generateMetadata({ params }) {
    const slug = (await params).slug;
    const service = await fetchContentType(
        "services",
        `filters[slug]=${slug}`,
        true
    );
    if (service) {
        return {
            title: `${service.title} | Sims Blog`,
        };
    }
    return;
}

export default async function Page(props: { params: Params }) {
    const slug = (await props.params).slug;

    const service: Service = await fetchContentType(
        "services",
        `filters[slug]=${slug}&populate=*`,
        true
    );
    if (!service) {
        return <h1>404</h1>;
    }
    return (
        <>
            <div className="mt-16">
                <BackButton />
                <Title size="2xl" className="text-center my-8">
                    {service.title}
                </Title>
                <div className="bg-post mt-8 p-8 lg:p-16 rounded-3xl mb-16 post-article">
                    <Image
                        src={strapiImage(service.cover.url)}
                        alt="bg"
                        width={0}
                        height={0}
                        sizes="100%"
                        className="w-full h-full object-cover"
                    />
                    <BlocksRenderer content={service.text} />
                </div>
            </div>
        </>
    );
}
