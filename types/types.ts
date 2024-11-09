export interface Category {
    id: string;
    CategoryName: string;
    slug: string;
}

export interface Image {
    url: string;
    alternativeText: string;
}

export interface Article {
    Title: string;
    description: string;
    slug: string;
    content: string;
    //  dynamic_zone: any[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Cover: Image;
    categories: Category[];
    id: string;
    text: [];
    posts_categories: Category[];
}

export interface Video {
    video_categories: Category[];
    title: string;
    youtube_id: string;
    slug: string;
    cover: string;
    id: string;
    createdAt: string;
}
export interface Service {
    title: string;
    slug: string;
    cover: Image;
    text: [];
    id: string;
    createdAt: string;
}
