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
                        const parts = image.url.split("1337");
                        const trimmedUrl = parts[1];
                        return (
                            <>
                                <Image
                                    src={strapiImage(trimmedUrl)}
                                    width={image.width}
                                    height={image.height}
                                    alt={image.alternativeText || ""}
                                    className={image.caption ? "mb-2" : "mb-8"}
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
