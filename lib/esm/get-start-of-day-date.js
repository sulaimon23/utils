/**
 * Sets date back to start of the day
 * use case is in date range queries
 */
export default (daysAgo, date = new Date()) => {
    const _date = new Date(date);
    _date.setDate(_date.getDate() - (daysAgo ?? 0));
    _date.setHours(0, 0, 0, 0);
    return _date;
};
