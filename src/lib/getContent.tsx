export default async function getContent(route: string): Promise<any> {
    let token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    let url = process.env.NEXT_PUBLIC_STRAPI_API_URL + `/api/${route}`;

    if (!url) {
        throw new Error(
            "NEXT_PUBLIC_STRAPI_API_URL environment variable is not set"
        );
    }
    try {
        let data = await fetch(url, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return data.json();
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
