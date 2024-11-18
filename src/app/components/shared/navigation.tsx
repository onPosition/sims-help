import Card from "../ui/card";

export default function Navigation() {
    return (
        <nav className="flex flex-row items-center justify-center gap-4">
            <Card title="Полезные Cтатьи" slug="/blog" />
            <Card title="Видео-Туториалы" slug="/video" />
            <Card title="Услуги поддержки" slug="/services" />
        </nav>
    );
}
