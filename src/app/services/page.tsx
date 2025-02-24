import React from "react";
import { Title } from "../components/ui/title";
import Header from "../components/shared/header";
import { Metadata } from "next";
import ServicesGrid from "../components/ui/services-grid";
import fetchContentType from "@/lib/fetchContentType";
import ReviewsGrid from "../components/ui/reviews-grid";

export const metadata: Metadata = {
    title: "Услуги поддержки",
    description: "Техническая поддержка, разбор папки mods",
};

export default async function Services() {
    const servicesHeaders: any = await fetchContentType(
        "services-page",
        `populate=*`,
        true
    );
    console.log(servicesHeaders);

    return (
        <>
            <Header />
            <div className="max-w-[1200px] m-auto flex">
                <div className="w-2/3">
                    <Title size="2xl">{servicesHeaders.services.title}</Title>
                    <p className="">{servicesHeaders.services.subtitle}</p>
                </div>
                <div className="flex w-1/3 justify-center content-center">
                    <img src="/arrow.png" className="w-24" />
                </div>
            </div>

            <ServicesGrid />
            <div className="max-w-[1200px] m-auto flex mt-16">
                <div className="w-2/3">
                    <Title size="2xl">{servicesHeaders.reviews.title}</Title>
                    <p className="">{servicesHeaders.reviews.subtitle}</p>
                </div>
                <div className="flex w-1/3 justify-center content-center">
                    <img src="/arrow.png" className="w-24" />
                </div>
            </div>
            <ReviewsGrid />
        </>
    );
}
