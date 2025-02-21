import Header from "./components/shared/header";
import { ArticlesRow } from "./components/ui/articles-row";
import Button from "./components/ui/button";
import Link from "next/link";

const page: React.FC = () => {
    return (
        <div className="page-content">
            <Header />

            <div className="max-w-[1200px] m-auto">
                <ArticlesRow title="Последние статьи" sortBy="updatedAt" />
                <ArticlesRow
                    relatedAtricles={[
                        "spektr-nastroenij-ot-lumpinou",
                        "kak-privesti-v-poryadok-papku-mods",
                    ]}
                    title="Популярные статьи"
                />
                <div className="flex justify-center mb-16">
                    <Link href={"/blog#posts"}>
                        <Button text="Показать все" disabled={true} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default page;
