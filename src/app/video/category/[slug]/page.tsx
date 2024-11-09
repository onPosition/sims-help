import Content from "@/app/components/shared/content";
import { Title } from "@/app/components/ui/title";

// export async function generateStaticParams() {
//     const posts = await getContent("posts");

//     return posts.data.map((post: { id: any }) => ({
//         id: post.id.toString(),
//     }));
// }

type BlogPostProps = {
    params: { slug: string };
};

export default async function Page({ params }: BlogPostProps) {
    return (
        <>
            <Content activeCategory="video" blogCategory={params.slug} />
        </>
    );
}
