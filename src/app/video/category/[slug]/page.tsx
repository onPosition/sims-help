import Header from "@/app/components/shared/header";
import VideoGrid from "@/app/components/ui/video-grid";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;
    return (
        <>
            <Header />
            <VideoGrid videoCategory={slug} />
        </>
    );
}
