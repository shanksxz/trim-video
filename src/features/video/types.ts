export interface VideoQuality {
    label: string;
    width: number;
    height: number;
    bitrate: string;
}

export interface VideoPlayerState {
    startTime: number;
    endTime: number;
    videoDuration: number;
    processing: boolean;
    previewUrl: string | null;
    muted: boolean;
    selectedQuality: VideoQuality;
}

export type VideoPlayerAction =
    | {
          type: "SET_TIMES";
          payload: { startTime?: number; endTime?: number };
      }
    | { type: "SET_DURATION"; payload: number }
    | { type: "SET_PROCESSING"; payload: boolean }
    | { type: "SET_PREVIEW_URL"; payload: string | null }
    | { type: "SET_MUTED"; payload: boolean }
    | { type: "SET_QUALITY"; payload: VideoQuality }
    | { type: "INITIALIZE_VIDEO"; payload: { duration: number; muted: boolean } }
    | { type: "CLEAR_PREVIEW" };

/** Validated trim range in whole seconds (matches `HH:MM:SS` inputs). */
export type TrimRangeSeconds = {
    startSec: number;
    endSec: number;
};

export interface VideoProcessingOptions {
    startTime: string;
    endTime: string;
    mute: boolean;
    isPreview?: boolean;
    quality?: VideoQuality;
}

export interface VideoTrimmerProps {
    onProcessVideo: (range: TrimRangeSeconds) => void | Promise<void>;
    onPreviewVideo: (range: TrimRangeSeconds) => void;
    duration: [string, string];
    setDuration: (duration: [string, string]) => void;
    /** Source video length in seconds; used to reject start/end past the end of the file. */
    videoDurationSeconds?: number;
    processing: boolean;
    quality: VideoQuality;
    onQualityChange: (quality: VideoQuality) => void;
    qualities: VideoQuality[];
    muted: boolean;
    onMuteToggle: (muted: boolean) => void;
}
