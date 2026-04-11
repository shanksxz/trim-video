const TIME_REGEX = /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/;

function padTimeUnit(n: number) {
    return n.toString().padStart(2, "0");
}

export function validateTimeFormat(time: string): boolean {
    return TIME_REGEX.test(time);
}

export function validateTimeRange(start: string, end: string): boolean {
    const [startHours, startMinutes, startSeconds] = start.split(":").map(Number);
    const [endHours, endMinutes, endSeconds] = end.split(":").map(Number);

    const startTotal = startHours * 3600 + startMinutes * 60 + startSeconds;
    const endTotal = endHours * 3600 + endMinutes * 60 + endSeconds;

    return startTotal < endTotal;
}

export function formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${padTimeUnit(hours)}:${padTimeUnit(minutes)}:${padTimeUnit(remainingSeconds)}`;
}

/** Parses `HH:MM:SS` into seconds. Returns 0 if the shape is wrong. */
export function parseTimeCodeToSeconds(timeStr: string): number {
    const parts = timeStr.split(":").map(Number);
    if (parts.length !== 3) return 0;
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
}
