import Header from "./components/shared/header";
import Main from "./components/shared/content";
import { ArticlesRow } from "./components/ui/articles-row";
import Button from "./components/ui/button";
import Link from "next/link";

const page: React.FC = () => {
    return (
        <div>
            <Header activeCategory="" />
            <Main />
            <ArticlesRow title="Последние статьи" sortBy="updatedAt" />
            <ArticlesRow filters="popular" title="Популярные статьи" />
            <div className="flex justify-center mb-16">
                <Link href={"/blog#posts"}>
                    <Button text="Показать все" disabled={true} />
                </Link>
            </div>
        </div>
    );
};

export default page;
