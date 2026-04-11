import type { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";
import { toast } from "sonner";
import type { VideoProcessingOptions } from "../types";

export async function processVideo(
    ffmpeg: FFmpeg,
    videoUrl: string,
    options: VideoProcessingOptions,
): Promise<string> {
    try {
        const video = await fetchFile(videoUrl);
        await ffmpeg.writeFile("input.mp4", video);

        const outputFileName = options.isPreview ? "preview.mp4" : "output.mp4";
        const args = ["-i", "input.mp4", "-ss", options.startTime, "-to", options.endTime];

        if (options.quality && options.quality.width !== -1) {
            args.push(
                "-vf",
                `scale=${options.quality.width}:${options.quality.height}`,
                "-b:v",
                options.quality.bitrate,
            );
        } else {
            args.push("-c:v", "copy");
        }

        if (options.mute) {
            args.push("-an");
        } else {
            args.push("-c:a", "aac");
        }

        args.push(outputFileName);

        await ffmpeg.exec(args);
        const videoData = await ffmpeg.readFile(outputFileName);
        //TODO: Fix this type error
        const videoBlob = new Blob([videoData as any], { type: "video/mp4" });
        return URL.createObjectURL(videoBlob);
    } catch (error) {
        toast.error("Error processing video");
        console.error("Error processing video:", error);
        throw error;
    }
}

export function downloadVideo(url: string, originalFileName: string) {
    const a = document.createElement("a");
    a.href = url;
    a.download = `trimmed-${originalFileName}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
