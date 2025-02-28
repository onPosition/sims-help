import fetchContentType from "@/lib/fetchContentType";
import React from "react";
import { Category } from "../../../../types/types";
import Link from "next/link";

interface CategoriesColumnProps {
    category: string;
    activeCategory?: string;
}

export async function CategoriesColumn({
    category,
    activeCategory,
}: CategoriesColumnProps) {
    const categories = await fetchContentType(`${category}-categories`, "");

    return (
        <div className=" w-full lg:w-1/4 h-fit mb-8 sticky top-0 lg:top-28 sticky-cat z-10 bg-background py-4 lg:p-0">
            <ul className="flex flex-col">
                <li style={{ order: 0 }}>
                    <Link
                        href={`/${category === "posts" ? "blog" : "video"}`}
                        className={`before:content-['—'] before:mr-4 hover:text-maincolor font-bold ${
                            !activeCategory && "text-maincolor"
                        }`}
                        scroll={false}
                    >
                        Все категории
                    </Link>{" "}
                </li>
                {categories.data.map((cat: Category) => (
                    <li key={cat.id} style={{ order: cat.order }}>
                        <Link
                            href={`/${
                                category === "posts" ? "blog" : "video"
                            }/category/${cat.slug}`}
                            className={
                                activeCategory === cat.slug
                                    ? "text-maincolor before:content-['—'] before:mr-4 hover:text-maincolor font-bold"
                                    : "before:content-['—'] before:mr-4 hover:text-maincolor font-bold"
                            }
                        >
                            {cat.category_name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CategoriesColumn;
