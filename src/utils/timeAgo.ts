export function timeAgo(dateString: string): string {
    const date: Date = new Date(dateString);
    const now: Date = new Date();
    const elapsed: number = now.getTime() - date.getTime();

    // Calculate time elapsed in seconds, minutes, hours, days, months, or years
    const elapsedSeconds = Math.floor(elapsed / 1000);
    const elapsedMinutes = Math.floor(elapsedSeconds / 60);
    const elapsedHours = Math.floor(elapsedMinutes / 60);
    const elapsedDays = Math.floor(elapsedHours / 24);
    const elapsedMonths = Math.floor(elapsedDays / 30);
    const elapsedYears = Math.floor(elapsedMonths / 12);

    // Determine the appropriate time unit and return a human-readable string
    if (elapsedSeconds < 60) {
        return `${elapsedSeconds} second${elapsedSeconds !== 1 ? 's' : ''} ago`;
    } else if (elapsedMinutes < 60) {
        return `${elapsedMinutes} minute${elapsedMinutes !== 1 ? 's' : ''} ago`;
    } else if (elapsedHours < 24) {
        return `${elapsedHours} hour${elapsedHours !== 1 ? 's' : ''} ago`;
    } else if (elapsedDays < 30) {
        return `${elapsedDays} day${elapsedDays !== 1 ? 's' : ''} ago`;
    } else if (elapsedMonths < 12) {
        return `${elapsedMonths} month${elapsedMonths !== 1 ? 's' : ''} ago`;
    } else {
        return `${elapsedYears} year${elapsedYears !== 1 ? 's' : ''} ago`;
    }
}
