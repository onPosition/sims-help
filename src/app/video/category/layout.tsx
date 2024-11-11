import Header from "../../components/shared/header";

export default function ArticlesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            {<Header activeCategory="video" />}
            {children}
        </div>
    );
}
