import type { FFmpeg } from "@ffmpeg/ffmpeg";
import { useCallback, useEffect, useLayoutEffect, useReducer, useRef } from "react";
import { toast } from "sonner";
import { VIDEO_QUALITIES } from "../constants";
import { initialVideoPlayerState, videoPlayerReducer } from "../state";
import type { TrimRangeSeconds } from "../types";
import { downloadVideo, formatTime, processVideo, tryParseHmsToSeconds } from "../utils";

/**
 * Source file playback, optional preview blob, manual trim times, and FFmpeg export.
 */
export function useVideoPlayer(videoUrl: string, ffmpeg: FFmpeg, ffmpegLoaded: boolean) {
    const [state, dispatch] = useReducer(videoPlayerReducer, initialVideoPlayerState);
    const videoRef = useRef<HTMLVideoElement>(null);
    const previewUrlRef = useRef<string | null>(null);

    const activeVideoSrc = state.previewUrl ?? videoUrl;

    /**
     * Mirrors `state.previewUrl` into a ref so `onloadedmetadata` sees the latest value
     * without stale closures.
     */
    useEffect(() => {
        previewUrlRef.current = state.previewUrl;
    }, [state.previewUrl]);

    /**
     * Revokes the preview blob on unmount. Replacements use `setPreviewUrl` / `clearPreview`.
     */
    useEffect(() => {
        return () => {
            if (previewUrlRef.current) {
                URL.revokeObjectURL(previewUrlRef.current);
            }
        };
    }, []);

    const clearPreview = useCallback(() => {
        const prev = previewUrlRef.current;
        if (prev) {
            URL.revokeObjectURL(prev);
            previewUrlRef.current = null;
        }
        dispatch({ type: "CLEAR_PREVIEW" });
    }, []);

    const setPreviewUrl = useCallback((url: string) => {
        const prev = previewUrlRef.current;
        if (prev) {
            URL.revokeObjectURL(prev);
        }
        previewUrlRef.current = url;
        dispatch({ type: "SET_PREVIEW_URL", payload: url });
    }, []);

    /**
     * When **source** metadata loads, seed duration and default trim end. Skips while a
     * **preview** clip is active so we do not shrink trim state to the clip length.
     * Rebinds when `videoUrl` or FFmpeg readiness changes.
     */
    useLayoutEffect(() => {
        const el = videoRef.current;
        if (!el || !ffmpegLoaded) return;

        el.onloadedmetadata = () => {
            const v = videoRef.current;
            if (!v) return;
            if (previewUrlRef.current) return;

            const totalSeconds = Math.floor(v.duration ?? 0);
            dispatch({
                type: "INITIALIZE_VIDEO",
                payload: {
                    duration: totalSeconds,
                    muted: v.muted,
                },
            });
        };
    }, [ffmpegLoaded, videoUrl]);

    const runExport = useCallback(
        async (isPreview: boolean, range: TrimRangeSeconds) => {
            dispatch({ type: "SET_PROCESSING", payload: true });
            try {
                const outUrl = await processVideo(ffmpeg, videoUrl, {
                    startTime: formatTime(range.startSec),
                    endTime: formatTime(range.endSec),
                    mute: state.muted,
                    isPreview,
                    quality: state.selectedQuality,
                });

                if (isPreview) {
                    setPreviewUrl(outUrl);
                } else {
                    downloadVideo(outUrl, videoUrl);
                }
            } catch (error) {
                console.error("Error processing video:", error);
                toast.error("Failed to process video");
            } finally {
                dispatch({ type: "SET_PROCESSING", payload: false });
            }
        },
        [ffmpeg, videoUrl, state.muted, state.selectedQuality, setPreviewUrl],
    );

    const handleMuteToggle = useCallback((muted: boolean) => {
        dispatch({ type: "SET_MUTED", payload: muted });
        const el = videoRef.current;
        if (el) {
            el.muted = muted;
        }
    }, []);

    const setTrimFromTimeInputs = useCallback((next: [string, string]) => {
        const startTime = tryParseHmsToSeconds(next[0]);
        const endTime = tryParseHmsToSeconds(next[1]);
        if (startTime === null || endTime === null) return;

        dispatch({
            type: "SET_TIMES",
            payload: { startTime, endTime },
        });
    }, []);

    return {
        state,
        dispatch,
        videoRef,
        activeVideoSrc,
        clearPreview,
        runExport,
        handleMuteToggle,
        setTrimFromTimeInputs,
        qualities: VIDEO_QUALITIES,
    };
}
