import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { AlertTriangle, Download, Eye, Volume2, VolumeX } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { VideoTrimmerProps } from "../types";
import { validateTrimTimes } from "../validations/trim-times";
import { formatTime } from "../utils";

export default function VideoTrimmer({
    onProcessVideo,
    duration,
    setDuration,
    processing,
    videoDurationSeconds,
    onPreviewVideo,
    quality,
    onQualityChange,
    qualities,
    muted,
    onMuteToggle,
}: VideoTrimmerProps) {
    const [startProp, endProp] = duration;
    const [startField, setStartField] = useState(startProp);
    const [endField, setEndField] = useState(endProp);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setStartField(startProp);
        setEndField(endProp);
    }, [startProp, endProp]);

    const commitIfValid = useCallback((): { startSec: number; endSec: number } | null => {
        const result = validateTrimTimes(startField, endField, { videoDurationSeconds });
        if (!result.ok) {
            setError(result.message);
            return null;
        }
        setError(null);
        const normalizedStart = formatTime(result.startSec);
        const normalizedEnd = formatTime(result.endSec);
        setStartField(normalizedStart);
        setEndField(normalizedEnd);
        setDuration([normalizedStart, normalizedEnd]);
        return { startSec: result.startSec, endSec: result.endSec };
    }, [startField, endField, setDuration, videoDurationSeconds]);

    const inputDisabled = processing;
    const actionsDisabled = processing;

    const handleBlur = () => {
        commitIfValid();
    };

    const handlePreview = () => {
        const range = commitIfValid();
        if (!range) return;
        onPreviewVideo(range);
    };

    const handleDownload = () => {
        const range = commitIfValid();
        if (!range) return;
        void onProcessVideo(range);
    };

    return (
        <TooltipProvider>
            <div className="flex flex-col gap-4">
                <Card>
                    <CardHeader className="pb-4">
                        <CardTitle className="text-lg font-medium flex items-center gap-2">
                            Video Settings
                            <Badge variant="secondary" className="text-xs">
                                FFmpeg
                            </Badge>
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">
                            Set start and end as HH:MM:SS (minutes and seconds 0–59), then preview
                            or download.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-3">
                            <Label className="text-sm font-medium">Video Quality</Label>

                            <div className="flex items-start gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                                <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                                <div className="text-sm text-yellow-800">
                                    <p className="font-medium mb-1">Performance Notice</p>
                                    <p className="text-xs">
                                        Higher quality settings may take longer to process on less
                                        powerful devices.
                                    </p>
                                </div>
                            </div>

                            <Select
                                value={quality.label}
                                disabled={inputDisabled}
                                onValueChange={(value) => {
                                    const newQuality = qualities.find((q) => q.label === value);
                                    if (newQuality) onQualityChange(newQuality);
                                }}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select quality" />
                                </SelectTrigger>
                                <SelectContent>
                                    {qualities.map((q) => (
                                        <SelectItem key={q.label} value={q.label}>
                                            <div className="flex items-center justify-between w-full">
                                                <span>{q.label}</span>
                                                {q.width !== -1 && (
                                                    <Badge
                                                        variant="outline"
                                                        className="ml-2 text-xs"
                                                    >
                                                        {q.width}x{q.height}
                                                    </Badge>
                                                )}
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex items-center justify-between">
                            <Label className="text-sm font-medium">Audio</Label>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant={muted ? "destructive" : "outline"}
                                        size="sm"
                                        disabled={inputDisabled}
                                        onClick={() => onMuteToggle(!muted)}
                                    >
                                        {muted ? (
                                            <VolumeX className="h-4 w-4 mr-2" />
                                        ) : (
                                            <Volume2 className="h-4 w-4 mr-2" />
                                        )}
                                        {muted ? "Muted" : "Enabled"}
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{muted ? "Enable audio" : "Mute audio"}</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="text-sm font-medium">Start Time</Label>
                                <Input
                                    type="text"
                                    value={startField}
                                    disabled={inputDisabled}
                                    onChange={(e) => {
                                        setStartField(e.target.value);
                                        setError(null);
                                    }}
                                    onBlur={handleBlur}
                                    placeholder="00:00:00"
                                    className={error ? "border-destructive" : ""}
                                    autoComplete="off"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm font-medium">End Time</Label>
                                <Input
                                    type="text"
                                    value={endField}
                                    disabled={inputDisabled}
                                    onChange={(e) => {
                                        setEndField(e.target.value);
                                        setError(null);
                                    }}
                                    onBlur={handleBlur}
                                    placeholder="00:00:00"
                                    className={error ? "border-destructive" : ""}
                                    autoComplete="off"
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
                                <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                                <p className="text-sm text-red-800">{error}</p>
                            </div>
                        )}
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                size="lg"
                                onClick={handlePreview}
                                disabled={actionsDisabled}
                                variant="outline"
                                className="w-full"
                            >
                                <Eye className="h-4 w-4 mr-2" />
                                {processing ? "Processing..." : "Preview"}
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Preview your trimmed video before downloading</p>
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                onClick={handleDownload}
                                size="lg"
                                disabled={actionsDisabled}
                                className="w-full"
                            >
                                <Download className="h-4 w-4 mr-2" />
                                {processing ? "Processing..." : "Download"}
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Process and download your trimmed video</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
            </div>
        </TooltipProvider>
    );
}
