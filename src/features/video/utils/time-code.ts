function padTimeUnit(n: number) {
    return n.toString().padStart(2, "0");
}

const HMS_SEGMENTS = 3;
const MAX_HOURS = 999;

/**
 * Parses a strict `H:MM:SS` / `HH:MM:SS` code (exactly three `:`-separated parts).
 * Hours are any non-negative integer up to {@link MAX_HOURS}; minutes and seconds must be 0–59.
 * Returns `null` if the string is empty or not a valid clock time.
 */
export function tryParseHmsToSeconds(raw: string): number | null {
    const s = raw.trim();
    if (!s) return null;

    const parts = s.split(":").map((p) => p.trim());
    if (parts.length !== HMS_SEGMENTS) {
        return null;
    }

    for (const p of parts) {
        if (p === "" || !/^\d+$/.test(p)) {
            return null;
        }
    }

    const h = Number(parts[0]);
    const m = Number(parts[1]);
    const sec = Number(parts[2]);

    if (!Number.isFinite(h) || !Number.isFinite(m) || !Number.isFinite(sec)) {
        return null;
    }
    if (h < 0 || h > MAX_HOURS) return null;
    if (m < 0 || m > 59) return null;
    if (sec < 0 || sec > 59) return null;

    return h * 3600 + m * 60 + sec;
}

/**
 * @deprecated Prefer {@link tryParseHmsToSeconds}; this returns `0` when parsing fails.
 */
export function parseTimeCodeToSeconds(timeStr: string): number {
    return tryParseHmsToSeconds(timeStr) ?? 0;
}

export function formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${padTimeUnit(hours)}:${padTimeUnit(minutes)}:${padTimeUnit(remainingSeconds)}`;
}
