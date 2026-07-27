/**
 * Get the difference in days between two dates
 */
export default (date, anotherDate) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    const firstDate = new Date(date).setHours(0, 0, 0, 0);
    const secondDate = new Date(anotherDate).setHours(0, 0, 0, 0);
    return Math.round(Math.abs((firstDate - secondDate) / oneDay));
};
