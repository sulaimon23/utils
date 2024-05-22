/**
 * Checks if a date falls on a saturday or a sunday
 */
export default (date: Date = new Date()): boolean => {
    const dayOfWeek: number = new Date(date).getDay();

    return dayOfWeek === 0 || dayOfWeek === 6;
}
