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

export interface VideoProcessingOptions {
    startTime: string;
    endTime: string;
    mute: boolean;
    isPreview?: boolean;
    quality?: VideoQuality;
}

export interface VideoTrimmerProps {
    onProcessVideo: () => void | Promise<void>;
    onPreviewVideo: () => void;
    clearPreviewUrl: () => void;
    duration: [string, string];
    setDuration: (duration: [string, string]) => void;
    processing: boolean;
    quality: VideoQuality;
    onQualityChange: (quality: VideoQuality) => void;
    qualities: VideoQuality[];
    muted: boolean;
    onMuteToggle: (muted: boolean) => void;
}
