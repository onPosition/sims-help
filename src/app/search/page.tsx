import fetchContentType from "@/lib/fetchContentType";
import Content from "../components/shared/content";
import Header from "../components/shared/header";
import { ArticlesRow } from "../components/ui/articles-row";
import BlogGrid from "../components/ui/blog-grid";
import SearchResults from "../components/ui/serch-results";
import { Title } from "../components/ui/title";

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const filters = (await searchParams).q;
    const searchCategory = (await searchParams).category;
    const content = await fetchContentType(
        `${searchCategory}`,
        `filters[text][$contains]=${filters}&populate=*`
    );
    console.log(searchCategory);

    return (
        <>
            <Header activeCategory="" />
            <Title text={`Результаты по запросу "${filters}"`} size="2xl" />
            <SearchResults posts={content} searchCategory={searchCategory} />
        </>
    );
}
