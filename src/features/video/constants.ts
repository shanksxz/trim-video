import type { VideoQuality } from "./types";

export const VIDEO_QUALITIES: VideoQuality[] = [
    { label: "Original", width: -1, height: -1, bitrate: "copy" },
    { label: "1080p", width: 1920, height: 1080, bitrate: "2M" },
    { label: "720p", width: 1280, height: 720, bitrate: "1M" },
    { label: "480p", width: 854, height: 480, bitrate: "800k" },
    { label: "360p", width: 640, height: 360, bitrate: "500k" },
];

/** Minimum length of the trimmed segment in seconds (passed to validation). */
export const MIN_TRIM_GAP_SECONDS = 0.5;
