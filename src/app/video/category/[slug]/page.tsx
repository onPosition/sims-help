import Content from "@/app/components/shared/content";
import Header from "@/app/components/shared/header";

// export async function generateStaticParams() {
//     const posts = await getContent("posts");

//     return posts.data.map((post: { id: any }) => ({
//         id: post.id.toString(),
//     }));
// }

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;
    return (
        <>
            <Header activeCategory="video" />
            <Content activeCategory="video" blogCategory={slug} />
        </>
    );
}
