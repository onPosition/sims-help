export function getYoutubeCover(id: string) {
    const cleanId = id.split("&")[0];
    return `https://img.youtube.com/vi/${cleanId}/hqdefault.jpg`;
}
