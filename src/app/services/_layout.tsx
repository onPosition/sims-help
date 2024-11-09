import Header from "../components/shared/header";

export default function ServicesLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Header activeCategory="services" />
            {children}
        </div>
    );
}
