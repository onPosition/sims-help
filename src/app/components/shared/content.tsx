import React from "react";
import PostCard from "../ui/postCard";
import Link from "next/link";
import fetchContentType from "@/lib/fetchContentType";
import { Article, Service, Video } from "../../../../types/types";
import { getYoutubeCover } from "@/lib/getYoutubeCover";
import CategoriesColumn from "../ui/CategoriesColumn";
import BlogGrid from "../ui/blog-grid";
import VideoGrid from "../ui/video-grid";
import { strapiImage } from "@/lib/strapiImage";
import Image from "next/image";

interface ContentProps {
    activeCategory?: string;
    blogCategory?: string;
    videoCategory?: string;
}

async function getPosts() {
    const posts = await fetchContentType("posts", "populate=*");
    return posts;
}
async function getVideos() {
    const videos = await fetchContentType("videos", "populate=*");
    return videos;
}
async function getServices() {
    const services = await fetchContentType("services", "populate=*");
    return services;
}

export default async function Content({
    activeCategory,
    blogCategory,
}: ContentProps) {
    const posts = await getPosts();
    const videos = await getVideos();
    const services = await getServices();

    console.log(posts);
    if (activeCategory === "posts" && blogCategory) {
        return <BlogGrid posts={posts} blogCategory={blogCategory} />;
    }
    if (activeCategory === "video" && blogCategory) {
        return <VideoGrid videos={videos} videoCategory={blogCategory} />;
    }
    if (activeCategory === "posts") {
        return (
            <>
                <div className="flex flex-col lg:flex-row mt-8">
                    <CategoriesColumn category="posts" />
                    <div className="grid-cols-1 lg:grid-cols-3 w-full lg:w-3/4 grid gap-4">
                        {posts.data.map((post: Article) => (
                            <Link href={`/blog/${post.slug}`} key={post.id}>
                                <PostCard
                                    title={post.title}
                                    cover={post.cover.url}
                                    date={post.updatedAt}
                                    views={0}
                                    type="post"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <p className="text-fadedText w-full text-center mt-8">
                    {"Всего постов: " + posts.data.length}
                </p>
            </>
        );
    }

    if (activeCategory === "video") {
        return (
            <>
                <div className="flex flex-col lg:flex-row mt-8">
                    <CategoriesColumn
                        category="video"
                        activeCategory={blogCategory}
                    />
                    <div className="grid-cols-1 lg:grid-cols-3 w-full lg:w-3/4 grid gap-4">
                        {videos.data.map((video: Video) => (
                            <Link href={`/video/${video.slug}`} key={video.id}>
                                <PostCard
                                    title={video.title}
                                    cover={getYoutubeCover(video.youtube_id)}
                                    key={video.id}
                                    date={video.updatedAt}
                                    views={0}
                                    type="video"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <p className="text-fadedText w-full text-center mt-8">
                    {"Всего видео: " + videos.data.length}
                </p>
            </>
        );
    }

    if (activeCategory === "services") {
        return (
            <div className="flex mt-8">
                <div className="grid grid-rows-auto lg:grid-cols-3  w-full gap-4">
                    {services.data.map((service: Service) => (
                        <Link
                            href={`/services/${service.slug}`}
                            key={service.id}
                        >
                            <Image
                                src={strapiImage(service.cover.url)}
                                alt="bg"
                                width={0}
                                height={0}
                                sizes="100%"
                                className="w-full rounded-xl h-full object-cover scale-100 hover:scale-105 duration-300"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
    // ! OG
    // if (activeCategory === "services") {
    //     return (
    //         <div className="flex mt-8">
    //             <div className="grid-cols-1 lg:grid-cols-3 w-full grid gap-4">
    //                 {services.data.map((service: Service) => (
    //                     <Link
    //                         href={`/services/${service.slug}`}
    //                         key={service.id}
    //                     >
    //                         <PostCard
    //                             title={service.title}
    //                             cover={service.cover.url}
    //                             date={service.updatedAt}
    //                             views={0}
    //                             type="service"
    //                         />
    //                     </Link>
    //                 ))}
    //             </div>
    //         </div>
    //     );
    // }
}
