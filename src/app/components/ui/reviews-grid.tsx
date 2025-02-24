import fetchContentType from "@/lib/fetchContentType";
import { strapiImage } from "@/lib/strapiImage";
import Image from "next/image";
import Link from "next/link";
import { Service } from "../../../../types/types";

export default async function ReviewsGrid() {
    const reviews = await fetchContentType("reviews", "");
    console.log(reviews);
    return (
        <div className="flex mt-8 max-w-[1200px] m-auto">
            <div className="grid grid-rows-auto lg:grid-cols-3  w-full gap-4">
                {reviews.data.map((review: any) => (
                    <div className="p-4 bg-bgheader rounded-3xl">
                        <p className="font-bold">{review.name}</p>
                        <p>{review.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
