/**
 * Checks if a date falls on a saturday or a sunday
 */
export default (date = new Date()) => {
    const dayOfWeek = new Date(date).getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
};
