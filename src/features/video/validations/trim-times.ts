import { MIN_TRIM_GAP_SECONDS } from "../constants";
import { formatTime, tryParseHmsToSeconds } from "../utils/time-code";

export type TrimTimesValidationOptions = {
    /** When set and positive, start and end must lie within the video length. */
    videoDurationSeconds?: number;
    /** Defaults to {@link MIN_TRIM_GAP_SECONDS} from constants. */
    minGapSeconds?: number;
};

export type TrimTimesValidationResult =
    | { ok: true; startSec: number; endSec: number }
    | { ok: false; message: string };

/**
 * Validates a pair of `HH:MM:SS` strings for trimming: parse rules, ordering,
 * minimum gap, and optional fit inside the source video duration.
 */
export function validateTrimTimes(
    startRaw: string,
    endRaw: string,
    options: TrimTimesValidationOptions = {},
): TrimTimesValidationResult {
    const startSec = tryParseHmsToSeconds(startRaw);
    if (startSec === null) {
        return {
            ok: false,
            message:
                "Start time must be HH:MM:SS with two colons (e.g. 00:01:30). Minutes and seconds are 0–59.",
        };
    }

    const endSec = tryParseHmsToSeconds(endRaw);
    if (endSec === null) {
        return {
            ok: false,
            message:
                "End time must be HH:MM:SS with two colons (e.g. 00:02:00). Minutes and seconds are 0–59.",
        };
    }

    const minGap = options.minGapSeconds ?? MIN_TRIM_GAP_SECONDS;

    if (endSec <= startSec) {
        return { ok: false, message: "End time must be greater than start time." };
    }

    if (endSec - startSec < minGap) {
        return {
            ok: false,
            message: `Trim range must be at least ${minGap} seconds long.`,
        };
    }

    const maxSec = options.videoDurationSeconds;
    if (maxSec !== undefined && maxSec > 0) {
        if (startSec > maxSec) {
            return {
                ok: false,
                message: `Start is after the video ends (${formatTime(maxSec)}).`,
            };
        }
        if (endSec > maxSec) {
            return {
                ok: false,
                message: `End is after the video ends (${formatTime(maxSec)}).`,
            };
        }
    }

    return { ok: true, startSec, endSec };
}
