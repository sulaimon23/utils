export default (daysAgo, date = new Date()) => {
    const _date = new Date(date);
    _date.setDate(_date.getDate() - (daysAgo ?? 0));
    _date.setHours(23, 59, 59, 999);
    return _date;
};
