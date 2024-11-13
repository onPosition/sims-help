export default function splitYoutubeUrl(url: string): {
    videoId: string;
    timecodeInt?: number;
} {
    const [videoId, timecode] = url.split("&t=");
    const timecodeInt = timecode ? parseInt(timecode, 10) : undefined;
    return { videoId, timecodeInt };
}
