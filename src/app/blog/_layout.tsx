import Header from "../components/shared/header";

type BlogLayoutProps = {
    children: React.ReactNode;
    params: { slug: string };
};

export default function ArticlesLayout({ children, params }: BlogLayoutProps) {
    console.log("Парамс слаг " + params.slug);

    return (
        <div className="container max-w-[1100px] mx-auto">
            {<Header activeCategory="articles" />}
            {children}
        </div>
    );
}
