import fetchContentType from "@/lib/fetchContentType";
import Header from "../components/shared/header";
import SearchResults from "../components/ui/serch-results";
import { Title } from "../components/ui/title";

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const filters = (await searchParams).q;
    const searchCategory = (await searchParams).category;
    const contentPosts = await fetchContentType(
        `${searchCategory}`,
        `filters[text][$contains]=${filters}&populate=*`
    );
    const contentVideos = await fetchContentType(
        `${searchCategory}`,
        `filters[title][$contains]=${filters}&populate=*`
    );

    return (
        <>
            <Header activeCategory="" />
            <Title text={`Результаты по запросу "${filters}"`} size="2xl" />
            {searchCategory === "posts" && (
                <SearchResults
                    posts={contentPosts}
                    searchCategory={searchCategory}
                />
            )}
            {searchCategory === "videos" && (
                <SearchResults
                    posts={contentVideos}
                    searchCategory={searchCategory}
                />
            )}
        </>
    );
}
