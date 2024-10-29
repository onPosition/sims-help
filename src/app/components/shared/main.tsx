import { headers } from "next/headers";
import React, { useEffect } from "react";

interface MainProps {
    activeCategory?: string;
}

let token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
let url = process.env.NEXT_PUBLIC_STRAPI_API_URL + "/api/posts?populate=*";

if (!url) {
    throw new Error(
        "NEXT_PUBLIC_STRAPI_API_URL environment variable is not set"
    );
}

try {
    let data = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
    });
    let posts = await data.json();
} catch (error) {
    console.error("Error fetching data:", error);
}

export default async function Page() {
    const headersList = await headers();
    const pathname = headersList.get("next-url");
    return (
        <div className=" bg-[#fdfdfd] h-[600px] p-16">
            <h2 className="text-3xl text-black">Статьи блога - {pathname}</h2>
            <ul>
                {posts.data.map((post: { id: number; Title: string }) => (
                    <li className="text-black" key={post.id}>
                        {post.Title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
