import Content from "@/app/components/shared/content";
import { Params } from "../../../../../types/types";

export default async function Page(props: { params: Params }) {
    const slug = (await props.params).slug;
    return (
        <>
            <Content activeCategory="posts" blogCategory={slug} />
        </>
    );
}
