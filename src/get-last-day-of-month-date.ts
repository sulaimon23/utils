/**
 * Gets the last day of the month of a date, at the very end of that day
 * Day 0 of the next month is the last day of the current month
 */
export default (date: Date = new Date()): Date => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59, 999);
}
