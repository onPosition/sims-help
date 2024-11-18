import { Params } from "../../../../../types/types";
import Header from "@/app/components/shared/header";
import BlogGrid from "@/app/components/ui/blog-grid";

export default async function Page(props: { params: Params }) {
    const slug = (await props.params).slug;
    return (
        <>
            <Header />
            <BlogGrid blogCategory={slug} />
        </>
    );
}
