import { useFfmpeg } from "@/hooks/use-ffmpeg";
import { useVideoPlayer } from "../hooks/video-player.hook";
import { formatTime } from "../utils";
import VideoTrimmer from "./video-trimmer";

export default function VideoPlayer({ videoUrl }: { videoUrl: string }) {
    const { ffmpeg, loaded } = useFfmpeg();

    const {
        state,
        dispatch,
        videoRef,
        activeVideoSrc,
        clearPreview,
        runExport,
        handleMuteToggle,
        setTrimFromTimeInputs,
        qualities,
    } = useVideoPlayer(videoUrl, ffmpeg, loaded);

    if (!loaded) {
        return <div className="flex h-dvh justify-center items-center">Loading FFmpeg...</div>;
    }

    return (
        <div className="flex flex-col md:flex-row gap-4 lg:gap-6 h-full">
            <div className="flex-1 md:w-[70%] space-y-4 lg:space-y-6">
                <div className="relative rounded-lg overflow-hidden bg-zinc-900">
                    <video
                        ref={videoRef}
                        className="w-full h-full aspect-video"
                        controls
                        src={activeVideoSrc}
                    />
                </div>
            </div>

            <div className="md:w-[30%] md:min-w-[350px] w-full">
                <VideoTrimmer
                    videoDurationSeconds={state.videoDuration}
                    muted={state.muted}
                    onMuteToggle={handleMuteToggle}
                    onProcessVideo={(range) => runExport(false, range)}
                    onPreviewVideo={(range) => runExport(true, range)}
                    duration={[formatTime(state.startTime), formatTime(state.endTime)]}
                    setDuration={(next) => {
                        setTrimFromTimeInputs(next);
                        clearPreview();
                    }}
                    processing={state.processing}
                    quality={state.selectedQuality}
                    onQualityChange={(quality) =>
                        dispatch({ type: "SET_QUALITY", payload: quality })
                    }
                    qualities={qualities}
                />
            </div>
        </div>
    );
}
