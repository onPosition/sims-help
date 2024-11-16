import Content from "@/app/components/shared/content";
import { Params } from "../../../../../types/types";
import Header from "@/app/components/shared/header";

export default async function Page(props: { params: Params }) {
    const slug = (await props.params).slug;
    return (
        <>
            <Header activeCategory="articles" />
            <Content activeCategory="posts" blogCategory={slug} />
        </>
    );
}
