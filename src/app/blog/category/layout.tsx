import Header from "../../components/shared/header";

type BlogLayoutProps = {
    children: React.ReactNode;
};

export default function ArticlesLayout({ children }: BlogLayoutProps) {
    return (
        <div className="container max-w-[1100px] mx-auto">
            {<Header activeCategory="articles" />}
            {children}
        </div>
    );
}
