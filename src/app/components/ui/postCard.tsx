import { strapiImage } from "@/lib/strapiImage";
import React from "react";
import Image from "next/image";

interface postCardProps {
    title: string;
    cover: string;
    date: string;
    views: number;
    type?: string;
}

export const PostCard: React.FC<postCardProps> = ({
    title,
    cover,
}) => {
    return (
        <div className="shadow-lg bg-postcard p-4  h-full rounded-xl flex flex-col items-center justify-between">
            <div className="w-full h-3/4 mb-2">
                <div
                    className={`
                        w-full
aspect-video
                        relative
                        mb-4
                        overflow-hidden
                        bg-[#f2f2f2]
                        rounded-xl
                    `}
                >
                    {cover && (
                        <Image
                            src={strapiImage(cover)}
                            alt="bg"
                            width={0}
                            height={0}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="w-full h-full object-cover scale-105 hover:scale-100 duration-300"
                        />
                    )}
                    {/* {type === "video" && (
                        <img
                            src="/video.svg"
                            alt="bg"
                            className="drop-shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        />
                    )} */}
                </div>
                <p className="font-bold">{title}</p>
            </div>
            {/* {type !== "service" && <PostMetadata date={date} views={views} />} */}
        </div>
    );
};

export default PostCard;
