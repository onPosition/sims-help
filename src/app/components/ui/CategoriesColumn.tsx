import fetchContentType from "@/lib/fetchContentType";
import React from "react";
import { Category } from "../../../../types/types";
import Link from "next/link";
import { useActivePath } from "@/lib/useActivePath";

interface CategoriesColumnProps {
    category: string;
}

export async function CategoriesColumn({ category }: CategoriesColumnProps) {
    const categories = await fetchContentType(`${category}-categories`, "");

    console.log(category);
    return (
        <div className="w-1/4">
            <ul>
                {categories.data.map((cat: Category) => (
                    <li key={cat.id}>
                        <Link
                            href={`/${
                                category === "posts" ? "blog" : "video"
                            }/category/${cat.slug}`}
                            className="before:content-['—'] before:mr-4 hover:text-maincolor"
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
