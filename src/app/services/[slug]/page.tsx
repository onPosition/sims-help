import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Title } from "@/app/components/ui/title";
import fetchContentType from "@/lib/fetchContentType";
import { Params, Service } from "../../../../types/types";
import Header from "@/app/components/shared/header";
import ServiceHero from "@/app/components/ui/service-hero";
import ReviewsGrid from "@/app/components/ui/reviews-grid";
import { RelatedServices } from "@/app/components/ui/related-services";
import ActionButton from "@/app/components/ui/action-button";

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
        `filters[slug]=${slug}&populate[0]=hero.image&populate[1]=about&populate[2]=price&populate[3]=reviews&populate[4]=relates_services.services`,
        true
    );
    console.log(service);
    if (!service) {
        return <h1>404</h1>;
    }
    return (
        <>
            <div>
                <Header navOnly={true} />
                <ServiceHero
                    title={service.hero.title}
                    subtitle={service.hero.subtitle}
                    image={service.hero.image.url}
                />
                <div className="flex flex-col lg:flex-row justify-between max-w-[1300px] m-auto mb-16 px-4 lg:px-0">
                    <div>
                        <Title size="2xl">{service.about.title}</Title>
                        <BlocksRenderer content={service.about.text} />
                    </div>
                    <div className="lg:border-l-[1px] border-[#636363] lg:pl-10 ">
                        {" "}
                        <div className="mb-4">
                            <Title size="2xl">{service.price.title}</Title>
                            <BlocksRenderer content={service.price.text} />
                        </div>
                        <ActionButton
                            label="Написать в бот помощи"
                            type="primary"
                            icon="/sims.png"
                            localImage={true}
                        />
                    </div>
                </div>
                <div className="max-w-[1300px] m-auto px-4 lg:px-0">
                    <Title size="2xl">Отзывы об услуге</Title>
                    <ReviewsGrid reviews={service.reviews} />
                </div>
                <RelatedServices
                    title="Другие услуги"
                    relatedServices={service.relates_services.services}
                />
            </div>
        </>
    );
}
