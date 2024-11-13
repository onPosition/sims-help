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

    console.log(activeCategory);
    return (
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <ul>
                <li>
                    <Link
                        href={`/${category === "posts" ? "blog" : "video"}`}
                        className={`before:content-['—'] before:mr-4 hover:text-maincolor font-bold ${
                            !activeCategory && "text-maincolor"
                        }`}
                    >
                        Все категории
                    </Link>{" "}
                </li>
                {categories.data.map((cat: Category) => (
                    <li key={cat.id}>
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
                            {cat.CategoryName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CategoriesColumn;
