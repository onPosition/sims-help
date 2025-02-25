"use client";
import { strapiImage } from "@/lib/strapiImage";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import React from "react";

export const BlockRendererClient = ({ content }: { content: any }) => {
    return (
        <div>
            <BlocksRenderer
                content={content}
                blocks={{
                    image: ({ image }) => {
                        const parts = image.url.split("/uploads/");
                        const trimmedUrl = "/uploads/" + parts[1];
                        return (
                            <>
                                <Image
                                    src={strapiImage(trimmedUrl)}
                                    width={image.width}
                                    height={image.height}
                                    alt={image.alternativeText || ""}
                                    className={image.caption ? "mb-2" : "mb-8"}
                                    decoding="sync"
                                    sizes="(max-width: 768px) 100vw"
                                />
                                <p className="text-center mt text-fadedText">
                                    {image.caption}
                                </p>
                            </>
                        );
                    },
                }}
            />
        </div>
    );
};

export default BlockRendererClient;
