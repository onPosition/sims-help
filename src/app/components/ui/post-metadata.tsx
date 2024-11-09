import { readableDate } from "@/lib/readableDate";

export default function PostMetadata({
    date,
    views,
}: {
    date: string;
    views: number;
}) {
    return (
        <div className="text-center text-fadedText">
            <p>
                {readableDate(date)} | 👁️ {views}
            </p>
        </div>
    );
}
