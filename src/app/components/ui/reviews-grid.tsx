"use client";

import { useState, useEffect } from "react";
import fetchContentType from "@/lib/fetchContentType";
import { readableDate } from "@/lib/readableDate";
import Image from "next/image";
import Button from "./button";

interface Review {
    id: number;
    name: string;
    date: string;
    stars: "five" | "four" | "three";
    text: string;
}

interface ReviewsGridProps {
    reviews?: Review[] | null;
}

export default function ReviewsGrid({
    reviews: propReviews,
}: ReviewsGridProps) {
    const [reviews, setReviews] = useState<Review[]>(propReviews || []);
    const [visibleCount, setVisibleCount] = useState(5); // Количество видимых отзывов
    const [loading, setLoading] = useState(!propReviews);

    useEffect(() => {
        if (!propReviews) {
            async function loadReviews() {
                const fetchedReviews = await fetchContentType(
                    "reviews",
                    "sort[0]=date:desc"
                );
                setReviews(fetchedReviews.data);
                setLoading(false);
            }
            loadReviews();
        }
    }, [propReviews]);

    const showMoreReviews = () => {
        setVisibleCount((prev) => prev + 5); // Загружаем еще 5 отзывов
    };

    if (loading) return <p className="text-center">Загрузка отзывов...</p>;

    return (
        <div className="flex flex-col mt-8 max-w-[1300px] m-auto mb-16 px-4 lg:px-0">
            <div className="reviews-grid w-full h-fit">
                {reviews.slice(0, visibleCount).map((review) => (
                    <div
                        className="p-4 lg:p-8 bg-card rounded-3xl mb-4 last-of-type:mb-0"
                        key={review.id}
                    >
                        <div className="flex justify-between mb-1 items-center">
                            <p className="font-bold text-xl">{review.name}</p>
                            <p className="italic">
                                {readableDate(review.date)}
                            </p>
                        </div>
                        <div className="flex space-x-1 mb-2">
                            {Array.from({
                                length:
                                    review.stars === "five"
                                        ? 5
                                        : review.stars === "four"
                                        ? 4
                                        : 3,
                            }).map((_, i) => (
                                <Image
                                    key={i}
                                    src="/star.png"
                                    alt="Звезда"
                                    width={24}
                                    height={24}
                                />
                            ))}
                        </div>
                        <p>{review.text}</p>
                    </div>
                ))}
            </div>

            {/* Кнопка "Показать ещё" */}
            {visibleCount < reviews.length && (
                <Button
                    text="Показать ещё"
                    handleClick={showMoreReviews}
                    className="w-fit m-auto mt-4"
                />
            )}
        </div>
    );
}
