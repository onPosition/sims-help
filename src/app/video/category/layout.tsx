import Header from "../../components/shared/header";

type BlogLayoutProps = {
    children: React.ReactNode;
    params: { slug: string };
};

export default function ArticlesLayout({ children, params }: BlogLayoutProps) {
    return (
        <div>
            {<Header activeCategory="video" />}
            {children}
        </div>
    );
}
