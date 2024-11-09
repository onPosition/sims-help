import Header from "./components/shared/header";
import Main from "./components/shared/content";
import { ArticlesRow } from "./components/ui/articles-row";
import Button from "./components/ui/button";
import Link from "next/link";

interface pageProps {}

export const page: React.FC<pageProps> = () => {
    return (
        <div>
            <Header activeCategory="" />
            <Main />
            <ArticlesRow
                categorySlug="obshhie-voprosy"
                title="Последние статьи"
            />
            <ArticlesRow
                categorySlug="cc-i-mody"
                title="Самые популярные статьи"
            />
            <div className="flex justify-center mb-16">
                <Link href={"/blog"}>
                    <Button text="Показать все" disabled={true} />
                </Link>
            </div>
        </div>
    );
};

export default page;
