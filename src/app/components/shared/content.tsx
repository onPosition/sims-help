import getContent from "@/lib/getContent";
import { headers } from "next/headers";
import React, { useEffect, useState } from "react";
import PostCard from "../ui/postCard";
import Link from "next/link";
import fetchContentType from "@/lib/fetchContentType";
import { Article, Service, Video } from "../../../../types/types";
import { getYoutubeCover } from "@/lib/getYoutubeCover";
import CategoriesColumn from "../ui/CategoriesColumn";
import { Title } from "../ui/title";
import BlogGrid from "../ui/blog-grid";

interface ContentProps {
    activeCategory?: string;
    blogCategory?: string;
}

export default async function Content({
    activeCategory,
    blogCategory,
}: ContentProps) {
    const posts = await fetchContentType("posts", "populate=*");
    const videos = await fetchContentType("videos", "populate=*");
    const services = await fetchContentType("services", "populate=*");
    // console.log(services.data[0]);
    // console.log(posts.data[0]);

    if (activeCategory === "posts" && blogCategory) {
        return <BlogGrid posts={posts} blogCategory={blogCategory} />;
    }
    if (activeCategory === "posts") {
        return (
            <div className="flex mt-8">
                <CategoriesColumn category="posts" />
                {/* <div className="flex w-3/4 flex-wrap box-border"> */}
                <div className="grid-cols-3 w-3/4 grid gap-4">
                    {posts.data.map((post: Article) => (
                        <Link href={`/blog/${post.slug}`} className="">
                            <PostCard
                                title={post.Title}
                                cover={post.Cover.url}
                                key={post.id}
                                date={post.createdAt}
                                views={0}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        );
    }

    if (activeCategory === "video") {
        return (
            <div className="flex mt-8">
                <CategoriesColumn category="video" />
                <div className="flex gap-4 w-3/4">
                    {videos.data.map((video: Video) => (
                        <Link href={`/video/${video.slug}`} className=" w-1/3">
                            <PostCard
                                title={video.title}
                                cover={getYoutubeCover(video.youtube_id)}
                                key={video.id}
                                date={video.createdAt}
                                views={0}
                                type="video"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        );
    }

    if (activeCategory === "services") {
        return (
            <div className="flex mt-8">
                <div className="grid-cols-3 w-full grid gap-4">
                    {services.data.map((service: Service) => (
                        <Link href={`/services/${service.slug}`} className="">
                            <PostCard
                                title={service.title}
                                cover={service.cover.url}
                                key={service.id}
                                date={service.createdAt}
                                views={0}
                                type="service"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}
