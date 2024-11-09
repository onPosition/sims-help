import fetchContentType from "@/lib/fetchContentType";
import { Title } from "../../components/ui/title";
import articles from "@/app/blog/page";

type ViewProps = { title: string; text: string };

const dummyPost = {
    title: "Заголовок поста",
    text: "Текст поста Lorem22 ipsum dolor sit amet consectetur adipisicing elit. Distinctio facere illo officiis.",
};

export default async function View() {
    const articles = await fetchContentType("posts", "");

    return <div>{JSON.stringify(articles)}</div>;
}
