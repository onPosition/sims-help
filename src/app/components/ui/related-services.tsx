import fetchContentType from "@/lib/fetchContentType";
import { Article } from "../../../../types/types";
import PostCard from "./postCard";
import { Title } from "./title";
import Link from "next/link";
import Image from "next/image";
import { strapiImage } from "@/lib/strapiImage";

interface ArticlesRowProps {
    categorySlug?: string;
    title: string;
    sortBy?: string;
    filters?: string;
    id?: string;
    relatedServices?: { slug: string }[];
}

export async function RelatedServices({
    categorySlug,
    title,
    sortBy,
    filters,
    id,
    relatedServices,
}: ArticlesRowProps) {
    let posts = null;
    if (categorySlug) {
        posts = await fetchContentType(
            "posts",
            `filters[post_category][slug][$eq]=${categorySlug}&populate=*`
        );
    }
    if (sortBy) {
        posts = await fetchContentType(
            "posts",
            `sort[0]=${sortBy}:desc&populate=*`
        );
    }
    if (filters) {
        posts = await fetchContentType("posts", `filters[popular]&populate=*`);
    }
    if (relatedServices) {
        const query = relatedServices
            .map((service) => service.slug)
            .map((slug) => `filters[slug][$in]=${encodeURIComponent(slug)}`)
            .join("&");
        const fullQuery = `${query}&populate=*`;
        posts = await fetchContentType("services", fullQuery);
    }
    return (
        <section className="mb-16 max-w-[1300px] m-auto px-4 lg:px-0">
            <div className="flex justify-between items-center font-bold mb-4">
                <Title size="md">{title}</Title>
                <Link href={"/services/"} className="hover:text-maincolor">
                    {"Смотреть все >"}
                </Link>
            </div>
            <div className="grid grid-cols-1 w-full gap-4 lg:grid-cols-2">
                {posts.data.slice(0, 2).map((article: Article) => (
                    <Link href={`/services/${article.slug}`} key={article.id}>
                        <Image
                            src={strapiImage(article.cover.url)}
                            layout="responsive"
                            width={100}
                            height={50}
                            alt="Обложка услуги"
                            className="w-full h-full object-cover rounded-xl hover:scale-[101%] duration-300"
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
}
