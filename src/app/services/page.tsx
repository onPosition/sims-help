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
const reviews = await fetchContentType("reviews", "sort[0]=date:desc", false);

export default async function Services() {
    const servicesHeaders: any = await fetchContentType(
        "services-page",
        `populate=*`,
        true
    );

    return (
        <>
            <Header />
            <div
                className="max-w-[1300px] m-auto flex px-4 lg:px-0"
                id="services"
            >
                <div className="w-full lg:w-2/3">
                    <Title size="2xl">{servicesHeaders.services.title}</Title>
                    <p className="">{servicesHeaders.services.subtitle}</p>
                </div>
                <div className="hidden lg:flex w-1/3 justify-center content-center">
                    <img src="/arrow.png" className="w-24 " />
                </div>
            </div>

            <ServicesGrid />
            <div className="max-w-[1300px] m-auto flex mt-16 px-4 lg:px-0">
                <div className="w-full lg:w-2/3">
                    <Title size="2xl">{servicesHeaders.reviews.title}</Title>
                    <p className="">{servicesHeaders.reviews.subtitle}</p>
                </div>
                <div className="hidden lg:flex w-1/3 justify-center content-center">
                    <img src="/arrow.png" className="w-24 " />
                </div>
            </div>
            <ReviewsGrid reviews={reviews.data} />
        </>
    );
}
