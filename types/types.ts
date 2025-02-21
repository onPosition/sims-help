export interface Category {
    id: string;
    category_name: string;
    slug: string;
    order: number;
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
    dynamic_zone: any[];
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
export interface GlobalData {
    footer: any;
    hero: {
        title: string;
        subtitle: string;
        image: { url: string };
        button: {
            link: string;
            text: string;
            type: string;
            icon: { url: string };
            id: string;
        };
    };
    navigation: {
        navigation_items: [];
    };
}

export type NavigationItem = {
    id: number;
    title: string;
    slug: string;
    icon: { url: string };
};

export interface FooterData {
    footer: {
        logo: { url: string };
        button: [
            {
                link: string;
                text: string;
                type: string;
                icon: { url: string };
                id: string;
            }
        ];
        line: {};
    };
    navigation: {
        navigation_items: [];
    };
}

export type FooterLine = {
    id: number;
    text: string;
    link: string;
};

export type Params = Promise<{ slug: string }>;
