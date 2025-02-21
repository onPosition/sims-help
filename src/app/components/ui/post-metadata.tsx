import { readableDate } from "@/lib/readableDate";

export default function PostMetadata({
    date,
}: {
    date: string;
    views: number;
}) {
    return (
        <div className="text-center text-fadedText">
            <p>{readableDate(date)}</p>
        </div>
    );
}
