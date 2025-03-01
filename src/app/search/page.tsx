import fetchContentType from "@/lib/fetchContentType";
import Header from "../components/shared/header";
import SearchResults from "../components/ui/serch-results";
import { Title } from "../components/ui/title";

// export default async function Page({
//     searchParams,
// }: {
//     searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
// }) {
//     const filters = (await searchParams).q;
//     const searchCategory = (await searchParams).category;
//     const contentPosts = await fetchContentType(
//         `${searchCategory}`,
//         `filters[text][$contains]=${filters}&populate=*`
//     );
//     const contentVideos = await fetchContentType(
//         `${searchCategory}`,
//         `filters[title][$contains]=${filters}&populate=*`
//     );

//     return (
//         <>
//             <Header />
//             <div className="max-w-[1300px] m-auto px-4 lg:px-0">
//                 <Title size="2xl">{`${contentPosts.data.length} результатов по запросу «${filters}»`}</Title>
//                 {searchCategory === "posts" && (
//                     <SearchResults
//                         posts={contentPosts}
//                         searchCategory={searchCategory}
//                     />
//                 )}
//                 {searchCategory === "videos" && (
//                     <SearchResults
//                         posts={contentVideos}
//                         searchCategory={searchCategory}
//                     />
//                 )}
//             </div>
//         </>
//     );
// }
export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    const filters = (await searchParams).q;
    const searchCategory = (await searchParams).category;

    // Формируем разные фильтры в зависимости от категории
    const query =
        searchCategory === "videos"
            ? `filters[title][$contains]=${filters}&populate=*`
            : `filters[$or][0][text][$contains]=${filters}&filters[$or][1][title][$contains]=${filters}&populate=*`;

    const content = await fetchContentType(`${searchCategory}`, query);

    return (
        <>
            <Header />
            <div className="max-w-[1300px] m-auto px-4 lg:px-0" id="search">
                <Title size="2xl">{`${content.data.length} результатов по запросу «${filters}»`}</Title>
                <SearchResults
                    posts={content}
                    searchCategory={searchCategory}
                />
            </div>
        </>
    );
}
