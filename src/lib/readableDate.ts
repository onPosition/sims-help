export function readableDate(date: string): string {
    return new Date(date)
        .toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "long",
            year: "numeric",
        })
        .slice(0, -3);
}
