export interface Category {
    id: string;
    category_name: string;
    slug: string;
}

export interface Image {
    url: string;
    alternativeText: string;
}

export interface Article {
    description: string;
    slug: string;
    content: string;
    //  dynamic_zone: any[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    cover: Image;
    categories: Category[];
    id: string;
    text: [];
    post_category: Category[];
    youtube_id: string;
    title: string;
}

export interface Video {
    video_category: Category[];
    title: string;
    youtube_id: string;
    slug: string;
    cover: string;
    id: string;
    createdAt: string;
    updatedAt: string;
}
export interface Service {
    title: string;
    slug: string;
    cover: Image;
    text: [];
    id: string;
    createdAt: string;
    updatedAt: string;
}

export type Params = Promise<{ slug: string }>;
